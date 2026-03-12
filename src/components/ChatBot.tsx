"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "bot";
  content: string;
}

const quickReplies = [
  "מה ההמלצה החמה?",
  "משחקים הערב?",
  "אחוזי הצלחה?",
  "קבוצת ווצאפ",
];

function getBotResponse(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes("שלום") || lower.includes("היי") || lower.includes("הי") || lower.includes("בוקר")) {
    return "שלום! 👋 ברוכים הבאים ל-WinnerTips!\n\nאני כאן לעזור לכם עם המלצות ספורט, סטטיסטיקות ומידע על ליגות.\n\nאיך אפשר לעזור?";
  }

  if (lower.includes("המלצה") || lower.includes("טיפ") || lower.includes("חמה")) {
    return "🔥 **ההמלצות החמות להיום:**\n\n⚽ מנצ'סטר סיטי vs ארסנל\n→ מעל 2.5 שערים | 1.85\n\n🏀 לייקרס vs סלטיקס\n→ לייקרס +5.5 | 1.90\n\n🎾 ג'וקוביץ' vs סינר\n→ ג'וקוביץ' 2-0 סטים | 1.75\n\nכל ההמלצות עם ניתוח מלא באתר!";
  }

  if (lower.includes("משחק") || lower.includes("הערב") || lower.includes("היום")) {
    return "📋 **משחקים מעניינים להיום:**\n\n🕐 19:00 ריאל מדריד vs ברצלונה\n🕐 21:00 ליברפול vs מנצ'סטר יונייטד\n🕐 21:45 PSG vs באיירן מינכן\n🕐 02:00 לייקרס vs ווריורס\n\nלכל המשחקים יש המלצות מפורטות!";
  }

  if (lower.includes("אחוז") || lower.includes("הצלחה") || lower.includes("סטטיסטיקה")) {
    return "📊 **הסטטיסטיקות שלנו:**\n\n✅ כדורגל: 76%\n✅ כדורסל: 82%\n✅ טניס: 74%\n✅ הוקי: 71%\n\n📈 ממוצע כללי: 78%\n📈 1,250+ המלצות החודש";
  }

  if (lower.includes("ווצאפ") || lower.includes("וואטסאפ") || lower.includes("whatsapp") || lower.includes("קבוצ")) {
    return "📱 **הצטרפו לקבוצת VIP בווצאפ:**\n\nלחצו על כפתור הווצאפ הירוק בצד שמאל למטה!\n\nבקבוצה:\n✅ המלצות בזמן אמת\n✅ עדכונים על משחקים\n✅ ניתוחים בלעדיים\n✅ תמיכה אישית";
  }

  if (lower.includes("ליג") || lower.includes("ספורט")) {
    return "🏆 **הליגות שלנו:**\n\n⚽ פרמייר ליג, לה ליגה, סרייה A, בונדסליגה, ליג 1, ליגת האלופות, ליגת העל\n🏀 NBA, יורוליג\n🎾 ATP, WTA, גרנד סלאם\n🏒 NHL\n🥊 UFC\n⚾ MLB\n\n50+ ליגות מכל העולם!";
  }

  if (lower.includes("תודה") || lower.includes("אחלה") || lower.includes("מעולה")) {
    return "בשמחה! 😊\n\nאנחנו תמיד כאן בשבילכם.\n\nאל תשכחו להצטרף לקבוצת הווצאפ שלנו! 💪⚽";
  }

  return "🤔 אני יכול לעזור עם:\n\n1️⃣ המלצות ספורט יומיות\n2️⃣ מידע על ליגות ומשחקים\n3️⃣ סטטיסטיקות ואחוזי הצלחה\n4️⃣ הצטרפות לקבוצת VIP\n\nנסו לשאול אותי!";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "שלום! 👋\n\nאני הבוט של WinnerTips.\nאיך אפשר לעזור?",
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
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", content: getBotResponse(text) }]);
      setIsTyping(false);
    }, 600 + Math.random() * 600);
  };

  return (
    <>
      {/* Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 left-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-tertiary)] text-[var(--color-bg-deep)] flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300 animate-glow-pulse"
        aria-label="צ'אט"
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Window */}
      {isOpen && (
        <div className="fixed bottom-44 left-6 z-50 w-[360px] max-w-[calc(100vw-48px)] rounded-2xl overflow-hidden shadow-2xl animate-scale-in border border-[var(--color-border-default)]">
          {/* Header */}
          <div className="bg-gradient-to-l from-[var(--color-accent-primary)] to-[var(--color-accent-tertiary)] p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-bg-deep)]/30 flex items-center justify-center text-lg backdrop-blur-sm">
                🤖
              </div>
              <div className="flex-1">
                <div className="font-bold text-[var(--color-bg-deep)] text-sm">
                  WinnerBot AI
                </div>
                <div className="text-[11px] text-[var(--color-bg-deep)]/70 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)]" />
                  מחובר • זמן תגובה ~2 שניות
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-lg bg-[var(--color-bg-deep)]/20 flex items-center justify-center text-[var(--color-bg-deep)] hover:bg-[var(--color-bg-deep)]/30 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-3 bg-[var(--color-bg-deep)]">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-bubble flex ${msg.role === "user" ? "justify-start" : "justify-end"}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                  msg.role === "user"
                    ? "bg-gradient-to-l from-[var(--color-accent-primary)] to-[var(--color-accent-tertiary)] text-[var(--color-bg-deep)] font-medium rounded-br-md"
                    : "bg-[var(--color-bg-card)] text-[var(--color-text-primary)] border border-[var(--color-border-subtle)] rounded-bl-md"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-end">
                <div className="bg-[var(--color-bg-card)] rounded-2xl rounded-bl-md px-4 py-3 border border-[var(--color-border-subtle)]">
                  <div className="flex gap-1.5">
                    {[0, 150, 300].map((delay) => (
                      <span key={delay} className="w-2 h-2 rounded-full bg-[var(--color-text-muted)] animate-bounce" style={{ animationDelay: `${delay}ms` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          <div className="px-3 py-2 border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] overflow-x-auto no-scrollbar">
            <div className="flex gap-2">
              {quickReplies.map((reply, i) => (
                <button key={i} onClick={() => sendMessage(reply)} className="px-3 py-1.5 rounded-xl text-[11px] font-medium whitespace-nowrap bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:bg-[var(--color-accent-primary)] hover:text-[var(--color-bg-deep)] transition-all border border-[var(--color-border-subtle)] hover:border-[var(--color-accent-primary)]">
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]">
            <form onSubmit={(e) => { e.preventDefault(); sendMessage(input); }} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="הקלידו הודעה..."
                className="flex-1 bg-[var(--color-bg-input)] border border-[var(--color-border-subtle)] rounded-xl px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-primary)] transition-colors"
              />
              <button type="submit" className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-tertiary)] text-[var(--color-bg-deep)] flex items-center justify-center hover:scale-105 transition-transform">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
