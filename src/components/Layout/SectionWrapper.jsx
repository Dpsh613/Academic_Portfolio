const SectionWrapper = ({
  id,
  children,
  className = "",
  isHero = false,
  backgroundContent,
}) => {
  return (
    <section
      id={id}
      // FIX: Changed 'overflow-hidden' to 'overflow-clip'
      className={`relative w-full bg-theme-black overflow-clip ${
        isHero
          ? "pt-32 pb-20 min-h-[80vh] md:min-h-screen flex items-center"
          : "py-20 md:py-24"
      } ${className}`}
    >
      {backgroundContent && backgroundContent}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
