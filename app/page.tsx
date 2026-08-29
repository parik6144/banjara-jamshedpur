import { BrandStatement } from "@/components/BrandStatement";
import { DiningExperience } from "@/components/DiningExperience";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Navbar } from "@/components/Navbar";
import { ThaliExperience } from "@/components/ThaliExperience";
import { WhyBanjara } from "@/components/WhyBanjara";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <DiningExperience />
        <ThaliExperience />
        <BrandStatement />
        <Gallery />
        <WhyBanjara />
        <Location />
      </main>
      <Footer />
    </>
  );
}
