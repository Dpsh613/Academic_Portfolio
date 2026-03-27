import { useEffect, useState, useRef } from "react";

const sections = [
  "home",
  "research",
  "publications",
  "beamline",
  "talks",
  "awards",
  "collaborators",
  "gallery",
];

const Header = () => {
  const [active, setActive] = useState("home");
  const [lineStyle, setLineStyle] = useState({ width: 0, left: 0 });
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Added state for scrolling
  const navItemsRef = useRef({});

  // Detect Scroll for Glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      // Activates glass effect after scrolling down 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // 1. Create a SINGLE observer for all sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 2. If the section crosses our trigger line, set it as active
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -79% 0px",
        threshold: 0,
      },
    );

    // 4. Observe all sections with the single observer
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    // 5. Clean up
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const activeMenuElement = navItemsRef.current[active];
    if (activeMenuElement && window.innerWidth >= 1280) {
      const { offsetLeft, offsetWidth } = activeMenuElement;
      setLineStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [active, isMobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
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
        {/* Logo */}
        <div className="font-heading font-bold text-xl tracking-[0.15em] text-white relative z-[60]">
          A. K. <span className="text-yellow-400">JANA</span>.
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex gap-10 relative">
          <div
            className="absolute bottom-[-8px] h-[2px] bg-yellow-400 transition-all duration-500 ease-in-out"
            style={{
              left: `${lineStyle.left}px`,
              width: `${lineStyle.width}px`,
            }}
          />

          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              ref={(el) => (navItemsRef.current[item] = el)}
              className={`text-xs text-white font-medium uppercase tracking-widest transition-all duration-300 ${
                active === item
                  ? "text-yellow-400"
                  : "text-neutral-400 hover:text-yellow-400"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="xl:hidden flex flex-col gap-1.5 relative z-[60] p-2 focus:outline-none"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
        >
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
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
        {sections.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setIsMobileOpen(false)}
            className={`text-sm sm:text-base font-medium uppercase tracking-widest transition-all duration-300 ${
              active === item
                ? "text-yellow-400 translate-x-2"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
