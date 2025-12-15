import { Layout } from "@/components/layout/Layout";
import {
  HeroSection,
  AirlinePartners,
  ServicesTeaser,
  TestimonialsSection,
  TrustSignals,
  NewsletterSection,
} from "@/components/home/HomeComponents";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustSignals />
      <AirlinePartners />
      <ServicesTeaser />
      <TestimonialsSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
