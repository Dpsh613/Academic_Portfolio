import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Research from "./components/Research.jsx";
import Beamline from "./components/Beamline.jsx";
import Publications from "./components/Publications.jsx";
import Talks from "./components/Talks.jsx";
import Awards from "./components/Awards.jsx";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";

export default function Portfolio() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Research />
        <Beamline />
        <Publications />
        <Talks />
        <Awards />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
