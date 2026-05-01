import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getDibia, naira, categoryLabel, type Dibia, type Service } from "@/data/dibias";
import { Star, MapPin, BadgeCheck, Award, Clock } from "lucide-react";

export const Route = createFileRoute("/dibias/$id")({
  loader: ({ params }) => {
    const dibia = getDibia(params.id);
    if (!dibia) throw notFound();
    return { dibia };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.dibia.name} — AskChi` },
      { name: "description", content: loaderData?.dibia.bio ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-3xl mb-2">Dibia not found</h1>
        <Link to="/dibias" className="text-gold underline">Browse all Dibias</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center text-center">
      <p>{error.message}</p>
    </div>
  ),
  component: ProfilePage,
});

function ProfilePage() {
  const { dibia } = Route.useLoaderData() as { dibia: Dibia };
  const initials = dibia.name.split(" ").map((p: string) => p[0]).join("").slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <div className="relative h-56 md:h-72 bg-gradient-warm overflow-hidden">
        <div className="absolute inset-0 pattern-uli" />
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
          <div className="rounded-3xl bg-card border border-border p-6 shadow-warm text-center">
            <div className="h-40 w-40 mx-auto rounded-full bg-gradient-to-br from-terracotta to-gold flex items-center justify-center mb-4 shadow-gold">
              <span className="font-display text-6xl text-charcoal font-bold">{initials}</span>
            </div>
            <h1 className="font-display text-2xl">{dibia.name}</h1>
            <p className="text-sm text-muted-foreground italic">{dibia.title}</p>
            {dibia.verified && (
              <span className="inline-flex items-center gap-1 mt-3 rounded-full bg-gold/15 px-3 py-1 text-xs text-gold">
                <BadgeCheck className="h-3 w-3" /> Verified
              </span>
            )}
            <div className="mt-4 flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 fill-gold text-gold" />{dibia.rating}</span>
              <span>·</span>
              <span>{dibia.reviews} reviews</span>
            </div>
          </div>

          <div className="space-y-8 pt-6">
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{dibia.location}</span>
              <span className="inline-flex items-center gap-1"><Award className="h-4 w-4 text-gold" />{dibia.experience} years experience</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {dibia.specializations.map((s) => (
                <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border">
                  {categoryLabel(s)}
                </span>
              ))}
            </div>

            <div>
              <h2 className="font-display text-2xl mb-3">About</h2>
              <p className="text-muted-foreground leading-relaxed">{dibia.bio}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl mb-4">Services</h2>
              <div className="space-y-3">
                {dibia.services.map((s: Service) => (
                  <div key={s.name} className="rounded-xl border border-border bg-card p-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold">{s.name}</p>
                      <p className="text-xs text-muted-foreground inline-flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" />{s.duration}
                      </p>
                    </div>
                    <span className="font-display text-xl text-gold whitespace-nowrap">{naira(s.price)}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/book/$id"
              params={{ id: dibia.id }}
              className="inline-flex items-center justify-center w-full md:w-auto rounded-full bg-gradient-warm px-10 py-4 font-semibold text-charcoal shadow-warm hover:scale-[1.02] transition"
            >
              Book a Session
            </Link>

            <p className="text-xs text-muted-foreground italic border-t border-border pt-4">
              For cultural and spiritual guidance only. Not a substitute for medical or legal advice.
            </p>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
