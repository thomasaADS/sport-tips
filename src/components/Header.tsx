"use client";

import { useState } from "react";

const leagues = [
  { name: "הכל", id: "all" },
  { name: "כדורגל", id: "football", emoji: "\u26BD" },
  { name: "כדורסל", id: "basketball", emoji: "\uD83C\uDFC0" },
  { name: "טניס", id: "tennis", emoji: "\uD83C\uDFBE" },
  { name: "הוקי", id: "hockey", emoji: "\uD83C\uDFD2" },
  { name: "MMA", id: "mma", emoji: "\uD83E\uDD4A" },
  { name: "בייסבול", id: "baseball", emoji: "\u26BE" },
];

export default function Header({
  activeFilter,
  onFilterChange,
}: {
  activeFilter: string;
  onFilterChange: (id: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-dark)] flex items-center justify-center text-2xl font-bold text-[var(--color-primary)]">
              W
            </div>
            <div>
              <h1 className="text-2xl font-bold shimmer-text">WinnerTips</h1>
              <p className="text-xs text-[var(--color-text-secondary)]">
                המלצות ספורט מקצועיות
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#tips"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors"
            >
              המלצות היום
            </a>
            <a
              href="#stats"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors"
            >
              סטטיסטיקות
            </a>
            <a
              href="#leagues"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors"
            >
              ליגות
            </a>
            <a
              href="#about"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors"
            >
              אודות
            </a>
          </nav>

          <button
            className="md:hidden text-[var(--color-text-secondary)] text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="תפריט"
          >
            {menuOpen ? "\u2715" : "\u2630"}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 animate-slide-in">
            <a
              href="#tips"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors"
            >
              המלצות היום
            </a>
            <a
              href="#stats"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors"
            >
              סטטיסטיקות
            </a>
            <a
              href="#leagues"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors"
            >
              ליגות
            </a>
            <a
              href="#about"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors"
            >
              אודות
            </a>
          </nav>
        )}

        {/* Sport filters */}
        <div className="flex gap-2 pb-4 overflow-x-auto no-scrollbar">
          {leagues.map((league) => (
            <button
              key={league.id}
              onClick={() => onFilterChange(league.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeFilter === league.id
                  ? "bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-primary)]"
                  : "bg-[var(--color-surface-light)] text-[var(--color-text-secondary)] hover:bg-[var(--color-accent)]"
              }`}
            >
              {league.emoji && <span className="ml-1">{league.emoji}</span>}
              {league.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
