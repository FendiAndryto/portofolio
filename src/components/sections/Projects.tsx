"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionBackground } from "@/components/shared/SectionBackground";

export function Projects() {
  const projects = [
    {
      title: "Face Recognition Attendance",
      problem: "Traditional attendance systems are slow, easily spoofed, and require physical contact.",
      architecture: "Python-based core utilizing OpenCV for image processing, Haar Cascades for face detection, and LBPH for recognition, served via a Flask API.",
      impact: "Reduced attendance logging time by 90% while significantly increasing accuracy and eliminating proxy attendance.",
      tech: ["Python", "OpenCV", "LBPH", "Flask", "Haar Cascade"],
      image: "/projects/face_recognition.png"
    },
    {
      title: "Digital Invitation SaaS",
      problem: "Creating custom wedding invitations with unique domains and RSVP management is technically complex for non-developers.",
      architecture: "Next.js frontend with SSR for SEO, backed by PostgreSQL for multi-tenant data isolation and a custom routing layer for domain mapping.",
      impact: "Enabled users to launch personalized, high-performance invitation sites in minutes without writing code.",
      tech: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind"],
      image: "/projects/digital_invitation.png"
    },
    {
      title: "Self Hosted Home Server",
      problem: "Cloud infrastructure costs scale quickly for personal projects, and relying on third parties compromises data privacy.",
      architecture: "Repurposed hardware running a containerized Docker environment, orchestrated by Ansible, with Cloudflare Tunnels handling secure, zero-trust internet exposure.",
      impact: "Reduced cloud hosting costs to zero while maintaining enterprise-grade uptime, security, and deployment workflows.",
      tech: ["Docker", "Ansible", "Cloudflare", "Prometheus"],
      image: "/projects/server_infrastructure.png"
    },
    {
      title: "UMKM Dashboard",
      problem: "Small businesses struggle with tracking income and expenses across fragmented, non-digital systems.",
      architecture: "Cross-platform mobile application built with Flutter, syncing in real-time with a secure Supabase backend.",
      impact: "Streamlined financial reporting, providing actionable insights through interactive data visualization.",
      tech: ["Flutter", "Supabase", "Dart", "Charts"],
      image: "/projects/umkm_dashboard.png"
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background relative border-t border-white/5 overflow-hidden">
      <SectionBackground />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Detailed case studies of systems I've architected and built.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden shadow-subtle shadow-inset hover:border-white/10 transition-colors flex flex-col"
            >
              {/* Project Mockup */}
              <div className="h-64 bg-black/50 border-b border-white/5 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-1 relative z-20">
                <h3 className="text-2xl font-bold mb-6 text-foreground">{project.title}</h3>
                
                <div className="space-y-6 mb-8 flex-1">
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">The Problem</h4>
                    <p className="text-foreground/80 leading-relaxed text-sm">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Architecture</h4>
                    <p className="text-foreground/80 leading-relaxed text-sm">{project.architecture}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-accent-cyan uppercase tracking-wider mb-2">Impact</h4>
                    <p className="text-foreground/90 leading-relaxed font-medium text-sm">{project.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 rounded bg-white/5 border border-white/5 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
