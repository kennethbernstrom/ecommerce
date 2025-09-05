import React from "react";
import Image from "next/image";

type Props = {
  onGoogle?: () => void;
  onApple?: () => void;
};

const baseBtn =
  "w-full flex items-center justify-center gap-2 rounded-xl border border-light-300 px-4 py-3 text-[--text-body] hover:bg-light-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-900/10 transition";

export default function SocialProviders({ onGoogle, onApple }: Props) {
  return (
    <div className="space-y-3">
      <button type="button" className={baseBtn} onClick={onGoogle} aria-label="Continue with Google">
        <Image src="/google.svg" alt="" width={20} height={20} />
        <span>Continue with Google</span>
      </button>
      <button type="button" className={baseBtn} onClick={onApple} aria-label="Continue with Apple">
        <Image src="/apple.svg" alt="" width={20} height={20} />
        <span>Continue with Apple</span>
      </button>
    </div>
  );
}
