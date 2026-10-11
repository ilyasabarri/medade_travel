import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService, CircuitTranslation } from '../../services/language.service';
import { CircuitsPageData, ContactPageData } from '../../services/language-pages.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  langService = inject(LanguageService);

  primaryPhone = '+212 6 37 05 31 31';
  secondaryPhone = '+212 6 37 17 09 09';
  whatsappNumber = '212637053131';

  activeCircuitId = 'circuit-1';
  expandedDayIndex: { [key: string]: number | null } = {
    'circuit-1': 0,
    'circuit-2': 0,
    'circuit-3': 0
  };

  bookingForm = {
    name: '',
    phone: '',
    travelDate: '',
    guests: '2',
    serviceType: '',
    transportOption: '',
    notes: ''
  };

  get circuits(): CircuitTranslation[] {
    return this.langService.circuits;
  }

  get currentCircuit(): CircuitTranslation {
    return this.circuits.find(c => c.id === this.activeCircuitId) || this.circuits[0];
  }

  get circuitsPage(): CircuitsPageData {
    return this.langService.circuitsPage;
  }

  get contactPage(): ContactPageData {
    return this.langService.contactPage;
  }

  ngOnInit() {
    this.syncFormDefaults();
  }

  syncFormDefaults() {
    if (this.contactPage.circuitOptions?.length > 0) {
      if (this.activeCircuitId === 'circuit-1') {
        this.bookingForm.serviceType = this.contactPage.circuitOptions[0]?.val || '';
      } else if (this.activeCircuitId === 'circuit-2') {
        this.bookingForm.serviceType = this.contactPage.circuitOptions[1]?.val || '';
      } else if (this.activeCircuitId === 'circuit-3') {
        this.bookingForm.serviceType = this.contactPage.circuitOptions[2]?.val || '';
      }
    }
    if (!this.bookingForm.transportOption && this.contactPage.transportOptions?.length > 0) {
      this.bookingForm.transportOption = this.contactPage.transportOptions[0]?.val || '';
    }
  }

  selectCircuit(id: string) {
    this.activeCircuitId = id;
    if (this.expandedDayIndex[id] === undefined) {
      this.expandedDayIndex[id] = 0;
    }
    this.syncFormDefaults();
  }

  toggleDay(circuitId: string, dayIdx: number) {
    if (this.expandedDayIndex[circuitId] === dayIdx) {
      this.expandedDayIndex[circuitId] = null;
    } else {
      this.expandedDayIndex[circuitId] = dayIdx;
    }
  }

  isDayExpanded(circuitId: string, dayIdx: number): boolean {
    return this.expandedDayIndex[circuitId] === dayIdx;
  }

  scrollToSection(sectionId: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    if (typeof document !== 'undefined') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  bookCircuitWhatsApp(circuitId: string) {
    this.selectCircuit(circuitId);
    this.scrollToSection('booking');
  }

  bookCircuitDirect(circuit: CircuitTranslation) {
    const lang = this.langService.currentLang();
    let msg = `Bonjour Medade Travel, je souhaite réserver le "${circuit.name}". Pouvez-vous me confirmer les disponibilités et tarifs ?`;
    if (lang === 'en') {
      msg = `Hello Medade Travel, I would like to book "${circuit.name}". Could you please confirm availability and rates?`;
    } else if (lang === 'ar') {
      msg = `السلام عليكم مداد ترافيل، أود حجز "${circuit.name}". المرجو إفادتي بالتوافر وأفضل سعر مباشر. شكراً لكم.`;
    }

    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  }

  inquireTransportWhatsApp(optionTitle: string) {
    const lang = this.langService.currentLang();
    let msg = `Bonjour Medade Travel, je souhaite me renseigner sur votre service de transport : "${optionTitle}". Pouvez-vous me communiquer vos disponibilités et tarifs ?`;
    if (lang === 'en') {
      msg = `Hello Medade Travel, I would like information about your transport option: "${optionTitle}". Could you please provide vehicle options and rates?`;
    } else if (lang === 'ar') {
      msg = `السلام عليكم مداد ترافيل، أود الاستفسار عن خدمة النقل: "${optionTitle}". المرجو إفادتي بالتفاصيل والأسعار. شكراً لكم.`;
    }

    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    try {
      const parts = dateStr.split('-');
      if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
      }
      return dateStr;
    } catch {
      return dateStr;
    }
  }

  get guestLabel(): string {
    const opt = this.contactPage.guestOptions?.find(
      g => g.val === this.bookingForm.guests || g.label === this.bookingForm.guests
    );
    return opt ? opt.label : (this.bookingForm.guests || '2 personnes');
  }

  get circuitLabel(): string {
    const opt = this.contactPage.circuitOptions?.find(
      c => c.val === this.bookingForm.serviceType || c.label === this.bookingForm.serviceType
    );
    return opt ? opt.label : (this.bookingForm.serviceType || this.contactPage.circuitOptions[0]?.label || '');
  }

  get transportLabel(): string {
    const opt = this.contactPage.transportOptions?.find(
      t => t.val === this.bookingForm.transportOption || t.label === this.bookingForm.transportOption
    );
    return opt ? opt.label : (this.bookingForm.transportOption || this.contactPage.transportOptions[0]?.label || '');
  }

  submitBookingWhatsApp() {
    const formToSubmit = {
      ...this.bookingForm,
      travelDate: this.bookingForm.travelDate ? this.formatDate(this.bookingForm.travelDate) : '',
      guests: this.guestLabel,
      serviceType: this.circuitLabel,
      transportOption: this.transportLabel
    };

    const msg = this.contactPage.waMessageTemplate(formToSubmit);
    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/${this.whatsappNumber}?text=${encoded}`;

    if (typeof window !== 'undefined') {
      const win = window.open(url, '_blank');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        window.location.href = url;
      }
    }
  }

  openDirectWhatsApp() {
    let msg = 'Bonjour Medade Travel, je souhaiterais des informations sur vos 3 circuits au Maroc et vos disponibilités.';
    if (this.langService.currentLang() === 'en') {
      msg = 'Hello Medade Travel, I would like information about your 3 Morocco tours and availability.';
    } else if (this.langService.currentLang() === 'ar') {
      msg = 'السلام عليكم مداد ترافيل، أود الاستفسار عن جولاتكم السياحية الثلاث بالمغرب والتوافر لديكم.';
    }
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  }

  callDirect(phone: string) {
    window.location.href = `tel:${phone.replace(/\s+/g, '')}`;
  }
}
