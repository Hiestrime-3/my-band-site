import React from "react";
import { motion } from "framer-motion";
import { Heart, PartyPopper, Briefcase } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description:
      "From the ceremony to the reception, we create a romantic soundtrack for your special day. First dances, cocktail hours, and dance floor bangers — all tailored to you.",
    features: ["Ceremony Music", "Cocktail Hour Sets", "Reception & Dance Floor", "Custom First Dance"],
  },
  {
    icon: PartyPopper,
    title: "Birthdays & Parties",
    description:
      "Make your birthday bash legendary. We bring high-energy performances that get everyone on the dance floor, from classic party anthems to today's biggest hits.",
    features: ["Custom Playlists", "Interactive Performances", "All Ages Entertainment", "Special Dedications"],
  },
  {
    icon: Briefcase,
    title: "Corporate & Events",
    description:
      "Elevate your corporate events, galas, and private celebrations with sophisticated live entertainment that leaves a lasting impression on every guest.",
    features: ["Ambient Background Sets", "Gala Performances", "Brand-Aligned Music", "Professional Setup"],
  },
];

export default function ServicesSection({ images }) {
  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            What We Do
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Music for Every <span className="text-primary italic">Occasion</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            We specialize in bringing live energy to your most important celebrations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* Background image */}
              <div className="aspect-[4/5] relative">
                <img
                  src={images[i]}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, j) => (
                    <span
                      key={j}
                      className="text-xs font-body uppercase tracking-wider text-primary/80 bg-primary/10 px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
