"use client";

import { motion } from "framer-motion";

export default function InteractiveBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-gradient-to-br from-sky-200 via-blue-200 to-indigo-200">
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* Very soft cinematic gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
      
      {/* Subtle Static Orbs for depth */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-300/40 blur-[120px]"></div>
      <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] rounded-full bg-sky-300/40 blur-[120px]"></div>
      
      {/* Glass Overlay for texture */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[20px]"></div>
    </div>
  );
}
