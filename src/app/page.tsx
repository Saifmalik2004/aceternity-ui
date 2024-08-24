import FeaturedSection from "@/components/FeaturedSection";
import Herosection from "@/components/Herosection";
import MusicSchoolTestimonials from "@/components/TestimonialCard";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <Herosection/>
    <FeaturedSection/>
    <WhyChooseUs/>
    <MusicSchoolTestimonials/>
    <UpcomingWebinar/>
   </main>
  );
}
