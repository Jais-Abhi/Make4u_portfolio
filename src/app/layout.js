import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Work4U Digital Solutions — Click. Connect. Convert.",
  description:
    "We build websites, create digital content, and connect useful tools to help businesses grow online and work more efficiently.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/portfolio_logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/portfolio_logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col bg-background text-on-surface antialiased transition-colors duration-200">
            <Navbar />
            <main className="w-full flex-1 bg-background pt-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
