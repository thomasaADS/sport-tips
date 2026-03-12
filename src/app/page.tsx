"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TipCard, { Tip } from "@/components/TipCard";
import NewsSection from "@/components/NewsSection";
import StatsSection from "@/components/StatsSection";
import LeaguesSection from "@/components/LeaguesSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WhatsAppButton from "@/components/WhatsAppButton";

const tips: Tip[] = [
  {
    id: 1, sport: "football", sportEmoji: "⚽", league: "פרמייר ליג",
    leagueFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", homeTeam: "מנצ'סטר סיטי", awayTeam: "ארסנל",
    time: "22:00", recommendation: "מעל 2.5 שערים", odds: "1.85", confidence: 82,
    analysis: "שתי הקבוצות בפורם מצוין. 4 מתוך 5 משחקים אחרונים של סיטי נגמרו עם מעל 2.5. ארסנל מובילים הגנה חזקה בחוץ.",
    result: "pending", category: "football", isHot: true,
  },
  {
    id: 2, sport: "football", sportEmoji: "⚽", league: "לה ליגה",
    leagueFlag: "🇪🇸", homeTeam: "ריאל מדריד", awayTeam: "ברצלונה",
    time: "22:00", recommendation: "1X כפול", odds: "1.50", confidence: 88,
    analysis: "ריאל לא הפסידה בבית 12 משחקים אחרונים. ברצלונה סובלת מפציעות. המקדם מצוין למאד.",
    result: "pending", category: "football", isHot: true,
  },
  {
    id: 3, sport: "football", sportEmoji: "⚽", league: "ליגת האלופות",
    leagueFlag: "🏆", homeTeam: "PSG", awayTeam: "באיירן מינכן",
    time: "22:00", recommendation: "GG (שתי הקבוצות מבקיעות)", odds: "1.70", confidence: 76,
    analysis: "משחק פליאוף בליגת האלופות. שתי הקבוצות חייבות לנצח וישחקו בפורמט התקפי.",
    result: "win", category: "football",
  },
  {
    id: 4, sport: "football", sportEmoji: "⚽", league: "סרייה A",
    leagueFlag: "🇮🇹", homeTeam: "אינטר", awayTeam: "יובנטוס",
    time: "21:45", recommendation: "אינטר לנצח", odds: "1.95", confidence: 71,
    analysis: "אינטר חזקה מאוד בבית. יובנטוס ללא מספר שחקנים מרכזיים. מקדם טוב למארחים.",
    result: "win", category: "football",
  },
  {
    id: 5, sport: "football", sportEmoji: "⚽", league: "בונדסליגה",
    leagueFlag: "🇩🇪", homeTeam: "באיירן", awayTeam: "דורטמונד",
    time: "20:30", recommendation: "מעל 2.5 + GG", odds: "2.10", confidence: 74,
    analysis: "דרבי קלאסיקר. 6 מתוך 6 מפגשים אחרונים נגמרו עם מעל 2.5 שערים. משחק פתוח.",
    result: "pending", category: "football",
  },
  {
    id: 6, sport: "football", sportEmoji: "⚽", league: "ליגת העל",
    leagueFlag: "🇮🇱", homeTeam: "מכבי תל אביב", awayTeam: "הפועל באר שבע",
    time: "20:15", recommendation: "מכבי לנצח", odds: "1.60", confidence: 80,
    analysis: "מכבי בפורם מצוין העונה. 3 ניצחונות רצופים. הפועל במשבר בחצי הטבלה.",
    result: "pending", category: "football",
  },
  {
    id: 7, sport: "basketball", sportEmoji: "🏀", league: "NBA",
    leagueFlag: "🇺🇸", homeTeam: "לייקרס", awayTeam: "סלטיקס",
    time: "03:00", recommendation: "לייקרס +4.5", odds: "1.90", confidence: 79,
    analysis: "לייקרס משחקים בבית ולברון בפורם מצוין. סלטיקס ללא טייטום בפציעה.",
    result: "pending", category: "basketball", isHot: true,
  },
  {
    id: 8, sport: "basketball", sportEmoji: "🏀", league: "NBA",
    leagueFlag: "🇺🇸", homeTeam: "ווריורס", awayTeam: "נאגטס",
    time: "04:30", recommendation: "מעל 225.5 נקודות", odds: "1.85", confidence: 75,
    analysis: "שתי קבוצות התקפיות עם ממוצעים גבוהים. ממוצע משחק פתוח עם הרבה נקודות.",
    result: "pending", category: "basketball",
  },
  {
    id: 9, sport: "basketball", sportEmoji: "🏀", league: "יורוליג",
    leagueFlag: "🇪🇺", homeTeam: "מכבי ת\"א", awayTeam: "אולימפיאקוס",
    time: "21:00", recommendation: "מכבי +3.5", odds: "1.80", confidence: 73,
    analysis: "מכבי משחקים בבית ביורוליג ויש להם מוטיבציה גבוהה. משחק צמוד.",
    result: "win", category: "basketball",
  },
  {
    id: 10, sport: "tennis", sportEmoji: "🎾", league: "ATP Masters",
    leagueFlag: "🎾", homeTeam: "ג'וקוביץ'", awayTeam: "סינר",
    time: "19:00", recommendation: "ג'וקוביץ' 2-0 סטים", odds: "1.75", confidence: 83,
    analysis: "ג'וקוביץ' בפורם מדהים העונה. סינר עוד חוזר מפציעה. יתרון גדול בניסיון.",
    result: "pending", category: "tennis",
  },
  {
    id: 11, sport: "tennis", sportEmoji: "🎾", league: "WTA 1000",
    leagueFlag: "🎾", homeTeam: "סבלנקה", awayTeam: "ריבקינה",
    time: "17:30", recommendation: "מעל 21.5 גיימס", odds: "1.80", confidence: 70,
    analysis: "שתי השחקניות אגרסיביות עם סרב חזק. צפוי משחק ארוך עם הרבה גיימס.",
    result: "pending", category: "tennis",
  },
  {
    id: 12, sport: "hockey", sportEmoji: "🏒", league: "NHL",
    leagueFlag: "🇺🇸", homeTeam: "ריינג'רס", awayTeam: "פנגווינס",
    time: "02:00", recommendation: "מעל 5.5 שערים", odds: "1.90", confidence: 72,
    analysis: "שתי הקבוצות התקפיות עם הגנה חלשה. ממוצע משחק עם הרבה שערים.",
    result: "pending", category: "hockey",
  },
  {
    id: 13, sport: "mma", sportEmoji: "🥊", league: "UFC 310",
    leagueFlag: "🥊", homeTeam: "אוליביירה", awayTeam: "מקגרגור",
    time: "04:00", recommendation: "אוליביירה לנצח", odds: "1.65", confidence: 77,
    analysis: "אוליביירה בפורם מצוין ועם יתרון בניסיון. מקגרגור חוזר מפציעה.",
    result: "pending", category: "mma",
  },
  {
    id: 14, sport: "baseball", sportEmoji: "⚾", league: "MLB",
    leagueFlag: "🇺🇸", homeTeam: "ינקיז", awayTeam: "רד סוקס",
    time: "01:00", recommendation: "ינקיז -1.5 ראנס", odds: "2.00", confidence: 68,
    analysis: "ינקיז עם פיצ'ר מצוין בהתחלה. רד סוקס ברצף הפסדים אחרון.",
    result: "pending", category: "baseball",
  },
  {
    id: 15, sport: "football", sportEmoji: "⚽", league: "ליג 1",
    leagueFlag: "🇫🇷", homeTeam: "ליון", awayTeam: "מונקו",
    time: "21:00", recommendation: "ליון לנצח", odds: "1.75", confidence: 78,
    analysis: "ליון בבית עם 5 ניצחונות רצופים. מונקו במשבר בחצי הטבלה. המקדם אטרקטיבי.",
    result: "pending", category: "football",
  },
  {
    id: 16, sport: "football", sportEmoji: "⚽", league: "פרמייר ליג",
    leagueFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", homeTeam: "ליברפול", awayTeam: "צ'לסי",
    time: "17:00", recommendation: "ליברפול לנצח + מעל 1.5", odds: "1.55", confidence: 85,
    analysis: "ליברפול בפורם אדיר. 8 ניצחונות רצופים בבית. צ'לסי לא בפורם הכי טוב.",
    result: "win", category: "football", isHot: true,
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeSection, setActiveSection] = useState("tips");

  const filteredTips = useMemo(() => {
    if (activeFilter === "all") return tips;
    return tips.filter((tip) => tip.category === activeFilter);
  }, [activeFilter]);

  // Sort: hot tips first, then by confidence
  const sortedTips = useMemo(() => {
    return [...filteredTips].sort((a, b) => {
      if (a.isHot && !b.isHot) return -1;
      if (!a.isHot && b.isHot) return 1;
      return b.confidence - a.confidence;
    });
  }, [filteredTips]);

  return (
    <div className="min-h-screen bg-[var(--color-bg-deep)]">
      <Header
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <HeroSection />

      {/* === TIPS SECTION === */}
      <section id="tips" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[var(--color-danger)] to-[var(--color-accent-primary)]" />
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-[var(--color-text-white)]">
                  המלצות היום
                </h2>
                <p className="text-sm text-[var(--color-text-muted)]">
                  ניתוחים מקצועיים • עדכון בזמן אמת
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)]">
                <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
                <span className="text-sm font-semibold text-[var(--color-text-secondary)]">
                  {sortedTips.length} המלצות
                </span>
              </div>
            </div>
          </div>

          {/* Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {sortedTips.map((tip, index) => (
              <div
                key={tip.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <TipCard tip={tip} />
              </div>
            ))}
          </div>

          {sortedTips.length === 0 && (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-lg text-[var(--color-text-muted)]">
                אין המלצות זמינות לקטגוריה זו. נסו קטגוריה אחרת.
              </p>
            </div>
          )}
        </div>

        <div className="section-divider mt-16" />
      </section>

      <NewsSection />
      <StatsSection />
      <LeaguesSection />
      <Footer />
      <ChatBot />
      <WhatsAppButton />
    </div>
  );
}
