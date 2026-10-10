"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-surface-variant transition-colors duration-200">
      <div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md">
        {/* Brand */}
        <div className="flex items-center gap-space-md shrink-0">
          <Link
            href="/"
            className="flex items-center gap-2 font-headline-sm text-headline-sm text-primary tracking-tight"
          >
            <span className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-fixed flex items-center justify-center font-bold text-sm">
              W4U
            </span>
            <span>Work4U Digital Solutions</span>
            <span className="inline-block w-2 h-2 rounded-full bg-primary-container ml-0.5"></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-space-lg">
          <Link
            href="/"
            className="transition-colors text-primary-container font-semibold"
          >
            Home
          </Link>
          <a
            href="#about"
            className="text-on-surface-variant hover:text-on-surface transition-colors font-label-lg text-label-lg"
          >
            About
          </a>
          <a
            href="#services"
            className="text-on-surface-variant hover:text-on-surface transition-colors font-label-lg text-label-lg"
          >
            Services
          </a>
          <a
            href="#services"
            className="text-on-surface-variant hover:text-on-surface transition-colors font-label-lg text-label-lg"
          >
            Maintenance Plans
          </a>
          <a
            href="#contact"
            className="text-on-surface-variant hover:text-on-surface transition-colors font-label-lg text-label-lg"
          >
            Contact
          </a>
        </nav>

        {/* Right Actions: Theme Toggle & CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary-container text-on-primary-fixed font-label-lg text-label-lg font-semibold hover:brightness-105 active:scale-95 transition-all shadow-sm"
          >
            Get a Quote
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-outline-variant text-primary hover:bg-surface-container transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-surface-variant bg-surface/98 backdrop-blur-2xl px-gutter py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-primary-container font-semibold py-2"
          >
            Home
          </Link>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-on-surface-variant hover:text-on-surface py-2 font-medium"
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-on-surface-variant hover:text-on-surface py-2 font-medium"
          >
            Services
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-on-surface-variant hover:text-on-surface py-2 font-medium"
          >
            Maintenance Plans
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-on-surface-variant hover:text-on-surface py-2 font-medium"
          >
            Contact
          </a>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center py-2.5 rounded-lg bg-primary-container text-on-primary-fixed font-semibold"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
