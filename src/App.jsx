import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Expertise from "./components/Expertise.jsx";
import Beamline from "./components/Beamline.jsx";
import Publications from "./components/Publications.jsx";
import Talks from "./components/Talks.jsx";
import Gallery from "./components/Gallery.jsx";

export default function Portfolio() {
  return (
    <>
      {/* EDITORIAL NAVIGATION */}
      <Header />

      <main>
        {/* HERO SECTION */}
        <HeroSection />

        {/* EXPERTISE SECTION */}
        <Expertise />
        {/* BEAMLINE ACCESS */}
        <Beamline />

        {/* PULICATIONS */}
        <Publications />
        {/* TALKS & AWARDS (SPLIT) */}
        <Talks />

        {/* GALLERY */}
        <Gallery />
      </main>

      <Footer />
    </>
  );
}
