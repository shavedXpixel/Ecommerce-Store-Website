import { useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HeroBanner from "../components/home/HeroBanner";
import TrustBar from "../components/home/TrustBar";
import CategoryShowcase from "../components/home/CategoryShowcase";
import SectionHeader from "../components/home/SectionHeader";
import ProductCarousel from "../components/content/ProductCarousel";
import PromoBanner from "../components/home/PromoBanner";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";
import SceneBackground from "../components/three/SceneBackground";
import PerformanceShowcase from "../components/home/PerformanceShowcase";
import ScrollReveal from "../components/ScrollReveal";
import { useProducts } from "@/hooks/useProducts";

const Index = () => {
  useEffect(() => {
    document.title = "Priyansu Store — Gaming Laptops, Keyboards, Mice & More";
  }, []);

  const { data: products = [], isLoading } = useProducts();

  const featured = products.filter((p) => p.isNew).concat(
    products.filter((p) => !p.isNew)
  ).slice(0, 8);

  const bestSellers = [...products]
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, 8);

  if (isLoading) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background relative">
      <SceneBackground />
      <Header />

      <main>
        <HeroBanner />
        <ScrollReveal direction="up">
          <TrustBar />
        </ScrollReveal>

        <ScrollReveal direction="up" distance={60}>
          <CategoryShowcase />
        </ScrollReveal>

        <ScrollReveal direction="left">
          <div className="mb-4">
            <SectionHeader
              eyebrow="Featured"
              title="Fresh drops & new arrivals"
              href="/category/laptops"
              ctaLabel="View all"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={120}>
          <ProductCarousel items={featured} />
        </ScrollReveal>

        <ScrollReveal direction="scale">
          <PromoBanner />
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="mb-4">
            <SectionHeader
              eyebrow="Best sellers"
              title="What everyone is buying"
              href="/category/accessories"
              ctaLabel="View all"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={120}>
          <ProductCarousel items={bestSellers} />
        </ScrollReveal>

        <ScrollReveal direction="up" distance={60}>
          <PerformanceShowcase />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal direction="fade">
          <Newsletter />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
