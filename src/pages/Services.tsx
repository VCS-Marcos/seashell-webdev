import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plane, Briefcase, Users, Calendar, Ticket, Hotel, Car, Headphones, FileCheck, Gift, ArrowRight } from "lucide-react";
import leisureImage from "@/assets/leisure-travel.jpg";
import corporateImage from "@/assets/corporate-travel.jpg";

const serviceCategories = [
  {
    title: "Leisure Travel",
    description: "Unforgettable holidays tailored to your dreams. From family vacations to romantic getaways.",
    image: leisureImage,
    link: "/services/leisure",
    icon: Plane,
    features: ["Custom Itineraries", "Visa Processing", "Hotel Bookings", "Airport Transfers"],
  },
  {
    title: "Corporate Travel",
    description: "Professional travel management for businesses of all sizes. Efficiency meets excellence.",
    image: corporateImage,
    link: "/services/corporate",
    icon: Briefcase,
    features: ["24/7 Support", "Travel Consulting", "Chauffeur Services", "Group Bookings"],
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-ocean-deep text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/80 to-ocean-deep/95" />
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
          <span className="text-gold font-medium text-sm tracking-widest uppercase">Our Services</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 animate-fade-up">
            Tailored Travel Solutions
          </h1>
          <p className="text-lg text-primary-foreground/80 mt-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            From leisure adventures to corporate excellence, we deliver personalized travel experiences for every journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {serviceCategories.map((category) => (
              <Link
                key={category.title}
                to={category.link}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-navy" />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold">{category.title}</h2>
                  </div>
                  <p className="text-primary-foreground/80 mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-primary-foreground/20 backdrop-blur-sm px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-gold font-medium group-hover:gap-4 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Overview */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-ocean font-medium text-sm tracking-widest uppercase">Complete Services</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2">
              Everything You Need for Your Journey
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Ticket, title: "Flight Bookings", description: "Competitive fares on all major airlines" },
              { icon: Hotel, title: "Hotel Reservations", description: "From budget to luxury accommodations" },
              { icon: FileCheck, title: "Visa Processing", description: "Hassle-free visa applications" },
              { icon: Car, title: "Airport Transfers", description: "Reliable ground transportation" },
              { icon: Calendar, title: "Custom Itineraries", description: "Personalized travel planning" },
              { icon: Headphones, title: "24/7 Support", description: "Always there when you need us" },
              { icon: Users, title: "Group Travel", description: "Coordinated group bookings" },
              { icon: Gift, title: "Special Packages", description: "Exclusive deals and offers" },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-xl p-6 border border-border hover:border-ocean/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-ocean/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-ocean" />
                </div>
                <h3 className="font-semibold text-navy">{service.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ocean-deep text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Ready to Plan Your Trip?
          </h2>
          <p className="text-primary-foreground/80 mt-4 max-w-xl mx-auto">
            Contact us today for a personalized quote and let us make your travel dreams a reality.
          </p>
          <Button variant="gold" size="xl" className="mt-8" asChild>
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
