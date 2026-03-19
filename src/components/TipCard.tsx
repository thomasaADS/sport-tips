"use client";

import { useState } from "react";

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
    value >= 80 ? "#10b981" : value >= 65 ? "#60a5fa" : "#3b82f6";

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
    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/10 text-[10px] font-bold text-blue-400 border border-blue-500/20">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> LIVE
    </span>
  );
}

export default function TipCard({ tip }: { tip: Tip }) {
  const [expanded, setExpanded] = useState(false);

  const confGradient =
    tip.confidence >= 80
      ? "from-emerald-500 to-emerald-400"
      : tip.confidence >= 65
        ? "from-blue-500 to-blue-400"
        : "from-sky-500 to-sky-400";

  return (
    <div
      className="group rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] hover:border-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(255,255,255,0.04)] overflow-hidden cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Hot banner */}
      {tip.isHot && (
        <div className="bg-gradient-to-l from-[var(--color-accent-primary)] to-[var(--color-accent-tertiary)] px-4 py-1.5 flex items-center justify-between">
          <span className="text-[11px] font-extrabold text-black tracking-wide">TOP PICK</span>
          <span className="text-[10px] font-black text-black/70 tracking-widest">HOT</span>
        </div>
      )}

      <div className="p-6">
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
            <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-base font-black text-[var(--color-accent-primary)] mb-2">
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

        {/* Analysis - short preview or full */}
        <p className={`text-[11px] text-[var(--color-text-muted)] leading-relaxed ${expanded ? "" : "line-clamp-2"}`}>
          {tip.analysis}
        </p>

        {/* Expanded content */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-[var(--color-border-subtle)] animate-fade-in-up space-y-3">
            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded-lg bg-[var(--color-bg-secondary)] text-center">
                <div className="text-[9px] text-[var(--color-text-dim)] mb-1">ביטחון</div>
                <div className="text-sm font-black" style={{ color: tip.confidence >= 80 ? "#10b981" : tip.confidence >= 65 ? "#60a5fa" : "#3b82f6" }}>
                  {tip.confidence}%
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-[var(--color-bg-secondary)] text-center">
                <div className="text-[9px] text-[var(--color-text-dim)] mb-1">מקדם</div>
                <div className="text-sm font-black text-[var(--color-accent-primary)]">{tip.odds}</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[var(--color-bg-secondary)] text-center">
                <div className="text-[9px] text-[var(--color-text-dim)] mb-1">ענף</div>
                <div className="text-sm font-bold text-white">{tip.sportLabel}</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-2">
              <a
                href="https://whatsapp.com/channel/0029VbBHha66xCSMBMTLas3d"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-[#25D366]/90 hover:bg-[#25D366] transition-all"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                שתפו בווצאפ
              </a>
              <button
                onClick={(e) => { e.stopPropagation(); setExpanded(false); }}
                className="px-4 py-2.5 rounded-xl text-xs font-medium text-[var(--color-text-muted)] bg-[var(--color-bg-secondary)] hover:text-white transition-all border border-[var(--color-border-subtle)]"
              >
                סגור
              </button>
            </div>
          </div>
        )}

        {/* Expand hint */}
        {!expanded && (
          <div className="flex items-center justify-center mt-3 pt-3 border-t border-[var(--color-border-subtle)]">
            <span className="text-[10px] text-[var(--color-text-dim)] flex items-center gap-1">
              לחצו לפרטים נוספים
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
