import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#0B0B0B] px-6 text-center text-[#F5F1E8]">
      <div>
        <p className="text-xs uppercase tracking-[0.42em] text-[#C6A972]">Hongfei Palm</p>
        <h1 className="mt-5 font-serif text-5xl font-semibold">Page not found</h1>
        <p className="mt-5 max-w-md text-sm leading-7 text-[#F5F1E8]/62">
          Return to the dining experience and continue planning the detour.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#F5F1E8] px-6 text-sm font-medium text-[#0B0B0B]"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
