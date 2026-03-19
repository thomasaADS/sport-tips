"use client";

import { useState } from "react";

const newsArticles = [
  {
    id: 1,
    category: "כדורגל",
    catColor: "#10b981",
    title: "מבאפה כובש שער מטורף ומוביל את ריאל מדריד לניצחון דרמטי",
    excerpt: "קיליאן מבאפה כבש שער אדיר מחוץ לרחבה בדקה ה-89 והעניק לריאל מדריד ניצחון 2-1 על אתלטיקו מדריד בדרבי.",
    fullText: "קיליאן מבאפה כבש שער אדיר מחוץ לרחבה בדקה ה-89 והעניק לריאל מדריד ניצחון 2-1 על אתלטיקו מדריד בדרבי. מבאפה קיבל את הכדור באזור קו האמצע, חלף על פני שני מגנים ושלח בעיטה מדויקת לזווית הרחוקה. זהו שער החודש של לה ליגה ללא ספק. עם 15 שערים ו-8 אסיסטים העונה, מבאפה ממשיך להוכיח שהוא הסיגנינג הגדול ביותר של ריאל בשנים האחרונות.",
    image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&h=500&fit=crop&q=80",
    time: "לפני שעתיים",
    views: "12.5K",
    isHot: true,
  },
  {
    id: 2,
    category: "NBA",
    catColor: "#3b82f6",
    title: "לברון ג'יימס שובר שיא: 42 נקודות מול הסלטיקס",
    excerpt: "לברון המשיך לכתוב היסטוריה עם 42 נקודות, 11 אסיסטים ו-8 ריבאונדים.",
    fullText: "לברון ג'יימס ממשיך לכתוב היסטוריה בגיל 41. הערב מול הסלטיקס הוא השיג 42 נקודות, 11 אסיסטים ו-8 ריבאונדים ב-36 דקות בלבד. הלייקרס ניצחו 118-112 במשחק שהיה צמוד עד הרבע האחרון. לברון הוא כעת מלך הנקודות של ה-NBA עם 41,500 נקודות קריירה. 'אני פשוט אוהב את המשחק הזה', אמר בראיון אחרי המשחק.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop&q=80",
    time: "לפני 4 שעות",
    views: "8.3K",
    isHot: false,
  },
  {
    id: 3,
    category: "טניס",
    catColor: "#8b5cf6",
    title: "ג'וקוביץ': 'אני מכוון לגרנד סלאם נוסף'",
    excerpt: "ג'וקוביץ' הצהיר כי הוא מרגיש חזק כמו פעם והמטרה ברורה.",
    fullText: "נובאק ג'וקוביץ' נתן ראיון מקיף בו הצהיר כי הוא מכוון לגרנד סלאם 25 - מספר שלא הושג על ידי שום שחקן בהיסטוריה. 'הגוף מרגיש טוב, הראש חד. אני לא כאן בשביל לשחק - אני כאן בשביל לנצח', אמר. ג'וקוביץ' נמצא בפורם מעולה השנה עם 3 טורנירים שנכבשו כבר.",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=400&fit=crop&q=80",
    time: "לפני 6 שעות",
    views: "5.1K",
    isHot: false,
  },
  {
    id: 4,
    category: "פרמייר ליג",
    catColor: "#ef4444",
    title: "ליברפול חוגגים: סלאח 'הרגע הגדול ביותר שלי'",
    excerpt: "סלאח נרגש עד דמעות לאחר שליברפול הבטיחו את אליפות הפרמייר ליג.",
    fullText: "מוחמד סלאח נרגש עד דמעות לאחר שליברפול הבטיחו את אליפות הפרמייר ליג עם שלושה משחקים לסיום העונה. סלאח, שסיים את העונה עם 26 שערים ו-14 אסיסטים, אמר: 'זה הרגע הגדול ביותר שלי בקריירה. הקהל באנפילד הוא הדבר הכי יפה בכדורגל'. ליברפול לא זכו באליפות כבר 4 שנים.",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&h=400&fit=crop&q=80",
    time: "לפני 8 שעות",
    views: "18.2K",
    isHot: true,
  },
  {
    id: 5,
    category: "ליגת האלופות",
    catColor: "#f59e0b",
    title: "הגרלת חצי הגמר: באיירן נגד ריאל, סיטי מול PSG",
    excerpt: "הגרלת חצי הגמר של ליגת האלופות הניבה עימותים מרתקים.",
    fullText: "הגרלת חצי הגמר של ליגת האלופות הניבה את העימותים הבאים: באיירן מינכן מול ריאל מדריד, ומנצ'סטר סיטי מול PSG. המשחקים יתקיימו ב-29-30 באפריל (מחזור ראשון) וב-6-7 במאי (מחזור שני). הגמר יתקיים במינכן ב-31 במאי. מומחי הכדורגל חוזים גמר ריאל מדריד מול מנצ'סטר סיטי.",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=600&h=400&fit=crop&q=80",
    time: "אתמול",
    views: "22.7K",
    isHot: false,
  },
  {
    id: 6,
    category: "UFC",
    catColor: "#06b6d4",
    title: "UFC 310: הנוקאאוט של השנה? אוליביירה מדהים",
    excerpt: "אוליביירה סיים בנוקאאוט מסתובב בסיבוב השני והקהל בלאס וגאס פרץ בטירוף.",
    fullText: "צ'ארלס אוליביירה הדהים את עולם ה-MMA עם נוקאאוט מסתובב מטורף בסיבוב השני של קרב UFC 310. הקהל בלאס וגאס פרץ בטירוף כשאוליביירה נחת עם בעיטה מסתובבת מושלמת שהפילה את יריבו. 'עבדתי על הטכניקה הזו חודשים', אמר אוליביירה. 'ידעתי שהרגע הנכון יגיע'. זהו כנראה הנוקאאוט של השנה.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=400&fit=crop&q=80",
    time: "אתמול",
    views: "9.8K",
    isHot: false,
  },
];

function ArticleModal({ article, onClose }: { article: typeof newsArticles[0]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56 md:h-72 overflow-hidden rounded-t-2xl">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {article.isHot && (
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500 text-white text-[11px] font-bold">
              Breaking
            </div>
          )}
        </div>
        <div className="p-6 md:p-8 -mt-8 relative">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold text-white mb-4" style={{ background: article.catColor }}>
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            {article.category}
          </span>
          <h2 className="text-xl md:text-2xl font-black text-white leading-tight mb-4">{article.title}</h2>
          <div className="flex items-center gap-4 text-[11px] text-[var(--color-text-muted)] mb-6">
            <span>{article.time}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-text-dim)]" />
            <span>{article.views} צפיות</span>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
            {article.fullText}
          </p>
          <div className="flex gap-3">
            <a
              href="https://whatsapp.com/channel/0029VbBHha66xCSMBMTLas3d"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[#25D366]/90 hover:bg-[#25D366] transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              שתפו בווצאפ
            </a>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-medium text-[var(--color-text-muted)] bg-[var(--color-bg-secondary)] hover:text-white transition-all border border-[var(--color-border-subtle)]"
            >
              סגור
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NewsSection() {
  const [selectedArticle, setSelectedArticle] = useState<typeof newsArticles[0] | null>(null);

  const main = newsArticles[0];
  const side = newsArticles.slice(1, 4);
  const bottom = newsArticles.slice(4);

  return (
    <section id="news" className="py-20 px-4" aria-label="חדשות ספורט ומגזין">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-red-500 to-amber-500" />
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white">מגזין ספורט</h2>
              <p className="text-sm text-[var(--color-text-muted)]">חדשות / ניתוחים / לחצו לקריאה</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-xs font-bold text-red-400">LIVE</span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-5 mb-5">
          {/* Featured */}
          <div
            className="lg:col-span-3 group cursor-pointer rounded-2xl overflow-hidden bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] hover:border-amber-500/20 transition-all"
            onClick={() => setSelectedArticle(main)}
          >
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img src={main.image} alt={main.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-deep)] via-[var(--color-bg-deep)]/50 to-transparent" />
              {main.isHot && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500 text-white text-[11px] font-bold shadow-lg">
                  Breaking
                </div>
              )}
              <div className="absolute bottom-0 right-0 left-0 p-6">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold text-white mb-3" style={{ background: main.catColor }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  {main.category}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-3 group-hover:text-[var(--color-accent-secondary)] transition-colors">
                  {main.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-3 line-clamp-2">{main.excerpt}</p>
                <div className="flex items-center gap-4 text-[11px] text-gray-400">
                  <span>{main.time}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-500" />
                  <span>{main.views} צפיות</span>
                  <span className="mr-auto text-[var(--color-accent-primary)] font-semibold">קראו עוד</span>
                </div>
              </div>
            </div>
          </div>

          {/* Side */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {side.map((article) => (
              <div
                key={article.id}
                className="group cursor-pointer flex rounded-xl overflow-hidden bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] hover:border-amber-500/20 transition-all flex-1"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="relative w-28 md:w-36 flex-shrink-0 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-4 flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[9px] font-bold text-white mb-2" style={{ background: article.catColor }}>
                      <span className="w-1 h-1 rounded-full bg-white/60" />
                      {article.category}
                    </span>
                    <h4 className="text-[13px] font-bold text-white leading-snug group-hover:text-[var(--color-accent-secondary)] transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] text-[var(--color-text-muted)] mt-2">
                    <span>{article.time}</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--color-text-dim)]" />
                    <span>{article.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="grid md:grid-cols-2 gap-5">
          {bottom.map((article) => (
            <div
              key={article.id}
              className="group cursor-pointer flex rounded-xl overflow-hidden bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] hover:border-amber-500/20 transition-all"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="relative w-36 md:w-44 flex-shrink-0 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5 flex flex-col justify-between flex-1 min-w-0">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[9px] font-bold text-white mb-2" style={{ background: article.catColor }}>
                    <span className="w-1 h-1 rounded-full bg-white/60" />
                    {article.category}
                  </span>
                  <h4 className="text-sm font-bold text-white leading-snug group-hover:text-[var(--color-accent-secondary)] transition-colors line-clamp-2 mb-1.5">
                    {article.title}
                  </h4>
                  <p className="text-[11px] text-[var(--color-text-muted)] line-clamp-2">{article.excerpt}</p>
                </div>
                <div className="flex items-center gap-3 text-[10px] text-[var(--color-text-muted)] mt-3">
                  <span>{article.time}</span>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-text-dim)]" />
                  <span>{article.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
      )}

      <div className="section-divider mt-20" />
    </section>
  );
}
