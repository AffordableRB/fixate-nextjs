export function FrontDoorVisual() {
  return (
    <div className="flex items-center justify-center">
      <style>{`
        @keyframes doorPulse {
          0% {
            transform: scale(0.85);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          50% {
            transform: scale(1.02);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .door-svg {
          animation: doorPulse 2.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards;
        }
      `}</style>
      <svg
        viewBox="0 0 300 400"
        width="280"
        height="373"
        className="door-svg text-white"
        style={{ 
          filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.15))',
        }}
      >
        {/* Door Frame - Outer Rectangle (larger) */}
        <g>
          {/* Frame */}
          <rect
            x="50"
            y="30"
            width="200"
            height="340"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Door Panel - Inner Rectangle (slightly inset) */}
          <rect
            x="65"
            y="45"
            width="170"
            height="310"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Door Handle - Larger circle with depth */}
          <circle
            cx="210"
            cy="180"
            r="7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.8"
          />

          {/* Handle Detail - Line suggesting depth */}
          <line
            x1="217"
            y1="180"
            x2="228"
            y2="180"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.6"
            strokeLinecap="round"
          />

          {/* Vertical Divider (door panel line) */}
          <line
            x1="150"
            y1="45"
            x2="150"
            y2="355"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.5"
            strokeLinecap="round"
          />

          {/* Top Transom Detail (architectural element) */}
          <line
            x1="50"
            y1="100"
            x2="250"
            y2="100"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.4"
            strokeLinecap="round"
          />

          {/* Hinge indicators on left side */}
          <circle
            cx="55"
            cy="80"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <circle
            cx="55"
            cy="200"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <circle
            cx="55"
            cy="320"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.5"
          />

          {/* Subtle perspective lines suggesting depth */}
          <line
            x1="42"
            y1="38"
            x2="50"
            y2="30"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.3"
            strokeLinecap="round"
          />
          <line
            x1="42"
            y1="372"
            x2="50"
            y2="370"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.3"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
