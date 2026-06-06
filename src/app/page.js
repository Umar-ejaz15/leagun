import SiteProvider from "@/components/site/SiteProvider";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WhoWeHelp from "@/components/WhoWeHelp";
import AcquisitionEngine from "@/components/AcquisitionEngine";
import Testimonials from "@/components/Testimonials";
import Results from "@/components/Results";
import CtaBand from "@/components/CtaBand";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import RevenueCalculator from "@/components/RevenueCalculator";
import Footer from "@/components/Footer";
import Modals from "@/components/Modals";

export default function Home() {
  return (
    <SiteProvider>
      <Navigation />
      <main>
        <Hero />
        <TrustStrip />
        <WhoWeHelp />
        <AcquisitionEngine />
        <Testimonials />
        <Results />
        <CtaBand />
        <About />
        <ContactForm />
        <RevenueCalculator />
      </main>
      <Footer />
      <Modals />
    </SiteProvider>
  );
}
