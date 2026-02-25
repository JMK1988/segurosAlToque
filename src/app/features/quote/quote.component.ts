import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  effect,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HugeiconsIconComponent } from '@hugeicons/angular';
import { WhatsappIcon } from '@hugeicons/core-free-icons';

import { VehiculosService } from '../../core/services/vehiculos.service';
import { CotizadorService } from '../../core/services/cotizador.service';
import { CoberturaResultado } from '../../core/models/cotizador.models';
import { VehicleVersion } from '../../core/models/ma-cotizador.models';

@Component({
  selector: 'app-quote',
  imports: [ReactiveFormsModule, HugeiconsIconComponent],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  readonly vehiculosService = inject(VehiculosService);
  private readonly cotizadorService = inject(CotizadorService);

  readonly whatsappIcon = WhatsappIcon;

  // ── Signals ──────────────────────────────────────────────
  readonly marcas = this.vehiculosService.marcas;
  readonly modelos = this.vehiculosService.modelos;
  readonly versiones = this.vehiculosService.versiones;

  readonly cargandoMarcas = this.vehiculosService.cargandoMarcas;
  readonly cargandoModelos = this.vehiculosService.cargandoModelos;
  readonly cargandoVersiones = this.vehiculosService.cargandoVersiones;

  readonly resultados = this.cotizadorService.resultados;
  readonly hayCargando = this.cotizadorService.hayCargando;
  readonly todasLasCoberturas = this.cotizadorService.todasLasCoberturas;
  readonly hayError = this.cotizadorService.hayError;
  readonly busquedaRealizada = signal(false);
  readonly filtroSeleccionado = signal<'TODOS' | 'RC' | 'TC' | 'TR'>('TODOS');
  readonly coberturaDetalle = signal<CoberturaResultado | null>(null);
  readonly mensajeCarga = signal('Estamos comparando las mejores aseguradoras...');

  private readonly mensajes = [
    'Estamos comparando las mejores aseguradoras...',
    'Analizando tu perfil de riesgo...',
    'Buscando beneficios adicionales para vos...',
    'Calculando precios finales con impuestos...',
    'Casi listo! Estamos ordenando los resultados...',
  ];

  readonly mostrarResultados = computed(() => this.todasLasCoberturas().length > 0);

  readonly coberturasFiltradas = computed(() => {
    const todas = this.todasLasCoberturas();
    const filtro = this.filtroSeleccionado();

    if (filtro === 'TODOS') return todas;

    return todas.filter((c) => {
      const desc = c.descripcion?.toUpperCase() || '';
      if (filtro === 'RC') return desc.includes('RESPONSABILIDAD CIVIL') || desc.includes('RCA');

      if (filtro === 'TC') {
        return (
          desc.includes('TERCEROS') ||
          desc.includes('T34') ||
          desc.includes('T41') ||
          desc.includes('T85') ||
          desc.includes('T80') ||
          desc.includes('T42') ||
          desc.includes('M BASICA') ||
          desc.includes('M PLUS')
        );
      }

      if (filtro === 'TR') {
        return (
          desc.includes('TODO RIESGO') ||
          (desc.includes('D') && desc.length < 5) ||
          desc.includes('D21') ||
          desc.includes('D22') ||
          desc.includes('D23')
        );
      }
      return true;
    });
  });

  // ── Formulario ────────────────────────────────────────────
  readonly cotizarForm = this.fb.group({
    marca: ['', Validators.required],
    modelo: [{ value: '', disabled: true }, Validators.required],
    version: [{ value: '', disabled: true }, Validators.required],
    anio: [
      new Date().getFullYear(),
      [Validators.required, Validators.min(1990), Validators.max(new Date().getFullYear() + 1)],
    ],
    codigoPostal: ['', [Validators.required, Validators.minLength(4)]],
    gnc: [false],
    uso: [1, Validators.required],
  });

  readonly anios = Array.from(
    { length: new Date().getFullYear() - 1989 },
    (_, i) => new Date().getFullYear() - i,
  );

  constructor() {
    // Efecto para rotar mensajes de carga
    effect((onCleanup) => {
      if (this.hayCargando() && !this.mostrarResultados()) {
        let i = 0;
        const interval = setInterval(() => {
          i = (i + 1) % this.mensajes.length;
          this.mensajeCarga.set(this.mensajes[i]);
        }, 2500);
        onCleanup(() => clearInterval(interval));
      }
    });

    effect(() => {
      const pre = this.cotizadorService.datosWidget();
      if (pre) {
        this.vehiculosService.seleccionarMarca(pre.marca);
        this.vehiculosService.seleccionarModelo(pre.modelo);

        this.cotizarForm.get('modelo')?.enable({ emitEvent: false });
        this.cotizarForm.get('version')?.enable({ emitEvent: false });

        this.cotizarForm.patchValue(
          {
            marca: pre.marca,
            modelo: pre.modelo,
            version: pre.version,
            anio: pre.anio,
          },
          { emitEvent: false },
        );
      }
    });
  }

  ngOnInit(): void {
    this.cotizarForm.get('marca')!.valueChanges.subscribe((marca) => {
      this.busquedaRealizada.set(false);
      if (marca) {
        this.vehiculosService.seleccionarMarca(marca);
        this.cotizarForm.get('modelo')?.enable();
        this.cotizarForm.patchValue({ modelo: '', version: '' }, { emitEvent: false });
      } else {
        this.cotizarForm.get('modelo')?.disable();
        this.cotizarForm.get('version')?.disable();
      }
    });

    this.cotizarForm.get('modelo')!.valueChanges.subscribe((modelo) => {
      this.busquedaRealizada.set(false);
      if (modelo) {
        this.vehiculosService.seleccionarModelo(modelo);
        this.cotizarForm.get('version')?.enable();
        this.cotizarForm.patchValue({ version: '' }, { emitEvent: false });
      } else {
        this.cotizarForm.get('version')?.disable();
      }
    });
  }

  onCotizar(): void {
    if (this.cotizarForm.invalid) {
      this.cotizarForm.markAllAsTouched();
      return;
    }

    const val = this.cotizarForm.getRawValue();

    // Limpieza de CP: Solo nos quedamos con los CHARS que sean dígitos
    const cpLimpio = (val.codigoPostal || '').toString().replace(/\D/g, '');
    const cpFinal = Number(cpLimpio.substring(0, 4)); // Tomamos los primeros 4

    if (!cpFinal || cpLimpio.length < 4) {
      console.warn('[QuoteComponent] CP Inválido o incompleto:', val.codigoPostal);
      this.cotizarForm.get('codigoPostal')?.setErrors({ invalid: true });
      return;
    }

    console.log('[QuoteComponent] Enviando cotización...', { ...val, cpFinal });
    this.busquedaRealizada.set(true);

    this.cotizadorService.cotizar({
      localidad: { codigo_postal: cpFinal },
      vehiculo: {
        infoauto: Number(val.version),
        anio: Number(val.anio),
        uso: Number(val.uso),
        gnc: val.gnc ?? false,
        rastreo: 0,
      },
      cuotas: 1,
      tipo_pago: 'D',
    });
  }

  nuevaCotizacion(): void {
    this.busquedaRealizada.set(false);
    this.cotizadorService.limpiar();
    this.cotizadorService.guardarDatosWidget(null);
    this.cotizarForm.reset({ anio: new Date().getFullYear(), uso: 1, gnc: false });
    this.cotizarForm.get('modelo')?.disable();
    this.cotizarForm.get('version')?.disable();
  }

  formatPremio(valor: number): string {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(valor);
  }

  getWhatsappUrl(descripcion: string, aseguradora?: string, premio: number = 0): string {
    const cia = aseguradora || 'la aseguradora';
    const text = `Hola! Me interesa la cobertura *${descripcion}* de ${cia} por ${this.formatPremio(premio)} / mes. ¿Me pueden dar más información?`;
    return `https://wa.me/5491112345678?text=${encodeURIComponent(text)}`;
  }

  abrirDetalles(c: CoberturaResultado): void {
    this.coberturaDetalle.set(c);
    document.body.style.overflow = 'hidden';
  }

  cerrarDetalles(): void {
    this.coberturaDetalle.set(null);
    document.body.style.overflow = 'auto';
  }
}
