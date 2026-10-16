"use client";

import * as React from "react";
import { CheckCircle2, X, MessageCircle, ArrowUpRight, Clock, ShieldCheck } from "lucide-react";

export function ContactSuccessModal({
  isOpen,
  onClose,
  title = "Inquiry Dispatch Logged",
  message = "Our team has been notified. You will receive an acknowledgment receipt within minutes.",
}) {
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-surface-container border border-outline-variant p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          {/* Animated Success Badge Icon */}
          <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2d4d12]/12 text-[#2d4d12] dark:bg-[#C8F169]/15 dark:text-[#C8F169] shadow-inner">
            <span className="absolute -inset-1 rounded-2xl bg-[#2d4d12]/10 dark:bg-[#C8F169]/20 animate-ping opacity-75 pointer-events-none" />
            <CheckCircle2 className="h-9 w-9 stroke-[2.2]" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2d4d12] dark:bg-[#C8F169]" />
            <span className="font-label-sm text-label-sm font-semibold tracking-wider uppercase text-[#2d4d12] dark:text-[#C8F169]">
              Inquiry Dispatch Logged
            </span>
          </div>

          <h3
            id="success-modal-title"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-primary font-headline-sm"
          >
            {title}
          </h3>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-on-surface-variant max-w-md">
            {message}
          </p>

          {/* Value Strip */}
          <div className="mt-6 grid grid-cols-2 gap-3 w-full text-left">
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-[#2d4d12] dark:text-[#C8F169]">
                <Clock className="h-4 w-4" />
                <span className="text-[11px] font-semibold uppercase tracking-wider">Fast Turnaround</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-snug">
                Avg. response within 2–4 hours with initial scope.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-[#2d4d12] dark:text-[#C8F169]">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-[11px] font-semibold uppercase tracking-wider">Zero Pressure</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-snug">
                Free consultation with transparent milestone pricing.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:flex-1 py-3 px-5 rounded-lg bg-[#2d4d12] text-white dark:bg-[#C8F169] dark:text-[#151f00] font-semibold text-sm hover:brightness-105 active:scale-[0.99] transition-all shadow-md"
            >
              Done
            </button>

            <a
              href="https://wa.me/917390813440?text=Hello%20Make4U%20Digital%20Solutions%2C%20I%20just%20submitted%20a%20project%20inquiry%20and%20wanted%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-outline-variant bg-surface-container-low text-primary text-sm font-semibold hover:border-[#2d4d12] hover:text-[#2d4d12] dark:hover:border-[#C8F169] dark:hover:text-[#C8F169] transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
