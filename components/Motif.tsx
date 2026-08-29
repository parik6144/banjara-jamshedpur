type MotifProps = {
  className?: string;
};

const DOTS: [number, number][] = [
  [84, 50],
  [79.45, 67],
  [67, 79.45],
  [50, 84],
  [33, 79.45],
  [20.55, 67],
  [16, 50],
  [20.55, 33],
  [33, 20.55],
  [50, 16],
  [67, 20.55],
  [79.45, 33],
];

const PETALS: [number, number, number, number][] = [
  [66.63, 43.11, 72.18, 40.82],
  [56.89, 66.63, 59.18, 72.18],
  [33.37, 56.89, 27.82, 59.18],
  [43.11, 33.37, 40.82, 27.82],
  [56.89, 33.37, 59.18, 27.82],
  [66.63, 56.89, 72.18, 59.18],
  [43.11, 66.63, 40.82, 72.18],
  [33.37, 43.11, 27.82, 40.82],
];

export function Motif({ className = "h-10 w-10" }: MotifProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden
    >
      <circle cx="50" cy="50" r="6" className="fill-current" opacity="0.9" />
      <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="1.2" opacity="0.85" />
      <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
      <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="1.1" opacity="0.7" />
      <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
      {DOTS.map(([x, y]) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r="1.6"
          className="fill-current"
          opacity="0.8"
        />
      ))}
      {PETALS.map(([x1, y1, x2, y2]) => (
        <line
          key={`${x1}-${y1}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="currentColor"
          strokeWidth="1.1"
          opacity="0.65"
        />
      ))}
    </svg>
  );
}

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden
    >
      <span className="h-px w-8 bg-gold/70 sm:w-12" />
      <Motif className="h-6 w-6 text-gold" />
      <span className="h-px w-8 bg-gold/70 sm:w-12" />
    </div>
  );
}
