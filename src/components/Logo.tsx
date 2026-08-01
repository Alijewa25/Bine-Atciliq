export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
        {/* Xarici İncə Ağ Halqa */}
        <circle cx="50" cy="50" r="46" fill="none" stroke="#ffffff" strokeWidth="2.5" />
        
        {/* Tünd Göy (Navy) Daxili Fon */}
        <circle cx="50" cy="50" r="43" fill="#111c38" />

        {/* Siluet At Başı və Azərbaycan Bayrağının Rəngləri (Yal) */}
        <g transform="translate(14, 12) scale(0.72)">
          {/* Mavi Zolaq */}
          <path
            d="M 50 18 C 38 28, 30 42, 30 58 C 32 42, 42 28, 52 20 Z"
            fill="#0092c8"
          />
          {/* Qırmızı Zolaq */}
          <path
            d="M 52 20 C 42 32, 34 46, 35 64 C 38 46, 48 32, 58 24 Z"
            fill="#e03838"
          />
          {/* Yaşıl Zolaq */}
          <path
            d="M 58 24 C 48 38, 40 52, 42 70 C 45 52, 55 38, 64 28 Z"
            fill="#22ac38"
          />
          {/* Atın Ağ Silueti */}
          <path
            d="M 28 58 C 22 52, 18 42, 22 35 C 25 30, 32 30, 35 34 C 36 32, 34 26, 30 22 C 38 20, 48 24, 50 18 C 42 28, 30 42, 30 58 C 26 50, 22 56, 28 58 Z"
            fill="#ffffff"
          />
        </g>
      </svg>
    </div>
  );
}