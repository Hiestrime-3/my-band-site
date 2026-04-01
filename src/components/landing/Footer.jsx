import React from "react";
import { Music, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Music className="w-5 h-5 text-primary" />
            <span className="font-heading text-lg font-semibold text-foreground">
              The Replacements
            </span>
          </div>

          <p className="font-body text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" /> for your celebrations
          </p>

          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} The Replacements. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
