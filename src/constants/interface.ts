import { StaticImageData } from "next/image";

export interface Questions {
  id: number;
  question: string;
  answer: string;
}

export interface Project {
  id: string;
  name: string;
  image: StaticImageData;
  description: string;
  url: string;
  stack: string;
  icons: StaticImageData[];
}

export interface TechItem {
  id: number;
  label: string;
  logo: StaticImageData; // In Next.js, imported SVGs are usually strings or objects
}

interface Country {
  code: string; //"USD"
  name: string;//America
}
export interface ReviewCard {
  name: string;
  currency: string;
  rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
  price?: number ; //in dollar equivalent
  duration: string;
  country: Country;
  image?: StaticImageData;
  text: string;
  expanded: boolean;
  time: string;
}