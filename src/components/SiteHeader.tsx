import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-4 h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-full bg-gradient-warm flex items-center justify-center shadow-gold">
            <Sparkles className="h-5 w-5 text-charcoal" strokeWidth={2.5} />
          </div>
          <span className="font-display text-xl font-bold tracking-wide">
            Ask<span className="text-gold">Chi</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/chat" className="hover:text-gold transition-colors" activeProps={{ className: "text-gold" }}>
            Chat with Chi
          </Link>
          <Link to="/dibias" className="hover:text-gold transition-colors" activeProps={{ className: "text-gold" }}>
            Browse Dibias
          </Link>
        </nav>
        <Link
          to="/chat"
          className="rounded-full bg-gradient-warm px-5 py-2 text-sm font-semibold text-charcoal hover:opacity-90 transition shadow-gold"
        >
          Talk to Chi
        </Link>
      </div>
    </header>
  );
}
