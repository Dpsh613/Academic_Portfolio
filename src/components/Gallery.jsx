import { motion } from "framer-motion";

const Gallery = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  return (
    <section id="gallery" className="py-24 px-8 md:px-16 bg-neutral-950">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="mb-16"
      >
        <h3 className="font-heading text-4xl font-medium tracking-tight text-white mb-4">
          Beyond the Lab
        </h3>
        <p className="text-neutral-400 text-lg font-light">
          Moments of clarity outside the laboratory.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {[
          "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        ].map((img, idx) => (
          <motion.div
            key={idx}
            variants={fadeUpVariant}
            className="h-[350px] bg-cover bg-center rounded-sm grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer"
            style={{ backgroundImage: `url('${img}')` }}
          ></motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Gallery;
