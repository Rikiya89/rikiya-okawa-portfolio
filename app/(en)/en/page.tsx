import HomeHero from "@/components/en/home/HomeHero";
import SelectedWork from "@/components/en/home/SelectedWork";
import Lab from "@/components/en/home/Lab";
import ClientWorkTeaser from "@/components/en/home/ClientWorkTeaser";
import Toolkit from "@/components/en/home/Toolkit";
import Footer from "@/components/en/main/Footer";

export default function Home() {
  return (
    <main id="main" className="h-full w-full">
      <div className="flex flex-col">
        <HomeHero />
        <SelectedWork />
        <Lab />
        <ClientWorkTeaser />
        <Toolkit />
        <Footer />
      </div>
    </main>
  );
}
