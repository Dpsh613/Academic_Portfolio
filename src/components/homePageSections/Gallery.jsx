import { motion } from "framer-motion";
import fadeUpVariant from "../../animation/fadeUpVariant";
import staggerContainer from "../../animation/staggerContainer";
import InteractiveImage from "../ui/InteractiveImage"; // Import the new component

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section id="gallery" className="py-24 px-8 md:px-16 bg-black relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="mb-16"
      >
        <h2 className="text-white mb-4">Beyond the Lab</h2>
        <h3 className="text-secondary">
          Moments of clarity outside the laboratory.
        </h3>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {images.map((img, idx) => (
          <motion.div key={idx} variants={fadeUpVariant} className="h-[350px]">
            <InteractiveImage src={img} alt={`Gallery visual ${idx + 1}`} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Gallery;
