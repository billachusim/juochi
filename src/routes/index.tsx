import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DibiaCard } from "@/components/DibiaCard";
import { DIBIAS, CATEGORY_INFO } from "@/data/dibias";
import { MessageCircle, Sparkles, UserCheck, CalendarCheck, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-shrine.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AskChi — Talk to Chi. Find the Right Dibia." },
      { name: "description", content: "AskChi connects Igbo seekers with trusted traditional Dibias. Chat with Chi, our spiritual concierge, then book a session." },
      { property: "og:title", content: "AskChi — Talk to Chi. Find the Right Dibia." },
      { property: "og:description", content: "Chat with Chi and meet trusted Dibias for cleansing, prosperity, love, healing and ancestral guidance." },
    ],
  }),
  component: Index,
});

// Categories now come from CATEGORY_INFO with authentic Igbo names + English

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-shrine" />
          <div className="absolute inset-0 pattern-uli" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-36 max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-charcoal/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold mb-6">
            <Sparkles className="h-3 w-3" /> Igbo Spiritual Concierge
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            Talk to Chi. <br />
            <span className="text-gold">Find the Right Dibia.</span>
          </h1>
          <p className="text-lg md:text-xl text-cream/90 mb-10 max-w-2xl mx-auto">
            Tell Chi what's on your mind. She'll listen with care and connect you to a trusted Dibia for cleansing, prosperity, love, healing or ancestral guidance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/chat" className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-semibold text-charcoal shadow-warm hover:scale-105 transition">
              <MessageCircle className="h-5 w-5" /> Chat with Chi
            </Link>
            <Link to="/dibias" className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-8 py-4 font-semibold text-gold hover:bg-gold/10 transition">
              Browse Dibias
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-3">Three steps to clarity</h2>
          <p className="text-muted-foreground">Simple. Respectful. Rooted in tradition.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: MessageCircle, title: "Talk to Chi", desc: "Share what troubles you. Chi listens without judgement." },
            { icon: UserCheck, title: "Meet your Dibia", desc: "Get matched with a verified Dibia who specialises in your need." },
            { icon: CalendarCheck, title: "Book a session", desc: "Pick a time, pay securely, and walk wisely with the elders." },
          ].map((s, i) => (
            <div key={s.title} className="rounded-2xl bg-card border border-border p-8 hover:border-gold/40 transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-warm flex items-center justify-center mb-5 shadow-gold">
                <s.icon className="h-6 w-6 text-charcoal" />
              </div>
              <div className="text-xs text-gold mb-1">Step {i + 1}</div>
              <h3 className="font-display text-2xl mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-3">Ụzọ ole ka ị na-achọ?</h2>
          <p className="text-muted-foreground">What do you seek? Twelve paths the Dibịas walk.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {CATEGORY_INFO.map((c) => (
            <Link
              key={c.id}
              to="/dibias"
              search={{ category: c.id }}
              className="group rounded-2xl bg-card border border-border p-6 text-center hover:border-gold hover:-translate-y-1 transition"
            >
              <div className="text-4xl mb-3">{c.icon}</div>
              <p className="font-display text-base text-gold leading-tight">{c.igbo}</p>
              <p className="text-xs text-muted-foreground mt-1">{c.english}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Dibias */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-2">Featured Dibias</h2>
            <p className="text-muted-foreground">Trusted voices from across Igboland.</p>
          </div>
          <Link to="/dibias" className="hidden md:inline text-gold hover:underline text-sm">View all →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {DIBIAS.slice(0, 3).map((d) => <DibiaCard key={d.id} dibia={d} />)}
        </div>
      </section>

      {/* Trust */}
      <section className="container mx-auto px-4 py-16">
        <div className="rounded-3xl bg-gradient-to-br from-card to-secondary border border-border p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 pattern-uli" />
          <div className="relative">
            <ShieldCheck className="h-12 w-12 text-gold mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Verified. Respected. Safe.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Every Dibia on AskChi is reviewed by our cultural board. Sessions are private. Payments are protected. Reviews are real.
            </p>
            <Link to="/chat" className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-semibold text-charcoal shadow-warm hover:scale-105 transition">
              <MessageCircle className="h-5 w-5" /> Chat with Chi
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
