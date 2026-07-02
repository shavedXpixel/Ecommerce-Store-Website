import showcaseImage from "@/assets/showcase-gear.jpg";
import TiltCard from "@/components/three/TiltCard";

const PerformanceShowcase = () => (
  <section className="w-full px-6 mb-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-primary text-primary-foreground p-10 md:p-14 overflow-hidden relative">
      <div className="space-y-4 relative z-10">
        <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">
          Engineered for performance
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
          Precision-built gear,{" "}
          <span className="italic font-light">in motion.</span>
        </h2>
        <p className="text-sm font-light text-primary-foreground/80 max-w-md">
          Every product on Priyansu Store is benchmarked, tested, and tuned for
          competitive play — from frame-time stability to switch travel.
        </p>
        <div className="grid grid-cols-3 gap-4 pt-4 max-w-md">
          {[
            { k: "240Hz", v: "Refresh" },
            { k: "<1ms", v: "Response" },
            { k: "100%", v: "DCI-P3" },
          ].map((s) => (
            <div key={s.k}>
              <p className="text-2xl font-semibold">{s.k}</p>
              <p className="text-[11px] uppercase tracking-wider text-primary-foreground/60">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </div>
      <TiltCard max={8} className="w-full">
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img
            src={showcaseImage}
            alt="Gaming laptop with curved gaming monitor"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </TiltCard>
    </div>
  </section>
);

export default PerformanceShowcase;