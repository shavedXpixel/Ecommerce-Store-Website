import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import promoImage from "@/assets/promo-gear.jpg";

const PromoBanner = () => (
  <section className="w-full px-6 mb-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-primary text-primary-foreground">
      <div className="relative min-h-[260px] md:min-h-[360px]">
        <img
          src={promoImage}
          alt="Gaming keyboard, mouse and headphones"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-10 md:p-14 flex flex-col justify-center gap-4">
        <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">
          Limited offer
        </p>
        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
          Save up to <span className="italic font-light">25%</span> on gaming
          essentials
        </h3>
        <p className="text-sm font-light text-primary-foreground/80 max-w-md">
          Stock up on keyboards, mice, headsets, and desk mats. Free shipping on
          orders above ₹999.
        </p>
        <div>
          <Button
            asChild
            size="lg"
            className="bg-background text-primary hover:bg-background/90 rounded-none h-12 px-6 mt-2"
          >
            <Link to="/category/accessories" className="inline-flex items-center gap-2">
              Shop the sale <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default PromoBanner;