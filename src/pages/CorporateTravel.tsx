import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, Users, Calendar, Ticket, Hotel, Car, Headphones, FileCheck, Clock, Shield, Building, Check } from "lucide-react";
import corporateImage from "@/assets/corporate-travel.jpg";

const services = [
  {
    icon: Ticket,
    title: "Airline Ticketing",
    description: "Access to premium fares and flexible booking options for business travelers.",
  },
  {
    icon: Hotel,
    title: "Hotel Accommodations",
    description: "Corporate rates at quality hotels worldwide, from business essentials to luxury stays.",
  },
  {
    icon: FileCheck,
    title: "Visa Processing",
    description: "Expedited visa services for all business travel requirements.",
  },
  {
    icon: Car,
    title: "Chauffeur Services",
    description: "Professional chauffeur-driven transport for executives and VIP guests.",
  },
  {
    icon: Headphones,
    title: "24-Hour Emergency Support",
    description: "Round-the-clock assistance for urgent travel changes and emergencies.",
  },
  {
    icon: Clock,
    title: "Courtesy Visits",
    description: "On-site consultations at your office for personalized service.",
  },
  {
    icon: Building,
    title: "Travel Management Consulting",
    description: "Strategic advice on optimizing travel policies and reducing costs.",
  },
  {
    icon: Users,
    title: "Group Coordination",
    description: "Seamless management of conferences, meetings, and team travel.",
  },
];

export default function CorporateTravelPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${corporateImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-gold font-medium text-sm tracking-widest uppercase">
              <Briefcase className="w-4 h-4" />
              Corporate Travel
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 animate-fade-up">
              Business Travel Excellence
            </h1>
            <p className="text-lg text-primary-foreground/80 mt-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Full-service travel management solutions for SMEs to large corporations. We streamline your business travel with efficiency, reliability, and cost optimization.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">Request Consultation</Link>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <Link to="/services">All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-ocean font-medium text-sm tracking-widest uppercase">Corporate Solutions</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2">
              Comprehensive Business Travel Services
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From executive travel to team coordination, we deliver seamless corporate travel experiences tailored to your business needs.
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

      {/* Why Corporate Choose Us */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
                  alt="Business meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-ocean-deep rounded-2xl p-6 text-primary-foreground shadow-lg">
                <div className="font-serif text-3xl font-bold text-gold">10+</div>
                <p className="text-sm">Years Serving Businesses</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-ocean font-medium text-sm tracking-widest uppercase">Corporate Advantage</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2">
                Your Strategic Travel Partner
              </h2>
              <div className="mt-8 space-y-4">
                {[
                  "Dedicated account managers for personalized service",
                  "Negotiated corporate rates with major airlines and hotels",
                  "Detailed travel reports and expense tracking",
                  "Policy compliance and duty of care solutions",
                  "Flexible booking modifications and cancellations",
                  "Consolidated billing and invoicing options",
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
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form CTA */}
      <section className="py-20 bg-ocean-deep text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Let's Discuss Your Corporate Travel Needs
            </h2>
            <p className="text-primary-foreground/80 mt-4">
              Our dedicated corporate team is ready to create a tailored travel solution for your business. Contact us for a consultation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  <Building className="w-5 h-5" />
                  Request Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
