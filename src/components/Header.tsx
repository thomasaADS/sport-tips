"use client";

import { useState, useEffect } from "react";

const sports = [
  { name: "הכל", id: "all", icon: "🏆" },
  { name: "כדורגל", id: "football", icon: "⚽" },
  { name: "כדורסל", id: "basketball", icon: "🏀" },
  { name: "טניס", id: "tennis", icon: "🎾" },
  { name: "הוקי", id: "hockey", icon: "🏒" },
  { name: "MMA", id: "mma", icon: "🥊" },
  { name: "בייסבול", id: "baseball", icon: "⚾" },
];

const navLinks = [
  { name: "המלצות", href: "#tips", icon: "🔥" },
  { name: "חדשות", href: "#news", icon: "📰" },
  { name: "סטטיסטיקות", href: "#stats", icon: "📊" },
  { name: "ליגות", href: "#leagues", icon: "🌍" },
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--color-accent-secondary)] via-[var(--color-accent-primary)] to-[var(--color-accent-tertiary)] flex items-center justify-center shadow-lg animate-glow-pulse">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L14.9 8.6L22 9.2L16.6 14L18.2 21L12 17.2L5.8 21L7.4 14L2 9.2L9.1 8.6Z"
              fill="#0a0b14"
              stroke="#0a0b14"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-black tracking-tight text-gradient-gold leading-none">
          WinnerTips
        </span>
        <span className="text-[10px] font-medium text-[var(--color-text-muted)] tracking-widest uppercase">
          Pro Sports Tips
        </span>
      </div>
    </div>
  );
}

export default function Header({
  activeFilter,
  onFilterChange,
  activeSection,
  onSectionChange,
}: {
  activeFilter: string;
  onFilterChange: (id: string) => void;
  activeSection: string;
  onSectionChange: (id: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Live Ticker Bar */}
      <div className="bg-[var(--color-bg-secondary)] border-b border-[var(--color-border-subtle)] py-1.5">
        <div className="ticker-wrap max-w-7xl mx-auto px-4">
          <div className="ticker text-xs text-[var(--color-text-muted)] font-medium">
            <span className="flex items-center gap-2">
              <span className="text-[var(--color-danger)]">●</span> LIVE
            </span>
            <span>⚽ ליברפול 2-1 מנצ&apos;סטר סיטי (78&apos;)</span>
            <span>🏀 לייקרס 98-105 סלטיקס (Q4)</span>
            <span>⚽ ברצלונה 1-0 אתלטיקו (45&apos;+2)</span>
            <span>🎾 ג&apos;וקוביץ&apos; 6-4 3-2 סינר (סט 2)</span>
            <span>⚽ באיירן 3-1 דורטמונד (FT)</span>
            <span>🏀 ווריורס 112-108 נאגטס (FT)</span>
            <span>⚽ PSG 0-0 מרסיי (32&apos;)</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Main Nav */}
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onSectionChange(link.href.replace("#", ""));
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-secondary)] border border-[var(--color-border-accent)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-white)] hover:bg-[var(--color-bg-elevated)]"
                }`}
              >
                <span className="text-base">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/972501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 btn-primary text-sm"
            >
              <span>הצטרפו לקבוצת VIP</span>
              <span>👑</span>
            </a>

            <button
              className="lg:hidden w-10 h-10 rounded-xl bg-[var(--color-bg-elevated)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="תפריט"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="16" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-1 animate-fade-in-down border-t border-[var(--color-border-subtle)] pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-white)] hover:bg-[var(--color-bg-elevated)] transition-all"
              >
                <span className="text-lg">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </nav>
        )}

        {/* Sport Filter Pills */}
        <div className="flex gap-2 pb-3 overflow-x-auto no-scrollbar">
          {sports.map((sport) => (
            <button
              key={sport.id}
              onClick={() => onFilterChange(sport.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                activeFilter === sport.id
                  ? "bg-gradient-to-l from-[var(--color-accent-primary)] to-[var(--color-accent-tertiary)] text-[var(--color-bg-deep)] shadow-md"
                  : "bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-text-white)] border border-[var(--color-border-subtle)]"
              }`}
            >
              <span>{sport.icon}</span>
              <span>{sport.name}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
