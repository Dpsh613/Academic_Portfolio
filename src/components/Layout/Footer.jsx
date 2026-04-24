import { Link } from "react-router-dom";
import { Microscope, BookOpen, Activity, Users, User } from "lucide-react";

// 1. Array for internal Directory links mapped to your routes
const directoryLinks = [
  { name: "Research", path: "/research", icon: Microscope },
  { name: "Publications", path: "/publications", icon: BookOpen },
  { name: "Beamlines", path: "/beamline", icon: Activity },
  { name: "Collaborators", path: "/collaborators", icon: Users },
  { name: "About Me", path: "/about", icon: User },
];

// 2. Array for external Connect links using your custom images
// Note: Ensure the extensions (.png, .svg) match exactly what is in your public/footer folder!
const connectLinks = [
  { name: "ResearchGate", href: "#", img: "/footer/ResearchGate.png" },
  {
    name: "Google Scholar",
    href: "https://scholar.google.com/citations?hl=en&user=nxnCytcAAAAJ&sortby=pubdate&view_op=list_works",
    img: "/footer/GoogleScholar.png",
  },
  {
    name: "ORCID",
    href: "https://orcid.org/0009-0003-9115-5293",
    img: "/footer/Orcid.png",
  },
  {
    name: "Gmail",
    href: "akj.chs2014@gmail.com",
    img: "/footer/Gmail.png",
  },
];

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-8 px-6 md:px-12 lg:px-20 border-t border-neutral-900 overflow-hidden">
      {/* Top Section - Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-neutral-900 pb-16">
        {/* Brand/Logo Section (Spans 2 columns on large screens) */}
        <div className="lg:col-span-2 flex flex-col justify-center">
          <h3 className="text-3xl tracking-[0.15em] text-white mb-3 font-semibold">
            A.K.
            <span className="text-secondary"> JANA</span>.
          </h3>
          <p className="text-secondaryleading-relaxed max-w-sm font-light">
            Doctoral Researcher
          </p>
        </div>

        {/* Directory Section */}
        <div className="font-body">
          <h5 className="text-secondary uppercase tracking-widest text-sm mb-6 font-medium">
            Directory
          </h5>
          <div className="flex flex-col gap-4">
            {directoryLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="flex items-center gap-3 text-neutral-400 text-sm hover:text-yellow-400 transition-all duration-300 group w-fit"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Connect Section */}
        <div className="font-body">
          <h5 className="text-secondary uppercase tracking-widest text-sm mb-6 font-medium">
            Connect
          </h5>
          <div className="flex flex-col gap-4">
            {connectLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-400 text-sm hover:text-yellow-400 transition-all duration-300 group w-fit"
              >
                {/* Custom Image Wrapper */}
                <div className="w-5 h-5 flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <img
                    src={link.img}
                    alt={link.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-100 text-xs tracking-wider">
        <p>
          © {new Date().getFullYear()}
          <span className="text-secondary font-medium"> A.K. Jana</span>. All
          rights reserved.
        </p>
        {/* <p className="text-center md:text-right">
          Crafted for Scientific Excellence by{" "}
          <span className="text-secondary font-medium">Deepika Sharma</span>.
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
