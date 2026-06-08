import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import DemosTeaser from "@/components/DemosTeaser";
import About from "@/components/About";
import BookingContact from "@/components/BookingContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <DemosTeaser />
        <About />
        <BookingContact />
      </main>
      <Footer />
    </>
  );
}
