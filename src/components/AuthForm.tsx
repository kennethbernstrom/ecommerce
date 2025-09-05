"use client";

import React, { useState } from "react";

type Props = {
  mode: "signin" | "signup";
};

export default function AuthForm({ mode }: Props) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  };

  const inputCls =
    "w-full rounded-xl border border-light-300 bg-white px-4 py-3 placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-dark-900/10";

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {mode === "signup" && (
        <div>
          <label htmlFor="name" className="block text-[--text-caption] text-dark-700 mb-2">
            Full Name
          </label>
          <input id="name" name="name" type="text" className={inputCls} placeholder="Enter your full name" required />
        </div>
      )}
      <div>
        <label htmlFor="email" className="block text-[--text-caption] text-dark-700 mb-2">
          Email
        </label>
        <input id="email" name="email" type="email" className={inputCls} placeholder="johndoe@gmail.com" required />
      </div>
      <div>
        <label htmlFor="password" className="block text-[--text-caption] text-dark-700 mb-2">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={show ? "text" : "password"}
            className={`${inputCls} pr-12`}
            placeholder={mode === "signup" ? "minimum 8 characters" : "your password"}
            required
          />
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute inset-y-0 right-0 px-4 text-dark-700 hover:text-dark-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-900/10"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? "🙈" : "👁️"}
          </button>
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-dark-900 text-light-100 py-3 text-[--text-body-medium] hover:bg-black/90 disabled:opacity-60"
      >
        {mode === "signup" ? "Sign Up" : "Sign In"}
      </button>
    </form>
  );
}
