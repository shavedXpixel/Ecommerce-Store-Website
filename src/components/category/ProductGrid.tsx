import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { products as allProducts, formatINR, type Product } from "@/data/products";
import RatingStars from "@/components/product/RatingStars";
import { useCart } from "@/context/CartContext";

interface ProductGridProps {
  items?: Product[];
}

const ProductGrid = ({ items }: ProductGridProps) => {
  const list = items?.length ? items : allProducts;
  const { addItem } = useCart();

  return (
    <section className="w-full px-6 mb-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {list.map((product) => (
          <Card
            key={product.id}
            className="border-none shadow-none bg-transparent group"
          >
            <CardContent className="p-0">
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-square mb-3 overflow-hidden bg-secondary relative">
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
        ))}
      </div>

      {list.length > 12 && <Pagination />}
    </section>
  );
};

export default ProductGrid;
