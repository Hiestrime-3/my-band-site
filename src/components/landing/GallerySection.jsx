import React from "react";
import { motion } from "framer-motion";

export default function GallerySection({ images }) {
  return (
    <section id="gallery" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Gallery
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Moments We've <span className="text-primary italic">Created</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-xl overflow-hidden group ${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <img
                src={img}
                alt={`Performance photo ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
