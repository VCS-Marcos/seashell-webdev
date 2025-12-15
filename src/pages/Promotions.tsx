import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tag, Sparkles, Bell, Mail, ArrowRight } from "lucide-react";

const placeholderPromos = [
  {
    title: "Summer Seychelles Escape",
    description: "10% off on all domestic flights and hotel packages.",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600",
    badge: "Coming Soon",
  },
  {
    title: "Dubai Shopping Festival",
    description: "Exclusive rates on Emirates flights to Dubai.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600",
    badge: "Coming Soon",
  },
  {
    title: "African Safari Adventure",
    description: "Curated Kenya packages with Kenya Airways.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600",
    badge: "Coming Soon",
  },
];

export default function PromotionsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-ocean-deep via-ocean to-ocean-light text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gold/20 blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-primary-foreground/10 blur-3xl" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-gold animate-pulse" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-up">
            Exclusive Deals & Offers
          </h1>
          <p className="text-lg text-primary-foreground/80 mt-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Stay tuned for amazing travel deals and special promotions from Seashell Travel.
          </p>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
              <Tag className="w-10 h-10 text-ocean" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy">
              No Active Promotions at the Moment
            </h2>
            <p className="text-muted-foreground mt-4">
              We're not running any promotions right now, but great deals are always around the corner. Contact us for personalized quotes and be the first to know about upcoming offers!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Button variant="ocean" size="lg" asChild>
                <Link to="/contact">Get a Personalized Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Deals Preview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-ocean font-medium text-sm tracking-widest uppercase">Coming Soon</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-2">
              Deals on the Horizon
            </h2>
            <p className="text-muted-foreground mt-4">
              Preview of exciting promotions we're preparing for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {placeholderPromos.map((promo) => (
              <div
                key={promo.title}
                className="group bg-card rounded-2xl overflow-hidden border border-border opacity-75 hover:opacity-100 transition-all duration-300"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-navy/80 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-sm">
                      <Bell className="w-3 h-3" />
                      {promo.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-navy">{promo.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{promo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-ocean-deep text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-12 h-12 mx-auto mb-6 text-gold" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Be the First to Know
            </h2>
            <p className="text-primary-foreground/80 mt-4">
              Subscribe to our newsletter and never miss an exclusive deal or special promotion.
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
              />
              <Button variant="gold" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
