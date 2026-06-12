"use client";

import { motion } from "framer-motion";
import { SectionBackground } from "@/components/shared/SectionBackground";

export function Toolkit() {
  const categories = [
    { name: "Frontend", tools: "Flutter, Next.js, Tailwind, TS" },
    { name: "Backend", tools: "Laravel, Node.js, Postgres, Supabase" },
    { name: "Infrastructure", tools: "Docker, Ansible, Cloudflare, Linux" },
    { name: "AI & Vision", tools: "OpenCV, Python, Cursor, Claude" },
  ];

  return (
    <section id="toolkit" className="py-24 bg-background relative border-t border-white/5 overflow-hidden">
      <SectionBackground />
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Current Toolkit</h2>
          <p className="text-muted-foreground text-lg">My go-to technologies for building modern products.</p>
        </motion.div>

        <div className="flex flex-col gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden shadow-subtle">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card/60 backdrop-blur-md p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <h3 className="text-lg font-semibold text-foreground min-w-[200px]">{category.name}</h3>
              <p className="text-muted-foreground md:text-right flex-1">{category.tools}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
