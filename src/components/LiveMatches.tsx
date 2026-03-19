"use client";

import { useState, useEffect, useMemo } from "react";

interface LiveMatch {
  id: number;
  league: string;
  leagueAbbr: string;
  leagueColor: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  minute: number | string;
  status: "live" | "ht" | "ft" | "upcoming";
  homeOdds: string;
  drawOdds: string;
  awayOdds: string;
  events?: { type: "goal" | "card" | "sub"; minute: number; team: "home" | "away"; player: string }[];
}

const liveMatches: LiveMatch[] = [
  {
    id: 1, league: "Premier League", leagueAbbr: "PL", leagueColor: "#3d195b",
    homeTeam: "ליברפול", awayTeam: "מנצ'סטר סיטי", homeScore: 2, awayScore: 1,
    minute: 78, status: "live", homeOdds: "1.45", drawOdds: "5.50", awayOdds: "8.00",
    events: [
      { type: "goal", minute: 23, team: "home", player: "סלאח" },
      { type: "goal", minute: 41, team: "away", player: "הולנד" },
      { type: "goal", minute: 67, team: "home", player: "נוניז" },
    ],
  },
  {
    id: 2, league: "La Liga", leagueAbbr: "LL", leagueColor: "#ee8707",
    homeTeam: "ברצלונה", awayTeam: "אתלטיקו מדריד", homeScore: 1, awayScore: 0,
    minute: "45+2", status: "live", homeOdds: "1.65", drawOdds: "4.20", awayOdds: "5.00",
    events: [
      { type: "goal", minute: 38, team: "home", player: "יאמאל" },
      { type: "card", minute: 42, team: "away", player: "גריזמן" },
    ],
  },
  {
    id: 3, league: "NBA", leagueAbbr: "NBA", leagueColor: "#17408b",
    homeTeam: "לייקרס", awayTeam: "סלטיקס", homeScore: 98, awayScore: 105,
    minute: "Q4", status: "live", homeOdds: "2.10", drawOdds: "-", awayOdds: "1.72",
    events: [],
  },
  {
    id: 4, league: "Champions League", leagueAbbr: "UCL", leagueColor: "#00003c",
    homeTeam: "PSG", awayTeam: "באיירן מינכן", homeScore: 0, awayScore: 0,
    minute: 32, status: "live", homeOdds: "2.80", drawOdds: "3.40", awayOdds: "2.50",
    events: [],
  },
  {
    id: 5, league: "Premier League", leagueAbbr: "PL", leagueColor: "#3d195b",
    homeTeam: "ארסנל", awayTeam: "צ'לסי", homeScore: 1, awayScore: 1,
    minute: 55, status: "live", homeOdds: "2.00", drawOdds: "3.80", awayOdds: "3.50",
    events: [
      { type: "goal", minute: 12, team: "home", player: "סאקה" },
      { type: "goal", minute: 33, team: "away", player: "פאלמר" },
      { type: "card", minute: 50, team: "home", player: "רייס" },
    ],
  },
  {
    id: 6, league: "Ligue 1", leagueAbbr: "L1", leagueColor: "#091c3e",
    homeTeam: "ליון", awayTeam: "מרסיי", homeScore: 2, awayScore: 0,
    minute: 61, status: "live", homeOdds: "1.10", drawOdds: "11.00", awayOdds: "22.00",
    events: [
      { type: "goal", minute: 15, team: "home", player: "לאקאזט" },
      { type: "goal", minute: 48, team: "home", player: "שרקי" },
    ],
  },
  {
    id: 7, league: "Bundesliga", leagueAbbr: "BL", leagueColor: "#d20515",
    homeTeam: "באיירן", awayTeam: "דורטמונד", homeScore: 3, awayScore: 1,
    minute: "FT", status: "ft", homeOdds: "-", drawOdds: "-", awayOdds: "-",
    events: [
      { type: "goal", minute: 12, team: "home", player: "קיין" },
      { type: "goal", minute: 34, team: "home", player: "מוסיאלה" },
      { type: "goal", minute: 55, team: "away", player: "אדיימי" },
      { type: "goal", minute: 78, team: "home", player: "קיין" },
    ],
  },
  {
    id: 8, league: "Serie A", leagueAbbr: "SA", leagueColor: "#024494",
    homeTeam: "אינטר", awayTeam: "נאפולי", homeScore: 0, awayScore: 0,
    minute: "21:45", status: "upcoming", homeOdds: "1.90", drawOdds: "3.60", awayOdds: "4.00",
    events: [],
  },
  {
    id: 9, league: "La Liga", leagueAbbr: "LL", leagueColor: "#ee8707",
    homeTeam: "ריאל מדריד", awayTeam: "סביליה", homeScore: 0, awayScore: 0,
    minute: "22:00", status: "upcoming", homeOdds: "1.35", drawOdds: "5.50", awayOdds: "8.00",
    events: [],
  },
  {
    id: 10, league: "NBA", leagueAbbr: "NBA", leagueColor: "#17408b",
    homeTeam: "ווריורס", awayTeam: "נאגטס", homeScore: 112, awayScore: 108,
    minute: "FT", status: "ft", homeOdds: "-", drawOdds: "-", awayOdds: "-",
    events: [],
  },
  {
    id: 11, league: "ATP Masters", leagueAbbr: "ATP", leagueColor: "#4e8542",
    homeTeam: "ג'וקוביץ'", awayTeam: "סינר", homeScore: 6, awayScore: 3,
    minute: "סט 2", status: "live", homeOdds: "1.50", drawOdds: "-", awayOdds: "2.60",
    events: [],
  },
  {
    id: 12, league: "NHL", leagueAbbr: "NHL", leagueColor: "#1a1a2e",
    homeTeam: "ריינג'רס", awayTeam: "פנגווינס", homeScore: 3, awayScore: 2,
    minute: "P3", status: "live", homeOdds: "1.30", drawOdds: "-", awayOdds: "3.50",
    events: [
      { type: "goal", minute: 8, team: "home", player: "פנרין" },
      { type: "goal", minute: 22, team: "away", player: "קרוסבי" },
      { type: "goal", minute: 31, team: "home", player: "זיבנג'אד" },
      { type: "goal", minute: 38, team: "away", player: "מלקין" },
      { type: "goal", minute: 45, team: "home", player: "פנרין" },
    ],
  },
  {
    id: 13, league: "Premier League", leagueAbbr: "PL", leagueColor: "#3d195b",
    homeTeam: "טוטנהאם", awayTeam: "ניוקאסל", homeScore: 0, awayScore: 2,
    minute: "HT", status: "ht", homeOdds: "4.50", drawOdds: "4.20", awayOdds: "1.60",
    events: [
      { type: "goal", minute: 18, team: "away", player: "איזאק" },
      { type: "goal", minute: 40, team: "away", player: "גורדון" },
    ],
  },
  {
    id: 14, league: "Serie A", leagueAbbr: "SA", leagueColor: "#024494",
    homeTeam: "מילאן", awayTeam: "יובנטוס", homeScore: 1, awayScore: 1,
    minute: "FT", status: "ft", homeOdds: "-", drawOdds: "-", awayOdds: "-",
    events: [
      { type: "goal", minute: 29, team: "home", player: "לאאו" },
      { type: "goal", minute: 72, team: "away", player: "ולאהוביץ'" },
    ],
  },
  {
    id: 15, league: "ליגת העל", leagueAbbr: "ISR", leagueColor: "#0038b8",
    homeTeam: "מכבי תל אביב", awayTeam: "הפועל באר שבע", homeScore: 0, awayScore: 0,
    minute: "20:15", status: "upcoming", homeOdds: "1.60", drawOdds: "3.80", awayOdds: "5.50",
    events: [],
  },
  {
    id: 16, league: "UFC 310", leagueAbbr: "UFC", leagueColor: "#d20a11",
    homeTeam: "אוליביירה", awayTeam: "מקגרגור", homeScore: 0, awayScore: 0,
    minute: "04:00", status: "upcoming", homeOdds: "1.65", drawOdds: "-", awayOdds: "2.20",
    events: [],
  },
  {
    id: 17, league: "Euroleague", leagueAbbr: "EL", leagueColor: "#f68e1e",
    homeTeam: "מכבי ת\"א", awayTeam: "ריאל מדריד", homeScore: 72, awayScore: 75,
    minute: "Q3", status: "live", homeOdds: "2.30", drawOdds: "-", awayOdds: "1.55",
    events: [],
  },
  {
    id: 18, league: "WTA 1000", leagueAbbr: "WTA", leagueColor: "#7b2d8e",
    homeTeam: "סבלנקה", awayTeam: "ריבקינה", homeScore: 4, awayScore: 6,
    minute: "סט 2", status: "live", homeOdds: "1.80", drawOdds: "-", awayOdds: "2.00",
    events: [],
  },
];

function MinutePulse({ minute, status }: { minute: number | string; status: string }) {
  if (status === "ft") {
    return <span className="text-[11px] font-bold text-[var(--color-text-muted)]">FT</span>;
  }
  if (status === "ht") {
    return <span className="text-[11px] font-bold text-amber-400">HT</span>;
  }
  if (status === "upcoming") {
    return <span className="text-[11px] font-medium text-[var(--color-text-secondary)]">{minute}</span>;
  }
  return (
    <span className="flex items-center gap-1.5">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-danger)] opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-danger)]" />
      </span>
      <span className="text-[11px] font-bold text-[var(--color-danger)]">{minute}&apos;</span>
    </span>
  );
}

function OddsButton({
  label,
  value,
  isSelected,
  onClick,
}: {
  label: string;
  value: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-1.5 rounded-lg border transition-all text-center ${
        isSelected
          ? "bg-[var(--color-accent-primary)] border-[var(--color-accent-primary)] scale-[1.02]"
          : "bg-[var(--color-bg-secondary)] hover:bg-[var(--color-accent-primary)]/10 border-[var(--color-border-subtle)] hover:border-[var(--color-border-accent)]"
      }`}
    >
      <span className={`text-[9px] block ${isSelected ? "text-white/70" : "text-[var(--color-text-dim)]"}`}>{label}</span>
      <span className={`text-xs font-bold ${isSelected ? "text-white" : "text-[var(--color-accent-primary)]"}`}>{value}</span>
    </button>
  );
}

function MatchRow({
  match,
  isExpanded,
  onToggle,
  selectedOdds,
  onOddsSelect,
}: {
  match: LiveMatch;
  isExpanded: boolean;
  onToggle: () => void;
  selectedOdds: Record<string, string>;
  onOddsSelect: (matchId: number, oddType: string) => void;
}) {
  const isLive = match.status === "live" || match.status === "ht";
  const isFT = match.status === "ft";
  const matchKey = `${match.id}`;

  // Deterministic stats based on match id (no Math.random)
  const matchStats = useMemo(() => {
    const seed = match.id * 7;
    const p1 = 42 + (seed % 18);
    const p2 = 100 - p1;
    return {
      possession: [p1, p2],
      shots: [4 + (seed % 8), 3 + ((seed + 3) % 9)],
      corners: [2 + (seed % 6), 1 + ((seed + 2) % 5)],
      overOdds: (1.65 + ((seed % 5) * 0.1)).toFixed(2),
      underOdds: (1.95 + ((seed % 4) * 0.1)).toFixed(2),
      ggOdds: (1.55 + ((seed % 6) * 0.08)).toFixed(2),
      ngOdds: (2.10 + ((seed % 5) * 0.1)).toFixed(2),
    };
  }, [match.id]);

  return (
    <div className={`group rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${
      isLive
        ? "bg-[var(--color-bg-card)] border-[var(--color-danger)]/15 hover:border-[var(--color-danger)]/30"
        : "bg-[var(--color-bg-card)] border-[var(--color-border-subtle)] hover:border-[var(--color-border-accent)]"
    }`}>
      <div className="p-4">
        {/* League + minute */}
        <div className="flex items-center justify-between mb-3 cursor-pointer" onClick={onToggle}>
          <div className="flex items-center gap-2">
            <span
              className="w-5 h-5 rounded flex items-center justify-center text-[7px] font-black text-white flex-shrink-0"
              style={{ background: match.leagueColor }}
            >
              {match.leagueAbbr.slice(0, 3)}
            </span>
            <span className="text-[11px] font-medium text-[var(--color-text-muted)]">
              {match.league}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MinutePulse minute={match.minute} status={match.status} />
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`text-[var(--color-text-dim)] transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

        {/* Score section */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={onToggle}>
          {/* Home */}
          <div className="flex-1 text-right">
            <span className={`text-sm font-bold ${
              isLive && match.homeScore > match.awayScore ? "text-[var(--color-text-white)]" : "text-[var(--color-text-secondary)]"
            }`}>
              {match.homeTeam}
            </span>
          </div>

          {/* Score */}
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg min-w-[64px] justify-center ${
            isLive ? "bg-[var(--color-danger)]/10" : isFT ? "bg-[var(--color-bg-elevated)]" : "bg-[var(--color-bg-secondary)]"
          }`}>
            <span className={`text-base font-black tabular-nums ${
              isLive ? "text-[var(--color-text-white)]" : isFT ? "text-[var(--color-text-secondary)]" : "text-[var(--color-text-muted)]"
            }`}>
              {match.status === "upcoming" ? "-" : match.homeScore}
            </span>
            <span className="text-[10px] text-[var(--color-text-dim)]">:</span>
            <span className={`text-base font-black tabular-nums ${
              isLive ? "text-[var(--color-text-white)]" : isFT ? "text-[var(--color-text-secondary)]" : "text-[var(--color-text-muted)]"
            }`}>
              {match.status === "upcoming" ? "-" : match.awayScore}
            </span>
          </div>

          {/* Away */}
          <div className="flex-1 text-left">
            <span className={`text-sm font-bold ${
              isLive && match.awayScore > match.homeScore ? "text-[var(--color-text-white)]" : "text-[var(--color-text-secondary)]"
            }`}>
              {match.awayTeam}
            </span>
          </div>
        </div>

        {/* Events timeline */}
        {match.events && match.events.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-[var(--color-border-subtle)]">
            {match.events.map((event, i) => (
              <span
                key={i}
                className={`text-[10px] px-2 py-0.5 rounded-md font-medium ${
                  event.type === "goal"
                    ? "bg-[var(--color-success-bg)] text-[var(--color-success)]"
                    : event.type === "card"
                      ? "bg-[var(--color-warning-bg)] text-[var(--color-warning)]"
                      : "bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)]"
                }`}
              >
                {event.minute}&apos; {event.player}
              </span>
            ))}
          </div>
        )}

        {/* Odds row */}
        {match.status !== "ft" && match.homeOdds !== "-" && (
          <div className="flex gap-2 mt-3 pt-3 border-t border-[var(--color-border-subtle)]">
            <OddsButton
              label="1"
              value={match.homeOdds}
              isSelected={selectedOdds[matchKey] === "1"}
              onClick={() => onOddsSelect(match.id, "1")}
            />
            {match.drawOdds !== "-" && (
              <OddsButton
                label="X"
                value={match.drawOdds}
                isSelected={selectedOdds[matchKey] === "X"}
                onClick={() => onOddsSelect(match.id, "X")}
              />
            )}
            <OddsButton
              label="2"
              value={match.awayOdds}
              isSelected={selectedOdds[matchKey] === "2"}
              onClick={() => onOddsSelect(match.id, "2")}
            />
          </div>
        )}

        {/* Expanded details */}
        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-[var(--color-border-subtle)] animate-fade-in-up space-y-3">
            {/* Match stats */}
            {match.status !== "upcoming" && (
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-lg bg-[var(--color-bg-secondary)]">
                  <div className="text-[10px] text-[var(--color-text-dim)] mb-1">החזקת כדור</div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs font-bold text-[var(--color-text-white)]">{matchStats.possession[0]}%</span>
                    <span className="text-[9px] text-[var(--color-text-dim)]">-</span>
                    <span className="text-xs font-bold text-[var(--color-text-white)]">{matchStats.possession[1]}%</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-[var(--color-bg-secondary)]">
                  <div className="text-[10px] text-[var(--color-text-dim)] mb-1">בעיטות</div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs font-bold text-[var(--color-text-white)]">{matchStats.shots[0]}</span>
                    <span className="text-[9px] text-[var(--color-text-dim)]">-</span>
                    <span className="text-xs font-bold text-[var(--color-text-white)]">{matchStats.shots[1]}</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-[var(--color-bg-secondary)]">
                  <div className="text-[10px] text-[var(--color-text-dim)] mb-1">קרנות</div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs font-bold text-[var(--color-text-white)]">{matchStats.corners[0]}</span>
                    <span className="text-[9px] text-[var(--color-text-dim)]">-</span>
                    <span className="text-xs font-bold text-[var(--color-text-white)]">{matchStats.corners[1]}</span>
                  </div>
                </div>
              </div>
            )}

            {/* More odds markets */}
            {match.status !== "ft" && (
              <div>
                <div className="text-[10px] text-[var(--color-text-dim)] font-semibold mb-2 uppercase tracking-wider">שווקים נוספים</div>
                <div className="grid grid-cols-2 gap-2">
                  <OddsButton
                    label="מעל 2.5"
                    value={matchStats.overOdds}
                    isSelected={selectedOdds[matchKey] === "o2.5"}
                    onClick={() => onOddsSelect(match.id, "o2.5")}
                  />
                  <OddsButton
                    label="תחת 2.5"
                    value={matchStats.underOdds}
                    isSelected={selectedOdds[matchKey] === "u2.5"}
                    onClick={() => onOddsSelect(match.id, "u2.5")}
                  />
                  <OddsButton
                    label="GG"
                    value={matchStats.ggOdds}
                    isSelected={selectedOdds[matchKey] === "gg"}
                    onClick={() => onOddsSelect(match.id, "gg")}
                  />
                  <OddsButton
                    label="NG"
                    value={matchStats.ngOdds}
                    isSelected={selectedOdds[matchKey] === "ng"}
                    onClick={() => onOddsSelect(match.id, "ng")}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function LiveMatches() {
  const [filter, setFilter] = useState<"all" | "live" | "upcoming" | "ft">("all");
  const [now, setNow] = useState(new Date());
  const [expandedMatches, setExpandedMatches] = useState<Set<number>>(new Set());
  const [selectedOdds, setSelectedOdds] = useState<Record<string, string>>({});

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, []);

  const filtered = filter === "all" ? liveMatches : liveMatches.filter((m) =>
    filter === "live" ? (m.status === "live" || m.status === "ht") : m.status === filter
  );
  const liveCount = liveMatches.filter((m) => m.status === "live" || m.status === "ht").length;

  const toggleMatch = (id: number) => {
    setExpandedMatches((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleOddsSelect = (matchId: number, oddType: string) => {
    setSelectedOdds((prev) => {
      const key = `${matchId}`;
      if (prev[key] === oddType) {
        const next = { ...prev };
        delete next[key];
        return next;
      }
      return { ...prev, [key]: oddType };
    });
  };

  const totalSelected = Object.keys(selectedOdds).length;

  return (
    <section id="live" className="py-24 px-4 md:px-6" aria-label="משחקים חיים ותוצאות בזמן אמת">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[var(--color-danger)] to-[var(--color-accent-primary)]" />
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-[var(--color-text-white)]">
                משחקים חיים
              </h2>
              <p className="text-sm text-[var(--color-text-muted)]">
                תוצאות בזמן אמת / עדכון: {now.toLocaleTimeString("he-IL", { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--color-danger-bg)] border border-[var(--color-danger)]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-danger)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-danger)]" />
              </span>
              <span className="text-xs font-bold text-[var(--color-danger)]">{liveCount} LIVE</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6">
          {[
            { id: "all" as const, label: "הכל", count: liveMatches.length },
            { id: "live" as const, label: "LIVE", count: liveCount },
            { id: "upcoming" as const, label: "קרובים", count: liveMatches.filter((m) => m.status === "upcoming").length },
            { id: "ft" as const, label: "הסתיימו", count: liveMatches.filter((m) => m.status === "ft").length },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                filter === f.id
                  ? "bg-[var(--color-accent-primary)] text-white"
                  : "bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border-accent)]"
              }`}
            >
              {f.label} ({f.count})
            </button>
          ))}
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((match, i) => (
            <div key={match.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <MatchRow
                match={match}
                isExpanded={expandedMatches.has(match.id)}
                onToggle={() => toggleMatch(match.id)}
                selectedOdds={selectedOdds}
                onOddsSelect={handleOddsSelect}
              />
            </div>
          ))}
        </div>

        {/* Bet slip indicator */}
        {totalSelected > 0 && (
          <div className="fixed bottom-24 right-6 z-40 animate-scale-in">
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-l from-[var(--color-accent-primary)] to-[var(--color-accent-tertiary)] shadow-xl shadow-[var(--color-accent-primary)]/20">
              <div className="text-sm font-bold text-white">{totalSelected} בחירות</div>
              <button
                onClick={() => setSelectedOdds({})}
                className="text-xs font-medium text-white/70 hover:text-white transition-colors"
              >
                נקה
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="section-divider mt-16" />
    </section>
  );
}
