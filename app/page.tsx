
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Agreements from "@/components/sections/Agreements";
import ComparisonTable from "@/components/sections/ComparisonTable";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Hero from "@/components/sections/Hero";
import ImageDivider from "@/components/sections/ImageDivider";
import Premise from "@/components/sections/Premise";
import Pricing from "@/components/sections/Pricing";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Stats />
        <Premise />
        <Process />
        <ImageDivider />
        <Agreements />
        <Pricing />
        <ComparisonTable />
        <Team />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
  );
}

