"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface FooterProps {
  className?: string;
  year?: number;
}

export default function Footer({ className, year = new Date().getFullYear() }: FooterProps) {
  const columns: { title: string; links: string[] }[] = [
    { title: "Featured", links: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"] },
    { title: "Shoes", links: ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"] },
    { title: "Clothing", links: ["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"] },
    { title: "Kids'", links: ["Infant & Toddler Shoes", "Kids' Shoes", "Kids' Jordan Shoes", "Kids' Basketball Shoes"] },
  ];

  const socials = [
    { src: "/x.svg", alt: "X", href: "#" },
    { src: "/facebook.svg", alt: "Facebook", href: "#" },
    { src: "/instagram.svg", alt: "Instagram", href: "#" },
  ];

  return (
    <footer
      aria-label="Footer"
      className={`mt-16 w-full bg-dark-900 text-light-100 ${className || ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-2">
            <Link href="#" aria-label="Home" className="inline-flex">
              <Image src="/logo.svg" alt="Nike" width={40} height={40} className="invert-0" />
            </Link>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h4 className="text-[length:var(--text-heading-3)] font-[var(--text-heading-3--font-weight)]">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <Link
                        href="#"
                        className="text-[var(--color-dark-500)] hover:text-[var(--color-light-100)] text-[length:var(--text-body)] leading-[var(--text-body--line-height)]"
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="md:col-span-2 flex md:justify-end">
            <div className="flex items-start gap-4">
              {socials.map((s) => (
                <Link
                  key={s.alt}
                  href={s.href}
                  aria-label={s.alt}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-light-100)] text-[var(--color-dark-900)] hover:opacity-90"
                >
                  <Image src={s.src} alt={s.alt} width={18} height={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 text-[var(--color-dark-500)] text-[length:var(--text-footnote)] leading-[var(--text-footnote--line-height)]">
          <p>&copy; {year} Nike. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
