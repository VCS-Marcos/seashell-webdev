import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plane, Users, Calendar, Ticket, Hotel, Car, Headphones, FileCheck, Gift, MapPin, Star, Check } from "lucide-react";
import leisureImage from "@/assets/leisure-travel.jpg";

const services = [
  {
    icon: FileCheck,
    title: "International Visa Processing",
    description: "Hassle-free visa applications where required. Our expert team handles all documentation and follow-ups.",
  },
  {
    icon: Calendar,
    title: "Customized Itineraries",
    description: "Personalized travel plans for solo trips, family holidays, romantic getaways, or group adventures tailored to your preferences.",
  },
  {
    icon: Ticket,
    title: "Airline Ticketing",
    description: "Secure and affordable airline bookings with access to the best fares from our partner airlines worldwide.",
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description: "Curated accommodation options to fit every budget and style, from boutique hotels to luxury resorts.",
  },
  {
    icon: Car,
    title: "Airport Transfers",
    description: "Dedicated airport-hotel-airport transfers ensuring safe and reliable ground transportation.",
  },
  {
    icon: Headphones,
    title: "Emergency Ticketing",
    description: "Quick support when you need it most—last-minute bookings and urgent travel arrangements handled with care.",
  },
  {
    icon: Gift,
    title: "Personalized Delivery",
    description: "Convenient doorstep ticket delivery service for your comfort and peace of mind.",
  },
  {
    icon: MapPin,
    title: "Destination Expertise",
    description: "Insider knowledge on the best destinations, hidden gems, and local experiences across the globe.",
  },
];

export default function LeisureTravelPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${leisureImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-gold font-medium text-sm tracking-widest uppercase">
              <Plane className="w-4 h-4" />
              Leisure Travel
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 animate-fade-up">
              Create Memories That Last a Lifetime
            </h1>
            <p className="text-lg text-primary-foreground/80 mt-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Whether it's a romantic honeymoon, a family adventure, or a solo exploration, our dedicated team crafts personalized journeys that exceed your expectations.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <Link to="/promotions">View Deals</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-ocean font-medium text-sm tracking-widest uppercase">What We Offer</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2">
              Comprehensive Leisure Services
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our dedicated team ensures the best rates and unforgettable experiences for every type of traveler.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-ocean/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-ocean/10 flex items-center justify-center mb-5 group-hover:bg-ocean group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-ocean group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-navy mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-ocean font-medium text-sm tracking-widest uppercase">Why Seashell Travel</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2">
                Your Trusted Leisure Travel Partner
              </h2>
              <div className="mt-8 space-y-4">
                {[
                  "Award-winning service with multiple airline recognitions",
                  "Competitive rates through our premium airline partnerships",
                  "Personalized attention from experienced travel consultants",
                  "Local expertise from our Seychelles base",
                  "24/7 emergency support for peace of mind",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-ocean/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-ocean" />
                    </div>
                    <p className="text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
              <Button variant="ocean" size="lg" className="mt-8" asChild>
                <Link to="/contact">Start Planning Your Trip</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800"
                  alt="Beach vacation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-lg border border-border">
                <div className="flex items-center gap-2 text-gold">
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                  <Star className="w-5 h-5 fill-gold" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">5000+ Happy Travelers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form CTA */}
      <section className="py-20 bg-ocean-deep text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-primary-foreground/80 mt-4 max-w-xl mx-auto">
            Tell us about your dream destination and we'll create a personalized itinerary just for you.
          </p>
          <Button variant="gold" size="xl" className="mt-8" asChild>
            <Link to="/contact">
              <MapPin className="w-5 h-5" />
              Get a Free Quote
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
