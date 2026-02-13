import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HugeiconsIconComponent } from '@hugeicons/angular';
import {
    Home01Icon,
    CalculateIcon,
    HeadsetIcon,
} from '@hugeicons/core-free-icons';

@Component({
    selector: 'app-mobile-nav',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, HugeiconsIconComponent],
    templateUrl: './mobile-nav.component.html',
    styleUrl: './mobile-nav.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileNavComponent {
    homeIcon = Home01Icon;
    quoteIcon = CalculateIcon;
    contactIcon = HeadsetIcon;
}
