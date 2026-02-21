import { inject, Injectable, resource, computed } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { signal } from '@angular/core';
import { MaCotizadorService } from './ma-cotizador.service';
import { VehicleVersion } from '../models/ma-cotizador.models';

@Injectable({ providedIn: 'root' })
export class VehiculosService {
    private readonly api = inject(MaCotizadorService);

    private readonly _marcaSeleccionada = signal<string>('');
    private readonly _modeloSeleccionado = signal<string>('');

    /** 
     * Whitelist: Marcas de autos con presencia en Argentina (Nuevos y Usados).
     * Esto filtra automáticamente motos, camiones pesados y marcas internacionales sin mercado local.
     */
    private readonly MARCAS_AUTOS_ARGENTINA = new Set([
        'ALFA ROMEO', 'AUDI', 'BAIC', 'BMW', 'BYD', 'CHANGAN', 'CHERY', 'CHEVROLET',
        'CHRYSLER', 'CITROEN', 'CORADIR', 'DACIA', 'DAEWOO', 'DAIHATSU', 'DFSK',
        'DODGE', 'DS AUTOMOBILES', 'FERRARI', 'FIAT', 'FORD', 'FOTON', 'GEELY',
        'GREAT WALL', 'HAVAL', 'HONDA', 'HUMMER', 'HYUNDAI', 'IKA', 'ISUZU',
        'IVECO', 'JAC', 'JAGUAR', 'JEEP', 'JETOUR', 'JMC', 'KIA', 'KYC',
        'LAMBORGHINI', 'LAND ROVER', 'LEXUS', 'LIFAN', 'MASERATI', 'MAZDA',
        'MERCEDES BENZ', 'MINI', 'MITSUBISHI', 'NISSAN', 'PEUGEOT', 'PORSCHE',
        'RAM', 'RENAULT', 'ROVER', 'SAAB', 'SEAT', 'SERO ELECTRIC', 'SHINERAY',
        'SMART', 'SSANGYONG', 'SUBARU', 'SUZUKI', 'TATA', 'TOYOTA', 'VOLKSWAGEN', 'VOLVO'
    ]);

    /** Helper para extraer y filtrar marcas */
    private extractList(resp: any, filterCars = false): any[] {
        let list: any[] = [];
        if (Array.isArray(resp)) {
            list = resp;
        } else {
            list = resp?.value || resp?.Value || [];
        }

        if (filterCars) {
            // Solo dejamos las marcas que están en nuestra lista blanca de Argentina
            return list.filter(m => this.MARCAS_AUTOS_ARGENTINA.has(m.toUpperCase()));
        }

        return list;
    }

    /** Marcas: Filtradas por mercado argentino */
    private readonly _marcasResource = resource({
        loader: async () => {
            try {
                const resp = await firstValueFrom(this.api.getMarcas());
                return this.extractList(resp, true);
            } catch (err) {
                console.error('[VehiculosService] Error cargando marcas:', err);
                return [];
            }
        }
    });

    /** Modelos */
    private readonly _modelosResource = resource({
        params: () => this._marcaSeleccionada(),
        loader: async ({ params: marca }) => {
            if (!marca) return [];
            try {
                const resp = await firstValueFrom(this.api.getModelos(marca));
                return this.extractList(resp);
            } catch (err) {
                console.error('[VehiculosService] Error cargando modelos:', err);
                return [];
            }
        }
    });

    /** Versiones */
    private readonly _versionesResource = resource({
        params: () => ({
            marca: this._marcaSeleccionada(),
            modelo: this._modeloSeleccionado(),
        }),
        loader: async ({ params }) => {
            if (!params.marca || !params.modelo) return [];
            try {
                const resp = await firstValueFrom(this.api.getVersiones(params.marca, params.modelo));
                return this.extractList(resp);
            } catch (err) {
                console.error('[VehiculosService] Error cargando versiones:', err);
                return [];
            }
        }
    });

    // ── Signals públicos ───────────────────────────────────────

    readonly marcas = computed(() => this._marcasResource.value() ?? []);
    readonly modelos = computed(() => this._modelosResource.value() ?? []);
    readonly versiones = computed(() => this._versionesResource.value() ?? []);

    readonly cargandoMarcas = this._marcasResource.isLoading;
    readonly cargandoModelos = this._modelosResource.isLoading;
    readonly cargandoVersiones = this._versionesResource.isLoading;

    // ── Métodos de selección ──────────────────────────────────

    seleccionarMarca(marca: string): void {
        this._marcaSeleccionada.set(marca);
        this._modeloSeleccionado.set('');
    }

    seleccionarModelo(modelo: string): void {
        this._modeloSeleccionado.set(modelo);
    }

    cargarMarcas(): void { }
    cargarModelos(marca: string): void { this.seleccionarMarca(marca); }
    cargarVersiones(marca: string, modelo: string): void {
        this._marcaSeleccionada.set(marca);
        this._modeloSeleccionado.set(modelo);
    }
}
