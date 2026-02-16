
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class SeoService {

    constructor(
        @Inject(DOCUMENT) private doc: Document,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    setStructuredData(data: any): void {
        if (isPlatformBrowser(this.platformId)) {
            const script = this.doc.createElement('script');
            script.type = 'application/ld+json';
            script.text = JSON.stringify(data);
            this.doc.head.appendChild(script);
        }
    }

    // Example for InsuranceAgency schema
    setInsuranceAgencySchema(): void {
        const schema = {
            "@context": "https://schema.org",
            "@type": "InsuranceAgency",
            "name": "Seguros Al Toque",
            "image": "https://seguros-al-toque.com/logo.png", // Replace with real URL
            "url": "https://seguros-al-toque.com",
            "telephone": "+5491112345678",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle Falsa 123",
                "addressLocality": "Buenos Aires",
                "postalCode": "1000",
                "addressCountry": "AR"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": -34.603722,
                "longitude": -58.381592
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
            },
            "sameAs": [
                "https://www.facebook.com/seguros-al-toque",
                "https://www.instagram.com/seguros-al-toque"
            ]
        };
        this.setStructuredData(schema);
    }
}
