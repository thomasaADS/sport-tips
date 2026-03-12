"use client";

export interface Tip {
  id: number;
  sport: string;
  sportLabel: string;
  sportColor: string;
  league: string;
  leagueRegion: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  recommendation: string;
  odds: string;
  confidence: number;
  analysis: string;
  result?: "win" | "loss" | "pending";
  category: string;
  isHot?: boolean;
}

function ConfidenceRing({ value }: { value: number }) {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  const color =
    value >= 80 ? "#10b981" : value >= 65 ? "#f59e0b" : "#3b82f6";

  return (
    <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
      <svg width="40" height="40" className="progress-ring">
        <circle cx="20" cy="20" r={radius} stroke="rgba(255,255,255,0.06)" strokeWidth="2.5" fill="none" />
        <circle
          cx="20" cy="20" r={radius} stroke={color} strokeWidth="2.5" fill="none"
          strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1s ease-out" }}
        />
      </svg>
      <span className="absolute text-[10px] font-black" style={{ color }}>{value}%</span>
    </div>
  );
}

function ResultBadge({ result }: { result?: "win" | "loss" | "pending" }) {
  if (result === "win") {
    return (
      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 text-[10px] font-bold text-emerald-400 border border-emerald-500/20">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> WIN
      </span>
    );
  }
  if (result === "loss") {
    return (
      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-500/10 text-[10px] font-bold text-red-400 border border-red-500/20">
        <span className="w-1.5 h-1.5 rounded-full bg-red-400" /> LOSS
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 text-[10px] font-bold text-amber-400 border border-amber-500/20">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" /> LIVE
    </span>
  );
}

export default function TipCard({ tip }: { tip: Tip }) {
  const confGradient =
    tip.confidence >= 80
      ? "from-emerald-500 to-emerald-400"
      : tip.confidence >= 65
        ? "from-amber-500 to-amber-400"
        : "from-blue-500 to-blue-400";

  return (
    <div className="group rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] hover:border-amber-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(245,158,11,0.08)] overflow-hidden">
      {/* Hot banner */}
      {tip.isHot && (
        <div className="bg-gradient-to-l from-amber-500 via-amber-500 to-orange-500 px-4 py-1.5 flex items-center justify-between">
          <span className="text-[11px] font-extrabold text-black tracking-wide">TOP PICK</span>
          <span className="text-[10px] font-black text-black/70 tracking-widest">HOT</span>
        </div>
      )}

      <div className="p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ background: tip.sportColor }}
            />
            <div>
              <div className="flex items-center gap-2 text-[13px] font-bold text-white">
                {tip.league}
                <span className="text-[10px] font-medium text-[var(--color-text-muted)]">
                  {tip.leagueRegion}
                </span>
              </div>
              <div className="text-[11px] text-[var(--color-text-muted)] flex items-center gap-1.5">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {tip.time}
              </div>
            </div>
          </div>
          <ResultBadge result={tip.result} />
        </div>

        {/* Teams */}
        <div className="flex items-center gap-3 mb-5 py-4 px-4 rounded-xl bg-[var(--color-bg-secondary)]/80 border border-[var(--color-border-subtle)]">
          <div className="flex-1 text-center">
            <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-base font-black text-amber-400 mb-2">
              {tip.homeTeam.charAt(0)}
            </div>
            <div className="text-[12px] font-bold text-white leading-tight">{tip.homeTeam}</div>
            <div className="text-[9px] text-[var(--color-text-dim)] mt-0.5">בית</div>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black text-[var(--color-text-dim)] tracking-[0.2em]">VS</span>
          </div>

          <div className="flex-1 text-center">
            <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-base font-black text-blue-400 mb-2">
              {tip.awayTeam.charAt(0)}
            </div>
            <div className="text-[12px] font-bold text-white leading-tight">{tip.awayTeam}</div>
            <div className="text-[9px] text-[var(--color-text-dim)] mt-0.5">חוץ</div>
          </div>
        </div>

        {/* Recommendation + Odds + Confidence */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 min-w-0 py-3 px-4 rounded-xl bg-[var(--color-bg-secondary)]/60 border border-[var(--color-border-subtle)]">
            <div className="text-[9px] text-[var(--color-text-dim)] font-semibold uppercase tracking-wider mb-1">המלצה</div>
            <div className="text-[13px] font-bold text-white truncate">{tip.recommendation}</div>
          </div>
          <div className={`px-4 py-3 rounded-xl bg-gradient-to-br ${confGradient} text-center flex-shrink-0`}>
            <div className="text-[9px] font-semibold text-black/60 uppercase">מקדם</div>
            <div className="text-lg font-black text-black leading-none">{tip.odds}</div>
          </div>
          <ConfidenceRing value={tip.confidence} />
        </div>

        {/* Confidence bar */}
        <div className="h-1 rounded-full bg-white/5 overflow-hidden mb-4">
          <div
            className={`h-full rounded-full bg-gradient-to-l ${confGradient} transition-all duration-1000`}
            style={{ width: `${tip.confidence}%` }}
          />
        </div>

        {/* Analysis */}
        <p className="text-[11px] text-[var(--color-text-muted)] leading-relaxed">
          {tip.analysis}
        </p>
      </div>
    </div>
  );
}
