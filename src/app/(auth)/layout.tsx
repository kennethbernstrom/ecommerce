import Image from "next/image";
import { Jost } from "next/font/google";
import "../globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-black text-white flex flex-col relative min-w-0">
        {/* Logo */}
        <div className="absolute top-12 left-16">
          <div className="bg-orange rounded-xl flex items-center justify-center w-14 h-14">
            <img src="/logo.svg" alt="Nike Logo" className="w-8 h-8" />
          </div>
        </div>
        {/* Centered Headline and Description */}
        <div className="flex flex-1 flex-col justify-center items-start px-16">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Just Do It</h1>
          <p className="text-lg text-white/80 mb-0 max-w-sm leading-relaxed">
            Join millions of athletes and fitness enthusiasts who trust Nike for their performance needs.
          </p>
          <div className="flex space-x-2 mt-8">
            <span className="w-2 h-2 bg-white rounded-full inline-block" />
            <span className="w-2 h-2 bg-white/60 rounded-full inline-block" />
            <span className="w-2 h-2 bg-white/60 rounded-full inline-block" />
          </div>
        </div>
        {/* Footer */}
        <div className="absolute bottom-8 left-16 text-xs text-white/60">
          © 2024 Nike. All rights reserved.
        </div>
      </div>
      {/* Right Side */}
      <div className="w-1/2 flex items-center justify-center bg-white min-w-0">
        <div className="w-full max-w-md p-10">{children}</div>
      </div>
    </div>
  );
}
