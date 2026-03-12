"use client";

export interface Tip {
  id: number;
  sport: string;
  sportEmoji: string;
  league: string;
  leagueFlag: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  recommendation: string;
  odds: string;
  confidence: number;
  analysis: string;
  result?: "win" | "loss" | "pending";
  category: string;
}

function getConfidenceColor(confidence: number) {
  if (confidence >= 80) return "text-[var(--color-green)]";
  if (confidence >= 60) return "text-[var(--color-gold)]";
  return "text-orange-400";
}

function getConfidenceBg(confidence: number) {
  if (confidence >= 80)
    return "bg-[var(--color-green)]/10 border-[var(--color-green)]/30";
  if (confidence >= 60)
    return "bg-[var(--color-gold)]/10 border-[var(--color-gold)]/30";
  return "bg-orange-400/10 border-orange-400/30";
}

function getResultBadge(result?: "win" | "loss" | "pending") {
  switch (result) {
    case "win":
      return (
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--color-green)]/20 text-[var(--color-green)] border border-[var(--color-green)]/30">
          \u2714 WIN
        </span>
      );
    case "loss":
      return (
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--color-red)]/20 text-[var(--color-red)] border border-[var(--color-red)]/30">
          \u2716 LOSS
        </span>
      );
    default:
      return (
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--color-gold)]/20 text-[var(--color-gold)] border border-[var(--color-gold)]/30 animate-pulse">
          \u23F3 ממתין
        </span>
      );
  }
}

export default function TipCard({ tip }: { tip: Tip }) {
  return (
    <div className="tip-card glass rounded-2xl p-5 animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">{tip.sportEmoji}</span>
          <div>
            <div className="text-sm font-semibold text-white">{tip.league}</div>
            <div className="text-xs text-[var(--color-text-secondary)]">
              {tip.leagueFlag} {tip.time}
            </div>
          </div>
        </div>
        {getResultBadge(tip.result)}
      </div>

      {/* Teams */}
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="text-center flex-1">
          <div className="w-12 h-12 mx-auto rounded-full bg-[var(--color-surface-light)] flex items-center justify-center text-lg font-bold text-[var(--color-gold)] mb-2">
            {tip.homeTeam.charAt(0)}
          </div>
          <div className="text-sm font-medium">{tip.homeTeam}</div>
        </div>

        <div className="px-4 py-2 rounded-xl bg-[var(--color-surface-light)] text-[var(--color-gold)] font-bold text-lg">
          VS
        </div>

        <div className="text-center flex-1">
          <div className="w-12 h-12 mx-auto rounded-full bg-[var(--color-surface-light)] flex items-center justify-center text-lg font-bold text-[var(--color-gold)] mb-2">
            {tip.awayTeam.charAt(0)}
          </div>
          <div className="text-sm font-medium">{tip.awayTeam}</div>
        </div>
      </div>

      {/* Recommendation */}
      <div
        className={`rounded-xl p-3 mb-3 border ${getConfidenceBg(tip.confidence)}`}
      >
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-bold text-white">
            {tip.recommendation}
          </span>
          <span className="text-sm font-bold text-[var(--color-gold)]">
            {tip.odds}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[var(--color-text-secondary)]">
            ביטחון:
          </span>
          <div className="flex-1 h-2 rounded-full bg-[var(--color-surface)] overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{
                width: `${tip.confidence}%`,
                background:
                  tip.confidence >= 80
                    ? "var(--color-green)"
                    : tip.confidence >= 60
                      ? "var(--color-gold)"
                      : "#fb923c",
              }}
            ></div>
          </div>
          <span className={`text-xs font-bold ${getConfidenceColor(tip.confidence)}`}>
            {tip.confidence}%
          </span>
        </div>
      </div>

      {/* Analysis */}
      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
        {tip.analysis}
      </p>
    </div>
  );
}
