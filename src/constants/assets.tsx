import { Project, Questions, ReviewCard, TechItem } from "./interface";

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

// review images
import reviewImg1 from "../../public/reviewImages/review_img1.jpg";
import reviewImg2 from "../../public/reviewImages/review_img2.jpg";
import reviewImg4 from "../../public/reviewImages/review_img4.jpg";
import reviewImg5 from "../../public/reviewImages/review_img5.jpg";
import reviewImg6 from "../../public/reviewImages/review_img6.jpg";
import reviewImg8 from "../../public/reviewImages/review_img8.jpg";


/*review names: img8 Vikram Shah
img5 is an australian woman
img4 Erik Frel
*/

// Project images
import foodieImg from '../../public/images/projects/food-site_.png';
import financeDashboardImg from '../../public/images/projects/dashboardNext.png';
import estateImg from '../../public/images/projects/flash_estate.png';
import furnitureSiteImg from '../../public/images/projects/furniture-site_.png';
import agencyAIImg from '../../public/images/projects/agency-ai-img.png';

// Exports
export const navLinks: string[] = ['Home', 'Reviews', 'FAQ', 'Projects'];

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
  },
  {
    id: "5",
    name: "Agency AI site",
    url: "https://cassius202.github.io/Agency-AI/",
    stack: "React / Javascript",
    icons: [ReactLogo, JavaScript, TailwindCSS],
    image: agencyAIImg,
    description: "Creating meaningful connections and turning big ideas into interactive digital experiences"
  }
];

// Social media links
export const socialLinks = {
  instagram: `https://instagram.com/${instagram_username}`,
  discord: discord_username,
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

export const Reviews: ReviewCard[] = [
  { 
    name: "Akachi Prince",
    rating: 5,
    price: 700,
    currency: "USD",
    duration: '5 days',
    country: { name: "Ghana", code: "GH" }, 
    image: reviewImg1,
    text: `I had a great experience working with this seller on my full-stack website project. They understood my requirements clearly and delivered exactly what I was looking for.`,
    expanded: false,
    time: '1 month ago',
  },
  { 
    name: "Sarah Jenkins",
    rating: 4.5,
    price: 1350,
    currency: "USD",
    duration: '4 weeks',
    country: { name: "United States", code: "US" }, 
    image: reviewImg2,
    text: `Building a website for my new carpentry business felt like a massive project, but this four-section setup made it so straightforward.`,
    expanded: false,
    time: '1 week ago',
  },
  { 
    name: "Marcus Thorne",
    rating: 5,
    price: 1100,
    currency: "GBP",
    duration: '2 weeks',
    country: { name: "United Kingdom", code: "GB" }, 
    text: `Smooth and professional experience. The seller designed a clean “Book an Appointment” section that matches our website style perfectly.`,
    expanded: false,
    time: '3 weeks ago',
  },
  { 
    name: "Erik Frel",
    rating: 5,
    price: 800,
    currency: "USD",
    duration: '2 weeks',
    country: { name: "United States", code: "US" }, 
    image: reviewImg4,
    text: `Outstanding attention to detail. I needed a specific animation style for my portfolio and Cassius delivered exactly that using Framer Motion.`,
    expanded: false,
    time: '2 months ago',
  },
  { 
    name: "Chloe Sutherland",
    rating: 5,
    price: 2500,
    currency: "AUD",
    duration: '6 weeks',
    country: { name: "Australia", code: "AU" }, 
    image: reviewImg5,
    text: `The e-commerce solution provided was top-tier. Integrating Shopify with a custom Next.js frontend has significantly improved our conversion rates.`,
    expanded: false,
    time: '4 days ago',
  },
  { 
    name: "David Miller",
    rating: 4.5,
    price: 1500,
    currency: "USD",
    duration: '4 weeks',
    country: { name: "United States", code: "US" }, 
    image: reviewImg6,
    text: `Very satisfied with the SaaS dashboard. The data visualization tools are intuitive and the dark mode toggle was a great addition.`,
    expanded: false,
    time: '2 weeks ago',
  },
  { 
    name: "Liam O'Connor",
    rating: 5,
    price: 900,
    currency: "AUD",
    duration: '1 week',
    country: { name: "Australia", code: "AU" }, 
    text: `Quick turnaround and excellent quality. I needed a landing page for a flash sale and it was up and running in just a few days.`,
    expanded: false,
    time: '5 days ago',
  },
  { 
    name: "Vikram Shah",
    rating: 5,
    price: 3200,
    currency: "USD",
    duration: '8 weeks',
    country: { name: "India", code: "IN" }, 
    image: reviewImg8,
    text: `He managed a very complex database migration for our platform while redesigning the entire UI. The final product is robust and incredibly fast.`,
    expanded: false,
    time: '3 months ago',
  }
];