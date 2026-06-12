"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Set scrolled state for background styling
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    
    // Hide navbar on scroll down, show on scroll up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "Changelog", href: "#changelog" },
    { name: "Projects", href: "#projects" },
    { name: "Infrastructure", href: "#infrastructure" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter text-foreground hover:text-accent-cyan transition-colors">
          FA.
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
          
          <button 
            onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-muted-foreground hover:bg-white/10 hover:text-foreground transition-all"
          >
            <span className="opacity-70">Search</span>
            <kbd className="font-sans font-medium px-1.5 py-0.5 rounded bg-background/50 border border-white/10">⌘K</kbd>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
