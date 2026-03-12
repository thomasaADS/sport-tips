"use client";

export default function HeroSection() {
  return (
    <section className="relative py-16 px-4 text-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[var(--color-gold)] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[var(--color-accent)] rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-surface-light)] border border-[var(--color-border)] mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--color-green)] animate-pulse"></span>
          <span className="text-sm text-[var(--color-text-secondary)]">
            {new Date().toLocaleDateString("he-IL", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            | המלצות חדשות זמינות
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          <span className="shimmer-text">המלצות ספורט</span>
          <br />
          <span className="text-white">מקצועיות לכל הליגות</span>
        </h2>

        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-8">
          ניתוח מעמיק של משחקים מכל הליגות המובילות בעולם. כדורגל, כדורסל,
          טניס, הוקי ועוד. הצטרפו לאלפי מנצחים שכבר סומכים עלינו!
        </p>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-[var(--color-gold)]">
              78%
            </div>
            <div className="text-sm text-[var(--color-text-secondary)]">
              אחוז הצלחה
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-[var(--color-green)]">
              1,250+
            </div>
            <div className="text-sm text-[var(--color-text-secondary)]">
              המלצות החודש
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-white">
              15K+
            </div>
            <div className="text-sm text-[var(--color-text-secondary)]">
              עוקבים פעילים
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-[var(--color-gold)]">
              50+
            </div>
            <div className="text-sm text-[var(--color-text-secondary)]">
              ליגות מכוסות
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
