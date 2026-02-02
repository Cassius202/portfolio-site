import Header from "@/components/header/Header";
import SideBar from "@/components/side-bar/SideBar";
import Hero from "@/components/hero/Hero";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-zinc-50 font-sans dark:bg-zinc-950">
      <Header />
      <SideBar />
      <Hero />

      {/* contact  */}
      <Contact />
    </div>
  );
}
