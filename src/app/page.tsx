import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Changelog } from "@/components/sections/Changelog";
import { Projects } from "@/components/sections/Projects";
import { Infrastructure } from "@/components/sections/Infrastructure";
import { Toolkit } from "@/components/sections/Toolkit";
import { Contact } from "@/components/sections/Contact";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

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
