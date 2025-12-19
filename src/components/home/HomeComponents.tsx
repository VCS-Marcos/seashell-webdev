import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plane, Briefcase, Award, Users, Globe, Headphones, MapPin, Calendar, Ticket, Car, Shield } from "lucide-react";
import heroImage from "@/assets/hero-beach.jpg";
import logoImage from "@/assets/logo.png";

// Airline logos
import turkishAirlinesLogo from "@/assets/airlines/turkish-airlines.png";
import southAfricanAirwaysLogo from "@/assets/airlines/south-african-airways.png";
import airSeychellesLogo from "@/assets/airlines/air-seychelles.png";
import emiratesLogo from "@/assets/airlines/emirates.png";
import kenyaAirwaysLogo from "@/assets/airlines/kenya-airways.png";
import qatarAirwaysLogo from "@/assets/airlines/qatar-airways.png";
import aeroflotLogo from "@/assets/airlines/aeroflot.png";
import airAustralLogo from "@/assets/airlines/air-austral.png";
import airMauritiusLogo from "@/assets/airlines/air-mauritius.png";
import ethiopianAirlinesLogo from "@/assets/airlines/ethiopian-airlines.png";
import indiGoLogo from "@/assets/airlines/indigo.png";

// Animation hook for scroll reveal
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });
    const elements = ref.current?.querySelectorAll(".reveal");
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}
export function HeroSection() {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70" />
      </div>

      {/* Animated Wave Overlay */}
      <div className="absolute bottom-0 left-0 right-0">

      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Logo with Tagline */}
          <div className="animate-fade-in">
            <img 
              src={logoImage} 
              alt="Seashell Travel Logo" 
              className="h-24 md:h-32 w-auto mx-auto drop-shadow-lg"
            />
            <p className="text-navy font-semibold tracking-[0.2em] text-xs md:text-sm mt-3">
              CONNECTING YOU TO THE WORLD; ONE TICKET AT A TIME.
            </p>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up text-navy">
            Discover the World with{" "}
            <span className="text-gold">Seashell Travel</span>
          </h1>



          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-ocean/10 backdrop-blur-sm border border-ocean/20 rounded-full px-4 py-2 text-sm animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <Award className="w-4 h-4 text-gold" />
            <span className="text-gold font-medium">IATA Accredited</span>
            <span className="text-navy/80">Since 2011</span>
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-navy/80 max-w-2xl mx-auto animate-fade-up" style={{
          animationDelay: "0.2s"
        }}>IATA Accredited Experts in Leisure & Corporate Travel from the Heart of Seychelles.</p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up" style={{
          animationDelay: "0.3s"
        }}>
            <Button variant="heroSolid" size="xl" asChild>
              <Link to="/services/leisure">
                <Plane className="w-5 h-5" />
                Explore Leisure Travel
              </Link>
            </Button>
            <Button variant="ocean" size="xl" asChild>
              <Link to="/services/corporate">
                <Briefcase className="w-5 h-5" />
                Book Corporate Trips
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-navy/70 animate-fade-up" style={{
          animationDelay: "0.4s"
        }}>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-gold" />
              <span>IATA: 73209827</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gold" />
              <span>50,000+ Happy Travelers</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-gold" />
              <span>100+ Destinations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-ocean/30 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-ocean/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>;
}
// Airline partner logos with actual images
const airlines = [
  { name: "Kenya Airways", logo: kenyaAirwaysLogo },
  { name: "Emirates", logo: emiratesLogo },
  { name: "Air Seychelles", logo: airSeychellesLogo },
  { name: "Qatar Airways", logo: qatarAirwaysLogo },
  { name: "Turkish Airlines", logo: turkishAirlinesLogo },
  { name: "South African Airways", logo: southAfricanAirwaysLogo },
  // Placeholder for remaining airlines (you can add more logos later)
  { name: "Ethiopian Airlines", logo: ethiopianAirlinesLogo },
  { name: "Etihad Airways", logo: null },
  { name: "Air Mauritius", logo: airMauritiusLogo },
  { name: "Air Austral", logo: airAustralLogo },
  { name: "IndiGo Airlines", logo: indiGoLogo },
  { name: "Aeroflot", logo: aeroflotLogo },
];

export function AirlinePartners() {
  const containerRef = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle mouse/touch drag for manual scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section ref={containerRef} className="py-20 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 reveal opacity-0 translate-y-8">
          <span className="text-gold font-medium text-sm tracking-widest uppercase">Proud Partners</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2">
            Our Trusted Airline Partners
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We work closely with the world's leading airlines to secure the best fares and exceptional service for your journeys.
          </p>
        </div>
      </div>

      {/* Auto-scrolling + draggable carousel */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

        {/* Scrolling track - auto-scrolls and user can drag */}
        <div 
          ref={scrollRef}
          className={`flex overflow-x-auto scrollbar-hide cursor-grab ${isDragging ? 'cursor-grabbing [animation-play-state:paused]' : 'animate-scroll-left hover:[animation-play-state:paused]'}`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Duplicate airlines twice for seamless loop */}
          {[...airlines, ...airlines].map((airline, index) => (
            <div
              key={`${airline.name}-${index}`}
              className="flex-shrink-0 mx-4 group select-none"
            >
              <div className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-ocean/30 h-24 w-48 flex items-center justify-center">
                {airline.logo ? (
                  <img 
                    src={airline.logo} 
                    alt={airline.name}
                    className="max-h-16 max-w-full object-contain"
                    draggable={false}
                  />
                ) : (
                  <span className="text-navy font-semibold text-sm text-center">
                    {airline.name}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function ServicesTeaser() {
  const containerRef = useScrollReveal();
  const services = [{
    icon: Calendar,
    title: "Custom Itineraries",
    description: "Personalized travel plans crafted to your unique preferences and budget.",
    link: "/services/leisure"
  }, {
    icon: Ticket,
    title: "Visa Processing",
    description: "Hassle-free visa applications handled by our expert team.",
    link: "/services/leisure"
  }, {
    icon: Headphones,
    title: "24/7 Emergency Support",
    description: "Round-the-clock assistance whenever you need us, wherever you are.",
    link: "/services/corporate"
  }];
  return <section ref={containerRef} className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 reveal opacity-0 translate-y-8">
          <span className="text-ocean font-medium text-sm tracking-widest uppercase">Our Services</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2">
            Tailored Travel Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={service.title} className="reveal opacity-0 translate-y-8" style={{
          animationDelay: `${index * 0.15}s`
        }}>
              <Link to={service.link} className="group block bg-card rounded-2xl p-8 border border-border hover:border-ocean/30 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-ocean/10 flex items-center justify-center mb-6 group-hover:bg-ocean group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-ocean group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3 group-hover:text-ocean transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-ocean font-medium text-sm opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  Learn More
                  <span className="text-lg">→</span>
                </div>
              </Link>
            </div>)}
        </div>

        <div className="text-center mt-12 reveal opacity-0 translate-y-8">
          <Button variant="ocean" size="lg" asChild>
            <Link to="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>;
}
export function TestimonialsSection() {
  const containerRef = useScrollReveal();
  const testimonials = [{
    quote: "Seamless booking experience! Seashell Travel made our honeymoon in Maldives absolutely perfect.",
    author: "Sarah M.",
    role: "Happy Traveler"
  }, {
    quote: "Outstanding corporate travel management. They've been handling our business trips for 5 years now.",
    author: "James K.",
    role: "CEO, TechCorp"
  }, {
    quote: "The best travel agency in Seychelles. Their attention to detail is unmatched.",
    author: "Marie L.",
    role: "Frequent Flyer"
  }];
  return <section ref={containerRef} className="py-24 bg-ocean-deep text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-ocean-light blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal opacity-0 translate-y-8">
          <span className="text-gold font-medium text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={testimonial.author} className="reveal opacity-0 translate-y-8" style={{
          animationDelay: `${index * 0.15}s`
        }}>
              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 h-full flex flex-col">
                <div className="text-gold text-4xl font-serif mb-4">"</div>
                <p className="text-primary-foreground/90 leading-relaxed flex-1">
                  {testimonial.quote}
                </p>
                <div className="mt-6 pt-6 border-t border-primary-foreground/10">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-primary-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}
export function TrustSignals() {
  const containerRef = useScrollReveal();
  const stats = [{
    value: "15+",
    label: "Years of Excellence"
  }, {
    value: "50,000+",
    label: "Happy Travelers"
  }, {
    value: "100+",
    label: "Destinations"
  }, {
    value: "4x",
    label: "Award-Winning"
  }];
  return <section ref={containerRef} className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => <div key={stat.label} className="reveal opacity-0 translate-y-8 text-center" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="font-serif text-4xl md:text-5xl font-bold text-ocean">
                {stat.value}
              </div>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>)}
        </div>
      </div>
    </section>;
}
export function NewsletterSection() {
  const containerRef = useScrollReveal();
  return <section ref={containerRef} className="py-24 bg-secondary relative overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path d="M0,100 C300,150 600,50 900,100 C1050,125 1150,100 1200,100 L1200,200 L0,200 Z" className="fill-ocean/20" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center reveal opacity-0 translate-y-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
            Stay Updated on Deals & Destinations
          </h2>
          <p className="text-muted-foreground mt-4">
            Subscribe to our newsletter for exclusive travel deals, destination guides, and insider tips.
          </p>

          <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent transition-all" />
            <Button variant="ocean" size="lg">
              Subscribe
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>;
}