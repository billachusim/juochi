import { Link } from "@tanstack/react-router";
import { Star, MapPin, BadgeCheck } from "lucide-react";
import type { Dibia } from "@/data/dibias";
import { naira } from "@/data/dibias";

const initialsColors = [
  "from-[oklch(0.55_0.16_35)] to-[oklch(0.78_0.15_85)]",
  "from-[oklch(0.45_0.14_25)] to-[oklch(0.7_0.14_70)]",
  "from-[oklch(0.5_0.15_45)] to-[oklch(0.75_0.16_90)]",
  "from-[oklch(0.4_0.12_30)] to-[oklch(0.72_0.15_75)]",
];

export function DibiaCard({ dibia }: { dibia: Dibia }) {
  const initials = dibia.name.split(" ").map((p) => p[0]).join("").slice(0, 2);
  const grad = initialsColors[Math.abs(dibia.id.charCodeAt(0)) % initialsColors.length];

  return (
    <Link
      to="/dibias/$id"
      params={{ id: dibia.id }}
      className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-gold/60 hover:shadow-warm transition-all"
    >
      <div className={`h-40 bg-gradient-to-br ${grad} flex items-center justify-center relative`}>
        <span className="font-display text-5xl text-charcoal/80 font-bold">{initials}</span>
        {dibia.verified && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-charcoal/70 px-2 py-1 text-xs text-gold">
            <BadgeCheck className="h-3 w-3" /> Verified
          </span>
        )}
      </div>
      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-display text-lg font-semibold group-hover:text-gold transition-colors">{dibia.name}</h3>
          <p className="text-xs text-muted-foreground">{dibia.title}</p>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1"><Star className="h-3 w-3 fill-gold text-gold" />{dibia.rating} ({dibia.reviews})</span>
          <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{dibia.location}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {dibia.specializations.slice(0, 2).map((s) => (
            <span key={s} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
              {s}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-xs text-muted-foreground">From</span>
          <span className="font-display text-lg text-gold">{naira(dibia.price)}</span>
        </div>
      </div>
    </Link>
  );
}
