import heroImage from "@/assets/hero-image.png";

const LargeHero = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="w-full aspect-[16/9] mb-3 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Modern gaming setup" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="">
        <h2 className="text-sm font-normal text-foreground mb-1">
          The Modern Battlestation
        </h2>
        <p className="text-sm font-light text-foreground">
          Curated gaming gear engineered for performance and built to last
        </p>
      </div>
    </section>
  );
};

export default LargeHero;