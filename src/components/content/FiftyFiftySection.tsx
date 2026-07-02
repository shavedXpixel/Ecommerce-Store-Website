import keyboardsCollection from "@/assets/earrings-collection.png";
import headphonesProduct from "@/assets/link-bracelet.png";
import { Link } from "react-router-dom";

const FiftyFiftySection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Link to="/category/keyboards" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src={keyboardsCollection} 
                alt="Mechanical keyboards collection" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Tactile Keyboards
            </h3>
            <p className="text-sm font-light text-foreground">
              Mechanical switches and per-key RGB for every play style
            </p>
          </div>
        </div>

        <div>
          <Link to="/category/headphones" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src={headphonesProduct} 
                alt="Wireless gaming headphones" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Immersive Audio
            </h3>
            <p className="text-sm font-light text-foreground">
              Studio-grade headsets tuned for games, music, and calls
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiftyFiftySection;