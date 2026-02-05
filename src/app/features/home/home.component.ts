import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private meta = inject(Meta);
  private titleService = inject(Title);

  ngOnInit() {
    this.titleService.setTitle('Seguros Al Toque | Tu Productor de Confianza');
    this.meta.updateTag({
      name: 'description',
      content:
        'Cotizá tu seguro de auto, hogar, vida o ART al mejor precio. Atención personalizada y las mejores compañías del mercado.',
    });
  }

  insuranceTypes = [
    {
      title: 'Auto',
      icon: '🚗',
      desc: 'Protección total para tu vehículo.',
      link: '/cotizar', // Changed to cotizar for direct action or keep /seguros if listing exists
      queryParams: { type: 'Auto' },
      color: 'bg-blue-50',
    },
    {
      title: 'Hogar',
      icon: '🏠',
      desc: 'Tu casa segura ante cualquier imprevisto.',
      link: '/cotizar',
      queryParams: { type: 'Hogar' },
      color: 'bg-green-50',
    },
    {
      title: 'Vida',
      icon: '❤️',
      desc: 'Seguridad para vos y tu familia.',
      link: '/cotizar',
      queryParams: { type: 'Vida' },
      color: 'bg-red-50',
    },
    {
      title: 'Comercio',
      icon: '🏢',
      desc: 'Respaldo para tu negocio.',
      link: '/cotizar',
      queryParams: { type: 'Comercio' },
      color: 'bg-yellow-50',
    },
    {
      title: 'ART',
      icon: '👷',
      desc: 'Cobertura laboral obligatoria.',
      link: '/cotizar',
      queryParams: { type: 'ART' },
      color: 'bg-orange-50',
    },
    {
      title: 'Bici/Pati',
      icon: '🚲',
      desc: 'Movilidad sustentable protegida.',
      link: '/cotizar',
      queryParams: { type: 'Bici/Pati' },
      color: 'bg-purple-50',
    },
  ];
}
