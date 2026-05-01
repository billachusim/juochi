import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DibiaCard } from "@/components/DibiaCard";
import { DIBIAS, ALL_CATEGORIES, type Category } from "@/data/dibias";

type Search = { category?: Category };

export const Route = createFileRoute("/dibias/")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    category: typeof s.category === "string" ? (s.category as Category) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Browse Dibias — AskChi" },
      { name: "description", content: "Browse trusted Dibias by specialization, price and availability." },
    ],
  }),
  component: BrowsePage,
});

function BrowsePage() {
  const search = Route.useSearch();
  const [category, setCategory] = useState<Category | "all">(search.category ?? "all");
  const [maxPrice, setMaxPrice] = useState<number>(50000);
  const [freeOnly, setFreeOnly] = useState(false);

  const filtered = useMemo(() => {
    return DIBIAS.filter((d) => {
      if (category !== "all" && !d.specializations.includes(category)) return false;
      if (freeOnly && d.price !== 0) return false;
      if (!freeOnly && d.price > maxPrice) return false;
      return true;
    });
  }, [category, maxPrice, freeOnly]);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="container mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-2">Browse Dibias</h1>
          <p className="text-muted-foreground">Find a trusted voice for the path you walk.</p>
        </div>

        <div className="grid md:grid-cols-[260px_1fr] gap-8">
          <aside className="space-y-6 rounded-2xl bg-card border border-border p-5 h-fit md:sticky md:top-24">
            <div>
              <label className="text-xs uppercase tracking-wider text-gold mb-2 block">Specialization</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Category | "all")}
                className="w-full rounded-lg bg-input border border-border px-3 py-2 text-sm outline-none focus:border-gold"
              >
                <option value="all">All</option>
                {ALL_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-gold mb-2 block">
                Max price: ₦{maxPrice.toLocaleString()}
              </label>
              <input
                type="range" min={0} max={50000} step={1000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                disabled={freeOnly}
                className="w-full accent-gold"
              />
            </div>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={freeOnly}
                onChange={(e) => setFreeOnly(e.target.checked)}
                className="h-4 w-4 accent-gold"
              />
              Free consultations only
            </label>

            <button
              onClick={() => { setCategory("all"); setMaxPrice(50000); setFreeOnly(false); }}
              className="text-xs text-muted-foreground hover:text-gold underline"
            >
              Reset filters
            </button>
          </aside>

          <div>
            <p className="text-sm text-muted-foreground mb-4">{filtered.length} Dibia{filtered.length !== 1 ? "s" : ""} found</p>
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-border bg-card p-12 text-center text-muted-foreground">
                No Dibias match these filters. Try adjusting them.
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-5">
                {filtered.map((d) => <DibiaCard key={d.id} dibia={d} />)}
              </div>
            )}
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
