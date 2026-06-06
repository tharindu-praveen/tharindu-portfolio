import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  metadataBase: new URL("https://tharindu-praveen.vercel.app/"),

  title: {
    default: "Tharindu Praveen | Software Engineer & Technology Builder",
    template: "%s | Tharindu Praveen",
  },

  description:
    "Portfolio of Tharindu Praveen, a Software Engineer and Technology Builder focused on full-stack development, web applications, automation, robotics, and engineering solutions.",

  keywords: [
    "Tharindu Praveen",
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer Sri Lanka",
    "Next.js Developer",
    "React Developer",
    "Automation",
    "Robotics",
    "Engineering Technology",
    "Portfolio",
  ],

  authors: [{ name: "Tharindu Praveen" }],
  creator: "Tharindu Praveen",

  openGraph: {
    title: "Tharindu Praveen | Software Engineer & Technology Builder",
    description:
      "Explore the portfolio of Tharindu Praveen, featuring software, web development, automation, robotics, and engineering-focused projects.",
    url: "https://your-domain.vercel.app",
    siteName: "Tharindu Praveen Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tharindu Praveen Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tharindu Praveen | Software Engineer & Technology Builder",
    description:
      "Full-stack development, automation, robotics, and engineering-focused project portfolio.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },

  manifest: "/site.webmanifest",

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
      {children}
    </body>
  </html>
  );
}