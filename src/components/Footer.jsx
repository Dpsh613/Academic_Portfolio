const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-8 px-8 md:px-16 border-t border-neutral-900">
      <div className="grid md:grid-cols-[2fr_1fr] gap-16 border-b border-neutral-900 pb-16">
        <div>
          <div className="font-heading font-bold text-2xl tracking-[0.15em] text-white mb-4">
            A.K.<span className="text-yellow-400"> JANA</span>.
          </div>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-sm font-light">
            Experimental Condensed Matter Physicist
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div>
            <h5 className="text-neutral-600 text-xs font-bold uppercase tracking-widest mb-6">
              Directory
            </h5>
            <div className="flex flex-col gap-4">
              {["Expertise", "Publications", "Talks", "Awards"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-neutral-400 text-sm hover:text-yellow-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-neutral-600 text-xs font-bold uppercase tracking-widest mb-6">
              Connect
            </h5>
            <div className="flex flex-col gap-4">
              {["ResearchGate", "Google Scholar", "LinkedIn"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-neutral-400 text-sm hover:text-yellow-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-neutral-600 text-xs tracking-wider">
        <p>© 2026 Arnab Kanti Jana. Crafted for Scientific Excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;
