import AboutMe from "@/components/guardians_en/main/AboutMe";
import Footer from "../components/guardians_en/main/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <AboutMe />
        <Footer />
      </div>
    </main>
  );
}