import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-url";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alaqa — Software Development & Digital Agency",
    template: "%s | Alaqa",
  },
  description:
    "Alaqa helps businesses create dependable websites, mobile apps, AI tools, and digital experiences that support their next stage of growth.",
  keywords: [
    "software development",
    "web development",
    "digital agency",
    "SEO",
    "blockchain",
    "mobile apps",
    "Alaqa",
  ],
  authors: [{ name: "Alaqa" }],
  icons: { icon: [{ url: "/favicon.png", type: "image/png" }], apple: [{ url: "/apple-touch-icon.png", type: "image/png" }] },
  openGraph: {
    title: "Alaqa — Software Development & Digital Agency",
    description:
      "Thoughtful software, useful AI, and digital experiences built around your business.",
    type: "website",
    locale: "en_US",
    siteName: "Alaqa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
