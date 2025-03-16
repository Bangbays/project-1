import Hero from "@/components/hero/page";
import About from "@/components/about/page";
import Skill from "@/components/skill/page";
import Portofolio from "@/components/portoffolio/page";
import Experience from "@/components/experience/page";
import Contact from "@/components/contact/contact";
import Navbar from "@/components/navbar/page";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Portofolio />
      <Experience />
      <Contact />
    </main>
  );
}
