import { Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";

const items = [
  { icon: Truck, title: "Free shipping", desc: "On orders above ₹999" },
  { icon: ShieldCheck, title: "2-year warranty", desc: "On every product" },
  { icon: RotateCcw, title: "Easy returns", desc: "7-day no questions asked" },
  { icon: Headphones, title: "Expert support", desc: "Real gamers, real help" },
];

const TrustBar = () => (
  <section className="w-full px-6 mb-20">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border">
      {items.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-accent text-primary flex items-center justify-center shrink-0">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground leading-tight">{title}</p>
            <p className="text-xs font-light text-muted-foreground">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TrustBar;