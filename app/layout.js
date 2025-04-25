import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimeDataProvider from "./data/Data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Watch what matches your skies!",
  description: "Discover anime that matches your weather mood—sunny days, stormy nights, we’ve got the perfect watch!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimeDataProvider>{children}</AnimeDataProvider>
      </body>
    </html>
  );
}
