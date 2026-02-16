
import { Component, ChangeDetectionStrategy, inject, signal, Inject, PLATFORM_ID, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-exit-intent-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './exit-intent-modal.component.html',
    styleUrl: './exit-intent-modal.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExitIntentModalComponent implements AfterViewInit, OnDestroy {
    isVisible = signal(false);

    private document = inject(DOCUMENT);
    private platformId = inject(PLATFORM_ID);
    private removeListener: (() => void) | null = null;

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            if (!sessionStorage.getItem('exitIntentShown')) {
                const onMouseLeave = (e: MouseEvent) => {
                    if (e.clientY <= 0) {
                        this.showModal();
                    }
                };

                this.document.addEventListener('mouseleave', onMouseLeave);
                this.removeListener = () => this.document.removeEventListener('mouseleave', onMouseLeave);
            }
        }
    }

    ngOnDestroy() {
        if (this.removeListener) {
            this.removeListener();
        }
    }

    showModal() {
        this.isVisible.set(true);
        sessionStorage.setItem('exitIntentShown', 'true');
        if (this.removeListener) {
            this.removeListener(); // Don't show again
        }
    }

    closeModal() {
        this.isVisible.set(false);
    }

    openWhatsapp() {
        window.open('https://wa.me/5491112345678', '_blank'); // Replace with actual number
        this.closeModal();
    }
}
