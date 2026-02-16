
import { Component, ChangeDetectionStrategy, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-floating-whatsapp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-whatsapp.component.html',
  styleUrl: './floating-whatsapp.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingWhatsappComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  phoneNumber = '5493482645934'; // Replace with actual number
  defaultMessage = 'Hola, tengo una consulta sobre seguros.';
  
  currentMessage = signal(this.defaultMessage);
  
  whatsappUrl = signal('');

  constructor() {
    // React to navigation changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateMessage();
    });
    
    effect(() => {
      const msg = encodeURIComponent(this.currentMessage());
      this.whatsappUrl.set(`https://wa.me/${this.phoneNumber}?text=${msg}`);
    });
  }

  private updateMessage() {
    const url = this.router.url;
    
    if (url.includes('hogar') || url.includes('type=hogar')) {
      this.currentMessage.set('Hola, estoy viendo seguros de Hogar y tengo una duda...');
    } else if (url.includes('auto') || url.includes('type=auto')) {
      this.currentMessage.set('Hola, estoy interesado en asegurar mi auto.');
    } else if (url.includes('vida') || url.includes('type=vida')) {
      this.currentMessage.set('Hola, quisiera más información sobre seguros de Vida.');
    } else {
      this.currentMessage.set(this.defaultMessage);
    }
  }
}
