import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faDiscord, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const mediaLinks = [
    { icon: faGithub, url: "https://github.com/Cassius202", color: "hover:text-purple-400" },
    { icon: faInstagram, url: "https://www.instagram.com/cassiussamuel.cezar/", color: "hover:text-pink-500" },
    { icon: faDiscord, url: "https://discord.com/users/cassiuscezar", color: "hover:text-indigo-500" },
    { icon: faTiktok, url: "https://www.tiktok.com/@lordcezar7", color: "hover:text-cyan-400" },
    { icon: faYoutube, url: "https://www.youtube.com/@lordcezar4657?sub_confirmation=1", color: "hover:text-red-600" },
  ];

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-200/20 dark:bg-slate-950/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center">
        
        {/* Logo & Brand */}
        <div className="flex flex-col md:flex-row items-center gap-4 group">
          <div className="w-14 h-14 relative transition-transform duration-500 group-hover:rotate-12">
            <Image 
              src="/logos/logo-light.svg" 
              alt="Logo" 
              className="object-contain dark:hidden" 
              fill 
            />
            <Image 
              src="/logos/logo-dark.svg" 
              alt="Logo" 
              className="object-contain hidden dark:block" 
              fill 
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500">
            Cassius 
            <span className='text-primary'>Dev</span>
          </h1>
        </div>

        {/* Catchphrase or Tagline */}
        <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-sm font-medium tracking-wide uppercase">
          Building the digital future
        </p>

        {/* Divider */}
        <div className="w-full max-w-xs mt-8 h-px bg-linear-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />

        {/* Social Media Grid */}
        <div className="flex gap-8 items-center justify-center mt-8">
          {mediaLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`text-2xl text-zinc-400 transition-all duration-300 hover:-translate-y-1 ${social.color}`}
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} <span className="text-zinc-900 dark:text-zinc-200">CassiusDev</span>. 
          </p>
          
          <div className="flex gap-6 text-xs font-semibold text-zinc-400 uppercase tracking-widest">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;