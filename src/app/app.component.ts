import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LanguageService, Language } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Medade Travel';
  isScrolled = false;
  mobileMenuOpen = false;

  langService = inject(LanguageService);
  private router = inject(Router);

  whatsappNumber = '212637053131';
  primaryPhone = '+212 6 37 05 31 31';
  secondaryPhone = '+212 6 37 17 09 09';

  constructor() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
      });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  get currentLang(): Language {
    return this.langService.currentLang();
  }

  cycleLanguage() {
    const order: Language[] = ['fr', 'en', 'ar'];
    const currentIndex = order.indexOf(this.currentLang);
    const nextLang = order[(currentIndex + 1) % order.length];
    this.langService.setLanguage(nextLang);
  }

  get currentLangName(): string {
    switch (this.currentLang) {
      case 'fr': return 'Français';
      case 'en': return 'English';
      case 'ar': return 'العربية';
      default: return 'Français';
    }
  }

  get nextLangHint(): string {
    switch (this.currentLang) {
      case 'fr': return 'Passer en English';
      case 'en': return 'Switch to العربية';
      case 'ar': return 'التبديل إلى Français';
      default: return 'Changer';
    }
  }

  get nextLangLabel(): string {
    switch (this.currentLang) {
      case 'fr': return 'Passer à l\'anglais (EN)';
      case 'en': return 'Switch to Arabic (AR)';
      case 'ar': return 'Passer au français (FR)';
      default: return 'Changer de langue';
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  scrollToSection(sectionId: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.mobileMenuOpen = false;
    if (typeof document !== 'undefined') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  quickWhatsApp() {
    this.scrollToSection('booking');
  }

  openWhatsAppDirect() {
    let msg = 'Bonjour Medade Travel, je souhaiterais des informations sur vos 3 circuits au Maroc et vos disponibilites.';
    if (this.langService.currentLang() === 'en') {
      msg = 'Hello Medade Travel, I would like information about your 3 Morocco tours and availability.';
    } else if (this.langService.currentLang() === 'ar') {
      msg = 'السلام عليكم مداد ترافيل، أود الاستفسار عن جولاتكم السياحية الثلاث بالمغرب والتوافر لديكم.';
    }
    window.open(`https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
