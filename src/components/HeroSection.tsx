"use client";

import { useState, useEffect } from "react";

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
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

  const display = count >= 1000
    ? (count / 1000).toFixed(1).replace(/\.0$/, "") + "K"
    : String(count);

  return <>{display}{count >= target ? suffix : ""}</>;
}

export default function HeroSection() {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);
    setTimeout(() => {
      document.querySelector("#live")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* === FULL SCREEN LANDING === */}
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-700 ${entered ? "opacity-0 -translate-y-10 pointer-events-none h-0 min-h-0" : ""}`}>
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 grid-pattern opacity-10" />

          {/* Glowing orbs */}
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-accent-primary)]/5 blur-[150px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[var(--color-accent-blue)]/5 blur-[120px]" />
          <div className="absolute top-[10%] left-[50%] w-[300px] h-[300px] rounded-full bg-[#f59e0b]/4 blur-[100px]" />

          {/* === LARGE TROPHY SVG - center background === */}
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[650px] md:h-[650px] opacity-[0.03]" viewBox="0 0 200 200" fill="none">
            <path d="M100 15L60 15C60 15 20 15 20 50C20 85 55 85 55 85L55 95C55 95 35 100 35 120L35 130L75 130L75 140C75 140 60 145 60 160L60 175L140 175L140 160C140 145 125 140 125 140L125 130L165 130L165 120C165 100 145 95 145 95L145 85C145 85 180 85 180 50C180 15 140 15 140 15L100 15Z" fill="white" />
            <circle cx="100" cy="55" r="20" fill="white" opacity="0.5" />
            <path d="M90 50L100 35L110 50L105 50L105 65L95 65L95 50Z" fill="white" opacity="0.3" />
          </svg>

          {/* === SPORT ICONS floating around === */}
          {/* Football */}
          <svg className="absolute top-[12%] right-[8%] w-16 h-16 opacity-[0.06] animate-float" viewBox="0 0 100 100" fill="white" style={{ animationDelay: "0s" }}>
            <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="3" />
            <path d="M50 5 L60 25 L80 30 L68 48 L72 70 L50 60 L28 70 L32 48 L20 30 L40 25 Z" fill="none" stroke="white" strokeWidth="2" />
          </svg>

          {/* Basketball */}
          <svg className="absolute top-[18%] left-[6%] w-14 h-14 opacity-[0.05] animate-float" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="3" style={{ animationDelay: "1.5s" }}>
            <circle cx="50" cy="50" r="45" />
            <path d="M5 50 Q50 20 95 50" />
            <path d="M5 50 Q50 80 95 50" />
            <line x1="50" y1="5" x2="50" y2="95" />
          </svg>

          {/* Tennis racket */}
          <svg className="absolute bottom-[20%] right-[6%] w-12 h-12 opacity-[0.05] animate-float" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="3" style={{ animationDelay: "2.5s" }}>
            <ellipse cx="55" cy="35" rx="28" ry="32" />
            <line x1="38" y1="60" x2="15" y2="90" strokeWidth="5" strokeLinecap="round" />
            <line x1="35" y1="20" x2="75" y2="20" />
            <line x1="35" y1="35" x2="75" y2="35" />
            <line x1="35" y1="50" x2="75" y2="50" />
            <line x1="45" y1="5" x2="45" y2="62" />
            <line x1="65" y1="5" x2="65" y2="62" />
          </svg>

          {/* Hockey stick */}
          <svg className="absolute bottom-[25%] left-[10%] w-14 h-14 opacity-[0.04] animate-float" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="3" style={{ animationDelay: "0.8s" }}>
            <path d="M70 10 L30 70 Q20 85 10 90 L25 90 Q35 85 45 70 L85 10 Z" strokeLinejoin="round" />
          </svg>

          {/* Rising chart / success graph */}
          <svg className="absolute top-[35%] right-[4%] w-24 h-16 opacity-[0.06] animate-pulse" viewBox="0 0 120 60" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <polyline points="5,50 20,45 35,48 50,35 65,30 80,15 95,20 110,5" />
            <circle cx="110" cy="5" r="3" fill="#00d4aa" stroke="none" opacity="0.6" />
          </svg>

          {/* Data nodes / network left */}
          <svg className="absolute top-[55%] left-[3%] w-20 h-20 opacity-[0.04]" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="1.5">
            <circle cx="50" cy="20" r="4" fill="white" />
            <circle cx="20" cy="60" r="4" fill="white" />
            <circle cx="80" cy="60" r="4" fill="white" />
            <circle cx="50" cy="85" r="4" fill="white" />
            <line x1="50" y1="20" x2="20" y2="60" />
            <line x1="50" y1="20" x2="80" y2="60" />
            <line x1="20" y1="60" x2="50" y2="85" />
            <line x1="80" y1="60" x2="50" y2="85" />
            <line x1="20" y1="60" x2="80" y2="60" />
          </svg>

          {/* Decorative rings */}
          <div className="absolute top-[8%] left-[35%] w-32 h-32 rounded-full border border-[var(--color-accent-primary)]/[0.04] animate-pulse" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-[15%] right-[25%] w-48 h-48 rounded-full border border-[var(--color-accent-blue)]/[0.04]" />
          <div className="absolute top-[45%] right-[20%] w-20 h-20 rounded-full border border-[#f59e0b]/[0.05] animate-pulse" style={{ animationDelay: "1.5s" }} />

          {/* Diagonal accent lines */}
          <div className="absolute top-0 right-[20%] w-px h-[200px] bg-gradient-to-b from-transparent via-[var(--color-accent-primary)]/[0.06] to-transparent rotate-[25deg]" />
          <div className="absolute bottom-0 left-[25%] w-px h-[180px] bg-gradient-to-t from-transparent via-[var(--color-accent-blue)]/[0.06] to-transparent -rotate-[20deg]" />

          {/* Star accents */}
          <svg className="absolute top-[22%] right-[30%] w-4 h-4 opacity-[0.08] animate-pulse" viewBox="0 0 24 24" fill="white" style={{ animationDelay: "2s" }}>
            <path d="M12 2L14.09 8.26L20.18 8.26L15.05 12.14L17.18 18.38L12 14.74L6.82 18.38L8.95 12.14L3.82 8.26L9.91 8.26Z" />
          </svg>
          <svg className="absolute bottom-[30%] left-[22%] w-3 h-3 opacity-[0.06] animate-pulse" viewBox="0 0 24 24" fill="#f59e0b" style={{ animationDelay: "0.7s" }}>
            <path d="M12 2L14.09 8.26L20.18 8.26L15.05 12.14L17.18 18.38L12 14.74L6.82 18.38L8.95 12.14L3.82 8.26L9.91 8.26Z" />
          </svg>
          <svg className="absolute top-[65%] right-[35%] w-2.5 h-2.5 opacity-[0.07]" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L14.09 8.26L20.18 8.26L15.05 12.14L17.18 18.38L12 14.74L6.82 18.38L8.95 12.14L3.82 8.26L9.91 8.26Z" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          {/* AI badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[var(--color-bg-card)]/60 border border-[var(--color-border-default)] backdrop-blur-sm mb-12 animate-fade-in-up">
            <div className="w-2 h-2 rounded-full bg-[var(--color-accent-primary)] animate-pulse" />
            <span className="text-xs font-semibold text-[var(--color-accent-primary)]">AI POWERED</span>
            <span className="w-px h-3 bg-[var(--color-border-default)]" />
            <span className="text-xs text-[var(--color-text-secondary)]">
              {new Date().toLocaleDateString("he-IL", { weekday: "long", day: "numeric", month: "long" })}
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-white">ניתוח ספורט</span>
            <br />
            <span className="text-gradient-gold">מבוסס בינה מלאכותית</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-6 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            המערכת שלנו סורקת אלפי משחקים, מנתחת סטטיסטיקות מ-50+ ליגות ומייצרת המלצות עם אחוזי הצלחה מוכחים.
          </p>

          <p className="text-sm text-[var(--color-text-muted)] max-w-lg mx-auto mb-14 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            כדורגל, כדורסל, טניס, הוקי, UFC ועוד - הכל בחינם, הכל בזמן אמת.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <button
              onClick={handleEnter}
              className="btn-primary px-8 py-3.5 flex items-center justify-center gap-2.5 rounded-2xl text-sm font-bold shadow-xl shadow-[var(--color-accent-primary)]/15 min-w-[200px]"
            >
              <span>כניסה להמלצות היום</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </button>
            <a
              href="https://whatsapp.com/channel/0029VbBHha66xCSMBMTLas3d"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl text-sm font-bold text-white bg-[#25D366]/90 hover:bg-[#25D366] transition-all shadow-lg shadow-[#25D366]/15 min-w-[200px]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              קבוצת VIP בווצאפ
            </a>
          </div>

          {/* Stats row - minimal */}
          <div className="flex items-center justify-center gap-8 md:gap-16 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            {[
              { value: 78, suffix: "%", label: "הצלחה" },
              { value: 1250, suffix: "+", label: "ניתוחים" },
              { value: 50, suffix: "+", label: "ליגות" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-white tabular-nums">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[11px] text-[var(--color-text-muted)] font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
            <div className="w-5 h-8 rounded-full border border-[var(--color-border-subtle)] flex items-start justify-center p-1.5">
              <span className="w-1 h-2 rounded-full bg-[var(--color-accent-primary)] animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* === TRANSITION SECTION (always visible after scroll) === */}
      <section className="relative py-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* AI analysis visual intro */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent-primary)]/10 border border-[var(--color-accent-primary)]/20 mb-6">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-primary)" strokeWidth="2" strokeLinecap="round">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
              <span className="text-xs font-semibold text-[var(--color-accent-primary)]">Yotam AI - מערכת הניתוח שלנו</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              איך המערכת עובדת?
            </h2>
            <p className="text-sm text-[var(--color-text-muted)] max-w-lg mx-auto">
              שלושה שלבים פשוטים מנתונים גולמיים להמלצה מדויקת
            </p>
          </div>

          {/* 3 Steps - clean horizontal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-20">
            {[
              {
                step: "01",
                title: "איסוף נתונים",
                desc: "המערכת סורקת נתונים מ-50+ ליגות ברחבי העולם - סטטיסטיקות, פציעות, פורם, מזג אוויר ועוד.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20" />
                    <path d="M2 12h20" />
                  </svg>
                ),
                color: "var(--color-accent-primary)",
              },
              {
                step: "02",
                title: "ניתוח AI",
                desc: "אלגוריתמים מתקדמים מעבדים את הנתונים, מזהים דפוסים ומחשבים הסתברויות.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 01-.437-.437C3 20.24 3 19.96 3 19.4V3" />
                    <path d="m7 14 4-4 4 4 6-6" />
                  </svg>
                ),
                color: "var(--color-accent-blue)",
              },
              {
                step: "03",
                title: "המלצה מדויקת",
                desc: "מקבלים המלצה עם אחוז ביטחון, מקדם ופירוט הניתוח - הכל שקוף.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
                color: "var(--color-success)",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className="relative text-center p-8 rounded-2xl bg-[var(--color-bg-card)]/50 border border-[var(--color-border-subtle)] hover:border-[var(--color-border-accent)] transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-5 flex items-center justify-center"
                  style={{ background: `color-mix(in srgb, ${item.color} 15%, transparent)`, color: item.color }}
                >
                  {item.icon}
                </div>
                <div className="text-[10px] font-bold tracking-[0.3em] mb-3" style={{ color: item.color }}>
                  STEP {item.step}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Quick stats bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 py-6 px-8 rounded-2xl bg-[var(--color-bg-card)]/30 border border-[var(--color-border-subtle)]">
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[true,true,true,true,true,false,true,true,false,true].map((win, i) => (
                  <span key={i} className={`w-2 h-2 rounded-full ${win ? "bg-amber-400" : "bg-red-400"}`} />
                ))}
              </div>
              <span className="text-xs text-[var(--color-text-muted)]">רצף: <span className="text-amber-400 font-bold">8/10</span></span>
            </div>
            <span className="w-px h-5 bg-[var(--color-border-subtle)] hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span className="text-xs text-[var(--color-text-muted)]"><span className="text-red-400 font-bold">4</span> משחקים חיים</span>
            </div>
            <span className="w-px h-5 bg-[var(--color-border-subtle)] hidden md:block" />
            <span className="text-xs text-[var(--color-text-muted)]"><span className="text-[var(--color-accent-primary)] font-bold">12</span> המלצות חדשות היום</span>
          </div>
        </div>

        <div className="section-divider mt-16" />
      </section>
    </>
  );
}
