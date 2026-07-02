interface RatingStarsProps {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
  showCount?: boolean;
  className?: string;
}

const Star = ({ fill }: { fill: number }) => {
  const clipId = `clip-${Math.random().toString(36).slice(2)}`;
  return (
    <svg viewBox="0 0 20 20" className="w-3.5 h-3.5">
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width={20 * fill} height="20" />
        </clipPath>
      </defs>
      <path
        d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.79L10 14.77 4.79 17.51l1-5.79L1.58 7.62l5.82-.85L10 1.5z"
        fill="hsl(var(--muted-foreground) / 0.3)"
      />
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.79L10 14.77 4.79 17.51l1-5.79L1.58 7.62l5.82-.85L10 1.5z"
          fill="hsl(var(--primary))"
        />
      </g>
    </svg>
  );
};

const RatingStars = ({ rating, reviewCount, showCount, className = "" }: RatingStarsProps) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex items-center gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => {
          const fill = Math.max(0, Math.min(1, rating - i));
          return <Star key={i} fill={fill} />;
        })}
      </div>
      <span className="text-xs font-light text-muted-foreground">
        {rating.toFixed(1)}
        {showCount && reviewCount !== undefined ? ` (${reviewCount})` : ""}
      </span>
    </div>
  );
};

export default RatingStars;