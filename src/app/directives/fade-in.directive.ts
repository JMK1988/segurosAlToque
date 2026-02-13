import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
    selector: '[appFadeIn]',
    standalone: true
})
export class FadeInDirective implements OnInit {
    private element = inject(ElementRef);

    ngOnInit() {
        this.element.nativeElement.style.opacity = '0';
        this.element.nativeElement.style.transform = 'translateY(20px)';
        this.element.nativeElement.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.element.nativeElement.style.opacity = '1';
                    this.element.nativeElement.style.transform = 'translateY(0)';
                    observer.unobserve(this.element.nativeElement);
                }
            });
        }, {
            threshold: 0.1
        });

        observer.observe(this.element.nativeElement);
    }
}
