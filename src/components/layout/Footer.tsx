import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin, Plane, Award } from "lucide-react";
import logoImage from "@/assets/logo.png";
export function Footer() {
  return <footer className="bg-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img src={logoImage} alt="SeaShell Travel" className="h-14 w-auto brightness-0 invert" />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your gateway to seamless leisure and corporate travel experiences. IATA accredited experts since 2011.
            </p>
            <div className="flex items-center gap-2 text-gold text-sm">
              <Award className="w-4 h-4" />
              <span>IATA: 73209827</span>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-ocean transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-ocean transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[{
              name: "About Us",
              path: "/about"
            }, {
              name: "Leisure Travel",
              path: "/services/leisure"
            }, {
              name: "Corporate Travel",
              path: "/services/corporate"
            }, {
              name: "Awards",
              path: "/awards"
            }, {
              name: "Promotions",
              path: "/promotions"
            }, {
              name: "FAQ",
              path: "/faq"
            }].map(link => <li key={link.name}>
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-gold transition-colors text-sm inline-flex items-center gap-2 group">
                    <Plane className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-ocean-light shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Seashell Travel (Pty) Ltd<br />
                  P.O. Box 349, Maison de Mahé<br />
                  Victoria, Mahé, Seychelles
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-ocean-light shrink-0" />
                <a href="tel:+248XXXXXXX" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">+248 4321 080 | +248 4321 762 | +248 4324 361</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-ocean-light shrink-0" />
                <a href="mailto:info@seashelltravel.com" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  info@seashelltravel.com
                </a>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Office Hours</h3>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-primary-foreground">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-primary-foreground">9:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-primary-foreground/50">Closed</span>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-lg bg-ocean/20 border border-ocean/30">
              <p className="text-xs text-primary-foreground/80">
                <span className="text-gold font-medium">24/7 Emergency Support</span><br />
                Available for existing bookings
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Seashell Travel (Pty) Ltd. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/terms" className="hover:text-gold transition-colors">
                Terms of Use
              </Link>
              <Link to="/privacy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}