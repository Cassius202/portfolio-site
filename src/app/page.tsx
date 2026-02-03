'use client'

import dynamic from 'next/dynamic';
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/Footer";
import TechStack from '@/components/Contact/TechStack';
import Projects from '@/components/Projects/Projects';

const SideBar = dynamic(() => import("@/components/side-bar/SideBar"), {
  ssr: false,
});

const Contact = dynamic(() => import("@/components/Contact/Contact"), {
  ssr: false,
});

const AlternateContact = dynamic(() => import("@/components/Contact/AlternateContact"), {
  ssr: false,
});

const Questions = dynamic(() => import("@/components/question/Questions"), {
  ssr: false,
});

export default function Home() {

  return (
    <div className="flex overflow-x-hidden flex-col min-h-screen w-screen bg-zinc-50 font-sans dark:bg-zinc-950">
      <Header />
      <SideBar />
      <Hero />

      <TechStack />

      <Contact />
      <AlternateContact />
      <Projects />
      <Questions />
      <Footer />
    </div>
  );
}