import { Link } from "react-router-dom";
import { ArrowRight, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-3d-replacement.jpg";

const rotatingWords = ["battlestation.", "arsenal.", "setup.", "rig."];
const brands = ["ASUS ROG", "Razer", "Logitech G", "SteelSeries", "HyperX", "Corsair", "MSI", "Alienware"];

const HeroBanner = () => {
  return (
    <section className="relative w-full mb-20 overflow-hidden bg-primary text-primary-foreground isolate">
      {/* Animated aurora blobs */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full bg-[hsl(217_91%_60%/0.45)] blur-3xl animate-aurora" />
        <div className="absolute top-1/3 -right-24 h-[460px] w-[460px] rounded-full bg-[hsl(199_89%_48%/0.4)] blur-3xl animate-aurora-2" />
        <div className="absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full bg-[hsl(258_90%_66%/0.35)] blur-3xl animate-aurora" style={{ animationDelay: "-4s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Floating tiny particles */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary-foreground/60 animate-float-y-slow"
            style={{
              left: `${(i * 73) % 100}%`,
              top: `${(i * 47) % 100}%`,
              animationDelay: `${(i % 6) * -1.2}s`,
              animationDuration: `${6 + (i % 5)}s`,
              opacity: 0.4 + ((i % 5) / 10),
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground/90 animate-fade-in"
            style={{ animationDelay: "0.05s", animationFillMode: "both" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground" />
            </span>
            <Zap className="h-3 w-3" /> New season drop · live
          </span>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight animate-fade-in"
            style={{ animationDelay: "0.15s", animationFillMode: "both" }}
          >
            Level up your{" "}
            <span className="inline-block align-bottom h-[1.05em] overflow-hidden relative">
              <span
                className="inline-flex flex-col italic font-light bg-gradient-to-r from-primary-foreground via-[hsl(217_91%_75%)] to-primary-foreground bg-clip-text text-transparent animate-gradient-pan"
                style={{ animation: "word-rotate 8s steps(1) infinite, gradient-pan 6s ease infinite" }}
              >
                {rotatingWords.map((w) => (
                  <span key={w} className="block leading-[1.05]">
                    {w}
                  </span>
                ))}
                <span className="block leading-[1.05]">{rotatingWords[0]}</span>
              </span>
              <span className="inline-block w-[3px] h-[0.85em] bg-primary-foreground ml-1 align-middle animate-blink" />
            </span>
          </h1>

          <p
            className="text-base md:text-lg font-light text-primary-foreground/80 max-w-xl leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            Pro-grade gaming laptops, mechanical keyboards, ultralight mice, and
            high-refresh monitors — handpicked and delivered across India.
          </p>

          <div
            className="flex flex-wrap gap-3 pt-2 animate-fade-in"
            style={{ animationDelay: "0.45s", animationFillMode: "both" }}
          >
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden bg-background text-primary hover:bg-background/90 rounded-none h-12 px-6 group"
            >
              <Link to="/category/laptops" className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Shop Gaming Laptops
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                {/* shimmer sweep */}
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                  style={{ animation: "shimmer-slide 2.8s ease-in-out infinite" }}
                />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-none h-12 px-6"
            >
              <Link to="/category/accessories">Explore Accessories</Link>
            </Button>
          </div>

          <div
            className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 text-xs font-light text-primary-foreground/80 animate-fade-in"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            {[
              "Free shipping above ₹999",
              "2-year warranty",
              "7-day easy returns",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground animate-pulse" />
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          {/* Glow ring behind image */}
          <div
            aria-hidden
            className="absolute -inset-6 rounded-sm bg-gradient-to-tr from-[hsl(217_91%_60%/0.6)] via-[hsl(258_90%_66%/0.4)] to-[hsl(199_89%_48%/0.6)] blur-2xl opacity-70 animate-gradient-pan"
          />

          <div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-2xl animate-float-y"
            style={{ animationDuration: "7s" }}
          >
            <img
              src={heroImage}
              alt="Premium RGB gaming laptop"
              className="w-full h-full object-cover scale-105"
            />
            {/* scan line sweep */}
            <div
              aria-hidden
              className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-[hsl(217_91%_70%/0.35)] to-transparent animate-scan pointer-events-none"
            />
            {/* subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          </div>

          {/* Floating top-right badge */}
          <div
            className="absolute -top-4 -right-4 bg-background/95 backdrop-blur text-foreground px-4 py-2 shadow-2xl rounded-sm border border-border animate-float-y-slow"
            style={{ animationDelay: "-2s" }}
          >
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">In stock</p>
            <p className="text-sm font-semibold text-primary">Ships in 24h</p>
          </div>

          {/* Bottom-left product card */}
          <div
            className="absolute -bottom-6 -left-6 bg-background text-foreground p-5 shadow-2xl max-w-[220px] animate-float-y"
            style={{ animationDelay: "-3.5s", animationDuration: "6s" }}
          >
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
              Top pick
            </p>
            <p className="text-sm font-medium">Raven X16 RTX</p>
            <p className="text-xs text-muted-foreground">RTX 4080 · 240Hz QHD+</p>
            <p className="text-lg font-semibold text-primary mt-2">₹1,84,999</p>
          </div>
        </div>
      </div>

      {/* Brand marquee */}
      <div className="relative border-t border-primary-foreground/10 bg-primary/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">
          <p className="hidden md:block text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60 shrink-0">
            Trusted brands
          </p>
          <div className="flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-12 whitespace-nowrap animate-marquee w-max">
              {[...brands, ...brands].map((b, i) => (
                <span
                  key={`${b}-${i}`}
                  className="text-sm font-medium tracking-wide text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;