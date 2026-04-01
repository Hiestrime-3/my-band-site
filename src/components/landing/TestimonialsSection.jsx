import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & James",
    event: "Wedding Reception",
    text: "The Replacements made our wedding absolutely magical. From the ceremony to the last dance, every song was perfect. Our guests are still talking about it months later!",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    event: "50th Birthday Party",
    text: "I hired them for my husband's surprise 50th and they were incredible! They had every generation on the dance floor. Professional, talented, and so fun to work with.",
    rating: 5,
  },
  {
    name: "David Chen",
    event: "Corporate Gala",
    text: "We've used The Replacements for three consecutive annual galas now. They elevate the entire atmosphere. Classy during dinner, electric on the dance floor. Simply the best.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients <span className="text-primary italic">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-background border border-border rounded-2xl p-8 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="font-body text-muted-foreground leading-relaxed mb-6 text-sm">
                "{t.text}"
              </p>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <div>
                <p className="font-heading text-foreground font-semibold">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                  {t.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
