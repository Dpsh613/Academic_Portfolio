import { motion } from "framer-motion";
import fadeUpVariant from "../../animation/fadeUpVariant";
// Make sure this path is absolutely correct based on your file structure
import heroImage from "../../assets/images/heroImage.jpg";

export default function HeroImage() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariant}
      // FIXED 2: Removed "hidden lg:flex". Replaced with "flex w-full mt-12 lg:mt-0"
      className="flex lg:col-span-5 justify-center items-center w-full mt-12 lg:mt-0"
    >
      <div className="relative group">
        {/* Decorative Border */}
        <div className="absolute inset-0 border-2 border-theme-accent translate-x-4 translate-y-4 rounded-sm z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>

        {/* Image Frame - Added mobile-responsive widths/heights so it looks good on all phones */}
        <div className="relative w-[280px] h-[360px] sm:w-[300px] sm:h-[400px] xl:w-[380px] xl:h-[500px] bg-neutral-900 overflow-hidden rounded-sm z-10 shadow-2xl">
          <img
            src={heroImage} // FIXED 1: Replaced "heroImage" with {heroImage}
            alt="Arnab Kanti Jana"
            className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity group-hover:opacity-100 group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      </div>
    </motion.div>
  );
}
