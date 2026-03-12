"use client";

import { useState, useEffect } from "react";

function AnimatedCounter({ target, suffix, decimals = 0 }: { target: number; suffix: string; decimals?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
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

  const display = decimals > 0
    ? (count / 1000).toFixed(decimals) + "K"
    : count >= 1000
      ? (count / 1000).toFixed(1).replace(/\.0$/, "") + "K"
      : String(count);

  return <>{display}{count >= target ? suffix : ""}</>;
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-amber-500/8 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-500/6 to-transparent blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-b from-purple-500/4 to-transparent blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-16 md:pt-16 md:pb-20">
        {/* Live badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[var(--color-bg-card)]/80 border border-[var(--color-border-default)] backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="text-xs font-bold text-red-400">LIVE</span>
            </div>
            <span className="w-px h-4 bg-[var(--color-border-default)]" />
            <span className="text-sm text-[var(--color-text-secondary)]">
              {new Date().toLocaleDateString("he-IL", { weekday: "long", day: "numeric", month: "long" })}
            </span>
            <span className="text-xs font-bold text-[var(--color-accent-primary)]">
              12 המלצות חדשות
            </span>
          </div>
        </div>

        {/* Main Title - Centered */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-5">
            <span className="text-gradient-gold">המלצות ספורט מקצועיות</span>
            <br />
            <span className="text-white">לכל הליגות </span>
            <span className="text-gradient-blue">בעולם</span>
          </h1>
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-8 leading-relaxed">
            ניתוחים מקצועיים יומיים עם אחוזי הצלחה מוכחים.{" "}
            <span className="text-white font-semibold">כדורגל, כדורסל, טניס, הוקי</span>{" "}
            ועוד. הצטרפו לאלפי מנצחים!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a href="#tips" className="btn-primary text-sm px-7 py-3 flex items-center gap-2 rounded-xl">
              🔥 צפו בהמלצות היום
            </a>
            <a href="#news" className="flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-[var(--color-text-secondary)] bg-[var(--color-bg-card)] border border-[var(--color-border-default)] hover:border-[var(--color-border-accent)] hover:text-[var(--color-accent-secondary)] transition-all">
              📰 מגזין חדשות
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto mb-8">
          {[
            { label: "אחוז הצלחה", value: 78, suffix: "%", icon: "🎯", gradient: "from-amber-500/20 to-amber-600/5", text: "text-amber-400", border: "border-amber-500/20" },
            { label: "המלצות החודש", value: 1250, suffix: "+", icon: "📊", gradient: "from-emerald-500/20 to-emerald-600/5", text: "text-emerald-400", border: "border-emerald-500/20" },
            { label: "עוקבים", value: 15, suffix: "K+", icon: "👥", gradient: "from-blue-500/20 to-blue-600/5", text: "text-blue-400", border: "border-blue-500/20" },
            { label: "ליגות", value: 50, suffix: "+", icon: "🏆", gradient: "from-purple-500/20 to-purple-600/5", text: "text-purple-400", border: "border-purple-500/20" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`relative rounded-2xl p-5 text-center bg-gradient-to-br ${stat.gradient} border ${stat.border} backdrop-blur-sm animate-fade-in-up overflow-hidden`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className={`text-2xl md:text-3xl font-black ${stat.text} stat-number`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-[var(--color-text-muted)] font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Success streak */}
        <div className="max-w-lg mx-auto">
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-l from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <span className="text-2xl">🔥</span>
            <div className="flex-1">
              <div className="text-sm font-bold text-emerald-400">רצף הצלחה: 8/10</div>
              <div className="text-[11px] text-[var(--color-text-muted)]">80% הצלחה ביומיים אחרונים</div>
            </div>
            <div className="flex gap-0.5">
              {["✅","✅","✅","✅","✅","❌","✅","✅","❌","✅"].map((r, i) => (
                <span key={i} className="text-[11px]">{r}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Trending */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
          <span className="text-[10px] font-bold text-[var(--color-text-dim)] uppercase tracking-widest">
            Trending
          </span>
          {["מבאפה", "הולנד", "סלאח", "לברון", "ג'וקוביץ'", "פאלמר"].map((player) => (
            <span key={player} className="text-[11px] px-3 py-1 rounded-full bg-[var(--color-bg-card)]/60 border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] hover:border-amber-500/30 hover:text-amber-400 transition-all cursor-pointer">
              {player}
            </span>
          ))}
        </div>
      </div>

      <div className="section-divider" />
    </section>
  );
}
