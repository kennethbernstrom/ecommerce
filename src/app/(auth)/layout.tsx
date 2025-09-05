import Image from "next/image";
import { Jost } from "next/font/google";
import "../globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${jost.className} min-h-dvh grid grid-cols-1 md:grid-cols-2`}>
      <aside className="hidden md:flex flex-col justify-between bg-dark-900 text-light-100 p-8 lg:p-12 rounded-r-[24px]">
        <div className="flex items-center">
          <div className="rounded-xl bg-light-100 p-2">
            <Image src="/logo.svg" alt="" width={28} height={28} />
          </div>
        </div>
        <div className="max-w-md">
          <h2 className="text-[--text-heading-3] leading-[--text-heading-3--line-height] font-semibold">Just Do It</h2>
          <p className="mt-3 text-[--text-body] leading-[--text-body--line-height] text-dark-500">
            Join millions of athletes and fitness enthusiasts who trust Nike for their performance needs.
          </p>
          <div className="mt-6 flex gap-2">
            <span className="h-2 w-2 rounded-full bg-light-300" />
            <span className="h-2 w-2 rounded-full bg-light-300/60" />
            <span className="h-2 w-2 rounded-full bg-light-300/40" />
          </div>
        </div>
        <p className="text-[--text-footnote] text-dark-700">&copy; {new Date().getFullYear()} Nike. All rights reserved.</p>
      </aside>
      <main className="flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md">{children}</div>
      </main>
    </div>
  );
}
