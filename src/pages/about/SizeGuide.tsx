import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import { Button } from "../../components/ui/button";
import AboutSidebar from "../../components/about/AboutSidebar";

const SizeGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Buying Guide" 
          subtitle="Pick the right gear with our quick-reference buying guides"
        />
        
        <ContentSection title="Choosing a Gaming Laptop">
          <div className="space-y-8">
            <div className="bg-muted/10 rounded-lg p-8">
              <h3 className="text-xl font-light text-foreground mb-6">How to Pick the Right Laptop</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Step 1: Match the GPU to your games</h4>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Esports / 1080p: RTX 4050 or 4060 class</li>
                    <li>AAA 1440p: RTX 4070 or 4080 class</li>
                    <li>4K / creator workloads: RTX 4090 class</li>
                  </ol>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Step 2: Pick the right screen</h4>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Competitive: 14"–16", 240Hz+, 1080p–1440p</li>
                    <li>Single-player / creator: 16"–18", 165Hz, 1440p–4K</li>
                    <li>Always check sRGB / DCI-P3 coverage for colour work</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/20">
                    <th className="border border-border p-3 text-left font-light">Use Case</th>
                    <th className="border border-border p-3 text-left font-light">GPU</th>
                    <th className="border border-border p-3 text-left font-light">CPU</th>
                    <th className="border border-border p-3 text-left font-light">RAM</th>
                    <th className="border border-border p-3 text-left font-light">Storage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { us: "Esports 1080p", uk: "RTX 4050", eu: "Ryzen 5 / i5", diameter: "16 GB", circumference: "512 GB SSD" },
                    { us: "Esports 1440p", uk: "RTX 4060", eu: "Ryzen 7 / i7", diameter: "16 GB", circumference: "1 TB SSD" },
                    { us: "AAA 1440p", uk: "RTX 4070", eu: "Ryzen 7 / i7", diameter: "32 GB", circumference: "1 TB SSD" },
                    { us: "AAA 4K", uk: "RTX 4080", eu: "Ryzen 9 / i9", diameter: "32 GB", circumference: "2 TB SSD" },
                    { us: "Creator / 4K", uk: "RTX 4090", eu: "Ryzen 9 / i9 HX", diameter: "64 GB", circumference: "2 TB SSD" }
                  ].map((size, index) => (
                    <tr key={index} className="hover:bg-muted/10">
                      <td className="border border-border p-3">{size.us}</td>
                      <td className="border border-border p-3">{size.uk}</td>
                      <td className="border border-border p-3">{size.eu}</td>
                      <td className="border border-border p-3">{size.diameter}</td>
                      <td className="border border-border p-3">{size.circumference}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Keyboards & Monitors">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Keyboard Layouts</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">60% / 65%</span>
                  <span className="text-foreground">Compact, esports</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">TKL (80%)</span>
                  <span className="text-foreground">No numpad, balanced</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Full-size (100%)</span>
                  <span className="text-foreground">Numpad, all-rounder</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Monitor Sizes</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">24" 1080p</span>
                  <span className="text-foreground">Esports, 240Hz+</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">27" 1440p</span>
                  <span className="text-foreground">All-round sweet spot</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">32" 4K</span>
                  <span className="text-foreground">AAA, creator</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">34" Ultrawide</span>
                  <span className="text-foreground">Immersive, sim racing</span>
                </div>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Need Help?">
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Still not sure what to buy? Our build experts are here to help you spec the perfect rig.
              Download our printable buying guide or book a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="rounded-none">
                Download PDF Guide
              </Button>
              <Button className="rounded-none">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default SizeGuide;