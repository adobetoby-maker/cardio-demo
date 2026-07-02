export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export interface ServiceItem {
  name: string;
  description: string;
  icon: string;
}

export interface ConditionItem {
  name: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  keyword: string;
  author: string;
  date: string;
  readTime: string;
  body: string;
}

export interface SiteContent {
  practiceName: string;
  tagline: string;
  specialty: string;
  patientJourney: string;
  city: string;
  state: string;
  zip: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  physicianName: string;
  physicianTitle: string;
  physicianYears: string;
  physicianBio: string;
  physicianEducation: string;
  services: ServiceItem[];
  conditions: ConditionItem[];
  testimonials: Testimonial[];
  insurance: string[];
  story: string;
  mission: string;
  patientPortalUrl: string;
  faq: { question: string; answer: string }[];
  availableSlots: string;
  bookingNote: string;
  heroImageAlt: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  bgLightColor: string;
  medicalSpecialty: string;
  schemaType: string;
  urgency: string;
  hospital: string;
  jsonLd: Record<string, unknown>;
}

export const siteContent: SiteContent = {
  practiceName: 'Idaho Cardiology Associates',
  tagline: 'Advanced Heart Care. Close to Home.',
  specialty: 'Cardiology',
  patientJourney:
    'From your first consultation through ongoing cardiac management, Dr. Torres provides comprehensive, compassionate heart care every step of the way.',

  city: 'Nampa',
  state: 'Idaho',
  zip: '83651',
  address: '4801 Caldwell Blvd',
  phone: '(208) 555-0398',
  email: 'info@nampacardiology.com',
  website: 'https://nampacardiology.com',

  urgency: 'Urgent Cardiac Consultations Available',
  hospital: 'Saint Alphonsus Medical Center — Nampa',

  physicianName: 'Dr. Michael A. Torres, MD, FACC',
  physicianTitle: 'Board-Certified Interventional Cardiologist',
  physicianYears: '22',
  physicianBio:
    "Dr. Michael A. Torres is a board-certified interventional cardiologist with 22 years of experience treating complex cardiovascular conditions. After earning his medical degree from Johns Hopkins School of Medicine and completing a prestigious interventional cardiology fellowship at Cleveland Clinic, Dr. Torres brought world-class cardiac expertise to the Nampa community. He specializes in minimally invasive cardiac procedures, coronary artery intervention, and structural heart disease, combining rigorous clinical expertise with genuine patient partnership.",
  physicianEducation:
    'MD, Johns Hopkins School of Medicine; Fellowship in Interventional Cardiology, Cleveland Clinic',

  services: [
    {
      name: 'Cardiac Catheterization',
      description:
        'A minimally invasive procedure using a thin flexible catheter to visualize coronary arteries, measure pressures inside the heart, and deliver treatments such as balloon angioplasty or stent placement directly at the blockage site.',
      icon: 'zap',
    },
    {
      name: 'Echocardiography',
      description:
        "Advanced ultrasound imaging of the heart chambers, valves, and pumping function — providing a detailed picture of cardiac structure and performance without radiation.",
      icon: 'scan-heart',
    },
    {
      name: 'Stress Testing',
      description:
        'Exercise and pharmacologic stress tests with or without nuclear imaging to evaluate blood flow to the heart muscle, identify coronary artery disease, and assess cardiac function under exertion.',
      icon: 'activity',
    },
    {
      name: 'Holter Monitoring',
      description:
        'Continuous 24 to 48 hour or extended cardiac rhythm monitoring worn at home to detect intermittent arrhythmias, palpitations, and electrical abnormalities that may not appear on a standard EKG.',
      icon: 'heart-pulse',
    },
    {
      name: 'Pacemaker Implantation',
      description:
        'Surgical implantation and long-term management of pacemakers and implantable cardioverter-defibrillators for patients with bradycardia, heart block, or elevated risk of sudden cardiac arrest.',
      icon: 'radio',
    },
    {
      name: 'Cardiac Rehabilitation',
      description:
        'A supervised evidence-based program combining monitored exercise, education, and lifestyle counseling to help patients recover after heart attack or surgery and reduce future cardiac risk.',
      icon: 'shield-heart',
    },
    {
      name: 'Heart Failure Management',
      description:
        'Individualized treatment plans for chronic and acute heart failure — including medication optimization, remote monitoring, dietary counseling, and coordination with rehabilitation services.',
      icon: 'waves',
    },
    {
      name: 'Preventive Cardiology',
      description:
        'Comprehensive cardiovascular risk assessment, lipid management, coronary calcium scoring, and personalized prevention strategies to keep heart disease from developing or progressing.',
      icon: 'shield',
    },
  ],

  conditions: [
    {
      name: 'Coronary Artery Disease',
      description:
        'Narrowing or blockage of the arteries that supply the heart muscle with blood, usually caused by plaque buildup. The leading cause of heart attacks in the United States.',
    },
    {
      name: 'Heart Failure',
      description:
        "A chronic condition where the heart cannot pump enough blood to meet the body needs. Managed with medications, lifestyle changes, monitoring devices, and sometimes advanced therapies.",
    },
    {
      name: 'Atrial Fibrillation',
      description:
        'An irregular, often rapid heart rhythm causing palpitations, fatigue, and significantly increased stroke risk. Highly treatable with modern medications, cardioversion, and catheter ablation.',
    },
    {
      name: 'Hypertension',
      description:
        'Persistently elevated blood pressure that silently strains the heart and blood vessels, raising the risk of heart attack, stroke, and kidney disease if left untreated.',
    },
    {
      name: 'Valve Disease',
      description:
        "Abnormalities of the heart valves including stenosis or regurgitation that impair blood flow and can progress to heart failure or arrhythmia when left unmanaged.",
    },
    {
      name: 'Arrhythmia',
      description:
        "An abnormal heart rhythm that may cause palpitations, dizziness, fainting, or sudden cardiac arrest depending on the type and severity.",
    },
    {
      name: 'Peripheral Artery Disease',
      description:
        'Narrowed arteries that reduce blood flow to the legs and feet, causing pain when walking and increasing risk of non-healing wounds and limb complications.',
    },
    {
      name: 'High Cholesterol',
      description:
        'Elevated LDL cholesterol accelerates plaque buildup in artery walls over years, quietly raising heart attack and stroke risk. Highly manageable with lifestyle changes and medications.',
    },
  ],

  testimonials: [
    {
      name: 'Gary M.',
      text: "Dr. Torres caught a 90% blockage in my LAD during a stress test I almost skipped. The cath lab team was exceptional and I was home in two days. I genuinely owe this man my life.",
      rating: 5,
    },
    {
      name: 'Linda T.',
      text: "After my AFib diagnosis I was terrified. Dr. Torres sat with me for nearly an hour explaining everything. Two years later my rhythm is controlled and I am hiking again. Could not be more grateful.",
      rating: 5,
    },
    {
      name: 'Ron S.',
      text: 'Strong family history of heart disease. Dr. Torres ordered a coronary calcium scan that flagged a problem we had no idea was developing. We caught it early and avoided what could have been a disaster.',
      rating: 5,
    },
  ],

  insurance: [
    'Blue Cross Blue Shield',
    'Aetna',
    'Cigna',
    'United Healthcare',
    'Medicare',
    'Medicaid',
    'SelectHealth',
    'Tricare',
  ],

  story:
    "Idaho Cardiology Associates was founded on a single belief: Treasure Valley families deserve access to the same caliber of cardiac care available at the nation's top medical centers without leaving home. Dr. Torres returned to the community after his Cleveland Clinic fellowship committed to delivering precisely that.",

  mission:
    'To deliver compassionate, evidence-based cardiovascular care that keeps our neighbors healthy, active, and close to the people they love.',

  patientPortalUrl: 'https://portal.nampacardiology.com',

  faq: [
    {
      question: 'What insurance do you accept?',
      answer:
        'We accept Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, Medicare, Medicaid, SelectHealth, and Tricare. Insurance plans change frequently, so we recommend calling our office to verify your specific plan and coverage before your appointment.',
    },
    {
      question: 'Do I need a referral to see a cardiologist?',
      answer:
        'Many insurance plans require a referral from your primary care physician to see a specialist. However, if you are experiencing urgent cardiac symptoms such as chest pain, shortness of breath, irregular heartbeat, or fainting, please call our office directly. We accommodate urgent cardiac consultations within 24 to 48 hours.',
    },
    {
      question: 'What should I bring to my first appointment?',
      answer:
        'Please bring a valid photo ID, your insurance card, a list of all current medications including supplements, any relevant prior test results or cardiac records, and the contact information for your referring physician.',
    },
    {
      question: 'Do you offer telehealth visits?',
      answer:
        'Yes. Telehealth video visits are available for established patients for routine follow-ups, medication management, and results review. Telehealth is not appropriate for new symptoms requiring an in-person exam or cardiac monitoring.',
    },
    {
      question: 'How do I request my medical records?',
      answer:
        'You can request medical records by contacting our office by phone or completing a records release form at the front desk. Under HIPAA you have the right to receive a copy within 30 days. Our staff will guide you through the process and can facilitate transfer to other physicians.',
    },
  ],

  availableSlots: 'Urgent cardiac consultations — call now',
  bookingNote:
    'New patients with urgent cardiac symptoms are seen within 24 to 48 hours. Routine new patient appointments are typically available within two weeks.',

  heroImageAlt:
    'Nampa Cardiology Associates — Dr. Michael A. Torres, Interventional Cardiologist, Nampa Idaho',

  seoTitle: 'Idaho Cardiology Associates | Cardiologist Nampa, ID',
  seoDescription:
    'Board-certified interventional cardiologist in Nampa, ID. Dr. Michael Torres — Johns Hopkins and Cleveland Clinic trained. Urgent cardiac consultations available. Call (208) 555-0398.',
  seoKeywords:
    'cardiologist Nampa Idaho, heart doctor Nampa ID, interventional cardiologist Treasure Valley, atrial fibrillation treatment Nampa, cardiac catheterization Nampa, heart failure treatment Idaho',

  primaryColor: '#7f1d1d',
  secondaryColor: '#dc2626',
  accentColor: '#fee2e2',
  bgLightColor: '#fef2f2',

  medicalSpecialty: 'Cardiovascular',
  schemaType: 'Cardiovascular',

  jsonLd: {
    '@context': 'https://schema.org',
    '@type': ['MedicalOrganization', 'LocalBusiness'],
    name: 'Idaho Cardiology Associates',
    url: 'https://idahocardiology.com',
    logo: 'https://nampacardiology.com/logo.png',
    telephone: '+12085550398',
    email: 'info@nampacardiology.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4801 Caldwell Blvd',
      addressLocality: 'Nampa',
      addressRegion: 'ID',
      postalCode: '83651',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '43.5807',
      longitude: '-116.5636',
    },
    medicalSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Cardiovascular',
    },
    hasMap: 'https://maps.google.com/?q=4801+Caldwell+Blvd+Nampa+ID+83651',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '12:00',
      },
    ],
    employee: {
      '@type': ['Physician', 'Person'],
      name: 'Dr. Michael A. Torres',
      credentials: 'MD, FACC',
      image: 'https://nampacardiology.com/dr-torres.jpg',
      jobTitle: 'Interventional Cardiologist',
      description:
        'Board-certified interventional cardiologist with 22 years of experience. Fellowship trained at Cleveland Clinic. MD from Johns Hopkins School of Medicine.',
      medicalSpecialty: {
        '@type': 'MedicalSpecialty',
        name: 'Cardiovascular',
      },
      worksFor: {
        '@type': ['MedicalOrganization', 'LocalBusiness'],
        name: 'Nampa Cardiology Associates',
      },
      alumniOf: [
        {
          '@type': 'EducationalOrganization',
          name: 'Johns Hopkins School of Medicine',
        },
        {
          '@type': 'MedicalOrganization',
          name: 'Cleveland Clinic',
        },
      ],
    },
    sameAs: [
      'https://www.healthgrades.com/',
      'https://www.zocdoc.com/',
    ],
  },
};
