import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import AboutSidebar from "../../components/about/AboutSidebar";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Sustainability" 
          subtitle="Powering play responsibly — gear that lasts longer and pollutes less"
        />
        
        <ContentSection title="Our Environmental Commitment">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Ethical Sourcing</h3>
              <p className="text-muted-foreground leading-relaxed">
                We partner only with authorised brand distributors and manufacturers who meet strict labour and environmental standards. Every laptop, peripheral, and accessory we sell is traceable through our supply chain.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Recycled Packaging</h3>
              <p className="text-muted-foreground leading-relaxed">
                Over 90% of our shipping boxes, fillers, and inserts are made from recycled paper and biodegradable materials — protecting your gear and the planet at the same time.
              </p>
            </div>
          </div>

          <div className="bg-muted/10 rounded-lg p-8">
            <h3 className="text-2xl font-light text-foreground mb-6">Our Impact Goals</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-light text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Carbon-neutral last-mile delivery in metros by 2027</p>
              </div>
              <div>
                <div className="text-3xl font-light text-primary mb-2">90%</div>
                <p className="text-sm text-muted-foreground">Recycled and recyclable packaging</p>
              </div>
              <div>
                <div className="text-3xl font-light text-primary mb-2">Zero</div>
                <p className="text-sm text-muted-foreground">E-waste to landfill policy</p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Circular Economy">
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in the power of circular tech — selling gear built to last, helping you repair it, and responsibly recycling what reaches end of life.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Repair-First Support</h3>
                <p className="text-muted-foreground">
                  Our service team partners with authorised brand centres across India to repair and refurbish products rather than replace them whenever possible.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">E-Waste Take-Back</h3>
                <p className="text-muted-foreground">
                  Ready for an upgrade? Ship your old laptop, monitor, or peripheral back to us and we will recycle it through certified e-waste partners — plus credit your account.
                </p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Certifications & Partnerships">
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              Our commitment to sustainability is verified through partnerships with leading organisations and certifications that hold us accountable to the highest standards.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 items-center">
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">CPCB E-Waste</span>
              </div>
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">ISO 14001</span>
              </div>
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">EPR Compliant</span>
              </div>
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Green Logistics</span>
              </div>
            </div>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Sustainability;