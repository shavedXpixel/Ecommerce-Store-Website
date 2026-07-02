import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import ImageTextBlock from "../../components/about/ImageTextBlock";
import AboutSidebar from "../../components/about/AboutSidebar";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader 
            title="Our Story" 
            subtitle="Building India's most trusted destination for gamers and creators"
          />
          
          <ContentSection>
            <ImageTextBlock
              image="/founders.png"
              imageAlt="Priyansu Store founders in the Bengaluru warehouse"
              title="From a Dorm Room to India's Gaming Hub"
              content="Priyansu Store began in 2021 as a small side project between two college friends in Bengaluru who were tired of paying inflated prices for gaming gear and waiting weeks for parts to ship. What started as helping classmates source mechanical keyboards and graphics cards quickly grew into a full-fledged storefront. Today we serve thousands of gamers, streamers, and creators across India with carefully curated laptops, peripherals, and accessories from the brands we trust and use ourselves."
              imagePosition="left"
            />
          </ContentSection>

          <ContentSection title="Mission & Vision">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To make premium gaming and productivity gear accessible to every Indian household with honest pricing, genuine products, and the kind of fast, friendly support we always wished we had as customers ourselves.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most loved gaming and tech retailer in India by 2030 — a place where new players take their first steps, pros upgrade with confidence, and every order arrives backed by people who genuinely care about the craft.
                </p>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Our Values">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Authenticity</h3>
                <p className="text-muted-foreground">
                  Every product we sell is 100% genuine, sourced directly from authorised distributors and backed by full manufacturer warranty.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Performance</h3>
                <p className="text-muted-foreground">
                  We test, benchmark, and play on the gear we sell — if it does not earn a spot on our own rigs, it does not earn a spot on our shelves.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Community</h3>
                <p className="text-muted-foreground">
                  From build advice to post-purchase support, we treat every customer like a teammate in the same lobby — because that is exactly what you are.
                </p>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="By the Numbers">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <h3 className="text-3xl font-light text-foreground">50K+</h3>
                <p className="text-muted-foreground">Orders shipped across India</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-light text-foreground">4.8/5</h3>
                <p className="text-muted-foreground">Average customer rating</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-light text-foreground">200+</h3>
                <p className="text-muted-foreground">Brands and partner SKUs</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-light text-foreground">24/7</h3>
                <p className="text-muted-foreground">Chat and call support</p>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Meet the Team">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <h3 className="text-lg font-light text-foreground">Priyansu Mohanty</h3>
                <p className="text-sm text-muted-foreground">Founder &amp; CEO</p>
                <p className="text-muted-foreground">Leads product curation and brand partnerships. Long-time PC builder and competitive Valorant player.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-light text-foreground">Ananya Sharma</h3>
                <p className="text-sm text-muted-foreground">Co-Founder &amp; Head of Operations</p>
                <p className="text-muted-foreground">Runs the Bengaluru fulfilment hub and makes sure every order ships fast, safe, and tracked end to end.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-light text-foreground">Rohan Verma</h3>
                <p className="text-sm text-muted-foreground">Head of Customer Experience</p>
                <p className="text-muted-foreground">Leads the 24/7 support crew, helping customers pick the right rig and stay winning long after checkout.</p>
              </div>
            </div>
          </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default OurStory;