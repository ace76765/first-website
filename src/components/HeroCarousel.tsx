"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/carousel_1.jpg",
  "/images/carousel_2.jpg",
  "/images/carousel_3.jpg",
  "/images/carousel_4.jpg",
  "/images/carousel_5.jpg",
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-blue-950">
      {/* Static placeholder for immediate SSR render and LCP optimization */}
      <Image
        src={images[0]}
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src={images[currentIndex]}
            alt="Hero Background"
            fill
            priority={currentIndex === 0}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Soft cinematic lighting without washing out the image */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-blue-900/20 pointer-events-none" />
      <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(255,255,255,0.2)] pointer-events-none" />
    </div>
  );
}
