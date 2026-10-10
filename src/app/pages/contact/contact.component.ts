import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { ContactPageData } from '../../services/language-pages.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  langService = inject(LanguageService);

  primaryPhone = '+212 6 37 05 31 31';
  secondaryPhone = '+212 6 37 17 09 09';
  whatsappNumber = '212637053131';

  bookingForm = {
    name: '',
    phone: '',
    email: '',
    travelDate: '',
    guests: '2',
    serviceType: '',
    transportOption: '',
    notes: ''
  };

  get contactPage(): ContactPageData {
    return this.langService.contactPage;
  }

  get selectedService(): string {
    return this.bookingForm.serviceType || this.contactPage.circuitOptions[0].val;
  }

  get selectedTransport(): string {
    return this.bookingForm.transportOption || this.contactPage.transportOptions[0].val;
  }

  toggleFaq(index: number) {
    const list = this.contactPage.faqList;
    if (list[index]) {
      list[index].open = !list[index].open;
    }
  }

  submitBookingWhatsApp() {
    const formToSubmit = {
      ...this.bookingForm,
      serviceType: this.selectedService,
      transportOption: this.selectedTransport
    };

    const msg = this.contactPage.waMessageTemplate(formToSubmit);
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${this.whatsappNumber}?text=${encoded}`, '_blank');
  }

  callDirect(phone: string) {
    window.location.href = `tel:${phone.replace(/\s+/g, '')}`;
  }

  openInstagram() {
    window.open('https://www.instagram.com/medadetravel', '_blank');
  }
}
