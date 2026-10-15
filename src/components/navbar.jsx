"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Bot,
  Camera,
  ChevronDown,
  Globe,
  Menu,
  Palette,
  Smartphone,
  X,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isMaintenance =
    pathname === "/maintenance-plans" ||
    pathname === "/services/maintenance-plans";
  const isContact = pathname === "/contact";

  const serviceOptions = [
    {
      title: "Website Development",
      description: "Custom websites built to convert visitors into leads.",
      href: "/services/website-development",
      icon: Globe,
    },
    {
      title: "App Development",
      description: "Smart business apps tailored to your workflows.",
      href: "/services/app-development",
      icon: Smartphone,
    },
    {
      title: "SEO & Digital Growth",
      description: "Search visibility and growth systems that drive demand.",
      href: "/services/seo-digital-growth",
      icon: BarChart3,
    },
    {
      title: "Graphic Design & Video Editing",
      description: "Brand visuals and motion design for stronger engagement.",
      href: "/services/graphic-design-video-editing",
      icon: Palette,
    },
    {
      title: "Photography & Videography",
      description: "Premium content for products, brands, and events.",
      href: "/services/photography-videography",
      icon: Camera,
    },
    {
      title: "AI & Business Integration",
      description: "Automation that connects tools, leads, and support flows.",
      href: "/services/ai-business-integration",
      icon: Bot,
    },
  ];

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
              alt="Make4U Logo"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-[0.9rem] leading-none sm:text-[0.95rem] md:text-[1rem] lg:text-[1.3rem] lg:font-semibold lg:leading-none">
              Make4U Digital Solutions
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
          <div
            className="relative hidden lg:block"
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
          >
            <div className="flex items-center gap-1 px-2 py-3 text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg transition-colors">
              <button
                type="button"
                className="flex items-center gap-1"
                aria-expanded={servicesMenuOpen}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    servicesMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {servicesMenuOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-0 w-[700px] -translate-x-1/2 rounded-[28px] border border-outline-variant bg-surface-container/95 p-3 shadow-[0_18px_45px_rgba(18,29,22,0.18)] backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-2.5">
                  {serviceOptions.map((service) => {
                    const Icon = service.icon;

                    return (
                      <Link
                        key={service.title}
                        href={service.href || "/#services"}
                        onClick={() => setServicesMenuOpen(false)}
                        className="group rounded-2xl border border-transparent bg-surface-container-low/80 p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[color:var(--primary-container)] hover:bg-surface-container"
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-container/10 text-primary-container">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div className="text-sm font-semibold text-primary group-hover:text-primary-container">
                            {service.title}
                          </div>
                        </div>
                        <p className="text-xs leading-relaxed text-on-surface-variant">
                          {service.description}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
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
          <div className="py-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileServicesOpen((value) => !value)}
              className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
            >
              <span className="font-medium">Services</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="mt-2 flex flex-col gap-1 overflow-hidden rounded-xl border border-outline-variant bg-surface-container/80 p-2">
                {serviceOptions.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href || "/#services"}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="flex items-center justify-between rounded-lg px-2 py-2 text-sm text-on-surface-variant hover:bg-surface-container hover:text-primary"
                  >
                    <span>{service.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
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
