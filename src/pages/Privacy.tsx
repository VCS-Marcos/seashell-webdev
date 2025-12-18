import { Layout } from "@/components/layout/Layout";

export default function PrivacyPage() {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl font-bold text-navy mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-sm text-muted-foreground mb-8">Last updated: December 2024</p>

              <h2 className="font-serif text-xl font-semibold text-navy mt-8 mb-4">1. Information We Collect</h2>
              <p>
                We collect personal information that you provide directly to us, including but not limited to: name, email address, phone number, passport details, travel preferences, and payment information when you use our services.
              </p>

              <h2 className="font-serif text-xl font-semibold text-navy mt-8 mb-4">2. How We Use Your Information</h2>
              <p>
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process travel bookings and reservations</li>
                <li>Communicate about your travel arrangements</li>
                <li>Send promotional offers and newsletters (with your consent)</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal requirements</li>
              </ul>

              <h2 className="font-serif text-xl font-semibold text-navy mt-8 mb-4">3. Information Sharing</h2>
              <p>
                We share your personal information with airlines, hotels, and other service providers necessary to fulfill your travel bookings. We do not sell your personal information to third parties for marketing purposes.
              </p>

              <h2 className="font-serif text-xl font-semibold text-navy mt-8 mb-4">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>

              <h2 className="font-serif text-xl font-semibold text-navy mt-8 mb-4">5. Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="font-serif text-xl font-semibold text-navy mt-8 mb-4">6. Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
              </p>

              <h2 className="font-serif text-xl font-semibold text-navy mt-8 mb-4">7. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
              </p>

              <h2 className="font-serif text-xl font-semibold text-navy mt-8 mb-4">8. Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page.
              </p>

              <h2 className="font-serif text-xl font-semibold text-navy mt-8 mb-4">9. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:<br />
                Email: info@seashelltravel.sc<br />
                Phone: +248 432 1080<br />
                Address: P.O. Box 349, VCS Building, Victoria, Mahé, Seychelles
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
