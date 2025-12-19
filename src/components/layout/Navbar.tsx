import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo.png";
const navItems = [{
  name: "Home",
  path: "/"
}, {
  name: "About Us",
  path: "/about"
}, {
  name: "Services",
  path: "/services",
  children: [{
    name: "Leisure Travel",
    path: "/services/leisure"
  }, {
    name: "Corporate Travel",
    path: "/services/corporate"
  }]
}, {
  name: "Awards",
  path: "/awards"
}, {
  name: "Promotions",
  path: "/promotions"
}, {
  name: "Airlines",
  path: "/airlines"
}, {
  name: "Contact",
  path: "/contact"
}, {
  name: "FAQ",
  path: "/faq"
}];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", isScrolled ? "bg-background/95 backdrop-blur-md shadow-elegant py-2" : "bg-transparent py-4")}>
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img src={logoImage} alt="SeaShell Travel" className="h-12 w-auto transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(item => <div key={item.name} className="relative" onMouseEnter={() => item.children && setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
                <Link to={item.path} className={cn("px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition-all duration-300", isScrolled ? location.pathname === item.path || location.pathname.startsWith(item.path + "/") ? "text-ocean bg-ocean/10" : "text-navy hover:text-ocean hover:bg-ocean/5" : location.pathname === item.path || location.pathname.startsWith(item.path + "/") ? "text-white bg-white/20" : "text-white/90 hover:text-white hover:bg-white/10")}>
                  {item.name}
                  {item.children && <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", activeDropdown === item.name && "rotate-180")} />}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.name && <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-card rounded-xl shadow-lg border border-border p-2 min-w-[200px]">
                      {item.children.map(child => <Link key={child.name} to={child.path} className={cn("block px-4 py-2.5 rounded-lg text-sm transition-all duration-200", location.pathname === child.path ? "bg-ocean/10 text-ocean font-medium" : "text-foreground hover:bg-muted hover:text-ocean")}>
                          {child.name}
                        </Link>)}
                    </div>
                  </div>}
              </div>)}
          </div>

          {/* Search & CTA */}
          <div className="hidden lg:flex items-center gap-3">

            <Button variant={isScrolled ? "ocean" : "heroSolid"} size="sm" asChild>
              <Link to="/contact">
                <Plane className="w-4 h-4" />
                Book Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className={cn("lg:hidden p-2 rounded-lg transition-colors", isScrolled ? "text-navy hover:bg-muted" : "text-white hover:bg-white/10")} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="bg-card rounded-xl shadow-lg border border-border p-4 space-y-1">
              {navItems.map(item => <div key={item.name}>
                  <Link to={item.path} className={cn("block px-4 py-3 rounded-lg text-sm font-medium transition-colors", location.pathname === item.path ? "bg-ocean/10 text-ocean" : "text-foreground hover:bg-muted")}>
                    {item.name}
                  </Link>
                  {item.children && <div className="ml-4 mt-1 space-y-1">
                      {item.children.map(child => <Link key={child.name} to={child.path} className={cn("block px-4 py-2 rounded-lg text-sm transition-colors", location.pathname === child.path ? "bg-ocean/10 text-ocean" : "text-muted-foreground hover:bg-muted hover:text-foreground")}>
                          {child.name}
                        </Link>)}
                    </div>}
                </div>)}
              <div className="pt-4 border-t border-border mt-4">
                <Button variant="ocean" className="w-full" asChild>
                  <Link to="/contact">
                    <Plane className="w-4 h-4" />
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </header>;
}