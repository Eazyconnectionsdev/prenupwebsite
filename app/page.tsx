import {
  Header,
  Hero,
  Stats,
  Premise,
  Process,
  ImageDivider,
  Agreements,
  Pricing,
  ComparisonTable,
  Team,
  Testimonials,
  FAQ,
  FinalCTA,
  Footer,
  SmoothScroll,
} from "@/components/letsprenup";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Premise />
        <ComparisonTable />
        <Process />
        <ImageDivider />
        <Agreements />
        <Pricing />
        <Team />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
    </SmoothScroll>
  );
}
