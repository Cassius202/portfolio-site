'use client';

import { Reviews, instagram_username, discord_username } from "@/constants/assets";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Video, MessageCircle, Instagram, Copy, ExternalLink, Hash, ChevronDown } from "lucide-react";

import { tiktok_username } from "@/constants/assets";
import { PopupModal } from 'react-calendly';
import { toast } from "react-hot-toast";
import ReviewItem from "./ReviewItem";
import ParticlesComponent from "./Particles";
import EnhancedGrid from "@/components/GridEffect";

const Review = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [randomizedReviews, setRandomizedReviews] = useState([...Reviews]);
  const [hasMounted, setHasMounted] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  
  const reviewsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setRandomizedReviews([...Reviews].sort(() => Math.random() - 0.5));
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const reviewsContainer = reviewsContainerRef.current;
    
    if (!reviewsContainer) return;

    const handleScroll = () => {
      const hasScrolled = reviewsContainer.scrollTop > 10;
      setShowScrollHint(!hasScrolled);
    };

    reviewsContainer.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      reviewsContainer.removeEventListener('scroll', handleScroll);
    };
  }, [hasMounted]);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleContact = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.dismissAll();
    toast.success(`${label} copied!`);
  };

  if (!hasMounted) return null;

  return (
    <section id='reviews' className='isolate w-full overflow-x-hidden min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8'>
      <EnhancedGrid />
      <div className="relative z-30 max-w-6xl mx-auto flex flex-col items-center">
        <motion.h1 
          className='title self-center'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          Reviews
        </motion.h1>
        
        <motion.p 
          className='title-string text-center mb-15'
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          See what my clients have to say about my service
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-[60%_35%] gap-8 w-full">
          {/* Left side - Reviews - Scrollable */}
          <div 
            ref={reviewsContainerRef}
            className="flex flex-col gap-6 lg:h-[calc(100vh-15rem)] lg:overflow-y-auto pr-2 relative group"
          >
            {randomizedReviews.map((review, index) => {
              return (
               <ReviewItem key={index} review={review} index={index} toggleExpanded={toggleExpanded} expandedIndex={expandedIndex} />
              );
            })}
            
            {/* Scroll hint with fade transition */}
            <motion.div 
              initial={{ opacity: 1 }}
              animate={{ opacity: showScrollHint ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              viewport={{once:true}}
              className={`absolute bottom-0 z-20 w-full bg-linear-to-b from-transparent via-black/20 to-black/40 pb-1 rounded-t-lg h-20 flex flex-col justify-end pointer-events-none max-lg:hidden ${
                showScrollHint ? '' : 'opacity-0'
              }`}
            >
              <div className="text-slate-50 font-bold text-center mb-2">
                Scroll down to see more <ChevronDown className="inline animate-bounce" />
              </div>
            </motion.div>
          </div>

          {/* Right side - Stats & Contact - Fixed */}
          <div className="hidden sticky top-24 lg:block space-y-6 h-fit">
            {/* Contact Sidebar Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-blue-600 relative z-40 rounded-2xl p-6 shadow-lg text-white"
            >
              <h3 className="text-lg font-bold mb-2">Ready to start?</h3>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                I&apos;m currently available for new projects. Let&apos;s build something great.
              </p>
              
              <div className="space-y-3">
                <button 
                  onClick={() => handleContact(`https://www.instagram.com/${instagram_username}/`)}
                  className="group w-full flex items-center justify-between bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition-all border border-white/10"
                >
                  <div className="flex items-center gap-3 font-medium">
                    <Instagram size={18} /> Instagram
                  </div>
                  <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>

                <button 
                  onClick={() => copyToClipboard(discord_username, 'Discord Username')}
                  className="group w-full flex items-center justify-between bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition-all border border-white/10"
                >
                  <div className="flex items-center gap-3 font-medium">
                    <Hash size={18} /> Discord
                  </div>
                  <Copy size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>

                <button 
                  onClick={() => setIsCalendlyOpen(true)}
                  className="w-full flex items-center justify-center gap-3 bg-white text-blue-600 px-4 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-md mt-4"
                >
                  <Video size={18} /> Book a Call
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Contact Section - Only shows on small screens */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:hidden w-full max-w-full mt-10 px-4"
        >
          <div className="bg-linear-to-br from-blue-600 relative z-40 to-blue-700 rounded-2xl p-6 shadow-xl text-white border border-blue-500/20">
            <h3 className="text-xl font-bold mb-3 text-center">Ready to work together?</h3>
            <p className="text-blue-100 text-center text-sm mb-6 leading-relaxed">
              After seeing these reviews, let&apos;s connect and discuss your project!
            </p>
            
            <div className="space-y-4">
              <div className="text-center mb-2">
                <p className="text-blue-200 text-sm font-medium">Message me on:</p>
              </div>
              
              {/* Instagram Button */}
              <button 
                onClick={() => handleContact(`https://www.instagram.com/${instagram_username}/`)}
                className="group w-full flex items-center justify-between bg-white/10 hover:bg-white/20 px-5 py-4 rounded-xl transition-all border border-white/10 hover:border-white/30"
              >
                <div className="flex items-center gap-4 font-medium">
                  <div className="bg-linear-to-r from-pink-500 to-purple-500 p-2 rounded-lg">
                    <Instagram size={20} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Instagram</p>
                    <p className="text-blue-200 text-xs">Direct Message</p>
                  </div>
                </div>
                <ExternalLink size={16} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </button>

              {/* Discord Button */}
              <button 
                onClick={() => copyToClipboard(discord_username, 'Discord Username')}
                className="group w-full flex items-center justify-between bg-white/10 hover:bg-white/20 px-5 py-4 rounded-xl transition-all border border-white/10 hover:border-white/30"
              >
                <div className="flex items-center gap-4 font-medium">
                  <div className="bg-[#5865F2] p-2 rounded-lg">
                    <Hash size={20} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Discord</p>
                    <p className="text-blue-200 text-xs">Copy username</p>
                  </div>
                </div>
                <Copy size={16} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </button>

              {/* TikTok Button (if username exists) */}
              {tiktok_username && (
                <button 
                  onClick={() => handleContact(`https://www.tiktok.com/@${tiktok_username}`)}
                  className="group w-full flex items-center justify-between bg-white/10 hover:bg-white/20 px-5 py-4 rounded-xl transition-all border border-white/10 hover:border-white/30"
                >
                  <div className="flex items-center gap-4 font-medium">
                    <div className="bg-gray-900 p-2 rounded-lg">
                      <MessageCircle size={20} />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">TikTok</p>
                      <p className="text-blue-200 text-xs">Direct Message</p>
                    </div>
                  </div>
                  <ExternalLink size={16} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                </button>
              )}

              {/* Call to Action */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-blue-100 text-sm text-center mb-4">
                  Let&apos;s discuss your ideas!
                </p>
                <button 
                  onClick={() => setIsCalendlyOpen(true)}
                  className="w-full flex items-center justify-center gap-3 bg-white lg:hidden text-blue-600 px-5 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                >
                  <Video size={18} /> Book a Free Consultation
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <PopupModal
        url="https://calendly.com/cassiuscezar/30min"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={typeof document !== "undefined" ? document.body : null!}
      />
    </section>
  );
};

export default Review;