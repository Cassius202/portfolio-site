import { Project, Questions, TechItem } from "./interface";

// 1. Import all SVG assets
import AdobeIllustrator from "../../public/icons/Adobe Illustrator.svg";
import Express from "../../public/icons/Express.svg";
import MongoDB from "../../public/icons/MongoDB.svg";
import NodeJs from "../../public/icons/Node.js (1).svg";
import ReactLogo from "../../public/icons/React.svg";
import Shopify from "../../public/icons/shopify-seeklogo.svg";
import TailwindCSS from "../../public/icons/Tailwind CSS.svg";
import TypeScript from "../../public/icons/TypeScript.svg";
import FastAPI from "../../public/icons/FastAPI.svg";
import JavaScript from "../../public/icons/JavaScript.svg";
import PostGres from "../../public/icons/PostgresSQL.svg";

// Project images
import foodieImg from '../../public/images/projects/food-site_.png';
import financeDashboardImg from '../../public/images/projects/dashboardNext.png';
import estateImg from '../../public/images/projects/flash_estate.png';
import furnitureSiteImg from '../../public/images/projects/furniture-site_.png';

// Exports
export const navLinks: string[] = ['Home', 'Packages', 'FAQ', 'Reviews'];

export const phoneNumber = '+234 907 557 5221';

export const instagram_username: string = 'cassiussamuel.cezar';

export const discord_username: string = 'cassiuscezar';

export const questions: Questions[] = [
  {
    id: 1,
    question: "How much will the website cost?",
    answer: "Costs depend on the project type, ranging from high-performance landing pages to complex SaaS platforms. I specialize in Next.js because it boosts speed and SEO visibility by 115% compared to standard builders. While this premium technology costs more than a simple WordPress site, the investment ensures superior quality and growth potential."
  },
  {
    id: 2,
    question: "What is the typical timeline for building a website?",
    answer: "Landing pages take about a week, while standard business sites take 4 to 7 weeks. Simple e-commerce sites take about 3 weeks+."
  },
  {
    id: 3,
    question: "Can my website be built faster than these timelines?",
    answer: "Yes. We can negotiate express delivery by prioritizing your project, using established components, or launching a core version first and adding features later."
  },
  {
    id: 4,
    question: "What factors influence the cost of a website?",
    answer: "The main drivers are technical complexity, custom design requirements, the number of features like user accounts, the chosen technology stack, and content creation needs."
  },
  {
    id: 5,
    question: "How do you handle reviews and client feedback?",
    answer: "I use a live staging environment where you can test the site. We track feedback through regular check-ins and organized lists to ensure all requested changes are implemented efficiently."
  },
  {
    id: 6,
    question: "What tools do you use for project management and communication?",
    answer: "I use Trello or Asana for task tracking, Slack and Zoom for daily communication, and Google Drive for sharing project assets and documentation."
  },
  {
    id: 7,
    question: "What happens after the website launches?",
    answer: "You receive a full handover with training and documentation. I include a 30-day bug-fix period and offer long-term maintenance plans to keep your site updated and secure."
  },
  {
    id: 8,
    question: "What about hosting costs and domain names?",
    answer: "These are external costs paid to providers. Domains usually cost around $10 annually, while hosting ranges from $5 to $50 monthly. You retain full ownership, and I assist with the technical setup for free. \n For solo business websites, you can get hosting for as cheap as 1.9$ a month (for long term subscription). I'll explain in detail when you contact me directly"
  }
];

// Tech Stack Data
export const techStack: TechItem[] = [
  { id: 1, label: "Adobe Illustrator", logo: AdobeIllustrator },
  { id: 2, label: "Express", logo: Express },
  { id: 3, label: "MongoDB", logo: MongoDB },
  { id: 4, label: "Node.js", logo: NodeJs },
  { id: 5, label: "React", logo: ReactLogo },
  { id: 6, label: "Shopify", logo: Shopify },
  { id: 7, label: "Tailwind CSS", logo: TailwindCSS },
  { id: 8, label: "TypeScript", logo: TypeScript },
  { id: 9, label: "JavaScript", logo: JavaScript },
  { id: 10, label: "FastAPI", logo: FastAPI },
  { id: 11, label: "PostgreSQL", logo: PostGres },
];

// Projects Data
export const projects: Project[] = [
  {
    id: "1",
    name: "Foodie.co",
    url: "https://cassius202.github.io/food-site/", // Update this to actual Foodie URL
    stack: "React / Vite",
    icons: [ReactLogo, TypeScript, TailwindCSS],
    image: foodieImg,
    description: "A fully responsive landing page for the company Foodie.co featuring modern UI design and smooth animations"
  },
  {
    id: "2",
    name: "Flash Real Estate",
    url: "https://cassius202.github.io/flash-real-estate/",
    stack: "React / Vite",
    icons: [ReactLogo, TypeScript, TailwindCSS],
    image: estateImg,
    description: "A modern luxury real estate website featuring elegant property listings and immersive user experience"
  },
  {
    id: "3",
    name: "Minimalist Finance Dashboard",
    url: "https://finance-dashboard-9f1n-oihuctbxo-cassius202s-projects.vercel.app",
    stack: "Next.js",
    icons: [ReactLogo, TypeScript, TailwindCSS],
    image: financeDashboardImg,
    description: "A sleek financial dashboard with real-time analytics and intuitive data visualization for tracking finances"
  },
  {
    id: "4",
    name: "Rose Home Furniture Site",
    url: "https://cassius202.github.io/furniture-site/",
    stack: "React / TypeScript",
    icons: [ReactLogo, TypeScript, TailwindCSS],
    image: furnitureSiteImg,
    description: "An elegant e-commerce platform for modern furniture, featuring seamless browsing and a sophisticated shopping experience"
  }
];

// Social media links
export const socialLinks = {
  instagram: `https://instagram.com/${instagram_username}`,
  discord: discord_username,
  phone: phoneNumber,
};

// Service packages (example structure)
export const packages = [
  {
    id: 1,
    name: "Landing Page",
    price: "Starting at $500",
    duration: "1 week",
    features: [
      "Responsive design",
      "SEO optimization",
      "Contact form integration",
      "Performance optimization",
      "30-day support"
    ]
  },
  {
    id: 2,
    name: "Business Website",
    price: "Starting at $1,500",
    duration: "4-7 weeks",
    features: [
      "Multi-page design",
      "CMS integration",
      "Advanced SEO",
      "Analytics setup",
      "60-day support",
      "Training included"
    ]
  },
  {
    id: 3,
    name: "E-commerce Site",
    price: "Starting at $2,500",
    duration: "3+ weeks",
    features: [
      "Product catalog",
      "Shopping cart",
      "Payment integration",
      "Inventory management",
      "Customer accounts",
      "90-day support"
    ]
  }
];