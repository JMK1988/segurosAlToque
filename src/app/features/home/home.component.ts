import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { HugeiconsIconComponent } from '@hugeicons/angular';
import {
  Search01Icon,
  Shield01Icon,
  HeadsetIcon,
  CalculateIcon,
  Award01Icon,
  WhatsappIcon,
  Car01Icon,
  Motorbike01Icon,
  Car02Icon,
  TaxiIcon,
  House01Icon,
  Building04Icon,
  HealthIcon,
  BankIcon,
  Airplane01Icon,
  Key01Icon,
  SmartPhone01Icon,
  DeliveryTruck01Icon,
  Briefcase01Icon,
  Plant01Icon,
  ShippingTruck01Icon,
} from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HugeiconsIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private meta = inject(Meta);
  private titleService = inject(Title);

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

  insuranceTypes = [
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
      title: 'Taxi / Remis',
      desc: 'Cobertura específica para transporte de pasajeros.',
      icon: TaxiIcon,
      link: '/cotizar',
      queryParams: { type: 'TaxiRemis' },
    },
    {
      title: 'Hogar',
      desc: 'Protegé tu casa y tus bienes más preciados.',
      icon: House01Icon,
      link: '/cotizar',
      queryParams: { type: 'Hogar' },
    },
    {
      title: 'Comercio',
      desc: 'Respaldo integral para tu negocio.',
      icon: Building04Icon,
      link: '/cotizar',
      queryParams: { type: 'Comercio' },
    },
    {
      title: 'Accidentes Personales',
      desc: 'Cobertura ante imprevistos para trabajadores.',
      icon: HealthIcon,
      link: '/cotizar',
      queryParams: { type: 'AccidentesPersonales' },
    },
    {
      title: 'Retiro y Ahorro',
      desc: 'Planificá tu futuro con seguridad financiera.',
      icon: BankIcon,
      link: '/cotizar',
      queryParams: { type: 'RetiroAhorro' },
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
      title: 'Celular',
      desc: 'Asegurá tu smartphone contra robo y daños.',
      icon: SmartPhone01Icon,
      link: '/cotizar',
      queryParams: { type: 'Celular' },
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
