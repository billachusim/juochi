import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getDibia, naira, type Service, type Dibia } from "@/data/dibias";
import { Check, CalendarCheck, Loader2 } from "lucide-react";

export const Route = createFileRoute("/book/$id")({
  loader: ({ params }) => {
    const dibia = getDibia(params.id);
    if (!dibia) throw notFound();
    return { dibia };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `Book ${loaderData?.dibia.name} — AskChi` }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <Link to="/dibias" className="text-gold underline">Back to Dibias</Link>
    </div>
  ),
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  component: BookPage,
});

function BookPage() {
  const { dibia } = Route.useLoaderData();
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [service, setService] = useState<Service | null>(dibia.services[0] ?? null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [processing, setProcessing] = useState(false);

  const today = new Date().toISOString().split("T")[0];
  const times = ["09:00", "11:00", "13:00", "15:00", "17:00", "19:00"];

  function pay() {
    setProcessing(true);
    setTimeout(() => { setProcessing(false); setStep(5); }, 1600);
  }

  if (step === 5) {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <div className="flex-1 container mx-auto px-4 py-20 max-w-2xl text-center">
          <div className="mx-auto h-20 w-20 rounded-full bg-gradient-warm flex items-center justify-center shadow-warm mb-6">
            <Check className="h-10 w-10 text-charcoal" strokeWidth={3} />
          </div>
          <h1 className="font-display text-4xl mb-3">Your session is booked 🌿</h1>
          <p className="text-muted-foreground mb-8">
            {dibia.name} will see you on <span className="text-gold">{date}</span> at <span className="text-gold">{time}</span>.
            A confirmation has been sent to <span className="text-gold">{email}</span>.
          </p>
          <div className="rounded-2xl bg-card border border-border p-6 text-left space-y-2 mb-8">
            <Row label="Dibia" value={dibia.name} />
            <Row label="Service" value={service?.name ?? ""} />
            <Row label="When" value={`${date} · ${time}`} />
            <Row label="Amount paid" value={naira(service?.price ?? 0)} />
            <Row label="Reference" value={`ASK-${Math.random().toString(36).slice(2, 8).toUpperCase()}`} />
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/dibias" className="rounded-full border border-gold/50 text-gold px-6 py-3 hover:bg-gold/10">Browse more Dibias</Link>
            <Link to="/" className="rounded-full bg-gradient-warm text-charcoal px-6 py-3 font-semibold">Back home</Link>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="container mx-auto px-4 py-10 max-w-2xl">
        <Link to="/dibias/$id" params={{ id: dibia.id }} className="text-sm text-muted-foreground hover:text-gold">← Back to {dibia.name}</Link>
        <h1 className="font-display text-3xl md:text-4xl mt-2 mb-6">Book a session</h1>

        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className={`h-1.5 flex-1 rounded-full ${step >= n ? "bg-gold" : "bg-border"}`} />
          ))}
        </div>

        <div className="rounded-2xl bg-card border border-border p-6 md:p-8 space-y-6">
          {step === 1 && (
            <>
              <h2 className="font-display text-xl">Choose a service</h2>
              <div className="space-y-2">
                {dibia.services.map((s) => (
                  <button
                    key={s.name}
                    onClick={() => setService(s)}
                    className={`w-full text-left rounded-xl border p-4 transition ${service?.name === s.name ? "border-gold bg-gold/5" : "border-border hover:border-gold/50"}`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{s.name}</p>
                        <p className="text-xs text-muted-foreground">{s.duration}</p>
                      </div>
                      <span className="font-display text-lg text-gold">{naira(s.price)}</span>
                    </div>
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(2)} disabled={!service} className="w-full rounded-full bg-gradient-warm px-6 py-3 font-semibold text-charcoal disabled:opacity-50">Continue</button>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="font-display text-xl">Pick a date & time</h2>
              <div>
                <label className="text-xs uppercase tracking-wider text-gold block mb-2">Date</label>
                <input type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-lg bg-input border border-border px-3 py-2.5 outline-none focus:border-gold" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-gold block mb-2">Time</label>
                <div className="grid grid-cols-3 gap-2">
                  {times.map((t) => (
                    <button key={t} onClick={() => setTime(t)} className={`rounded-lg border py-2 text-sm transition ${time === t ? "border-gold bg-gold/10 text-gold" : "border-border hover:border-gold/50"}`}>{t}</button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(1)} className="flex-1 rounded-full border border-border py-3">Back</button>
                <button onClick={() => setStep(3)} disabled={!date || !time} className="flex-1 rounded-full bg-gradient-warm text-charcoal font-semibold py-3 disabled:opacity-50">Continue</button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="font-display text-xl">Your details</h2>
              <div>
                <label className="text-xs uppercase tracking-wider text-gold block mb-2">Full name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg bg-input border border-border px-3 py-2.5 outline-none focus:border-gold" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-gold block mb-2">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg bg-input border border-border px-3 py-2.5 outline-none focus:border-gold" />
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(2)} className="flex-1 rounded-full border border-border py-3">Back</button>
                <button onClick={() => setStep(4)} disabled={!name || !email} className="flex-1 rounded-full bg-gradient-warm text-charcoal font-semibold py-3 disabled:opacity-50">Continue</button>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <h2 className="font-display text-xl">Review & pay</h2>
              <div className="space-y-2 text-sm">
                <Row label="Dibia" value={dibia.name} />
                <Row label="Service" value={service?.name ?? ""} />
                <Row label="When" value={`${date} · ${time}`} />
                <Row label="Name" value={name} />
                <Row label="Email" value={email} />
              </div>
              <div className="border-t border-border pt-4 flex justify-between items-center">
                <span className="text-muted-foreground">Total</span>
                <span className="font-display text-2xl text-gold">{naira(service?.price ?? 0)}</span>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(3)} className="flex-1 rounded-full border border-border py-3">Back</button>
                <button onClick={pay} disabled={processing} className="flex-1 rounded-full bg-gradient-warm text-charcoal font-semibold py-3 inline-flex items-center justify-center gap-2 disabled:opacity-50">
                  {processing ? <><Loader2 className="h-4 w-4 animate-spin" /> Processing…</> : <><CalendarCheck className="h-4 w-4" /> Confirm payment</>}
                </button>
              </div>
              <p className="text-xs text-muted-foreground italic">Demo payment — no real charge will be made.</p>
            </>
          )}
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-right">{value}</span>
    </div>
  );
}
