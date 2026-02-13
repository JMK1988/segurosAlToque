import { Component, ChangeDetectionStrategy, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HugeiconsIconComponent } from '@hugeicons/angular';
import {
    Building04Icon,
    DeliveryTruck01Icon,
    Briefcase01Icon,
    Plant01Icon,
    ShippingTruck01Icon,
} from '@hugeicons/core-free-icons';

@Component({
    selector: 'app-enterprise-coverages',
    standalone: true,
    imports: [RouterLink, HugeiconsIconComponent],
    templateUrl: './enterprise-coverages.component.html',
    styleUrl: './enterprise-coverages.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnterpriseCoveragesComponent {
    goBack = output<void>();

    coverages = [
        {
            title: 'Comercio',
            desc: 'Respaldo integral para tu negocio.',
            icon: Building04Icon,
            link: '/cotizar',
            queryParams: { type: 'Comercio' },
        },
        {
            title: 'Flotas',
            desc: 'Soluciones corporativas para múltiples vehículos.',
            icon: DeliveryTruck01Icon,
            link: '/cotizar',
            queryParams: { type: 'Flotas' },
        },
        {
            title: 'ART',
            desc: 'Riesgos del trabajo para empresas y empleados.',
            icon: Briefcase01Icon,
            link: '/cotizar',
            queryParams: { type: 'ART' },
        },
        {
            title: 'Agro',
            desc: 'Cobertura para el campo, cosechas y maquinaria.',
            icon: Plant01Icon,
            link: '/cotizar',
            queryParams: { type: 'Agro' },
        },
        {
            title: 'Transporte',
            desc: 'Seguridad para tu carga y logística.',
            icon: ShippingTruck01Icon,
            link: '/cotizar',
            queryParams: { type: 'Transporte' },
        },
    ];
}
