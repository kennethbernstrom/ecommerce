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
      className={`group overflow-hidden rounded-xl bg-[--color-light-100] shadow-sm ring-1 ring-[--color-light-300] hover:shadow-lg transition-shadow ${className || ""}`}
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          priority={false}
        />
        {badgeText ? (
          <span className="absolute left-3 top-3 rounded-full bg-[--color-light-100] px-3 py-1 text-[--color-red] text-[length:var(--text-caption)] font-[var(--text-caption--font-weight)] shadow">
            {badgeText}
          </span>
        ) : null}
      </div>

      <div className="px-4 py-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[--color-dark-900] text-[length:var(--text-heading-3)] leading-[var(--text-heading-3--line-height)] font-[var(--text-heading-3--font-weight)] line-clamp-1">
            {title}
          </h3>
          {price !== undefined ? (
            <span className="shrink-0 text-[--color-dark-900] text-[length:var(--text-body)] font-[var(--text-body-medium--font-weight)]">
              {typeof price === "number" ? `$${price.toFixed(2)}` : price}
            </span>
          ) : null}
        </div>

        {subtitle ? (
          <p className="mt-1 text-[--color-dark-700] text-[length:var(--text-body)] leading-[var(--text-body--line-height)]">
            {subtitle}
          </p>
        ) : null}

        {description ? (
          <p className="mt-1 text-[--color-dark-700] text-[length:var(--text-caption)] leading-[var(--text-caption--line-height)] line-clamp-2">
            {description}
          </p>
        ) : null}

        {footerNote ? (
          <p className="mt-2 text-[--color-dark-500] text-[length:var(--text-footnote)] leading-[var(--text-footnote--line-height)]">
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
