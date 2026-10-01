export interface NavLink {
  label: string;
  href: string;
}

export interface Course {
  id: string;
  title: string;
  author: string;
  authorHref: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  price: number;
  students: number;
  avatars: string[];
}

export interface Category {
  id: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface FooterLinkColumn {
  heading: string;
  links: NavLink[];
}
