"use client";

const recentResults = [
  { match: "ריאל מדריד vs ברצלונה", league: "לה ליגה", tip: "1X", odds: "1.65", result: "win" as const, sportColor: "#10b981", sportLabel: "כדורגל" },
  { match: "לייקרס vs סלטיקס", league: "NBA", tip: "תחתון +5.5", odds: "1.90", result: "win" as const, sportColor: "#3b82f6", sportLabel: "כדורסל" },
  { match: "ליברפול vs מנצ'סטר סיטי", league: "פרמייר ליג", tip: "מעל 2.5", odds: "1.75", result: "win" as const, sportColor: "#10b981", sportLabel: "כדורגל" },
  { match: "ג'וקוביץ' vs סינר", league: "ATP", tip: "1", odds: "1.55", result: "win" as const, sportColor: "#8b5cf6", sportLabel: "טניס" },
  { match: "באיירן vs דורטמונד", league: "בונדסליגה", tip: "GG", odds: "1.70", result: "loss" as const, sportColor: "#10b981", sportLabel: "כדורגל" },
  { match: "PSG vs מרסיי", league: "ליג 1", tip: "1", odds: "1.40", result: "win" as const, sportColor: "#10b981", sportLabel: "כדורגל" },
  { match: "ווריורס vs נאגטס", league: "NBA", tip: "מעל 220.5", odds: "1.85", result: "win" as const, sportColor: "#3b82f6", sportLabel: "כדורסל" },
  { match: "אינטר vs יובנטוס", league: "סרייה A", tip: "X", odds: "3.20", result: "loss" as const, sportColor: "#10b981", sportLabel: "כדורגל" },
  { match: "מכבי ת\"א vs אולימפיאקוס", league: "יורוליג", tip: "מכבי +3.5", odds: "1.80", result: "win" as const, sportColor: "#3b82f6", sportLabel: "כדורסל" },
  { match: "ריינג'רס vs פנגווינס", league: "NHL", tip: "מעל 5.5", odds: "1.90", result: "win" as const, sportColor: "#06b6d4", sportLabel: "הוקי" },
];

const sportStats = [
  { sport: "כדורגל", wins: 156, total: 205, color: "var(--color-success)" },
  { sport: "כדורסל", wins: 89, total: 108, color: "var(--color-accent-blue)" },
  { sport: "טניס", wins: 62, total: 84, color: "var(--color-accent-purple)" },
  { sport: "הוקי", wins: 38, total: 52, color: "var(--color-accent-cyan)" },
];

export default function StatsSection() {
  const wins = recentResults.filter((r) => r.result === "win").length;
  const total = recentResults.length;
  const winRate = Math.round((wins / total) * 100);

  return (
    <section id="stats" className="py-20 px-4" aria-label="סטטיסטיקות ותוצאות המלצות">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[var(--color-accent-blue)] to-[var(--color-accent-purple)]" />
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-text-white)]">
              סטטיסטיקות ותוצאות
            </h2>
            <p className="text-sm text-[var(--color-text-muted)]">
              ביצועים מוכחים / שקיפות מלאה
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sport breakdown cards */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-5">
              פירוט לפי ענף
            </h3>
            {sportStats.map((stat) => {
              const pct = Math.round((stat.wins / stat.total) * 100);
              return (
                <div key={stat.sport} className="card p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ background: stat.color }}
                      />
                      <span className="text-sm font-bold text-[var(--color-text-white)]">
                        {stat.sport}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[var(--color-text-muted)]">
                        {stat.wins}/{stat.total}
                      </span>
                      <span
                        className="text-sm font-black"
                        style={{ color: stat.color }}
                      >
                        {pct}%
                      </span>
                    </div>
                  </div>
                  <div className="confidence-meter">
                    <div
                      className="confidence-meter-fill"
                      style={{
                        width: `${pct}%`,
                        background: stat.color,
                      }}
                    />
                  </div>
                </div>
              );
            })}

            {/* Overall card */}
            <div className="card-accent p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-[var(--color-text-white)]">
                  אחוז הצלחה כללי
                </span>
                <span className="text-2xl font-black text-[var(--color-accent-primary)]">
                  {winRate}%
                </span>
              </div>
              <div className="confidence-meter" style={{ height: "6px" }}>
                <div
                  className="confidence-meter-fill"
                  style={{
                    width: `${winRate}%`,
                    height: "100%",
                    background: "linear-gradient(90deg, var(--color-accent-tertiary), var(--color-accent-primary), var(--color-accent-secondary))",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Recent results list */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-5">
              תוצאות אחרונות
            </h3>
            <div className="space-y-2">
              {recentResults.map((item, i) => (
                <div
                  key={i}
                  className="card p-0 overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.04}s` }}
                >
                  <div className="flex items-center">
                    {/* Result indicator stripe */}
                    <div
                      className="w-1 self-stretch flex-shrink-0"
                      style={{
                        background:
                          item.result === "win"
                            ? "var(--color-success)"
                            : "var(--color-danger)",
                      }}
                    />

                    <div className="flex items-center justify-between flex-1 px-5 py-3.5">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <span
                          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ background: item.sportColor }}
                        />
                        <div className="min-w-0">
                          <div className="text-sm font-bold text-[var(--color-text-white)] truncate">
                            {item.match}
                          </div>
                          <div className="text-[10px] text-[var(--color-text-muted)]">
                            {item.league} / {item.tip}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="odds-badge text-sm">{item.odds}</span>
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                            item.result === "win"
                              ? "bg-[var(--color-success-bg)] text-[var(--color-success)]"
                              : "bg-[var(--color-danger-bg)] text-[var(--color-danger)]"
                          }`}
                        >
                          {item.result === "win" ? "V" : "X"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
}
