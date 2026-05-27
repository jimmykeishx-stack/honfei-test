import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hongfeipalm.example"),
  title: {
    default: "Hongfei Palm Restaurant | Luxury Chinese Dining in Limuru",
    template: "%s | Hongfei Palm Restaurant"
  },
  description:
    "Hongfei Palm Restaurant is a calm contemporary Chinese dining escape in Limuru, Kenya, minutes from the highway from Nairobi toward Naivasha and Nakuru.",
  keywords: [
    "Hongfei Palm Restaurant",
    "Chinese restaurant Limuru",
    "Chinese dining Nairobi escape",
    "Limuru restaurant",
    "highway restaurant Kenya",
    "private dining Limuru"
  ],
  openGraph: {
    title: "Hongfei Palm Restaurant",
    description: "Leave Nairobi behind for contemporary Chinese dining in the cool hills of Limuru.",
    type: "website",
    locale: "en_KE"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0B"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
