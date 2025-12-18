import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I book a ticket with Seashell Travel?",
    answer: "You can book a ticket by contacting us via phone at +248 4321 080 | +248 4321 762 | +248 4324 361, email at info@seashelltravel.sc, or by filling out our online contact form. Our travel consultants will get back to you promptly with the best options for your journey.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards (Visa, MasterCard), bank transfers, and cash payments at our Victoria office. For corporate clients, we also offer invoicing options with approved credit terms.",
  },
  {
    question: "Can you help with visa applications?",
    answer: "Yes! We provide comprehensive visa processing services for most destinations. Our team handles the documentation, application submission, and follow-up to ensure a hassle-free experience.",
  },
  {
    question: "Do you offer travel insurance?",
    answer: "Absolutely. We partner with reputable insurance providers to offer comprehensive travel insurance packages covering medical emergencies, trip cancellations, lost luggage, and more.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellation policies vary depending on the airline, hotel, and type of booking. Generally, we recommend purchasing refundable fares or travel insurance for flexibility. Contact us for specific terms related to your booking.",
  },
  {
    question: "Do you provide corporate travel management?",
    answer: "Yes, we offer full-service corporate travel management including dedicated account managers, travel policy consulting, consolidated billing, detailed reporting, and 24/7 emergency support for business travelers.",
  },
  {
    question: "How far in advance should I book?",
    answer: "For the best rates and availability, we recommend booking international flights at least 4-6 weeks in advance. However, we can also assist with last-minute bookings and emergency travel needs.",
  },
  {
    question: "Are your prices competitive?",
    answer: "As an IATA-accredited agency with strong airline partnerships, we have access to competitive fares and exclusive deals. We're committed to finding you the best value for your travel needs.",
  },
  {
    question: "Do you offer group discounts?",
    answer: "Yes, we offer special rates for group bookings including family vacations, corporate events, and tour groups. Contact us with your group size and requirements for a customized quote.",
  },
  {
    question: "What if I need to change my flight?",
    answer: "Contact us as soon as possible with your change request. We'll work with the airline to modify your booking, subject to availability and any applicable change fees. Our 24/7 emergency line is available for urgent changes.",
  },
];

export default function FAQPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center bg-ocean-deep text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/80 to-ocean-deep" />
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
          <HelpCircle className="w-12 h-12 text-gold mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold animate-fade-up">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-primary-foreground/80 mt-4 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Find answers to common questions about our travel services.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-2xl border border-border px-6 data-[state=open]:border-ocean/30 data-[state=open]:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-serif text-lg font-semibold text-navy hover:text-ocean hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <MessageCircle className="w-12 h-12 text-ocean mx-auto mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mt-4">
              Can't find the answer you're looking for? Our friendly team is here to help.
            </p>
            <Button variant="ocean" size="lg" className="mt-8" asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
