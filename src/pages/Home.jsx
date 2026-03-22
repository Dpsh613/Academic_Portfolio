// export default function Home() {
//   return (
//     <div className="space-y-20">
//       <h1>home</h1>
//     </div>
//   );
// }
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 border border-accent/30 bg-accent/10 text-accent font-mono text-xs rounded-full"
          >
            Principal Investigator
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Exploring the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
              Quantum Frontier.
            </span>
          </h1>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            We investigate novel phases of matter, topological insulators, and
            quantum spin liquids. Bridging the gap between theoretical physics
            and next-generation materials.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 bg-accent text-bg-base font-medium rounded-md hover:bg-accent-hover transition-colors shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              Latest Publications
            </button>
            <button className="px-6 py-3 border border-surface text-text-main rounded-md hover:bg-surface transition-colors">
              Join the Lab
            </button>
          </div>
        </div>

        {/* Abstract/Sleek Image placeholder */}
        <div className="flex-1 w-full aspect-square relative rounded-2xl overflow-hidden border border-surface bg-surface/30">
          {/* In a real scenario, put a high-res microscopy image or cool abstract rendering of lattices here */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent mix-blend-overlay" />
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop"
            alt="Condensed Matter Abstract"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
      </section>

      {/* Quick Stats / Highlights */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-surface py-10">
        {[
          { label: "Citations", value: "3,200+" },
          { label: "Publications", value: "45" },
          { label: "Active Grants", value: "$1.2M" },
          { label: "H-Index", value: "24" },
        ].map((stat, i) => (
          <div key={i} className="space-y-2">
            <h4 className="text-3xl font-heading font-bold text-accent">
              {stat.value}
            </h4>
            <p className="text-sm font-mono text-text-muted">{stat.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
