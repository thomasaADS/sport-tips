import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://sport-tips-teal.vercel.app";
const siteName = "WinnerTips";
const siteTitle = "WinnerTips | המלצות ספורט מקצועיות מבוססות AI - טיפים לכל הליגות בעולם";
const siteDescription =
  "WinnerTips - מערכת ניתוח ספורט מתקדמת מבוססת בינה מלאכותית. המלצות יומיות לכדורגל, כדורסל, טניס, הוקי, UFC ועוד מ-50+ ליגות בעולם. 78% הצלחה מוכחת. תוצאות חיות, ניתוחים מקצועיים וערוץ VIP בווצאפ.";

export const viewport: Viewport = {
  themeColor: "#0C1220",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "המלצות ספורט",
    "טיפים ספורט",
    "ניחושי כדורגל",
    "המלצות כדורסל",
    "פרמייר ליג",
    "לה ליגה",
    "סרייה א",
    "בונדסליגה",
    "ליגת האלופות",
    "NBA",
    "יורוליג",
    "ATP",
    "WTA",
    "NHL",
    "UFC",
    "MLB",
    "ליגת העל",
    "תוצאות חיות",
    "ניתוח AI",
    "בינה מלאכותית ספורט",
    "מקדמים",
    "אודס",
    "הימורי ספורט",
    "טיפים יומיים",
    "חדשות ספורט",
    "מגזין ספורט ישראלי",
    "ניתוח סטטיסטי ספורט",
    "תחזיות ספורט",
    "המלצות הימורים",
    "WinnerTips",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
    languages: { "he-IL": "/" },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "he_IL",
    siteName,
    url: siteUrl,
    images: [
      {
        url: "/favicon.svg",
        width: 64,
        height: 64,
        alt: "WinnerTips - המלצות ספורט מקצועיות",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@winnertips_il",
    site: "@winnertips_il",
    images: ["/favicon.svg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "sports",
  manifest: "/manifest.json",
  other: {
    "google": "notranslate",
    "content-language": "he",
  },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  alternateName: "WinnerTips - המלצות ספורט",
  url: siteUrl,
  description: "מערכת ניתוח ספורט מבוססת AI עם המלצות יומיות ל-50+ ליגות בעולם",
  inLanguage: "he-IL",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/favicon.svg`,
    width: 64,
    height: 64,
  },
  description: siteDescription,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["Hebrew", "English"],
    url: "https://whatsapp.com/channel/0029VbBHha66xCSMBMTLas3d",
  },
  sameAs: [
    "https://whatsapp.com/channel/0029VbBHha66xCSMBMTLas3d",
    "https://instagram.com/winnertips_il",
    "https://x.com/winnertips_il",
    "https://facebook.com/winnertips.il",
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "מה זה WinnerTips?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WinnerTips היא מערכת ניתוח ספורט מבוססת בינה מלאכותית שמספקת המלצות יומיות לכדורגל, כדורסל, טניס, הוקי, UFC ועוד מ-50+ ליגות בעולם עם 78% הצלחה מוכחת.",
      },
    },
    {
      "@type": "Question",
      name: "אילו ליגות מכוסות באתר?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "האתר מכסה מעל 50 ליגות כולל פרמייר ליג, לה ליגה, סרייה A, בונדסליגה, ליג 1, ליגת האלופות, NBA, יורוליג, ATP, WTA, NHL, UFC, MLB, ליגת העל ועוד.",
      },
    },
    {
      "@type": "Question",
      name: "מה אחוז ההצלחה של ההמלצות?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "אחוז ההצלחה הכללי של מערכת ה-AI שלנו עומד על 78%, עם שונות בין ענפי ספורט שונים. כדורסל מגיע ל-82%, כדורגל ל-76%, טניס ל-74% והוקי ל-71%.",
      },
    },
    {
      "@type": "Question",
      name: "איך מצטרפים לערוץ הווצאפ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ניתן להצטרף לערוץ ה-VIP שלנו בווצאפ דרך הלינק באתר או ישירות בכתובת https://whatsapp.com/channel/0029VbBHha66xCSMBMTLas3d. הערוץ כולל המלצות בזמן אמת, ניתוחים בלעדיים ועדכוני סקורים חיים.",
      },
    },
    {
      "@type": "Question",
      name: "האם השירות בחינם?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "כן, כל ההמלצות, הניתוחים, התוצאות החיות והחדשות באתר זמינים בחינם לכל הגולשים.",
      },
    },
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "דף הבית",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "תמיכה",
      item: `${siteUrl}/support`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "תנאי שימוש",
      item: `${siteUrl}/terms`,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <meta name="google-site-verification" content="Z2cJh31yNE2nyXZB6AjxQoTbGh8SmVGfMt5g_6hwNM4" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MF22WCN6');`,
          }}
        />
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg?v=2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="WinnerTips" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MF22WCN6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
