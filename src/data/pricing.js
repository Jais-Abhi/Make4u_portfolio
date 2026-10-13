export const pricingServices = [
  {
    id: "website-development",
    name: "Website Development",
    shortLabel: "Websites",
    billingLabel: "One-time development charges",
    billingOptions: [{ id: "one-time", label: "One-time project fee" }],
    heroTitle: "Clear websites that convert more enquiries.",
    description:
      "Professional websites built for small businesses and growing brands that need a cleaner digital presence and a stronger route to enquiries.",
    benefits: [
      "Responsive websites that look sharp on every screen",
      "Clear calls-to-action for enquiries and WhatsApp leads",
      "SEO-ready structure for better visibility",
    ],
    plans: [
      {
        name: "Starter",
        price: 4999,
        priceSuffix: "one-time",
        description: "A clean, affordable website for businesses that need a professional online presence.",
        features: [
          "Up to 5 pages",
          "Responsive design",
          "Contact form and WhatsApp button",
          "Basic on-page SEO",
          "Deployment assistance",
        ],
        disclaimer: "E-commerce, complex dashboards, paid services, domain, and hosting may cost extra.",
      },
      {
        name: "Growth",
        price: 9999,
        priceSuffix: "one-time",
        description: "More pages, stronger brand presentation, and a more advanced conversion flow.",
        recommended: true,
        features: [
          "Up to 8 pages",
          "Custom UI/UX design",
          "Contact forms and integrations",
          "SEO-ready structure",
          "Analytics integration",
          "Basic animations",
        ],
        disclaimer: "E-commerce, complex dashboards, paid services, domain, and hosting may cost extra.",
      },
      {
        name: "Premium",
        price: 19999,
        priceSuffix: "from",
        description: "A larger, more strategic build for a brand that needs advanced functionality and custom design.",
        features: [
          "Up to 15 pages",
          "Advanced custom design",
          "CMS or dashboard where appropriate",
          "Advanced integrations",
          "Performance optimization",
          "Advanced functionality based on scope",
        ],
        disclaimer: "E-commerce, complex dashboards, paid services, domain, and hosting may cost extra.",
      },
    ],
    comparisonRows: [
      { label: "Pages", values: ["Up to 5", "Up to 8", "Up to 15"] },
      { label: "Design", values: ["Essential layout", "Custom UX", "Advanced custom design"] },
      { label: "SEO", values: ["Basic on-page", "SEO-ready structure", "Advanced optimization"] },
      { label: "Integrations", values: ["Contact + WhatsApp", "Forms + analytics", "Advanced integrations"] },
      { label: "Support", values: ["Deployment help", "Analytics + animation", "Performance tuning"] },
    ],
    faq: [
      {
        question: "Does the quoted price include the domain and hosting?",
        answer:
          "Not always. Domain, hosting, premium plugins, and advanced third-party tools are usually billed separately unless they are clearly included in the agreed scope.",
      },
      {
        question: "Can you build e-commerce or a custom dashboard?",
        answer:
          "Yes, but larger platforms may need additional scope, custom logic, and recurring support. We will outline those costs before moving ahead.",
      },
      {
        question: "How do we start?",
        answer:
          "Share your goals, pages you need, and any references. We can turn that into a tailored proposal and a clear project roadmap.",
      },
    ],
  },
  {
    id: "app-development",
    name: "App Development",
    shortLabel: "Apps",
    billingLabel: "One-time project fee",
    billingOptions: [{ id: "one-time", label: "One-time project fee" }],
    heroTitle: "Practical app experiences built around your operations.",
    description:
      "We build mobile, web app, and internal tool prototypes for businesses that need custom workflows, smarter automation, or better customer experiences.",
    benefits: [
      "Custom workflows for internal teams and customer journeys",
      "Clear roadmaps before full development begins",
      "Scalable foundations for future product growth",
    ],
    plans: [
      {
        name: "Starter",
        price: 9999,
        priceSuffix: "from",
        description: "A focused MVP or basic feature set for a first release, prototype, or pilot.",
        features: [
          "Basic MVP or prototype implementation",
          "Essential screens",
          "Basic backend/API integration",
          "Basic authentication where required",
        ],
        disclaimer: "Android, iOS, cross-platform support, backend complexity, and third-party integrations affect the final quote.",
      },
      {
        name: "Growth",
        price: 24999,
        priceSuffix: "from",
        description: "More screens, workflows, and data connections for businesses ready to scale their app.",
        recommended: true,
        features: [
          "More screens and workflows",
          "Backend and database integration",
          "Authentication and user profiles",
          "Admin features where scoped",
        ],
        disclaimer: "Android, iOS, cross-platform support, backend complexity, and third-party integrations affect the final quote.",
      },
      {
        name: "Premium",
        price: 49999,
        priceSuffix: "from",
        description: "Advanced product builds with custom logic, robust integrations, and enterprise-ready workflows.",
        features: [
          "Advanced application functionality",
          "Custom API integrations",
          "Role-based access",
          "Advanced workflows and dashboards",
          "Deployment support",
        ],
        disclaimer: "Android, iOS, cross-platform support, backend complexity, and third-party integrations affect the final quote.",
      },
    ],
    comparisonRows: [
      { label: "Scope", values: ["Basic MVP", "Extended app workflow", "Advanced solution"] },
      { label: "Screens", values: ["Essential screens", "Expanded workflows", "Custom dashboards"] },
      { label: "Backend", values: ["Basic API", "Database + logic", "Custom integrations"] },
      { label: "Access", values: ["Basic auth", "Profiles + admin", "Role-based access"] },
      { label: "Deployment", values: ["Basic support", "Go-live support", "Full deployment guidance"] },
    ],
    faq: [
      {
        question: "Are these apps production-ready at the starting price?",
        answer:
          "No. The displayed prices are starting points and are not a promise of a complete production-ready app without assessing the scope, integrations, and operational requirements.",
      },
      {
        question: "Do you build for Android and iOS?",
        answer:
          "Yes, depending on the requirement. The final scope, device targets, and platform choices determine the cost and build approach.",
      },
      {
        question: "What affects the final app quote?",
        answer:
          "App type, screens, backend complexity, user roles, custom APIs, third-party services, and the required deployment environment all change the estimate.",
      },
    ],
  },
  {
    id: "seo-digital-growth",
    name: "SEO & Digital Growth",
    shortLabel: "SEO",
    billingLabel: "Monthly service plans",
    billingOptions: [{ id: "monthly", label: "Monthly billing" }],
    heroTitle: "Search visibility that keeps your business discoverable.",
    description:
      "Monthly SEO and digital growth support for businesses that need more relevant traffic, stronger local visibility, and a clearer path to enquiries.",
    benefits: [
      "More relevant search visibility for your services",
      "Clear reporting and actionable monthly recommendations",
      "Local SEO support for nearby customers",
    ],
    plans: [
      {
        name: "Starter",
        price: 1499,
        priceSuffix: "/month",
        description: "A practical SEO foundation for smaller websites or service businesses starting to improve visibility.",
        features: [
          "Basic website SEO audit",
          "Keyword research for a limited scope",
          "On-page SEO for up to 5 pages",
          "Basic local SEO setup",
          "Monthly performance report",
        ],
        disclaimer: "Ranking guarantees are not provided. Paid ads, extra content production, and advertising budgets are separate.",
      },
      {
        name: "Growth",
        price: 2999,
        priceSuffix: "/month",
        description: "A stronger ongoing SEO plan for growing businesses that need better visibility and consistent improvements.",
        recommended: true,
        features: [
          "On-page SEO for up to 10 pages",
          "Expanded keyword research",
          "Google Business Profile optimization",
          "Content optimization",
          "Monthly reporting and recommendations",
        ],
        disclaimer: "Ranking guarantees are not provided. Paid ads, extra content production, and advertising budgets are separate.",
      },
      {
        name: "Premium",
        price: 4999,
        priceSuffix: "/month",
        description: "Broader SEO coverage and expert optimization for businesses that want a more strategic growth plan.",
        features: [
          "Broader on-page SEO scope",
          "Technical SEO checks",
          "Local SEO improvements",
          "Content strategy",
          "Competitor review and reporting",
        ],
        disclaimer: "Ranking guarantees are not provided. Paid ads, extra content production, and advertising budgets are separate.",
      },
    ],
    comparisonRows: [
      { label: "Audit", values: ["Basic audit", "In-depth review", "Technical + strategic review"] },
      { label: "Keyword scope", values: ["Limited", "Expanded", "Broader strategy"] },
      { label: "Pages", values: ["Up to 5", "Up to 10", "Broader on-page scope"] },
      { label: "Local SEO", values: ["Basic setup", "Profile optimization", "Local improvements"] },
      { label: "Reporting", values: ["Monthly report", "Monthly recommendations", "Competitor + technical review"] },
    ],
    faq: [
      {
        question: "Do you guarantee rankings?",
        answer:
          "No. We help improve your visibility and technical foundations, but search rankings depend on market competition, content quality, website health, and ongoing optimization.",
      },
      {
        question: "Are ad budgets included?",
        answer:
          "No. Paid advertisements, campaign spending, and extra content production beyond the agreed scope are billed separately.",
      },
      {
        question: "What do monthly reports include?",
        answer:
          "We review the core performance signals, identify areas for improvement, and provide clear recommendations for the next month of work.",
      },
    ],
  },
  {
    id: "graphic-design-video-editing",
    name: "Graphic Design & Video Editing",
    shortLabel: "Creative",
    billingLabel: "Monthly creative packages",
    billingOptions: [{ id: "monthly", label: "Monthly billing" }],
    heroTitle: "Visual content designed to keep your brand visible online.",
    description:
      "Short-form design and editing support for businesses that need content for social channels, ads, and brand storytelling.",
    benefits: [
      "Consistent social visuals and campaign assets",
      "Short-form videos that keep your content moving",
      "Clear revisions and deliverable limits",
    ],
    plans: [
      {
        name: "Starter",
        price: 999,
        priceSuffix: "/month",
        description: "A simple monthly package for businesses that need regular social content support.",
        features: [
          "5 social media designs",
          "1 short-form video edit",
          "Basic revisions",
        ],
        disclaimer: "Clients must provide footage unless filming is included separately. Delivery timing and revisions must be clearly agreed in advance.",
      },
      {
        name: "Growth",
        price: 2499,
        priceSuffix: "/month",
        description: "More design volume and flexible editing support for growing campaigns and brand consistency.",
        recommended: true,
        features: [
          "10 social media designs",
          "4 short-form video edits",
          "Multiple social media formats",
          "Up to 2 revisions per deliverable",
        ],
        disclaimer: "Clients must provide footage unless filming is included separately. Delivery timing and revisions must be clearly agreed in advance.",
      },
      {
        name: "Premium",
        price: 4999,
        priceSuffix: "/month",
        description: "Priority creative support for brands with regular publishing needs and a stronger visual identity.",
        features: [
          "15 social media designs",
          "8 short-form video edits",
          "Priority delivery",
          "Brand-consistent visual design",
        ],
        disclaimer: "Clients must provide footage unless filming is included separately. Delivery timing and revisions must be clearly agreed in advance.",
      },
    ],
    comparisonRows: [
      { label: "Designs", values: ["5", "10", "15"] },
      { label: "Short videos", values: ["1", "4", "8"] },
      { label: "Revision model", values: ["Basic", "Up to 2", "Priority with brand consistency"] },
      { label: "Delivery", values: ["Standard", "Multi-format", "Priority delivery"] },
      { label: "Brand fit", values: ["Basic branding", "Consistent assets", "Brand-led creative direction"] },
    ],
    faq: [
      {
        question: "Do I need to provide the footage?",
        answer:
          "Usually yes. Clients are expected to provide raw footage or source material unless filming is included in the project scope.",
      },
      {
        question: "What is included in each revision?",
        answer:
          "Revision limits are defined per deliverable, and new design requests outside the agreed scope may be treated as additional work.",
      },
      {
        question: "Can you make a new design or edit for a different campaign?",
        answer:
          "Yes, but new design requests or edits that go beyond the monthly scope are quoted separately based on the final task list and timeline.",
      },
    ],
  },
  {
    id: "photography-videography",
    name: "Photography & Videography",
    shortLabel: "Media",
    billingLabel: "Per-shoot packages",
    billingOptions: [{ id: "per-shoot", label: "Per shoot" }],
    heroTitle: "Commercial media for products, teams, and brand moments.",
    description:
      "Content production packages for business shoots, product launches, and visual storytelling that needs crisp imagery and simple, effective video output.",
    benefits: [
      "Great for product showcases and brand storytelling",
      "Flexible packages for short, practical shoots",
      "Simple pricing based on the shoot and deliverables",
    ],
    plans: [
      {
        name: "Starter",
        price: 1499,
        priceSuffix: "starting",
        description: "A short, practical shoot suitable for smaller local requirements and essentials.",
        features: [
          "Short local shoot",
          "Up to 10 edited photographs",
          "1 short edited video where applicable",
        ],
        disclaimer: "These are starting rates subject to shoot duration, location, equipment, travel, editing requirements, and final deliverables.",
      },
      {
        name: "Growth",
        price: 2999,
        priceSuffix: "starting",
        description: "A longer session with more edited assets for product, team, or event storytelling.",
        recommended: true,
        features: [
          "Longer shoot session",
          "Up to 20 edited photographs",
          "Up to 3 short edited videos",
        ],
        disclaimer: "These are starting rates subject to shoot duration, location, equipment, travel, editing requirements, and final deliverables.",
      },
      {
        name: "Premium",
        price: 4999,
        priceSuffix: "starting",
        description: "A more complete commercial shoot with more media and stronger coverage for brand storytelling.",
        features: [
          "Extended shoot session",
          "Up to 30 edited photographs",
          "Up to 5 short edited videos",
        ],
        disclaimer: "These are starting rates subject to shoot duration, location, equipment, travel, editing requirements, and final deliverables.",
      },
    ],
    comparisonRows: [
      { label: "Shoot length", values: ["Short local", "Longer session", "Extended session"] },
      { label: "Edited photos", values: ["Up to 10", "Up to 20", "Up to 30"] },
      { label: "Edited videos", values: ["1 short", "Up to 3", "Up to 5"] },
      { label: "Usage", values: ["Local content", "Campaign visuals", "Business storytelling"] },
      { label: "Customisation", values: ["Basic", "Expanded delivery", "Premium coverage"] },
    ],
    faq: [
      {
        question: "Are these packages full-day shoots?",
        answer:
          "No. The starting rates do not promise a full-day professional shoot. Final pricing depends on shoot duration, location, equipment, travel, editing, and the final deliverables.",
      },
      {
        question: "What if I need more deliverables?",
        answer:
          "Add-ons are quoted based on the number of edits, extra sessions, additional travel, and any custom processing requirements.",
      },
      {
        question: "Can I request a custom quote?",
        answer:
          "Absolutely. A custom quote is the best option if you need a larger production scope, more locations, or extra media based on your goals.",
      },
    ],
  },
  {
    id: "ai-business-integration",
    name: "AI & Business Integration",
    shortLabel: "AI",
    billingLabel: "Setup fee plus optional support",
    billingOptions: [
      { id: "setup", label: "Setup fee only" },
      { id: "support", label: "Setup + optional support" },
    ],
    heroTitle: "Smart automations that reduce routine work and support sales.",
    description:
      "Practical AI and workflow automation for businesses that want faster lead handling, cleaner processes, and better day-to-day operational flow.",
    benefits: [
      "Automations that save time and reduce repetitive admin",
      "More consistent lead handling and customer replies",
      "Better system connectivity across tools and workflows",
    ],
    plans: [
      {
        name: "Starter",
        price: 2999,
        priceSuffix: "setup onwards",
        description: "A practical entry point for one focused automation or simple chatbot workflow.",
        features: [
          "One basic automation workflow",
          "Basic FAQ chatbot or lead-capture flow",
          "Simple integration where supported",
          "Setup documentation",
        ],
        disclaimer: "One-time setup and development fees apply. Recurring support and third-party usage costs are separate when applicable.",
      },
      {
        name: "Growth",
        price: 5999,
        priceSuffix: "setup onwards",
        description: "More connected workflows and smarter operational support for growing teams.",
        recommended: true,
        features: [
          "Multiple connected workflow steps",
          "AI chatbot or WhatsApp workflow",
          "CRM or lead management integration",
          "Basic testing and monitoring",
        ],
        disclaimer: "One-time setup and development fees apply. Recurring support and third-party usage costs are separate when applicable.",
      },
      {
        name: "Premium",
        price: 9999,
        priceSuffix: "setup onwards",
        description: "Advanced automation systems built to support a more complex customer journey or internal operation.",
        features: [
          "Custom AI agent or advanced workflow",
          "Multiple integrations",
          "Advanced lead-handling workflows",
          "Custom configuration and testing",
        ],
        disclaimer: "One-time setup and development fees apply. Recurring support and third-party usage costs are separate when applicable.",
      },
    ],
    comparisonRows: [
      { label: "Workflows", values: ["1 basic flow", "Multiple steps", "Advanced multi-step flow"] },
      { label: "Chatbot", values: ["FAQ / lead capture", "AI + WhatsApp flow", "Custom AI agent"] },
      { label: "Integrations", values: ["Simple", "CRM / lead tools", "Multiple system integrations"] },
      { label: "Testing", values: ["Basic setup", "Monitoring + testing", "Custom configuration + testing"] },
      { label: "Support", values: ["Setup docs", "Ongoing support optional", "Advanced support + optimisation"] },
    ],
    faq: [
      {
        question: "What is not included in the setup price?",
        answer:
          "Recurring support, third-party platform costs, WhatsApp messaging usage, AI API usage, hosting, voice minutes, and other metered services are separate when applicable.",
      },
      {
        question: "Do you offer unlimited AI usage?",
        answer:
          "No. Usage is typically bounded by the specific solution and the third-party services configured for the project. Additional usage may incur separate charges.",
      },
      {
        question: "Can this connect to our CRM or WhatsApp?",
        answer:
          "Yes, when the required platform and access are available. The implementation scope and third-party provider rules will determine the final setup and any recurring usage fees.",
      },
    ],
  },
];

export const pricingServiceMap = Object.fromEntries(
  pricingServices.map((service) => [service.id, service])
);

export const pricingServiceOrder = pricingServices.map((service) => service.id);
