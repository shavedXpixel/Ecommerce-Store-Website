import { Instagram, Twitter, Youtube, Facebook, Twitch } from "lucide-react";

const linkCls =
  "text-sm font-light text-primary-foreground/70 hover:text-primary-foreground transition-colors";

const socials = [
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Twitter, label: "Twitter / X", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
  { Icon: Twitch, label: "Twitch", href: "#" },
  { Icon: Facebook, label: "Facebook", href: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-primary-foreground pt-12 pb-2 px-6 border-t border-primary/20">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-xl font-semibold tracking-tight">Priyansu Store</h3>
            <p className="text-sm font-light text-primary-foreground/70 leading-relaxed max-w-md mb-6">
              A modern online store — curated products, fast checkout, and a clean shopping experience.
            </p>
            <div className="space-y-2 text-sm font-light text-primary-foreground/70">
              <div>
                <p className="font-normal text-primary-foreground mb-1">Visit Us</p>
                <p>123 Market Street</p>
                <p>Bengaluru, India</p>
              </div>
              <div>
                <p className="font-normal text-primary-foreground mb-1 mt-3">Contact</p>
                <p>+91 98765 43210</p>
                <p>hello@priyansustore.com</p>
              </div>
            </div>
          </div>

          {/* Link lists */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-normal mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><a href="#" className={linkCls}>New In</a></li>
                <li><a href="#" className={linkCls}>Best Sellers</a></li>
                <li><a href="#" className={linkCls}>Collections</a></li>
                <li><a href="#" className={linkCls}>Sale</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-normal mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className={linkCls}>Shipping</a></li>
                <li><a href="#" className={linkCls}>Returns</a></li>
                <li><a href="#" className={linkCls}>FAQs</a></li>
                <li><a href="#" className={linkCls}>Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-normal mb-4">Connect</h4>
              <ul className="space-y-2 mb-4">
                <li><a href="#" className={linkCls}>Newsletter</a></li>
                <li><a href="#" className={linkCls}>Discord community</a></li>
                <li><a href="#" className={linkCls}>Affiliate program</a></li>
              </ul>
              <div className="flex items-center gap-3">
                {socials.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 -mx-6 px-6 pt-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm font-light text-primary-foreground mb-1 md:mb-0">
            © 2026 Priyansu Store. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="text-sm font-light text-primary-foreground hover:text-primary-foreground/70 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-sm font-light text-primary-foreground hover:text-primary-foreground/70 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;