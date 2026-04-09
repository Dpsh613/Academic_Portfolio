import { motion } from "framer-motion";
import fadeUpVariant from "../../animation/fadeUpVariant";

export default function HeroImage() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariant}
      className="hidden lg:flex lg:col-span-5 justify-center items-center"
    >
      <div className="relative group">
        {/* Decorative Border */}
        <div className="absolute inset-0 border-2 border-theme-accent translate-x-4 translate-y-4 rounded-sm z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>

        {/* Image Frame */}
        <div className="relative h-[400px] w-[300px] xl:h-[500px] xl:w-[380px] bg-neutral-900 overflow-hidden rounded-sm z-10 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60"
            alt="Arnab Kanti Jana"
            className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity group-hover:opacity-100 group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      </div>
    </motion.div>
  );
}
