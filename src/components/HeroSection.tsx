"use client";

import { useState, useEffect } from "react";

const heroStats = [
  { label: "אחוז הצלחה", value: 78, suffix: "%", color: "var(--color-accent-primary)" },
  { label: "המלצות החודש", value: 1250, suffix: "+", color: "var(--color-success)" },
  { label: "עוקבים פעילים", value: 15000, suffix: "+", color: "var(--color-accent-blue)" },
  { label: "ליגות מכוסות", value: 50, suffix: "+", color: "var(--color-accent-purple)" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="stat-number">
      {count >= 1000
        ? `${(count / 1000).toFixed(count >= target ? (target >= 1000 ? 0 : 0) : 1)}K`
        : count}
      {count >= target ? suffix : ""}
    </span>
  );
}

const featuredPlayers = [
  "מבאפה", "הולנד", "ויניסיוס", "סלאח", "לברון", "ג'וקוביץ'", "מסי",
  "פאלמר", "בלינגהאם", "סאקה", "ריס ג'יימס", "קארי",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden hero-pattern">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--color-accent-primary)] opacity-[0.04] blur-[100px]" />
        <div className="absolute top-1/2 -left-48 w-[400px] h-[400px] rounded-full bg-[var(--color-accent-blue)] opacity-[0.03] blur-[100px]" />
        <div className="absolute -bottom-32 right-1/3 w-[300px] h-[300px] rounded-full bg-[var(--color-accent-purple)] opacity-[0.04] blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            {/* Live badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border-default)] mb-8">
              <div className="live-badge text-xs font-bold text-[var(--color-danger)] pr-4">
                LIVE
              </div>
              <div className="w-px h-4 bg-[var(--color-border-default)]" />
              <span className="text-sm text-[var(--color-text-secondary)]">
                {new Date().toLocaleDateString("he-IL", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </span>
              <span className="text-xs text-[var(--color-accent-primary)] font-bold">
                • 12 המלצות חדשות
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
              <span className="text-gradient-gold">המלצות ספורט</span>
              <br />
              <span className="text-[var(--color-text-white)]">ברמה</span>{" "}
              <span className="text-gradient-blue">עולמית</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-lg mb-8 leading-relaxed">
              ניתוחים מקצועיים יומיים לכל הליגות המובילות בעולם.
              <span className="text-[var(--color-text-white)] font-medium">
                {" "}כדורגל, כדורסל, טניס, הוקי{" "}
              </span>
              ועוד. הצטרפו לאלפי מנצחים!
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#tips" className="btn-primary text-base px-8 py-3.5 flex items-center gap-2">
                <span>צפו בהמלצות היום</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
              </a>
              <a
                href="#news"
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-[var(--color-text-secondary)] bg-[var(--color-bg-card)] border border-[var(--color-border-default)] hover:border-[var(--color-border-accent)] hover:text-[var(--color-accent-secondary)] transition-all duration-300"
              >
                <span>📰</span>
                <span>חדשות ספורט</span>
              </a>
            </div>

            {/* Trending players */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider">
                Trending:
              </span>
              {featuredPlayers.slice(0, 6).map((player) => (
                <span
                  key={player}
                  className="text-xs px-3 py-1 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-accent)] hover:text-[var(--color-accent-secondary)] transition-all cursor-pointer"
                >
                  {player}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Stats Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`card p-6 text-center animate-fade-in-up`}
                style={{ animationDelay: `${i * 0.1 + 0.3}s` }}
              >
                <div
                  className="text-3xl md:text-4xl font-black mb-1"
                  style={{ color: stat.color }}
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-[var(--color-text-muted)] font-medium">
                  {stat.label}
                </div>
                {/* Decorative corner */}
                <div
                  className="absolute top-0 left-0 w-16 h-16 opacity-10 rounded-bl-full"
                  style={{ background: stat.color }}
                />
              </div>
            ))}

            {/* Bonus card - success streak */}
            <div className="col-span-2 card-accent p-5 flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-success)] to-emerald-600 flex items-center justify-center text-2xl flex-shrink-0">
                🔥
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-[var(--color-success)]">
                  רצף הצלחה: 8 מתוך 10
                </div>
                <div className="text-xs text-[var(--color-text-muted)]">
                  אחוז הצלחה של 80% ביומיים האחרונים!
                </div>
              </div>
              <div className="flex -space-x-1 space-x-reverse">
                {["✅","✅","✅","✅","✅","❌","✅","✅","❌","✅"].map((r, i) => (
                  <span key={i} className="text-xs">{r}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="section-divider" />
    </section>
  );
}
