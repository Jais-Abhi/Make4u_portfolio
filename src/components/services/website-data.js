export const websitePackages = [
  {
    id: "basic",
    name: "Basic",
    price: "₹4,999",
    subtitle: "For businesses getting started online.",
    description:
      "A professional, mobile-friendly website with the essential features your business needs to establish an online presence.",
    features: [
      "Up to 5 website pages",
      "Responsive mobile, tablet, and desktop design",
      "Modern, professional UI",
      "Basic on-page SEO setup",
      "Contact form",
      "WhatsApp click-to-chat button",
      "Google Maps integration",
      "Social media links",
      "Basic image optimization",
      "SSL support through the hosting platform",
      "One round of design revisions",
      "Basic launch assistance",
    ],
    timeline: "5–7 working days after final content and approvals",
    cta: "Get Basic Website",
    href: "/contact?package=basic-website",
  },
  {
    id: "professional",
    name: "Professional",
    price: "₹9,999",
    subtitle: "For growing businesses that need more.",
    description:
      "A more complete business website with additional pages, enhanced functionality, and stronger optimization.",
    features: [
      "Up to 10 website pages",
      "Everything in Basic",
      "More advanced UI/UX design",
      "Enhanced on-page SEO setup",
      "Page metadata and internal linking improvements",
      "Google Analytics integration",
      "Search Console setup assistance",
      "Enhanced image and performance optimization",
      "Custom enquiry forms",
      "Additional CTA sections",
      "Two rounds of design revisions",
      "Deployment and launch assistance",
    ],
    timeline: "7–14 working days after final content and approvals",
    cta: "Get Professional",
    href: "/contact?package=professional-website",
    featured: true,
    badge: "Popular choice",
  },
  {
    id: "custom",
    name: "Business / Custom",
    price: "Custom Quote",
    subtitle: "For businesses that need tailored solutions.",
    description:
      "A flexible website development package designed around your business requirements, integrations, and growth plans.",
    features: [
      "Custom page count and website structure",
      "Everything in Professional, where applicable",
      "Custom UI/UX design",
      "Advanced animations and interactions where appropriate",
      "CMS or content-management functionality when required",
      "Custom API integrations",
      "Advanced forms and lead workflows",
      "CRM integration where required",
      "Booking or reservation functionality where required",
      "E-commerce functionality where agreed",
      "Three rounds of design revisions",
      "Priority support during the agreed project period",
    ],
    timeline: "Based on project scope and requirements",
    cta: "Discuss Your Project",
    href: "/contact?package=custom-website",
  },
];

export const websiteTypes = [
  {
    title: "Business Websites",
    description:
      "Professional websites for local businesses, consultants, and service providers.",
    icon: "Building2",
  },
  {
    title: "Restaurant Websites",
    description:
      "Menus, food galleries, location details, WhatsApp contact, and reservation enquiry options.",
    icon: "UtensilsCrossed",
  },
  {
    title: "Landing Pages",
    description:
      "Focused pages designed to promote a product, campaign, or specific service.",
    icon: "Target",
  },
  {
    title: "E-commerce Websites",
    description:
      "Online product catalogs, shopping carts, checkout integrations, and product management, depending on the selected scope.",
    icon: "ShoppingBag",
  },
  {
    title: "Custom Websites",
    description:
      "Tailored websites with advanced functionality, integrations, and custom workflows.",
    icon: "Sparkles",
  },
];

export const websiteFeatures = [
  {
    title: "Responsive Design",
    description: "Works across mobile, tablet, and desktop with a clean, consistent experience.",
    icon: "MonitorSmartphone",
  },
  {
    title: "Modern UI/UX",
    description: "Clear navigation, strong hierarchy, and layouts designed to guide enquiries.",
    icon: "LayoutGrid",
  },
  {
    title: "Basic On-Page SEO",
    description:
      "Page titles, descriptive metadata, semantic structure, and search-friendly foundations.",
    icon: "Search",
  },
  {
    title: "Performance Optimization",
    description: "Efficient page structure, optimized media, and a smoother front-end experience.",
    icon: "Gauge",
  },
  {
    title: "Contact Forms",
    description: "Forms configured for your chosen package and agreed integration workflow.",
    icon: "FormInput",
  },
  {
    title: "WhatsApp Integration",
    description: "Direct customer contact through WhatsApp links and agreed lead flows.",
    icon: "MessageCircleMore",
  },
  {
    title: "Google Maps Integration",
    description: "Simple local business location and directions for easier customer access.",
    icon: "MapPinned",
  },
  {
    title: "Security and Reliability",
    description: "HTTPS support through hosting, secure setup, and reliable deployment practices.",
    icon: "ShieldCheck",
  },
  {
    title: "Analytics Integration",
    description: "Google Analytics and similar tracking when included and configured.",
    icon: "ChartNoAxesCombined",
  },
  {
    title: "Future Scalability",
    description: "A structure that is ready for future growth, new pages, and added functionality.",
    icon: "TrendingUp",
  },
];

export const websiteEssentials = [
  "Mobile-friendly layouts",
  "A clear navigation structure",
  "Brand-aligned colors and typography",
  "Contact details and enquiry pathways",
  "Appropriate metadata and semantic HTML",
  "Image optimization",
  "Basic accessibility considerations",
  "A final review before launch",
  "Deployment assistance",
];

export const additionalCosts = [
  {
    title: "Domain and Hosting",
    text: "Domain registration and hosting are separate third-party costs. MAKE4U can help clients choose and configure the appropriate provider.",
  },
  {
    title: "Email Services",
    text: "Professional domain email and paid email-provider charges are separate unless explicitly included in the quote.",
  },
  {
    title: "Third-Party Integrations",
    text: "Paid APIs, premium plugins, payment gateways, WhatsApp API usage, CRM subscriptions, and other external service charges are billed separately where applicable.",
  },
  {
    title: "Content and Photography",
    text: "Professional copywriting, product photography, video production, and large-scale content creation are not included unless specified.",
  },
  {
    title: "Future Changes",
    text: "New pages, major redesigns, additional features, and substantial content changes after the agreed scope are quoted separately.",
  },
  {
    title: "Maintenance",
    text: "Ongoing maintenance is optional and can be purchased through a separately defined support plan.",
  },
];

export const comparisonGroups = [
  {
    name: "Website Structure",
    rows: [
      { feature: "Website pages", basic: "Up to 5", professional: "Up to 10", custom: "Custom" },
      { feature: "Responsive design", basic: "Included", professional: "Included", custom: "Included" },
      { feature: "Custom UI/UX", basic: "Standard", professional: "Enhanced", custom: "Custom" },
      { feature: "Navigation and footer", basic: "Included", professional: "Included", custom: "Included" },
      { feature: "Custom layouts", basic: "Basic layouts", professional: "Enhanced layouts", custom: "Tailored layouts" },
    ],
  },
  {
    name: "SEO and Performance",
    rows: [
      { feature: "Basic on-page SEO", basic: "Included", professional: "Included", custom: "Included" },
      { feature: "Page-specific metadata", basic: "Basic", professional: "Enhanced", custom: "Custom scope" },
      { feature: "Semantic HTML structure", basic: "Included", professional: "Included", custom: "Included" },
      { feature: "XML sitemap and robots config", basic: "Basic setup", professional: "Included", custom: "Included" },
      { feature: "Image optimization", basic: "Basic", professional: "Enhanced", custom: "Advanced as scoped" },
      { feature: "Performance optimization", basic: "Basic", professional: "Enhanced", custom: "Advanced as scoped" },
      { feature: "Google Analytics", basic: "Not included by default", professional: "Included", custom: "Included as scoped" },
      { feature: "Search Console setup assistance", basic: "Not included by default", professional: "Included", custom: "Included as scoped" },
      { feature: "Ongoing SEO campaigns", basic: "Not included", professional: "Not included", custom: "Separate service" },
    ],
  },
  {
    name: "Forms and Integrations",
    rows: [
      { feature: "Contact form UI", basic: "Included", professional: "Included", custom: "Included" },
      { feature: "Working form submission integration", basic: "Basic agreed method", professional: "Included as scoped", custom: "Custom" },
      { feature: "WhatsApp click-to-chat", basic: "Included", professional: "Included", custom: "Included" },
      { feature: "Google Maps", basic: "Included", professional: "Included", custom: "Included" },
      { feature: "Social media links", basic: "Included", professional: "Included", custom: "Included" },
      { feature: "CRM integration", basic: "Not included", professional: "Optional extra", custom: "Available as scoped" },
      { feature: "Custom API integrations", basic: "Not included", professional: "Optional extra", custom: "Available as scoped" },
      { feature: "Booking system", basic: "Not included", professional: "Optional extra", custom: "Available as scoped" },
      { feature: "E-commerce", basic: "Not included", professional: "Optional extra", custom: "Available as scoped" },
    ],
  },
  {
    name: "Content and Management",
    rows: [
      { feature: "Initial content integration", basic: "Up to 5 pages", professional: "Up to 10 pages", custom: "As agreed" },
      { feature: "Blog functionality", basic: "Not included", professional: "Included if agreed", custom: "Available" },
      { feature: "CMS integration", basic: "Not included", professional: "Optional extra", custom: "Available as scoped" },
      { feature: "Content writing", basic: "Separate quote", professional: "Separate quote", custom: "Separate quote" },
      { feature: "Professional photography", basic: "Separate quote", professional: "Separate quote", custom: "Separate quote" },
    ],
  },
  {
    name: "Delivery and Support",
    rows: [
      { feature: "Design revisions", basic: "1 round", professional: "2 rounds", custom: "3 rounds" },
      { feature: "Deployment assistance", basic: "Included", professional: "Included", custom: "Included" },
      { feature: "Domain registration", basic: "Charged separately", professional: "Charged separately", custom: "Charged separately" },
      { feature: "Hosting charges", basic: "Charged separately", professional: "Charged separately", custom: "Charged separately" },
      { feature: "Ongoing maintenance", basic: "Optional subscription", professional: "Optional subscription", custom: "Agreed support plan" },
      { feature: "New features after launch", basic: "Additional charge", professional: "Additional charge", custom: "Quoted separately" },
      { feature: "Delivery estimate", basic: "5–7 working days", professional: "7–14 working days", custom: "Based on scope" },
    ],
  },
];

export const processSteps = [
  {
    title: "Discovery",
    description: "Understand the business, target customers, goals, and requirements.",
  },
  {
    title: "Planning",
    description: "Agree on page structure, content, scope, and package.",
  },
  {
    title: "Design",
    description: "Create a visual direction and page layouts.",
  },
  {
    title: "Development",
    description: "Build the responsive website and implement the agreed functionality.",
  },
  {
    title: "Testing and Launch",
    description: "Review the website, resolve agreed issues, and deploy it to the selected hosting platform.",
  },
];

export const faqs = [
  {
    question: "How much does website development cost?",
    answer:
      "Website development pricing depends on the scope, number of pages, required functionality, and any integrations. Our Basic package starts at ₹4,999 and can scale up for more complex project requirements.",
  },
  {
    question: "What is included in the Basic website package?",
    answer:
      "The Basic package includes a professionally designed, mobile-friendly website with up to five pages, basic SEO setup, contact form, WhatsApp button, maps integration, and launch support. The exact scope is defined in the project agreement.",
  },
  {
    question: "Can I add more pages later?",
    answer:
      "Yes. Additional pages and new sections can be added later as a separate scope, depending on the size of the update and future requirements.",
  },
  {
    question: "Do you provide domain and hosting?",
    answer:
      "We can help recommend a suitable domain and hosting provider, but domain registration and hosting charges are separate third-party costs unless explicitly included in your quote.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Yes. All websites are developed responsively so they work across mobile, tablet, and desktop devices as part of the standard build.",
  },
  {
    question: "Is SEO included in the packages?",
    answer:
      "Basic on-page SEO is included in the packages. This includes foundations such as metadata, semantic structure, and search-friendly page setup. Ongoing SEO strategy or ranking campaigns are a separate service.",
  },
  {
    question: "Can you integrate WhatsApp and contact forms?",
    answer:
      "Yes. WhatsApp quick contact and forms can be integrated according to the agreed package and the functionality required by your business.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Typical timings range from 5–7 working days for a basic website to 7–14 working days for a professional website, depending on content readiness, design feedback, and required functionality.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can review an existing website, improve the visual design, content structure, and functionality, and provide a tailored quote for the revision scope.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. Ongoing maintenance is available as an optional support plan separate from the initial website build.",
  },
  {
    question: "Will I own my website after payment?",
    answer:
      "Ownership, source-code handover, licensing, hosting access, and support terms should be clearly defined in the project agreement before work begins.",
  },
  {
    question: "Can I request a custom feature?",
    answer:
      "Yes, but custom features, integrations, and advanced functionality are scoped, quoted, and approved before implementation. They are not assumed to be part of a standard package.",
  },
];
