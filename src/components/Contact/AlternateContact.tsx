'use client';

import { Copy, Phone, Video } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTiktok, faFacebookMessenger, faDiscord, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { phoneNumber, instagram_username, discord_username } from "@/constants/assets";
import { toast } from "react-hot-toast";
import { PopupModal } from 'react-calendly';
import { useState } from 'react';
import { motion } from 'framer-motion';

const AlternateContact = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2349075575221', '_blank', 'noopener,noreferrer');
  }

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  }

  const handleTikTokClick = () => {
    window.open('https://www.tiktok.com/@lordcezar7', '_blank', 'noopener,noreferrer');
  }

  const handleMessengerClick = () => {
    window.open('https://m.me/yourfacebookusername', '_blank', 'noopener,noreferrer');
  }

  const handleDiscordClick = () => {
    window.open('https://discord.com/users/cassiuscezar', '_blank', 'noopener,noreferrer');
  }

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/cassiussamuel.cezar/', '_blank', 'noopener,noreferrer');
  }

  const handleGithubClick = () => {
    window.open('https://github.com/Cassius202', '_blank', 'noopener,noreferrer');
  }

  const handleCopy = (e: React.MouseEvent, type: string): void => {
    e.stopPropagation();
    
    switch (type) {
      case 'phone':
        navigator.clipboard.writeText(phoneNumber);
        toast.dismissAll();
        toast.success('Phone number copied to clipboard!');
        break;
      case 'instagram':
        navigator.clipboard.writeText(instagram_username);
        toast.dismissAll();
        toast.success('Instagram username copied!');
        break;
      case 'discord':
        navigator.clipboard.writeText(discord_username);
        toast.dismissAll();
        toast.success('Discord username copied!');
        break;
      default:
        break;
    }
  }

  return (
    <section className="px-7 sm:px-14 md:px-18 lg:px-30 xl:px-36 my-12">
      <motion.h2 
        className="title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
      >
        {"Can't explain it in an email?"}
      </motion.h2>
      
      <motion.p 
        className="title-string mx-auto"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.1 }}
      >
        I&apos;d love to hear about your project ideas and how we can work
        together. Feel free to reach me through any of these means:
      </motion.p>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* WhatsApp */}
        <motion.div 
          className="group block cursor-pointer" 
          onClick={handleWhatsAppClick}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
        >
          <span className="whitespace-nowrap text-sm text-green-600 dark:text-green-400 mb-1.5 px-2">
            WhatsApp
          </span>
          <div className="flex items-center h-12 px-2.5 border border-zinc-200 dark:border-zinc-700 rounded-lg group-hover:border-green-500 dark:group-hover:border-green-400 transition-colors">
            <motion.div 
              className="size-5 mr-3 ml-1 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-green-600 dark:text-green-400 text-lg" />
            </motion.div>
            <span className="text-sm">Chat with me on WhatsApp</span>
          </div>
        </motion.div>

        {/* Phone */}
        <motion.div 
          className='block cursor-pointer' 
          onClick={handlePhoneClick}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.1 }}
        >
          <span className="whitespace-nowrap text-sm text-blue-600 dark:text-blue-400 mb-1.5 px-2">
            Phone
          </span>
          <div className="flex items-center h-12 px-2.5 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            <motion.div 
              className="size-5 mr-3 ml-1"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Phone size={18} className="text-blue-600 dark:text-blue-400" />
            </motion.div>
            <span className="text-sm">Call me directly</span>
            <motion.div 
              className="low-contrast icon_hover ml-auto relative group cursor-pointer"
              onClick={(e) => handleCopy(e, 'phone')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Copy size={17} />
              <span className="tooltip">Copy Phone Number</span>
            </motion.div>
          </div>
        </motion.div>

        {/* TikTok */}
        <motion.div 
          className='group block cursor-pointer' 
          onClick={handleTikTokClick}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.2 }}
        >
          <span className="whitespace-nowrap text-sm text-pink-600 dark:text-pink-400 mb-1.5 px-2">
            TikTok
          </span>
          <div className="flex items-center h-12 px-2.5 border border-zinc-200 dark:border-zinc-700 rounded-lg group-hover:border-pink-500 dark:group-hover:border-pink-400 transition-colors">
            <motion.div 
              className="size-5 mr-3 ml-1 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FontAwesomeIcon icon={faTiktok} className="text-pink-600 dark:text-pink-400 text-lg" />
            </motion.div>
            <span className="text-sm">Message me on TikTok</span>
          </div>
        </motion.div>

        {/* Facebook Messenger */}
        <motion.div 
          className='group block cursor-pointer' 
          onClick={handleMessengerClick}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.3 }}
        >
          <span className="whitespace-nowrap text-sm text-blue-500 dark:text-blue-300 mb-1.5 px-2">
            Messenger
          </span>
          <div className="flex items-center h-12 px-2.5 border border-zinc-200 dark:border-zinc-700 rounded-lg group-hover:border-blue-500 dark:group-hover:border-blue-300 transition-colors">
            <motion.div 
              className="size-5 mr-3 ml-1 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FontAwesomeIcon icon={faFacebookMessenger} className="text-blue-500 dark:text-blue-300 text-lg" />
            </motion.div>
            <span className="text-sm">Message me on Messenger</span>
          </div>
        </motion.div>

        {/* Discord */}
        <motion.div 
          className='block cursor-pointer' 
          onClick={handleDiscordClick}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.4 }}
        >
          <span className="whitespace-nowrap text-sm text-purple-600 dark:text-purple-400 mb-1.5 px-2">
            Discord
          </span>
          <div className="flex items-center h-12 px-2.5 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:border-purple-500 dark:hover:border-purple-400 transition-colors">
            <motion.div 
              className="size-5 mr-3 ml-1 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FontAwesomeIcon icon={faDiscord} className="text-purple-600 dark:text-purple-400 text-lg" />
            </motion.div>
            <span className="text-sm">Join me on Discord</span>
            <motion.div 
              className="low-contrast icon_hover ml-auto relative group cursor-pointer"
              onClick={(e) => handleCopy(e, 'discord')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Copy size={17} />
              <span className="tooltip">Copy Discord Username</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Instagram */}
        <motion.div 
          className='block cursor-pointer' 
          onClick={handleInstagramClick}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.5 }}
        >
          <span className="whitespace-nowrap text-sm text-pink-500 dark:text-pink-300 mb-1.5 px-2">
            Instagram
          </span>
          <div className="flex items-center h-12 px-2.5 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:border-pink-500 dark:hover:border-pink-300 transition-colors">
            <motion.div 
              className="size-5 mr-3 ml-1 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FontAwesomeIcon icon={faInstagram} className="text-pink-500 dark:text-pink-300 text-lg" />
            </motion.div>
            <span className="text-sm">DM me on Instagram</span>
            <motion.div 
              className="low-contrast icon_hover ml-auto relative group cursor-pointer"
              onClick={(e) => handleCopy(e, 'instagram')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Copy size={17} />
              <span className="tooltip">Copy Instagram Username</span>
            </motion.div>
          </div>
        </motion.div>

        {/* GitHub */}
        <motion.div 
          className='hidden lg:block group cursor-pointer' 
          onClick={handleGithubClick}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.6 }}
        >
          <span className="whitespace-nowrap text-sm text-slate-700 dark:text-slate-300 mb-1.5 px-2">
            GitHub
          </span>
          <div className="flex items-center h-12 px-2.5 border border-zinc-200 dark:border-zinc-700 rounded-lg group-hover:border-slate-500 dark:group-hover:border-slate-400 transition-colors">
            <motion.div 
              className="size-5 mr-3 ml-1 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FontAwesomeIcon icon={faGithub} className="text-slate-700 dark:text-slate-300 text-lg" />
            </motion.div>
            <span className="text-sm">Check out my GitHub</span>
          </div>
        </motion.div>

        {/* Book a Video Call */}
        <motion.div 
          className='group block cursor-pointer sm:col-span-2'
          onClick={() => setIsCalendlyOpen(true)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.7 }}
        >
          <span className="whitespace-nowrap text-sm text-rose-600 dark:text-rose-400 mb-1.5 px-2">
            Video Call
          </span>
          <div className="flex items-center justify-center h-12 px-2.5 border border-zinc-200 dark:border-zinc-700 rounded-lg group-hover:border-rose-500 dark:group-hover:border-rose-400 transition-colors">
            <motion.div 
              className="size-5 mr-3 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Video size={18} className="text-rose-600 dark:text-rose-400" />
            </motion.div>
            <span className="text-sm font-medium">Book a Free Video Consultation</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Calendly Popup Modal */}
      <PopupModal
        url="https://calendly.com/cassiuscezar/30min"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.body}
      />
    </section>
  );
};

export default AlternateContact;