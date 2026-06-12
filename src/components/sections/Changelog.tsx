"use client";

import { motion } from "framer-motion";
import { SectionBackground } from "@/components/shared/SectionBackground";

export function Changelog() {
  const releases = [
    {
      version: "v3.0",
      date: "2026",
      title: "The Infrastructure Era",
      description: "Shifted focus towards self-hosted infrastructure, DevOps, and reliable deployment systems.",
      features: [
        "Architected containerized home server environments with Docker.",
        "Implemented zero-trust security using Cloudflare Tunnels and Tailscale.",
        "Automated provisioning and configuration with Ansible.",
        "Set up active monitoring and alerting with Prometheus."
      ]
    },
    {
      version: "v2.0",
      date: "2025",
      title: "Full Stack Expansion & Computer Vision",
      description: "Expanded capabilities across the stack and ventured into AI integrations.",
      features: [
        "Understand Next.js and Laravel for building scalable web applications.",
        "Built Face Recognition Attendance systems using Python, OpenCV, and LBPH.",
        "Integrated AI-assisted workflows into the daily development cycle."
      ]
    },
    {
      version: "v1.0",
      date: "2024",
      title: "Mobile Foundation",
      description: "The beginning of the journey, focusing on mobile app development and cross-platform solutions.",
      features: [
        "Developed cross-platform mobile applications using Flutter.",
        "Utilized Firebase for real-time databases and authentication.",
        "Understand state management and mobile UI/UX principles."
      ]
    }
  ];

  return (
    <section id="changelog" className="py-24 bg-background relative border-t border-white/5 overflow-hidden">
      <SectionBackground />
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Changelog</h2>
          <p className="text-muted-foreground text-lg">The evolution of my engineering capabilities.</p>
        </motion.div>

        <div className="space-y-16">
          {releases.map((release, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8 md:gap-12"
            >
              <div className="md:text-right border-l-2 md:border-l-0 md:border-r-2 border-white/10 group-hover:border-white/30 transition-colors pl-6 md:pl-0 md:pr-8 py-1 relative">
                {/* Timeline connector dot */}
                <div className="absolute w-3 h-3 bg-accent-cyan rounded-full -left-[7px] md:left-auto md:-right-[7px] top-2 shadow-[0_0_10px_rgba(34,211,238,0.5)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] group-hover:scale-125 transition-all duration-300" aria-hidden="true" />

                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent-cyan transition-colors">{release.version}</h3>
                <span className="text-sm text-muted-foreground font-mono">{release.date}</span>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-foreground mb-3">{release.title}</h4>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {release.description}
                </p>
                <ul className="space-y-3">
                  {release.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-accent mt-0.5 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
