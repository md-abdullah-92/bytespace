import type { FooterLinkColumn, NavLink } from "@/types";

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export const footerColumns: FooterLinkColumn[] = [
  {
    heading: "",
    links: [
      { label: "Featured Courses", href: "/courses/featured" },
      { label: "Featured Categories", href: "/categories/featured" },
      { label: "Business", href: "/categories/business" },
      { label: "IT", href: "/categories/it" },
      { label: "Design", href: "/categories/design" },
    ],
  },
  {
    heading: "",
    links: [
      { label: "Development", href: "/categories/development" },
      { label: "Marketing", href: "/categories/marketing" },
      { label: "Photography", href: "/categories/photography" },
      { label: "Finance", href: "/categories/finance" },
      { label: "Sport", href: "/categories/sport" },
    ],
  },
  {
    heading: "",
    links: [
      { label: "Become a Creator", href: "/creators/join" },
      { label: "Affiliate Program", href: "/affiliates" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];
