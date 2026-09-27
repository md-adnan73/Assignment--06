import Link from "next/link";

export default function NotFoundView() {
  return (
    <div className="mx-auto max-w-md px-4 py-24 text-center">
      <p className="font-display text-7xl font-bold text-accent">404</p>
      <h1 className="mt-2 font-display text-2xl font-semibold uppercase tracking-wide">Page not found</h1>
      <p className="mt-3 text-muted">That page doesn't exist. Head back to the library and pick a lift.</p>
      <Link href="/" className="btn-primary mt-6">Go to workouts</Link>
    </div>
  );
}