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
  isHot?: boolean;
}

function ConfidenceRing({ value }: { value: number }) {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  const color =
    value >= 80
      ? "var(--color-success)"
      : value >= 65
        ? "var(--color-accent-primary)"
        : "var(--color-accent-blue)";

  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <svg width="48" height="48" className="progress-ring">
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="var(--color-bg-elevated)"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1s ease-out" }}
        />
      </svg>
      <span
        className="absolute text-[11px] font-black"
        style={{ color }}
      >
        {value}%
      </span>
    </div>
  );
}

function ResultBadge({ result }: { result?: "win" | "loss" | "pending" }) {
  if (result === "win") {
    return (
      <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[var(--color-success-bg)] border border-[var(--color-success)]/20">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)]" />
        <span className="text-[11px] font-bold text-[var(--color-success)]">WIN</span>
      </div>
    );
  }
  if (result === "loss") {
    return (
      <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[var(--color-danger-bg)] border border-[var(--color-danger)]/20">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-danger)]" />
        <span className="text-[11px] font-bold text-[var(--color-danger)]">LOSS</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[var(--color-warning-bg)] border border-[var(--color-accent-primary)]/20">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)] animate-pulse" />
      <span className="text-[11px] font-bold text-[var(--color-accent-primary)]">PENDING</span>
    </div>
  );
}

export default function TipCard({ tip }: { tip: Tip }) {
  return (
    <div className={`card p-0 overflow-hidden ${tip.isHot ? "card-accent" : ""}`}>
      {/* Hot banner */}
      {tip.isHot && (
        <div className="bg-gradient-to-l from-[var(--color-accent-primary)] to-[var(--color-accent-tertiary)] px-4 py-1.5 flex items-center justify-between">
          <span className="text-[11px] font-bold text-[var(--color-bg-deep)]">
            🔥 המלצה חמה
          </span>
          <span className="text-[11px] font-bold text-[var(--color-bg-deep)]">
            TOP PICK
          </span>
        </div>
      )}

      <div className="p-5">
        {/* Header - league & result */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[var(--color-bg-elevated)] flex items-center justify-center text-lg">
              {tip.sportEmoji}
            </div>
            <div>
              <div className="text-sm font-bold text-[var(--color-text-white)] flex items-center gap-2">
                {tip.league}
                <span className="text-base">{tip.leagueFlag}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {tip.time}
              </div>
            </div>
          </div>
          <ResultBadge result={tip.result} />
        </div>

        {/* Teams matchup */}
        <div className="flex items-center justify-between mb-5 bg-[var(--color-bg-secondary)] rounded-2xl p-4">
          <div className="text-center flex-1">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-bg-elevated)] to-[var(--color-bg-card)] flex items-center justify-center text-xl font-black text-[var(--color-accent-secondary)] mb-2 border border-[var(--color-border-subtle)]">
              {tip.homeTeam.charAt(0)}
            </div>
            <div className="text-sm font-bold text-[var(--color-text-white)]">
              {tip.homeTeam}
            </div>
            <div className="text-[10px] text-[var(--color-text-muted)] mt-0.5">בית</div>
          </div>

          <div className="flex flex-col items-center gap-1 px-3">
            <div className="text-xs font-black text-[var(--color-text-muted)] tracking-widest">VS</div>
            <div className="w-8 h-0.5 rounded-full bg-gradient-to-l from-[var(--color-accent-primary)] to-transparent" />
          </div>

          <div className="text-center flex-1">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-bg-elevated)] to-[var(--color-bg-card)] flex items-center justify-center text-xl font-black text-[var(--color-accent-blue)] mb-2 border border-[var(--color-border-subtle)]">
              {tip.awayTeam.charAt(0)}
            </div>
            <div className="text-sm font-bold text-[var(--color-text-white)]">
              {tip.awayTeam}
            </div>
            <div className="text-[10px] text-[var(--color-text-muted)] mt-0.5">חוץ</div>
          </div>
        </div>

        {/* Recommendation & odds */}
        <div className="flex items-center justify-between mb-4 gap-3">
          <div className="flex-1 bg-[var(--color-bg-secondary)] rounded-xl p-3 border border-[var(--color-border-subtle)]">
            <div className="text-[10px] text-[var(--color-text-muted)] mb-1 uppercase tracking-wider font-medium">
              המלצה
            </div>
            <div className="text-sm font-bold text-[var(--color-text-white)]">
              {tip.recommendation}
            </div>
          </div>
          <div className="odds-badge text-center">
            <div className="text-[10px] text-[var(--color-text-muted)] font-medium mb-0.5">מקדם</div>
            <div className="text-lg font-black">{tip.odds}</div>
          </div>
          <ConfidenceRing value={tip.confidence} />
        </div>

        {/* Confidence bar */}
        <div className="mb-3">
          <div className="confidence-meter">
            <div
              className="confidence-meter-fill"
              style={{
                width: `${tip.confidence}%`,
                background:
                  tip.confidence >= 80
                    ? "linear-gradient(90deg, var(--color-success), #34d399)"
                    : tip.confidence >= 65
                      ? "linear-gradient(90deg, var(--color-accent-tertiary), var(--color-accent-primary))"
                      : "linear-gradient(90deg, var(--color-accent-blue), #60a5fa)",
              }}
            />
          </div>
        </div>

        {/* Analysis */}
        <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
          💡 {tip.analysis}
        </p>
      </div>
    </div>
  );
}
