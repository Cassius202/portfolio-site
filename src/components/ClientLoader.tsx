// components/ClientLoader.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

function ClientLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => {
      setTimeout(() => setLoading(false), 1000);
    };

    if (document.readyState === 'complete') {
      handleComplete();
    } else {
      window.addEventListener('load', handleComplete);
      
      // Fallback timeout
      const timeout = setTimeout(handleComplete, 3000);
      
      return () => {
        window.removeEventListener('load', handleComplete);
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-black"
        >
          <div className="text-center">
            {/* Spinner */}
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-zinc-800" />
              <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-blue-400 border-b-transparent border-l-transparent animate-spin" />
            </div>
            
            {/* Logo or Brand Name */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative w-20 h-20"
            >
              <Image alt="logo" src={"/logos/logo-dark.svg"} fill />
            </motion.h2>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ClientLoader;