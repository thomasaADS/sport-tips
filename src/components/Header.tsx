"use client";

import { useState, useEffect } from "react";

const sports = [
  { name: "הכל", id: "all", color: "#f59e0b" },
  { name: "כדורגל", id: "football", color: "#10b981" },
  { name: "כדורסל", id: "basketball", color: "#3b82f6" },
  { name: "טניס", id: "tennis", color: "#8b5cf6" },
  { name: "הוקי", id: "hockey", color: "#06b6d4" },
  { name: "MMA", id: "mma", color: "#ef4444" },
  { name: "בייסבול", id: "baseball", color: "#f97316" },
];

const navLinks = [
  { name: "LIVE", href: "#live" },
  { name: "המלצות", href: "#tips" },
  { name: "חדשות", href: "#news" },
  { name: "סטטיסטיקות", href: "#stats" },
  { name: "ליגות", href: "#leagues" },
];

function Logo() {
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-3 cursor-pointer">
      <div className="relative">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent-secondary)] via-[var(--color-accent-primary)] to-[var(--color-accent-tertiary)] flex items-center justify-center shadow-lg shadow-[var(--color-accent-primary)]/20">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L14.9 8.6L22 9.2L16.6 14L18.2 21L12 17.2L5.8 21L7.4 14L2 9.2L9.1 8.6Z"
              fill="white"
              stroke="white"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-black tracking-tight text-gradient-gold leading-none">
          WinnerTips
        </span>
        <span className="text-[9px] font-medium text-[var(--color-text-muted)] tracking-widest uppercase">
          AI Sports Analytics
        </span>
      </div>
    </a>
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
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowFilters(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    onSectionChange(id);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

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
              <span className="text-[var(--color-danger)]">&#9679;</span> LIVE
            </span>
            <span>ליברפול 2-1 מנצ&apos;סטר סיטי (78&apos;)</span>
            <span>לייקרס 98-105 סלטיקס (Q4)</span>
            <span>ברצלונה 1-0 אתלטיקו (45&apos;+2)</span>
            <span>ג&apos;וקוביץ&apos; 6-4 3-2 סינר (סט 2)</span>
            <span>באיירן 3-1 דורטמונד (FT)</span>
            <span>ווריורס 112-108 נאגטס (FT)</span>
            <span>ליון 2-0 מרסיי (61&apos;)</span>
            <span>ארסנל 1-1 צ&apos;לסי (55&apos;)</span>
            <span>ריינג&apos;רס 3-2 פנגווינס (P3)</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Main Nav */}
        <div className="flex items-center justify-between h-14">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-secondary)] border border-[var(--color-border-accent)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-white)] hover:bg-[var(--color-bg-elevated)]"
                }`}
              >
                {link.name === "LIVE" && (
                  <span className="inline-flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                    </span>
                    {link.name}
                  </span>
                )}
                {link.name !== "LIVE" && link.name}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href="https://whatsapp.com/channel/0029VbBHha66xCSMBMTLas3d"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 btn-primary text-sm"
            >
              <span>קבוצת VIP</span>
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
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-3 rounded-xl text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-white)] hover:bg-[var(--color-bg-elevated)] transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://whatsapp.com/channel/0029VbBHha66xCSMBMTLas3d"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl text-sm font-bold text-[#25D366] hover:bg-[#25D366]/10 transition-all"
            >
              קבוצת VIP בווצאפ
            </a>
          </nav>
        )}

        {/* Sport Filter Pills - only show after scrolling */}
        {showFilters && (
          <div className="flex gap-2 pb-3 overflow-x-auto no-scrollbar animate-fade-in-down">
            {sports.map((sport) => (
              <button
                key={sport.id}
                onClick={() => {
                  onFilterChange(sport.id);
                  document.querySelector("#tips")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeFilter === sport.id
                    ? "bg-gradient-to-l from-[var(--color-accent-primary)] to-[var(--color-accent-tertiary)] text-[var(--color-bg-deep)] shadow-md"
                    : "bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-text-white)] border border-[var(--color-border-subtle)]"
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: sport.color }}
                />
                <span>{sport.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
