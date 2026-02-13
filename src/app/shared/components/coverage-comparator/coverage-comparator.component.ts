import { Component, ChangeDetectionStrategy, output } from '@angular/core';
import { HugeiconsIconComponent } from '@hugeicons/angular';
import { Cancel01Icon, CheckmarkCircle02Icon } from '@hugeicons/core-free-icons';

@Component({
    selector: 'app-coverage-comparator',
    standalone: true,
    imports: [HugeiconsIconComponent],
    templateUrl: './coverage-comparator.component.html',
    styleUrl: './coverage-comparator.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoverageComparatorComponent {
    close = output<void>();

    check = CheckmarkCircle02Icon;
    cancel = Cancel01Icon;

    coverages = [
        { name: 'Responsabilidad Civil', basic: true, standard: true, premium: true },
        { name: 'Robo e Incendio Total', basic: false, standard: true, premium: true },
        { name: 'Robo e Incendio Parcial', basic: false, standard: true, premium: true },
        { name: 'Destrucción Total', basic: false, standard: true, premium: true },
        { name: 'Cristales y Cerraduras', basic: false, standard: 'Hasta tope', premium: 'Ilimitado' },
        { name: 'Granizo', basic: false, standard: 'Hasta tope', premium: 'Ilimitado' },
        { name: 'Daños Parciales por Accidente', basic: false, standard: false, premium: true },
    ];
}
