import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { formatINR, type Product } from "@/data/products";
import RatingStars from "./RatingStars";
import { useCart } from "@/context/CartContext";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  return (
    <div className="space-y-6">
      <div className="hidden lg:block">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={`/category/${product.category}`}>
                  {product.categoryLabel}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-light text-muted-foreground uppercase tracking-wide">
          {product.brand} · {product.categoryLabel}
        </p>
        <h1 className="text-2xl md:text-3xl font-light text-foreground">
          {product.name}
        </h1>
        <RatingStars rating={product.rating} reviewCount={product.reviewCount} showCount />
        <p className="text-2xl font-medium text-primary">
          {formatINR(product.price)}
        </p>
        <p className="text-sm font-light text-muted-foreground leading-relaxed">
          {product.shortDescription}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {product.highlights.map((h) => (
          <span
            key={h}
            className="text-xs font-light px-3 py-1 bg-accent text-accent-foreground rounded-full"
          >
            {h}
          </span>
        ))}
      </div>

      <div className="space-y-4 pt-2">
        <div className="flex items-center gap-4">
          <span className="text-sm font-light text-foreground">Quantity</span>
          <div className="flex items-center border border-border">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="h-10 w-10 p-0 hover:bg-transparent hover:opacity-50 rounded-none border-none"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="h-10 flex items-center px-4 text-sm font-light min-w-12 justify-center border-l border-r border-border">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuantity((q) => q + 1)}
              className="h-10 w-10 p-0 hover:bg-transparent hover:opacity-50 rounded-none border-none"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Button
          onClick={() => {
            addItem(
              {
                id: product.id,
                name: product.name,
                price: formatINR(product.price),
                image: product.image,
                category: product.categoryLabel,
              },
              quantity
            );
            toast.success(`${quantity} × ${product.name} added to cart`);
          }}
          className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary-hover font-light rounded-none"
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
