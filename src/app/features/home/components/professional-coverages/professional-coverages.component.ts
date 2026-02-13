import { Component, ChangeDetectionStrategy, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HugeiconsIconComponent } from '@hugeicons/angular';
import {
    TaxiIcon,
    HealthIcon,
} from '@hugeicons/core-free-icons';

@Component({
    selector: 'app-professional-coverages',
    standalone: true,
    imports: [RouterLink, HugeiconsIconComponent],
    templateUrl: './professional-coverages.component.html',
    styleUrl: './professional-coverages.component.scss', // Reusing SCSS logic is better, but user requested separation. I'll create a mixin or just duplicate for now to be safe and fast.
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessionalCoveragesComponent {
    goBack = output<void>();

    coverages = [
        {
            title: 'Taxi / Remis',
            desc: 'Cobertura específica para transporte de pasajeros.',
            icon: TaxiIcon,
            link: '/cotizar',
            queryParams: { type: 'TaxiRemis' },
        },
        {
            title: 'Accidentes Personales',
            desc: 'Cobertura ante imprevistos para trabajadores independientes.',
            icon: HealthIcon,
            link: '/cotizar',
            queryParams: { type: 'AccidentesPersonales' },
        },
    ];
}
