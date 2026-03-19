"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-primary)]">
      {/* Main footer content */}
      <div className="border-t border-[var(--color-border-default)]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-24 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12 lg:gap-x-20">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-accent-secondary)] via-[var(--color-accent-primary)] to-[var(--color-accent-tertiary)] flex items-center justify-center shadow-lg shadow-[var(--color-accent-primary)]/20">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L14.9 8.6L22 9.2L16.6 14L18.2 21L12 17.2L5.8 21L7.4 14L2 9.2L9.1 8.6Z" fill="white" />
                  </svg>
                </div>
                <span className="text-xl font-black text-gradient-gold">WinnerTips</span>
              </div>
              <p className="text-[15px] text-[var(--color-text-secondary)] leading-[1.8] mb-10">
                מגזין חדשות עצמאי המספק מידע, סקירות וניתוחים בתחום הימורי הספורט. אנו לא מספקים שירותי הימורים.
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
                    className="w-11 h-11 rounded-full bg-[var(--color-bg-elevated)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-accent-primary)] transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Sections */}
            <div>
              <h4 className="text-[15px] font-bold text-[var(--color-text-white)] mb-8">
                מדורים
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
                      className="text-[15px] text-[var(--color-text-muted)] hover:text-[var(--color-text-white)] transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sports */}
            <div>
              <h4 className="text-[15px] font-bold text-[var(--color-text-white)] mb-8">
                נושאים
              </h4>
              <ul className="space-y-5">
                {[
                  "ליגת העל",
                  "פרמייר ליג",
                  "ליגת האלופות",
                  "NBA",
                  "UFC / MMA",
                  "טניס",
                ].map((name) => (
                  <li key={name}>
                    <span className="text-[15px] text-[var(--color-text-muted)] hover:text-[var(--color-text-white)] transition-colors cursor-pointer">
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="text-[15px] font-bold text-[var(--color-text-white)] mb-8">
                אודות
              </h4>
              <ul className="space-y-5">
                <li>
                  <Link
                    href="/terms"
                    className="text-[15px] text-[var(--color-text-muted)] hover:text-[var(--color-text-white)] transition-colors"
                  >
                    תקנון
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-[15px] text-[var(--color-text-muted)] hover:text-[var(--color-text-white)] transition-colors"
                  >
                    תמיכה
                  </Link>
                </li>
                <li>
                  <a href="mailto:info@winnertips.co.il" className="text-[15px] text-[var(--color-text-muted)] hover:text-[var(--color-text-white)] transition-colors">
                    info@winnertips.co.il
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/+972534808349" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[var(--color-text-muted)] hover:text-[var(--color-text-white)] transition-colors">
                    ווצאפ: 053-480-8349
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/winnertips_il" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[var(--color-text-muted)] hover:text-[var(--color-text-white)] transition-colors">
                    @winnertips_il
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer bar */}
      <div className="border-t border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-8">
          <p className="text-sm text-[var(--color-text-muted)] text-center leading-relaxed">
            <strong className="text-[var(--color-text-secondary)]">הבהרה:</strong>{" "}
            WinnerTips הוא מגזין חדשות ומידע בלבד. האתר אינו מספק שירותי הימורים ואינו פלטפורמת הימורים. הימורים מותרים לבני 18+ בלבד. קו סיוע: 1-800-363-363.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[var(--color-border-subtle)]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-6">
          <p className="text-sm text-[var(--color-text-dim)] text-center">
            &copy; {new Date().getFullYear()} WinnerTips. מגזין חדשות עצמאי. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
