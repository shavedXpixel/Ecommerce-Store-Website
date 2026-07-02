import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReviewProduct from "./ReviewProduct";
import RatingStars from "./RatingStars";
import type { Product } from "@/data/products";

interface ProductDescriptionProps {
  product: Product;
}

const ProductDescription = ({ product }: ProductDescriptionProps) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  return (
    <div className="space-y-0 mt-8 border-t border-border">
      <div className="border-b border-border">
        <Button
          variant="ghost"
          onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent font-light rounded-none"
        >
          <span>Description</span>
          {isDescriptionOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
        {isDescriptionOpen && (
          <div className="pb-6 space-y-4">
            {product.description.map((p, i) => (
              <p key={i} className="text-sm font-light text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="border-b border-border">
        <Button
          variant="ghost"
          onClick={() => setIsSpecsOpen(!isSpecsOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent font-light rounded-none"
        >
          <span>Specifications</span>
          {isSpecsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
        {isSpecsOpen && (
          <div className="pb-6 space-y-3">
            {product.specs.map((s) => (
              <div key={s.label} className="flex justify-between gap-4">
                <span className="text-sm font-light text-muted-foreground">{s.label}</span>
                <span className="text-sm font-light text-foreground text-right">{s.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border-b border-border">
        <Button
          variant="ghost"
          onClick={() => setIsShippingOpen(!isShippingOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent font-light rounded-none"
        >
          <span>Shipping & Returns</span>
          {isShippingOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
        {isShippingOpen && (
          <div className="pb-6 space-y-2">
            <p className="text-sm font-light text-muted-foreground">• Free shipping across India on orders above ₹999</p>
            <p className="text-sm font-light text-muted-foreground">• Delivery in 3-5 business days</p>
            <p className="text-sm font-light text-muted-foreground">• 7-day no-questions-asked returns</p>
            <p className="text-sm font-light text-muted-foreground">• 2-year manufacturer warranty</p>
          </div>
        )}
      </div>

      <div className="border-b border-border lg:mb-16">
        <Button
          variant="ghost"
          onClick={() => setIsReviewsOpen(!isReviewsOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent font-light rounded-none"
        >
          <div className="flex items-center gap-3">
            <span>Customer Reviews</span>
            <RatingStars rating={product.rating} reviewCount={product.reviewCount} showCount />
          </div>
          {isReviewsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
        {isReviewsOpen && (
          <div className="pb-6 space-y-6">
            <ReviewProduct />
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <RatingStars rating={5} />
                  <span className="text-sm font-light text-muted-foreground">Aryan K.</span>
                </div>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  "Performance is insane. Runs everything I throw at it on max settings without breaking a sweat."
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <RatingStars rating={4} />
                  <span className="text-sm font-light text-muted-foreground">Neha S.</span>
                </div>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  "Build quality is excellent and delivery was quick. Great value for the price."
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
