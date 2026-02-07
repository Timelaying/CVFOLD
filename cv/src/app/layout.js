import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Timilehin Makanjuola | Backend & Cloud-Native Engineer",
  description:
    "Backend-focused software engineer with 5+ years of experience building microservices, cloud-native platforms, and high-performance APIs.",
  metadataBase: new URL("https://cvfold.vercel.app"),
  openGraph: {
    title: "Timilehin Makanjuola | Backend & Cloud-Native Engineer",
    description:
      "Explore projects, experience, and credentials in backend engineering, microservices, and cloud-native development.",
    url: "https://cvfold.vercel.app",
    siteName: "CVFOLD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timilehin Makanjuola | Backend & Cloud-Native Engineer",
    description:
      "Explore projects, experience, and credentials in backend engineering, microservices, and cloud-native development.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
