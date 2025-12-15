import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plane, Globe, Shield, ArrowRight } from "lucide-react";

const airlines = [
  {
    name: "Kenya Airways",
    tagline: "East African Gateway",
    description: "The Pride of Africa, connecting you to over 50 destinations across the continent and beyond. Premium service and warm Kenyan hospitality.",
    color: "from-green-600 to-green-800",
    logo: "🇰🇪",
  },
  {
    name: "Emirates",
    tagline: "Luxury Global Routes",
    description: "World-renowned for exceptional service and comfort. Connecting Seychelles to the world through Dubai, with award-winning in-flight experience.",
    color: "from-red-600 to-red-800",
    logo: "🇦🇪",
  },
  {
    name: "Air Seychelles",
    tagline: "Home Skies Expertise",
    description: "Our national carrier, offering direct connections to key destinations with a distinctly Seychellois touch of paradise hospitality.",
    color: "from-blue-600 to-blue-800",
    logo: "🇸🇨",
  },
  {
    name: "Mihin Lanka",
    tagline: "Affordable South Asian Escapes",
    description: "Budget-friendly connections to Sri Lanka and South Asian destinations, making exotic adventures accessible for all travelers.",
    color: "from-orange-600 to-orange-800",
    logo: "🇱🇰",
  },
];

export default function AirlinesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-ocean-deep text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep via-ocean-deep/95 to-ocean-deep/80" />
        
        {/* Animated Plane */}
        <div className="absolute top-1/4 -right-20 opacity-20">
          <Plane className="w-96 h-96 transform rotate-[-30deg] animate-float" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
          <Globe className="w-12 h-12 text-gold mx-auto mb-6 animate-pulse-soft" />
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-up">
            Our Trusted <span className="text-gold">Airline Partners</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 mt-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            We partner with the world's leading airlines to ensure premium service, competitive fares, and seamless travel experiences.
          </p>
        </div>
      </section>

      {/* Airlines Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {airlines.map((airline) => (
              <div
                key={airline.name}
                className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-ocean/30 hover:shadow-xl transition-all duration-500"
              >
                <div className={`h-2 bg-gradient-to-r ${airline.color}`} />
                <div className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                      {airline.logo}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-bold text-navy group-hover:text-ocean transition-colors">
                        {airline.name}
                      </h3>
                      <p className="text-ocean font-medium">{airline.tagline}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {airline.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <Button variant="outline" className="group/btn" asChild>
                      <Link to="/contact">
                        Book with {airline.name.split(" ")[0]}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-12 h-12 text-ocean mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
              We Guarantee the Best Care for Your Journey
            </h2>
            <p className="text-muted-foreground mt-4">
              Through our strong partnerships with these leading airlines, we secure the best fares, priority service, and exclusive benefits for our clients. Your journey is in expert hands.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-muted-foreground">Best Fare Guarantee</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-muted-foreground">Priority Booking</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-muted-foreground">Exclusive Deals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ocean-deep text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Ready to Fly?
          </h2>
          <p className="text-primary-foreground/80 mt-4 max-w-xl mx-auto">
            Let us find you the best flights with our partner airlines. Contact us for personalized booking assistance.
          </p>
          <Button variant="gold" size="xl" className="mt-8" asChild>
            <Link to="/contact">
              <Plane className="w-5 h-5" />
              Book Your Flight
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
