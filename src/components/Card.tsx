"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface CardProps {
  title: string;
  description?: string;
  subtitle?: string;
  price?: number | string;
  imageSrc: string;
  imageAlt?: string;
  badgeText?: string;
  href?: string;
  className?: string;
  footerNote?: string;
}

export default function Card({
  title,
  description,
  subtitle,
  price,
  imageSrc,
  imageAlt = "",
  badgeText,
  href,
  className,
  footerNote,
}: CardProps) {
  const content = (
      <div
        className={`group overflow-hidden  ${className || ""}`}
      >
        <div className="relative aspect-[4/5] w-full bg-white flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            sizes="100vw"
            className="w-full h-full transition-transform duration-300 group-hover:scale-105"
            priority={false}
          />
          {badgeText ? (
            <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-red-500 text-sm font-semibold shadow">
              {badgeText}
            </span>
          ) : null}
        </div>

        <div className="px-4 pt-3 pb-4">
          <div className="flex items-start justify-between gap-3 mb-1">
            <h3 className="text-gray-900 text-base font-semibold line-clamp-1 opacity-80">
              {title}
            </h3>
            {price !== undefined ? (
              <span className="shrink-0 text-gray-900 text-base font-semibold opacity-70">
                {typeof price === "number" ? `$${Number(price).toFixed(2)}` : price}
              </span>
            ) : null}
          </div>

          {subtitle ? (
            <p className="text-gray-900 text-sm font-medium mb-1">
              {subtitle}
            </p>
          ) : null}

          {description ? (
            <p className="text-gray-900 text-xs mb-1 line-clamp-2 opacity-60">
              {description}
            </p>
          ) : null}

          {footerNote ? (
            <p className="text-gray-900 text-xs mt-1 opacity-60">
              {footerNote}
            </p>
          ) : null}
        </div>
      </div>
    );

  if (href) {
    return (
      <Link href={href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-900] rounded-xl">
        {content}
      </Link>
    );
  }

  return content;
}
