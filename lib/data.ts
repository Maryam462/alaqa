export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "AI Solutions", href: "/service/ai-solutions" },
      { label: "Web Development", href: "/service/web-development" },
      { label: "Mobile App Development", href: "/service/mobile-app-development" },
      { label: "Blockchain Development", href: "/service/blockchain-development" },
      { label: "Game Development", href: "/service/game-development" },
      { label: "SEO", href: "/service/seo" },
      { label: "Graphic Designing", href: "/service/graphic-designing" },
      { label: "Digital Marketing", href: "/service/digital-marketing" },
      { label: "Content Writer", href: "/service/content-writing" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  {
    label: "Blog",
    href: "/blog",
    children: [
      { label: "Development", href: "/blog?category=Development" },
      { label: "Consulting", href: "/blog?category=Consulting" },
      { label: "Finance", href: "/blog?category=Finance" },
      { label: "Branding", href: "/blog?category=Branding" },
    ],
  },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const heroTaglines = [
  "Multipurpose Business Solution",
  "Include More Sales",
  "More Convenient Than Others",
] as const;

export const stats = [
  { label: "Satisfied Customers", value: 850, suffix: "+" },
  { label: "Professional Agents", value: 45, suffix: "+" },
  { label: "Hours Support", value: 24, suffix: "/7" },
  { label: "Projects Finished", value: 1200, suffix: "+" },
] as const;

// Prefer `@/lib/services` for full service page data.
export { services } from "@/lib/services";

export const portfolioFilters = [
  "All",
  "Development",
  "Consulting",
  "Finance",
  "Branding",
] as const;

// Prefer importing from `@/lib/portfolio` for full project data.
// Kept for backward compatibility with older imports.
export { portfolioItems } from "@/lib/portfolio";

export const processSteps = [
  {
    number: "01",
    title: "Analyze",
    description:
      "We start by understanding your goals, your customers, and what's already working (or not).",
    icon: "Search",
  },
  {
    number: "02",
    title: "Advise",
    description:
      "You get clear recommendations and a plan that fits your budget and timeline.",
    icon: "MessageSquare",
  },
  {
    number: "03",
    title: "Strategy",
    description:
      "We map out the architecture, design, and delivery plan before writing a line of code.",
    icon: "Map",
  },
  {
    number: "04",
    title: "Result",
    description:
      "We ship, then keep improving based on real data.",
    icon: "Trophy",
  },
] as const;

export const techCategories = {
  Backend: [
    "Node.js",
    "Python",
    "Laravel",
    "Django",
    ".NET",
    "Golang",
    "PHP",
    "Rails",
    "Rust",
  ],
  Frontend: [
    "React",
    "Vue",
    "Angular",
    "HTML5",
    "CSS",
    "Bootstrap",
    "jQuery",
  ],
  Mobile: [
    "Android",
    "iOS",
    "Flutter",
    "React Native",
    "Kotlin",
    "Swift",
    "Ionic",
  ],
  Database: [
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Oracle",
    "MS SQL",
  ],
  CMS: ["WordPress", "Drupal", "Shopify", "Strapi", "Contentful"],
  Cloud: ["AWS", "Azure", "GCP", "DigitalOcean", "Vercel", "Netlify"],
  "Testing Tools": ["Jest", "Cypress", "Selenium", "Playwright", "Mocha"],
  DevOps: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"],
  "Full Stack": ["MERN", "MEAN", "Next.js", "Nuxt", "Laravel + Vue"],
  Blockchain: [
    "Solidity",
    "Ethereum",
    "Solana",
    "Hardhat",
    "Truffle",
    "Binance",
    "Matic",
  ],
} as const;

export type TechCategory = keyof typeof techCategories;

export const teamMembers = [
  {
    name: "Waqas",
    role: "CEO",
    gender: "male",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "M. Awais Khan",
    role: "Backend Developer",
    gender: "male",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Fayyaz Ali",
    role: "Backend Developer",
    gender: "male",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Danish Shakeel",
    role: "Web Developer",
    gender: "male",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Hammad Bajwa",
    role: "Web Developer",
    gender: "male",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Ali Hassan",
    role: "Web Developer",
    gender: "male",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Faiqa Ishtiaq",
    role: "App Developer",
    gender: "female",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Khuzaima Shakeel",
    role: "Application Developer",
    gender: "male",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&q=80",
  },
] as const;

export const testimonials = [
  // TODO: Replace the attribution below with the client's verified name and title.
  {
    quote:
      "Alaqa delivered a polished product on time. Their communication and technical depth made the whole engagement smooth.",
    name: "Attribution pending",
    role: "Owner",
    business: "SaaS invoicing system",
    country: "UK",
  },
  // TODO: Replace the attribution below with the client's verified name and title.
  {
    quote:
      "Outstanding engineering culture. They turned complex requirements into a clean, scalable platform for our users.",
    name: "Attribution pending",
    role: "Project owner",
    business: "Flutter app / pickleball project",
    country: "USA",
  },
  // TODO: Replace the attribution below with the client's verified name and title.
  {
    quote:
      "From discovery to launch, the team was proactive, creative, and relentlessly focused on quality.",
    name: "Attribution pending",
    role: "Platform owner",
    business: "International jobs platform",
    country: "UK",
  },
  // TODO: Replace the attribution below with the client's verified name and title.
  {
    quote:
      "Reliable partners for digital growth. SEO and development worked hand-in-hand with measurable results.",
    name: "Attribution pending",
    role: "Operations lead",
    business: "ERP inventory system",
    country: "UK",
  },
] as const;

// Prefer `@/lib/blog` for full post data.
export { blogPosts } from "@/lib/blog";

export const contactInfo = {
  phones: ["+1 202 555 0147"],
  email: "hello@alaqa.example.com",
  hours: "Mon–Fri, 9:00 AM – 6:00 PM (PKT)",
  addresses: [
    {
      city: "Sample City",
      label: "Sample Office",
      detail:
        "123 Example Street, Suite 100, Sample City (example address)",
      mapQuery: "Sample City",
    },
    {
      city: "Example Town",
      label: "Example Office",
      detail:
        "456 Demo Avenue, Suite 200, Example Town (example address)",
      mapQuery: "Example Town",
    },
  ],
  social: {
    facebook: "https://example.com/alaqa/facebook",
    linkedin: "https://example.com/alaqa/linkedin",
  },
} as const;
