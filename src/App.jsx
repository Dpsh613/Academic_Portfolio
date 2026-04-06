import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// pages
import Home from "./pages/Home.jsx";
import BeamlinesPage from "./pages/BeamlinesPage";
import ResearchPage from "./pages/ResearchPage";
import PublicationsPage from "./pages/PublicationsPage";
import CollaboratorsPage from "./pages/CollaboratorsPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beamline" element={<BeamlinesPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/collaborators" element={<CollaboratorsPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
