import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LanguageService, CircuitTranslation } from '../../services/language.service';

@Component({
  selector: 'app-circuits',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './circuits.component.html',
  styleUrl: './circuits.component.css'
})
export class CircuitsComponent {
  router = inject(Router);
  langService = inject(LanguageService);
  activeCircuitId = 'circuit-1';
  expandedDayIndex: number | null = 0;

  get circuits(): CircuitTranslation[] {
    return this.langService.circuits;
  }

  get currentCircuit(): CircuitTranslation {
    return this.circuits.find(c => c.id === this.activeCircuitId) || this.circuits[0];
  }

  selectCircuit(id: string) {
    this.activeCircuitId = id;
    this.expandedDayIndex = 0;
  }

  toggleDay(index: number) {
    this.expandedDayIndex = this.expandedDayIndex === index ? null : index;
  }

  bookCircuitWhatsApp(circuitName: string) {
    this.router.navigate(['/contact'], {
      queryParams: { tour: this.activeCircuitId || circuitName },
      fragment: 'booking-form'
    });
  }

  inquireTransportWhatsApp(optionTitle: string) {
    let message = `Bonjour Medade Travel, je souhaite me renseigner sur votre service : "${optionTitle}". Pouvez-vous me donner les détails des véhicules et tarifs ?`;
    if (this.langService.currentLang() === 'en') {
      message = `Hello Medade Travel, I would like information about your service: "${optionTitle}". Could you please provide vehicle details and prices?`;
    } else if (this.langService.currentLang() === 'ar') {
      message = `السلام عليكم مداد ترافيل، أود الاستفسار عن خدمتكم: "${optionTitle}". المرجو إفادتي بتفاصيل السيارات والأسعار المتاحة.`;
    }
    window.open(`https://wa.me/212637053131?text=${encodeURIComponent(message)}`, '_blank');
  }
}
