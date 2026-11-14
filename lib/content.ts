export const needs = [
  { value: "business-website", label: "Business website" },
  { value: "online-store", label: "Online store" },
  { value: "web-app", label: "Web app or portal" },
  { value: "ui-ux", label: "UI/UX design" },
  { value: "hosting", label: "Hosting and care" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export type NeedValue = (typeof needs)[number]["value"];

export const guarantees = [
  {
    title: "Launch on time",
    body: "If we are late for reasons within our control, 5% comes off the fee for each week, up to 20%.",
  },
  {
    title: "You own everything",
    body: "Your domain, hosting accounts, code and content are yours once paid. No rented templates.",
  },
  {
    title: "Fast by default",
    body: "Key pages reach a Google PageSpeed score of 85 or higher on mobile at launch, or we fix them free.",
  },
  {
    title: "30-day fix window",
    body: "Anything we built that breaks in the first 30 days is fixed at no cost.",
  },
];

export const trust = [
  "A division of Vantage Bridge Enterprise",
  "Written contract on every project",
  "Fixed price agreed before we start",
  "Support after launch",
];

export const outcomes = [
  {
    title: "Launch in weeks",
    body: "A clear plan and a fixed launch date, not months of waiting.",
  },
  {
    title: "Found on Google",
    body: "Search basics built in from day one: speed, structure, titles and your Google Business Profile.",
  },
  {
    title: "Built to convert",
    body: "Every page leads to a call, a booking, a WhatsApp message or a sale.",
  },
  {
    title: "Yours to keep",
    body: "You own the code, the content and every account, with training so your team can update it.",
  },
];

export const services = [
  {
    number: "01",
    title: "Business websites",
    body: "Corporate, portfolio and landing pages that load fast on any phone and turn visitors into enquiries.",
  },
  {
    number: "02",
    title: "Online stores",
    body: "Product catalogues, checkout with mobile money and card, and delivery set-up, ready to sell from day one.",
  },
  {
    number: "03",
    title: "Web apps and portals",
    body: "Booking systems, property listings, school portals and dashboards built around how your business runs.",
  },
  {
    number: "04",
    title: "UI/UX design",
    body: "Wireframes, prototypes and polished interfaces you can review and approve before a line of code is written.",
  },
  {
    number: "05",
    title: "Hosting and care",
    body: "Deployment, domains, backups, security updates and monitoring, handled for you every month.",
  },
];

export const industries = [
  {
    number: "01",
    title: "Hotels and hospitality",
    body: "Take direct bookings instead of paying commission on every room.",
    chips: ["Online booking", "Mobile money", "Room galleries"],
  },
  {
    number: "02",
    title: "Real estate",
    body: "Show listings that local and diaspora buyers can search from anywhere.",
    chips: ["Property search", "Enquiry tracking", "Virtual tours"],
  },
  {
    number: "03",
    title: "Schools and training",
    body: "Move admissions, fee notices and parent updates out of WhatsApp groups.",
    chips: ["Online admissions", "Parent portal", "Fee notices"],
  },
  {
    number: "04",
    title: "Retail and product brands",
    body: "Turn Instagram and WhatsApp orders into a store that sells while you sleep.",
    chips: ["Mobile money checkout", "Order tracking", "Delivery zones"],
  },
];

export const packages = [
  {
    name: "Launch",
    audience: "Individuals, startups and small businesses",
    need: "business-website" as NeedValue,
    features: [
      "Up to 5 pages",
      "Mobile-first design",
      "Contact form and WhatsApp link",
      "Search basics and analytics",
    ],
  },
  {
    name: "Professional",
    audience: "Growing businesses and organizations",
    need: "business-website" as NeedValue,
    features: [
      "Multi-page company site",
      "Content editor for your team",
      "Booking or enquiry flows",
      "Search and speed optimization",
    ],
  },
  {
    name: "Commerce",
    audience: "Retail and product businesses",
    need: "online-store" as NeedValue,
    features: [
      "Product catalogue and cart",
      "Mobile money and card checkout",
      "Delivery and order set-up",
      "Training for your team",
    ],
  },
  {
    name: "Custom",
    audience: "Organizations with specific workflows",
    need: "web-app" as NeedValue,
    features: [
      "Bespoke web app or portal",
      "User logins and dashboards",
      "Integrations and APIs",
      "Scoped in a statement of work",
    ],
  },
];

export const projects = [
  {
    slug: "hotel-booking",
    industry: "Hospitality",
    title: "Hotel booking platform",
    summary:
      "Room availability, online booking and payment for a boutique hotel.",
    stack: ["Next.js", "Supabase", "Paystack"],
    covers: [
      "Room availability a guest can check on a phone",
      "Direct booking, so the hotel keeps the reservation instead of paying commission on every room",
      "Mobile money and card payment",
      "Room galleries",
    ],
  },
  {
    slug: "real-estate-listings",
    industry: "Real estate",
    title: "Real estate listings",
    summary:
      "Searchable property listings that diaspora buyers can browse from anywhere.",
    stack: ["Next.js", "Supabase", "Vercel"],
    covers: [
      "Search for local and diaspora buyers",
      "Enquiry tracking for the sales team",
      "Virtual tours alongside the listing",
    ],
  },
  {
    slug: "online-fashion-store",
    industry: "Retail",
    title: "Online fashion store",
    summary:
      "Catalogue, cart and mobile money checkout for a fashion brand.",
    stack: ["Shopify", "Paystack"],
    covers: [
      "A catalogue that takes orders outside Instagram and WhatsApp",
      "Cart and mobile money checkout",
      "Order tracking and delivery zones",
    ],
  },
  {
    slug: "school-portal",
    industry: "Education",
    title: "School management portal",
    summary: "Admissions, fee notices and parent updates in one place.",
    stack: ["Next.js", "Supabase", "TypeScript"],
    covers: [
      "Online admissions",
      "Fee notices parents can find again",
      "Parent updates in one place, outside a WhatsApp group",
    ],
  },
] as const;

export type Project = (typeof projects)[number];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const steps = [
  {
    when: "Week 1",
    title: "Discover",
    body: "A free consultation, then a written proposal with three options.",
  },
  {
    when: "Week 1",
    title: "Kickoff",
    body: "Contract, deposit, accounts and a page plan.",
  },
  {
    when: "Weeks 1–2",
    title: "Design",
    body: "Page designs for desktop and phone, for your approval.",
  },
  {
    when: "Weeks 2–4",
    title: "Build",
    body: "Development, content and integrations.",
  },
  {
    when: "Week 5",
    title: "Review",
    body: "A staging link, tested on real phones and browsers.",
  },
  {
    when: "Week 6",
    title: "Launch and care",
    body: "Go live, training, handover and ongoing support.",
  },
];

export const carePlans = [
  {
    name: "Care",
    body: "Hosting oversight, backups, security updates and uptime monitoring.",
  },
  {
    name: "Care Plus",
    body: "Everything in Care, plus monthly hours for changes and a 2-business-day response.",
  },
  {
    name: "Growth",
    body: "Everything in Care Plus, plus more hours for changes, a monthly performance and SEO report, and a quarterly strategy call.",
  },
];

export const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "It depends on what your business needs. After a free consultation, we send a written proposal with three options, each with a fixed price agreed before we start.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most business websites go live in about six weeks. Online stores and web apps take longer, and your proposal gives you an exact launch date backed by our guarantee.",
  },
  {
    question: "How do I pay?",
    answer:
      "A deposit books your start date and the balance is due before go-live. We accept bank transfer and mobile money, and international payments for clients abroad.",
  },
  {
    question: "Will I own my website?",
    answer:
      "Yes. Your domain, hosting accounts, code and content are in your name and belong to you once the project is paid.",
  },
  {
    question: "Can I update the site myself?",
    answer:
      "Yes. We set up an editor for your content and train your team at handover. Care plans cover anything you would rather we handle.",
  },
  {
    question: "Do you work with clients outside Ghana?",
    answer:
      "Yes. We work remotely with clients abroad, with agreed call times and progress updates every week.",
  },
];
