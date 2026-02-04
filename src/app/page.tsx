'use client'

import dynamic from 'next/dynamic';
import Hero from "@/components/hero/Hero";
import TechStack from '@/components/Contact/TechStack';
import Projects from '@/components/Projects/Projects';
import EnhancedGrid from '@/components/GridEffect';

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
    <div className="flex overflow-x-hidden isolate flex-col bg-zinc-50 font-sans dark:bg-zinc-950 min-h-screen w-screen ">
      <EnhancedGrid />
      <Hero />
      <TechStack />
      <Contact />
      <AlternateContact />
      <Projects />
      <Questions />
      <div className='mb-20 pointer-events-none select-none invisible'></div>
    </div>
  );
}