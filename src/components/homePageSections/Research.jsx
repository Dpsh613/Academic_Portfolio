import { motion } from "framer-motion";
import fadeUpVariant from "../../animation/fadeUpVariant.js";
import staggerContainer from "../../animation/staggerContainer.js";
import { researchData } from "../../constants/researchData.jsx";
// import { expertiseData } from "../../constants/expertiesData.js";

const Research = () => {
  return (
    <section
      id="research"
      className="relative w-full py-10 px-8 md:px-16 bg-theme-black"
    >
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-16"
        >
          <h2 className="text-theme-heading">Present Research focus</h2>
          <div className="w-24 h-0.5 bg-theme-accent mt-6"></div>
        </motion.div>

        {/* ONE BIG CONTAINER - VERTICAL LIST */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto w-full border border-theme-accent-light p-6 sm:p-8 md:p-12 backdrop-blur-sm shadow-xl"
        >
          <div className="flex flex-col divide-y divide-zinc-800/60">
            {researchData.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUpVariant}
                // Using 12 columns for precise layout control
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-10 first:pt-0 last:pb-0 items-center"
              >
                {/* 1. Left Side: Number, Heading & Description */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <span className="font-mono text-secondary font-fluid-2 font-light mb-2 block">
                    {item.id}.
                  </span>
                  <h3 className="text-secondary text-xl md:text-2xl font-medium tracking-wide mb-6">
                    {item.title}
                  </h3>
                  <p className="text-theme-neutral-light leading-relaxed m-0 text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>

                {/* 2. Right Side: Image Component (Uncropped) */}
                <div className="lg:col-span-5 w-full">
                  {/* Added padding inside the border, overflow-hidden to contain the hover scale effect safely */}
                  <div className="w-full p-2 group overflow-hidden flex justify-center items-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      // object-contain ensures the image is NEVER cropped.
                      // max-h-[350px] ensures it takes up substantial space without breaking the vertical flow
                      className="w-full max-h-[350px] object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Expertise Section */}
      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center gap-6 mt-16 mb-12">
          <h2 className="font-heading text-fluid-2 font-light tracking-tight text-white">
            Hands-on Expertise
          </h2>
          <div className="flex-grow h-px bg-neutral-800"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="p-8 border border-neutral-800 bg-neutral-900/10 hover:bg-neutral-900/30 hover:border-yellow-800 transition-all duration-300 rounded-sm group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>

              <h4 className="tracking-[0.1em] text-secondary font-light mb-4">
                {item.category}
              </h4>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                {item.skills}
              </p>
            </div>
          ))}
        </div>
      </motion.div> */}
    </section>
  );
};

export default Research;
