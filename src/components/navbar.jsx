"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isServices = pathname === "/services";
  const isPricing = pathname === "/pricing";
  const isMaintenance =
    pathname === "/maintenance-plans" ||
    pathname === "/services/maintenance-plans";
  const isContact = pathname === "/contact";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-surface-variant transition-colors duration-200">
      <div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md">
        {/* Brand */}
        <div className="flex items-center gap-2 shrink-0 lg:flex lg:gap-space-md">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2.5 font-headline-sm text-headline-sm text-primary tracking-tight group lg:flex-row"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portfolio_logo.png"
              alt="Work4U Logo"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-[0.9rem] leading-none sm:text-[0.95rem] md:text-[1rem] lg:text-[1.3rem] lg:font-semibold lg:leading-none">
              Work4U Digital Solutions
            </span>
            <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-primary-container ml-0.5"></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-space-lg">
          <Link
            href="/"
            className={`transition-colors ${
              isHome
                ? "text-primary-container font-semibold"
                : "text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`transition-colors ${
              isAbout
                ? "text-primary-container font-semibold"
                : "text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg"
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`transition-colors ${
              isServices
                ? "text-primary-container font-semibold"
                : "text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg"
            }`}
          >
            Services
          </Link>
          <Link
            href="/pricing"
            className={`transition-colors ${
              isPricing
                ? "text-primary-container font-semibold"
                : "text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg"
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/maintenance-plans"
            className={`transition-colors ${
              isMaintenance
                ? "text-primary-container font-semibold"
                : "text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg"
            }`}
          >
            Maintenance Plans
          </Link>
          <Link
            href="/contact"
            className={`transition-colors ${
              isContact
                ? "text-primary-container font-semibold"
                : "text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right Actions: Theme Toggle & CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary-container text-on-primary-fixed font-label-lg text-label-lg font-semibold hover:brightness-105 active:scale-95 transition-all shadow-sm"
          >
            Get a Quote
          </Link>

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
        <div className="lg:hidden border-b border-surface-variant bg-surface/98 backdrop-blur-2xl px-gutter py-5 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2">
          <div className="flex justify-end">
            <ThemeToggle />
          </div>
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-2 text-sm ${
              isHome
                ? "text-primary-container font-semibold"
                : "text-on-surface-variant hover:text-on-surface font-medium"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-2 text-sm ${
              isAbout
                ? "text-primary-container font-semibold"
                : "text-on-surface-variant hover:text-on-surface font-medium"
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-2 text-sm ${
              isServices
                ? "text-primary-container font-semibold"
                : "text-on-surface-variant hover:text-on-surface font-medium"
            }`}
          >
            Services
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-2 text-sm ${
              isPricing
                ? "text-primary-container font-semibold"
                : "text-on-surface-variant hover:text-on-surface font-medium"
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/maintenance-plans"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-2 text-sm ${
              isMaintenance
                ? "text-primary-container font-semibold"
                : "text-on-surface-variant hover:text-on-surface font-medium"
            }`}
          >
            Maintenance Plans
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-2 text-sm ${
              isContact
                ? "text-primary-container font-semibold"
                : "text-on-surface-variant hover:text-on-surface font-medium"
            }`}
          >
            Contact
          </Link>
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center py-2.5 rounded-lg bg-primary-container text-on-primary-fixed text-sm font-semibold"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
