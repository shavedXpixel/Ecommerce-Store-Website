import RatingStars from "@/components/product/RatingStars";
import TiltCard from "@/components/three/TiltCard";

const reviews = [
  {
    name: "Aryan K.",
    role: "Streamer, Bengaluru",
    text:
      "The Raven X16 is a beast. Runs Cyberpunk on ultra without a sweat and the panel is gorgeous. Best laptop purchase I've made.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    product: "Raven X16 RTX",
  },
  {
    name: "Neha S.",
    role: "Esports player, Pune",
    text:
      "Phantom Air feels like cheating. So light, so accurate. My aim has genuinely improved since I switched.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    product: "Phantom Air Mouse",
  },
  {
    name: "Rahul M.",
    role: "Content creator, Mumbai",
    text:
      "Horizon 27 at 240Hz QHD changed how I play and edit. Colors are punchy and the stand is rock solid.",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80",
    product: "Horizon 27 Monitor",
  },
];

const Testimonials = () => (
  <section className="w-full px-6 mb-20 bg-secondary py-16">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
          Loved by gamers
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
          What our customers say
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <TiltCard key={r.name} max={6}>
            <article className="bg-background p-6 border border-border flex flex-col gap-4 h-full">
            <RatingStars rating={r.rating} />
            <p className="text-sm font-light text-foreground leading-relaxed">
              “{r.text}”
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-border mt-auto">
              <img
                src={r.avatar}
                alt={r.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-foreground leading-tight">
                  {r.name}
                </p>
                <p className="text-xs font-light text-muted-foreground">
                  {r.role} · {r.product}
                </p>
              </div>
            </div>
            </article>
          </TiltCard>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;