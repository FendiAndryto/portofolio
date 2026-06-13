"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-background relative border-t border-border overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build something great.</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
            Whether you need a full-stack application, an AI-powered system, or resilient self-hosted infrastructure, I can help you build it from the ground up.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <a 
              href="mailto:fendiandryto@gmail.com" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors shadow-lg shadow-foreground/10 flex justify-center"
            >
              Email Me
            </a>
            <a 
              href="/RESUME_FENDI_ANDRIYANTO.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-cyan-500/50 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 transition-colors font-medium flex justify-center shadow-[0_0_15px_rgba(34,211,238,0.1)]"
            >
              View Resume
            </a>
            <a 
              href="https://github.com/FendiAndryto" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-border bg-card hover:bg-muted transition-colors font-medium flex justify-center"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/Fendi Andriyanto" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-border bg-card hover:bg-muted transition-colors font-medium flex justify-center"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
