import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService, TourTranslation } from '../../services/language.service';
import { HomePageData } from '../../services/language-pages.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  langService = inject(LanguageService);
  selectedTab: 'all' | 'sahara' | 'agafay' | 'prive' = 'all';

  get homePage(): HomePageData {
    return this.langService.homePage;
  }

  get tours(): TourTranslation[] {
    return this.langService.homeTours;
  }

  get faqList() {
    return this.homePage.faqItems;
  }

  get filteredTours(): TourTranslation[] {
    if (this.selectedTab === 'all') {
      return this.tours;
    }
    return this.tours.filter(t => t.category === this.selectedTab);
  }

  setTab(tab: 'all' | 'sahara' | 'agafay' | 'prive') {
    this.selectedTab = tab;
  }

  toggleFaq(index: number) {
    if (this.faqList[index]) {
      this.faqList[index].open = !this.faqList[index].open;
    }
  }

  bookTourWhatsApp(tourTitle: string) {
    let msg = `Bonjour Medade Travel, je souhaite réserver ou avoir plus d'informations sur : "${tourTitle}". Pouvez-vous me confirmer vos disponibilités et le tarif direct ?`;
    if (this.langService.currentLang() === 'en') {
      msg = `Hello Medade Travel, I would like to book or inquire about: "${tourTitle}". Could you please confirm availability and direct rate?`;
    } else if (this.langService.currentLang() === 'ar') {
      msg = `السلام عليكم مداد ترافيل، أود الاستفسار وحجز: "${tourTitle}". المرجو تأكيد التوافر وأفضل سعر مباشر.`;
    }
    window.open(`https://wa.me/212637053131?text=${encodeURIComponent(msg)}`, '_blank');
  }

  quickWhatsApp() {
    let msg = 'Bonjour Medade Travel, je cherche un circuit ou une location de véhicule au départ de Marrakech. Quels sont vos départs disponibles ?';
    if (this.langService.currentLang() === 'en') {
      msg = 'Hello Medade Travel, I am looking for a tour or vehicle rental departing from Marrakech. What are your available departures?';
    } else if (this.langService.currentLang() === 'ar') {
      msg = 'السلام عليكم مداد ترافيل، أبحث عن جولة سياحية أو كراء سيارة انطلاقاً من مراكش. ما هي البرامج المتاحة لديكم؟';
    }
    window.open(`https://wa.me/212637053131?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
