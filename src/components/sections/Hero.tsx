"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, MouseEvent } from "react";
import { Cloud, Box, Server, Brain } from "lucide-react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(34, 211, 238, 0.05),
      transparent 80%
    )
  `;

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Network node positions (percentages)
  const P = {
    internet: { x: 85, y: 25 },
    cloudflare: { x: 88, y: 45 },
    docker: { x: 80, y: 65 },
    services: { x: 65, y: 85 }, 
    ai: { x: 35, y: 85 },       
    
    // Abstract left side points
    l1: { x: 10, y: 25 },
    l2: { x: 18, y: 65 },
    l3: { x: 28, y: 55 },
    l4: { x: 35, y: 75 },
    l5: { x: 8, y: 85 },
  };

  const lines = [
    // Main infrastructure path
    { id: 1, start: P.internet, end: P.cloudflare, delay: 0 },
    { id: 2, start: P.cloudflare, end: P.docker, delay: 1 },
    { id: 3, start: P.docker, end: P.services, delay: 2 },
    { id: 4, start: P.docker, end: P.ai, delay: 2.5 },
    { id: 5, start: P.services, end: P.ai, delay: 3 },
    
    // Abstract lines
    { id: 6, start: P.l1, end: P.l3, delay: 0.5 },
    { id: 7, start: P.l3, end: P.l2, delay: 1.5 },
    { id: 8, start: P.l2, end: P.l5, delay: 2.5 },
    { id: 9, start: P.l3, end: P.l4, delay: 1 }, 
    { id: 10, start: P.l4, end: P.ai, delay: 2 }, 
  ];

  const mainNodes = [
    { id: 'internet', label: 'Internet', pos: P.internet, icon: Cloud },
    { id: 'cloudflare', label: 'Cloudflare', pos: P.cloudflare, icon: Cloud },
    { id: 'docker', label: 'Docker Host', pos: P.docker, icon: Box },
    { id: 'services', label: 'Services', pos: P.services, icon: Server },
    { id: 'ai', label: 'AI Systems', pos: P.ai, icon: Brain },
  ];

  const leftDots = [P.l1, P.l2, P.l3, P.l4, P.l5];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050814]"
      onMouseMove={handleMouseMove}
    >
      {/* LAYER 1: Animated Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute w-full h-[calc(100%+64px)] -top-16 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 100%)',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 100%)',
          }}
          animate={{
            y: [0, 64],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
        />
      </div>

      {/* LAYER 2: Blurred Gradient Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] mix-blend-screen"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute bottom-[5%] right-[5%] w-[35rem] h-[35rem] bg-cyan-500/10 rounded-full blur-[128px] mix-blend-screen"
        />
      </div>

      {/* LAYER 3: Mouse-follow Spotlight */}
      {mounted && (
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: spotlightBackground }}
        />
      )}

      {/* LAYER 4: Infrastructure Network (Lines & Packets) */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block" aria-hidden="true">
        <svg className="w-full h-full">
          {lines.map((line) => (
            <g key={line.id}>
              {/* Static faint line */}
              <line 
                x1={`${line.start.x}%`} y1={`${line.start.y}%`} 
                x2={`${line.end.x}%`} y2={`${line.end.y}%`} 
                stroke="rgba(255,255,255,0.05)" strokeWidth="1" 
              />
              {/* Animated Packet Glow */}
              <motion.circle
                cx={`${line.start.x}%`} cy={`${line.start.y}%`}
                r="6" fill="rgba(34,211,238,0.4)" filter="blur(4px)"
                animate={{
                  cx: [`${line.start.x}%`, `${line.end.x}%`],
                  cy: [`${line.start.y}%`, `${line.end.y}%`]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: line.delay, ease: "linear" }}
              />
              {/* Animated Packet Core */}
              <motion.circle
                cx={`${line.start.x}%`} cy={`${line.start.y}%`}
                r="2" fill="#22d3ee"
                animate={{
                  cx: [`${line.start.x}%`, `${line.end.x}%`],
                  cy: [`${line.start.y}%`, `${line.end.y}%`]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: line.delay, ease: "linear" }}
              />
            </g>
          ))}
          {/* Render small dots for the left side abstract nodes */}
          {leftDots.map((dot, i) => (
            <circle key={`dot-${i}`} cx={`${dot.x}%`} cy={`${dot.y}%`} r="3" fill="rgba(34,211,238,0.3)" />
          ))}
        </svg>
      </div>

      {/* LAYER 4: Infrastructure Network (Hexagon HTML Nodes) */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
        {mainNodes.map(node => (
          <div 
            key={node.id} 
            className="absolute flex flex-col items-center" 
            style={{ top: `${node.pos.y}%`, left: `${node.pos.x}%`, transform: 'translate(-50%, -50%)' }}
          >
            <div className="w-16 h-16 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-cyan-500/30 drop-shadow-[0_0_10px_rgba(34,211,238,0.2)]" stroke="currentColor" strokeWidth="2" fill="rgba(15, 23, 42, 0.8)">
                <polygon points="50,2 95,25 95,75 50,98 5,75 5,25" />
              </svg>
              <node.icon className="w-6 h-6 text-cyan-400 relative z-10" />
            </div>
            <span className="mt-3 text-xs font-medium text-slate-300 tracking-wider whitespace-nowrap">{node.label}</span>
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-30 container mx-auto px-6 pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-center"
        >
          {/* NAME */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Fendi Andriyanto
          </h1>
          
          {/* ROLES */}
          <p className="text-sm md:text-base text-slate-300 mb-6 flex flex-wrap justify-center items-center gap-2 md:gap-4 font-light">
            <span>Full Stack Developer</span>
            <span className="text-cyan-500 text-sm">•</span>
            <span>Infrastructure Builder</span>
            <span className="text-cyan-500 text-sm">•</span>
            <span>Computer Vision Enthusiast</span>
          </p>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-8" />

          {/* HEADLINE */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 text-center leading-tight">
            Engineering from <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-sm">
              Infrastructure to AI.
            </span>
          </h2>
          
          {/* DESCRIPTION */}
          <p className="text-base md:text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed text-center font-light">
            I build, secure, and scale products. Combining full-stack development with hands-on DevOps and AI-assisted workflows.
          </p>
          
          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 pointer-events-auto">
            <a 
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(34,211,238,0.4)]"
            >
              Explore Portfolio
            </a>
            <a 
              href="/RESUME_FENDI_ANDRIYANTO.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border border-cyan-500/50 bg-cyan-500/10 text-cyan-50 font-medium hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(34,211,238,0.1)]"
            >
              View Resume
            </a>
            <a 
              href="mailto:fendiandryto@gmail.com"
              className="px-8 py-3.5 rounded-full border border-slate-700 bg-transparent text-white font-medium hover:bg-white/5 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
