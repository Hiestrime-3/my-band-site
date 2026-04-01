import React from "react";
import { motion } from "framer-motion";
import { Users, Music2, Calendar, Award } from "lucide-react";

const stats = [
  { icon: Calendar, value: "500+", label: "Events Performed" },
  { icon: Music2, value: "200+", label: "Songs in Repertoire" },
  { icon: Users, value: "10+", label: "Years Together" },
  { icon: Award, value: "100%", label: "Client Satisfaction" },
];

export default function AboutSection({ bandPhoto }) {
  return (
    <section id="about" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/2]">
              <img
                src={bandPhoto}
                alt="The Replacements band members"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
              About Us
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Event Deserves{" "}
              <span className="text-primary italic">Live Music</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              The Replacements are a versatile 5-piece band specializing in live performances
              for weddings, birthdays, corporate events, and private celebrations. We blend
              classic hits with modern favorites to create the perfect atmosphere for every moment.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-10">
              From the first dance to the last song of the night, we tailor our setlist to
              match your vision. Our passion is turning your celebration into an unforgettable
              experience filled with music, energy, and joy.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
