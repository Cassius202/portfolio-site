"use client";
import { questions } from "@/constants/assets";
import MarkdownText from "./MarkdownText";
import { cn } from "@/utils/cn";
import { useTheme } from "next-themes";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BigQuestionMark from "./BigQuestionMark";

const Questions = () => {
  const { theme } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  function handleQuestionExpand(index: number): void {
    setSelectedIndex(selectedIndex === index ? -1 : index);
  }

  return (
    <section id="faq" className="px-7 py-20 max-sm:pt-10 sm:px-14 md:px-18 lg:px-30 xl:px-36">

      {/* Grid Container: Holds both the Illustration and the FAQ list */}
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 items-start">
        
        {/* Left Column: Illustration (Hidden on small screens or centered) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center pt-15 items-center"
        >
          <BigQuestionMark />
        </motion.div>

        {/* Right Column: FAQ List */}
        <div className="flex flex-col gap-y-2.5">
          <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="title"
      >
        Frequently Asked Questions
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="title-string mb-8"
      >
        Here are some common questions I get asked about my services.
      </motion.p>
          {questions.map((question, index) => {
            const isOpen = index === selectedIndex;

            return (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1, // Staggered delay based on index
                  ease: "easeOut"
                }}
                className={cn(
                  "group rounded-lg overflow-hidden border transition-all duration-300 cursor-pointer",
                  theme === "dark"
                    ? "border-blue-400/15 hover:border-cyan-400/60 hover:bg-slate-100/5"
                    : "bg-slate-200 border-transparent",
                  isOpen && "border-blue-500 shadow-lg"
                )}
                onClick={() => handleQuestionExpand(index)}
              >
                <div
                  className={cn(
                    "dark:text-zinc-300 min-h-[3rem] flex items-center px-4 py-3 text-slate-700 relative font-medium text-lg transition-colors",
                    isOpen && "dark:text-green-200 text-blue-600"
                  )}
                >
                  <span className="pr-8">{question.question}</span>
                  <ChevronDown
                    size={20}
                    className={cn(
                      "transition-transform duration-300 absolute right-4 top-1/2 -translate-y-1/2",
                      isOpen && "rotate-180 text-blue-500"
                    )}
                  />
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-4 text-[0.95rem] border-t border-slate-400/10 pt-2">
                        <MarkdownText text={question.answer} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Questions;