import { motion } from "framer-motion";
import fadeUpVariant from "../animation/fadeUpVariant";
import staggerContainer from "../animation/staggerContainer";
// import img from "../assets/images/img4.jpg"; // Ready for future use

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[url('./assets/images/img1.jpg')] bg-cover bg-center"
    >
      {/* Dark Overlay & Centering Container */}
      <div className="absolute inset-0 bg-black/80">
        <div className="container mx-auto px-8 md:px-16 h-full flex items-center">
          {/* Responsive Grid: 1 Col on Mobile, 2 Cols on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 w-full mt-20 pt-20">
            {/* LEFT SIDE: Text & Buttons */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col justify-center gap-2 md:gap-"
            >
              {/* NAME */}
              <motion.h1
                variants={fadeUpVariant}
                className="font-heading text-[clamp(3rem,6vw,5.5rem)] font-light leading-tight tracking-tight text-white"
              >
                Arnab Kanti{" "}
                <span className="font-bold text-yellow-400">Jana</span>
              </motion.h1>

              {/* POSITION */}
              <motion.h2
                variants={fadeUpVariant}
                className="font-normal text-sm md:text-lg tracking-[clamp(0.05em,0.6vw,0.21em)] uppercase text-yellow-400"
              >
                Experimental Condensed Matter Physicist
              </motion.h2>

              {/* BUTTONS */}
              <motion.div
                variants={fadeUpVariant}
                className="flex flex-wrap gap-20 pt-20 "
              >
                <a
                  href="#publications"
                  className="bg-yellow-400 text-black px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-yellow-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(250,204,21,0.3)] transition-all duration-300 ease-in-out rounded-sm"
                >
                  All Publications
                </a>
                <a
                  href="/Arnab_Jana/cv-llt.pdf"
                  download
                  className="border border-neutral-700 text-white px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:border-yellow-400 hover:text-yellow-400 hover:-translate-y-1 hover:bg-neutral-900/50 transition-all duration-300 ease-in-out rounded-sm"
                >
                  Download CV
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE: Dedicated space for future image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center w-full h-full min-h-[50vh]"
            >
              {/* FUTURE IMAGE GOES HERE */}
              {/* 
              <div className="h-full w-full max-w-md bg-black/70 border border-neutral-800 rounded-sm overflow-hidden relative">
                <img
                  src={img}
                  alt="Arnab Kanti Jana"
                  className="w-full h-full object-cover grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                />
              </div> 
              */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
