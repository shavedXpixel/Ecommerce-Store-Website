import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  href?: string;
  ctaLabel?: string;
}

const SectionHeader = ({ eyebrow, title, href, ctaLabel = "View all" }: SectionHeaderProps) => (
  <div className="flex items-end justify-between mb-6 px-6 max-w-7xl mx-auto w-full">
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {eyebrow}
      </p>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
    </div>
    {href && (
      <Link
        to={href}
        className="inline-flex items-center gap-1 text-sm font-light text-primary hover:gap-2 transition-all"
      >
        {ctaLabel} <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    )}
  </div>
);

export default SectionHeader;