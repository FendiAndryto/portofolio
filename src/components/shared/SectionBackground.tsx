"use client";

import { motion } from "framer-motion";

export function SectionBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Subtle grid base */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Slow moving blurred orb 1 */}
      <motion.div
        animate={{ 
          x: [0, 40, 0], 
          y: [0, 30, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[20%] w-[40rem] h-[40rem] bg-cyan-500/[0.03] rounded-full blur-[100px] mix-blend-screen"
      />
      
      {/* Slow moving blurred orb 2 */}
      <motion.div
        animate={{ 
          x: [0, -30, 0], 
          y: [0, -40, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[20%] w-[35rem] h-[35rem] bg-blue-600/[0.03] rounded-full blur-[100px] mix-blend-screen"
      />
    </div>
  );
}
