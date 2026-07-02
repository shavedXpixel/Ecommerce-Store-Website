import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import TiltCard from "@/components/three/TiltCard";
import ScrollReveal from "@/components/ScrollReveal";

const tiles = [
  {
    href: "/category/laptops",
    label: "Gaming Laptops",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    href: "/category/keyboards",
    label: "Keyboards",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    href: "/category/mice",
    label: "Mice",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    href: "/category/monitors",
    label: "Monitors",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    href: "/category/headphones",
    label: "Headphones",
    image:
      "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
];

const CategoryShowcase = () => (
  <section className="w-full px-6 mb-20">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
            Shop by category
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            Built for every kind of gamer
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
        {tiles.map((tile, i) => (
          <ScrollReveal
            key={tile.href}
            direction="up"
            delay={i * 90}
            className={tile.span}
          >
            <TiltCard className="w-full h-full" max={8}>
            <Link
              to={tile.href}
              className="group relative overflow-hidden bg-secondary block w-full h-full"
            >
              <img
                src={tile.image}
                alt={tile.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-primary-foreground">
                <p className="text-lg font-semibold tracking-tight">{tile.label}</p>
                <span className="text-xs font-light inline-flex items-center gap-1 opacity-90">
                  Shop now <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CategoryShowcase;