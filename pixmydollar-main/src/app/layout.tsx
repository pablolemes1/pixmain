import type { Metadata } from "next";
import { Roboto, Rubik } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import localFont from "next/font/local";
import { SecurityGuard } from "@/components/SecurityGuard";

const rubik = Rubik({
  subsets: ["latin"],
  display: 'swap',
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rubik",
});

const souvenir = localFont({
  src: [
    {
      path: "./font/SouvenirB.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-souvenir",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pix My Dollar",
  description: "Ganhei dinheiro com Pix My Dollar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        {/* VSL - PRESELL */}
        <link rel="preload" href="https://scripts.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/6847ccaae73418f1e62260dc/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script" />
        <link rel="preload" href="https://images.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/6847ccaae73418f1e62260dc/thumbnail.jpg" as="image" />
        <link rel="preload" href="https://cdn.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/6847cca0893256765f5d3f1c/main.m3u8" as="fetch" />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
        <link rel="preload" href="https://scripts.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/6854e4a36ea118875f811527/player.js" as="script" />
        <link rel="preload" href="https://images.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/6854e4a36ea118875f811527/thumbnail.jpg" as="image" />
        <link rel="preload" href="https://cdn.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/6854d3897167387c11186ac0/main.m3u8" as="fetch" />
        <link rel="preload" href="https://scripts.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/6854e4f1f3276079e45b98af/player.js" as="script" />
        <link rel="preload" href="https://images.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/6854e4f1f3276079e45b98af/thumbnail.jpg" as="image" />
        <link rel="preload" href="https://cdn.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/6854e4bdf3276079e45b985a/main.m3u8" as="fetch" />
      </Head>
      <body
        className={`${rubik.className} ${souvenir.variable} antialiased`}
      >
        <SecurityGuard>
          {children}
        </SecurityGuard>
      </body>
    </html>
  );
}
