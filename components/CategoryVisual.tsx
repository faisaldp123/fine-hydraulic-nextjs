import Image from "next/image";
import { Category } from "@/lib/data";

const ACCENTS = ["#E2861E", "#6B8CAE", "#B96812", "#8A9BA8"];

// Products without listed photos keep their existing technical SVG illustration.
const CATEGORY_IMAGES: Partial<Record<Category["slug"], string[]>> = {
  engine: ["/images/engine/one.jpeg", "/images/engine/two.jpeg", "/images/engine/three.jpeg", "/images/engine/four.jpeg"],
  excavator: ["/images/excavator/one.jpeg", "/images/excavator/two.jpeg", "/images/excavator/three.jpeg"],
};

function Glyph({ icon, stroke }: { icon: Category["icon"]; stroke: string }) {
  const common = {
    fill: "none",
    stroke,
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (icon) {
    case "transmission":
      return (
        <g {...common}>
          <circle cx="70" cy="100" r="30" />
          <circle cx="70" cy="100" r="9" />
          <circle cx="150" cy="100" r="22" />
          <circle cx="150" cy="100" r="7" />
          <path d="M40 100h-16M100 100h20M172 100h16" />
          {Array.from({ length: 10 }).map((_, i) => {
            const a = (i / 10) * Math.PI * 2;
            return (
              <line
                key={i}
                x1={70 + Math.cos(a) * 30}
                y1={100 + Math.sin(a) * 30}
                x2={70 + Math.cos(a) * 37}
                y2={100 + Math.sin(a) * 37}
              />
            );
          })}
          <rect x="95" y="86" width="10" height="28" />
        </g>
      );
    case "engine":
      return (
        <g {...common}>
          <rect x="40" y="70" width="120" height="70" rx="4" />
          <rect x="60" y="40" width="30" height="30" rx="3" />
          <rect x="110" y="40" width="30" height="30" rx="3" />
          <line x1="55" y1="86" x2="55" y2="124" />
          <line x1="75" y1="86" x2="75" y2="124" />
          <line x1="95" y1="86" x2="95" y2="124" />
          <line x1="115" y1="86" x2="115" y2="124" />
          <line x1="135" y1="86" x2="135" y2="124" />
          <path d="M40 155h120" />
          <path d="M50 140v15M150 140v15" />
        </g>
      );
    case "excavator":
      return (
        <g {...common}>
          <path d="M35 150h90" />
          <rect x="35" y="150" width="90" height="10" rx="2" />
          <rect x="55" y="120" width="40" height="30" rx="3" />
          <path d="M85 122 L130 95 L150 100 M130 95 L138 70" />
          <path d="M138 70 L165 62 L172 78 L150 100" />
          <circle cx="60" cy="160" r="10" />
          <circle cx="100" cy="160" r="10" />
        </g>
      );
    case "grader":
      return (
        <g {...common}>
          <path d="M30 145h150" />
          <circle cx="60" cy="152" r="9" />
          <circle cx="150" cy="152" r="9" />
          <path d="M60 145 L95 100 L140 95" />
          <path d="M95 100 L95 60" />
          <path d="M70 145 L120 138 L128 152 L65 155 Z" />
        </g>
      );
    case "roller":
      return (
        <g {...common}>
          <rect x="35" y="90" width="45" height="45" rx="22" />
          <rect x="120" y="95" width="45" height="40" rx="6" />
          <path d="M80 112 L120 112" />
          <path d="M45 112 L70 112 M55 100 L55 124" />
          <circle cx="140" cy="135" r="8" />
        </g>
      );
    case "dozer":
      return (
        <g {...common}>
          <path d="M35 150h130" />
          <rect x="60" y="115" width="55" height="30" rx="3" />
          <path d="M115 120 L150 100 L160 115 L130 140" />
          <path d="M45 150 L55 120 L70 150" />
          <path d="M40 158h20M45 155v10M155 155v10" />
        </g>
      );
    case "wiring":
      return (
        <g {...common}>
          <path d="M45 60 L45 90 L90 90 L90 120 L60 120 L60 150" />
          <path d="M155 60 L155 90 L110 90 L110 120 L140 120 L140 150" />
          <circle cx="45" cy="55" r="6" />
          <circle cx="155" cy="55" r="6" />
          <circle cx="60" cy="155" r="6" />
          <circle cx="140" cy="155" r="6" />
          <path d="M85 100 L115 100" strokeDasharray="4 5" />
        </g>
      );
    case "hydraulicPump":
      return (
        <g {...common}>
          <rect x="55" y="70" width="70" height="60" rx="6" />
          <circle cx="90" cy="100" r="18" />
          <path d="M125 90 L150 90 M125 110 L150 110" />
          <path d="M60 70 L60 55 M110 70 L110 55" />
          <path d="M150 85 L162 85 L162 115 L150 115" />
        </g>
      );
    case "hydraulicMotor":
      return (
        <g {...common}>
          <circle cx="95" cy="100" r="42" />
          <circle cx="95" cy="100" r="14" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i / 8) * Math.PI * 2;
            return (
              <line
                key={i}
                x1={95 + Math.cos(a) * 20}
                y1={100 + Math.sin(a) * 20}
                x2={95 + Math.cos(a) * 40}
                y2={100 + Math.sin(a) * 40}
              />
            );
          })}
          <path d="M137 100h20" />
        </g>
      );
    case "trackMotor":
      return (
        <g {...common}>
          <rect x="30" y="80" width="130" height="20" rx="10" />
          <circle cx="55" cy="90" r="26" />
          <circle cx="55" cy="90" r="10" />
          <circle cx="140" cy="90" r="14" />
          <path d="M30 130 L160 130" />
          <path d="M45 130 L45 145 M75 130 L75 145 M105 130 L105 145 M135 130 L135 145" />
        </g>
      );
    case "swingDevice":
      return (
        <g {...common}>
          <circle cx="95" cy="100" r="40" strokeDasharray="6 6" />
          <circle cx="95" cy="100" r="20" />
          <circle cx="95" cy="100" r="6" />
          <path d="M95 60 L95 48 M95 140 L95 152 M55 100 L43 100 M135 100 L147 100" />
        </g>
      );
    case "catSpares":
      return (
        <g {...common}>
          <rect x="45" y="65" width="35" height="35" rx="4" />
          <rect x="110" y="65" width="35" height="35" rx="4" />
          <rect x="45" y="110" width="35" height="35" rx="4" />
          <rect x="110" y="110" width="35" height="35" rx="4" />
          <path d="M62 65v-10M127 65v-10M62 145v10M127 145v10" />
        </g>
      );
    default:
      return null;
  }
}

export function CategoryVisual({
  category,
  variant = 0,
  figNo = "01",
  className = "",
}: {
  category: Category;
  variant?: number;
  figNo?: string;
  className?: string;
}) {
  const accent = ACCENTS[variant % ACCENTS.length];
  const rotate = [0, 0, 0, 0][variant % 4];
  const images = CATEGORY_IMAGES[category.slug];
  const image = images?.[variant % images.length];
  return (
    <div
      className={`relative overflow-hidden rounded-sm bg-steel crop-marks ${className}`}
      style={{ aspectRatio: "4 / 3" }}
    >
      <div className="absolute inset-0 blueprint-grid-dark" />
      {image ? (
        <Image
          src={image}
          alt={`${category.name} component`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `rotate(${rotate}deg)` }}
        >
          <svg viewBox="0 0 190 200" width="62%" height="62%">
            <Glyph icon={category.icon} stroke={accent} />
          </svg>
        </div>
      )}
      <div className="absolute left-3 top-3 font-data text-[10px] tracking-widest text-slate-light/80">
        FIG. {figNo}
      </div>
      <div className="absolute right-3 top-3 font-data text-[10px] tracking-widest text-slate-light/60">
        {category.slug.toUpperCase().replace(/-/g, "·")}
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
        <span className="font-display text-sm uppercase tracking-wide text-paper/90">
          {category.shortName}
        </span>
        <span
          className="h-[3px] w-10"
          style={{ backgroundColor: accent }}
        />
      </div>
    </div>
  );
}
