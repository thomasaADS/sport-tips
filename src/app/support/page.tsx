"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "מה זה WinnerTips?",
    answer:
      "WinnerTips היא מערכת ניתוח ספורט מבוססת בינה מלאכותית שמספקת סקירות, ניתוחים סטטיסטיים והמלצות יומיות לכדורגל, כדורסל, טניס, הוקי, UFC ועוד מ-50+ ליגות בעולם. האתר פועל כמגזין חדשות ומידע עצמאי.",
  },
  {
    question: "האם השירות בחינם?",
    answer:
      "כן, כל ההמלצות, הניתוחים, התוצאות החיות והחדשות באתר זמינים בחינם לכל הגולשים. ניתן גם להצטרף לערוץ הווצאפ שלנו ללא תשלום ולקבל עדכונים ישירות לנייד.",
  },
  {
    question: "איך מצטרפים לערוץ הווצאפ?",
    answer:
      "ניתן להצטרף לערוץ ה-VIP שלנו בווצאפ בלחיצה על כפתור הווצאפ באתר או ישירות דרך הלינק. הערוץ כולל המלצות בזמן אמת, ניתוחים בלעדיים ועדכוני תוצאות חיים.",
  },
  {
    question: "מה אחוז ההצלחה שלכם?",
    answer:
      "אחוז ההצלחה הכללי של מערכת ה-AI שלנו עומד על 78%, עם שונות בין ענפי ספורט שונים. חשוב לציין שביצועי העבר אינם מעידים בהכרח על ביצועים עתידיים, וכל ההמלצות נועדו למטרות מידע ובידור בלבד.",
  },
  {
    question: "באילו ליגות אתם מכסים?",
    answer:
      "אנו מכסים מעל 50 ליגות בכל רחבי העולם, כולל: פרמייר ליג, לה ליגה, סרייה A, בונדסליגה, ליג 1, ליגת האלופות, יורופה ליג, ליגת העל, NBA, יורוליג, ATP, WTA, NHL, UFC, MLB ועוד.",
  },
  {
    question: "איך עובדת מערכת ה-AI?",
    answer:
      "המערכת שלנו מנתחת מאות פרמטרים סטטיסטיים בזמן אמת, כולל: ביצועי קבוצות, מגמות עונתיות, סטטיסטיקות שחקנים, נתוני בית/חוץ, עימותים ישירים, מצב פציעות, תנאי מזג אוויר ועוד. האלגוריתם משלב למידת מכונה עם ניתוח סטטיסטי מתקדם.",
  },
  {
    question: "האם אתם מספקים שירותי הימורים?",
    answer:
      "לא. WinnerTips הוא מגזין חדשות ומידע בלבד. אנו לא מספקים שירותי הימורים, לא מקבלים הימורים ולא משמשים כמתווך הימורים. כל התוכן באתר נועד למטרות מידע ובידור בלבד. הימורים מותרים לבני 18+ בלבד.",
  },
  {
    question: "איך יוצרים קשר?",
    answer:
      "ניתן ליצור קשר עם צוות WinnerTips דרך מייל, ווצאפ או אינסטגרם. כל פרטי יצירת הקשר מופיעים בהמשך עמוד זה. אנו נשתדל להשיב לכל פנייה תוך 24 שעות.",
  },
];

// Metadata needs to be exported from a separate file or handled differently in client components
// We'll set it via head tags or a separate metadata file

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-[var(--color-border-subtle)] rounded-xl overflow-hidden transition-colors hover:border-[var(--color-border-accent)]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-right bg-[var(--color-bg-card)] hover:bg-[var(--color-bg-card-hover)] transition-colors cursor-pointer"
      >
        <span className="text-[15px] font-bold text-[var(--color-text-white)]">
          {question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`text-[var(--color-text-muted)] shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-5 pt-0 bg-[var(--color-bg-card)]">
            <div className="border-t border-[var(--color-border-subtle)] pt-4">
              <p className="text-[var(--color-text-secondary)] text-[15px] leading-relaxed">
                {answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[var(--color-bg-deep)]">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[var(--color-accent-primary)] hover:text-[var(--color-accent-secondary)] transition-colors mb-10 text-sm font-medium"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
          חזרה לדף הבית
        </Link>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-black text-[var(--color-text-white)] mb-4">
          מרכז תמיכה
        </h1>
        <p className="text-[var(--color-text-secondary)] text-[15px] mb-12">
          מצאו תשובות לשאלות נפוצות או צרו קשר עם הצוות שלנו.
        </p>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-[var(--color-text-white)] mb-6">
            שאלות נפוצות
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-xl font-bold text-[var(--color-text-white)] mb-6">
            צרו קשר
          </h2>
          <p className="text-[var(--color-text-secondary)] text-[15px] mb-8">
            לא מצאתם תשובה? אנחנו כאן בשבילכם. בחרו את דרך יצירת הקשר הנוחה
            לכם.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <a
              href="mailto:info@winnertips.co.il"
              className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-xl p-6 hover:border-[var(--color-border-accent)] hover:bg-[var(--color-bg-card-hover)] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-elevated)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent-glow)] transition-colors">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-accent-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[var(--color-text-white)] mb-1">
                דוא&quot;ל
              </h3>
              <p className="text-sm text-[var(--color-accent-primary)]">
                info@winnertips.co.il
              </p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/+972534808349"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-xl p-6 hover:border-[var(--color-border-accent)] hover:bg-[var(--color-bg-card-hover)] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-elevated)] flex items-center justify-center mb-4 group-hover:bg-[rgba(37,211,102,0.1)] transition-colors">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="var(--color-whatsapp)"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[var(--color-text-white)] mb-1">
                ווצאפ
              </h3>
              <p className="text-sm text-[var(--color-accent-primary)]">
                053-480-8349
              </p>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/winnertips_il"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-xl p-6 hover:border-[var(--color-border-accent)] hover:bg-[var(--color-bg-card-hover)] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-elevated)] flex items-center justify-center mb-4 group-hover:bg-[rgba(225,48,108,0.1)] transition-colors">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E1306C"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.5"
                    fill="#E1306C"
                    stroke="none"
                  />
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[var(--color-text-white)] mb-1">
                אינסטגרם
              </h3>
              <p className="text-sm text-[var(--color-accent-primary)]">
                @winnertips_il
              </p>
            </a>

            {/* WhatsApp Channel */}
            <a
              href="https://whatsapp.com/channel/0029VbBHha66xCSMBMTLas3d"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-xl p-6 hover:border-[var(--color-border-accent)] hover:bg-[var(--color-bg-card-hover)] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-elevated)] flex items-center justify-center mb-4 group-hover:bg-[rgba(37,211,102,0.1)] transition-colors">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-whatsapp)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[var(--color-text-white)] mb-1">
                ערוץ ווצאפ VIP
              </h3>
              <p className="text-sm text-[var(--color-accent-primary)]">
                הצטרפו לערוץ
              </p>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
