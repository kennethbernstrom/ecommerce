"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface NavbarProps {
  cartCount?: number;
  className?: string;
}

export default function Navbar({ cartCount = 0, className }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Men", href: "#" },
    { label: "Women", href: "#" },
    { label: "Kids", href: "#" },
    { label: "Collections", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Primary"
      className={`sticky top-0 z-40 w-full bg-[--color-dark-900] ${className || ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="#" aria-label="Home" className="flex items-center">
              <Image src="/logo.svg" alt="Nike" width={32} height={32} priority className="brightness-0" />
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-[--color-light-100] hover:bg-[--color-dark-800] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-light-100] md:hidden"
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                {open ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-[--color-light-100] text-[length:var(--text-body)] leading-[var(--text-body--line-height)] font-[var(--text-body-medium--font-weight)] hover:text-[--color-light-300] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-light-100] rounded"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-6">
            <button
              className="text-[--color-light-100] hover:text-[--color-light-300] text-[length:var(--text-body)] leading-[var(--text-body--line-height)]"
              aria-label="Search"
            >
              Search
            </button>
            <Link
              href="#"
              className="text-[--color-light-100] font-[var(--text-body-medium--font-weight)]"
              aria-label="View cart"
            >
              My Cart ({cartCount})
            </Link>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-[--color-dark-700]`}
      >
        <div className="space-y-1 px-4 pb-4 pt-2">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="block rounded-md px-3 py-2 text-[--color-light-100] hover:bg-[--color-dark-800] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-light-100]"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center justify-between rounded-md bg-[--color-dark-800] px-3 py-2">
            <span className="text-[--color-light-100]">Search</span>
            <Link href="#" className="text-[--color-light-100]">
              Cart ({cartCount})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
