import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, Globe, Heart, MapPin, Plane } from "lucide-react";

const teamMembers = [
  { name: "Marc Houareau", role: "Director", bio: "Over 20 years in travel industry" },
  { name: "Guy Savy", role: "Director", bio: "Dedicated to exceptional service" },
  { name: "Marie-Josee Laporte", role: "Manager", bio: "Dedicated to exceptional service" },
  { name: "Najeeb Fazil", role: "Financial Controller", bio: "Dedicated to exceptional service" },  { name: "Liselle Focktave", role: "Group Finance Manager", bio: "Dedicated to exceptional service" }
];

const stats = [
  { icon: Users, value: "50,000+", label: "Happy Travelers" },
  { icon: Globe, value: "100+", label: "Destinations" },
  { icon: Award, value: "4x", label: "Award-Winning" },
  { icon: Heart, value: "10+", label: "Years of Excellence" },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-ocean-deep text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/80 to-ocean-deep/95" />
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
          <span className="text-gold font-medium text-sm tracking-widest uppercase">About Us</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4 animate-fade-up">
            Your Journey, Our Passion
          </h1>
          <p className="text-lg text-primary-foreground/80 mt-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Since 2011, Seashell Travel has been crafting unforgettable travel experiences from the heart of Seychelles.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-ocean font-medium text-sm tracking-widest uppercase">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2">
                Founded on Excellence, Driven by Service
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2011 as a fully accredited IATA agency (No. 73209872), Seashell Travel has grown to become one of Seychelles' premier travel agencies. From our base in Victoria, Mahé, we deliver personalized travel solutions that exceed expectations.
                </p>
                <p>
                  Our mission is simple: to provide exceptional service, secure the best rates, and create hassle-free adventures for individuals, families, and businesses alike. We believe that every journey should be as unique as the traveler embarking upon it.
                </p>
                <p>
                  With partnerships with leading airlines including Emirates, Kenya Airways, Air Seychelles, and more, we ensure our clients receive premium service and competitive fares on every booking.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1544986581-efac024faf62?w=800"
                  alt="Travel consultation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold rounded-2xl p-6 shadow-gold">
                <div className="text-navy">
                  <div className="font-serif text-4xl font-bold">10+</div>
                  <div className="text-sm font-medium">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-ocean/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-ocean" />
                </div>
                <div className="font-serif text-3xl font-bold text-navy">{stat.value}</div>
                <p className="text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-ocean font-medium text-sm tracking-widest uppercase">Our Team</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2">
              Meet the Experts
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our dedicated team of travel professionals is committed to making your journey exceptional.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-square rounded-2xl bg-muted overflow-hidden mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-ocean/20 to-ocean/5 flex items-center justify-center group-hover:from-ocean/30 group-hover:to-ocean/10 transition-all duration-300">
                    <Users className="w-20 h-20 text-ocean/40 group-hover:text-ocean/60 transition-colors" />
                  </div>
                </div>
                <h3 className="font-serif text-lg font-semibold text-navy">{member.name}</h3>
                <p className="text-ocean text-sm font-medium">{member.role}</p>
                <p className="text-muted-foreground text-sm mt-1">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-ocean-deep text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Ready to Start Your Journey?
          </h2>
          <p className="text-primary-foreground/80 mt-4 max-w-xl mx-auto">
            Let our experienced team help you plan your perfect trip. Contact us today for a personalized consultation.
          </p>
          <Button variant="gold" size="xl" className="mt-8" asChild>
            <Link to="/contact">
              <MapPin className="w-5 h-5" />
              Contact Us Today
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
