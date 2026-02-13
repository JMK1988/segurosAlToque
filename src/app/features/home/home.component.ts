import { Component, ChangeDetectionStrategy, inject, OnInit, signal, effect } from '@angular/core';
import { CarQuoteComponent } from './components/car-quote/car-quote.component';
import { PersonalCoveragesComponent } from './components/personal-coverages/personal-coverages.component';
import { ProfessionalCoveragesComponent } from './components/professional-coverages/professional-coverages.component';
import { EnterpriseCoveragesComponent } from './components/enterprise-coverages/enterprise-coverages.component';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { HugeiconsIconComponent } from '@hugeicons/angular';
import {
  Search01Icon,
  Shield01Icon,
  HeadsetIcon,
  CalculateIcon,
  Award01Icon,
  WhatsappIcon,
  House01Icon,
  Briefcase01Icon,
  Building04Icon,
} from '@hugeicons/core-free-icons';

import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    HugeiconsIconComponent,
    CarQuoteComponent,
    PersonalCoveragesComponent,
    ProfessionalCoveragesComponent,
    EnterpriseCoveragesComponent,
    FadeInDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private meta = inject(Meta);
  private titleService = inject(Title);
  private route = inject(ActivatedRoute);

  selectedCategory = signal<'personal' | 'professional' | 'enterprise' | null>(null);

  constructor() {
    // Listen for query params to set initial category selection
    this.route.queryParams.subscribe((params) => {
      const category = params['category'];
      if (category && ['personal', 'professional', 'enterprise'].includes(category)) {
        this.selectedCategory.set(category as 'personal' | 'professional' | 'enterprise');

        // Scroll to coverages if we are navigating via category change
        // We use a small timeout to let the view update if needed, and to ensure the scroll happens after navigation
        setTimeout(() => {
          const element = document.getElementById('coberturas');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    });

    // Listen for fragments to scroll to section
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  ngOnInit() {
    this.titleService.setTitle('Seguros Al Toque | El mejor precio, siempre.');
    this.meta.updateTag({
      name: 'description',
      content:
        'Seguros de manera ágil y personalizada, con asesoramiento claro y humano. Encontré el mejor precio, siempre.',
    });
  }

  // Icons for template
  calculateIcon = CalculateIcon;
  headsetIcon = HeadsetIcon;
  awardIcon = Award01Icon;
  whatsappIcon = WhatsappIcon;

  features = [
    {
      icon: Search01Icon,
      title: 'Atención Personalizada',
      desc: 'Analizamos tus necesidades reales para ofrecerte el plan que mejor se adapte a vos y tu presupuesto.',
    },
    {
      icon: Shield01Icon,
      title: 'Respaldo Total',
      desc: 'Trabajamos con las compañías líderes del mercado nacional e internacional para garantizar tu seguridad.',
    },
    {
      icon: HeadsetIcon,
      title: 'Gestión de Siniestros',
      desc: 'Te acompañamos en todo el proceso de reclamo para que no tengas que preocuparte por trámites complejos.',
    },
  ];

  categories = [
    {
      id: 'personal',
      title: 'Personales',
      desc: 'Protegé lo que más querés: tu auto, tu casa, tu familia.',
      icon: House01Icon,
    },
    {
      id: 'professional',
      title: 'Profesionales',
      desc: 'Respaldamos tu actividad profesional e independiente.',
      icon: Briefcase01Icon, // Using Briefcase for Professional
    },
    {
      id: 'enterprise',
      title: 'Empresas',
      desc: 'Soluciones integrales para pymes y grandes empresas.',
      icon: Building04Icon,
    },
  ];

  stats = [
    { value: '+10', label: 'Años de Trayectoria', icon: Award01Icon },
    { value: '+10k', label: 'Clientes Asegurados', icon: Shield01Icon },
    { value: '24/7', label: 'Atención y Emergencias', icon: HeadsetIcon },
  ];

  selectCategory(category: 'personal' | 'professional' | 'enterprise') {
    this.selectedCategory.set(category);
  }

  clearSelection() {
    this.selectedCategory.set(null);
  }
}
