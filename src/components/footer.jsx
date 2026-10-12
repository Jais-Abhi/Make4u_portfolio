import Link from "next/link";
import {
  Mail,
  MessageSquare,
  Share2,
  Globe,
  MessagesSquare,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-variant transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-gutter py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl border-b border-surface-variant">
          {/* Brand info */}
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portfolio_logo.png"
                alt="Work4U Logo"
                className="h-7 w-auto object-contain"
              />
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight">
                Work4U<span className="text-primary-container">.</span>
              </span>
            </div>
            <p className="font-label-md text-label-md text-primary-container uppercase tracking-widest font-semibold">
              Click. Connect. Convert.
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Simple, practical digital solutions helping businesses build websites, grow online, create content, and automate operations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-space-md">
            <h3 className="font-headline-sm text-headline-sm text-primary text-base font-semibold">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-primary-container"></span>
                <Link
                  href="/"
                  className="text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-primary-container"></span>
                <Link
                  href="/about"
                  className="text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  About
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-primary-container"></span>
                <Link
                  href="/services"
                  className="text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  Services
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-primary-container"></span>
                <Link
                  href="/maintenance-plans"
                  className="text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  Maintenance Plans
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-primary-container"></span>
                <Link
                  href="/contact"
                  className="text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="flex flex-col gap-space-md">
            <h3 className="font-headline-sm text-headline-sm text-primary text-base font-semibold">
              Services
            </h3>
            <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-primary-container"></span>
                <Link
                  href="/services"
                  className="text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  Website Development
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-primary-container"></span>
                <Link
                  href="/services"
                  className="text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  App Development
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-primary-container"></span>
                <Link
                  href="/services"
                  className="text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  SEO &amp; Digital Growth
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-primary-container"></span>
                <Link
                  href="/services"
                  className="text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  Graphic Design &amp; Video Editing
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-primary-container"></span>
                <Link
                  href="/services"
                  className="text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  Photography &amp; Videography
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-sm bg-primary-container"></span>
                <Link
                  href="/services"
                  className="text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  AI &amp; Business Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="flex flex-col gap-space-md">
            <h3 className="font-headline-sm text-headline-sm text-primary text-base font-semibold">
              Contact
            </h3>
            <div className="flex flex-col gap-space-sm font-body-sm text-body-sm">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <Mail className="h-4 w-4 text-primary-container" />
                <a
                  href="mailto:hello@work4u.example"
                  className="hover:text-on-surface transition-colors"
                >
                  hello@work4u.example
                </a>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <MessageSquare className="h-4 w-4 text-primary-container" />
                <a
                  href="tel:+15550192834"
                  className="hover:text-on-surface transition-colors"
                >
                  +1 (555) 019-2834
                </a>
              </div>
            </div>

            <div className="pt-space-xs">
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-space-sm">
                Social Connect
              </p>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  aria-label="Share"
                  className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center border border-surface-variant hover:border-primary-container hover:text-primary-container transition-all"
                >
                  <Share2 className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Website"
                  className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center border border-surface-variant hover:border-primary-container hover:text-primary-container transition-all"
                >
                  <Globe className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Community forum"
                  className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center border border-surface-variant hover:border-primary-container hover:text-primary-container transition-all"
                >
                  <MessagesSquare className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant">
          <p>© 2025 Work4U Digital Solutions. All rights reserved.</p>
          <div className="flex items-center gap-space-lg font-label-sm text-label-sm">
            <a href="#" className="hover:text-on-surface transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-on-surface transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
