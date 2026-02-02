import { navLinks } from "@/constants/assets"

const Navigation = () => {
  return (
    <nav className="hidden items-center lg:flex">
      <menu className="flex items-center gap-x-7 xl:gap-x-10">
        {navLinks.map((link) => {
          return (
            <li key={link} className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-all group relative">
              <a 
                href={`#${link.toLowerCase()}`} 
                className=" font-medium transition-colors"
              >
                {link}
              </a>
              
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