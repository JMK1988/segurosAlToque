
import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-call-me-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './call-me-form.component.html',
    styleUrl: './call-me-form.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallMeFormComponent {
    private fb = inject(FormBuilder);

    submitted = signal(false);
    loading = signal(false);

    callForm = this.fb.group({
        phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Basic validation for 10 digits
    });

    onSubmit() {
        if (this.callForm.valid) {
            this.loading.set(true);
            // Simulate API call
            setTimeout(() => {
                console.log('Call request sent for:', this.callForm.value.phone);
                this.submitted.set(true);
                this.loading.set(false);
                this.callForm.reset();
            }, 1500);
        } else {
            this.callForm.markAllAsTouched();
        }
    }
}
