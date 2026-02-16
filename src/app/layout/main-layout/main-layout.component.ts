import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';
import { FloatingWhatsappComponent } from '../../shared/components/floating-whatsapp/floating-whatsapp.component';
import { ExitIntentModalComponent } from '../../shared/components/exit-intent-modal/exit-intent-modal.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    MobileNavComponent,
    FloatingWhatsappComponent,
    ExitIntentModalComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit() {
    this.seoService.setInsuranceAgencySchema();
  }
}
