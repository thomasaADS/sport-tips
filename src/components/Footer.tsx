"use client";

export default function Footer() {
  return (
    <footer id="about" className="border-t border-[var(--color-border)] mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-dark)] flex items-center justify-center text-lg font-bold text-[var(--color-primary)]">
                W
              </div>
              <span className="text-xl font-bold shimmer-text">WinnerTips</span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              WinnerTips הוא אתר המלצות ספורט מוביל בישראל. אנחנו מספקים
              ניתוחים מקצועיים והמלצות יומיות לכל הליגות המובילות בעולם עם אחוזי
              הצלחה מוכחים.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4 text-[var(--color-gold)]">
              קישורים מהירים
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#tips"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors"
                >
                  המלצות היום
                </a>
              </li>
              <li>
                <a
                  href="#stats"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors"
                >
                  סטטיסטיקות
                </a>
              </li>
              <li>
                <a
                  href="#leagues"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors"
                >
                  ליגות
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors"
                >
                  תנאי שימוש
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors"
                >
                  מדיניות פרטיות
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-[var(--color-gold)]">צרו קשר</h4>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li className="flex items-center gap-2">
                <span>\uD83D\uDCE7</span>
                <span>info@winnertips.co.il</span>
              </li>
              <li className="flex items-center gap-2">
                <span>\uD83D\uDCF1</span>
                <span>ווצאפ: 050-123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <span>\uD83D\uDCF8</span>
                <span>@winnertips_il</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
          <p className="text-xs text-[var(--color-text-secondary)] text-center leading-relaxed">
            \u26A0\uFE0F <strong>הצהרה:</strong> האתר מספק המלצות לצורכי בידור
            בלבד. אין לראות בתוכן האתר ייעוץ להימורים. ההימורים כרוכים בסיכון
            כספי. הימרו באחריות ורק מעל גיל 18. אם אתם חשים שיש לכם בעיית
            הימורים, פנו לקו הסיוע 1-800-363-363.
          </p>
        </div>

        <div className="mt-4 text-center text-xs text-[var(--color-text-secondary)]">
          &copy; {new Date().getFullYear()} WinnerTips. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}
