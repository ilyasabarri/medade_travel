import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
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
  router = inject(Router);
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

  bookTourWhatsApp(tourIdentifier: string) {
    this.router.navigate(['/contact'], {
      queryParams: { tour: tourIdentifier },
      fragment: 'booking-form'
    });
  }

  quickWhatsApp() {
    this.router.navigate(['/contact'], {
      fragment: 'booking-form'
    });
  }
}
