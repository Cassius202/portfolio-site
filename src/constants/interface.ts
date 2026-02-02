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