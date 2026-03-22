// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import Layout from "./components/Layout";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

// Create simple placeholder components for the other routes for now
const Publications = () => (
  <div className="text-3xl font-heading">Publications Content Here</div>
);
const Research = () => (
  <div className="text-3xl font-heading">Research Focus Content Here</div>
);
const Team = () => (
  <div className="text-3xl font-heading">Our Team Content Here</div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/team" element={<Team />} />
          {/* Add the rest of your routes here based on the detailed input list */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
