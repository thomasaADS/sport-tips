import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מרכז תמיכה",
  description:
    "מרכז תמיכה WinnerTips - שאלות נפוצות, יצירת קשר ומידע על השירות.",
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
