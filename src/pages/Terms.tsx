import { Layout } from "@/components/layout/Layout";

export default function TermsPage() {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl font-bold text-navy mb-8">Terms of Use</h1>
            
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-sm text-muted-foreground mb-8">Last updated: December 2024</p>

              <h2 className="font-serif text-xl font-semibold text-navy mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Seashell Travel website and services, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="font-serif text-xl font-semibold text-navy mt-8 mb-4">2. Services</h2>
              <p>
                Seashell Travel (Pty) Ltd provides travel agency services including but not limited to airline ticket booking, hotel reservations, visa processing, and travel consultation. All services are subject to availability and applicable terms from third-party providers.
              </p>

              <h2 className="font-serif text-xl font-semibold text-navy mt-8 mb-4">3. Booking and Payment</h2>
              <p>
                All bookings are subject to confirmation and availability. Payment terms vary by service and will be communicated at the time of booking. Prices are subject to change until full payment is received and booking is confirmed.
              </p>

              <h2 className="font-serif text-xl font-semibold text-navy mt-8 mb-4">4. Cancellations and Refunds</h2>
              <p>
                Cancellation policies vary depending on the service provider (airline, hotel, etc.). Refunds are processed according to the specific terms of each booking. Service fees may be non-refundable.
              </p>

              <h2 className="font-serif text-xl font-semibold text-navy mt-8 mb-4">5. Travel Documents</h2>
              <p>
                Clients are responsible for ensuring they have valid passports, visas, and other required travel documents. While we assist with visa processing, we cannot guarantee visa approval as this is at the discretion of the relevant authorities.
              </p>

              <h2 className="font-serif text-xl font-semibold text-navy mt-8 mb-4">6. Liability</h2>
              <p>
                Seashell Travel acts as an intermediary between clients and service providers. We are not liable for the acts, omissions, or failures of airlines, hotels, or other third-party service providers.
              </p>

              <h2 className="font-serif text-xl font-semibold text-navy mt-8 mb-4">7. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of Seashell Travel and is protected by applicable copyright laws.
              </p>

              <h2 className="font-serif text-xl font-semibold text-navy mt-8 mb-4">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this website.
              </p>

              <h2 className="font-serif text-xl font-semibold text-navy mt-8 mb-4">9. Contact</h2>
              <p>
                For questions about these Terms of Use, please contact us at:<br />
                Email: info@seashelltravel.sc<br />
                Phone: +248 432 1080
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
