import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "תקנון האתר",
  description:
    "תקנון השימוש באתר WinnerTips - תנאי שימוש, מדיניות פרטיות, אחריות והימורים אחראיים.",
};

export default function TermsPage() {
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
          תקנון האתר
        </h1>
        <p className="text-[var(--color-text-muted)] text-sm mb-12">
          עודכן לאחרונה: מרץ 2026
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {/* 1. כללי */}
          <section className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-[var(--color-text-white)] mb-4">
              1. כללי
            </h2>
            <div className="space-y-3 text-[var(--color-text-secondary)] text-[15px] leading-relaxed">
              <p>
                ברוכים הבאים לאתר WinnerTips (להלן: &quot;האתר&quot;). האתר
                מופעל כמגזין חדשות ומידע עצמאי בתחום הספורט ומספק סקירות,
                ניתוחים סטטיסטיים והמלצות מבוססות בינה מלאכותית בלבד.
              </p>
              <p>
                האתר אינו מהווה פלטפורמת הימורים, אינו מספק שירותי הימורים
                ואינו משמש כמתווך או סוכן הימורים מכל סוג שהוא. כל המידע
                המוצג באתר נועד למטרות מידע, בידור ולימוד בלבד.
              </p>
              <p>
                השימוש באתר מהווה הסכמה מלאה לתנאי תקנון זה. אם אינך מסכים
                לתנאים אלה, אנא הימנע משימוש באתר.
              </p>
            </div>
          </section>

          {/* 2. תנאי שימוש */}
          <section className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-[var(--color-text-white)] mb-4">
              2. תנאי שימוש
            </h2>
            <div className="space-y-3 text-[var(--color-text-secondary)] text-[15px] leading-relaxed">
              <p>
                השימוש באתר מותנה בעמידה בתנאים הבאים:
              </p>
              <ul className="list-disc list-inside space-y-2 pr-2">
                <li>המשתמש מצהיר כי הוא בן 18 ומעלה.</li>
                <li>
                  המשתמש מבין כי המידע באתר מוצג למטרות מידע בלבד ואינו
                  מהווה ייעוץ פיננסי, משפטי או מקצועי מכל סוג.
                </li>
                <li>
                  אין להעתיק, לשכפל, להפיץ או לעשות שימוש מסחרי בתוכן האתר
                  ללא אישור מראש ובכתב.
                </li>
                <li>
                  המשתמש מתחייב שלא להשתמש באתר לכל מטרה בלתי חוקית או
                  בניגוד לתקנון זה.
                </li>
                <li>
                  האתר שומר לעצמו את הזכות לחסום גישה למשתמשים המפרים את
                  תנאי השימוש.
                </li>
              </ul>
            </div>
          </section>

          {/* 3. אחריות */}
          <section className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-[var(--color-text-white)] mb-4">
              3. אחריות
            </h2>
            <div className="space-y-3 text-[var(--color-text-secondary)] text-[15px] leading-relaxed">
              <p>
                <strong className="text-[var(--color-text-primary)]">
                  הבהרה חשובה:
                </strong>{" "}
                כל ההמלצות, הניתוחים והתחזיות המוצגים באתר נועדו למטרות מידע
                ובידור בלבד. אין לראות בהם ייעוץ פיננסי, המלצה להימור או
                עידוד לפעילות הימורים.
              </p>
              <p>
                האתר, מפעיליו, עובדיו ושותפיו אינם נושאים באחריות לכל הפסד
                כספי, נזק ישיר או עקיף הנובע משימוש במידע המוצג באתר. כל
                החלטה הנובעת מהמידע באתר היא על אחריותו הבלעדית של המשתמש.
              </p>
              <p>
                אחוזי ההצלחה המוצגים באתר מבוססים על נתונים היסטוריים ואינם
                מהווים ערובה לתוצאות עתידיות. ביצועי העבר אינם מעידים על
                ביצועים עתידיים.
              </p>
              <p>
                האתר אינו אחראי לזמינות השירות, לתקלות טכניות או לאי-דיוקים
                במידע המוצג. המידע עשוי להשתנות ללא הודעה מוקדמת.
              </p>
            </div>
          </section>

          {/* 4. הימורים אחראיים */}
          <section className="bg-[var(--color-bg-card)] border border-[var(--color-border-accent)] rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-[var(--color-text-white)] mb-4">
              4. הימורים אחראיים
            </h2>
            <div className="space-y-3 text-[var(--color-text-secondary)] text-[15px] leading-relaxed">
              <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border-default)] rounded-xl p-4 mb-4">
                <p className="font-bold text-[var(--color-text-primary)] text-base">
                  הימורים מותרים לבני 18+ בלבד
                </p>
              </div>
              <p>
                WinnerTips מחויב לקידום הימורים אחראיים ומודעות לסיכונים
                הכרוכים בהימורים. אנו קוראים לכל המשתמשים:
              </p>
              <ul className="list-disc list-inside space-y-2 pr-2">
                <li>להמר אך ורק מכספים שניתן להרשות לעצמך להפסיד.</li>
                <li>להציב לעצמך מגבלות זמן ותקציב ולעמוד בהן.</li>
                <li>לא לראות בהימורים מקור הכנסה או דרך לפתרון בעיות כלכליות.</li>
                <li>לפנות לעזרה מקצועית במקרה של תחושת תלות או אובדן שליטה.</li>
              </ul>
              <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border-default)] rounded-xl p-4 mt-4">
                <h3 className="font-bold text-[var(--color-text-primary)] mb-2">
                  קו סיוע והכוונה
                </h3>
                <p>
                  אם אתה או מישהו שאתה מכיר סובל מבעיית הימורים, ניתן לפנות
                  לקו הסיוע הארצי למניעת התמכרות להימורים:
                </p>
                <p className="text-lg font-bold text-[var(--color-accent-primary)] mt-2">
                  1-800-363-363
                </p>
                <p className="text-[var(--color-text-muted)] text-sm mt-1">
                  הקו פעיל בימים א&apos;-ה&apos; בשעות 08:00-22:00, ללא עלות.
                </p>
              </div>
            </div>
          </section>

          {/* 5. קניין רוחני */}
          <section className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-[var(--color-text-white)] mb-4">
              5. קניין רוחני
            </h2>
            <div className="space-y-3 text-[var(--color-text-secondary)] text-[15px] leading-relaxed">
              <p>
                כל התכנים באתר, לרבות טקסטים, גרפיקה, לוגואים, אייקונים,
                תמונות, ניתוחים, אלגוריתמים וקוד מקור, הם רכושו הבלעדי של
                WinnerTips ומוגנים על-ידי חוקי זכויות יוצרים וקניין רוחני.
              </p>
              <p>
                אין להעתיק, לשכפל, להפיץ, לשדר, להציג בפומבי, לערוך, לעבד
                או לעשות כל שימוש מסחרי בתכנים ללא קבלת אישור מראש ובכתב
                מצוות WinnerTips.
              </p>
              <p>
                שמות מסחריים, סימני מסחר ולוגואים של צדדים שלישיים המופיעים
                באתר שייכים לבעליהם החוקיים ומוצגים למטרות מידע בלבד.
              </p>
            </div>
          </section>

          {/* 6. פרטיות */}
          <section className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-[var(--color-text-white)] mb-4">
              6. פרטיות
            </h2>
            <div className="space-y-3 text-[var(--color-text-secondary)] text-[15px] leading-relaxed">
              <p>
                האתר מכבד את פרטיות המשתמשים. אנו עשויים לאסוף מידע אנונימי
                לצורך שיפור חוויית המשתמש, כגון נתוני גלישה וסטטיסטיקות
                שימוש כלליות.
              </p>
              <p>
                האתר עשוי להשתמש בעוגיות (Cookies) ובכלי ניטור סטנדרטיים
                לצורך ניתוח תעבורה ושיפור השירות. המשך השימוש באתר מהווה
                הסכמה לשימוש בעוגיות.
              </p>
              <p>
                איננו מוכרים, משתפים או מעבירים מידע אישי של משתמשים לצדדים
                שלישיים, למעט במקרים המחויבים על-פי חוק.
              </p>
            </div>
          </section>

          {/* 7. שינויים בתקנון */}
          <section className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-[var(--color-text-white)] mb-4">
              7. שינויים בתקנון
            </h2>
            <div className="space-y-3 text-[var(--color-text-secondary)] text-[15px] leading-relaxed">
              <p>
                WinnerTips שומר לעצמו את הזכות לעדכן ולשנות את תנאי תקנון זה
                בכל עת, על-פי שיקול דעתו הבלעדי וללא הודעה מוקדמת.
              </p>
              <p>
                שינויים בתקנון ייכנסו לתוקף מרגע פרסומם באתר. המשך השימוש
                באתר לאחר עדכון התקנון מהווה הסכמה לתנאים המעודכנים.
              </p>
              <p>
                מומלץ לעיין בתקנון מעת לעת על מנת להתעדכן בשינויים. תאריך
                העדכון האחרון מצוין בראש עמוד זה.
              </p>
            </div>
          </section>

          {/* 8. יצירת קשר */}
          <section className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-[var(--color-text-white)] mb-4">
              8. יצירת קשר
            </h2>
            <div className="space-y-3 text-[var(--color-text-secondary)] text-[15px] leading-relaxed">
              <p>
                לכל שאלה, הבהרה או פנייה בנוגע לתקנון זה או לשירותי האתר,
                ניתן לפנות אלינו באמצעות:
              </p>
              <p>
                <strong className="text-[var(--color-text-primary)]">
                  דוא&quot;ל:
                </strong>{" "}
                <a
                  href="mailto:info@winnertips.co.il"
                  className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-secondary)] transition-colors"
                >
                  info@winnertips.co.il
                </a>
              </p>
              <p>
                אנו נשתדל להשיב לפניות בהקדם האפשרי ולא יאוחר מ-3 ימי עסקים.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
