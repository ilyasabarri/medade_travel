import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { ContactPageData } from '../../services/language-pages.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  private route = inject(ActivatedRoute);
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
    const options = this.contactPage.circuitOptions;
    const match = options.find(o => o.val === this.bookingForm.serviceType);
    return match ? match.val : (options[0]?.val || '');
  }

  get selectedTransport(): string {
    const options = this.contactPage.transportOptions;
    const match = options.find(o => o.val === this.bookingForm.transportOption);
    return match ? match.val : (options[0]?.val || '');
  }

  ngOnInit() {
    if (!this.bookingForm.serviceType && this.contactPage.circuitOptions?.length > 0) {
      this.bookingForm.serviceType = this.contactPage.circuitOptions[0].val;
    }
    if (!this.bookingForm.transportOption && this.contactPage.transportOptions?.length > 0) {
      this.bookingForm.transportOption = this.contactPage.transportOptions[0].val;
    }

    this.route.queryParams.subscribe(params => {
      const tourParam = params['tour'] || params['circuit'];
      if (tourParam) {
        this.selectTour(tourParam);
        this.scrollToForm();
      }
    });

    this.route.fragment.subscribe(fragment => {
      if (fragment === 'booking-form' || fragment === 'reservation-form' || fragment === 'form') {
        this.scrollToForm();
      }
    });
  }

  selectTour(query: string) {
    const options = this.contactPage.circuitOptions;
    if (!options || options.length === 0) return;
    const q = query.toLowerCase();

    if (q.includes('1') || q.includes('ouzoud') || q.includes('ayachi') || q.includes('أوزود')) {
      this.bookingForm.serviceType = options[0].val;
    } else if (q.includes('2') || q.includes('plaisir') || q.includes('pleasure') || q.includes('asni') || q.includes('agafay') || q.includes('أغفاي') || q.includes('أسني')) {
      this.bookingForm.serviceType = options[1].val;
    } else if (q.includes('3') || q.includes('mer') || q.includes('sea') || q.includes('terre') || q.includes('essaouira') || q.includes('taghazout') || q.includes('الصويرة') || q.includes('تغازوت')) {
      this.bookingForm.serviceType = options[2].val;
    } else {
      const match = options.find(o => o.val.toLowerCase().includes(q) || o.label.toLowerCase().includes(q));
      if (match) {
        this.bookingForm.serviceType = match.val;
      }
    }
  }

  scrollToForm() {
    setTimeout(() => {
      if (typeof document !== 'undefined') {
        const el = document.getElementById('booking-form') || document.querySelector('.form-container-card');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 150);
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
