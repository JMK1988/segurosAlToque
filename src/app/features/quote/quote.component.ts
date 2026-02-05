import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteComponent {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);

  insuranceTypes = ['Auto', 'Hogar', 'Vida', 'Comercio', 'ART', 'Bici/Pati', 'Otro'];

  submitted = signal(false);

  quoteForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    insuranceType: ['Auto', [Validators.required]],
    message: [''],
  });

  constructor() {
    this.route.queryParams.subscribe((params) => {
      if (params['type']) {
        const type = this.insuranceTypes.find(
          (t) => t.toLowerCase() === params['type'].toLowerCase(),
        );
        if (type) {
          this.quoteForm.patchValue({ insuranceType: type });
        }
      }
    });
  }

  onSubmit() {
    if (this.quoteForm.valid) {
      console.log('Form Submitted', this.quoteForm.value);
      this.submitted.set(true);

      // Here we would integrate with Firebase or WhatsApp
      // For WhatsApp integration:
      const val = this.quoteForm.value;
      const text = `Hola, quiero cotizar un seguro de *${val.insuranceType}*. Mi nombre es ${val.name}.`;
      const url = `https://wa.me/5491112345678?text=${encodeURIComponent(text)}`;

      // window.open(url, '_blank'); // Uncomment to auto-open
    } else {
      this.quoteForm.markAllAsTouched();
    }
  }
}
