import { useState, useRef } from "react";
import ImageZoom from "./ImageZoom";

interface ProductImageGalleryProps {
  images: string[];
  alt: string;
}

const ProductImageGallery = ({ images, alt }: ProductImageGalleryProps) => {
  const productImages = images.length ? images : [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomInitialIndex, setZoomInitialIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  const prevImage = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + productImages.length) % productImages.length
    );

  const handleImageClick = (index: number) => {
    setZoomInitialIndex(index);
    setIsZoomOpen(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) (diff > 0 ? nextImage : prevImage)();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!productImages.length) return null;

  return (
    <div className="w-full">
      <div className="hidden lg:block">
        <div className="space-y-4">
          {productImages.map((image, index) => (
            <div
              key={index}
              className="w-full aspect-square overflow-hidden cursor-pointer group bg-secondary"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image}
                alt={`${alt} view ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden">
        <div className="relative">
          <div
            className="w-full aspect-square overflow-hidden cursor-pointer group touch-pan-y bg-secondary"
            onClick={() => handleImageClick(currentImageIndex)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={productImages[currentImageIndex]}
              alt={`${alt} view ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 select-none"
            />
          </div>
          <div className="flex justify-center mt-4 gap-2">
            {productImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <ImageZoom
        images={productImages}
        initialIndex={zoomInitialIndex}
        isOpen={isZoomOpen}
        onClose={() => setIsZoomOpen(false)}
      />
    </div>
  );
};

export default ProductImageGallery;
