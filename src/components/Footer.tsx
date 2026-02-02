import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faDiscord, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const mediaLinks = [
    { icon: faGithub, url: "https://github.com/Cassius202" },
    { icon: faInstagram, url: "https://www.instagram.com/cassiussamuel.cezar/" },
    { icon: faDiscord, url: "https://discord.com/users/cassiuscezar" },
    { icon: faTiktok, url: "https://www.tiktok.com/@lordcezar7" },
    { icon: faYoutube, url: "https://www.youtube.com/@lordcezar4657?sub_confirmation=1" },
  ];
  return (
    <footer className="w-full min-h-35 bg-gray-200 dark:bg-zinc-900/80 mt-10 flex flex-col">
      <div className="logo flex items-center justify-center gap-4 mt-7">
        <div className="w-15 h-15 relative overflow-hidden">
          <Image src="/logos/logo-light.svg" alt="Logo" className="object-contain dark:hidden" fill />
          <Image src="/logos/logo-dark.svg" alt="Logo" className="object-contain invisible dark:visible" fill />
        </div>
        <h1 className="text-3xl font-bold text-center">CassiusDev</h1>
      </div>
      <div className="px-40 mt-5 opacity-10">
<hr />
      </div>
      <div className="socialMedia flex gap-2 items-center justify-center mt-4">
        {mediaLinks.map((icon, index) => {
          return <a key={index} href={icon.url} target="_blank" className="group select-none">
            <FontAwesomeIcon icon={icon.icon} className="group-hover:text-primary dark:group-hover:text-blue-400 group-hover:scale-110 transition-all"  />
          </a>
        } )}
      </div>
      <div className="container mx-auto py-4">
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} CassiusDev. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer