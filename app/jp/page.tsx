import Hero from "@/components/jp/main/Hero";
import Projects from "@/components/jp/main/Projects";
import Skills from "@/components/jp/main/Skills";
import Footer from "../components/jp/main/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}