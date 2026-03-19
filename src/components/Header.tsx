"use client";

import { useState, useEffect } from "react";

const sports = [
  { name: "הכל", id: "all", color: "#00E676" },
  { name: "כדורגל", id: "football", color: "#10b981" },
  { name: "כדורסל", id: "basketball", color: "#2196F3" },
  { name: "טניס", id: "tennis", color: "#7C4DFF" },
  { name: "הוקי", id: "hockey", color: "#00BCD4" },
  { name: "MMA", id: "mma", color: "#FF1744" },
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
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="flex items-center gap-2.5 cursor-pointer"
    >
      <div className="w-9 h-9 rounded-lg bg-[#00E676] flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L14.9 8.6L22 9.2L16.6 14L18.2 21L12 17.2L5.8 21L7.4 14L2 9.2L9.1 8.6Z"
            fill="#0C1220"
            stroke="#0C1220"
            strokeWidth="0.5"
          />
        </svg>
      </div>
      <span className="text-lg font-black tracking-tight text-gradient-gold leading-none">
        WinnerTips
      </span>
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
        scrolled ? "glass-strong shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Nav */}
        <div className="flex items-center justify-between h-14">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[#00E676]"
                      : "text-[var(--color-text-secondary)] hover:text-white"
                  }`}
                >
                  {link.name === "LIVE" ? (
                    <span className="inline-flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1744] opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FF1744]" />
                      </span>
                      {link.name}
                    </span>
                  ) : (
                    link.name
                  )}
                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute bottom-0 right-4 left-4 h-0.5 bg-[#00E676] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href="https://whatsapp.com/channel/0029VbBHha66xCSMBMTLas3d"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold bg-[#00E676] hover:bg-[#00C853] text-[#0C1220] transition-all"
            >
              <span>VIP</span>
            </a>

            <button
              className="lg:hidden w-10 h-10 rounded-lg bg-[var(--color-bg-elevated)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[#00E676] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="תפריט"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
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
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[#00E676] bg-[#00E676]/10"
                    : "text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-bg-elevated)]"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://whatsapp.com/channel/0029VbBHha66xCSMBMTLas3d"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-lg text-sm font-bold text-[#00E676] hover:bg-[#00E676]/10 transition-all"
            >
              VIP בווצאפ
            </a>
          </nav>
        )}

        {/* Sport Filter Pills - show after scroll */}
        {showFilters && (
          <div className="flex gap-2 pb-3 overflow-x-auto no-scrollbar animate-fade-in-down">
            {sports.map((sport) => (
              <button
                key={sport.id}
                onClick={() => {
                  onFilterChange(sport.id);
                  document.querySelector("#tips")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeFilter === sport.id
                    ? "bg-[#00E676] text-[#0C1220] shadow-md shadow-[#00E676]/20"
                    : "bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:text-white border border-[var(--color-border-subtle)] hover:border-[var(--color-border-default)]"
                }`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{
                    background: activeFilter === sport.id ? "#0C1220" : sport.color,
                  }}
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
