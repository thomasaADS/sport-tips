"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent-secondary)] via-[var(--color-accent-primary)] to-[var(--color-accent-tertiary)] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L14.9 8.6L22 9.2L16.6 14L18.2 21L12 17.2L5.8 21L7.4 14L2 9.2L9.1 8.6Z" fill="#0a0b14" />
                </svg>
              </div>
              <span className="text-lg font-black text-gradient-gold">WinnerTips</span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
              אתר המלצות ספורט מוביל בישראל. ניתוחים מקצועיים והמלצות יומיות לכל הליגות המובילות בעולם.
            </p>
            {/* Social links */}
            <div className="flex gap-2">
              {[
                { icon: "📱", label: "WhatsApp" },
                { icon: "📸", label: "Instagram" },
                { icon: "🐦", label: "Twitter" },
                { icon: "📘", label: "Facebook" },
              ].map((social) => (
                <button
                  key={social.label}
                  className="w-10 h-10 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] flex items-center justify-center text-sm hover:border-[var(--color-border-accent)] hover:bg-[var(--color-bg-elevated)] transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-[var(--color-text-white)] mb-5 flex items-center gap-2">
              <div className="w-1 h-4 rounded-full bg-[var(--color-accent-primary)]" />
              קישורים
            </h4>
            <ul className="space-y-3">
              {[
                { name: "🔥 המלצות היום", href: "#tips" },
                { name: "📰 חדשות ספורט", href: "#news" },
                { name: "📊 סטטיסטיקות", href: "#stats" },
                { name: "🌍 ליגות", href: "#leagues" },
                { name: "📋 תנאי שימוש", href: "#" },
                { name: "🔒 מדיניות פרטיות", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-secondary)] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h4 className="text-sm font-bold text-[var(--color-text-white)] mb-5 flex items-center gap-2">
              <div className="w-1 h-4 rounded-full bg-[var(--color-accent-blue)]" />
              ענפי ספורט
            </h4>
            <ul className="space-y-3">
              {[
                "⚽ כדורגל", "🏀 כדורסל", "🎾 טניס", "🏒 הוקי", "🥊 MMA / UFC", "⚾ בייסבול",
              ].map((sport) => (
                <li key={sport}>
                  <span className="text-sm text-[var(--color-text-muted)]">{sport}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-[var(--color-text-white)] mb-5 flex items-center gap-2">
              <div className="w-1 h-4 rounded-full bg-[var(--color-success)]" />
              צרו קשר
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] flex items-center justify-center text-sm">
                  📧
                </div>
                <div>
                  <div className="text-[11px] text-[var(--color-text-muted)]">אימייל</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">info@winnertips.co.il</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] flex items-center justify-center text-sm">
                  📱
                </div>
                <div>
                  <div className="text-[11px] text-[var(--color-text-muted)]">ווצאפ</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">050-123-4567</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] flex items-center justify-center text-sm">
                  📸
                </div>
                <div>
                  <div className="text-[11px] text-[var(--color-text-muted)]">אינסטגרם</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">@winnertips_il</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-5 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)]">
          <p className="text-[11px] text-[var(--color-text-muted)] text-center leading-relaxed">
            ⚠️ <strong className="text-[var(--color-text-secondary)]">הצהרה:</strong> האתר מספק המלצות לצורכי בידור בלבד. אין לראות בתוכן האתר ייעוץ להימורים.
            ההימורים כרוכים בסיכון כספי. הימרו באחריות ורק מעל גיל 18.
            אם אתם חשים שיש לכם בעיית הימורים, פנו לקו הסיוע 1-800-363-363.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[var(--color-text-dim)]">
          <span>&copy; {new Date().getFullYear()} WinnerTips. כל הזכויות שמורות.</span>
          <span>🇮🇱 תוצרת ישראל</span>
        </div>
      </div>
    </footer>
  );
}
