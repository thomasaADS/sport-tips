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

// Agent personality: "Yotam" - The Sports AI
function getBotResponse(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes("שלום") || lower.includes("היי") || lower.includes("הי") || lower.includes("בוקר")) {
    return "היי, אני Yotam, סוכן הספורט של WinnerTips.\n\nאני מנתח נתונים מאלפי משחקים כדי להביא לכם את ההמלצות הכי חזקות.\n\nרוצים המלצות? שאלו אותי.";
  }

  if (lower.includes("מי אתה") || lower.includes("מה אתה")) {
    return "אני Yotam - סוכן הספורט החכם של WinnerTips.\n\nאני מערכת AI שמנתחת:\n- סטטיסטיקות מ-50+ ליגות\n- ביצועים של 10,000+ קבוצות\n- נתוני זמן אמת\n\nאחוז ההצלחה שלי: 78%\nהתמחות: כדורגל, כדורסל, טניס";
  }

  if (lower.includes("המלצה") || lower.includes("טיפ") || lower.includes("חמה")) {
    return "ההמלצות החמות שלי להיום:\n\nכדורגל - מנצ'סטר סיטי vs ארסנל\nמעל 2.5 שערים | 1.85 | 82%\n\nכדורסל - לייקרס vs סלטיקס\nלייקרס +4.5 | 1.90 | 79%\n\nטניס - ג'וקוביץ' vs סינר\nג'וקוביץ' 2-0 | 1.75 | 83%\n\nכל ההמלצות עם ניתוח מלא למעלה.";
  }

  if (lower.includes("משחק") || lower.includes("הערב") || lower.includes("היום")) {
    return "לוח המשחקים להיום:\n\n17:00 ליברפול vs צ'לסי (פרמייר ליג)\n20:15 מכבי ת\"א vs הפועל ב\"ש (ליגת העל)\n21:45 אינטר vs נאפולי (סרייה A)\n22:00 ריאל מדריד vs סביליה (לה ליגה)\n03:00 לייקרס vs סלטיקס (NBA)\n\nלכולם יש ניתוח והמלצה באתר.";
  }

  if (lower.includes("אחוז") || lower.includes("הצלחה") || lower.includes("סטטיסטיקה")) {
    return "הביצועים שלי (Yotam AI):\n\nכדורגל: 76%\nכדורסל: 82%\nטניס: 74%\nהוקי: 71%\n\nממוצע כללי: 78%\n1,250+ ניתוחים החודש\nרצף אחרון: 8/10 הצלחה";
  }

  if (lower.includes("ווצאפ") || lower.includes("וואטסאפ") || lower.includes("whatsapp") || lower.includes("קבוצ")) {
    return "קבוצת VIP בווצאפ:\n\nhttps://whatsapp.com/channel/0029VbBHha66xCSMBMTLas3d\n\nאו לחצו על הכפתור הירוק למטה.\n\nרוצים לדבר עם סוכן? מיכאל בווצאפ: 053-480-8349\n\n- המלצות בזמן אמת\n- ניתוחים בלעדיים של Yotam\n- עדכוני סקורים חיים\n- תמיכה 24/7";
  }

  if (lower.includes("ליג") || lower.includes("ספורט")) {
    return "אני מכסה 50+ ליגות:\n\nכדורגל: פרמייר ליג, לה ליגה, סרייה A, בונדסליגה, ליג 1, UCL, ליגת העל\nכדורסל: NBA, יורוליג\nטניס: ATP, WTA, גרנד סלאם\nהוקי: NHL\nלחימה: UFC\nבייסבול: MLB\n\nושלל ליגות נוספות מכל העולם.";
  }

  if (lower.includes("תודה") || lower.includes("אחלה") || lower.includes("מעולה") || lower.includes("תותח")) {
    return "בכיף.\n\nYotam תמיד כאן בשבילכם.\nאל תשכחו לבדוק את ההמלצות היומיות.\n\nבהצלחה!";
  }

  return "היי, אני Yotam. אני יכול לעזור עם:\n\n1. המלצות ספורט יומיות\n2. לוח משחקים\n3. סטטיסטיקות ואחוזי הצלחה\n4. הצטרפות לקבוצת VIP\n\nנסו לשאול אותי משהו.";
}

// Yotam Avatar - AI Sport Analyst character
function YotamAvatar({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="yt-bg" x1="0" y1="0" x2="80" y2="80">
          <stop offset="0%" stopColor="#00E676" />
          <stop offset="100%" stopColor="#00C853" />
        </linearGradient>
        <linearGradient id="yt-hair" x1="20" y1="0" x2="60" y2="25">
          <stop offset="0%" stopColor="#2d333b" />
          <stop offset="100%" stopColor="#1c2128" />
        </linearGradient>
      </defs>
      {/* Background */}
      <rect width="80" height="80" rx="20" fill="url(#yt-bg)" />
      {/* Face */}
      <ellipse cx="40" cy="42" rx="18" ry="20" fill="#f5d6b8" />
      {/* Hair */}
      <path d="M22 34 Q22 18 40 16 Q58 18 58 34 L58 30 Q58 14 40 12 Q22 14 22 30Z" fill="url(#yt-hair)" />
      {/* Left eye */}
      <ellipse cx="33" cy="40" rx="3.5" ry="3" fill="#1c2128" />
      <circle cx="34" cy="39" r="1" fill="white" />
      {/* Right eye */}
      <ellipse cx="47" cy="40" rx="3.5" ry="3" fill="#1c2128" />
      <circle cx="48" cy="39" r="1" fill="white" />
      {/* Eyebrows */}
      <path d="M28 35 Q33 32 38 35" stroke="#2d333b" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M42 35 Q47 32 52 35" stroke="#2d333b" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Smile */}
      <path d="M34 49 Q40 54 46 49" stroke="#c47a5a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Headset */}
      <path d="M19 38 Q19 24 40 22 Q61 24 61 38" stroke="#58a6ff" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="19" cy="40" r="5" fill="#58a6ff" />
      <circle cx="19" cy="40" r="3" fill="#0d1117" />
      <circle cx="61" cy="40" r="5" fill="#58a6ff" />
      <circle cx="61" cy="40" r="3" fill="#0d1117" />
      {/* Mic */}
      <line x1="19" y1="45" x2="19" y2="52" stroke="#58a6ff" strokeWidth="2" />
      <circle cx="19" cy="54" r="3" fill="#58a6ff" />
      {/* AI badge */}
      <rect x="28" y="64" width="24" height="12" rx="6" fill="#0d1117" opacity="0.7" />
      <text x="40" y="73" textAnchor="middle" fontSize="7" fontWeight="900" fill="#00E676" fontFamily="sans-serif">AI</text>
    </svg>
  );
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "היי, אני Yotam - סוכן הספורט החכם.\n\nאיך אפשר לעזור היום?",
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
    }, 500 + Math.random() * 700);
  };

  return (
    <>
      {/* Toggle Button with Yotam avatar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 left-6 z-50 w-14 h-14 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 border-2 border-[#00E676]/30"
        aria-label="צ'אט עם Yotam"
      >
        {isOpen ? (
          <div className="w-full h-full bg-gradient-to-br from-[#00E676] to-[#00C853] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        ) : (
          <YotamAvatar size={56} />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-44 left-6 z-50 w-[370px] max-w-[calc(100vw-48px)] rounded-2xl overflow-hidden shadow-2xl animate-scale-in border border-[#00E676]/20">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#00E676] to-[#00C853] p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl overflow-hidden border-2 border-white/20 flex-shrink-0">
                <YotamAvatar size={44} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-black text-[#0C1220] text-sm">Yotam</span>
                  <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-[#0C1220]/20 text-[#0C1220]/80">AI AGENT</span>
                </div>
                <div className="text-[11px] text-[#0C1220]/70 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E676]" />
                  סוכן ספורט חכם - מחובר
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-lg bg-[#0C1220]/20 flex items-center justify-center hover:bg-[#0C1220]/30 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0C1220" strokeWidth="2.5">
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
                {msg.role === "bot" && (
                  <div className="flex-shrink-0 ml-2 mt-1">
                    <YotamAvatar size={24} />
                  </div>
                )}
                <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed whitespace-pre-line ${
                  msg.role === "user"
                    ? "bg-gradient-to-l from-[#00E676] to-[#00C853] text-[#0C1220] font-medium rounded-br-md"
                    : "bg-[var(--color-bg-card)] text-[var(--color-text-primary)] border border-[var(--color-border-subtle)] rounded-bl-md"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-end items-end gap-2">
                <YotamAvatar size={24} />
                <div className="bg-[var(--color-bg-card)] rounded-2xl rounded-bl-md px-4 py-3 border border-[var(--color-border-subtle)]">
                  <div className="flex gap-1.5">
                    {[0, 150, 300].map((d) => (
                      <span key={d} className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-bounce" style={{ animationDelay: `${d}ms` }} />
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
                <button key={i} onClick={() => sendMessage(reply)} className="px-3 py-1.5 rounded-xl text-[11px] font-medium whitespace-nowrap bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:bg-[#00E676] hover:text-[#0C1220] transition-all border border-[var(--color-border-subtle)] hover:border-[#00E676]">
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]">
            <form onSubmit={(e) => { e.preventDefault(); sendMessage(input); }} className="flex gap-2">
              <input
                type="text" value={input} onChange={(e) => setInput(e.target.value)}
                placeholder="שאלו את Yotam..."
                className="flex-1 bg-[var(--color-bg-input)] border border-[var(--color-border-subtle)] rounded-xl px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[#00E676]/40 transition-colors"
              />
              <button type="submit" className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E676] to-[#00C853] text-[#0C1220] flex items-center justify-center hover:scale-105 transition-transform">
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
