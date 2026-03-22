// export default function Layout() {
//   return (
//     <div>
//       <h1>layout</h1>
//     </div>
//   );
// }
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/research", label: "Research Focus" },
  { path: "/publications", label: "Publications" },
];

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sleek, blurred top navigation */}
      <nav className="sticky top-0 z-50 bg-bg-base/80 backdrop-blur-md border-b border-surface">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-heading font-bold tracking-wider text-accent"
          >
            A.K Jana{" "}
            <span className="text-text-muted text-sm font-mono block">
              Condensed Matter Lab
            </span>
          </Link>
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-text-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content with Framer Motion Transitions */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
