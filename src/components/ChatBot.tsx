"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "bot";
  content: string;
  timestamp: Date;
}

const quickReplies = [
  "מה ההמלצה החמה להיום?",
  "איזה משחקים יש הערב?",
  "מה אחוז ההצלחה שלכם?",
  "איך אני מצטרף לקבוצת הווצאפ?",
];

// Smart bot responses based on keywords
function getBotResponse(message: string): string {
  const lower = message.toLowerCase();

  if (
    lower.includes("שלום") ||
    lower.includes("היי") ||
    lower.includes("הי") ||
    lower.includes("בוקר")
  ) {
    return "שלום! \uD83D\uDC4B ברוכים הבאים ל-WinnerTips! אני הבוט החכם שלנו ואני כאן לעזור לכם עם המלצות ספורט, סטטיסטיקות ומידע על ליגות. איך אפשר לעזור?";
  }

  if (lower.includes("המלצה") || lower.includes("טיפ") || lower.includes("חמה")) {
    return "\uD83D\uDD25 ההמלצות החמות שלנו להיום:\n\n\u26BD **כדורגל:** מנצ'סטר סיטי נגד ארסנל - תחתון מעל 2.5 שערים (מקדם 1.85)\n\uD83C\uDFC0 **כדורסל:** לייקרס נגד סלטיקס - לייקרס +5.5 (מקדם 1.90)\n\uD83C\uDFBE **טניס:** ג'וקוביץ' לנצח - (מקדם 1.55)\n\nכל ההמלצות מופיעות בעמוד הראשי עם ניתוח מלא!";
  }

  if (lower.includes("משחק") || lower.includes("הערב") || lower.includes("היום")) {
    return "\uD83D\uDCCB **משחקים מעניינים להיום:**\n\n19:00 - ריאל מדריד vs ברצלונה (לה ליגה)\n21:00 - ליברפול vs מנצ'סטר יונייטד (פרמייר ליג)\n21:45 - PSG vs באיירן מינכן (ליגת האלופות)\n02:00 - לייקרס vs ווריורס (NBA)\n\nלכל המשחקים יש המלצות מפורטות באתר! \u26BD";
  }

  if (lower.includes("אחוז") || lower.includes("הצלחה") || lower.includes("סטטיסטיקה")) {
    return "\uD83D\uDCCA **הסטטיסטיקות שלנו:**\n\n\u2705 אחוז הצלחה כללי: 78%\n\u26BD כדורגל: 76% הצלחה\n\uD83C\uDFC0 כדורסל: 82% הצלחה\n\uD83C\uDFBE טניס: 74% הצלחה\n\uD83C\uDFD2 הוקי: 71% הצלחה\n\n\uD83D\uDCC8 מעל 1,250 המלצות החודש!\nאנחנו גאים באחוזי ההצלחה הגבוהים שלנו ועובדים קשה כל יום לשפר אותם.";
  }

  if (
    lower.includes("ווצאפ") ||
    lower.includes("וואטסאפ") ||
    lower.includes("whatsapp") ||
    lower.includes("קבוצ")
  ) {
    return "\uD83D\uDCF1 **קבוצת הווצאפ שלנו:**\n\nלחצו על כפתור הווצאפ הירוק שמופיע בצד שמאל למטה של המסך כדי להצטרף לקבוצת ההמלצות שלנו!\n\nבקבוצה תקבלו:\n\u2705 המלצות יומיות בזמן אמת\n\u2705 עדכונים על משחקים חשובים\n\u2705 ניתוחים בלעדיים\n\u2705 תמיכה אישית מהצוות";
  }

  if (lower.includes("ליג") || lower.includes("ספורט") || lower.includes("סוג")) {
    return "\uD83C\uDFC6 **הליגות שאנחנו מכסים:**\n\n\u26BD **כדורגל:** פרמייר ליג, לה ליגה, סרייה A, בונדסליגה, ליג 1, ליגת האלופות, ליגת העל, MLS ועוד\n\uD83C\uDFC0 **כדורסל:** NBA, יורוליג, ליגת Winner\n\uD83C\uDFBE **טניס:** ATP, WTA, גרנד סלאם\n\uD83C\uDFD2 **הוקי:** NHL\n\uD83E\uDD4A **MMA:** UFC\n\u26BE **בייסבול:** MLB\n\nומכסים עוד הרבה ליגות נוספות!";
  }

  if (lower.includes("מחיר") || lower.includes("עלות") || lower.includes("חינם") || lower.includes("תשלום")) {
    return "\uD83C\uDD93 **האתר שלנו חינמי לחלוטין!**\n\nכל ההמלצות, הניתוחים והסטטיסטיקות זמינים בחינם.\n\nבקרוב נשיק גם חבילת VIP עם:\n\uD83D\uDC8E המלצות פרימיום בלעדיות\n\uD83D\uDC8E ניתוחים מעמיקים יותר\n\uD83D\uDC8E גישה לצוות המנתחים\n\nבינתיים - תהנו מהכל בחינם! \uD83D\uDE0A";
  }

  if (lower.includes("תודה") || lower.includes("אחלה") || lower.includes("מעולה")) {
    return "בשמחה! \uD83D\uDE0A אנחנו תמיד כאן בשבילכם. אל תשכחו לעקוב אחרי ההמלצות היומיות ולהצטרף לקבוצת הווצאפ שלנו לעדכונים בזמן אמת! \uD83D\uDCAA\u26BD";
  }

  // Default response
  return "\uD83E\uDD14 שאלה מעניינת! אני יכול לעזור לכם עם:\n\n1\uFE0F\u20E3 המלצות ספורט יומיות\n2\uFE0F\u20E3 מידע על ליגות ומשחקים\n3\uFE0F\u20E3 סטטיסטיקות ואחוזי הצלחה\n4\uFE0F\u20E3 הצטרפות לקבוצת הווצאפ\n\nנסו לשאול אותי על אחד מהנושאים האלה! \uD83D\uDE09";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "שלום! \uD83D\uDC4B אני הבוט החכם של WinnerTips. אני כאן לעזור לכם עם המלצות ספורט, מידע על ליגות ומשחקים. איך אפשר לעזור?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        role: "bot",
        content: getBotResponse(text),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 800 + Math.random() * 800);
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 left-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-primary)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
        aria-label="פתח צ'אט"
      >
        {isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-44 left-6 z-50 w-[350px] max-w-[calc(100vw-48px)] rounded-2xl overflow-hidden shadow-2xl animate-slide-in border border-[var(--color-border)]">
          {/* Header */}
          <div className="bg-gradient-to-l from-[var(--color-gold)] to-[var(--color-gold-dark)] p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-lg">
                \uD83E\uDD16
              </div>
              <div>
                <div className="font-bold text-[var(--color-primary)]">
                  WinnerBot
                </div>
                <div className="text-xs text-[var(--color-primary)]/70 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-green)]"></span>
                  מחובר עכשיו
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            className="h-80 overflow-y-auto p-4 space-y-3"
            style={{ background: "var(--color-primary)" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-bubble flex ${msg.role === "user" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-[var(--color-gold)] text-[var(--color-primary)] rounded-br-sm"
                      : "bg-[var(--color-surface-light)] text-white rounded-bl-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-end">
                <div className="bg-[var(--color-surface-light)] rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <span
                      className="w-2 h-2 rounded-full bg-[var(--color-text-secondary)] animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></span>
                    <span
                      className="w-2 h-2 rounded-full bg-[var(--color-text-secondary)] animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></span>
                    <span
                      className="w-2 h-2 rounded-full bg-[var(--color-text-secondary)] animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          <div className="px-3 py-2 border-t border-[var(--color-border)] bg-[var(--color-surface)] overflow-x-auto">
            <div className="flex gap-2 no-scrollbar">
              {quickReplies.map((reply, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(reply)}
                  className="px-3 py-1.5 rounded-full text-xs whitespace-nowrap bg-[var(--color-surface-light)] text-[var(--color-text-secondary)] hover:bg-[var(--color-gold)] hover:text-[var(--color-primary)] transition-all border border-[var(--color-border)]"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-[var(--color-border)] bg-[var(--color-surface)]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="שאלו אותי משהו..."
                className="flex-1 bg-[var(--color-surface-light)] border border-[var(--color-border)] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-gold)] transition-colors"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-primary)] flex items-center justify-center hover:scale-105 transition-transform"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
