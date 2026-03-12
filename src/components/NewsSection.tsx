"use client";

const newsArticles = [
  {
    id: 1,
    category: "כדורגל",
    categoryColor: "var(--color-success)",
    title: "מבאפה כובש שער מטורף ומוביל את ריאל מדריד לניצחון דרמטי",
    excerpt:
      "קיליאן מבאפה כבש שער אדיר מחוץ לרחבה בדקה ה-89 והעניק לריאל מדריד ניצחון 2-1 על אתלטיקו מדריד בדרבי.",
    image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&h=400&fit=crop",
    time: "לפני שעתיים",
    views: "12.5K",
    isHot: true,
  },
  {
    id: 2,
    category: "NBA",
    categoryColor: "var(--color-accent-blue)",
    title: "לברון ג'יימס שובר שיא נוסף: 42 נקודות מול הסלטיקס",
    excerpt:
      "לברון ג'יימס המשיך לכתוב היסטוריה עם 42 נקודות, 11 אסיסטים ו-8 ריבאונדים במשחק קרב הענקים.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
    time: "לפני 4 שעות",
    views: "8.3K",
    isHot: false,
  },
  {
    id: 3,
    category: "טניס",
    categoryColor: "var(--color-accent-purple)",
    title: "ג'וקוביץ' מודיע: 'אני מכוון לזכייה נוספת בגרנד סלאם'",
    excerpt:
      "נובאק ג'וקוביץ' הצהיר כי הוא מרגיש חזק כמו פעם והמטרה שלו ברורה - זכייה נוספת בטורניר גרנד סלאם.",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=400&fit=crop",
    time: "לפני 6 שעות",
    views: "5.1K",
    isHot: false,
  },
  {
    id: 4,
    category: "פרמייר ליג",
    categoryColor: "var(--color-danger)",
    title: "ליברפול חוגגים אליפות: סלאח 'זה הרגע הגדול ביותר שלי'",
    excerpt:
      "מוחמד סלאח נרגש עד דמעות לאחר שליברפול הבטיחו את אליפות הפרמייר ליג עם 3 סיבובים לסיום.",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&h=400&fit=crop",
    time: "לפני 8 שעות",
    views: "18.2K",
    isHot: true,
  },
  {
    id: 5,
    category: "ליגת האלופות",
    categoryColor: "var(--color-accent-primary)",
    title: "הגרלת חצי הגמר: באיירן נגד ריאל, סיטי מול PSG",
    excerpt:
      "הגרלת חצי הגמר של ליגת האלופות הניבה עימותים מרתקים. שתי הפגישות יתקיימו באפריל.",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=600&h=400&fit=crop",
    time: "אתמול",
    views: "22.7K",
    isHot: false,
  },
  {
    id: 6,
    category: "MMA",
    categoryColor: "var(--color-accent-cyan)",
    title: "UFC 310: הנוקאאוט של השנה? אוליביירה מדהים את הקהל",
    excerpt:
      "צ'ארלס אוליביירה סיים את הקרב בנוקאאוט מסתובב בסיבוב השני והקהל בלאס וגאס פרץ בטירוף.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=400&fit=crop",
    time: "אתמול",
    views: "9.8K",
    isHot: false,
  },
];

export default function NewsSection() {
  const mainArticle = newsArticles[0];
  const sideArticles = newsArticles.slice(1, 4);
  const bottomArticles = newsArticles.slice(4);

  return (
    <section id="news" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[var(--color-accent-primary)] to-[var(--color-accent-tertiary)]" />
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-[var(--color-text-white)]">
                חדשות ספורט
              </h2>
              <p className="text-sm text-[var(--color-text-muted)]">
                המגזין שלנו • עדכונים מכל הליגות
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="live-badge text-xs font-bold text-[var(--color-danger)] pr-4">
              LIVE
            </span>
            <span className="text-xs text-[var(--color-text-muted)]">
              עדכון אחרון: {new Date().toLocaleTimeString("he-IL", { hour: "2-digit", minute: "2-digit" })}
            </span>
          </div>
        </div>

        {/* Main Grid - Featured + Side */}
        <div className="grid lg:grid-cols-5 gap-5 mb-5">
          {/* Main featured article */}
          <div className="lg:col-span-3 card p-0 overflow-hidden group cursor-pointer">
            <div className="news-card-img relative h-64 md:h-80">
              <img
                src={mainArticle.image}
                alt={mainArticle.title}
                className="w-full h-full object-cover"
              />
              {mainArticle.isHot && (
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-danger)] text-white text-xs font-bold">
                  🔥 חם עכשיו
                </div>
              )}
              <div className="absolute bottom-0 right-0 left-0 p-6 z-10">
                <span
                  className="inline-block px-3 py-1 rounded-lg text-[11px] font-bold text-white mb-3"
                  style={{ background: mainArticle.categoryColor }}
                >
                  {mainArticle.category}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-2 group-hover:text-[var(--color-accent-secondary)] transition-colors">
                  {mainArticle.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-3 line-clamp-2">
                  {mainArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">🕐 {mainArticle.time}</span>
                  <span className="flex items-center gap-1">👁 {mainArticle.views} צפיות</span>
                </div>
              </div>
            </div>
          </div>

          {/* Side articles */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {sideArticles.map((article) => (
              <div
                key={article.id}
                className="card p-0 overflow-hidden flex group cursor-pointer flex-1"
              >
                <div className="news-card-img relative w-32 md:w-40 flex-shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <span
                      className="inline-block px-2 py-0.5 rounded text-[10px] font-bold text-white mb-2"
                      style={{ background: article.categoryColor }}
                    >
                      {article.category}
                    </span>
                    <h4 className="text-sm font-bold text-[var(--color-text-white)] leading-snug group-hover:text-[var(--color-accent-secondary)] transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] text-[var(--color-text-muted)] mt-2">
                    <span>🕐 {article.time}</span>
                    <span>👁 {article.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid md:grid-cols-2 gap-4">
          {bottomArticles.map((article) => (
            <div
              key={article.id}
              className="card p-0 overflow-hidden flex group cursor-pointer"
            >
              <div className="news-card-img relative w-40 md:w-48 flex-shrink-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-1 min-w-0">
                <div>
                  <span
                    className="inline-block px-2 py-0.5 rounded text-[10px] font-bold text-white mb-2"
                    style={{ background: article.categoryColor }}
                  >
                    {article.category}
                  </span>
                  <h4 className="text-sm font-bold text-[var(--color-text-white)] leading-snug group-hover:text-[var(--color-accent-secondary)] transition-colors line-clamp-2 mb-1">
                    {article.title}
                  </h4>
                  <p className="text-xs text-[var(--color-text-muted)] line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-[10px] text-[var(--color-text-muted)] mt-2">
                  <span>🕐 {article.time}</span>
                  <span>👁 {article.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-16" />
    </section>
  );
}
