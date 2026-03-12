"use client";

const newsArticles = [
  {
    id: 1,
    category: "כדורגל",
    catColor: "#10b981",
    title: "מבאפה כובש שער מטורף ומוביל את ריאל מדריד לניצחון דרמטי",
    excerpt: "קיליאן מבאפה כבש שער אדיר מחוץ לרחבה בדקה ה-89 והעניק לריאל מדריד ניצחון 2-1 על אתלטיקו מדריד בדרבי.",
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
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=400&fit=crop&q=80",
    time: "אתמול",
    views: "9.8K",
    isHot: false,
  },
];

export default function NewsSection() {
  const main = newsArticles[0];
  const side = newsArticles.slice(1, 4);
  const bottom = newsArticles.slice(4);

  return (
    <section id="news" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-red-500 to-amber-500" />
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white">מגזין ספורט</h2>
              <p className="text-sm text-[var(--color-text-muted)]">חדשות / ניתוחים / עדכונים</p>
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
          <div className="lg:col-span-3 group cursor-pointer rounded-2xl overflow-hidden bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] hover:border-amber-500/20 transition-all">
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
                <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-3 group-hover:text-amber-400 transition-colors">
                  {main.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-3 line-clamp-2">{main.excerpt}</p>
                <div className="flex items-center gap-4 text-[11px] text-gray-400">
                  <span>{main.time}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-500" />
                  <span>{main.views} צפיות</span>
                </div>
              </div>
            </div>
          </div>

          {/* Side */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {side.map((article) => (
              <div key={article.id} className="group cursor-pointer flex rounded-xl overflow-hidden bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] hover:border-amber-500/20 transition-all flex-1">
                <div className="relative w-28 md:w-36 flex-shrink-0 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-4 flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[9px] font-bold text-white mb-2" style={{ background: article.catColor }}>
                      <span className="w-1 h-1 rounded-full bg-white/60" />
                      {article.category}
                    </span>
                    <h4 className="text-[13px] font-bold text-white leading-snug group-hover:text-amber-400 transition-colors line-clamp-2">
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
            <div key={article.id} className="group cursor-pointer flex rounded-xl overflow-hidden bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] hover:border-amber-500/20 transition-all">
              <div className="relative w-36 md:w-44 flex-shrink-0 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5 flex flex-col justify-between flex-1 min-w-0">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[9px] font-bold text-white mb-2" style={{ background: article.catColor }}>
                    <span className="w-1 h-1 rounded-full bg-white/60" />
                    {article.category}
                  </span>
                  <h4 className="text-sm font-bold text-white leading-snug group-hover:text-amber-400 transition-colors line-clamp-2 mb-1.5">
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

      <div className="section-divider mt-20" />
    </section>
  );
}
