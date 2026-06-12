export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          © {new Date().getFullYear()} Fendi Andriyanto. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Source Code
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
