'use client';
import { navLinks } from "@/constants/assets"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigation = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(link.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="hidden items-center lg:flex">
      <menu className="flex items-center gap-x-7 xl:gap-x-10">
        {navLinks.map((link) => {
          return (
            <li key={link} className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-all group relative">
              {link === 'Reviews' ? (
                <Link href="/reviews" className="font-medium transition-colors">
                  {link}
                </Link>
              ) : (
                <Link 
                  href={`/#${link.toLowerCase()}`}
                  onClick={(e) => handleSmoothScroll(e, link)}
                  className="font-medium transition-colors"
                >
                  {link}
                </Link>
              )}
              
              {/* The Hover Line */}
              <span className="absolute left-0 w-full h-0.5 bg-primary top-[105%] scale-0 transition-transform duration-300 ease-in-out origin-left group-hover:scale-100" />
            </li>
          )
        })}
      </menu>
    </nav>
  )
}

export default Navigation