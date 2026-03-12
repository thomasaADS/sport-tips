import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WinnerTips | המלצות ספורט מקצועיות - טיפים לכל הליגות בעולם",
  description:
    "המלצות ספורט מקצועיות לכל הליגות בעולם. כדורגל, כדורסל, טניס, הוקי ועוד. טיפים יומיים מנותחים עם אחוזי הצלחה גבוהים. חדשות ספורט, ניתוחים ומגזין ספורט. הצטרפו לקהילה המנצחת!",
  keywords:
    "המלצות ספורט, טיפים ספורט, ניחושי כדורגל, המלצות כדורסל, ליגת האלופות, NBA, פרמייר ליג, לה ליגה, סרייה א, בונדסליגה, טניס, הוקי, חדשות ספורט, מגזין ספורט",
  openGraph: {
    title: "WinnerTips | המלצות ספורט מקצועיות",
    description:
      "הצטרפו לאלפי מנצחים! המלצות ספורט יומיות לכל הליגות בעולם עם אחוזי הצלחה מוכחים. חדשות, ניתוחים ומגזין ספורט.",
    type: "website",
    locale: "he_IL",
    siteName: "WinnerTips",
  },
  twitter: {
    card: "summary_large_image",
    title: "WinnerTips | המלצות ספורט מקצועיות",
    description:
      "המלצות ספורט יומיות מנותחות לכל הליגות. חדשות ומגזין ספורט. הצטרפו לקהילה המנצחת!",
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0a0b14" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
