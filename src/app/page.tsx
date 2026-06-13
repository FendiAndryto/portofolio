import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/shared/Navbar";
import dynamic from "next/dynamic";

const Philosophy = dynamic(() => import("@/components/sections/Philosophy").then(mod => mod.Philosophy));
const Changelog = dynamic(() => import("@/components/sections/Changelog").then(mod => mod.Changelog));
const Projects = dynamic(() => import("@/components/sections/Projects").then(mod => mod.Projects));
const Infrastructure = dynamic(() => import("@/components/sections/Infrastructure").then(mod => mod.Infrastructure));
const Toolkit = dynamic(() => import("@/components/sections/Toolkit").then(mod => mod.Toolkit));
const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => mod.Contact));
const Footer = dynamic(() => import("@/components/shared/Footer").then(mod => mod.Footer));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Philosophy />
      <Changelog />
      <Projects />
      <Infrastructure />
      <Toolkit />
      <Contact />
      <Footer />
    </main>
  );
}
