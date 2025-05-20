import Starbackground from "../components/Starbackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Aboutme from "../components/Aboutme";
import SkillsSection from "../components/SkillsSection";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footersection from "../components/Footersection";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Starbackground />
      <Navbar />
      <main>
        <HeroSection />
        <Aboutme />
        <SkillsSection />
        <Project />
        <Contact />
      </main>
      {/* Footer */}
      <Footersection/>
    </div>
  );
}
export default Home;
