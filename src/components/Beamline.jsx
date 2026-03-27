import { motion } from "framer-motion";
import fadeUpVariant from "../animation/fadeUpVariant";
import staggerContainer from "../animation/staggerContainer";

// Properly structured and cleaned data grouped by Facility
const beamlineData = [
  {
    facility: "ISIS Neutron and Muon Source (STFC)",
    proposals: [
      {
        id: "2610315",
        name: "MERLIN",
        awarded: "1 day",
        desc: "Probing Magnetic excitation and Crystal Field States in the Quasi-2D Honeycomb layered oxide Na3Cu2SbO6.",
      },
      {
        id: "2310347",
        name: "EMU",
        awarded: "4 days",
        desc: "Exploring the contribution of spin fluctuations in the formation of quantum spin liquid like state in KLnSe2 (Ln = Ce and Pr).",
      },
      {
        id: "2220325",
        name: "MUSR",
        awarded: "2 days",
        desc: "Investigation of superconductivity in thiospinel compound CuCo2S4 using muon spin relaxation and rotation.",
      },
    ],
  },
  {
    facility: "Paul Scherrer Institute (PSI)",
    proposals: [
      {
        id: "20211455",
        name: "GPD",
        awarded: "2 days",
        desc: "Search for Kitaev Spin Liquid in 3d Transition Metal Oxide.",
      },
      {
        id: "20221271",
        name: "GPS",
        awarded: "1 day",
        desc: "Investigation of the quantum disordered magnetic ground state in RbCeO2 by muon.",
      },
      {
        id: "20221274",
        name: "GPS",
        awarded: "1 day",
        desc: "Study of spin fluctuating states in honeycomb layered oxide Cu3M2SbO6 (M = Co and Ni) using muon spin relaxation.",
      },
      {
        id: "20221276",
        name: "GPD",
        awarded: "5 days",
        desc: "Investigation of superconducting dome on four-layer-type bismuth chalcogenides : LaOPbBiS3 and La2O2Bi3AgS6 by muon.",
      },
    ],
  },
  {
    facility: "Deutsches Elektronen-Synchrotron (DESY)",
    proposals: [
      {
        id: "20220829",
        name: "PETRA III: P24",
        awarded: "3 days",
        desc: "Understanding the role of structural disorder at ambient pressure to the observed QSL-like state in AYbSe2 (A = Rb and Cs): A temperature-dependent X-ray study.",
      },
      {
        id: "20220336",
        name: "PETRA III: P24",
        awarded: "2 days",
        desc: "Understanding the role of structure in the observed quantum spin liquid like state in KLnSe2 (Ln = La, Ce, Pr, and Nd).",
      },
    ],
  },
  {
    facility: "Japan Proton Accelerator Research Complex (J-PARC)",
    proposals: [
      {
        id: "2022B",
        name: "Muon D1",
        awarded: "2 days",
        desc: "Investigation of the magnetic ground state in Bilayer Square Lattice Tb2SrAl2O7 having magnetic frustration.",
      },
    ],
  },
  {
    facility: "Raja Ramanna Centre for Advanced Technology (RRCAT)",
    proposals: [
      {
        id: "6025",
        name: "INDUS-II BL09",
        awarded: "2 days",
        desc: "Investigating the oxidation state of Cu and its local environment in Na3Cu2SbO6.",
      },
      {
        id: "5525",
        name: "INDUS-I BL02",
        awarded: "7 days",
        desc: "Study of averaged electronic structure of Na3Cu2SbO6.",
      },
      {
        id: "5524",
        name: "INDUS-II BL12",
        awarded: "2 days",
        desc: "Investigation of structural change/distortion prior to the AFM order in Na3Co2SbO6.",
      },
      {
        id: "5383",
        name: "INDUS-II BL12",
        awarded: "2 days",
        desc: "Investigation of structural phase transition in Na3Cu2SbO6.",
      },
    ],
  },
];

const Beamline = () => {
  return (
    <section
      id="beamline"
      // Matched margins, padding, and light theme from Research.jsx
      className="relative min-h-[400px] w-full overflow-hidden py-24 px-8 md:px-16 bg-white"
    >
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="mb-16 max-w-7xl mx-auto w-full"
      >
        <h3 className="font-heading text-4xl font-medium tracking-tight text-stone-900 mb-2">
          Beamline Access
        </h3>
        <p className="text-stone-500 tracking-wider text-lg font-light">
          Large-Scale Facility Experience & Accepted Proposals
        </p>
        <div className="w-16 h-0.5 bg-yellow-400 mt-6"></div>
      </motion.div>

      {/* Timeline Container */}
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          // The main vertical line adapted for light mode
          className="ml-2 md:ml-4 border-l-2 border-black/20 flex flex-col gap-16 pb-8"
        >
          {beamlineData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariant}
              className="relative pl-8 md:pl-12"
            >
              {/* Yellow glow dot - adjusted mathematically (-left-[5px]) to center perfectly on a 2px border */}
              <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-yellow-400 ring-4 ring-white shadow-[0_0_12px_rgba(250,204,21,0.6)]"></span>

              {/* Facility Title */}
              <h4 className="font-heading text-2xl font-bold text-stone-900 mb-8 tracking-tight">
                {item.facility}
              </h4>

              {/* Proposals Inner Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {item.proposals.map((prop, pIdx) => (
                  <div
                    key={pIdx}
                    // Card styling adapted from Research.jsx but sized down for list items
                    className="group flex flex-col justify-between h-full bg-gradient-to-br from-yellow-400/40 via-white to-yellow-400/40 border border-stone-200 p-6 rounded-xl hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-[0_8px_30px_-10px_rgba(250,204,21,0.15)] hover:bg-yellow-50/20 transition-all duration-500 ease-out"
                  >
                    <div>
                      {/* Top Bar: Proposal ID + Days Awarded Badge */}
                      <div className="flex items-start mb-4 gap-4">
                        <span className="font-heading font-semibold text-stone-800 text-sm md:text-base group-hover:text-yellow-700 transition-colors">
                          Proposal ID : {prop.id}
                        </span>
                        <span className="font-heading font-bold text-stone-900 tracking-widest text-sm md:text-base group-hover:text-yellow-700 transition-colors">
                          {prop.name}
                        </span>
                        <span className="ml-auto shrink-0 text-[11px] font-bold uppercase tracking-wider text-yellow-800 bg-yellow-100 px-3 py-1 rounded-full border border-yellow-200/50">
                          Awarded: {prop.awarded}
                        </span>
                      </div>
                      {/* Description */}
                      <p className="text-stone-600 text-sm leading-relaxed font-light">
                        {prop.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Beamline;
