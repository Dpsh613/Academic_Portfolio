const Header = () => {
    
  return (
    <header className="fixed top-0 w-full flex justify-between items-center py-6 px-8 md:px-16 bg-black/80 backdrop-blur-md z-50 border-b border-neutral-900 transition-all">
        <div className="font-heading font-bold text-xl tracking-[0.15em] text-white">
          A.K. JANA<span className="text-yellow-400">.</span>
        </div>
        <nav className="hidden md:flex gap-10">
          {['home', 'expertise', 'publications', 'talks', 'awards', 'gallery'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-yellow-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>
  )
}

export default Header