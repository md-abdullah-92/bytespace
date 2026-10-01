import {
  BusinessIcon,
  DesignIcon,
  DevelopmentIcon,
  ItSoftwareIcon,
  MarketingIcon,
  PhotographyIcon,
} from "@/components/ui/Icons";
import type { Category, Testimonial } from "@/types";

export const categories: Category[] = [
  { id: "design", label: "Design", icon: DesignIcon },
  { id: "development", label: "Development", icon: DevelopmentIcon },
  { id: "it-software", label: "IT & Software", icon: ItSoftwareIcon },
  { id: "business", label: "Business", icon: BusinessIcon },
  { id: "marketing", label: "Marketing", icon: MarketingIcon },
  { id: "photography", label: "Photography", icon: PhotographyIcon },
];

export const testimonials: Testimonial[] = [
  {
    id: "sarah-m",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    avatar: "/avatars/sarah.jpg",
  },
  {
    id: "james-l",
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    avatar: "/avatars/james.jpg",
  },
  {
    id: "alex-b",
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    avatar: "/avatars/alex.jpg",
  },
];

/** "Create & Manage Courses Easily" bullet list. */
export const creatorBenefits: string[] = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];
