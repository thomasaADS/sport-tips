"use client";

const recentResults = [
  { match: "ריאל מדריד vs ברצלונה", tip: "1X", odds: "1.65", result: "win" as const },
  { match: "לייקרס vs סלטיקס", tip: "תחתון +5.5", odds: "1.90", result: "win" as const },
  { match: "ליברפול vs מנצ'סטר סיטי", tip: "מעל 2.5", odds: "1.75", result: "win" as const },
  { match: "ג'וקוביץ' vs נדאל", tip: "1", odds: "1.55", result: "win" as const },
  { match: "באיירן vs דורטמונד", tip: "GG", odds: "1.70", result: "loss" as const },
  { match: "PSG vs מרסיי", tip: "1", odds: "1.40", result: "win" as const },
  { match: "ווריורס vs נאגטס", tip: "מעל 220.5", odds: "1.85", result: "win" as const },
  { match: "אינטר vs יובנטוס", tip: "X", odds: "3.20", result: "loss" as const },
];

export default function StatsSection() {
  const wins = recentResults.filter((r) => r.result === "win").length;
  const total = recentResults.length;
  const winRate = Math.round((wins / total) * 100);

  return (
    <section id="stats" className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-center">
          <span className="shimmer-text">תוצאות אחרונות</span>
        </h3>

        {/* Win rate bar */}
        <div className="max-w-md mx-auto mb-8 glass rounded-2xl p-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-[var(--color-text-secondary)]">
              אחוז הצלחה אחרון
            </span>
            <span className="text-sm font-bold text-[var(--color-green)]">
              {winRate}%
            </span>
          </div>
          <div className="h-3 rounded-full bg-[var(--color-surface)] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-l from-[var(--color-green)] to-[var(--color-green-dark)] transition-all duration-1000"
              style={{ width: `${winRate}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-[var(--color-text-secondary)]">
            <span>
              {wins} \u2714 | {total - wins} \u2716
            </span>
            <span>מתוך {total} המלצות</span>
          </div>
        </div>

        {/* Results list */}
        <div className="max-w-2xl mx-auto space-y-2">
          {recentResults.map((item, i) => (
            <div
              key={i}
              className="glass rounded-xl p-3 flex items-center justify-between animate-fade-in-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    item.result === "win"
                      ? "bg-[var(--color-green)]/20 text-[var(--color-green)]"
                      : "bg-[var(--color-red)]/20 text-[var(--color-red)]"
                  }`}
                >
                  {item.result === "win" ? "\u2714" : "\u2716"}
                </span>
                <div>
                  <div className="text-sm font-medium">{item.match}</div>
                  <div className="text-xs text-[var(--color-text-secondary)]">
                    {item.tip}
                  </div>
                </div>
              </div>
              <span className="text-sm font-bold text-[var(--color-gold)]">
                {item.odds}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
