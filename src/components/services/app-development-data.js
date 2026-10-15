export const appSolutions = [
  {
    title: "Business Apps",
    description: "Apps for managing business activities and customer interactions.",
    icon: "BriefcaseBusiness",
    accent: "bg-[#C8F169]/12 text-[#C8F169]",
  },
  {
    title: "E-commerce Apps",
    description: "Product catalogs, shopping carts, and checkout integrations.",
    icon: "ShoppingBag",
    accent: "bg-[#D9F99D]/12 text-[#D9F99D]",
  },
  {
    title: "Booking & Service Apps",
    description: "Appointment booking, service requests, and scheduling.",
    icon: "CalendarRange",
    accent: "bg-[#C4B5FD]/12 text-[#C4B5FD]",
  },
  {
    title: "Custom Apps",
    description: "Tailored applications with workflows, dashboards, and integrations.",
    icon: "Rocket",
    accent: "bg-[#7DD3FC]/12 text-[#7DD3FC]",
  },
];

export const platformOptions = [
  {
    title: "Android Apps",
    description: "Applications designed for Android devices.",
  },
  {
    title: "iOS Apps",
    description: "Applications designed for Apple devices.",
  },
  {
    title: "Cross-Platform Apps",
    description: "Shared-codebase apps for Android and iOS where appropriate.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    text: "Understand your idea, users, business workflow, and project requirements.",
  },
  {
    step: "02",
    title: "Design",
    text: "Plan the app journey, screens, and information flow before build starts.",
  },
  {
    step: "03",
    title: "Develop",
    text: "Build the app and integrate the agreed systems, APIs, and data layers.",
  },
  {
    step: "04",
    title: "Test & Launch",
    text: "Validate usability, stability, and deployment readiness before release.",
  },
];

export const packages = [
  {
    name: "Basic App",
    price: "₹14,999",
    description: "For simple applications and MVPs.",
    badge: null,
    highlight: false,
    cta: "Choose Basic",
    ctaHref: "/contact?package=basic-app",
    features: [
      "Basic app UI",
      "Limited screens and core functionality",
      "One agreed platform or implementation approach",
      "Basic navigation and forms",
      "Basic backend/API integration where required and scoped",
      "Basic testing",
      "One round of UI revisions",
      "Deployment guidance",
    ],
  },
  {
    name: "Professional App",
    price: "₹34,999",
    description: "For businesses needing more functionality.",
    badge: "Popular choice",
    highlight: true,
    cta: "Choose Professional",
    ctaHref: "/contact?package=professional-app",
    features: [
      "Everything in Basic, where applicable",
      "More screens and advanced UI",
      "User authentication where required",
      "Database and API integration",
      "User profile and data management",
      "Push notifications where supported and configured",
      "Two rounds of UI revisions",
      "Expanded testing",
      "Deployment assistance",
    ],
  },
  {
    name: "Custom Business App",
    price: "Custom Quote",
    description: "For complex business applications.",
    badge: null,
    highlight: false,
    cta: "Discuss Your App",
    ctaHref: "/contact?package=custom-business-app",
    features: [
      "Custom app architecture",
      "Tailored UI/UX",
      "Advanced backend and API integrations",
      "Role-based access where required",
      "Admin dashboard where scoped",
      "Third-party integrations",
      "Advanced workflows",
      "Three rounds of UI revisions",
      "Testing and deployment planning",
      "Ongoing maintenance available separately",
    ],
  },
];

export const comparisonRows = [
  {
    feature: "Core app screens",
    basic: "Limited",
    professional: "Expanded",
    custom: "Custom",
  },
  {
    feature: "UI/UX design",
    basic: "Standard",
    professional: "Enhanced",
    custom: "Tailored",
  },
  {
    feature: "Authentication",
    basic: "Optional extra",
    professional: "Included if scoped",
    custom: "Custom",
  },
  {
    feature: "Database/API integration",
    basic: "Basic if scoped",
    professional: "Included if scoped",
    custom: "Advanced",
  },
  {
    feature: "Push notifications",
    basic: "Optional extra",
    professional: "Available if supported",
    custom: "Custom",
  },
  {
    feature: "Admin dashboard",
    basic: "Not included",
    professional: "Optional extra",
    custom: "Available",
  },
  {
    feature: "Third-party integrations",
    basic: "Optional extra",
    professional: "Limited, as agreed",
    custom: "Custom",
  },
  {
    feature: "Testing",
    basic: "Basic",
    professional: "Expanded",
    custom: "Project-specific",
  },
  {
    feature: "Deployment assistance",
    basic: "Included",
    professional: "Included",
    custom: "Included as scoped",
  },
  {
    feature: "Ongoing maintenance",
    basic: "Separate plan",
    professional: "Separate plan",
    custom: "Separate plan",
  },
];

export const transparencyNotes = [
  "Hosting and backend infrastructure may incur separate charges.",
  "Developer accounts and app-store fees are separate.",
  "Paid APIs, SMS, email, and other third-party services are billed separately.",
  "Major feature additions after approval require a separate quote.",
  "Maintenance and updates are available under an agreed support plan.",
];

export const faqs = [
  {
    question: "How much does app development cost?",
    answer:
      "Project cost depends on the app complexity, platforms, integrations, and design scope. We can recommend the right package after reviewing your requirements.",
  },
  {
    question: "Can you build apps for Android and iOS?",
    answer:
      "Yes, depending on the project requirements. We assess the best technology approach, including native or cross-platform delivery, before starting the build.",
  },
  {
    question: "Can you connect an app to a database or API?",
    answer:
      "Yes. We can connect apps to approved databases, APIs, CRMs, or business systems when the integration scope is clearly defined.",
  },
  {
    question: "Do you publish the app to app stores?",
    answer:
      "We can help with deployment planning and guidance, but developer accounts, store setup, and app-store compliance remain separate responsibilities unless explicitly included in scope.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes, ongoing support can be arranged under a maintenance plan after launch, depending on your operational needs.",
  },
  {
    question: "How long does app development take?",
    answer:
      "The timeline depends on scope, integrations, and revisions. We usually define delivery estimates after reviewing your requirements and planning the product.",
  },
];
