export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24 py-10 text-sm text-muted-foreground">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} AskChi · Walk wisely with the elders.</p>
        <p className="text-xs italic">For cultural guidance only. Not a substitute for medical or legal advice.</p>
      </div>
    </footer>
  );
}
