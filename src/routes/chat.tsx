import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Send, Sparkles } from "lucide-react";
import { detectCategories, dibiasByCategory, categoryLabel, type Category } from "@/data/dibias";

export const Route = createFileRoute("/chat")({
  head: () => ({
    meta: [
      { title: "Chat with Chi — AskChi" },
      { name: "description", content: "Tell Chi what's on your mind. She'll guide you to the right Dibia." },
    ],
  }),
  component: ChatPage,
});

type Msg = {
  role: "user" | "chi";
  text: string;
  categories?: Category[];
  showRecommend?: boolean;
};

const FOLLOWUPS: Record<Category, string[]> = {
  "Dibia Akụ na Ụba": ["How long has this struggle with money or business been going on?", "Have you noticed sudden blockages where things used to flow?"],
  "Dibia Ịhụnanya": ["Is this about someone specific, or a longing in your heart?", "Have you had strange dreams about this person recently?"],
  "Dibia Mmụọ": ["When did things begin to shift? Was there a moment, a place, a person?", "Do you feel a heaviness that won't lift, even after rest?"],
  "Dibia Ifu Ụzọ": ["Do you feel watched, or that someone wishes you harm?", "Has anything strange happened around your home or family?"],
  "Dibia Ọmụgwọ": ["Have you been on this journey for some time?", "Would you like guidance with herbs, or with prayer and ritual?"],
  "Dibia Mgborogwu na Mkpa Akwụkwọ": ["Tell me a little more — where in the body, and for how long?", "Have you tried any remedies already?"],
  "Dibia Ọkpụkpụ": ["Where on the body — and how did it happen?", "How long ago did the injury occur?"],
  "Dibia Nrọ": ["Was the dream recent? Do you remember any colours or animals?", "Did it leave you feeling afraid, peaceful, or stirred?"],
  "Dibia Afa": ["What question would you most like the Afa to answer?", "Has this concern been with you for long?"],
  "Dibia Aja": ["Has someone advised you that an offering is needed?", "Is there a particular deity or ancestor you feel called to honour?"],
  "Dibia Mmiri": ["Do you feel drawn to water, or troubled by it in dreams?", "Has fortune in your home felt blocked of late?"],
  "Dibia Ọgwụ": ["What kind of protection or medicine do you feel you need?", "Has someone wished you harm recently?"],
};

const GREETING = "Ndeewo. I am Chi. 🌿 Sit, take a breath, and tell me what is troubling you. Speak as you would to a kind elder — I am listening.";

function ChiMessage({ msg }: { msg: Msg }) {
  const recs = msg.categories ? dibiasByCategory(msg.categories) : [];
  return (
    <div className="flex gap-3">
      <div className="h-9 w-9 rounded-full bg-gradient-warm flex items-center justify-center shrink-0 shadow-gold">
        <Sparkles className="h-4 w-4 text-charcoal" />
      </div>
      <div className="flex-1 max-w-[85%]">
        <div className="rounded-2xl rounded-tl-sm bg-card border border-border p-4 text-sm leading-relaxed whitespace-pre-line">
          {msg.text}
        </div>
        {msg.showRecommend && recs.length > 0 && (
          <div className="mt-3 space-y-2">
            <p className="text-xs text-muted-foreground">I see {recs.length} Dibia{recs.length > 1 ? "s" : ""} who can help:</p>
            <Link
              to="/dibias"
              search={{ category: msg.categories?.[0] }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-5 py-2.5 text-sm font-semibold text-charcoal shadow-gold hover:scale-105 transition"
            >
              View Recommended Dibias →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([{ role: "chi", text: GREETING }]);
  const [input, setInput] = useState("");
  const [turn, setTurn] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function send() {
    const text = input.trim();
    if (!text) return;
    const userMsg: Msg = { role: "user", text };
    setInput("");
    setMessages((m) => [...m, userMsg]);

    setTimeout(() => {
      const cats = detectCategories(text);
      let reply: Msg;
      if (turn === 0 && cats.length > 0) {
        const followups = FOLLOWUPS[cats[0]];
        const q = followups[Math.floor(Math.random() * followups.length)];
        reply = { role: "chi", text: `I hear you, my child. This sounds like a matter for **${categoryLabel(cats[0])}**.\n\n${q}` };
      } else if (cats.length > 0) {
        const labels = cats.map(categoryLabel).join(" and ");
        reply = {
          role: "chi",
          text: `Thank you for sharing. I have listened carefully.\n\nFor what you carry, I would guide you toward **${labels}**. They are wise, verified, and have helped many others like you.`,
          categories: cats,
          showRecommend: true,
        };
      } else if (turn === 0) {
        reply = { role: "chi", text: "Take your time. Tell me a little more — is it about money (akụ), love (ịhụnanya), your health, dreams (nrọ), or something else weighing on your spirit?" };
      } else {
        reply = {
          role: "chi",
          text: "Whatever the shape of your trouble, our Dibias are here. Browse them and one will speak to your heart.",
          categories: ["Dibia Afa"],
          showRecommend: true,
        };
      }
      setMessages((m) => [...m, reply]);
      setTurn((t) => t + 1);
    }, 700);
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <div className="flex-1 container mx-auto px-4 py-6 max-w-3xl flex flex-col">
        <div className="text-center mb-4">
          <h1 className="font-display text-3xl">Chat with <span className="text-gold">Chi</span></h1>
          <p className="text-xs text-muted-foreground">Your spiritual concierge</p>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-5 py-4 pr-1">
          {messages.map((m, i) =>
            m.role === "chi" ? (
              <ChiMessage key={i} msg={m} />
            ) : (
              <div key={i} className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-gradient-warm text-charcoal p-4 text-sm font-medium">{m.text}</div>
              </div>
            ),
          )}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); send(); }}
          className="sticky bottom-4 mt-4 flex gap-2 rounded-2xl border border-border bg-card p-2 shadow-warm"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Speak to Chi…"
            className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
          />
          <button type="submit" className="rounded-xl bg-gradient-warm px-4 py-2 text-charcoal shadow-gold hover:scale-105 transition">
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
      <SiteFooter />
    </div>
  );
}
