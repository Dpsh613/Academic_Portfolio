import HeroSection from "../components/HeroSection.jsx";
import Research from "../components/Research.jsx";
import Publications from "../components/Publications.jsx";
import BeamlineSummary from "../components/BeamlineSummary.jsx";
import Talks from "../components/Talks.jsx";
import Awards from "../components/Awards.jsx";
import Gallery from "../components/Gallery.jsx";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Research />
      <Publications />
      <BeamlineSummary />
      <Talks />
      <Awards />
      <Gallery />
    </div>
  );
}
