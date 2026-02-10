import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HugeiconsIconComponent } from '@hugeicons/angular';
import { ArrowRight01Icon, Car01Icon } from '@hugeicons/core-free-icons';

@Component({
    selector: 'app-car-quote',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, HugeiconsIconComponent],
    templateUrl: './car-quote.component.html',
    styleUrl: './car-quote.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarQuoteComponent {
    quoteForm: FormGroup;
    currentStep = signal(1);

    // Icons
    arrowRightIcon = ArrowRight01Icon;
    carIcon = Car01Icon;

    // Mock Data
    years = Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - i);
    brands = ['Volkswagen', 'Chevrolet', 'Ford', 'Fiat', 'Toyota', 'Renault', 'Peugeot'];
    models: string[] = [];
    versions: string[] = [];

    constructor(private fb: FormBuilder) {
        this.quoteForm = this.fb.group({
            year: ['', Validators.required],
            brand: ['', Validators.required],
            model: ['', Validators.required],
            version: ['', Validators.required]
        });

        // Mock dependent dropdowns
        this.quoteForm.get('brand')?.valueChanges.subscribe(() => {
            this.models = ['Gol', 'Vento', 'Polo', 'Virtus']; // Mock
            this.quoteForm.patchValue({ model: '', version: '' });
        });

        this.quoteForm.get('model')?.valueChanges.subscribe(() => {
            this.versions = ['Trendline', 'Comfortline', 'Highline', 'GTS']; // Mock
            this.quoteForm.patchValue({ version: '' });
        });
    }

    onSubmit() {
        if (this.quoteForm.valid) {
            console.log('Cotizando...', this.quoteForm.value);
            // Here navigate to full quote or show result
        }
    }
}
