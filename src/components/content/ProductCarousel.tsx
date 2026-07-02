import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { products, formatINR, type Product } from "@/data/products";
import RatingStars from "@/components/product/RatingStars";
import TiltCard from "@/components/three/TiltCard";
import { useCart } from "@/context/CartContext";

interface ProductCarouselProps {
  items?: Product[];
}

const ProductCarousel = ({ items }: ProductCarouselProps) => {
  const list = items?.length ? items : products.slice(0, 8);
  const { addItem } = useCart();

  return (
    <section className="w-full mb-16 px-6">
      <Carousel opts={{ align: "start", loop: false }} className="w-full">
        <CarouselContent>
          {list.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 pr-2 md:pr-4"
            >
              <Card className="border-none shadow-none bg-transparent group">
                <CardContent className="p-0">
                  <Link to={`/product/${product.id}`} className="block">
                    <TiltCard className="mb-3" max={12}>
                      <div className="aspect-square overflow-hidden bg-secondary relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {product.isNew && (
                          <div className="absolute top-2 left-2 px-2 py-1 text-[10px] font-medium tracking-wider bg-primary text-primary-foreground">
                            NEW
                          </div>
                        )}
                      </div>
                    </TiltCard>
                  </Link>
                  <div className="space-y-1">
                    <p className="text-xs font-light text-muted-foreground uppercase tracking-wide">
                      {product.categoryLabel}
                    </p>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-sm font-medium text-foreground line-clamp-1 hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <RatingStars rating={product.rating} reviewCount={product.reviewCount} showCount />
                    <div className="flex justify-between items-center pt-1">
                      <p className="text-sm font-medium text-foreground">
                        {formatINR(product.price)}
                      </p>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 px-2 text-primary hover:text-primary-foreground hover:bg-primary"
                        onClick={(e) => {
                          e.preventDefault();
                          addItem({
                            id: product.id,
                            name: product.name,
                            price: formatINR(product.price),
                            image: product.image,
                            category: product.categoryLabel,
                          });
                          toast.success(`${product.name} added to cart`);
                        }}
                      >
                        <ShoppingBag className="h-4 w-4 mr-1" />
                        <span className="text-xs">Add</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ProductCarousel;