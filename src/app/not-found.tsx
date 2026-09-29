import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center bg-white px-6 text-center">
      <p className="eyebrow text-ink-2">Error 404</p>
      <h1 className="display text-gradient-light mt-4 text-[64px] md:text-[96px]">Lost in the code.</h1>
      <p className="mx-auto mt-5 max-w-[460px] text-[19px] leading-[1.6] text-ink-2">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-1.5 rounded-full bg-ink px-7 py-3.5 text-[17px] font-medium text-white transition-colors hover:bg-black"
      >
        Back to home
        <ChevronRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </main>
  );
}
