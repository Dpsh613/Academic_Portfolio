import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// pages
import Home from "./pages/Home.jsx";
import BeamlinesPage from "./pages/BeamlinesPage";
import ResearchPage from "./pages/ResearchPage";
import PublicationsPage from "./pages/PublicationsPage";
import CollaboratorsPage from "./pages/CollaboratorsPage.jsx";

// 1. Create a new component just for your routes
const AnimatedRoutes = () => {
  const location = useLocation(); // Gets the current URL

  return (
    // 2. Wrap Routes in AnimatePresence.
    // mode="wait" ensures the old page fully fades out BEFORE the new one fades in.
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/beamline" element={<BeamlinesPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/collaborators" element={<CollaboratorsPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}
