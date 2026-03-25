import { useEffect, useState, useRef } from "react";

const sections = [
  "home",
  "research",
  "beamline",
  "publications",
  "collaborators",
  "talks",
  "awards",
  "gallery",
];

const Header = () => {
  const [active, setActive] = useState("home");
  const [lineStyle, setLineStyle] = useState({ width: 0, left: 0 });
  const navItemsRef = useRef({}); // To store references to each link element

  useEffect(() => {
    const observers = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { threshold: 0.6 },
      );
      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // This effect handles the "Journey" of the underline
  useEffect(() => {
    const activeMenuElement = navItemsRef.current[active];
    if (activeMenuElement) {
      const { offsetLeft, offsetWidth } = activeMenuElement;
      setLineStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [active]);

  return (
    <header className="fixed top-0 w-full flex justify-between items-center py-6 px-8 md:px-16 bg-black/80 backdrop-blur-md z-50 border-b border-neutral-900 transition-all">
      <div className="font-heading font-bold text-xl tracking-[0.15em] text-white">
        A. K. <span className="text-yellow-400">JANA</span>.
      </div>

      <nav className="hidden md:flex gap-10 relative">
        {/* The Traveling Underline */}
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
            ref={(el) => (navItemsRef.current[item] = el)} // Capture reference
            className={`text-xs font-medium uppercase tracking-widest transition-all duration-400 ${
              active === item
                ? "text-yellow-400"
                : "text-neutral-400 hover:text-yellow-400"
            }`}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
