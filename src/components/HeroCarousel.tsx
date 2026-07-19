"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/first-website/images/carousel_1.jpg",
  "/first-website/images/carousel_2.jpg",
  "/first-website/images/carousel_3.jpg",
  "/first-website/images/carousel_4.jpg",
  "/first-website/images/carousel_5.jpg",
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
      {images.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 w-full h-full transition-opacity duration-[1500ms] ease-in-out ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ willChange: 'opacity' }}
        >
          <Image
            src={src}
            alt="Hero Background"
            fill
            priority={idx === 0}
            className="object-cover"
          />
        </div>
      ))}
      
      {/* Soft cinematic lighting without washing out the image */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-blue-900/20 pointer-events-none" />
      <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(255,255,255,0.2)] pointer-events-none" />
    </div>
  );
}
