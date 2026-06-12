"use client";

import { motion } from "framer-motion";
import { SectionBackground } from "@/components/shared/SectionBackground";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-background relative border-t border-white/5 overflow-hidden">
      <SectionBackground />
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Engineering Philosophy</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            How I approach building products, from the first line of code to the production infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bento Box 1: AI Workflow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 bg-card/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 shadow-subtle shadow-inset group relative overflow-hidden"
          >
            {/* Subtle highlight gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3 text-foreground">AI-Assisted Product Development</h3>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                Leveraging modern AI tooling to accelerate the software lifecycle without sacrificing architectural integrity or code quality.
              </p>
              
              <div className="flex flex-row items-center gap-2 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide w-full mask-edges">
                <WorkflowStep label="Idea" active />
                <WorkflowArrow />
                <WorkflowStep label="PRD" active />
                <WorkflowArrow />
                <WorkflowStep label="Architecture" active />
                <WorkflowArrow />
                <WorkflowStep label="AI-Assisted Dev" highlight />
                <WorkflowArrow />
                <WorkflowStep label="Code Review" />
                <WorkflowArrow />
                <WorkflowStep label="Deployment" />
                <WorkflowArrow />
                <WorkflowStep label="Monitoring" />
              </div>
            </div>
          </motion.div>

          {/* Bento Box 2: Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 shadow-subtle shadow-inset group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent-cyan" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Build Secure</h3>
              <p className="text-muted-foreground">
                Self-hosted, containerized infrastructure utilizing zero-trust tunnels and active monitoring.
              </p>
              <div className="mt-6 pt-6 border-t border-white/5 flex gap-4">
                <div>
                  <div className="text-2xl font-bold text-foreground">99.9%</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium mt-1">Uptime</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Box 3: Speed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 shadow-subtle shadow-inset group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Ship Fast</h3>
              <p className="text-muted-foreground">
                Rapid iteration cycles powered by Next.js, modern tooling, and automated CI/CD pipelines.
              </p>
              <div className="mt-6 pt-6 border-t border-white/5 flex gap-4">
                <div>
                  <div className="text-2xl font-bold text-foreground">&lt; 2m</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium mt-1">Deploy Time</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function WorkflowStep({ label, active, highlight }: { label: string, active?: boolean, highlight?: boolean }) {
  return (
    <div className={`snap-center shrink-0 px-4 py-2.5 rounded-lg text-sm font-medium text-center whitespace-nowrap transition-colors ${
      highlight 
        ? "bg-accent/20 text-accent-cyan border border-accent/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]" 
        : active 
          ? "bg-white/10 text-foreground border border-white/10" 
          : "bg-white/5 text-muted-foreground border border-transparent"
    }`}>
      {label}
    </div>
  );
}

function WorkflowArrow() {
  return (
    <div className="text-white/20 shrink-0">
      <svg className="w-4 h-4" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}
