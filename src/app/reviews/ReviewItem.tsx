'use client';

import { motion } from "motion/react";
import CountryFlag from "./CountryFlag";
import Image from "next/image";
import { ReviewCard } from "@/constants/interface";
import StarRender from "./StarRender";
import { useTheme } from "next-themes";

interface IndexProps {
  review: ReviewCard;
  index: number;
  toggleExpanded: (index:number) => void;
  expandedIndex: number | null;
}
const ReviewItem = ({ review, index, toggleExpanded, expandedIndex }: IndexProps) => {
  const {theme} = useTheme();

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
        delay: Math.min(index * 0.05, 0.3),
      }}
      className="bg-white z-50 relative transition-shadow dark:transition-colors dark:bg-slate-900 hover:border-amber-500 dark:hover:border-amber-300/50 rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700"
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
        <StarRender rating={review.rating} colored={theme === 'dark'} />
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
            {expandedIndex === index ? "See less" : "See more"}
          </button>
        )}
      </div>

      <div className="flex items-center gap-8 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Duration
          </div>
          <div className="font-semibold text-gray-900 dark:text-white">
            {review.duration}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewItem;
