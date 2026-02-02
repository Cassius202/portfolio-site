"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

const BigQuestionMark = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full aspect-square" />;

  // resolvedTheme handles 'system' preference better than 'theme'
  const currentTheme = resolvedTheme || theme;

  return (
    <div className="max-lg:hidden h-full mt-20 w-full flex justify-center items-center p-8">
      <div className="relative w-full aspect-square max-w-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTheme}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            <Image
              src={
                currentTheme === "dark"
                  ? "/images/question_outline.svg"
                  : "/images/question_light.svg"
              }
              alt="Question Decoration"
              fill
              className={cn("object-contain rotate-[-30deg]", currentTheme === 'light' && 'opacity-70 scale-110')}
              priority
            />
            <Image
              src={
                currentTheme === "dark"
                  ? "/images/question_outline.svg"
                  : "/images/question_light.svg"
              }
              alt="Question Decoration"
              fill
              className={cn("object-contain blur-xl rotate-[-30deg]", currentTheme === 'light' && 'hidden')}
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BigQuestionMark;