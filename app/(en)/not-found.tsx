export default function NotFound() {
  return (
    <main id="main" className="page-grid min-h-[100svh] flex flex-col items-start justify-center gap-6">
      <h1 className="type-display text-[32vw] md:text-[220px] text-ink">404</h1>
      <p className="type-label border-t border-ink pt-3 w-full max-w-[520px] text-ink-2">This page could not be found.</p>
      <a
        href="/en"
        className="button-primary px-6 py-3 min-h-[48px]"
      >
        Back to home
      </a>
    </main>
  );
}
