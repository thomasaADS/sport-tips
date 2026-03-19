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
      {/* === COMPACT HERO WITH STADIUM BACKGROUND === */}
      <section
        className={`relative flex items-center justify-center overflow-hidden transition-all duration-700 ${
          entered ? "opacity-0 -translate-y-10 pointer-events-none h-0 min-h-0" : ""
        }`}
        style={{ maxHeight: entered ? 0 : 520 }}
      >
        {/* Stadium background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C1220]/80 via-[#0C1220]/70 to-[#0C1220]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
          {/* LIVE TIPS badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C1220]/60 border border-[var(--color-border-default)] backdrop-blur-sm mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E676] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E676]" />
            </span>
            <span className="text-xs font-bold text-[#00E676] tracking-wider">LIVE TIPS</span>
          </div>

          {/* Main headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-5 text-white animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            המלצות ספורט מקצועיות
          </h1>

          {/* Subtitle */}
          <p
            className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            ניתוחים מבוססי נתונים מ-50+ ליגות בעולם - כדורגל, כדורסל, טניס, הוקי ועוד. הכל בחינם, הכל בזמן אמת.
          </p>

          {/* Stats row */}
          <div
            className="flex items-center justify-center gap-4 md:gap-6 mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            {[
              { value: 78, suffix: "%", label: "הצלחה" },
              { value: 1250, suffix: "+", label: "ניתוחים" },
              { value: 50, suffix: "+", label: "ליגות" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center px-5 py-3 rounded-xl bg-[#0C1220]/50 backdrop-blur-sm border border-white/[0.08]"
              >
                <div className="text-xl md:text-2xl font-black text-white tabular-nums">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] text-[var(--color-text-muted)] font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={handleEnter}
              className="px-8 py-3 rounded-xl text-sm font-bold bg-[#00E676] hover:bg-[#00C853] text-[#0C1220] transition-all shadow-lg shadow-[#00E676]/20 hover:shadow-[#00E676]/30 hover:-translate-y-0.5 min-w-[180px] flex items-center justify-center gap-2"
            >
              <span>כניסה להמלצות</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </button>
            <a
              href="https://whatsapp.com/channel/0029VbBHha66xCSMBMTLas3d"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20BD5A] transition-all shadow-lg shadow-[#25D366]/15 min-w-[180px]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              קבוצת VIP בווצאפ
            </a>
          </div>
        </div>
      </section>

      {/* === HOW IT WORKS - 3 STEPS === */}
      <section className="relative py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-black text-[var(--color-text-white)] mb-2">
              איך זה עובד?
            </h2>
            <p className="text-sm text-[var(--color-text-muted)]">
              שלושה שלבים מנתונים גולמיים להמלצה מדויקת
            </p>
          </div>

          {/* 3 Steps - clean and minimal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                step: "01",
                title: "איסוף נתונים",
                desc: "סריקת סטטיסטיקות, פציעות, פורם ומזג אוויר מ-50+ ליגות.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20" />
                    <path d="M2 12h20" />
                  </svg>
                ),
                color: "#00E676",
              },
              {
                step: "02",
                title: "ניתוח AI",
                desc: "אלגוריתמים מתקדמים מזהים דפוסים ומחשבים הסתברויות.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 01-.437-.437C3 20.24 3 19.96 3 19.4V3" />
                    <path d="m7 14 4-4 4 4 6-6" />
                  </svg>
                ),
                color: "#2196F3",
              },
              {
                step: "03",
                title: "המלצה מדויקת",
                desc: "המלצה עם אחוז ביטחון, מקדם ופירוט הניתוח - הכל שקוף.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
                color: "#00E676",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: `${item.color}15`, color: item.color }}
                >
                  {item.icon}
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] mb-2" style={{ color: item.color }}>
                  STEP {item.step}
                </div>
                <h3 className="text-sm font-bold text-[var(--color-text-white)] mb-1.5">{item.title}</h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-divider mt-14" />
      </section>
    </>
  );
}
