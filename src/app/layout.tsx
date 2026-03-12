import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WinnerTips | המלצות ספורט מקצועיות - טיפים לכל הליגות בעולם",
  description:
    "המלצות ספורט מקצועיות לכל הליגות בעולם. כדורגל, כדורסל, טניס, הוקי ועוד. טיפים יומיים מנותחים עם אחוזי הצלחה גבוהים. הצטרפו לקהילה המנצחת!",
  keywords:
    "המלצות ספורט, טיפים ספורט, ניחושי כדורגל, המלצות כדורסל, ליגת האלופות, NBA, פרמייר ליג, לה ליגה, סרייה א, בונדסליגה, טניס, הוקי",
  openGraph: {
    title: "WinnerTips | המלצות ספורט מקצועיות",
    description:
      "הצטרפו לאלפי מנצחים! המלצות ספורט יומיות לכל הליגות בעולם עם אחוזי הצלחה מוכחים.",
    type: "website",
    locale: "he_IL",
    siteName: "WinnerTips",
  },
  twitter: {
    card: "summary_large_image",
    title: "WinnerTips | המלצות ספורט מקצועיות",
    description:
      "המלצות ספורט יומיות מנותחות לכל הליגות. הצטרפו לקהילה המנצחת!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1a1a2e" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
