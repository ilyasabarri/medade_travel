import { Language } from './language.service';

export interface CircuitsPageData {
  heroTag: string;
  heroTitle: string;
  heroSubtitle: string;
  rythmeLabel: string;
  transportBadge: string;
  inclusionsTitle: string;
  btnBookWa: string;
  btnCustomize: string;
  guaranteeBadge: string;
  detailedProgramTag: string;
  dayByDayTitle: string;
  clickHint: string;
  dayPrefix: string;
  keyStopsLabel: string;
  transportSectionTag: string;
  transportSectionTitle: string;
  transportSectionDesc: string;
  card1: {
    tag: string;
    from: string;
    price: string;
    unit: string;
    title: string;
    desc: string;
    perks: string[];
    btn: string;
    waMsg: string;
  };
  card2: {
    tag: string;
    from: string;
    price: string;
    unit: string;
    title: string;
    desc: string;
    perks: string[];
    btn: string;
    waMsg: string;
  };
  guaranteeTag: string;
  guaranteeTitle: string;
  guarantees: Array<{ accent: string; title: string; desc: string }>;
}

export interface DestinationsPageData {
  heroTag: string;
  heroTitle: string;
  heroSubtitle: string;
  highlightsTitle: string;
  idealForLabel: string;
  bestTimeLabel: string;
  btnAssociatedCircuits: string;
}

export interface ContactPageData {
  heroTag: string;
  heroTitle: string;
  heroSubtitle: string;
  method1: { num: string; title: string; desc: string; phone: string; btn: string };
  method2: { num: string; title: string; desc: string; phone: string; btn: string };
  method3: { num: string; title: string; desc: string; handle: string; btn: string };
  formHeading: string;
  formSubtext: string;
  labelName: string;
  placeholderName: string;
  labelPhone: string;
  placeholderPhone: string;
  labelDate: string;
  labelGuests: string;
  guestOptions: Array<{ val: string; label: string }>;
  labelCircuit: string;
  circuitOptions: Array<{ val: string; label: string }>;
  labelTransport: string;
  transportOptions: Array<{ val: string; label: string }>;
  labelNotes: string;
  placeholderNotes: string;
  btnSubmit: string;
  sidebarTag: string;
  sidebarTitle: string;
  reasons: Array<{ num: string; title: string; desc: string }>;
  officeTitle: string;
  officeAddress: string;
  officeLine1: string;
  officeLine2: string;
  officeEmail?: string;
  faqList: Array<{ question: string; answer: string; open: boolean }>;
  waMessageTemplate: (form: any) => string;
}

export interface HomePageData {
  heroBadge: string;
  heroEyebrow: string;
  heroTitle: string;
  heroTitleEm: string;
  heroSubtitle: string;
  btnExplore: string;
  btnTransport: string;
  scrollHint: string;
  trustItems: Array<{ title: string; desc: string }>;
  quickAnswerTag: string;
  quickAnswerQ: string;
  quickAnswerA: string;
  catalogTag: string;
  catalogTitle: string;
  catalogTitleEm: string;
  catalogSubtitle: string;
  tabAll: string;
  tab1: string;
  tab2: string;
  tab3: string;
  filterShowing: string;
  filterSuffix: string;
  filterReset: string;
  cardFrom: string;
  cardRatingNote: string;
  cardReviewsVerified: string;
  cardBtnDetails: string;
  cardBtnWa: string;
  compTag: string;
  compTitle: string;
  compTitleEm: string;
  compSubtitle: string;
  compHeaders: [string, string, string, string];
  compRows: Array<{ label: string; val1: string; val2: string; val3: string }>;
  whyTag: string;
  whyTitle: string;
  whyTitleEm: string;
  whySubtitle: string;
  whyCards: Array<{ accent: string; title: string; desc: string }>;
  expTag: string;
  expTitle: string;
  expTitleEm: string;
  expDesc: string;
  expStats: Array<{ num: string; label: string }>;
  expBtnWa: string;
  testiTag: string;
  testiTitle: string;
  testiTitleEm: string;
  testiSubtitle: string;
  testiBadge: string;
  testimonials: Array<{ text: string; author: string; location: string }>;
  faqTag: string;
  faqTitle: string;
  faqTitleEm: string;
  faqSubtitle: string;
  faqItems: Array<{ question: string; answer: string; open: boolean }>;
  ctaPill: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaBtnWa: string;
  ctaBtnQuote: string;
}

export const CIRCUITS_PAGE_DATA: Record<Language, CircuitsPageData> = {
  fr: {
    heroTag: 'PROGRAMMES & CIRCUITS SUR MESURE AU MAROC',
    heroTitle: 'Nos Nouveaux Circuits & Expéditions',
    heroSubtitle: 'Du Haut-Atlas à la montagne Ayachi, des dunes dorées de Merzouga aux côtes atlantiques d\'Essaouira et Taghazout, jusqu\'aux fééries nocturnes d\'Agafay et d\'Ouarzazate. Formules avec chauffeur privé dédié ou véhicule sans chauffeur dès 450 DH/jour.',
    rythmeLabel: 'Rythme :',
    transportBadge: 'TRANSPORT FLEXIBLE',
    inclusionsTitle: 'Inclus dans ce programme :',
    btnBookWa: 'Réserver ce Circuit sur WhatsApp',
    btnCustomize: 'Personnaliser mon itinéraire',
    guaranteeBadge: 'Bivouac & Chauffeur au Choix',
    detailedProgramTag: 'PROGRAMME DÉTAILLÉ',
    dayByDayTitle: 'L\'Itinéraire Jour par Jour',
    clickHint: 'Cliquez sur un jour pour ouvrir les détails de l\'étape',
    dayPrefix: 'Jour',
    keyStopsLabel: 'Étapes Clés & Temps Forts :',
    transportSectionTag: 'SERVICE TRANSPORT & MOBILITÉ',
    transportSectionTitle: 'Transport au Choix au Maroc',
    transportSectionDesc: 'Voyagez en toute liberté selon votre propre rythme ou laissez-vous guider par nos chauffeurs expérimentés.',
    card1: {
      tag: 'Autonomie Complète',
      from: 'À partir de',
      price: '450',
      unit: 'DHS / Jour',
      title: 'Location Sans Chauffeur',
      desc: 'Idéal pour les voyageurs autonomes souhaitant sillonner le Maroc en toute liberté. Flotte de véhicules récents, citadines ou SUV tout confort.',
      perks: [
        'Véhicules récents et climatisés',
        'Prise en charge à l\'aéroport ou à votre riad',
        'Kilométrage adapté & assistance locale 7j/7',
        'Formalités simples et transparentes'
      ],
      btn: 'Réserver Sans Chauffeur',
      waMsg: 'Bonjour Medade Travel, je souhaite louer un véhicule sans chauffeur à partir de 450 DH/jour. Quelles sont vos disponibilités ?'
    },
    card2: {
      tag: 'Service VIP Recommandé',
      from: 'Confort & Sérénité',
      price: 'Sur Devis',
      unit: 'Direct Local',
      title: 'Véhicule avec Chauffeur Dédié',
      desc: 'Nos chauffeurs professionnels et bilingues sont à votre entière disposition pendant toute la durée de votre séjour, pour vos transferts ou circuits personnalisés.',
      perks: [
        'Chauffeurs locaux agréés, ponctuels & courtois',
        '4x4 tout-terrain ou Minivans Mercedes spacieux',
        'Carburant, péages et assurance inclus',
        'Arrêts photos, pauses thé et conseils d\'initiés'
      ],
      btn: 'Demander un Chauffeur Dédié',
      waMsg: 'Bonjour Medade Travel, je recherche un véhicule avec chauffeur privé dédié pour mon séjour. Pourriez-vous me transmettre vos tarifs ?'
    },
    guaranteeTag: 'ENGAGEMENT QUALITÉ',
    guaranteeTitle: 'Nos Garanties de Voyage',
    guarantees: [
      { accent: '01', title: 'Véhicules Récents & Confortables', desc: 'Minivans Mercedes, 4x4 tout-terrain et véhicules de location récents et parfaitement entretenus avec climatisation.' },
      { accent: '02', title: 'Riads, Hôtels & Bivouacs Sélectionnés', desc: 'De Midelt à Merzouga en passant par Asni, Agafay, Essaouira et Ouarzazate, chaque étape privilégie authenticité et propreté.' },
      { accent: '03', title: 'Chauffeurs à Votre Entière Disposition', desc: 'Disponibilité totale de nos chauffeurs pour s\'adapter à votre rythme, vos envies d\'arrêts et vos découvertes spontanées.' },
      { accent: '04', title: 'Tarifs Directs dès 450 DH/j', desc: 'Des tarifs directs d\'agence marocaine sans commission intermédiaire, pour un voyage serein et économique.' }
    ]
  },
  en: {
    heroTag: 'CUSTOM TAILORED TOURS & EXPEDITIONS IN MOROCCO',
    heroTitle: 'Our Signature Tours & Private Expeditions',
    heroSubtitle: 'From the High Atlas to Mount Ayachi, from the golden dunes of Merzouga to the Atlantic shores of Essaouira and Taghazout, to magical evenings in Agafay and Ouarzazate. Flexible transport options: self-drive from 450 MAD/day or dedicated private chauffeur.',
    rythmeLabel: 'Pace:',
    transportBadge: 'FLEXIBLE TRANSPORT',
    inclusionsTitle: 'Included in this package:',
    btnBookWa: 'Book This Tour on WhatsApp',
    btnCustomize: 'Customize My Itinerary',
    guaranteeBadge: 'Camp & Chauffeur Options',
    detailedProgramTag: 'DETAILED ITINERARY',
    dayByDayTitle: 'Day-by-Day Journey',
    clickHint: 'Click on any day to expand itinerary details',
    dayPrefix: 'Day',
    keyStopsLabel: 'Key Highlights & Stops:',
    transportSectionTag: 'TRANSPORT & MOBILITY SOLUTIONS',
    transportSectionTitle: 'Morocco Transport of Your Choice',
    transportSectionDesc: 'Travel with absolute freedom at your own pace or let our experienced professional drivers take care of everything.',
    card1: {
      tag: 'Total Independence',
      from: 'Starting from',
      price: '450',
      unit: 'MAD / Day',
      title: 'Self-Drive Vehicle Rental',
      desc: 'Ideal for independent travellers looking to explore Morocco at their own rhythm. Modern fleet of air-conditioned city cars and comfortable SUVs.',
      perks: [
        'Recent, fully air-conditioned vehicles',
        'Free pick-up at airport or your riad',
        'Flexible mileage & 24/7 local road assistance',
        'Transparent contracts with zero hidden fees'
      ],
      btn: 'Book Self-Drive Rental',
      waMsg: 'Hello Medade Travel, I would like to book a self-drive vehicle starting from 450 MAD/day. What are your current availabilities?'
    },
    card2: {
      tag: 'Recommended VIP Service',
      from: 'Comfort & Peace of Mind',
      price: 'Custom Quote',
      unit: 'Direct Local Rate',
      title: 'Private Chauffeur at Disposal',
      desc: 'Our bilingual, licensed professional drivers are at your complete disposal throughout your entire stay for transfers or tailor-made tours.',
      perks: [
        'Certified, courteous and punctual local drivers',
        'Spacious Mercedes Minivans or rugged 4x4s',
        'Fuel, tolls, parking and full insurance included',
        'Scenic photo stops, tea breaks & insider tips'
      ],
      btn: 'Request Dedicated Chauffeur',
      waMsg: 'Hello Medade Travel, I would like to inquire about a vehicle with dedicated private chauffeur. Could you send me your pricing?'
    },
    guaranteeTag: 'QUALITY COMMITMENT',
    guaranteeTitle: 'Our Travel Guarantees',
    guarantees: [
      { accent: '01', title: 'Recent & Comfortable Fleet', desc: 'Mercedes minivans, rugged 4x4s, and well-maintained modern rental vehicles with premium air conditioning.' },
      { accent: '02', title: 'Handpicked Riads & Desert Camps', desc: 'From Midelt to Merzouga, Asni, Agafay, Essaouira, and Ouarzazate, each accommodation prioritizes authentic charm and cleanliness.' },
      { accent: '03', title: 'Chauffeurs at Your Complete Service', desc: 'Total driver availability tailored to your natural pace, spontaneous photo pauses, and personal discovery wishes.' },
      { accent: '04', title: 'Direct Rates from 450 MAD/day', desc: 'Local Moroccan agency direct pricing without middlemen or OTA commissions for a smooth and rewarding trip.' }
    ]
  },
  ar: {
    heroTag: 'برامج وجولات سياحية مخصصة في المغرب',
    heroTitle: 'جولاتنا ورحلاتنا السياحية الاستثنائية',
    heroSubtitle: 'من قمم الأطلس الكبير إلى جبل العياشي، ومن كثبان مرزوكة الذهبية إلى شواطئ الصويرة وتغازوت، وصولاً إلى ليالي أغفاي وورزازات الساحرة. مع خيارات نقل مرنة: كراء سيارة بدون سائق ابتداءً من 450 درهم/اليوم أو مع سائق خاص رهن إشارتكم.',
    rythmeLabel: 'طبيعة الرحلة:',
    transportBadge: 'نقل مرن حسب رغبتكم',
    inclusionsTitle: 'الخدمات المشمولة في هذا البرنامج:',
    btnBookWa: 'احجز هذه الجولة عبر واتساب',
    btnCustomize: 'تخصيص مسار الرحلة الخاص بي',
    guaranteeBadge: 'مخيم وسائق حسب الاختيار',
    detailedProgramTag: 'البرنامج التفصيلي',
    dayByDayTitle: 'مسار الرحلة يوماً بيوم',
    clickHint: 'اضغط على أي يوم لعرض تفاصيل المرحلة والأنشطة',
    dayPrefix: 'اليوم',
    keyStopsLabel: 'المحطات والأنشطة الرئيسية:',
    transportSectionTag: 'خدمات النقل والتنقل السياحي',
    transportSectionTitle: 'خيارات النقل السياحي بالمغرب',
    transportSectionDesc: 'تنقلوا بحرية تامة وفق جدولكم الخاص أو استمتعوا بالراحة مع سائقينا المحترفين.',
    card1: {
      tag: 'استقلالية تامة',
      from: 'ابتداءً من',
      price: '450',
      unit: 'درهم / اليوم',
      title: 'كراء سيارة بدون سائق',
      desc: 'الخيار الأمثل للمسافرين الراغبين في اكتشاف مدن وطبيعة المغرب بكل حرية. أسطول سيارات حديثة واقتصادية وسيارات دفع رباعي مريحة.',
      perks: [
        'سيارات حديثة ومكيفة بالكامل',
        'تسليم السيارة بالمطار أو بمقر إقامتكم',
        'مساعدة محلية ودعم فني على مدار الساعة 7/7',
        'إجراءات حجز بسيطة وشفافة وبدون تعقيدات'
      ],
      btn: 'حجز سيارة بدون سائق',
      waMsg: 'السلام عليكم مداد ترافيل، أود كراء سيارة بدون سائق ابتداءً من 450 درهم في اليوم. ما هي السيارات المتاحة لديكم؟'
    },
    card2: {
      tag: 'خدمة VIP ممتازة',
      from: 'راحة وأمان مطلق',
      price: 'حسب الطلب',
      unit: 'سعر مباشر محلي',
      title: 'سيارة مع سائق خاص رهن إشارتكم',
      desc: 'سائقونا المحترفون وذوو الخبرة في خدمتكم طوال فترة إقامتكم، لتأمين تنقلاتكم وجولاتكم السياحية الخاصة بكل راحة.',
      perks: [
        'سائقون محليون مرخصون، مهذبون وملتزمون بالمواعيد',
        'سيارات دفع رباعي 4x4 أو ميني فان مرسيدس فسيحة',
        'شامل الوقود، رسوم الطرق السريعة والتأمين الشامل',
        'توقفات حرة لالتقاط الصور والاستمتاع بالمناظر الطبيعية'
      ],
      btn: 'طلب سيارة مع سائق خاص',
      waMsg: 'السلام عليكم مداد ترافيل، أود طلب سيارة سياحية مريحة مع سائق خاص رهن إشارتنا. المرجو تزويدي بالأسعار والتفاصيل.'
    },
    guaranteeTag: 'التزامنا بالجودة',
    guaranteeTitle: 'ضماناتنا لرحلة ناجحة وممتعة',
    guarantees: [
      { accent: '01', title: 'أسطول سيارات حديث ومريح', desc: 'ميني فان مرسيدس، سيارات 4x4 وسيارات كراء حديثة ومكيفة تخضع لصيانة دورية صارمة.' },
      { accent: '02', title: 'رياضات وفنادق ومخيمات مختارة بعناية', desc: 'من ميدلت إلى مرزوكة وأسني وأغفاي والصويرة وورزازات، نضمن لكم إقامة تجمع بين الأصالة والنظافة التامة.' },
      { accent: '03', title: 'سائقون رهن إشارتكم طوال الوقت', desc: 'مرونة تامة لتلبية رغباتكم وتكييف التوقفات واستكشاف المواقع حسب راحتكم.' },
      { accent: '04', title: 'أسعار مباشرة تبدأ من 450 درهم/يوم', desc: 'أسعار وكالة مغربية محلية مباشرة بدون أي وسيط لضمان رحلة اقتصادية ومريحة.' }
    ]
  }
};

export const DESTINATIONS_PAGE_DATA: Record<Language, DestinationsPageData> = {
  fr: {
    heroTag: 'EXPLORER LE MAROC AUTHENTIQUE',
    heroTitle: 'Destinations & Régions du Maroc',
    heroSubtitle: 'Du désert minéral d\'Agafay aux dunes dorées de Merzouga, aux cimes du Haut-Atlas et à la côte d\'Essaouira. Découvrez les plus beaux décors du royaume avec vos guides locaux certifiés.',
    highlightsTitle: 'Points forts incontournables :',
    idealForLabel: 'Idéal pour :',
    bestTimeLabel: 'Meilleure période :',
    btnAssociatedCircuits: 'Voir les circuits associés'
  },
  en: {
    heroTag: 'EXPLORE AUTHENTIC MOROCCO',
    heroTitle: 'Destinations & Regions of Morocco',
    heroSubtitle: 'From the stone canyons of Agafay to the golden dunes of Merzouga, the High Atlas peaks, and the Atlantic coast of Essaouira. Experience the kingdom\'s most breathtaking landscapes with certified local guides.',
    highlightsTitle: 'Unmissable Highlights:',
    idealForLabel: 'Ideal For:',
    bestTimeLabel: 'Best Time to Visit:',
    btnAssociatedCircuits: 'View Associated Tours'
  },
  ar: {
    heroTag: 'اكتشفوا سحر وأصالة المغرب',
    heroTitle: 'أجمل وجهات ومناطق المغرب',
    heroSubtitle: 'من هضاب صحراء أغفاي الصخرية إلى رمال مرزوكة الذهبية، وقمم الأطلس الشامخة إلى ساحل الصويرة الأطلسي. استمتعوا بأروع المناظر الطبيعية برفقة فريقنا المحلي المعتمد.',
    highlightsTitle: 'أبرز المحطات والأنشطة المميزة:',
    idealForLabel: 'مثالي لـ:',
    bestTimeLabel: 'أفضل فترة للزيارة:',
    btnAssociatedCircuits: 'استكشف الجولات المرتبطة'
  }
};

export const CONTACT_PAGE_DATA: Record<Language, ContactPageData> = {
  fr: {
    heroTag: 'DISPONIBILITÉS & DEVIS DIRECTS',
    heroTitle: 'Contactez l\'Équipe Medade Travel',
    heroSubtitle: 'Une question, un devis pour un circuit sur-mesure ou une réservation de transport ? Notre équipe locale à Marrakech vous répond 7j/7 en direct.',
    method1: {
      num: '01',
      title: 'WhatsApp Direct 24/7',
      desc: 'Le canal le plus rapide pour réserver vos circuits et échanger avec votre conseiller.',
      phone: '+212 6 37 05 31 31',
      btn: 'Ouvrir WhatsApp'
    },
    method2: {
      num: '02',
      title: 'Appels Téléphoniques',
      desc: 'Nos conseillers locaux vous accueillent chaleureusement tous les jours de 8h à 22h.',
      phone: '+212 6 37 17 09 09',
      btn: 'Appeler Directement'
    },
    method3: {
      num: '03',
      title: 'Instagram Officiel',
      desc: 'Suivez nos vidéos quotidiennes à Agafay, Merzouga et dans tout le Maroc.',
      handle: '@medadetravel',
      btn: 'Voir le Profil'
    },
    formHeading: 'Formulaire de Devis & Réservation Express',
    formSubtext: 'Remplissez ce formulaire et recevez votre devis direct sans intermédiaire sur WhatsApp.',
    labelName: 'Nom & Prénom *',
    placeholderName: 'Ex: Jean Dupont',
    labelPhone: 'Numéro de Téléphone (WhatsApp) *',
    placeholderPhone: '+33 6 ... ou +212 6 ...',
    labelDate: 'Date Prévue d\'Arrivée / Voyage',
    labelGuests: 'Nombre de Voyageurs',
    guestOptions: [
      { val: '1', label: '1 personne (Voyage solo)' },
      { val: '2', label: '2 personnes (Couple / Duo)' },
      { val: '3-4', label: '3 à 4 personnes (Famille / Amis)' },
      { val: '5-8', label: '5 à 8 personnes (Petit groupe)' },
      { val: '8+', label: 'Plus de 8 personnes (Grand groupe / Événement)' }
    ],
    labelCircuit: 'Choix du Circuit *',
    circuitOptions: [
      { val: 'Circuit 1 : Cascades d\'Ouzoud, Montagne Ayachi & Merzouga (4 Jours)', label: 'Circuit 1 : Cascades d\'Ouzoud, Montagne Ayachi & Merzouga (4 Jours / 3 Nuits)' },
      { val: 'Circuit 2 : "Que du Plaisir" Asni, Agafay & Riad Marrakech (3 Jours)', label: 'Circuit 2 : "Que du Plaisir" Asni, Bivouac Agafay & Riad Marrakech (3 Jours / 2 Nuits)' },
      { val: 'Circuit 3 : "Mer - Terre" Essaouira, Taghazout, Agadir & Ouarzazate (4 Jours)', label: 'Circuit 3 : "Mer - Terre" Essaouira, Taghazout, Agadir & Ouarzazate (4 Jours / 3 Nuits)' }
    ],
    labelTransport: 'Formule de Transport au Choix',
    transportOptions: [
      { val: 'Avec chauffeur privé à entière disposition', label: 'Avec chauffeur privé à votre entière disposition' },
      { val: 'Sans chauffeur (location dès 450 DH / jour)', label: 'Sans chauffeur (location de véhicule à partir de 450 DH / jour)' }
    ],
    labelNotes: 'Notes ou Précisions Particulières',
    placeholderNotes: 'Ex: Nom de votre riad, célébration d\'un événement, souhaits particuliers...',
    btnSubmit: 'Envoyer la Demande sur WhatsApp Direct',
    sidebarTag: 'NOTRE PROMESSE LOCALE',
    sidebarTitle: 'Pourquoi Réserver Directement avec Medade Travel ?',
    reasons: [
      { num: '01', title: 'Zéro Commission de Plateforme', desc: 'Jusqu\'à 30% d\'économie comparé aux centrales de réservation tierces.' },
      { num: '02', title: 'Prise en Charge à Votre Riad', desc: 'Pas besoin de chercher un point de rendez-vous lointain. Notre chauffeur vient à votre hébergement.' },
      { num: '03', title: 'Annulation & Modification Flexibles', desc: 'Modifications faciles jusqu\'à 24h avant le départ sur simple message WhatsApp.' },
      { num: '04', title: 'Assistance 24/7 en Français & Arabe', desc: 'Une question à tout moment ? Notre équipe locale est toujours en ligne pour vous guider.' }
    ],
    officeTitle: 'Agence Locale Medade Travel',
    officeAddress: 'Adresse : Marrakech & Circuits Maroc',
    officeLine1: 'Ligne 1 : +212 6 37 05 31 31',
    officeLine2: 'Ligne 2 : +212 6 37 17 09 09',
    officeEmail: 'Email : contact@medadetravel.com',
    faqList: [
      {
        question: 'Quelles sont vos options de transport pour les circuits ?',
        answer: 'Nous proposons deux formules adaptées à vos envies : la location de véhicule sans chauffeur à partir de 450 DH (MAD) par jour pour une totale autonomie, ou la formule avec nos chauffeurs privés bilingues et professionnels à votre entière disposition tout au long de votre périple.',
        open: true
      },
      {
        question: 'Comment se passe la prise en charge à Marrakech ?',
        answer: 'Pour tous nos circuits, notre chauffeur privé ou navette vient vous chercher directement à votre hôtel ou au point accessible le plus proche de votre riad dans la médina. Nous vous confirmons l\'heure exacte la veille par WhatsApp.',
        open: false
      },
      {
        question: 'Quels sont les temps forts du Circuit 2 "Que du Plaisir" ?',
        answer: 'Le circuit "Que du Plaisir" combine une nuitée paisible en montagne d\'Atlas à Asni, une journée au désert d\'Agafay avec piscine, déjeuner, 1h d\'activité au choix (dromadaire, quad ou buggy) face au coucher de soleil, dîner festif avec spectacle (danseuse orientale et cracheur de feu), nuit sous tente de luxe, et enfin hébergement en riad à Marrakech avec hammam traditionnel et massage relaxant.',
        open: false
      },
      {
        question: 'Les activités et circuits conviennent-ils aux enfants et familles ?',
        answer: 'Tout à fait ! Les balades à dos de dromadaire, les nuits en bivouac, les journées piscine et les visites historiques sont parfaitement adaptées aux enfants. Pour les quads et buggys, les enfants peuvent monter en passagers en toute sécurité avec nos moniteurs certifiés.',
        open: false
      },
      {
        question: 'Quels modes de paiement acceptez-vous ?',
        answer: 'Nous acceptons les règlements en Dirhams marocains (MAD), Euros (€) ou Dollars ($) en espèces sur place, ainsi que par virement bancaire ou carte bancaire sécurisée pour les acomptes de réservation.',
        open: false
      },
      {
        question: 'Puis-je modifier ou annuler ma réservation ?',
        answer: 'Oui, nous offrons une flexibilité maximale. Vous pouvez modifier votre date jusqu\'à 24h avant l\'activité sans aucun frais en nous prévenant simplement sur WhatsApp.',
        open: false
      }
    ],
    waMessageTemplate: (form: any) =>
      `Bonjour Medade Travel,\n\nJe souhaite réserver ou obtenir un devis :\n- Nom : ${form.name || 'Client'}\n- Téléphone : ${form.phone || 'Non renseigné'}\n- Date prévue : ${form.travelDate || 'À convenir'}\n- Nombre de voyageurs : ${form.guests}\n- Circuit sélectionné : ${form.serviceType}\n- Formule Transport : ${form.transportOption}\n- Message : ${form.notes || 'Merci de me confirmer les disponibilités et le tarif direct.'}`
  },
  en: {
    heroTag: 'AVAILABILITY & DIRECT QUOTES',
    heroTitle: 'Contact the Medade Travel Team',
    heroSubtitle: 'Have a question, need a quote for a tailor-made tour, or want to rent a vehicle? Our local team in Marrakech is available 7 days a week directly on WhatsApp.',
    method1: {
      num: '01',
      title: 'Direct WhatsApp 24/7',
      desc: 'The fastest channel to book your tour and chat directly with your local advisor.',
      phone: '+212 6 37 05 31 31',
      btn: 'Open WhatsApp'
    },
    method2: {
      num: '02',
      title: 'Direct Phone Calls',
      desc: 'Our local Morocco experts warmly welcome your calls every day from 8 AM to 10 PM.',
      phone: '+212 6 37 17 09 09',
      btn: 'Call Directly'
    },
    method3: {
      num: '03',
      title: 'Official Instagram',
      desc: 'Watch daily travel clips and scenic desert moments across Morocco.',
      handle: '@medadetravel',
      btn: 'View Profile'
    },
    formHeading: 'Instant Quote & Booking Request',
    formSubtext: 'Fill out this quick form and receive your direct, middleman-free quotation on WhatsApp.',
    labelName: 'Full Name *',
    placeholderName: 'e.g. John Smith',
    labelPhone: 'Phone Number (WhatsApp) *',
    placeholderPhone: '+1 ... or +44 ... or +212 ...',
    labelDate: 'Expected Travel Date',
    labelGuests: 'Number of Travellers',
    guestOptions: [
      { val: '1', label: '1 traveller (Solo traveller)' },
      { val: '2', label: '2 travellers (Couple / Pair)' },
      { val: '3-4', label: '3 to 4 travellers (Family / Friends)' },
      { val: '5-8', label: '5 to 8 travellers (Small group)' },
      { val: '8+', label: 'More than 8 travellers (Large group / Event)' }
    ],
    labelCircuit: 'Selected Tour *',
    circuitOptions: [
      { val: 'Tour 1: Ouzoud Waterfalls, Ayachi Mountain & Merzouga Dunes (4 Days)', label: 'Tour 1: Ouzoud Waterfalls, Ayachi Mountain & Merzouga Dunes (4 Days / 3 Nights)' },
      { val: 'Tour 2: "Pure Pleasure" Asni, Agafay & Marrakech Riad (3 Days)', label: 'Tour 2: "Pure Pleasure" Asni, Agafay Luxury Camp & Marrakech Riad (3 Days / 2 Nights)' },
      { val: 'Tour 3: "Sea & Sand" Essaouira, Taghazout, Agadir & Ouarzazate (4 Days)', label: 'Tour 3: "Sea & Sand" Essaouira, Taghazout, Agadir & Ouarzazate (4 Days / 3 Nights)' }
    ],
    labelTransport: 'Preferred Transport Option',
    transportOptions: [
      { val: 'With dedicated private chauffeur at full disposal', label: 'With dedicated private chauffeur at full disposal' },
      { val: 'Self-drive rental (from 450 MAD / day)', label: 'Self-drive rental (modern vehicle from 450 MAD / day)' }
    ],
    labelNotes: 'Special Requests & Notes',
    placeholderNotes: 'e.g. Riad name, dietary requirements, birthday celebration...',
    btnSubmit: 'Send Request on Direct WhatsApp',
    sidebarTag: 'OUR LOCAL PROMISE',
    sidebarTitle: 'Why Book Directly with Medade Travel?',
    reasons: [
      { num: '01', title: 'Zero Platform Commission', desc: 'Save up to 30% compared to international third-party booking portals.' },
      { num: '02', title: 'Direct Riad Pick-up', desc: 'No need to search for far-away meeting points. Our driver picks you up right at your lodging.' },
      { num: '03', title: 'Flexible Booking & Changes', desc: 'Easy schedule modifications up to 24h prior with a simple WhatsApp message.' },
      { num: '04', title: '24/7 Multilingual Support', desc: 'Questions at any hour? Our on-the-ground team is always online to assist you.' }
    ],
    officeTitle: 'Medade Travel Local Agency',
    officeAddress: 'Address: Marrakech & Morocco Wide',
    officeLine1: 'Line 1: +212 6 37 05 31 31',
    officeLine2: 'Line 2: +212 6 37 17 09 09',
    officeEmail: 'Email: contact@medadetravel.com',
    faqList: [
      {
        question: 'What are your transport options for tours?',
        answer: 'We provide two convenient formulas: self-drive rental starting from 450 MAD per day for complete freedom, or a private vehicle with an experienced bilingual driver at your disposal throughout your trip.',
        open: true
      },
      {
        question: 'How does pick-up work in Marrakech?',
        answer: 'For all our tours, our driver picks you up directly at your hotel or the closest vehicle-accessible point to your riad in the Medina. We confirm the exact time the evening before via WhatsApp.',
        open: false
      },
      {
        question: 'What are the highlights of Tour 2 "Pure Pleasure"?',
        answer: 'Tour 2 combines a peaceful mountain night in Asni, an exciting day at Agafay desert with pool, lunch, 1h activity (camel, quad or buggy) at sunset, grand dinner show with belly dancer and fire eater, luxury glamping tent, and a central Marrakech riad with traditional hammam and massage.',
        open: false
      },
      {
        question: 'Are tours and desert activities suitable for children?',
        answer: 'Yes! Camel treks, desert camps, panoramic pools, and historical visits are wonderful for children. For quads and buggys, children can safely ride as passengers with our certified instructors.',
        open: false
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept Moroccan Dirhams (MAD), Euros (€), and US Dollars ($) in cash on-site, as well as bank transfer or secure online card payment for booking deposits.',
        open: false
      },
      {
        question: 'Can I reschedule or cancel my booking?',
        answer: 'Yes, we offer high flexibility. You can reschedule your dates up to 24 hours prior to departure free of charge simply by messaging us on WhatsApp.',
        open: false
      }
    ],
    waMessageTemplate: (form: any) =>
      `Hello Medade Travel,\n\nI would like to book or receive a direct quote:\n- Name: ${form.name || 'Client'}\n- Phone: ${form.phone || 'Not provided'}\n- Date: ${form.travelDate || 'To be determined'}\n- Travellers: ${form.guests}\n- Selected Tour: ${form.serviceType}\n- Transport Formula: ${form.transportOption}\n- Message: ${form.notes || 'Please confirm availability and direct rate.'}`
  },
  ar: {
    heroTag: 'التوافر وعروض الأسعار المباشرة',
    heroTitle: 'تواصلوا مع فريق مداد ترافيل',
    heroSubtitle: 'لديك استفسار، ترغب في عرض سعر لجولة سياحية مخصصة، أو حجز وسيلة نقل؟ فريقنا المحلي بمراكش رهن إشارتكم طيلة أيام الأسبوع مباشرة عبر واتساب.',
    method1: {
      num: '01',
      title: 'واتساب مباشر 24/7',
      desc: 'القناة الأسرع لحجز رحلاتكم والتواصل الفوري مع مستشاركم السياحي.',
      phone: '+212 6 37 05 31 31',
      btn: 'فتح تطبيق واتساب'
    },
    method2: {
      num: '02',
      title: 'الاتصال الهاتفي المباشر',
      desc: 'مستشارونا المحليون في خدمتكم بكل ترحاب يومياً من الساعة 8 صباحاً حتى 10 مساءً.',
      phone: '+212 6 37 17 09 09',
      btn: 'اتصال مباشر'
    },
    method3: {
      num: '03',
      title: 'حسابنا الرسمي على إنستغرام',
      desc: 'تابعوا فيديوهاتنا اليومية في صحراء أغفاي، مرزوكة ومختلف وجهات المغرب.',
      handle: '@medadetravel',
      btn: 'زيارة الحساب'
    },
    formHeading: 'نموذج طلب عرض سعر وحجز مباشر',
    formSubtext: 'املأ هذا النموذج وتوصل بعرضك المباشر بدون وسيط وفورياً عبر واتساب.',
    labelName: 'الاسم الكامل *',
    placeholderName: 'مثال: محمد العلوي',
    labelPhone: 'رقم الهاتف (واتساب) *',
    placeholderPhone: '+212 6 ... أو +966 ...',
    labelDate: 'تاريخ السفر المرتقب',
    labelGuests: 'عدد المسافرين',
    guestOptions: [
      { val: '1', label: 'شخص واحد (سفر فردي)' },
      { val: '2', label: 'شخصان (زوجان / ثنائي)' },
      { val: '3-4', label: '3 إلى 4 أشخاص (عائلة / أصدقاء)' },
      { val: '5-8', label: '5 إلى 8 أشخاص (مجموعة صغيرة)' },
      { val: '8+', label: 'أكثر من 8 أشخاص (مجموعة كبيرة / مناسبة خاصة)' }
    ],
    labelCircuit: 'اختيار الجولة السياحية *',
    circuitOptions: [
      { val: 'الرحلة 1: شلالات أوزود، جبل العياشي وكثبان مرزوكة (4 أيام)', label: 'الرحلة 1: شلالات أوزود، جبل العياشي وكثبان مرزوكة (4 أيام / 3 ليالٍ)' },
      { val: 'الرحلة 2: "متعة لا تنتهي" أسني، أغفاي ورياض مراكش (3 أيام)', label: 'الرحلة 2: "متعة لا تنتهي" أسني، مخيم أغفاي ورياض بمراكش (3 أيام / ليلتان)' },
      { val: 'الرحلة 3: "بين البحر والبر" الصويرة، تغازوت، أكادير وورزازات (4 أيام)', label: 'الرحلة 3: "بين البحر والبر" الصويرة، تغازوت، أكادير وقصبات ورزازات (4 أيام / 3 ليالٍ)' }
    ],
    labelTransport: 'صيغة النقل المفضلة',
    transportOptions: [
      { val: 'مع سائق خاص رهن الإشارة طوال الرحلة', label: 'مع سائق خاص مخصص رهن إشارتكم طوال الرحلة' },
      { val: 'بدون سائق (كراء سيارة ابتداءً من 450 درهم/يوم)', label: 'بدون سائق (كراء سيارة حديثة ابتداءً من 450 درهم / اليوم)' }
    ],
    labelNotes: 'ملاحظات أو طلبات خاصة',
    placeholderNotes: 'مثال: اسم الرياض، مناسبة عيد ميلاد، تفضيلات خاصة...',
    btnSubmit: 'إرسال الطلب عبر واتساب المباشر',
    sidebarTag: 'التزامنا المحلي',
    sidebarTitle: 'لماذا الحجز المباشر مع مداد ترافيل هو الأفضل؟',
    reasons: [
      { num: '01', title: 'بدون أي عمولة وسيط', desc: 'وفر حتى 30% مقارنة بمنصات الحجز العالمية ومواقع الإنترنت التجارية.' },
      { num: '02', title: 'استقبال من باب فندقكم أو رياضكم', desc: 'لا داعي للبحث عن نقطة لقاء بعيدة، سائقنا يستقبلكم مباشرة في مقر إقامتكم.' },
      { num: '03', title: 'مرونة تامة في التعديل والإلغاء', desc: 'إمكانية تعديل المواعيد بسهولة حتى 24 ساعة قبل الموعد برسالة واتساب بسيطة.' },
      { num: '04', title: 'دعم محلي متواصل 24/7 بالعربية والفرنسية والإنجليزية', desc: 'استفسار في أي وقت؟ فريقنا المغربي متصل دائماً لإرشادكم ومرافقتكم.' }
    ],
    officeTitle: 'وكالة مداد ترافيل المحلية',
    officeAddress: 'العنوان: مراكش وكافة أرجاء المغرب',
    officeLine1: 'الهاتف 1: +212 6 37 05 31 31',
    officeLine2: 'الهاتف 2: +212 6 37 17 09 09',
    officeEmail: 'البريد: contact@medadetravel.com',
    faqList: [
      {
        question: 'ما هي خيارات النقل المتاحة للرحلات والجولات؟',
        answer: 'نوفر لكم خيارين متميزين: كراء سيارة حديثة بدون سائق ابتداءً من 450 درهم مغربي باليوم لقيادة حرة ومستقلة، أو سيارة مريحة مع سائق خاص محترف رهن إشارتكم طيلة مسار رحلتكم.',
        open: true
      },
      {
        question: 'كيف تتم عملية الاستقبال في مراكش؟',
        answer: 'في جميع رحلاتنا وجولاتنا، يحضر سائقنا الخاص مباشرة إلى فندقكم أو أقرب نقطة وصول لرياضكم بالمدينة العتيقة بمراكش. ونؤكد معكم التوقيت الدقيق في المساء السابق عبر واتساب.',
        open: false
      },
      {
        question: 'ما هي أهم محطات الرحلة 2 "متعة لا تنتهي"؟',
        answer: 'تجمع الرحلة 2 بين مبيت هادئ في جبال الأطلس بأسني، ويوم استرخاء بصحراء أغفاي مع مسبح، غداء، ساعة نشاط (جمال، كواد أو باغي) بالغروب، سهرة عشاء فنية مع راقصة شرقية وعرض النار، ليلة بمخيم فاخر، وإقامة برياض في مراكش مع حمام مغربي تقليدي ومساج.',
        open: false
      },
      {
        question: 'هل تناسب الجولات والأنشطة الصحراوية العائلات والأطفال؟',
        answer: 'بكل تأكيد! ركوب الجمال، المبيت بالمخيمات، المسابح والزيارات التاريخية مناسبة وممتعة جداً للأطفال. وبالنسبة لمركبات الكواد والباغي يمكن للأطفال الركوب بأمان تام كمرافقين مع مدربينا المعتمدين.',
        open: false
      },
      {
        question: 'ما هي طرق الدفع المقبولة لديكم؟',
        answer: 'نقبل الدفع بالدرهم المغربي (MAD) أو الأورو (€) أو الدولار ($) نقداً في المكان، وكذلك التحويل البنكي أو البطاقة البنكية الآمنة لعربون الحجز.',
        open: false
      },
      {
        question: 'هل يمكنني تعديل أو إلغاء موعد الحجز؟',
        answer: 'نعم، نوفر مرونة عالية. يمكنكم تعديل تاريخ الرحلة حتى 24 ساعة قبل الانطلاق بدون أي رسوم، بمجرد إشعارنا عبر رسالة واتساب.',
        open: false
      }
    ],
    waMessageTemplate: (form: any) =>
      `السلام عليكم مداد ترافيل،\n\nأود طلب عرض سعر وحجز رحلة:\n- الاسم: ${form.name || 'عميل'}\n- رقم الهاتف: ${form.phone || 'غير محدد'}\n- التاريخ المرتقب: ${form.travelDate || 'يحدد لاحقاً'}\n- عدد المسافرين: ${form.guests}\n- الرحلة المختارة: ${form.serviceType}\n- صيغة النقل: ${form.transportOption}\n- ملاحظات إضافية: ${form.notes || 'المرجو تأكيد التوافر وأفضل سعر مباشر.'}`
  }
};

export const HOME_PAGE_DATA: Record<Language, HomePageData> = {
  fr: {
    heroBadge: 'Agence 100% Marocaine • Meilleurs Tarifs Directs',
    heroEyebrow: 'CIRCUITS DÉSERT & EXPÉDITIONS MAROC DEPUIS MARRAKECH',
    heroTitle: 'Vivez la Magie du Voyage au Maroc',
    heroTitleEm: 'Votre Aventure Commence Ici !',
    heroSubtitle: 'Circuits authentiques vers l\'Atlas, Merzouga, Essaouira et Agafay. Chauffeurs locaux certifiés, bivouacs nomades tout confort et formules de transport dès 450 DH/jour sans intermédiaire.',
    btnExplore: 'Explorer nos Circuits',
    btnTransport: 'Transport dès 450 DH / Jour',
    scrollHint: 'Découvrir',
    trustItems: [
      { title: 'Chauffeurs & Guides Locaux', desc: 'Équipe 100% marocaine certifiée' },
      { title: 'Meilleur Prix Direct Garanti', desc: 'Zéro commission ni intermédiaire' },
      { title: 'Annulation Flexible 24h', desc: 'Modifications simples sur WhatsApp' },
      { title: 'Assistance WhatsApp 24/7', desc: 'Prise en charge directe à votre riad' }
    ],
    quickAnswerTag: 'GUIDE RAPIDE VOYAGEUR & CIRCUITS',
    quickAnswerQ: 'Quels sont nos circuits phares au départ de Marrakech ?',
    quickAnswerA: 'Découvrez le Circuit 1 (Cascades d\'Ouzoud, Montagne Ayachi & Merzouga 4J), le Circuit 2 "Que du Plaisir" (Asni, piscine Agafay, activités & spectacle féérique 3J), et le Circuit 3 "Mer - Terre" (Essaouira, Taghazout, Agadir & Ouarzazate 4J). Transport au choix : véhicule sans chauffeur dès 450 DH/jour ou avec chauffeur privé dédié !',
    catalogTag: 'CATALOGUE DES CIRCUITS DÉPART MARRAKECH',
    catalogTitle: 'Nos Nouveaux Programmes &',
    catalogTitleEm: 'Circuits Recommandés',
    catalogSubtitle: 'Départs quotidiens garantis. Prise en charge directement à votre hôtel ou riad dans la médina de Marrakech.',
    tabAll: 'Tous les Programmes',
    tab1: 'Circuit 1 : Atlas & Sahara',
    tab2: 'Circuit 2 : Que du Plaisir & Agafay',
    tab3: 'Circuit 3 : Mer - Terre & Transport',
    filterShowing: 'Affichage de',
    filterSuffix: 'circuits et options • Tarifs directs garantis sans intermédiaire',
    filterReset: 'Réinitialiser les filtres',
    cardFrom: 'Tarif :',
    cardRatingNote: 'Note',
    cardReviewsVerified: 'avis vérifiés',
    cardBtnDetails: 'Voir le Programme',
    cardBtnWa: 'Réserver sur WhatsApp',
    compTag: 'COMPARATIF DES CIRCUITS DÉSERT',
    compTitle: 'Quel Désert Marocain',
    compTitleEm: 'Choisir pour Votre Séjour ?',
    compSubtitle: 'Comparez en un clin d\'œil les caractéristiques des 3 principales destinations désertiques depuis Marrakech.',
    compHeaders: ['Critère', 'Désert d\'Agafay (1 Jour)', 'Désert de Zagora (2J / 1N)', 'Merzouga & Erg Chebbi (3J / 2N)'],
    compRows: [
      { label: 'Distance de Marrakech', val1: '45 minutes (accès facile)', val2: '6 à 7 heures via l\'Atlas', val3: '8 à 9 heures (paysages sublimes)' },
      { label: 'Type de Paysage', val1: 'Désert minéral de pierres & canyons', val2: 'Plateau aride, palmeraie & petites dunes', val3: 'Dunes géantes de sable doré (jusqu\'à 150m)' },
      { label: 'Hébergement Bivouac', val1: 'Optionnel (Dîner spectacle ou glamping)', val2: '1 nuit sous tente nomade', val3: '1 nuit en bivouac de luxe au cœur des dunes' },
      { label: 'Activités Phares', val1: 'Quad, Buggy, Piscine & Spectacle de feu', val2: 'Dromadaires, coucher de soleil, kasbahs', val3: 'Surf des sables, lever de soleil & chants Gnawa' },
      { label: 'Idéal Pour', val1: 'Escapades express, couples, familles', val2: 'Court séjour voulant dormir au désert', val3: 'L\'expérience authentique absolue du Sahara' },
      { label: 'Tarif Indicatif Direct', val1: 'Dès 450 MAD / pers', val2: 'Dès 650 MAD / pers', val3: 'Dès 950 MAD / pers' }
    ],
    whyTag: 'POURQUOI CHOISIR MEDADE TRAVEL',
    whyTitle: 'La Différence d\'une Agence',
    whyTitleEm: '100% Locale',
    whySubtitle: 'Nous ne sommes pas un intermédiaire en ligne. Nous opérons nos propres véhicules et accompagnons chaque voyageur avec passion.',
    whyCards: [
      { accent: '01', title: 'Flotte Agréée & Climatisée', desc: 'Minivans Mercedes et 4x4 tout-terrain récents, entretenus selon les normes de sécurité les plus strictes avec climatisation optimale.' },
      { accent: '02', title: 'Bivouacs & Riads Sélectionnés', desc: 'Dormez dans des hébergements de charme et tentes spacieuses équipées de vrais lits confortables et sanitaires privatifs.' },
      { accent: '03', title: 'Le Juste Prix Local Direct', desc: 'Zéro commission tierce. Nos prix sont transparents, sans frais cachés, et soutiennent directement les familles locales.' },
      { accent: '04', title: 'Assistance WhatsApp 24/7', desc: 'Un interlocuteur dédié vous répond en temps réel avant, pendant et après votre circuit pour garantir une sérénité totale.' }
    ],
    expTag: 'NOTRE PASSION DU MAROC',
    expTitle: 'Des Souvenirs Gravés',
    expTitleEm: 'au Cœur des Dunes & Cimes',
    expDesc: 'Depuis plus de 10 ans, Medade Travel fait découvrir les merveilles du Maroc à des voyageurs du monde entier. De la traversée spectaculaire de l\'Atlas aux nuits étoilées du Sahara, chaque instant est pensé pour vous émerveiller.',
    expStats: [
      { num: '100%', label: 'Agence Locale Agréée' },
      { num: '4.9 / 5', label: 'Note Moyenne Clients' },
      { num: '450 DH', label: 'Location dès / Jour' },
      { num: '24/7', label: 'Support Voyage Direct' }
    ],
    expBtnWa: 'Organiser Mon Séjour sur WhatsApp',
    testiTag: 'AVIS VOYAGEURS',
    testiTitle: 'Ce que Disent nos Voyageurs',
    testiTitleEm: 'de Medade Travel',
    testiSubtitle: 'Des centaines de voyageurs nous font confiance chaque mois pour leur aventure au Maroc.',
    testiBadge: 'Avis Vérifié • 5 / 5',
    testimonials: [
      { text: '"Le circuit à Merzouga avec l\'arrêt aux cascades d\'Ouzoud et Midelt était tout simplement magique ! Chauffeur exceptionnel, très attentionné. Le bivouac au milieu des dunes était fabuleux."', author: 'Camille & Thomas D.', location: 'Paris, France' },
      { text: '"Superbe formule "Que du Plaisir" ! Piscine à Agafay, quad au coucher de soleil, spectacle de feu sous la tente puis hammam et massage à Marrakech. Organisation irréprochable."', author: 'Salma & Yassine B.', location: 'Casablanca, Maroc' },
      { text: '"Service de transport irréprochable. Nous avons loué une voiture récente à un tarif très raisonnable sans mauvaise surprise, avec un accueil chaleureux et efficace."', author: 'Marco & Elena V.', location: 'Milan, Italie' }
    ],
    faqTag: 'QUESTIONS FRÉQUEMMENT POSÉES',
    faqTitle: 'Tout ce qu\'il Faut Savoir',
    faqTitleEm: 'Avant de Partir',
    faqSubtitle: 'Des réponses claires pour préparer votre voyage ou circuit en toute sérénité.',
    faqItems: [
      { question: 'Quelles sont vos formules de transport pour les circuits ?', answer: 'Nous vous offrons une flexibilité totale : vous pouvez opter pour la location d\'un véhicule récent sans chauffeur à partir de 450 DH (MAD) par jour pour voyager en toute liberté, ou bénéficier d\'un véhicule tout confort avec nos chauffeurs professionnels dédiés à votre entière disposition.', open: true },
      { question: 'Comment se passe la prise en charge à Marrakech ?', answer: 'Pour tous nos circuits, notre chauffeur privé ou navette vient vous chercher directement à votre hôtel ou au point accessible le plus proche de votre riad dans la médina de Marrakech. Nous vous contactons par WhatsApp la veille pour convenir de l\'heure exacte.', open: false },
      { question: 'Que comprend le circuit 2 "Que du Plaisir" ?', answer: 'Le circuit "Que du Plaisir" comprend 1 nuitée en pleine montagne d\'Atlas à Asni, 1 journée détente avec piscine panoramique et déjeuner à Agafay, 1h d\'activité au choix (dromadaire, quad ou buggy) face au coucher de soleil, grand dîner avec danseuse orientale et cracheur de feu, nuit sous tente de luxe à Agafay, puis hébergement en riad à Marrakech avec hammam traditionnel et massage.', open: false },
      { question: 'Les tentes des bivouacs disposent-elles de sanitaires privés ?', answer: 'Oui ! Dans nos formules de bivouacs au désert de Merzouga ainsi que dans nos camps partenaires à Agafay, les tentes sont spacieuses et équipées de lits de qualité hôtelière et de véritables salles de bain privatives avec douche chaude et toilettes.', open: false },
      { question: 'Pourquoi réserver en direct avec Medade Travel ?', answer: 'En réservant directement avec nous, vous éliminez les 20 à 30% de commissions prélevées par les plateformes internationales. Vous bénéficiez du tarif local le plus juste, d\'un contact WhatsApp direct avec notre équipe marocaine et d\'une flexibilité totale pour personnaliser votre séjour.', open: false }
    ],
    ctaPill: 'RÉSERVATION FACILE SANS AVANCE EXCESSIVE',
    ctaTitle: 'Prêt à Découvrir le Maroc avec une Équipe Locale ?',
    ctaDesc: 'Contactez-nous sur WhatsApp pour vérifier les disponibilités, obtenir un devis sur-mesure ou réserver en direct au meilleur tarif garanti.',
    ctaBtnWa: 'Discuter sur WhatsApp Direct',
    ctaBtnQuote: 'Demander un Devis en Ligne'
  },
  en: {
    heroBadge: '100% Moroccan Local Agency • Best Direct Rates Guaranteed',
    heroEyebrow: 'MOROCCO TOURS & DESERT EXPEDITIONS FROM MARRAKECH',
    heroTitle: 'Experience the Magic of Morocco',
    heroTitleEm: 'Your Adventure Begins Here!',
    heroSubtitle: 'Authentic expeditions across the Atlas Mountains, Merzouga dunes, Essaouira coast, and Agafay canyons. Certified local drivers, luxury nomad camps, and flexible transport from 450 MAD/day without middlemen.',
    btnExplore: 'Explore Our Tours',
    btnTransport: 'Transport from 450 MAD / Day',
    scrollHint: 'Discover',
    trustItems: [
      { title: 'Local Drivers & Guides', desc: '100% Certified Moroccan Team' },
      { title: 'Best Direct Price Guaranteed', desc: 'Zero OTA commission or middleman' },
      { title: 'Flexible 24h Rescheduling', desc: 'Simple adjustments via WhatsApp' },
      { title: '24/7 WhatsApp Support', desc: 'Direct pick-up at your riad door' }
    ],
    quickAnswerTag: 'TRAVEL GUIDE & QUICK INSIGHTS',
    quickAnswerQ: 'What are our premier tours departing from Marrakech?',
    quickAnswerA: 'Discover Tour 1 (Ouzoud Falls, Mount Ayachi & Merzouga Dunes 4D), Tour 2 "Pure Pleasure" (Asni, Agafay pool, activities & dinner show 3D), and Tour 3 "Sea & Sand" (Essaouira, Taghazout, Agadir & Ouarzazate 4D). Choose your transport: self-drive from 450 MAD/day or dedicated private chauffeur at disposal!',
    catalogTag: 'MARRAKECH TOUR EXPEDITIONS CATALOG',
    catalogTitle: 'Our Recommended Signature Programs &',
    catalogTitleEm: 'Custom Itineraries',
    catalogSubtitle: 'Daily guaranteed departures. Complimentary pick-up at your hotel or riad inside the historic Marrakech Medina.',
    tabAll: 'All Programs',
    tab1: 'Tour 1: Atlas & Sahara',
    tab2: 'Tour 2: Pure Pleasure & Agafay',
    tab3: 'Tour 3: Sea & Sand & Transport',
    filterShowing: 'Displaying',
    filterSuffix: 'tours & services • Direct fair rates guaranteed without middlemen',
    filterReset: 'Reset all filters',
    cardFrom: 'Rate:',
    cardRatingNote: 'Rated',
    cardReviewsVerified: 'verified reviews',
    cardBtnDetails: 'View Itinerary',
    cardBtnWa: 'Book on WhatsApp',
    compTag: 'MOROCCO DESERT COMPARISON',
    compTitle: 'Which Moroccan Desert',
    compTitleEm: 'Should You Choose?',
    compSubtitle: 'Quickly compare the distinct characteristics of the 3 main desert escapes from Marrakech.',
    compHeaders: ['Criteria', 'Agafay Desert (1 Day)', 'Zagora Desert (2D / 1N)', 'Merzouga & Erg Chebbi (3D / 2N)'],
    compRows: [
      { label: 'Drive from Marrakech', val1: '45 minutes (easy scenic access)', val2: '6 to 7 hours across Atlas', val3: '8 to 9 hours (breathtaking stops)' },
      { label: 'Landscape Type', val1: 'Mineral stone canyons & moon hills', val2: 'Arid plateau, palm groves & low dunes', val3: 'Towering golden sand dunes (up to 150m)' },
      { label: 'Camp Accommodation', val1: 'Optional (Dinner show or glamping)', val2: '1 night under nomadic tent', val3: '1 night in luxury camp inside deep dunes' },
      { label: 'Key Activities', val1: 'Quad, Buggy, Desert pool & Fire show', val2: 'Camel caravan, sunset, historic kasbahs', val3: 'Sandboarding, ridge sunrise & Gnawa music' },
      { label: 'Ideal For', val1: 'Quick escapes, couples, families', val2: 'Short-stay travellers seeking a desert night', val3: 'The ultimate, authentic Sahara adventure' },
      { label: 'Indicative Direct Price', val1: 'From 450 MAD / person', val2: 'From 650 MAD / person', val3: 'From 950 MAD / person' }
    ],
    whyTag: 'WHY CHOOSE MEDADE TRAVEL',
    whyTitle: 'The Advantage of a',
    whyTitleEm: '100% Local Agency',
    whySubtitle: 'We are not an anonymous internet reseller. We operate our own fleet and personally accompany every traveler with care.',
    whyCards: [
      { accent: '01', title: 'Licensed & Air-Conditioned Fleet', desc: 'Recent Mercedes Minivans and rugged 4x4 vehicles maintained to the highest safety standards with optimal climate control.' },
      { accent: '02', title: 'Curated Riads & Luxury Camps', desc: 'Sleep in authentic character accommodations and spacious desert tents with plush beds and private hot showers.' },
      { accent: '03', title: 'Fair Direct Local Rates', desc: 'Zero third-party commission. Transparent pricing without hidden surprises, directly supporting local drivers and nomad families.' },
      { accent: '04', title: '24/7 Dedicated WhatsApp Support', desc: 'A dedicated team member responds in real time before, during, and after your trip for effortless peace of mind.' }
    ],
    expTag: 'OUR PASSION FOR MOROCCO',
    expTitle: 'Unforgettable Memories',
    expTitleEm: 'Carved in Dunes & Peaks',
    expDesc: 'For over a decade, Medade Travel has welcomed visitors from around the globe to explore the splendor of Morocco. From crossing majestic Atlas passes to stargazing beside Saharan fires, every moment is crafted to inspire wonder.',
    expStats: [
      { num: '100%', label: 'Licensed Local Agency' },
      { num: '4.9 / 5', label: 'Average Client Rating' },
      { num: '450 MAD', label: 'Car Rental from / Day' },
      { num: '24/7', label: 'Live Travel Support' }
    ],
    expBtnWa: 'Plan My Trip on WhatsApp',
    testiTag: 'GUEST TESTIMONIALS',
    testiTitle: 'What Travellers Say',
    testiTitleEm: 'About Medade Travel',
    testiSubtitle: 'Hundreds of global adventurers trust us every month for their journey across Morocco.',
    testiBadge: 'Verified Review • 5 / 5',
    testimonials: [
      { text: '"Our 4-day tour to Ouzoud, Midelt, and Merzouga was pure perfection! Our driver was thoughtful, knowledgeable, and punctual. Sleeping under the stars in the Sahara was a dream come true."', author: 'Camille & Thomas D.', location: 'Paris, France' },
      { text: '"The "Pure Pleasure" itinerary was extraordinary! Pooltime in Agafay, quad biking at sunset, fireside dinner show and then the riad with hammam in Marrakech. Flawless hospitality."', author: 'Salma & Yassine B.', location: 'Casablanca, Morocco' },
      { text: '"Seamless car rental service. Clean, modern car delivered directly to our hotel at an unbeatable daily rate with zero hassle. Highly recommended!"', author: 'Marco & Elena V.', location: 'Milan, Italy' }
    ],
    faqTag: 'FREQUENTLY ASKED QUESTIONS',
    faqTitle: 'Everything You Need to Know',
    faqTitleEm: 'Before Traveling',
    faqSubtitle: 'Clear answers to help you prepare your Morocco tour with total confidence.',
    faqItems: [
      { question: 'What transport options do you offer for your tours?', answer: 'We provide total flexibility: you can rent a modern vehicle without driver starting from 450 MAD per day for complete independence, or enjoy our high-comfort fleet with dedicated professional drivers at your complete disposal.', open: true },
      { question: 'How does pick-up work in Marrakech?', answer: 'For all our tours, our driver picks you up right at your hotel lobby or the closest accessible point to your riad in the Medina. We message you on WhatsApp the evening before to confirm exact timings.', open: false },
      { question: 'What is included in Tour 2 "Pure Pleasure"?', answer: 'Tour 2 features 1 night in the Atlas mountains in Asni, 1 day pass with panoramic pool and lunch in Agafay, 1 hour sunset activity of choice (camel, quad or buggy), evening dinner show with belly dancer and fire eater, luxury glamping tent, and a central Marrakech riad with traditional hammam and massage.', open: false },
      { question: 'Do the desert camp tents have private bathrooms?', answer: 'Yes! In both our Merzouga desert camps and partner luxury camps in Agafay, tents are spacious and equipped with real hotel-grade beds and private ensuite bathrooms with hot showers and flush toilets.', open: false },
      { question: 'Why book directly with Medade Travel?', answer: 'Booking directly eliminates 20% to 30% markups taken by international portals. You receive the best authentic local price, instant WhatsApp contact with our Moroccan team, and customized flexibility.', open: false }
    ],
    ctaPill: 'EASY DIRECT RESERVATION',
    ctaTitle: 'Ready to Experience Morocco with a Trusted Local Team?',
    ctaDesc: 'Reach out on WhatsApp to check availability, receive a custom quote, or book directly at guaranteed fair rates.',
    ctaBtnWa: 'Chat on WhatsApp Direct',
    ctaBtnQuote: 'Request an Online Quote'
  },
  ar: {
    heroBadge: 'وكالة مغربية 100% • أفضل الأسعار المباشرة المضمونة',
    heroEyebrow: 'جولات سياحية ورحلات صحراوية انطلاقاً من مراكش',
    heroTitle: 'عش سحر وسياحة المغرب الأصيل',
    heroTitleEm: 'مغامرتكم تبدأ من هنا !',
    heroSubtitle: 'جولات أصيلة نحو جبال الأطلس، رمال مرزوكة، سواحل الصويرة وهضاب أغفاي. سائقون محليون معتمدون، مخيمات صحراوية فاخرة وخيارات نقل ابتداءً من 450 درهم/اليوم بدون وسيط.',
    btnExplore: 'استكشف جولاتنا السياحية',
    btnTransport: 'كراء سيارات من 450 درهم / اليوم',
    scrollHint: 'اكتشف المزيد',
    trustItems: [
      { title: 'سائقون ومرشدون محليون', desc: 'فريق مغربي معتمد 100%' },
      { title: 'أفضل سعر مباشر مضمون', desc: 'بدون أي عمولة وسيط' },
      { title: 'مرونة في التعديل 24 ساعة', desc: 'تنسيق سهل عبر تطبيق واتساب' },
      { title: 'مساعدة واتساب على مدار الساعة', desc: 'استقبال مباشر من باب فندقكم أو رياضكم' }
    ],
    quickAnswerTag: 'دليل المسافر وإرشادات الرحلات',
    quickAnswerQ: 'ما هي أبرز الجولات السياحية انطلاقاً من مراكش؟',
    quickAnswerA: 'اكتشفوا الرحلة 1 (شلالات أوزود، جبل العياشي وكثبان مرزوكة 4 أيام)، الرحلة 2 "متعة لا تنتهي" (أسني، مسبح أغفاي، أنشطة وسهرة فنية 3 أيام)، والرحلة 3 "بين البحر والبر" (الصويرة، تغازوت، أكادير وورزازات 4 أيام). النقل باختياركم: كراء سيارة من 450 درهم/اليوم أو مع سائق خاص رهن إشارتكم!',
    catalogTag: 'دليل الجولات السياحية انطلاقاً من مراكش',
    catalogTitle: 'برامجنا المميزة وجولاتنا',
    catalogTitleEm: 'الموصى بها بشدة',
    catalogSubtitle: 'انطلاقات يومية مؤكدة. استقبال مباشر من فندقكم أو رياضكم في قلب مدينة مراكش العتيقة.',
    tabAll: 'جميع البرامج',
    tab1: 'الرحلة 1: الأطلس والصحراء',
    tab2: 'الرحلة 2: متعة لا تنتهي وأغفاي',
    tab3: 'الرحلة 3: بين البحر والبر والنقل',
    filterShowing: 'عرض',
    filterSuffix: 'جولات وخيارات • أسعار مباشرة ومضمونة بدون وسيط',
    filterReset: 'إعادة ضبط الخيارات',
    cardFrom: 'السعر :',
    cardRatingNote: 'تقييم',
    cardReviewsVerified: 'تقييم موثق',
    cardBtnDetails: 'عرض تفاصيل الرحلة',
    cardBtnWa: 'احجز عبر واتساب',
    compTag: 'مقارنة الرحلات الصحراوية بالمغرب',
    compTitle: 'أي صحراء مغربية',
    compTitleEm: 'تختار لرحلتكم القادمة ؟',
    compSubtitle: 'قارنوا بكل سهولة بين خصائص الوجهات الصحراوية الثلاث الرئيسية انطلاقاً من مراكش.',
    compHeaders: ['معيار المقارنة', 'صحراء أغفاي (يوم واحد)', 'صحراء زاكورة (يومان / ليلة)', 'مرزوكة وعرق الشبي (3 أيام / ليلتان)'],
    compRows: [
      { label: 'المسافة من مراكش', val1: '45 دقيقة (وصول سريع وسهل)', val2: '6 إلى 7 ساعات عبر الأطلس', val3: '8 إلى 9 ساعات (مناظر طبيعية خلابة)' },
      { label: 'طبيعة المشهد', val1: 'صحراء صخرية وهضاب متموجة', val2: 'هضبة جافة وواحات وكثبان صغيرة', val3: 'كثبان رملية ذهبية عملاقة (حتى 150 متراً)' },
      { label: 'المبيت بالمخيم', val1: 'اختياري (سهرة عشاء أو تخييم)', val2: 'ليلة واحدة تحت الخيمة البدوية', val3: 'ليلة بمخيم فاخر في قلب الكثبان الذهبية' },
      { label: 'أبرز الأنشطة', val1: 'كواد، باغي، مسبح وسهرة النار', val2: 'قوافل الجمال، غروب الشمس والقصبات', val3: 'التزلج على الرمال، شروق الشمس وموسيقى كناوة' },
      { label: 'مثالي لـ', val1: 'الرحلات السريعة، الأزواج، العائلات', val2: 'لمن لديهم وقت قصير ويرغبون بالمبيت بالصحراء', val3: 'التجربة الصحراوية الكبرى والأصيلة بالكامل' },
      { label: 'السعر المباشر التقريبي', val1: 'ابتداءً من 450 درهم / للشخص', val2: 'ابتداءً من 650 درهم / للشخص', val3: 'ابتداءً من 950 درهم / للشخص' }
    ],
    whyTag: 'لماذا تختارون مداد ترافيل',
    whyTitle: 'امتياز التعامل مع وكالة',
    whyTitleEm: 'مغربية محلية 100%',
    whySubtitle: 'نحن لسنا منصة وساطة على الإنترنت. نمتلك أسطولنا ونهتم بكل مسافر بمهنية عالية وكرم ضيافة أصيل.',
    whyCards: [
      { accent: '01', title: 'أسطول معتمد ومكيف بالكامل', desc: 'سيارات ميني فان مرسيدس وسيارات دفع رباعي حديثة تخضع لأعلى معايير السلامة مع تكييف مثالي.' },
      { accent: '02', title: 'مخيمات ورياضات مختارة بعناية', desc: 'نوم هادئ في رياضات أصيلة وخيام صحراوية فسيحة مزودة بأسرة فندقية مريحة ومرافق صحية خاصة.' },
      { accent: '03', title: 'السعر المحلي المباشر العادل', desc: 'صفر عمولة للمنصات الأجنبية. أسعار واضحة وشفافة وبدون مصاريف خفية، تدعم أهل البلد مباشرة.' },
      { accent: '04', title: 'مساعدة واتساب على مدار الساعة 24/7', desc: 'مستشار مخصص يجيبكم في الحين قبل وأثناء وبعد رحلتكم لضمان راحة بال واطمئنان تام.' }
    ],
    expTag: 'شغفنا بجمال المغرب',
    expTitle: 'ذكريات لا تُنسى محفورة',
    expTitleEm: 'في قلب الكثبان وقمم الأطلس',
    expDesc: 'منذ أكثر من 10 سنوات، ترافق مداد ترافيل زوار المغرب من مختلف بقاع العالم لاكتشاف روعة المملكة. من عبور ممرات الأطلس الشامخة إلى السمر حول النار تحت نجوم الصحراء، صُممت كل لحظة لتبهركم.',
    expStats: [
      { num: '100%', label: 'وكالة محلية معتمدة' },
      { num: '4.9 / 5', label: 'متوسط تقييم المسافرين' },
      { num: '450 درهم', label: 'كراء سيارات ابتداءً من / يوم' },
      { num: '24/7', label: 'دعم سياحي مباشر' }
    ],
    expBtnWa: 'ترتيب رحلتي عبر واتساب',
    testiTag: 'آراء وتقييمات المسافرين',
    testiTitle: 'ماذا يقول عملاؤنا',
    testiTitleEm: 'عن مداد ترافيل',
    testiSubtitle: 'مئات المسافرين يضعون ثقتهم فينا شهرياً لخوض أمتع التجارب السياحية في المغرب.',
    testiBadge: 'تقييم موثق • 5 / 5',
    testimonials: [
      { text: '"رحلتنا نحو مرزوكة مع التوقف بشلالات أوزود وميدلت كانت تجربة استثنائية بكل المقاييس! سائق رائع وخدوم جداً، والمخيم بين الكثبان كان أروع مما تصورنا."', author: 'كميل وتوما د.', location: 'باريس، فرنسا' },
      { text: '"برنامج "متعة لا تنتهي" كان في غاية الروعة! استمتعنا بالمسبح في أغفاي، جولة الكواد بالغروب، سهرة العشاء ثم الحمام والمساج بمراكش. تنظيم ممتاز."', author: 'سلمى وياسين ب.', location: 'الدار البيضاء، المغرب' },
      { text: '"خدمة كراء السيارات كانت ممتازة وسريعة، تسلمنا سيارة حديثة ونظيفة بسعر معقول جداً وبدون أي تعقيد. شكراً جزيلاً لفريق مداد ترافيل."', author: 'ماركو وإلينا ف.', location: 'ميلانو، إيطاليا' }
    ],
    faqTag: 'الأسئلة الشائعة وإجاباتها',
    faqTitle: 'كل ما تحتاجون معرفته',
    faqTitleEm: 'قبل الانطلاق في الرحلة',
    faqSubtitle: 'إجابات واضحة ودقيقة لتجهيز رحلتكم أو جولتكم السياحية بكل طمأنينة وراحة بال.',
    faqItems: [
      { question: 'ما هي صيغ النقل المتاحة للجولات السياحية؟', answer: 'نوفر لكم مرونة تامة: يمكنكم اختيار كراء سيارة حديثة بدون سائق ابتداءً من 450 درهم مغربي باليوم لتنقل حر ومستقل، أو الاستمتاع بسيارة مريحة مع سائق خاص محترف رهن إشارتكم طيلة أيام الرحلة.', open: true },
      { question: 'كيف تتم عملية الاستقبال من مراكش؟', answer: 'في جميع جولاتنا، يتكفل سائقنا الخاص أو حافلتنا السياحية بنقلكم مباشرة من فندقكم أو أقرب نقطة وصول لرياضكم بالمدينة العتيقة بمراكش. ونتواصل معكم مساء اليوم السابق عبر واتساب لتحديد التوقيت الدقيق.', open: false },
      { question: 'ما الذي تتضمنه الرحلة 2 "متعة لا تنتهي"؟', answer: 'تتضمن الرحلة 2 مبيتاً في جبال الأطلس بأسني، يوماً كاملاً بمسبح صحراء أغفاي مع وجبة غداء، ساعة نشاط من اختياركم (جمال أو كواد أو باغي) بالغروب، سهرة عشاء فنية مع راقصة شرقية وعرض النار، مبيتاً بخيمة فاخرة، ثم إقامة برياض بمراكش مع حمام ومساج.', open: false },
      { question: 'هل تتوفر خيام المخيمات الصحراوية على مرافق صحية خاصة؟', answer: 'نعم بكل تأكيد! سواء في مخيماتنا بصحراء مرزوكة أو مخيماتنا الشريكة بأغفاي، تتميز الخيام بأنها فسيحة ومجهزة بأسرة فندقية عالية الجودة وحمامات خاصة مع دوش ساخن ومرحاض.', open: false },
      { question: 'لماذا الحجز المباشر مع مداد ترافيل هو الأفضل؟', answer: 'الحجز المباشر معنا يلغي عمولات المنصات الدولية التي تصل إلى 30%. يضمن لكم أفضل سعر محلي عادل، وتواصلاً مباشراً عبر واتساب مع فريقنا، ومرونة كاملة لتخصيص رحلتكم.', open: false }
    ],
    ctaPill: 'حجز مباشر وسهل بدون تعقيدات',
    ctaTitle: 'مستعدون لاكتشاف سحر المغرب مع فريقنا المحلي؟',
    ctaDesc: 'تواصلوا معنا الآن عبر واتساب لمعرفة التوافر والحصول على عرض سعر مخصص وحجز رحلتكم بأفضل سعر مباشر.',
    ctaBtnWa: 'تواصل مباشرة عبر واتساب',
    ctaBtnQuote: 'طلب عرض سعر عبر الموقع'
  }
};
