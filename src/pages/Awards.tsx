import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trophy, Award, Star, Medal } from "lucide-react";
import awardsImage from "@/assets/awards-hero.jpg";

const awards = [
  {
    year: "2012-2013",
    title: "Best Travel Agent for Kenya Airways",
    description: "Recognized for outstanding sales performance and customer service excellence.",
    airline: "Kenya Airways",
  },
  {
    year: "2013-2014",
    title: "Best Travel Agent for Kenya Airways",
    description: "Consecutive recognition for continued excellence in partnership with Kenya Airways.",
    airline: "Kenya Airways",
  },
  {
    year: "2014",
    title: "Best Travel Agent for Mihin Lanka",
    description: "Top performing agent for affordable South Asian routes.",
    airline: "Mihin Lanka",
  },
  {
    year: "2014",
    title: "Best International Sales Performer",
    description: "Excellence in international ticket sales and customer satisfaction.",
    airline: "Air Seychelles",
  },
  {
    year: "2012-2013",
    title: "Emirates Top Travel Agent",
    description: "Recognized among the elite travel partners for Emirates in the region.",
    airline: "Emirates",
  },
  {
    year: "2014-2015",
    title: "Outstanding Overall Performance in Sales",
    description: "Comprehensive excellence across all service categories.",
    airline: "Emirates",
  },
  {
    year: "2014-2015",
    title: "Outstanding Sales Performance in Premium Class",
    description: "Leading the region in premium and business class bookings.",
    airline: "Emirates",
  },

];

export default function AwardsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${awardsImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <Trophy className="w-8 h-8 text-gold animate-pulse-soft" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground animate-fade-up">
            Awards & <span className="text-gold">Recognitions</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 mt-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Our commitment to excellence has been recognized by the world's leading airlines.
          </p>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-ocean font-medium text-sm tracking-widest uppercase">Excellence Recognized</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2">
              A Legacy of Achievement
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Since 2012, Seashell Travel has consistently been recognized for outstanding performance by our airline partners.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30" />

              {/* Awards */}
              {awards.map((award, index) => (
                <div
                  key={`${award.year}-${award.title}`}
                  className={`relative flex items-start gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold shadow-gold z-10" />

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="group bg-card rounded-2xl p-6 border border-border hover:border-gold/30 hover:shadow-gold transition-all duration-300">
                      <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="inline-flex items-center gap-1.5 bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-medium">
                          <Star className="w-3 h-3 fill-gold" />
                          {award.year}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-navy group-hover:text-ocean transition-colors">
                        {award.title}
                      </h3>
                      <p className="text-sm text-ocean font-medium mt-1">{award.airline}</p>
                      <p className="text-sm text-muted-foreground mt-3">{award.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Trophy, value: "7+", label: "Industry Awards" },
              { icon: Medal, value: "4", label: "Airline Partners" },
              { icon: Star, value: "15+", label: "Years of Excellence" },
              { icon: Award, value: "IATA", label: "Accredited Agency" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-gold" />
                </div>
                <div className="font-serif text-3xl font-bold text-navy">{stat.value}</div>
                <p className="text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ocean-deep text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Partner with Award-Winning Experts
          </h2>
          <p className="text-primary-foreground/80 mt-4 max-w-xl mx-auto">
            Experience the service quality that has earned us recognition from the world's leading airlines.
          </p>
          <Button variant="gold" size="xl" className="mt-8" asChild>
            <Link to="/contact">
              <Trophy className="w-5 h-5" />
              Start Your Journey
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
