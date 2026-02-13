import { Component, ChangeDetectionStrategy, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HugeiconsIconComponent } from '@hugeicons/angular';
import { CoverageComparatorComponent } from '../../../../shared/components/coverage-comparator/coverage-comparator.component';
import {
    Car01Icon,
    Motorbike01Icon,
    Car02Icon,
    House01Icon,
    SmartPhone01Icon,
    Airplane01Icon,
    Key01Icon,
    BankIcon,
} from '@hugeicons/core-free-icons';

@Component({
    selector: 'app-personal-coverages',
    standalone: true,
    imports: [RouterLink, HugeiconsIconComponent, CoverageComparatorComponent],
    templateUrl: './personal-coverages.component.html',
    styleUrl: './personal-coverages.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalCoveragesComponent {
    goBack = output<void>();
    showComparator = signal(false);

    openComparator() {
        this.showComparator.set(true);
    }

    coverages = [
        {
            title: 'Autos',
            desc: 'Protección completa para tu vehículo particular.',
            icon: Car01Icon,
            link: '/cotizar',
            queryParams: { type: 'Autos' },
        },
        {
            title: 'Motos',
            desc: 'Seguridad para vos y tu motocicleta.',
            icon: Motorbike01Icon,
            link: '/cotizar',
            queryParams: { type: 'Motos' },
        },
        {
            title: 'Autos Clásicos',
            desc: 'Cuidado especial para vehículos de colección.',
            icon: Car02Icon,
            link: '/cotizar',
            queryParams: { type: 'AutosClasicos' },
        },
        {
            title: 'Hogar',
            desc: 'Protegé tu casa y tus bienes más preciados.',
            icon: House01Icon,
            link: '/cotizar',
            queryParams: { type: 'Hogar' },
        },
        {
            title: 'Celular',
            desc: 'Asegurá tu smartphone contra robo y daños.',
            icon: SmartPhone01Icon,
            link: '/cotizar',
            queryParams: { type: 'Celular' },
        },
        {
            title: 'Asistencia al Viajero',
            desc: 'Viajá tranquilo con cobertura médica mundial.',
            icon: Airplane01Icon,
            link: '/cotizar',
            queryParams: { type: 'AsistenciaViajero' },
        },
        {
            title: 'Alquiler',
            desc: 'Garantías y seguros para inquilinos y propietarios.',
            icon: Key01Icon,
            link: '/cotizar',
            queryParams: { type: 'Alquiler' },
        },
        {
            title: 'Retiro y Ahorro',
            desc: 'Planificá tu futuro con seguridad financiera.',
            icon: BankIcon,
            link: '/cotizar',
            queryParams: { type: 'RetiroAhorro' },
        },
    ];
}
