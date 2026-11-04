interface LinkContent {
  label: string;
  href: string;
}

interface ServiceCard {
  id: string;
  title: string;
  summary: string;
  points: string[];
  icon: 'code' | 'layers' | 'pen' | 'palette';
}

interface Pillar {
  title: string;
  text: string;
}

interface Step {
  number: string;
  title: string;
  text: string;
}

interface WorkProject {
  id: string;
  title: string;
  subtitle: string;
  classification: string;
  description: string;
  challengeLabel: string;
  challenge: string;
  approachLabel: string;
  approach: string;
  technologyLabel: string;
  technology: string[];
  primaryCta: string;
  secondaryCta: string;
  url: string;
  visual: 'glow' | 'portfolio';
}

interface PackageItem {
  number: string;
  name: string;
  price: string;
  label: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

interface AdditionalPackage {
  name: string;
  price: string;
  features: string[];
}

interface HomeContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
    brandLabel: string;
    brandCaption: string;
    focusLabel: string;
    focusValue: string;
    promise: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    intro: string;
    cta: string;
    items: ServiceCard[];
  };
  packages: {
    eyebrow: string;
    heading: string;
    intro: string;
    packageWord: string;
    recommendedLabel: string;
    additionalLabel: string;
    note: string;
    cta: string;
    items: PackageItem[];
    additional: AdditionalPackage;
  };
  why: {
    eyebrow: string;
    heading: string;
    headingAccent: string;
    body: string;
    note: string;
    pillars: Pillar[];
  };
  work: {
    eyebrow: string;
    heading: string;
    intro: string;
    featuredLabel: string;
    more: string;
    projects: WorkProject[];
  };
  about: {
    eyebrow: string;
    heading: string;
    headingAccent: string;
    body: string;
    quote: string;
    quoteFooter: string;
    pillars: Pillar[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    intro: string;
    emailLabel: string;
    emailCta: string;
    whatsappLabel: string;
    whatsappCta: string;
    stepsHeading: string;
    steps: Step[];
    form: {
      name: string;
      email: string;
      company: string;
      country: string;
      services: string;
      budget: string;
      budgetPlaceholder: string;
      budgetOptions: string[];
      message: string;
      messagePlaceholder: string;
      preferredContact: string;
      preferredContactPlaceholder: string;
      preferredContactOptions: string[];
      privacy: string;
      serviceRequired: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      networkError: string;
      emailFallback: string;
      serviceOptions: string[];
      companyPlaceholder: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      countryPlaceholder: string;
    };
  };
}

export const homeContent: HomeContent = {
  meta: {
    title: 'Lumina Creative Studio',
    description:
      'Lumina Creative Studio designs, engineers, and develops digital experiences that help businesses turn ideas and challenges into meaningful solutions.',
  },
  hero: {
    headline: 'Illuminate Your Digital Potential.',
    supporting:
      'We design, engineer, and develop digital experiences that help businesses transform ideas into meaningful solutions.',
    primaryCta: 'Start a Project',
    secondaryCta: 'Explore Our Work',
    imageAlt: 'Lumina Creative Studio logo',
    brandLabel: 'Our brand',
    brandCaption: 'Thoughtful design. Intelligent engineering.',
    focusLabel: 'Focus areas',
    focusValue: 'UI/UX · Static · Dynamic',
    promise: 'Human-centered design. Rigorous engineering.',
  },
  services: {
    eyebrow: 'Our Services',
    heading: 'Full-spectrum digital expertise',
    intro:
      'From strategy and design to engineering and launch, one partner for the work that matters.',
    cta: 'Explore this service',
    items: [
      {
        id: 'web-development',
        title: 'Web Development',
        summary:
          'A professional, responsive website that helps customers understand your business and get in touch.',
        points: [
          'Responsive, accessible websites',
          'Performance-focused builds',
          'SEO foundations',
        ],
        icon: 'code',
      },
      {
        id: 'custom-web-applications',
        title: 'Custom Web Applications',
        summary:
          'Digital systems tailored to your workflows, reducing repetitive manual work and improving operational visibility.',
        points: [
          'Workflow-aligned systems',
          'Database-backed features',
          'Maintainable architecture',
        ],
        icon: 'layers',
      },
      {
        id: 'ui-ux-design',
        title: 'UI/UX Design',
        summary:
          'Clearer, more usable digital experiences informed by user needs and evidence.',
        points: [
          'User research',
          'Wireframes and prototypes',
          'Design systems',
        ],
        icon: 'pen',
      },
      {
        id: 'branding-graphic-design',
        title: 'Branding & Graphic Design',
        summary:
          'A consistent visual identity that helps your business communicate clearly and professionally.',
        points: [
          'Visual identity',
          'Brand guidelines',
          'Marketing collateral',
        ],
        icon: 'palette',
      },
    ],
  },
  packages: {
    eyebrow: 'Packages',
    heading: 'Clear starting points',
    intro:
      'Choose a starting point that fits where you are now. Every package can be adjusted after the project scope is reviewed.',
    packageWord: 'Package',
    recommendedLabel: 'Recommended package',
    additionalLabel: 'Additional service',
    note: 'Prices are starting points and will be confirmed after scope review.',
    cta: 'Start a project',
    items: [
      {
        number: '1',
        name: 'Starter Website',
        price: 'IDR 2.5–4M',
        label: 'Entry-level offer',
        description: 'For small businesses establishing their online presence.',
        features: [
          'Up to 5 pages',
          'Responsive design',
          'Contact and WhatsApp integration',
          'Basic SEO',
          'Deployment',
          '2 revision rounds',
        ],
      },
      {
        number: '2',
        name: 'Business Website',
        price: 'IDR 5–8M',
        label: 'Recommended package',
        description: 'For businesses that need a more comprehensive digital presence.',
        features: [
          'Up to 10 pages',
          'Custom UI/UX design',
          'Responsive development',
          'Contact forms and integrations',
          'SEO foundation',
          'Analytics integration',
          '30-day support',
        ],
        recommended: true,
      },
      {
        number: '3',
        name: 'Custom Digital Solution',
        price: 'Starting at IDR 10M',
        label: 'For custom requirements',
        description: 'For businesses that need more than a traditional website.',
        features: [
          'Requirements analysis',
          'UI/UX design',
          'Database architecture',
          'Custom application development',
          'Authentication and user management',
          'Deployment',
          'Documentation and handover',
        ],
      },
    ],
    additional: {
      name: 'Brand Identity',
      price: 'IDR 1.5–4M',
      features: [
        'Logo design',
        'Color and typography system',
        'Brand guidelines',
        'Basic social media assets',
      ],
    },
  },
  why: {
    eyebrow: 'Why Lumina',
    heading: 'Where psychology meets',
    headingAccent: 'precision',
    body:
      'We combine human-centered design with rigorous engineering, translating business goals into interfaces people understand and platforms that perform.',
    note: 'Academic foundations in Information Systems and Human-Computer Interaction, applied to practical digital work.',
    pillars: [
      {
        title: 'Systemic Architecture',
        text: 'We design information structures and technical foundations that hold up as your business grows.',
      },
      {
        title: 'User-Centric Methodology',
        text: 'Decisions are grounded in research, usability testing, and an understanding of how people actually use products.',
      },
      {
        title: 'End-to-End Execution',
        text: 'Strategy, design, development, and launch, one accountable team from discovery to delivery.',
      },
      {
        title: 'Rigorous Engineering',
        text: 'Performance, accessibility, and security are treated as requirements, not afterthoughts.',
      },
    ],
  },
  work: {
    eyebrow: 'Selected Work',
    heading: 'Work that earns trust',
    intro: 'A closer look at how we approach design and engineering.',
    featuredLabel: 'Featured project',
    more: 'More case studies are being prepared.',
    projects: [
      {
        id: 'glow-and-grace',
        title: 'Glow & Grace',
        subtitle: 'Clean, science-backed skincare',
        classification: 'Demonstration Project',
        description:
          'A demonstration project exploring a calm, editorial storefront for a clean skincare brand. It showcases our approach to interface design, responsive layout, and front-end performance.',
        challengeLabel: 'The challenge',
        challenge:
          'Create a minimal, calming shopping experience that feels consistent with clean beauty principles while remaining fast and responsive.',
        approachLabel: 'The approach',
        approach:
          'A restrained visual system, clear product hierarchy, and a performance-focused front end built on a modern stack.',
        technologyLabel: 'Technology',
        technology: ['Next.js', 'Tailwind CSS', 'Vercel'],
        primaryCta: 'Visit live site',
        secondaryCta: 'Discuss a similar project',
        url: 'https://glowcare-flax.vercel.app/',
        visual: 'glow',
      },
      {
        id: 'dhanudriya-portfolio',
        title: 'Academic Portfolio',
        subtitle: 'Academic and design portfolio',
        classification: 'Internal Project',
        description:
          'A personal academic and design portfolio presenting research directions, selected design work, publications, and academic experience.',
        challengeLabel: 'The challenge',
        challenge:
          'Present research and design practice in one coherent structure without reducing either to a simple gallery.',
        approachLabel: 'The approach',
        approach:
          'A clear editorial hierarchy and restrained interface organized around research, design, and academic background.',
        technologyLabel: 'Technology',
        technology: ['Astro'],
        primaryCta: 'Visit portfolio',
        secondaryCta: 'Discuss a similar project',
        url: 'https://dhanudriya.my.id/',
        visual: 'portfolio',
      },
    ],
  },
  about: {
    eyebrow: 'About Lumina',
    heading: 'A studio built on',
    headingAccent: 'curiosity',
    body:
      'Lumina Creative Studio is a technology-focused digital studio helping businesses turn ideas and challenges into meaningful digital experiences. We combine web engineering, user-centered design, and creative problem-solving to build websites and digital solutions.',
    quote: 'Bridging human psychology and technical precision.',
    quoteFooter: 'Our guiding philosophy',
    pillars: [
      {
        title: 'Human-Centered Design',
        text: 'Every decision starts with the people who will use the product.',
      },
      {
        title: 'Full-Spectrum Development',
        text: 'From static websites to custom applications, we build what the work requires.',
      },
      {
        title: 'Rigorous Standards',
        text: 'Performance, accessibility, and security are engineered in from the start.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact / Consultation',
    heading: "Let's build something luminous",
    intro:
      "Tell us about your project. We'll reply with clear next steps and an honest point of view on the right approach.",
    emailLabel: 'Email us directly',
    emailCta: 'Send an email',
    whatsappLabel: 'Chat on WhatsApp',
    whatsappCta: 'Open WhatsApp',
    stepsHeading: 'How we work: next steps',
    steps: [
      {
        number: '01',
        title: 'Review',
        text: 'We review your inquiry and project requirements within 1–2 business days.',
      },
      {
        number: '02',
        title: 'Discovery Call',
        text: 'A focused call to understand your goals, users, and technical needs.',
      },
      {
        number: '03',
        title: 'Proposal & Roadmap',
        text: 'A clear proposal with scope, timeline, and a step-by-step delivery roadmap.',
      },
    ],
    form: {
      name: 'Full name',
      email: 'Email address',
      company: 'Company / organization',
      country: 'Country',
      services: 'Service required',
      budget: 'Estimated budget',
      budgetPlaceholder: 'Select a range',
      budgetOptions: [
        'Below IDR 3M',
        'IDR 3–5M',
        'IDR 5–10M',
        'IDR 10–25M',
        'IDR 25–50M',
        'Above IDR 50M',
        'Not sure yet',
      ],
      message: 'Project details / message',
      messagePlaceholder: 'Tell us about your goals, timeline, and any requirements.',
      preferredContact: 'Preferred contact method',
      preferredContactPlaceholder: 'Select a method',
      preferredContactOptions: ['Email', 'WhatsApp', 'Other'],
      privacy: 'I agree to be contacted about this inquiry.',
      serviceRequired: 'Please select at least one service.',
      submit: 'Send Consultation Request',
      sending: 'Sending your message…',
      success:
        "Thanks! Your message has been sent. We'll be in touch within 1–2 business days.",
      error:
        'Something went wrong. Please email us directly at contact@luminacreative.tech.',
      networkError:
        'Network error. Please email us directly at contact@luminacreative.tech.',
      emailFallback: 'Opening your email app…',
      serviceOptions: [
        'Web Development',
        'Custom Web Applications',
        'UI/UX Design',
        'Branding & Graphic Design',
      ],
      companyPlaceholder: 'Company name',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@company.com',
      countryPlaceholder: 'Country',
    },
  },
};


export type { HomeContent, ServiceCard };
