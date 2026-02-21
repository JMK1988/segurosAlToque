import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HugeiconsIconComponent } from '@hugeicons/angular';
import { ArrowRight01Icon, Car01Icon } from '@hugeicons/core-free-icons';

import { VehiculosService } from '../../../../core/services/vehiculos.service';
import { CotizadorService } from '../../../../core/services/cotizador.service';

@Component({
    selector: 'app-car-quote',
    imports: [ReactiveFormsModule, HugeiconsIconComponent],
    templateUrl: './car-quote.component.html',
    styleUrl: './car-quote.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarQuoteComponent {
    private readonly fb = inject(FormBuilder);
    private readonly router = inject(Router);
    readonly vehiculosService = inject(VehiculosService);
    private readonly cotizadorService = inject(CotizadorService);

    // Icons
    readonly arrowRightIcon = ArrowRight01Icon;
    readonly carIcon = Car01Icon;

    // Signals del servicio
    readonly marcas = this.vehiculosService.marcas;
    readonly modelos = this.vehiculosService.modelos;
    readonly versiones = this.vehiculosService.versiones;
    readonly cargandoMarcas = this.vehiculosService.cargandoMarcas;
    readonly cargandoModelos = this.vehiculosService.cargandoModelos;
    readonly cargandoVersiones = this.vehiculosService.cargandoVersiones;

    readonly years = Array.from(
        { length: new Date().getFullYear() - 1989 },
        (_, i) => new Date().getFullYear() - i
    );

    readonly quoteForm = this.fb.group({
        brand: ['', Validators.required],
        model: ['', Validators.required],
        version: ['', Validators.required],
        year: ['', Validators.required],
    });

    onMarcaChange(event: Event): void {
        const select = event.target as HTMLSelectElement;
        this.quoteForm.patchValue({ model: '', version: '' });
        this.vehiculosService.seleccionarMarca(select.value);
    }

    onModeloChange(event: Event): void {
        const select = event.target as HTMLSelectElement;
        this.quoteForm.patchValue({ version: '' });
        this.vehiculosService.seleccionarModelo(select.value);
    }

    onSubmit(): void {
        if (this.quoteForm.invalid) {
            this.quoteForm.markAllAsTouched();
            return;
        }

        const val = this.quoteForm.value;

        // Guardamos los datos seleccionados para el siguiente paso
        this.cotizadorService.guardarDatosWidget({
            marca: val.brand!,
            modelo: val.model!,
            version: val.version!,
            anio: Number(val.year!),
        });

        // Navegamos al formulario completo
        this.router.navigate(['/cotizar']);
    }
}
