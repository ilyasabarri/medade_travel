import { Injectable, signal } from '@angular/core';
import {
  CIRCUITS_PAGE_DATA,
  DESTINATIONS_PAGE_DATA,
  CONTACT_PAGE_DATA,
  HOME_PAGE_DATA,
  CircuitsPageData,
  DestinationsPageData,
  ContactPageData,
  HomePageData
} from './language-pages.data';

export type Language = 'fr' | 'en' | 'ar';

export interface CircuitDayTranslation {
  dayNumber: number;
  title: string;
  description: string;
  stops: string[];
}

export interface CircuitTranslation {
  id: string;
  name: string;
  duration: string;
  pace: string;
  badge: string;
  summary: string;
  transportOffer: string;
  imageUrl: string;
  inclusions: string[];
  days: CircuitDayTranslation[];
}

export interface DestinationTranslation {
  id: string;
  name: string;
  tagline: string;
  tag: string;
  description: string;
  highlights: string[];
  idealFor: string;
  bestTime: string;
  imageUrl: string;
}

export interface TourTranslation {
  id: string;
  category: 'sahara' | 'agafay' | 'prive' | 'all';
  badge: string;
  badgeType?: 'bestseller' | 'shared' | 'luxury' | 'daytrip';
  title: string;
  duration: string;
  location: string;
  priceNote: string;
  priceAmount: string;
  description: string;
  highlights: string[];
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang = signal<Language>('fr');

  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem('medade_lang') as Language;
      if (saved && (saved === 'fr' || saved === 'en' || saved === 'ar')) {
        this.setLanguage(saved);
        return;
      }
    }
    this.applyLanguage('fr');
  }

  setLanguage(lang: Language) {
    this.currentLang.set(lang);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('medade_lang', lang);
    }
    this.applyLanguage(lang);
  }

  private applyLanguage(lang: Language) {
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      html.lang = lang;
      if (lang === 'ar') {
        html.dir = 'rtl';
        document.body.classList.add('rtl-mode');
      } else {
        html.dir = 'ltr';
        document.body.classList.remove('rtl-mode');
      }
    }
  }

  isRtl(): boolean {
    return this.currentLang() === 'ar';
  }

  // --- GENERAL UI LABELS ---
  get ui() {
    const lang = this.currentLang();
    const dict = {
      fr: {
        brandTag: 'AGENCE LOCALE • CIRCUITS MARRAKECH',
        navHome: 'Accueil',
        navCircuits: 'Nos Circuits & Transport',
        navDestinations: 'Destinations',
        navContact: 'Contact & Devis',
        btnWhatsApp: 'WhatsApp Direct',
        btnCallDirect: 'Appel Direct',
        btnDiscussWhatsApp: 'Discuter sur WhatsApp 24/7',
        floatingWhatsApp: 'Réserver sur WhatsApp',
        footerDesc: 'Votre spécialiste des circuits et transports au Maroc au départ de Marrakech. Bivouacs nomades, montagnes de l\'Atlas, océan atlantique et tarifs garantis sans intermédiaire.',
        footerTrustLocal: '100% Local',
        footerTrustDirect: 'Sans Intermédiaire',
        footerTrustRating: 'Note 4.9/5',
        footerHeadingCircuits: 'Nos Circuits & Transport',
        footerHeadingDestinations: 'Destinations & Régions',
        footerHeadingReservations: 'Réservations Directes',
        footerAddressLabel: 'Adresse : Marrakech & Circuits Maroc',
        footerPhoneLabel: 'Téléphone :',
        footerAssistanceLabel: 'Assistance :',
        footerWaAvailability: 'WhatsApp : 24/7 Disponible',
        footerBtnWa: 'Contacter sur WhatsApp',
        footerCopyright: '© 2026 Medade Travel. Tous droits réservés. Agence locale immatriculée au Maroc.',
        seeAssociatedCircuits: 'Voir les circuits associés',
        // Common CTAs
        btnFreeQuoteWa: 'Devis Gratuit via WhatsApp',
        btnCustomizeRoute: 'Personnaliser mon itinéraire',
        btnBookCircuitWa: 'Réserver ce Circuit sur WhatsApp',
        clickDayHint: 'Cliquez sur un jour pour ouvrir les détails de l\'étape',
        keyStopsLabel: 'Étapes Clés & Temps Forts :',
        inclusionsTitle: 'Inclus dans ce programme :'
      },
      en: {
        brandTag: 'LOCAL AGENCY • MOROCCO TOURS & EXPEDITIONS',
        navHome: 'Home',
        navCircuits: 'Our Tours & Transport',
        navDestinations: 'Destinations',
        navContact: 'Contact & Quote',
        btnWhatsApp: 'Direct WhatsApp',
        btnCallDirect: 'Direct Call',
        btnDiscussWhatsApp: 'Chat on WhatsApp 24/7',
        floatingWhatsApp: 'Book on WhatsApp',
        footerDesc: 'Your local Morocco travel specialist departing from Marrakech. Authentic Sahara camps, Atlas mountain escapes, Atlantic coastline, and fair direct prices without middlemen.',
        footerTrustLocal: '100% Local',
        footerTrustDirect: 'Direct Fair Price',
        footerTrustRating: 'Rated 4.9/5',
        footerHeadingCircuits: 'Our Tours & Transport',
        footerHeadingDestinations: 'Destinations & Regions',
        footerHeadingReservations: 'Direct Bookings',
        footerAddressLabel: 'Address: Marrakech & Morocco Wide',
        footerPhoneLabel: 'Phone:',
        footerAssistanceLabel: 'Support:',
        footerWaAvailability: 'WhatsApp: 24/7 Available',
        footerBtnWa: 'Chat with Us on WhatsApp',
        footerCopyright: '© 2026 Medade Travel. All rights reserved. Registered Moroccan Travel Agency.',
        seeAssociatedCircuits: 'View associated tours',
        // Common CTAs
        btnFreeQuoteWa: 'Free Quote via WhatsApp',
        btnCustomizeRoute: 'Customize my itinerary',
        btnBookCircuitWa: 'Book This Tour on WhatsApp',
        clickDayHint: 'Click on any day to expand itinerary details',
        keyStopsLabel: 'Key Highlights & Stops:',
        inclusionsTitle: 'Included in this package:'
      },
      ar: {
        brandTag: 'وكالة محلية • جولات ورحلات المغرب',
        navHome: 'الرئيسية',
        navCircuits: 'الجولات والنقل',
        navDestinations: 'الوجهات',
        navContact: 'اتصل بنا والطلب',
        btnWhatsApp: 'واتساب مباشر',
        btnCallDirect: 'اتصال مباشر',
        btnDiscussWhatsApp: 'تواصل عبر واتساب 24/7',
        floatingWhatsApp: 'احجز عبر واتساب',
        footerDesc: 'وكالتكم المغربية المتخصصة في الرحلات الصحراوية، الجبلية والساحلية انطلاقاً من مراكش. مخيمات فاخرة، نقل مريح وأفضل الأسعار المباشرة بدون وسيط.',
        footerTrustLocal: '100% محلية',
        footerTrustDirect: 'بدون وسيط',
        footerTrustRating: 'تقييم 4.9/5',
        footerHeadingCircuits: 'جولاتنا وخدمات النقل',
        footerHeadingDestinations: 'الوجهات والمناطق',
        footerHeadingReservations: 'الحجز المباشر',
        footerAddressLabel: 'العنوان: مراكش وكافة مدن المغرب',
        footerPhoneLabel: 'الهاتف:',
        footerAssistanceLabel: 'المساعدة:',
        footerWaAvailability: 'واتساب: متاح 24/7',
        footerBtnWa: 'تواصل معنا عبر واتساب',
        footerCopyright: '© 2026 مداد ترافيل. جميع الحقوق محفوظة. وكالة أسفار محلية مرخصة بالمغرب.',
        seeAssociatedCircuits: 'استكشف الجولات المرتبطة',
        // Common CTAs
        btnFreeQuoteWa: 'طلب عرض سعر مجاني عبر واتساب',
        btnCustomizeRoute: 'تخصيص مسار الرحلة',
        btnBookCircuitWa: 'احجز هذه الجولة عبر واتساب',
        clickDayHint: 'اضغط على أي يوم لعرض تفاصيل المرحلة والأنشطة',
        keyStopsLabel: 'المحطات والأنشطة الرئيسية:',
        inclusionsTitle: 'الخدمات المشمولة في هذا البرنامج:'
      }
    };
    return dict[lang];
  }

  // --- CIRCUITS DATA ---
  get circuits(): CircuitTranslation[] {
    const lang = this.currentLang();
    if (lang === 'en') {
      return [
        {
          id: 'circuit-1',
          name: 'Tour 1: Ouzoud Waterfalls, Ayachi Mountain & Merzouga Dunes',
          duration: '4 Days / 3 Nights',
          pace: 'Untamed Nature, High Atlas & Sahara Desert',
          badge: 'Tour 1 • Best-Seller',
          summary: 'A majestic expedition through hidden Morocco. From the towering Ouzoud Waterfalls and a mountain picnic in the Ayachi range, to the golden dunes of Merzouga with a night in a Berber desert tent. Return via the Todra Gorges and Ouarzazate film studios.',
          imageUrl: 'assets/ouzoud-waterfalls.jpeg',
          transportOffer: 'Transport of your choice: From 450 MAD / day self-drive OR with a dedicated private chauffeur.',
          inclusions: [
            'Flexible transport: Modern air-conditioned vehicle with dedicated private driver OR self-drive from 450 MAD/day',
            'Direct pick-up and return in Marrakech',
            'Traditional lunch at the foot of the magnificent Ouzoud Waterfalls',
            '2 Nights in a charming Midelt hotel with breakfast and dinner',
            'Outdoor scenic picnic day at the foot of Mount Ayachi (High Atlas)',
            '1 Unforgettable night in Merzouga desert under an authentic Berber tent',
            'Camel trek and sunset over Erg Chebbi golden dunes',
            'Lunch in the heart of the towering Todra Gorges (Tinghir)',
            'Visit to the world-famous cinema studios in Ouarzazate',
            'Final night in Marrakech for a smooth end to your journey'
          ],
          days: [
            {
              dayNumber: 1,
              title: 'Departure from Marrakech → Ouzoud Waterfalls (Lunch) → Night in Midelt',
              description: 'Morning departure from Marrakech towards Midelt via the spectacular Ouzoud Waterfalls. Enjoy a traditional Berber lunch facing the falls. Continue through Middle Atlas scenery to arrive in Midelt in the late afternoon. Dinner and overnight in Midelt.',
              stops: ['Marrakech departure', 'Ouzoud Waterfalls', 'Lunch at the falls', 'Middle Atlas', 'Overnight in Midelt']
            },
            {
              dayNumber: 2,
              title: 'Breakfast → Scenic Picnic Excursion at Mount Ayachi → Midelt',
              description: 'After a hearty breakfast, set out for a mountain getaway with a scenic picnic at the foot of Mount Ayachi (Jbel Ayachi). Spend the day in the fresh mountain air surrounded by untouched landscapes. Return to Midelt for dinner and overnight.',
              stops: ['Hotel breakfast', 'Jbel Ayachi picnic excursion', 'Full day in high mountains', 'Preserved landscapes', 'Overnight in Midelt']
            },
            {
              dayNumber: 3,
              title: 'Midelt → Merzouga Desert: Sunset Camel Ride & Berber Tent',
              description: 'Breakfast in Midelt, then head south towards the Sahara desert of Merzouga along the dramatic Ziz Gorges and palm oasis valleys. Arrive at Erg Chebbi dunes for a sunset camel caravan. Enjoy nomadic fireside music and sleep under a Berber tent.',
              stops: ['Ziz Valley & palm groves', 'Merzouga desert', 'Sunset camel ride', 'Night under Berber tent']
            },
            {
              dayNumber: 4,
              title: 'Merzouga → Todra Gorges (Lunch) → Ouarzazate Film Studios → Marrakech',
              description: 'Desert breakfast, then depart towards Marrakech. Stop and lunch inside the vertical Todra Gorges in Tinghir. Continue to Ouarzazate to tour famous Hollywood movie studios. Cross Tizi n\'Tichka pass and arrive in Marrakech. Have a wonderful stay!',
              stops: ['Todra Gorges (Tinghir)', 'Lunch at the gorges', 'Ouarzazate Cinema Studios', 'Tichka Pass', 'Overnight in Marrakech']
            }
          ]
        },
        {
          id: 'circuit-2',
          name: 'Tour 2: "Pure Pleasure": Marrakech, Asni Mountains & VIP Night in Agafay',
          duration: '3 Days / 2 Nights',
          pace: 'Relaxation, Wellness, Desert Fun & Celebration',
          badge: 'Tour 2 • "Pure Pleasure"',
          summary: 'An enchanting escape designed for pure relaxation and celebration. Experience the peace of the Atlas Mountains in Asni, an exciting day in the Agafay Desert (pool access, lunch, 1-hour activity of your choice: camel, quad or buggy, sunset, and grand dinner with belly dancer and fire eater under luxury tent), then a historic Marrakech riad with traditional hammam and massage.',
          imageUrl: 'assets/star-lit-nights.jpeg',
          transportOffer: 'Transport of your choice: From 450 MAD / day self-drive OR with dedicated private chauffeur.',
          inclusions: [
            'Private air-conditioned transport with chauffeur at disposal OR self-drive from 450 MAD/day',
            '1 Peaceful night in the High Atlas Mountains in Asni',
            'Pool day pass in the desert of Agafay & delicious lunch',
            '1-Hour activity of choice: Camel trek, Quad safari, or Buggy SSV',
            'Magical sunset overlooking Agafay stone canyons',
            'Grand evening spectacle: Oriental belly dancer, fire breather & live music',
            '1 Night under luxury glamping tents in the Agafay Desert',
            'Sunrise view and gourmet nomad breakfast',
            'Accommodation in a charming traditional riad in central Marrakech',
            'Free day with relaxing traditional Moroccan Hammam & Argan oil massage'
          ],
          days: [
            {
              dayNumber: 1,
              title: 'Marrakech Center / Morning Departure → Moulay Brahim → Asni Mountains',
              description: 'Morning departure from Marrakech towards Moulay Brahim foothills. Enter the green valley of Asni under Mount Toubkal peaks. Enjoy traditional dinner and sleep surrounded by mountain serenity.',
              stops: ['Marrakech center', 'Moulay Brahim', 'High Atlas foothills', 'Overnight in Asni mountain']
            },
            {
              dayNumber: 2,
              title: 'Asni → Agafay Desert: Pool, Activity (Camel/Quad/Buggy), Dinner Show & Luxury Tent',
              description: 'Breakfast facing mountain peaks then depart to Agafay desert. Relax by the desert pool and enjoy a delicious lunch. In the late afternoon, enjoy 1 hour of your chosen activity (camel, quad, or buggy) during sunset. Gourmet dinner with belly dancing and fire show. Night under luxury desert tents.',
              stops: ['Agafay desert pool', 'Desert lunch', '1h Activity (Camel, Quad or Buggy)', 'Sunset', 'Fire show & belly dancer', 'Luxury tent overnight']
            },
            {
              dayNumber: 3,
              title: 'Agafay Sunrise → Marrakech Riad: Free Day, Hammam & Relaxing Massage',
              description: 'Watch the golden sunrise over Agafay canyons, enjoy breakfast and depart. Arrive at central Marrakech riad. Free day with full wellness ritual: authentic Moroccan hammam and relaxing massage. Enjoy your stay!',
              stops: ['Desert sunrise & breakfast', 'Marrakech center', 'Charming Riad', 'Hammam & Massage', 'Free relaxing day']
            }
          ]
        },
        {
          id: 'circuit-3',
          name: 'Tour 3: "Sea & Sand": Essaouira, Taghazout, Agadir & Ouarzazate Kasbahs',
          duration: '4 Days / 3 Nights',
          pace: 'Ocean Breeze, Solidarity Culture & Historic Kasbahs',
          badge: 'Tour 3 • Sea & Sand',
          summary: 'The perfect harmony between Atlantic ocean waves and the mystical South. Discover Essaouira with sunset horseback riding on the beach, Taghazout surf culture, a solidarity day visiting argan cooperatives and craft show in Agadir, then Hollywood film studios and the Glaoui Kasbah in Ouarzazate.',
          imageUrl: 'assets/taghazout-morocco.jpeg',
          transportOffer: 'Transport of your choice: From 450 MAD / day self-drive OR with dedicated private chauffeur.',
          inclusions: [
            'Transport of your choice: with dedicated chauffeur OR self-drive from 450 MAD/day',
            'Historical tour of Essaouira: Old Jewish quarters (Mellah) & ramparts',
            'Fresh seafood lunch and sunset horseback riding along the beach',
            '1 Charming night in Essaouira',
            'Oceanfront lunch in Taghazout surf village',
            'Solidarity day: Visiting local argan & cosmetics cooperatives with live craft show',
            '1 Comfortable night in Agadir',
            'Guided visit of international cinema studios in Ouarzazate',
            'Discovery of the historical Kasbah of Glaoui',
            '1 Night in Ouarzazate',
            'Return across the High Atlas to Marrakech with free leisure time'
          ],
          days: [
            {
              dayNumber: 1,
              title: 'Marrakech → Essaouira: Jewish Quarter, Seaside Lunch & Sunset Horseback Ride',
              description: 'Morning drive to Atlantic gem Essaouira (Mogador). Visit the historic Mellah and fortress ramparts. Fresh fish lunch at the harbor. Gallop or stroll on horseback on the beach as the sun sets over the ocean. Overnight in Essaouira.',
              stops: ['Marrakech departure', 'Essaouira Medina', 'Old Jewish Mellah', 'Port lunch', 'Beach horseback riding', 'Ocean sunset', 'Overnight in Essaouira']
            },
            {
              dayNumber: 2,
              title: 'Essaouira → Taghazout (Lunch) → Agadir: Argan Solidarity Day & Show',
              description: 'Breakfast and scenic coastal drive to Taghazout. Relaxing lunch overlooking world-class surf breaks. Continue to Agadir for a solidarity day: visit women\'s argan and cosmetic cooperatives and participate in traditional craft demonstrations. Overnight in Agadir.',
              stops: ['Atlantic coast drive', 'Taghazout lunch', 'Solidarity day', 'Argan & cosmetic cooperatives', 'Craft show', 'Overnight in Agadir']
            },
            {
              dayNumber: 3,
              title: 'Agadir → Ouarzazate: Cinema Studios & Ancient Glaoui Kasbah',
              description: 'Breakfast and depart through the Souss valley to Hollywood of Morocco, Ouarzazate. Visit renowned film studios where international blockbusters were created. Tour the grand historic Glaoui Kasbah. Dinner and overnight in Ouarzazate.',
              stops: ['Drive to Ouarzazate', 'International film studios', 'Ancient Glaoui Kasbah', 'Overnight in Ouarzazate']
            },
            {
              dayNumber: 4,
              title: 'Ouarzazate → Marrakech: High Atlas Crossing & Free Leisure Time',
              description: 'Breakfast then cross High Atlas peaks through Tizi n\'Tichka pass towards Marrakech. Arrive in Marrakech for a free leisure day with optional programs and shopping in the souks. Have a wonderful stay!',
              stops: ['Tizi n\'Tichka pass', 'Marrakech arrival', 'Free leisure day', 'Optional activities']
            }
          ]
        }
      ];
    }

    if (lang === 'ar') {
      return [
        {
          id: 'circuit-1',
          name: 'الرحلة 1: شلالات أوزود، جبل العياشي وكثبان مرزوكة',
          duration: '4 أيام / 3 ليالٍ',
          pace: 'طبيعة عذراء، جبال الأطلس والصحراء الكبرى',
          badge: 'الرحلة 1 • الأكثر طلباً',
          summary: 'ملحمة أصيلة عبر سحر المغرب الخفي. من شلالات أوزود الشاهقة إلى جبل العياشي مع نزهة جبلية ساحرة، وصولاً إلى كثبان مرزوكة الذهبية وليلة تحت الخيام البربرية. العودة عبر مضايق تودغى واستوديوهات السينما بورزازات.',
          imageUrl: 'assets/ouzoud-waterfalls.jpeg',
          transportOffer: 'النقل حسب اختياركم: ابتداءً من 450 درهم / اليوم بدون سائق أو مع سائق خاص رهن إشارتكم.',
          inclusions: [
            'نقل سياحي مريح ومكيف مع سائق خاص أو خيار كراء سيارة بدون سائق ابتداءً من 450 درهم/اليوم',
            'انطلاق مباشر من مراكش وعودة مريحة',
            'وجبة غداء تقليدية أمام شلالات أوزود الرائعة',
            'مبيتان في فندق مميز بمدينة ميدلت مع الإفطار والعشاء',
            'خرجة ونزهة غداء كاملة في قلب جبل العياشي (الأطلس الكبير)',
            'ليلة استثنائية في صحراء مرزوكة تحت الخيام البربرية التقليدية',
            'جولة على ظهور الجمال لمشاهدة غروب الشمس الذهبي فوق الكثبان',
            'غداء في مضايق تودغى المهيبة بتنغير',
            'توقف وزيارة استوديوهات السينما العالمية في ورزازات',
            'ليلة ختامية بمدينة مراكش لنهاية رحلة مريحة وممتعة'
          ],
          days: [
            {
              dayNumber: 1,
              title: 'الانطلاق من مراكش ← شلالات أوزود (غداء) ← المبيت بميدلت',
              description: 'انطلاق صباحي من مراكش باتجاه ميدلت عبر شلالات أوزود الرائعة. غداء أمازيغي أمام الشلالات، ثم مواصلة الطريق عبر مناظر الأطلس المتوسط وصولاً إلى ميدلت. عشاء ومبيت بميدلت.',
              stops: ['الانطلاق من مراكش', 'شلالات أوزود', 'غداء أمام الشلالات', 'الأطلس المتوسط', 'المبيت بميدلت']
            },
            {
              dayNumber: 2,
              title: 'إفطار الصباح ← نزهة غداء بجبل العياشي (الأطلس الكبير) ← ميدلت',
              description: 'بعد إفطار الصباح، انطلاق في يوم استجمام في الطبيعة مع نزهة غداء عند سفح جبل العياشي الشامخ. قضاء يوم كامل في الهواء النقي وسط الطبيعة العذراء. عودة مساءً والمبيت بميدلت.',
              stops: ['إفطار بالفندق', 'نزهة جبل العياشي', 'يوم كامل في الجبل', 'طبيعة الأطلس العذراء', 'المبيت بميدلت']
            },
            {
              dayNumber: 3,
              title: 'ميدلت ← صحراء مرزوكة: غروب الشمس على ظهور الجمال والخيمة البربرية',
              description: 'إفطار بميدلت ثم التوجه إلى صحراء مرزوكة مروراً بوادي زيز وواحات تافيلالت. ركوب الجمال لمشاهدة الغروب الأسطوري فوق كثبان عرق الشبي. عشاء تقليدي وموسيقى صحراوية ومبيت تحت الخيمة البربرية.',
              stops: ['وادي زيز والواحات', 'صحراء مرزوكة', 'غروب الشمس على الجمال', 'المبيت بالخيمة البربرية']
            },
            {
              dayNumber: 4,
              title: 'مرزوكة ← مضايق تودغى (غداء) ← استوديوهات ورزازات ← مراكش',
              description: 'إفطار في الصحراء ثم الانطلاق نحو مراكش. توقف وغداء في قلب مضايق تودغى الشاهقة بتنغير. التوقف بورزازات وزيارة استوديوهات السينما العالمية. عبور ممر تيشكا والوصول مساءً إلى مراكش للمبيت. إقامة سعيدة!',
              stops: ['مضايق تودغى بتنغير', 'غداء بالمضايق', 'استوديوهات ورزازات', 'ممر تيشكا', 'المبيت بمراكش']
            }
          ]
        },
        {
          id: 'circuit-2',
          name: 'الرحلة 2: "متعة لا تنتهي": مراكش، جبال أسني وليلة ساحرة بأغفاي',
          duration: '3 أيام / ليلتان',
          pace: 'استجمام، رفاهية، أنشطة وسهرة فنية',
          badge: 'الرحلة 2 • "متعة لا تنتهي"',
          summary: 'رحلة مصممة للراحة والانتعاش. تبدأ بهدوء جبال الأطلس في أسني، تليها تجربة مميزة بصحراء أغفاي (مسبح بإطلالة بانورامية، غداء، ساعة كاملة من الأنشطة حسب اختياركم: جمال، كواد أو باغي، غروب الشمس وسهرة عشاء مع راقصة شرقية ونافخ النار تحت خيمة فاخرة)، ثم إقامة برياض أصيل بمراكش مع حمام ومساج.',
          imageUrl: 'assets/star-lit-nights.jpeg',
          transportOffer: 'النقل حسب اختياركم: ابتداءً من 450 درهم / اليوم بدون سائق أو مع سائق خاص رهن إشارتكم.',
          inclusions: [
            'نقل خاص ومكيف مع سائق رهن إشارتكم أو كراء سيارة بدون سائق ابتداءً من 450 درهم/اليوم',
            'ليلة مريحة في قلب جبال الأطلس بمنطقة أسني',
            'دخول مسبح بانورامي بصحراء أغفاي ووجبة غداء لذيذة',
            'ساعة من الأنشطة باختياركم: جولة جمال، سفاري كواد أو باغي',
            'مشاهدة غروب الشمس الخلاب فوق تلال أغفاي الصحراوية',
            'سهرة عشاء فاخرة مع برنامج فني: راقصة شرقية، استعراض النار وموسيقى',
            'مبيت مميز تحت الخيام الفاخرة المجهزة بصحراء أغفاي',
            'مشاهدة شروق الشمس وإفطار صباحي لذيذ',
            'إقامة برياض مغربي تقليدي فاخر بقلب مراكش',
            'يوم حر مع جلسة استرخاء متكاملة: حمام مغربي تقليدي ومساج بالزيوت العطرية'
          ],
          days: [
            {
              dayNumber: 1,
              title: 'وسط مراكش / انطلاق صباحي ← مولاي إبراهيم ← جبال أسني',
              description: 'إقامة بمراكش. الانطلاق صباحاً بعد الإفطار نحو ضريح ومرتفعات مولاي إبراهيم ووادي أسني الأخضر. عشاء محلي ومبيت هادئ في جبال الأطلس بأسني.',
              stops: ['وسط مراكش', 'مولاي إبراهيم', 'جبال الأطلس', 'المبيت بأسني في الجبل']
            },
            {
              dayNumber: 2,
              title: 'أسني ← صحراء أغفاي: مسبح، أنشطة الغروب، عشاء فني وخيمة فاخرة',
              description: 'بعد الإفطار، الانطلاق نحو صحراء أغفاي. الاستمتاع بالمسبح والغداء وسط الصحراء. بعد الظهر، ساعة نشاط باختياركم (جمال أو كواد أو باغي) لمشاهدة الغروب. سهرة عشاء مع راقصة شرقية ونافخ النار، ومبيت تحت الخيام الفاخرة.',
              stops: ['مسبح صحراء أغفاي', 'غداء بالصحراء', 'ساعة نشاط (جمال/كواد/باغي)', 'غروب الشمس', 'سهرة العشاء والنار', 'المبيت بخيمة فاخرة']
            },
            {
              dayNumber: 3,
              title: 'أغفاي (شروق الشمس) ← رياض بمراكش: يوم حر، حمام ومساج',
              description: 'مشاهدة شروق الشمس فوق الكثبان، إفطار صباحي والعودة إلى مراكش. النزول برياض ساحر في المدينة العتيقة. يوم حر للاسترخاء مع حمام مغربي أصيل ومساج بزيت الأركان. إقامة سعيدة!',
              stops: ['شروق الشمس والإفطار', 'وسط مراكش', 'رياض فاخر', 'حمام مغربي ومساج', 'يوم استرخاء حر']
            }
          ]
        },
        {
          id: 'circuit-3',
          name: 'الرحلة 3: "بين البحر والبر": الصويرة، تغازوت، أكادير وقصبات ورزازات',
          duration: '4 أيام / 3 ليالٍ',
          pace: 'نسيم المحيط، تضامن إنساني وقلاع سينمائية',
          badge: 'الرحلة 3 • بين البحر والبر',
          summary: 'التوازن المثالي بين أمواج الأطلسي الشامخة وأسرار الجنوب المغربي. اكتشفوا مدينة الصويرة وركوب الخيل على شاطئ البحر وقت الغروب، وأجواء ركوب الأمواج بتغازوت، ويوم تضامني لزيارة تعاونيات الأركان بأكادير وحضور العرض، ثم عبور الجبال نحو استوديوهات السينما وقصبة الكلاوي بورزازات.',
          imageUrl: 'assets/taghazout-morocco.jpeg',
          transportOffer: 'النقل حسب اختياركم: ابتداءً من 450 درهم / اليوم بدون سائق أو مع سائق خاص رهن إشارتكم.',
          inclusions: [
            'نقل مريح مع سائق محترف أو خيار كراء سيارة بدون سائق ابتداءً من 450 درهم/اليوم',
            'زيارة تاريخية لمدينة الصويرة: الملاح القديم والأسوار التاريخية',
            'غداء سمك طازج وجولة خيل على رمال الشاطئ عند غروب الشمس',
            'مبيت مريح في الصويرة',
            'غداء مطل على المحيط في تغازوت',
            'يوم تضامني: زيارة جمعيات وتعاونيات الأركان والتجميل وحضور العرض الحرفي',
            'مبيت بأكادير',
            'زيارة استوديوهات السينما العالمية في ورزازات',
            'زيارة قصبة الكلاوي العريقة ذات الطراز المعماري الفريد',
            'مبيت بورزازات',
            'عودة عبر الأطلس إلى مراكش مع يوم حر وبرامج اختيارية'
          ],
          days: [
            {
              dayNumber: 1,
              title: 'مراكش ← الصويرة: الأحياء التاريخية، غداء بحري وركوب الخيل عند الغروب',
              description: 'الانطلاق من مراكش نحو مدينة الصويرة (موغادور). زيارة حي الملاح التاريخي والأسوار البرتغالية. غداء سمك طازج، ثم جولة على ظهر الخيل على شاطئ المحيط لمشاهدة غروب الشمس الساحر. المبيت بالصويرة.',
              stops: ['الانطلاق من مراكش', 'مدينة الصويرة', 'حي الملاح التاريخي', 'غداء بالميناء', 'ركوب الخيل بالشاطئ', 'غروب المحيط', 'المبيت بالصويرة']
            },
            {
              dayNumber: 2,
              title: 'الصويرة ← تغازوت (غداء) ← أكادير: يوم تضامني مع تعاونيات الأركان',
              description: 'إفطار ثم انطلاق عبر الطريق الساحلي. غداء بتغازوت أمام أشهر شواطئ ركوب الأمواج. مواصلة الطريق إلى أكادير ليوم تضامني مميز: زيارة تعاونيات الأركان ومستحضرات التجميل والمشاركة في العرض الحرفي. المبيت بأكادير.',
              stops: ['طريق الساحل الأطلسي', 'غداء بتغازوت', 'يوم تضامني', 'تعاونيات الأركان', 'المشاركة بالعرض', 'المبيت بأكادير']
            },
            {
              dayNumber: 3,
              title: 'أكادير ← ورزازات: استوديوهات السينما وقصبة الكلاوي العريقة',
              description: 'إفطار ثم السفر نحو عاصمة السينما العالمية ورزازات. زيارة استوديوهات التصوير الشهيرة واستكشاف قصبة الكلاوي التاريخية الرائعة. عشاء ومبيت بورزازات.',
              stops: ['الطريق نحو ورزازات', 'استوديوهات السينما', 'قصبة الكلاوي العريقة', 'المبيت بورزازات']
            },
            {
              dayNumber: 4,
              title: 'ورزازات ← مراكش: ممر تيشكا ويوم حر للأنشطة الاختيارية',
              description: 'إفطار ثم العودة إلى مراكش عبر المناظر الخلابة لممر تيزي نتيشكا بالأطلس الكبير. الوصول إلى مراكش لقضاء يوم حر مع أنشطة وبرامج اختيارية حسب رغبتكم. إقامة سعيدة!',
              stops: ['ممر تيزي نتيشكا', 'الوصول لمراكش', 'يوم حر للتسوق والراحة', 'أنشطة اختيارية']
            }
          ]
        }
      ];
    }

    // Default French
    return [
      {
        id: 'circuit-1',
        name: 'Circuit 1 : Cascades d\'Ouzoud, Montagne Ayachi & Dunes de Merzouga',
        duration: '4 Jours / 3 Nuits',
        pace: 'Nature Sauvage, Haut-Atlas & Grand Désert',
        badge: 'Circuit 1 • Proposition N°1',
        summary: 'Une grande odyssée authentique à travers le Maroc préservé. Des spectaculaires Cascades d\'Ouzoud au massif méconnu du Jbel Ayachi avec pique-nique en pleine montagne, jusqu\'à l\'immensité dorée des dunes de Merzouga avec nuit sous la tente berbère. Retour par les Gorges du Todra et les studios cinématographiques d\'Ouarzazate.',
        imageUrl: 'assets/ouzoud-waterfalls.jpeg',
        transportOffer: 'Transport au choix à partir de 450 DH / jour sans chauffeur ou avec chauffeur privé dédié.',
        inclusions: [
          'Transport au choix : Véhicule récent climatisé avec chauffeur privé dédié OU sans chauffeur dès 450 DH/jour',
          'Prise en charge directe et retour à Marrakech',
          'Déjeuner au pied des splendides Cascades d\'Ouzoud',
          '2 Nuitées en hôtel de charme à Midelt avec petit-déjeuner',
          'Excursion et grand pique-nique en pleine montagne du Jbel Ayachi (Haut-Atlas)',
          '1 Nuitée inoubliable au désert de Merzouga sous la tente berbère traditionnelle',
          'Balade chamelière et coucher de soleil à dos de dromadaire sur les dunes d\'Erg Chebbi',
          'Déjeuner au cœur des impressionnantes Gorges de Todra à Tinghir',
          'Arrêt et visite des célèbres studios cinématographiques internationaux à Ouarzazate',
          'Dernière nuitée à Marrakech pour clôturer le séjour en toute sérénité'
        ],
        days: [
          {
            dayNumber: 1,
            title: 'Départ de Marrakech → Cascades d\'Ouzoud (Déjeuner) → Nuitée à Midelt',
            description: 'Départ matinal de Marrakech en direction de Midelt en passant par les grandioses cascades d\'Ouzoud. Déjeuner traditionnel berbère au pied des cascades avec vue panoramique rafraîchissante. Poursuite de la route à travers les paysages du Moyen-Atlas et arrivée à Midelt en fin d\'après-midi. Dîner et nuitée à Midelt.',
            stops: ['Départ Marrakech', 'Cascades d\'Ouzoud', 'Déjeuner aux cascades', 'Moyen-Atlas', 'Passer la nuit à Midelt']
          },
          {
            dayNumber: 2,
            title: 'Petit-déjeuner → Départ en Pique-Nique à la Montagne Ayachi → Midelt',
            description: 'Après un savoureux petit-déjeuner, départ pour une journée d\'évasion montagnarde avec un grand pique-nique au pied du majestueux Jbel Ayachi. Passez toute la journée en pleine montagne du Haut-Atlas au milieu de paysages pastoraux préservés et d\'un air pur revigorant. Retour en fin d\'après-midi pour dormir à Midelt.',
            stops: ['Petit-déjeuner à l\'hôtel', 'Départ pique-nique Jbel Ayachi', 'Journée en pleine montagne', 'Haut-Atlas sauvage', 'Dormir à Midelt']
          },
          {
            dayNumber: 3,
            title: 'Midelt → Désert de Merzouga : Coucher de Soleil à Dromadaire & Tente Berbère',
            description: 'Petit-déjeuner à Midelt puis départ en direction du désert saharien de Merzouga en longeant les magnifiques gorges et palmeraies du Ziz. Arrivée aux dunes majestueuses de l\'Erg Chebbi : caravane de dromadaires pour assister au magnifique coucher de soleil sur les crêtes dorées. Dîner traditionnel autour du feu et nuit féérique sous la tente berbère au désert.',
            stops: ['Vallée du Ziz & palmeraies', 'Désert de Merzouga', 'Coucher de soleil à dos de dromadaire', 'Nuit sous la tente berbère']
          },
          {
            dayNumber: 4,
            title: 'Merzouga → Gorges de Todra Tinghir (Déjeuner) → Ouarzazate → Marrakech',
            description: 'Petit-déjeuner au désert puis départ vers Marrakech. Déjeuner au cœur des vertigineuses Gorges de Todra à Tinghir. Arrêt à Ouarzazate avec visite des mythiques studios cinématographiques internationaux. Traversée du Haut-Atlas par le col du Tizi n\'Tichka et arrivée en soirée à Marrakech. Passer la nuit à Marrakech. Bon séjour !',
            stops: ['Gorges de Todra (Tinghir)', 'Déjeuner aux gorges', 'Ouarzazate (Studios de cinéma)', 'Col du Tichka', 'Passer la nuit à Marrakech']
          }
        ]
      },
      {
        id: 'circuit-2',
        name: 'Circuit 2 : "Que du Plaisir" : Marrakech, Montagnes d\'Asni & Nuit VIP à Agafay',
        duration: '3 Jours / 2 Nuits',
        pace: 'Détente, Bien-Être, Activités & Fête',
        badge: 'Circuit "Que du Plaisir"',
        summary: 'Une parenthèse enchantée conçue pour se ressourcer et vibrer. Commencez par la quiétude des montagnes d\'Asni, poursuivez par une journée festive au désert d\'Agafay (piscine panoramique, déjeuner, 1h d\'activité au choix : dromadaire, quad ou buggy, coucher de soleil et grand dîner avec danseuse orientale et cracheur de feu sous tente luxueuse), puis terminez dans un riad au centre de Marrakech avec hammam et massage.',
        imageUrl: 'assets/star-lit-nights.jpeg',
        transportOffer: 'Transport au choix à partir de 450 DH / jour sans chauffeur ou avec nos chauffeurs privés à disposition.',
        inclusions: [
          'Transport privé climatisé avec chauffeur à disposition OU formule sans chauffeur dès 450 DH/jour',
          '1 Nuitée ressourçante en pleine montagne d\'Atlas à Asni',
          'Accès piscine en plein désert de Marrakech à Agafay & Déjeuner au camp',
          '1 Heure d\'activité au choix : Randonnée Dromadaire, Safari Quad ou Buggy',
          'Assister au coucher de soleil féérique sur les canyons d\'Agafay',
          'Dîner avec grande animation : Danseuse orientale, Cracheur de feu & musique',
          'Passer la nuit sous les tentes luxueuses au désert d\'Agafay',
          'Assister au lever de soleil au désert & Petit-déjeuner gourmand',
          'Hébergement dans un riad de charme au centre de Marrakech',
          'Journée libre avec séance relaxante de Hammam traditionnel & Massage'
        ],
        days: [
          {
            dayNumber: 1,
            title: 'Passant la Nuit à Marrakech / Départ Matin → Moulay Brahim → Montagnes d\'Asni',
            description: 'Hébergement au centre de Marrakech. Le matin après le petit-déjeuner, départ en direction de Moulay Brahim et des contreforts de l\'Atlas. Poursuite vers la vallée d\'Asni. Dîner traditionnel savoureux et passer la nuit en pleine montagne d\'Atlas à Asni.',
            stops: ['Centre de Marrakech', 'Moulay Brahim', 'Haut-Atlas', 'Nuitée en pleine montagne à Asni']
          },
          {
            dayNumber: 2,
            title: 'Asni → Agafay : Piscine, Activité (Dromadaire/Quad/Buggy), Dîner Spectacle & Tente de Luxe',
            description: 'Après le petit-déjeuner, départ vers le désert minéral d\'Agafay. Profitez de la piscine en plein désert de Marrakech et d\'un excellent déjeuner. 1 heure d\'activité au choix : dromadaire, quad ou buggy pour assister au magnifique coucher de soleil. Dîner avec animation festive (danseuse orientale, cracheur de feu). Passer la nuit sous les tentes luxueuses au désert.',
            stops: ['Piscine en plein désert d\'Agafay', 'Déjeuner au désert', '1h Activité (Dromadaire, Quad ou Buggy)', 'Coucher de soleil', 'Dîner spectacle feu & danseuse', 'Nuit sous les tentes luxueuses']
          },
          {
            dayNumber: 3,
            title: 'Agafay (Lever de Soleil) → Riad au Centre de Marrakech : Journée Libre, Hammam & Massage',
            description: 'Assister au lever de soleil spectaculaire sur les canyons d\'Agafay, petit-déjeuner et départ. Arrivée au centre de Marrakech et hébergement dans un magnifique riad traditionnel. Journée libre avec rituel bien-être : séance de hammam traditionnel et massage relaxant. Bon séjour !',
            stops: ['Lever de soleil & petit-déjeuner', 'Départ d\'Agafay', 'Arrivée centre de Marrakech', 'Hébergement en riad', 'Journée libre hammam & massage']
          }
        ]
      },
      {
        id: 'circuit-3',
        name: 'Circuit 3 : "Circuit Mer - Terre" : Essaouira, Taghazout, Agadir & Kasbahs de Ouarzazate',
        duration: '4 Jours / 3 Nuits',
        pace: 'Côte Océane, Culture Solidaire & Kasbahs',
        badge: 'Circuit Mer - Terre',
        summary: 'L\'équilibre parfait entre les vagues de l\'Atlantique et les mystères du Sud marocain. Découvrez Essaouira et sa balade à cheval au bord de la mer au coucher de soleil, l\'ambiance de Taghazout, une journée de solidarité au cœur des associations d\'argan à Agadir avec participation au show, puis franchissez les montagnes vers les célèbres studios de cinéma et l\'ancienne Kasbah du Glaoui à Ouarzazate.',
        imageUrl: 'assets/taghazout-morocco.jpeg',
        transportOffer: 'Transport au choix à partir de 450 DH / jour sans chauffeur ou avec chauffeur professionnel à disposition.',
        inclusions: [
          'Transport au choix : avec chauffeur dédié OU formule véhicule sans chauffeur dès 450 DH/jour',
          'Visite d\'Essaouira : anciens quartiers juifs (Mellah) & monuments historiques',
          'Déjeuner au port et balade à dos de cheval au bord de la mer au coucher de soleil',
          'Passer la nuit de charme à Essaouira',
          'Déjeuner les pieds dans l\'eau à Taghazout',
          'Journée de solidarité : visite des associations d\'argan et cosmétique avec participation au show',
          'Passer la nuit à Agadir',
          'Visite des studios cinématographiques internationaux d\'Ouarzazate',
          'Visite de l\'ancienne et prestigieuse Kasbah de Glaoui',
          'Passer la nuit à Ouarzazate',
          'Retour à Marrakech avec journée libre des programmes aux choix et facultatifs'
        ],
        days: [
          {
            dayNumber: 1,
            title: 'Marrakech → Essaouira : Anciens Quartiers Juifs, Cheval au Coucher de Soleil & Nuit Océane',
            description: 'Départ de Marrakech vers Essaouira. Arrivée à Essaouira : visite des anciens quartiers juifs (Mellah) et des monuments historiques. Déjeuner traditionnel. Balade à dos de cheval sur la plage et contemplation du coucher de soleil au bord de la mer. Passer la nuit à Essaouira.',
            stops: ['Départ de Marrakech', 'Arrivée Essaouira', 'Visite anciens quartiers juifs & monuments', 'Déjeuner', 'Balade à dos de cheval', 'Coucher de soleil au bord de la mer', 'Passer la nuit à Essaouira']
          },
          {
            dayNumber: 2,
            title: 'Essaouira → Taghazout (Déjeuner) → Agadir : Journée Solidaire Argan & Show Cosmétique',
            description: 'Petit-déjeuner puis départ par la route côtière vers Agadir. Déjeuner à Taghazout face aux spots de l\'océan. Poursuite vers Agadir pour une enrichissante journée de solidarité : visite des associations de femmes productrices d\'argan et produits cosmétiques avec participation au show de fabrication artisanale. Passer la nuit à Agadir.',
            stops: ['Petit-déjeuner', 'Départ vers Agadir', 'Déjeuner à Taghazout', 'Journée de solidarité', 'Associations d\'argan & cosmétique', 'Participation au show', 'Passer la nuit à Agadir']
          },
          {
            dayNumber: 3,
            title: 'Agadir → Ouarzazate : Studios Cinématographiques & Ancienne Kasbah de Glaoui',
            description: 'Petit-déjeuner puis départ vers Ouarzazate, la capitale du cinéma marocain. Visite des célèbres studios cinématographiques internationaux où ont été tournés les chefs-d\'œuvre du cinéma. Découverte de l\'impressionnante ancienne Kasbah de Glaoui. Passer la nuit à Ouarzazate.',
            stops: ['Petit-déjeuner', 'Départ vers Ouarzazate', 'Visite des studios cinématographiques', 'Ancienne Kasbah de Glaoui', 'Passer la nuit à Ouarzazate']
          },
          {
            dayNumber: 4,
            title: 'Ouarzazate → Marrakech : Traversée du Haut-Atlas & Journée Libre aux Programmes au Choix',
            description: 'Petit-déjeuner puis départ vers Marrakech à travers les majestueux paysages du col du Tizi n\'Tichka. Arrivée à Marrakech pour une agréable journée libre des programmes aux choix et facultatifs. Bon séjour !',
            stops: ['Petit-déjeuner', 'Départ vers Marrakech', 'Traversée du Haut-Atlas', 'Journée libre & programmes aux choix facultatifs']
          }
        ]
      }
    ];
  }

  // --- DESTINATIONS DATA ---
  get destinations(): DestinationTranslation[] {
    const lang = this.currentLang();
    if (lang === 'en') {
      return [
        {
          id: 'agafay',
          name: 'Agafay Desert',
          tagline: 'Desert Escape Just 45 Minutes from Marrakech',
          tag: 'Desert Glamping & Sunset',
          description: 'Less than an hour from the bustling medina of Marrakech, the lunar Agafay Desert spreads its rolling hills and dramatic gullies. Enjoy thrilling quad or buggy safaris by day, relax by a cliffside pool, and dine beneath starry skies facing breathtaking live fire performances.',
          highlights: [
            'Only 45 minutes from Marrakech city center',
            'Luxury desert camps and panoramic swimming pools',
            'Perfect terrain for thrilling Quad & Buggy safaris',
            'Dinner shows with bonfires and live Gnawa music'
          ],
          idealFor: 'Couples, friends, celebrations & express desert trips',
          bestTime: 'All year round (superb in late afternoon & evening)',
          imageUrl: 'assets/agafay-amanjena.jpeg'
        },
        {
          id: 'merzouga',
          name: 'Merzouga & Erg Chebbi Dunes',
          tagline: 'Magical Immersion in the Heart of the Real Sahara',
          tag: 'Grand Saharan Desert',
          description: 'The ultimate Moroccan desert experience. The golden dunes of Erg Chebbi rise up to 150 meters high. Medade Travel takes you on private journeys to sleep in comfortable private camps, embrace infinite silence, and share Berber drumming around blazing campfires.',
          highlights: [
            'Vast golden sand dunes as far as the eye can see',
            'Camel trekking at dusk and dawn',
            'Comfortable nomad camps with private facilities',
            'Traditional music from the Gnawa masters of Khamlia'
          ],
          idealFor: 'Honeymoons, nature lovers, photographers & adventurers',
          bestTime: 'October to May (pleasant mild temperatures and crystal skies)',
          imageUrl: 'assets/merzouga-dunes.jpeg'
        },
        {
          id: 'atlas',
          name: 'High Atlas & Berber Valleys',
          tagline: 'Majestic Peaks & Legendary Hospitality',
          tag: 'Nature & High Mountains',
          description: 'Breathe crisp fresh mountain air in the High Atlas. From the green valleys to authentic Berber stone villages beneath Mount Toubkal (4,167 m), discover warm hospitality, refreshing rivers, and authentic tagines prepared with local love.',
          highlights: [
            'Guided scenic hikes adapted to all fitness levels',
            'Fresh organic tagine prepared by local village families',
            'Visiting traditional argan oil and carpet weaving workshops',
            'Spectacular waterfalls of Ouzoud and Ourika'
          ],
          idealFor: 'Families, hikers, craft enthusiasts & summer cool retreat',
          bestTime: 'Spring, summer (cool retreat) and autumn',
          imageUrl: 'assets/atlas-mountains-villages.jpeg'
        },
        {
          id: 'essaouira',
          name: 'Essaouira Mogador',
          tagline: 'Atlantic Ocean Breeze on Historic Ramparts',
          tag: 'Coastal Beauty',
          description: 'A historic fortress city caressed by ocean trade winds, Essaouira enchants with whitewashed houses, cobalt blue shutters, and vibrant fishing docks. Savor freshly grilled seafood, browse bohemian art galleries, and enjoy horseback riding along golden shores.',
          highlights: [
            'Easy day or multi-day trip 2.5 hours from Marrakech',
            'UNESCO World Heritage pedestrian medina',
            'Fresh harbor seafood dining by the ramparts',
            'Unique thuya woodwork and leather craft ateliers'
          ],
          idealFor: 'Relaxing getaways, art lovers, seafood & ocean breezes',
          bestTime: 'All year round (mild temperatures even in peak summer)',
          imageUrl: 'assets/essaouira-mogador.jpeg'
        }
      ];
    }

    if (lang === 'ar') {
      return [
        {
          id: 'agafay',
          name: 'صحراء أغفاي',
          tagline: 'سحر الصحراء على بُعد 45 دقيقة فقط من مراكش',
          tag: 'مخيمات فاخرة وغروب الشمس',
          description: 'على بعد أقل من ساعة من صخب مدينة مراكش، تمتد صحراء أغفاي الصخرية بتلالها الفريدة وطبيعتها القمرية. المكان الأمثل لمغامرات الكواد والباغي نهاراً، والاسترخاء بجانب مسبح بانورامي، ثم تناول العشاء تحت النجوم مع استعراضات النار والموسيقى التراثية.',
          highlights: [
            'تبعد 45 دقيقة فقط عن قلب مدينة مراكش',
            'مخيمات ضيافة فاخرة ومسابح بإطلالات بانورامية',
            'مسارات مثالية لرحلات الكواد والباغي الصحراوي',
            'سهرات عشاء ساحرة حول النار مع فرق كناوة الفلكلورية'
          ],
          idealFor: 'الأزواج، الأصدقاء، المناسبات والرحلات السريعة',
          bestTime: 'طوال أيام السنة (رائعة وقت العصر والمساء)',
          imageUrl: 'assets/agafay-amanjena.jpeg'
        },
        {
          id: 'merzouga',
          name: 'كثبان مرزوكة وعرق الشبي',
          tagline: 'معايشة سحر الصحراء الكبرى الأسطورية',
          tag: 'الصحراء الكبرى الشامخة',
          description: 'التجربة الصحراوية الأرقى في المغرب. ترتفع كثبان عرق الشبي الذهبية حتى 150 متراً. تنقلكم مداد ترافيل في جولات مريحة للمبيت في مخيمات مجهزة ومريحة، وتأمل السكون المهيب ومشاركة الأهازيج الصحراوية حول نار المخيم.',
          highlights: [
            'كثبان رملية ذهبية تمتد على مد البصر',
            'قوافل الجمال عند شروق الشمس وغروبها',
            'خيام مجهزة بكافة سبل الراحة والمرافق الخاصة',
            'موسيقى كناوة الأصيلة مع رواد فن كناوة بخملية'
          ],
          idealFor: 'رحلات شهر العسل، عشاق الطبيعة الخلابة وهواة التصوير',
          bestTime: 'من أكتوبر إلى ماي (أجواء معتدلة وسماء صافية)',
          imageUrl: 'assets/merzouga-dunes.jpeg'
        },
        {
          id: 'atlas',
          name: 'جبال الأطلس والقرى الأمازيغية',
          tagline: 'القمم الشامخة والضيافة البربرية الكريمة',
          tag: 'طبيعة وجبال شاهقة',
          description: 'تنفسوا الهواء النقي في جبال الأطلس الكبير. من الوديان الخضراء وصولاً إلى القرى التراثية عند سفح قمة توبقال (4167 م)، استمتعوا بكرم الضيافة الأمازيغية، ومياه الجداول العذبة، وأشهى طواجن الطين التقليدية.',
          highlights: [
            'مسارات مشي جبلي برفقة مرشدين محليين محترفين',
            'طاجين بلدي أصيل يتم إعداده من خيرات القرية',
            'زيارة تعاونيات زيت الأركان وصناعة الزرابي اليدوية',
            'شلالات أوزود وأوريكا المائية الرائعة'
          ],
          idealFor: 'العائلات، هواة المشي، عشاق الحرف التقليدية والانتعاش',
          bestTime: 'الربيع، الصيف (ملاذ بارد من الحرارة) والخريف',
          imageUrl: 'assets/atlas-mountains-villages.jpeg'
        },
        {
          id: 'essaouira',
          name: 'الصويرة موغادور',
          tagline: 'نسيم المحيط العليل والأسوار البرتغالية التاريخية',
          tag: 'جمال الساحل الأطلسي',
          description: 'مدينة ساحلية عريقة تداعبها رياح الأطلسي، تسحر الصويرة زائريها بأزقتها البيضاء ونوافذها الزرقاء، وميناء الصيد الحيوي. تذوقوا أشهى الأسماك الطازجة المشوية، وتجولوا في معارض الفن، واستمتعوا بركوب الخيل على الشاطئ.',
          highlights: [
            'رحلة سهلة ومريحة على بُعد ساعتين ونصف من مراكش',
            'مدينة عتيقة مخصصة للمشاة مصنفة تراثاً عالمياً لليونسكو',
            'غداء أسماك طازجة أمام الميناء والأسوار التاريخية',
            'ورشات نقش خشب العرعار النادر والمصنوعات الجلدية'
          ],
          idealFor: 'الاستجمام الهادئ، عشاق الفن، المأكولات البحرية وهواء البحر',
          bestTime: 'طوال السنة (درجات حرارة لطيفة حتى في ذروة الصيف)',
          imageUrl: 'assets/essaouira-mogador.jpeg'
        }
      ];
    }

    // Default French
    return [
      {
        id: 'agafay',
        name: 'Désert d\'Agafay',
        tagline: 'L\'Échappée Désertique à 45 min de Marrakech',
        tag: 'Cœur de Notre Activité',
        description: 'À moins d\'une heure de la trépidante médina de Marrakech, le désert minéral d\'Agafay déploie ses collines arides et ses canyons sculptés par le vent. C\'est le théâtre idéal pour vivre l\'intensité du quad et du buggy le jour, se détendre au bord d\'une piscine turquoise panoramique, puis dîner sous la voûte étoilée devant un spectacle de cracheurs de feu.',
        highlights: [
          'Accessible en 45 minutes depuis le centre de Marrakech',
          'Camps de tentes de luxe et piscines panoramiques',
          'Pistes parfaites pour safaris Quad & Buggy',
          'Dîners spectacles avec feux de camp et musiciens Gnawa'
        ],
        idealFor: 'Couples, groupes d\'amis, anniversaires & séjours express',
        bestTime: 'Toute l\'année (splendide en fin d\'après-midi & soirée)',
        imageUrl: 'assets/agafay-amanjena.jpeg'
      },
      {
        id: 'merzouga',
        name: 'Dunes de Merzouga & Erg Chebbi',
        tagline: 'L\'Immersion Magique au Cœur du Sahara',
        tag: 'Grand Désert Saharien',
        description: 'L\'expérience ultime du désert marocain. Les dunes dorées d\'Erg Chebbi s\'élèvent jusqu\'à 150 mètres de haut. Medade Travel vous emmène en circuit privé pour dormir dans des bivouacs de luxe exclusifs, contempler le silence infini et partager les chants traditionnels autour d\'un grand feu sous des millions d\'étoiles.',
        highlights: [
          'Dunes de sable fin doré à perte de vue',
          'Caravane chamelière au crépuscule et à l\'aube',
          'Bivouacs tout confort avec sanitaires privés et lits royaux',
          'Musique traditionnelle des maîtres Gnawa de Khamlia'
        ],
        idealFor: 'Voyages de noces, amoureux de nature sauvage, photographes',
        bestTime: 'D\'octobre à mai (températures douces et ciel pur)',
        imageUrl: 'assets/merzouga-dunes.jpeg'
      },
      {
        id: 'atlas',
        name: 'Haut-Atlas & Vallées Berbères',
        tagline: 'Les Cimes Majestueuses & l\'Hospitalité Authentique',
        tag: 'Nature & Montagnes',
        description: 'Respirez l\'air pur des montagnes du Haut-Atlas. De la verdoyante vallée de l\'Ourika au village d\'Imlil au pied du mont Toubkal (4 167 m), découvrez la gentillesse légendaire des Berbères, les cascades rafraîchissantes et les déjeuners pieds dans l\'eau.',
        highlights: [
          'Randonnées adaptées à tous les niveaux accompagnées par nos guides locaux',
          'Déjeuner tajine traditionnel préparé par les familles locales',
          'Visite des coopératives d\'huile d\'argan et de tapis',
          'Cascades spectaculaires d\'Ourika et d\'Ouzoud'
        ],
        idealFor: 'Familles, randonneurs, amateurs d\'artisanat et de fraîcheur',
        bestTime: 'Printemps, été (refuge contre la chaleur) et automne',
        imageUrl: 'assets/atlas-mountains-villages.jpeg'
      },
      {
        id: 'essaouira',
        name: 'Essaouira Mogador',
        tagline: 'L\'Air du Large sur les Remparts Atlantiques',
        tag: 'Côte Océane',
        description: 'Ancienne forteresse portugaise balayée par les alizés, Essaouira séduit par sa médina blanchie à la chaux, ses volets bleus indigo et son port de pêche animé. Dégustez des poissons grillés à la criée, flânez dans les galeries d\'art et profitez d\'un rythme doux et apaisant.',
        highlights: [
          'Excursion journée facile à 2h30 de Marrakech en voiture privée',
          'Médina piétonne classée au patrimoine mondial de l\'UNESCO',
          'Déjeuner de fruits de mer frais face au port historique',
          'Ateliers d\'ébénisterie en bois de thuya et cuir'
        ],
        idealFor: 'Journée détente, amateurs d\'art, de poisson frais et de brise marine',
        bestTime: 'Toute l\'année (températures douces même en plein été)',
        imageUrl: 'assets/essaouira-mogador.jpeg'
      }
    ];
  }

  // --- HOME TOURS CATALOG ---
  get homeTours(): TourTranslation[] {
    const lang = this.currentLang();
    if (lang === 'en') {
      return [
        {
          id: 'circuit-1',
          category: 'sahara',
          badge: 'Tour 1 • Signature',
          badgeType: 'bestseller',
          title: 'Tour 1: Ouzoud Falls, Mount Ayachi & Merzouga Dunes',
          duration: '4 Days / 3 Nights',
          location: 'Ouzoud • Midelt • Ayachi Mountain • Merzouga • Ouarzazate',
          priceNote: 'Transport & Camp Included',
          priceAmount: 'Custom Quote',
          description: 'The ultimate journey from the High Atlas to the Sahara: Ouzoud waterfalls, mountain picnic in Ayachi, night under a desert nomad tent, Todra Gorges, and Ouarzazate film studios.',
          highlights: ['Picnic in high Ayachi mountain', 'Sunset camel ride & Berber tent', 'Todra Gorges & Ouarzazate Studios'],
          rating: 5.0,
          reviewsCount: 312,
          imageUrl: 'assets/ouzoud-waterfalls.jpeg',
          link: '/circuits'
        },
        {
          id: 'circuit-2',
          category: 'agafay',
          badge: 'Tour 2 • "Pure Pleasure"',
          badgeType: 'luxury',
          title: 'Tour 2: "Pure Pleasure" Asni, Agafay Luxury Camp & Marrakech Riad',
          duration: '3 Days / 2 Nights',
          location: 'Moulay Brahim • Asni • Agafay Desert • Marrakech Riad',
          priceNote: 'Pool, Activities & Show',
          priceAmount: 'VIP Package',
          description: 'Guaranteed relaxation and celebration: mountain stay in Asni, pool & 1h activity (camel, quad or buggy) in Agafay, grand dinner show with belly dancer and fire eater, then riad with hammam & massage in Marrakech.',
          highlights: ['1h Camel, Quad or Buggy at sunset', 'Dinner show with fire & oriental dancer', 'Luxury glamping tent + Hammam & Massage'],
          rating: 4.9,
          reviewsCount: 284,
          imageUrl: 'assets/star-lit-nights.jpeg',
          link: '/circuits'
        },
        {
          id: 'circuit-3',
          category: 'prive',
          badge: 'Tour 3 • Sea & Sand',
          badgeType: 'bestseller',
          title: 'Tour 3: "Sea & Sand" Essaouira, Taghazout, Agadir & Ouarzazate',
          duration: '4 Days / 3 Nights',
          location: 'Essaouira • Taghazout • Agadir • Ouarzazate Kasbahs',
          priceNote: 'Transport from 450 MAD/d',
          priceAmount: 'Custom Quote',
          description: 'Ocean winds and southern treasures: horseback riding on Essaouira beach, surf vibes in Taghazout, argan solidarity day in Agadir, film studios and historic Glaoui Kasbah in Ouarzazate.',
          highlights: ['Sunset beach horseback ride facing waves', 'Solidarity day at argan cooperatives & craft show', 'Movie studios & ancient Glaoui Kasbah'],
          rating: 4.9,
          reviewsCount: 198,
          imageUrl: 'assets/taghazout-morocco.jpeg',
          link: '/circuits'
        }
      ];
    }

    if (lang === 'ar') {
      return [
        {
          id: 'circuit-1',
          category: 'sahara',
          badge: 'الرحلة 1 • مميزة',
          badgeType: 'bestseller',
          title: 'الرحلة 1: شلالات أوزود، جبل العياشي وكثبان مرزوكة',
          duration: '4 أيام / 3 ليالٍ',
          location: 'أوزود • ميدلت • جبل العياشي • مرزوكة • ورزازات',
          priceNote: 'شامل النقل والمخيم',
          priceAmount: 'حسب الطلب',
          description: 'ملحمة ساحرة من قمم الأطلس إلى الصحراء الكبرى: شلالات أوزود، نزهة جبلية بالعياشي، مبيت بخيمة بربرية بمرزوكة، مضايق تودغى واستوديوهات السينما بورزازات.',
          highlights: ['نزهة غداء بجبل العياشي الشامخ', 'غروب الشمس على الجمال والمبيت بالخيمة', 'مضايق تودغى واستوديوهات ورزازات'],
          rating: 5.0,
          reviewsCount: 312,
          imageUrl: 'assets/ouzoud-waterfalls.jpeg',
          link: '/circuits'
        },
        {
          id: 'circuit-2',
          category: 'agafay',
          badge: 'الرحلة 2 • "متعة لا تنتهي"',
          badgeType: 'luxury',
          title: 'الرحلة 2: "متعة لا تنتهي" أسني، مخيم أغفاي ورياض بمراكش',
          duration: '3 أيام / ليلتان',
          location: 'مولاي إبراهيم • أسني • صحراء أغفاي • رياض مراكش',
          priceNote: 'مسبح، أنشطة وسهرة فنية',
          priceAmount: 'باقة VIP',
          description: 'متعة واسترخاء مضمونان: مبيت بأسني في الجبل، مسبح وساعة أنشطة (جمال، كواد أو باغي) بأغفاي، سهرة عشاء مع راقصة شرقية واستعراض النار، ثم رياض مع حمام ومساج بمراكش.',
          highlights: ['ساعة أنشطة بالغروب (جمال/كواد/باغي)', 'سهرة عشاء مع رقص شرقي واستعراض النار', 'مبيت بخيمة فاخرة + حمام ومساج'],
          rating: 4.9,
          reviewsCount: 284,
          imageUrl: 'assets/star-lit-nights.jpeg',
          link: '/circuits'
        },
        {
          id: 'circuit-3',
          category: 'prive',
          badge: 'الرحلة 3 • بين البحر والبر',
          badgeType: 'bestseller',
          title: 'الرحلة 3: "بين البحر والبر" الصويرة، تغازوت، أكادير وورزازات',
          duration: '4 أيام / 3 ليالٍ',
          location: 'الصويرة • تغازوت • أكادير • قصبات ورزازات',
          priceNote: 'النقل من 450 درهم/يوم',
          priceAmount: 'حسب الطلب',
          description: 'نسيم المحيط وكنوز الجنوب: ركوب الخيل على شاطئ الصويرة وقت الغروب، شواطئ تغازوت، يوم تضامني لتعاونيات الأركان بأكادير، استوديوهات السينما وقصبة الكلاوي بورزازات.',
          highlights: ['جولة خيل بالشاطئ أمام الأمواج وقت الغروب', 'يوم تضامني لتعاونيات الأركان وحضور العرض', 'استوديوهات السينما وقصبة الكلاوي العريقة'],
          rating: 4.9,
          reviewsCount: 198,
          imageUrl: 'assets/taghazout-morocco.jpeg',
          link: '/circuits'
        }
      ];
    }

    // Default French
    return [
      {
        id: 'circuit-1',
        category: 'sahara',
        badge: 'Circuit 1 • Signature',
        badgeType: 'bestseller',
        title: 'Circuit 1 : Cascades d\'Ouzoud, Montagne Ayachi & Merzouga',
        duration: '4 Jours / 3 Nuits',
        location: 'Ouzoud • Midelt • Massif Ayachi • Dunes Merzouga • Ouarzazate',
        priceNote: 'Transport & Bivouac inclus',
        priceAmount: 'Sur Devis',
        description: 'L\'odyssée complète de l\'Atlas au Sahara : cascades d\'Ouzoud, journée pique-nique à la montagne Ayachi, nuit sous tente berbère à Merzouga, Gorges du Todra et studios de cinéma d\'Ouarzazate.',
        highlights: ['Pique-nique en pleine montagne Ayachi', 'Coucher de soleil à dromadaire & tente berbère', 'Gorges du Todra & Studios Ouarzazate'],
        rating: 5.0,
        reviewsCount: 312,
        imageUrl: 'assets/ouzoud-waterfalls.jpeg',
        link: '/circuits'
      },
      {
        id: 'circuit-2',
        category: 'agafay',
        badge: 'Circuit "Que du Plaisir"',
        badgeType: 'luxury',
        title: 'Circuit 2 : "Que du Plaisir" Asni, Bivouac Agafay & Riad Marrakech',
        duration: '3 Jours / 2 Nuits',
        location: 'Moulay Brahim • Asni • Désert d\'Agafay • Riad Marrakech',
        priceNote: 'Piscine, Activités & Spectacle',
        priceAmount: 'Formule VIP',
        description: 'Plaisir et détente garantis : nuitée en montagne à Asni, piscine & 1h activité (dromadaire, quad ou buggy) à Agafay, dîner spectacle avec danseuse orientale et cracheur de feu, puis riad & hammam massage à Marrakech.',
        highlights: ['1h Dromadaire, Quad ou Buggy au coucher de soleil', 'Dîner spectacle feu & danseuse orientale', 'Nuit sous tente luxe + Hammam & Massage'],
        rating: 4.9,
        reviewsCount: 284,
        imageUrl: 'assets/star-lit-nights.jpeg',
        link: '/circuits'
      },
      {
        id: 'circuit-3',
        category: 'prive',
        badge: 'Circuit Mer - Terre',
        badgeType: 'bestseller',
        title: 'Circuit 3 : "Mer - Terre" Essaouira, Taghazout, Agadir & Ouarzazate',
        duration: '4 Jours / 3 Nuits',
        location: 'Essaouira • Taghazout • Agadir • Kasbahs Ouarzazate',
        priceNote: 'Transport dès 450 DH/j',
        priceAmount: 'Sur Devis',
        description: 'L\'air de l\'océan et les trésors du Sud : balade à cheval sur la plage d\'Essaouira, vagues de Taghazout, journée solidaire argan à Agadir, studios de cinéma et Kasbah de Glaoui à Ouarzazate.',
        highlights: ['Balade à cheval face aux vagues au coucher de soleil', 'Journée solidaire coopératives d\'argan & show', 'Studios de cinéma & ancienne Kasbah de Glaoui'],
        rating: 4.9,
        reviewsCount: 198,
        imageUrl: 'assets/taghazout-morocco.jpeg',
        link: '/circuits'
      }
    ];
  }

  get circuitsPage(): CircuitsPageData {
    return CIRCUITS_PAGE_DATA[this.currentLang()];
  }

  get destinationsPage(): DestinationsPageData {
    return DESTINATIONS_PAGE_DATA[this.currentLang()];
  }

  get contactPage(): ContactPageData {
    return CONTACT_PAGE_DATA[this.currentLang()];
  }

  get homePage(): HomePageData {
    return HOME_PAGE_DATA[this.currentLang()];
  }
}
