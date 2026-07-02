import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import StoreMap from "../../components/about/StoreMap";
import { Button } from "../../components/ui/button";
import AboutSidebar from "../../components/about/AboutSidebar";

const StoreLocator = () => {
  const stores = [
    {
      name: "Priyansu Store Indiranagar",
      address: "27 Indiranagar 100ft Road, Bengaluru, KA 560038",
      phone: "+91 80 4567 0123",
      hours: "Mon-Sat: 10AM-9PM, Sun: 11AM-8PM",
      services: ["Custom PC Builds", "Hands-on Demos", "Service Centre", "Trade-In"]
    },
    {
      name: "Priyansu Store Mumbai Lower Parel",
      address: "Phoenix Mills Compound, Lower Parel, Mumbai, MH 400013",
      phone: "+91 22 4567 0456",
      hours: "Mon-Sat: 11AM-9PM, Sun: 12PM-8PM",
      services: ["Custom PC Builds", "Hands-on Demos", "VIP Setup Suite", "Service Centre"]
    },
    {
      name: "Priyansu Store Hyderabad Hitec City",
      address: "Cyber Towers, Hitec City, Hyderabad, TS 500081",
      phone: "+91 40 4567 0789",
      hours: "Mon-Sat: 11AM-9PM, Sun: 12PM-8PM",
      services: ["Browse & Buy", "Service Centre", "Gift Wrapping"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Store Locator" 
          subtitle="Visit our experience stores to test gear before you buy"
        />
        
        <ContentSection title="Interactive Store Map">
          <StoreMap />
        </ContentSection>

        <ContentSection title="Our Locations">
          <div className="grid gap-8">
            {stores.map((store, index) => (
              <div key={index} className="bg-background rounded-lg p-8 border border-border">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-light text-foreground">{store.name}</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>{store.address}</p>
                      <p>{store.phone}</p>
                      <p>{store.hours}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button variant="outline" className="rounded-none">
                        Get Directions
                      </Button>
                      <Button className="rounded-none">
                        Book Appointment
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-light text-foreground">Available Services</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {store.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="Private Appointments">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Book a private appointment with our build team. We will walk you through laptops, peripherals, and custom-PC options, run live benchmarks, and help you spec the perfect rig in a quiet, demo-ready room.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Personal Build Consult</h4>
                <p className="text-muted-foreground text-sm">
                  One-on-one help finding the right laptop or PC for your games and budget
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Custom PC Builds</h4>
                <p className="text-muted-foreground text-sm">
                  Work with our build team to spec and assemble a custom desktop tuned to your titles
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Service & Upgrades</h4>
                <p className="text-muted-foreground text-sm">
                  Diagnostics, warranty repair, RAM/SSD upgrades, and thermal re-pastes by certified technicians
                </p>
              </div>
            </div>
            
            <div className="pt-8">
              <Button size="lg" className="rounded-none">
                Schedule Your Appointment
              </Button>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Virtual Consultations">
          <div className="bg-muted/10 rounded-lg p-8">
            <h3 className="text-xl font-light text-foreground mb-4">Can not visit in person?</h3>
            <p className="text-muted-foreground mb-6">
              Book a virtual consultation with one of our build experts. We will demo products over video call,
              answer your questions, and help you make the perfect selection from the comfort of your home.
            </p>
            <Button variant="outline" className="rounded-none">
              Book Virtual Consultation
            </Button>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default StoreLocator;