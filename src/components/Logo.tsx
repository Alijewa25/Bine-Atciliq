export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="baim-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff2d87" />
            <stop offset="55%" stopColor="#a03bff" />
            <stop offset="100%" stopColor="#ff7a2d" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="30" fill="url(#baim-grad)" />
        <path
          d="M20 46c1-6 3-10 7-13-3-1-5-3-6-6 3 1 6 2 8 4 1-4 4-7 8-8-1 3-1 6 0 9 3-1 6-1 9 0-2 2-4 4-7 5 3 3 5 7 5 12l-4-1c-1-4-3-7-6-9-2 3-3 6-3 9l-4-1c0-3 1-6 3-9-3 2-5 5-6 9l-4-1z"
          fill="#0a0a14"
        />
      </svg>
    </div>
  );
}
