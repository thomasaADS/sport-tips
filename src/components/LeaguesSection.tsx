"use client";

const leagues = [
  { name: "פרמייר ליג", country: "אנגליה", abbr: "PL", matches: 38, color: "#3d195b" },
  { name: "לה ליגה", country: "ספרד", abbr: "LL", matches: 32, color: "#ee8707" },
  { name: "סרייה A", country: "איטליה", abbr: "SA", matches: 28, color: "#024494" },
  { name: "בונדסליגה", country: "גרמניה", abbr: "BL", matches: 24, color: "#d20515" },
  { name: "ליג 1", country: "צרפת", abbr: "L1", matches: 22, color: "#091c3e" },
  { name: "ליגת האלופות", country: "UEFA", abbr: "UCL", matches: 16, color: "#00003c" },
  { name: "NBA", country: 'ארה"ב', abbr: "NBA", matches: 45, color: "#17408b" },
  { name: "יורוליג", country: "אירופה", abbr: "EL", matches: 18, color: "#f68e1e" },
  { name: "ATP / WTA", country: "בינלאומי", abbr: "ATP", matches: 30, color: "#4e8542" },
  { name: "NHL", country: 'ארה"ב', abbr: "NHL", matches: 35, color: "#1a1a2e" },
  { name: "UFC", country: "בינלאומי", abbr: "UFC", matches: 12, color: "#d20a11" },
  { name: "MLB", country: 'ארה"ב', abbr: "MLB", matches: 40, color: "#002d72" },
  { name: "ליגת העל", country: "ישראל", abbr: "ISR", matches: 14, color: "#0038b8" },
  { name: "ליגה פורטוגזית", country: "פורטוגל", abbr: "LP", matches: 15, color: "#006600" },
  { name: "ארדיוויזי", country: "הולנד", abbr: "ERD", matches: 18, color: "#ed7203" },
  { name: "MLS", country: 'ארה"ב', abbr: "MLS", matches: 20, color: "#030f28" },
];

export default function LeaguesSection() {
  return (
    <section id="leagues" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[var(--color-accent-primary)] to-[var(--color-success)]" />
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-text-white)]">
              ליגות מכוסות
            </h2>
            <p className="text-sm text-[var(--color-text-muted)]">
              {leagues.length}+ ליגות מכל העולם / כיסוי מלא
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {leagues.map((league, i) => (
            <div
              key={league.name}
              className="card p-0 overflow-hidden group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${i * 0.03}s` }}
            >
              {/* Color top bar */}
              <div
                className="h-1"
                style={{ background: league.color }}
              />
              <div className="p-5 text-center">
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center text-sm font-black text-white group-hover:scale-105 transition-transform duration-300"
                  style={{ background: league.color }}
                >
                  {league.abbr}
                </div>
                <div className="text-sm font-bold text-[var(--color-text-white)] group-hover:text-[var(--color-accent-secondary)] transition-colors">
                  {league.name}
                </div>
                <div className="text-[11px] text-[var(--color-text-muted)] mb-3">
                  {league.country}
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--color-bg-elevated)] text-[10px] font-semibold text-[var(--color-text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)]" />
                  {league.matches} משחקים
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
