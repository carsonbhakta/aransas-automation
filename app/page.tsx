import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import IncludedList from "@/components/IncludedList";
import WeatherNote from "@/components/WeatherNote";
import OwnershipBand from "@/components/OwnershipBand";
import Pricing from "@/components/Pricing";
import FinalCta from "@/components/FinalCta";
import SiteFooter from "@/components/SiteFooter";
import StickyTextBar from "@/components/StickyTextBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <main>
        <Hero />
        <Pillars />
        <IncludedList />
        <WeatherNote />
        <OwnershipBand />
        <Pricing />
        <FinalCta />
      </main>
      <SiteFooter />

      {/* room so the fixed text bar never covers the footer */}
      <div aria-hidden="true" className="h-[84px]" />
      <StickyTextBar />
    </div>
  );
}
