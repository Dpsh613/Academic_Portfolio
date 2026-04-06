import { useEffect, useState, useRef } from "react";
import { useLocation, Link } from "react-router-dom";

// 1. Define strictly PAGE routes
const pageLinks = [
  { name: "Home", path: "/" },
  { name: "Research", path: "/research" },
  { name: "Publications", path: "/publications" },
  { name: "Beamlines", path: "/beamline" },
  { name: "Collaborators", path: "/collaborators" },
];

const Header = () => {
  const location = useLocation(); // Gets current URL path
  const [lineStyle, setLineStyle] = useState({ width: 0, left: 0 });
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navItemsRef = useRef({});

  // Detect Scroll for Glassmorphism Background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Animated Yellow Line Under Active Link
  useEffect(() => {
    const updateLinePosition = () => {
      const activeMenuElement = navItemsRef.current[location.pathname];

      if (activeMenuElement && window.innerWidth >= 1280) {
        const { offsetLeft, offsetWidth } = activeMenuElement;
        setLineStyle({ left: offsetLeft, width: offsetWidth });
      } else {
        setLineStyle({ width: 0, left: 0 }); // Hide if on an unlisted page
      }
    };

    updateLinePosition();

    // Optional: Update line if user resizes their window
    window.addEventListener("resize", updateLinePosition);
    return () => window.removeEventListener("resize", updateLinePosition);
  }, [location.pathname, isMobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "unset";
  }, [isMobileOpen]);

  return (
    <header
      className={`fixed top-0 w-full px-8 md:px-16 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
        {/* Logo - Clickable to return Home */}
        <Link
          to="/"
          className="font-heading font-bold text-xl tracking-[0.15em] text-white relative z-[60]"
        >
          A. K. <span className="text-yellow-400">JANA</span>.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex gap-10 relative">
          <div
            className="absolute bottom-[-8px] h-[2px] bg-yellow-400 transition-all duration-500 ease-in-out"
            style={{
              left: `${lineStyle.left}px`,
              width: `${lineStyle.width}px`,
            }}
          />

          {pageLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              ref={(el) => (navItemsRef.current[link.path] = el)}
              className={`text-xs font-medium uppercase tracking-widest transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-yellow-400"
                  : "text-neutral-400 hover:text-yellow-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="xl:hidden flex flex-col gap-1.5 relative z-[60] p-2 focus:outline-none"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
        >
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileOpen ? "opacity-0" : "opacity-100"}`}
          />
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Background Overlay for Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 xl:hidden z-40 ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Mobile Right-Side Sidebar/Drawer */}
      <div
        className={`fixed top-0 right-0 h-[100dvh] w-64 sm:w-80 bg-black/80 border-l border-black/80 shadow-2xl flex flex-col justify-start pt-32 px-10 gap-8 transition-transform duration-500 ease-in-out xl:hidden z-50 overflow-y-auto ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {pageLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsMobileOpen(false)}
            className={`text-sm sm:text-base font-medium uppercase tracking-widest transition-all duration-300 ${
              location.pathname === link.path
                ? "text-yellow-400 translate-x-2"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
