import monitorImage from "@/assets/hero-image.png";
import keyboardImage from "@/assets/hero-3d-replacement.jpg";
import { Link } from "react-router-dom";

const OneThirdTwoThirdsSection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Link to="/category/keyboards" className="block">
            <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden">
              <img 
                src={keyboardImage} 
                alt="Compact mechanical keyboard" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Precision Boards
            </h3>
            <p className="text-sm font-light text-foreground">
              Hot-swappable mechanical keyboards built for speed
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Link to="/category/monitors" className="block">
            <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden">
              <img 
                src={monitorImage} 
                alt="Ultrawide curved gaming monitor" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Ultrawide Displays
            </h3>
            <p className="text-sm font-light text-foreground">
              Curved high-refresh monitors that pull you into the game
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneThirdTwoThirdsSection;