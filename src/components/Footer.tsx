"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-default)] bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-24">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-accent-secondary)] via-[var(--color-accent-primary)] to-[var(--color-accent-tertiary)] flex items-center justify-center shadow-lg shadow-[var(--color-accent-primary)]/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L14.9 8.6L22 9.2L16.6 14L18.2 21L12 17.2L5.8 21L7.4 14L2 9.2L9.1 8.6Z" fill="white" />
                </svg>
              </div>
              <span className="text-xl font-black text-gradient-gold">WinnerTips</span>
            </div>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-10">
              אתר המלצות ספורט מוביל בישראל. ניתוחים מקצועיים והמלצות יומיות לכל הליגות המובילות בעולם.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {[
                { label: "WhatsApp", href: "https://whatsapp.com/channel/0029VbBHha66xCSMBMTLas3d", icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                )},
                { label: "Instagram", href: "https://instagram.com/winnertips_il", icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
                )},
                { label: "Twitter", href: "https://x.com/winnertips_il", icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                )},
                { label: "Facebook", href: "https://facebook.com/winnertips.il", icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                )},
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-text-muted)] hover:border-[var(--color-accent-primary)]/40 hover:text-[var(--color-accent-secondary)] hover:bg-[var(--color-bg-elevated)] transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold text-[var(--color-text-white)] mb-8 flex items-center gap-3">
              <div className="w-1.5 h-5 rounded-full bg-[var(--color-accent-primary)]" />
              קישורים
            </h4>
            <ul className="space-y-5">
              {[
                { name: "משחקים חיים", href: "#live" },
                { name: "המלצות היום", href: "#tips" },
                { name: "חדשות ספורט", href: "#news" },
                { name: "סטטיסטיקות", href: "#stats" },
                { name: "ליגות", href: "#leagues" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-base text-[var(--color-text-muted)] hover:text-[var(--color-accent-secondary)] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h4 className="text-base font-bold text-[var(--color-text-white)] mb-8 flex items-center gap-3">
              <div className="w-1.5 h-5 rounded-full bg-[var(--color-accent-blue)]" />
              ענפי ספורט
            </h4>
            <ul className="space-y-5">
              {[
                { name: "כדורגל", color: "#4ecb5f" },
                { name: "כדורסל", color: "#60b4ff" },
                { name: "טניס", color: "#c9a0ff" },
                { name: "הוקי", color: "#45e0ef" },
                { name: "MMA / UFC", color: "#ff6b63" },
                { name: "בייסבול", color: "#f0a830" },
              ].map((sport) => (
                <li key={sport.name} className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: sport.color }} />
                  <span className="text-base text-[var(--color-text-muted)]">{sport.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold text-[var(--color-text-white)] mb-8 flex items-center gap-3">
              <div className="w-1.5 h-5 rounded-full bg-[var(--color-success)]" />
              צרו קשר
            </h4>
            <ul className="space-y-7">
              <li>
                <a href="mailto:info@winnertips.co.il" className="flex items-center gap-4 group/link">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-text-muted)] group-hover/link:border-[var(--color-accent-primary)]/30 group-hover/link:text-[var(--color-accent-primary)] transition-all">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[var(--color-text-muted)] mb-0.5">אימייל</div>
                    <div className="text-base text-[var(--color-text-secondary)] group-hover/link:text-[var(--color-accent-secondary)] transition-colors">info@winnertips.co.il</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://wa.me/+972534808349" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/link">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-text-muted)] group-hover/link:border-[#25D366]/30 group-hover/link:text-[#25D366] transition-all">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[var(--color-text-muted)] mb-0.5">ווצאפ - מיכאל</div>
                    <div className="text-base text-[var(--color-text-secondary)] group-hover/link:text-[#25D366] transition-colors">053-480-8349</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/winnertips_il" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/link">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-text-muted)] group-hover/link:border-[var(--color-accent-purple)]/30 group-hover/link:text-[var(--color-accent-purple)] transition-all">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5"/>
                      <circle cx="12" cy="12" r="5"/>
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[var(--color-text-muted)] mb-0.5">אינסטגרם</div>
                    <div className="text-base text-[var(--color-text-secondary)] group-hover/link:text-[var(--color-accent-purple)] transition-colors">@winnertips_il</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-20 p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)]">
          <p className="text-sm text-[var(--color-text-muted)] text-center leading-loose">
            <strong className="text-[var(--color-text-secondary)]">הצהרה:</strong> האתר מספק המלצות לצורכי בידור בלבד. אין לראות בתוכן האתר ייעוץ להימורים.
            ההימורים כרוכים בסיכון כספי. הימרו באחריות ורק מעל גיל 18.
            אם אתם חשים שיש לכם בעיית הימורים, פנו לקו הסיוע 1-800-363-363.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--color-text-dim)]">
          <span>&copy; {new Date().getFullYear()} WinnerTips. כל הזכויות שמורות.</span>
          <span>תוצרת ישראל</span>
        </div>
      </div>
    </footer>
  );
}
