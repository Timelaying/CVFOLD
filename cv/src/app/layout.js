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
  title: "Timilehin Makanjuola | Software Engineer: Backend, Full Stack and Enterprise Integration",
  description:
    "Software engineer with experience since 2019 delivering backend services, full-stack web applications and enterprise integrations across insurance, financial systems and digital platforms.",
  metadataBase: new URL("https://cvfold.vercel.app"),
  openGraph: {
    title: "Timilehin Makanjuola | Software Engineer: Backend, Full Stack and Enterprise Integration",
    description:
      "Explore projects, experience and credentials in backend services, full-stack development and enterprise integration.",
    url: "https://cvfold.vercel.app",
    siteName: "CVFOLD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timilehin Makanjuola | Software Engineer: Backend, Full Stack and Enterprise Integration",
    description:
      "Explore projects, experience and credentials in backend services, full-stack development and enterprise integration.",
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
