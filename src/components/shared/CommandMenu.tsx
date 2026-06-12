"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/50 backdrop-blur-sm"
        >
          {/* Overlay to close when clicking outside */}
          <div className="absolute inset-0" onClick={() => setOpen(false)} />

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-card/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-subtle shadow-inset overflow-hidden"
          >
            <Command
              className="w-full flex flex-col"
              onKeyDown={(e) => {
                if (e.key === "Escape") setOpen(false);
              }}
            >
              <div className="flex items-center border-b border-white/5 px-4">
                <Command.Input 
                  placeholder="Type a command or search..." 
                  className="flex-1 h-14 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin">
                <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Navigation" className="text-xs font-medium text-muted-foreground px-2 py-1.5 [&_[cmdk-group-heading]]:mb-2">
                  <Command.Item 
                    onSelect={() => runCommand(() => router.push("#projects"))}
                    className="flex items-center px-2 py-2.5 text-sm text-foreground rounded-md cursor-pointer aria-selected:bg-white/10 transition-colors"
                  >
                    Navigate to Projects
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => router.push("#infrastructure"))}
                    className="flex items-center px-2 py-2.5 text-sm text-foreground rounded-md cursor-pointer aria-selected:bg-white/10 transition-colors"
                  >
                    Navigate to Infrastructure
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => router.push("#changelog"))}
                    className="flex items-center px-2 py-2.5 text-sm text-foreground rounded-md cursor-pointer aria-selected:bg-white/10 transition-colors"
                  >
                    Navigate to Changelog
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => router.push("#contact"))}
                    className="flex items-center px-2 py-2.5 text-sm text-foreground rounded-md cursor-pointer aria-selected:bg-white/10 transition-colors"
                  >
                    Navigate to Contact
                  </Command.Item>
                </Command.Group>

                <div className="h-px bg-white/5 my-1 mx-2" />

                <Command.Group heading="External" className="text-xs font-medium text-muted-foreground px-2 py-1.5 [&_[cmdk-group-heading]]:mb-2">
                  <Command.Item 
                    onSelect={() => runCommand(() => window.open("https://github.com/FendiAndryto", "_blank"))}
                    className="flex items-center px-2 py-2.5 text-sm text-foreground rounded-md cursor-pointer aria-selected:bg-white/10 transition-colors"
                  >
                    Open GitHub
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => window.open("https://linkedin.com/in/Fendi Andriyanto", "_blank"))}
                    className="flex items-center px-2 py-2.5 text-sm text-foreground rounded-md cursor-pointer aria-selected:bg-white/10 transition-colors"
                  >
                    Open LinkedIn
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => {
                      // Placeholder logic for resume download
                      alert("Downloading Resume...");
                    })}
                    className="flex items-center px-2 py-2.5 text-sm text-foreground rounded-md cursor-pointer aria-selected:bg-white/10 transition-colors"
                  >
                    Download Resume
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => runCommand(() => {
                      navigator.clipboard.writeText("fendiandryto");
                      alert("Email copied to clipboard!");
                    })}
                    className="flex items-center px-2 py-2.5 text-sm text-foreground rounded-md cursor-pointer aria-selected:bg-white/10 transition-colors"
                  >
                    Copy Email
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
