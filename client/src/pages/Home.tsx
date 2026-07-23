import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Flavors from "@/components/Flavors";
import Labels from "@/components/Labels";
import Benefits from "@/components/Benefits";
import DetailedIngredients from "@/components/DetailedIngredients";
import SalesPoints from "@/components/SalesPoints";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

/**
 * Tikua Agua Funcional Natural - Homepage
 *
 * Design Philosophy: Naturaleza Viva Moderna
 * - Clean, organic design with vibrant colors
 * - Poppins for display, Inter for body text
 * - Smooth animations and transitions
 * - Focus on natural ingredients and functional benefits
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Story />
      <Flavors />
      <Labels />
      <Benefits />
      <DetailedIngredients />
      <SalesPoints />
      <CTA />
      <Footer />
    </div>
  );
}
