import HomeHeroJp from "@/components/jp/home/HomeHeroJp";
import SelectedWorkJp from "@/components/jp/home/SelectedWorkJp";
import Lab from "@/components/en/home/Lab";
import ClientWorkJp from "@/components/jp/home/ClientWorkJp";
import Toolkit from "@/components/en/home/Toolkit";
import { getJpProject } from "@/lib/siteProjectsJp";
import Footer from "@/components/jp/main/Footer";

export default function Home() {
  return (
    <main id="main" className="h-full w-full">
      <div className="flex flex-col">
        <HomeHeroJp />
        <SelectedWorkJp />
        <Lab
          getProject={getJpProject}
          intro="TouchDesigner・GLSL・openFrameworks によるリアルタイム表現の実験。新作は Instagram（@ricky_o_369）で発信中。"
          followLabel="Instagram をフォロー ↗"
        />
        <ClientWorkJp />
        <Toolkit />
        <Footer />
      </div>
    </main>
  );
}
