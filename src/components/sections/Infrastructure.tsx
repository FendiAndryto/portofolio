"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionBackground } from "@/components/shared/SectionBackground";

export function Infrastructure() {
  const [traffic, setTraffic] = useState(142);
  const [activeConnections, setActiveConnections] = useState(38);

  useEffect(() => {
    // Simulate live dashboard fluctuations
    const interval = setInterval(() => {
      setTraffic(prev => Math.max(100, prev + Math.floor(Math.random() * 15) - 5));
      setActiveConnections(prev => Math.max(20, prev + Math.floor(Math.random() * 5) - 2));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="infrastructure" className="py-24 bg-background relative border-t border-white/5 overflow-hidden">
      <SectionBackground />
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="text-sm font-medium text-green-500 tracking-wider uppercase">Systems Operational</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Infrastructure Dashboard</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Live deployment pipeline and reverse-proxy architecture running on self-hosted Docker containers.
            </p>
          </div>
          
          <div className="flex gap-6 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md">
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Req/min</div>
              <div className="text-xl font-mono text-accent-cyan transition-all duration-300">{traffic}</div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Connections</div>
              <div className="text-xl font-mono text-foreground transition-all duration-300">{activeConnections}</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:p-12 overflow-hidden shadow-2xl"
        >
          {/* Subtle background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:16px_16px]" aria-hidden="true" />
          
          {/* Animated Ambient Glows */}
          <motion.div
            animate={{ 
              y: ["0%", "20%", "0%"],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none"
            aria-hidden="true"
          />
          <motion.div
            animate={{ 
              x: ["0%", "20%", "0%"],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
            className="absolute bottom-[-20%] left-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Infrastructure Diagram */}
          <div className="relative flex flex-col items-center z-10 w-full max-w-3xl mx-auto">
            
            <Node label="Internet Traffic" type="external" />
            <AnimatedPath delay={0} />
            
            <Node label="Cloudflare Tunnel" subtext="Zero-Trust Edge" type="security" />
            <AnimatedPath delay={0.5} />
            
            <Node label="Nginx Proxy Manager" subtext="SSL & Routing" type="proxy" />
            <AnimatedPath delay={1} />
            
            <div className="w-full border border-white/10 bg-card/40 backdrop-blur-md rounded-xl p-6 mt-2 relative">
              <div className="absolute -top-3 left-6 bg-[#0A0A0A] px-3 py-1 border border-white/10 rounded text-xs font-semibold text-muted-foreground tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
                DOCKER HOST
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <InnerNode label="BEM Global Institut" domain="bem-global-institut.homever.my.id" />
                <InnerNode label="Grafana Dashboard" domain="grafana.homever.my.id" />
                <InnerNode label="Macha App" domain="macha.homever.my.id" />
                <InnerNode label="Nikahin SaaS" domain="nikahin.web.id" />
                <InnerNode label="Portofolio Fendi Andriyanto" domain="portofolio.homever.my.id" />
                <InnerNode label="Presensi Global" domain="presensi-global-institut.homever.my.id" />
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Node({ label, subtext, type }: { label: string; subtext?: string; type: string }) {
  const getColors = () => {
    switch (type) {
      case "external": return "bg-white/5 border-white/10";
      case "security": return "bg-orange-500/10 border-orange-500/20 text-orange-500";
      case "proxy": return "bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan";
      default: return "bg-white/5 border-white/10";
    }
  };

  return (
    <div className={`relative px-6 py-4 rounded-xl border flex flex-col items-center justify-center min-w-[240px] backdrop-blur-sm ${getColors()}`}>
      <span className="font-bold tracking-tight text-foreground">{label}</span>
      {subtext && <span className="text-xs font-medium opacity-80 mt-1">{subtext}</span>}
    </div>
  );
}

function InnerNode({ label, domain }: { label: string; domain: string }) {
  return (
    <div className="bg-white/5 border border-white/5 hover:border-white/10 transition-colors px-4 py-3 rounded-lg flex flex-col justify-center group overflow-hidden">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-2 h-2 rounded-full bg-green-500/80 flex-shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
        <span className="text-sm font-bold text-foreground truncate group-hover:text-accent-cyan transition-colors">{label}</span>
      </div>
      <span className="text-xs font-mono text-muted-foreground truncate pl-5 opacity-80">{domain}</span>
    </div>
  );
}

function AnimatedPath({ delay }: { delay: number }) {
  return (
    <div className="h-12 w-10 flex items-center justify-center py-1">
      <svg width="2" height="100%" className="overflow-visible">
        <line x1="1" y1="0" x2="1" y2="100%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="100%"
          stroke="#22d3ee"
          strokeWidth="2"
          initial={{ strokeDasharray: "0 100", strokeDashoffset: 0 }}
          animate={{ strokeDasharray: "100 100", strokeDashoffset: -100 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear", delay }}
        />
      </svg>
    </div>
  );
}
