'use client';

import { formatCurrency } from "./formatCurrency";
import CountryFlag from "./CountryFlag";
import StarRender from "./StarRender";
import { Reviews, instagram_username, discord_username } from "@/constants/assets";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Video, MessageCircle, Instagram, Copy, ExternalLink, Hash } from "lucide-react";
import { PopupModal } from 'react-calendly';
import { toast } from "react-hot-toast";
import Image from "next/image";

const Review = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [randomizedReviews, setRandomizedReviews] = useState([...Reviews]);
  const [hasMounted, setHasMounted] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    setRandomizedReviews([...Reviews].sort(() => Math.random() - 0.5));
    setHasMounted(true);
  }, []);

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
    <section id='reviews' className='bg-slate-50 dark:bg-gray-950 min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8'>
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className='title'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          Reviews
        </motion.h1>
        
        <motion.p 
          className='title-string mb-12'
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          See what my past clients have to say
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-[62%_38%] gap-8">
          {/* Left side - Reviews */}
          <div className="flex flex-col gap-6">

{/* this is where the reviewCards are */}

            {randomizedReviews.map((review, index) => {
              const text = review.text || "";
              const isLongText = text.length > 200;

              return (
                <motion.div 
                  key={`${review.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: "easeOut",
                    delay: Math.min(index * 0.05, 0.3)
                  }}
                  className="bg-white transition-shadow dark:transition-colors dark:bg-slate-900 hover:border-amber-500 dark:hover:border-amber-300/50 rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start gap-4 mb-4">
                    {review.image ? (
                      <Image 
                        src={review.image} 
                        alt={review.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover shrink-0 border border-gray-200 dark:border-gray-700"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-red-700 to-red-900 flex items-center justify-center text-white font-semibold text-lg shrink-0">
                        {review.name.charAt(0).toUpperCase()}
                      </div>
                    )}

                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {review.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <CountryFlag flagCode={review.country.code} />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {review.country.name}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <StarRender rating={review.rating} />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {review.time}
                    </span>
                  </div>

                  <div className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    <p className="inline">
                      {expandedIndex === index || !isLongText
                        ? text
                        : `${text.slice(0, 200)}...`}
                    </p>
                    {isLongText && (
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="text-blue-600 dark:text-blue-400 hover:underline ml-1 font-medium inline-block"
                      >
                        {expandedIndex === index ? 'See less' : 'See more'}
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-8 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Price</div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {formatCurrency(review.price || 0, review.currency)}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Duration</div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {review.duration}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right side - Stats & Contact */}
          <div className="hidden lg:block space-y-6 sticky top-24 h-fit">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Client Satisfaction
              </h3>
              <div className="space-y-6">
                {[5, 4.5].map((star) => (
                  <div key={star}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{star} Stars</span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {randomizedReviews.filter(r => r.rating === star).length}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(randomizedReviews.filter(r => r.rating === star).length / randomizedReviews.length) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
                
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {(randomizedReviews.reduce((acc, r) => acc + r.rating, 0) / randomizedReviews.length).toFixed(1)}
                  </div>
                  <StarRender rating={randomizedReviews.reduce((acc, r) => acc + r.rating, 0) / randomizedReviews.length} />
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Based on {randomizedReviews.length} reviews
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Sidebar Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-blue-600 rounded-2xl p-6 shadow-lg text-white"
            >
              <h3 className="text-lg font-bold mb-2">Ready to start?</h3>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                I&apos;m currently available for new projects. Let&apos;s build something great.
              </p>
              
              <div className="space-y-3">
                <button 
                  onClick={() => handleContact('https://wa.me/2349161152071')}
                  className="group w-full flex items-center justify-between bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition-all border border-white/10"
                >
                  <div className="flex items-center gap-3 font-medium">
                    <MessageCircle size={18} /> WhatsApp
                  </div>
                  <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>

                <button 
                  onClick={() => handleContact('https://www.instagram.com/cassiussamuel.cezar/')}
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