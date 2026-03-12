"use client";

const leagues = [
  {
    name: "פרמייר ליג",
    country: "אנגליה",
    flag: "\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F",
    matches: 38,
    sport: "football",
  },
  {
    name: "לה ליגה",
    country: "ספרד",
    flag: "\uD83C\uDDEA\uD83C\uDDF8",
    matches: 32,
    sport: "football",
  },
  {
    name: "סרייה A",
    country: "איטליה",
    flag: "\uD83C\uDDEE\uD83C\uDDF9",
    matches: 28,
    sport: "football",
  },
  {
    name: "בונדסליגה",
    country: "גרמניה",
    flag: "\uD83C\uDDE9\uD83C\uDDEA",
    matches: 24,
    sport: "football",
  },
  {
    name: "ליג 1",
    country: "צרפת",
    flag: "\uD83C\uDDEB\uD83C\uDDF7",
    matches: 22,
    sport: "football",
  },
  {
    name: "ליגת האלופות",
    country: "אירופה",
    flag: "\uD83C\uDFC6",
    matches: 16,
    sport: "football",
  },
  {
    name: "NBA",
    country: "ארה\"ב",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    matches: 45,
    sport: "basketball",
  },
  {
    name: "יורוליג",
    country: "אירופה",
    flag: "\uD83C\uDDEA\uD83C\uDDFA",
    matches: 18,
    sport: "basketball",
  },
  {
    name: "ATP/WTA",
    country: "בינלאומי",
    flag: "\uD83C\uDFBE",
    matches: 30,
    sport: "tennis",
  },
  {
    name: "NHL",
    country: "ארה\"ב",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    matches: 35,
    sport: "hockey",
  },
  {
    name: "UFC/MMA",
    country: "בינלאומי",
    flag: "\uD83E\uDD4A",
    matches: 12,
    sport: "mma",
  },
  {
    name: "MLB",
    country: "ארה\"ב",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    matches: 40,
    sport: "baseball",
  },
  {
    name: "ליגת העל",
    country: "ישראל",
    flag: "\uD83C\uDDEE\uD83C\uDDF1",
    matches: 14,
    sport: "football",
  },
  {
    name: "ליגה פורטוגזית",
    country: "פורטוגל",
    flag: "\uD83C\uDDF5\uD83C\uDDF9",
    matches: 15,
    sport: "football",
  },
  {
    name: "ארדיוויזי",
    country: "הולנד",
    flag: "\uD83C\uDDF3\uD83C\uDDF1",
    matches: 18,
    sport: "football",
  },
  {
    name: "J-League",
    country: "יפן",
    flag: "\uD83C\uDDEF\uD83C\uDDF5",
    matches: 10,
    sport: "football",
  },
];

export default function LeaguesSection() {
  return (
    <section id="leagues" className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-center">
          <span className="shimmer-text">ליגות מכוסות</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3">
          {leagues.map((league) => (
            <div
              key={league.name}
              className="glass rounded-xl p-4 text-center tip-card cursor-pointer group"
            >
              <div className="text-3xl mb-2">{league.flag}</div>
              <div className="text-sm font-bold text-white group-hover:text-[var(--color-gold)] transition-colors">
                {league.name}
              </div>
              <div className="text-xs text-[var(--color-text-secondary)]">
                {league.country}
              </div>
              <div className="mt-2 text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/30 text-[var(--color-gold)] inline-block">
                {league.matches} משחקים
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
