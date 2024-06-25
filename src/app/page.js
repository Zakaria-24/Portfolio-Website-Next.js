import AboutSection from "./Components/AboutSection";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
