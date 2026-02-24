import Hero from "@/components/en/main/Hero";
import Projects from "@/components/en/main/Projects";
import Skills from "@/components/en/main/Skills";
import Footer from "../components/en/main/Footer";
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