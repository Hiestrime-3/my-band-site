import React from "react";
import { motion } from "framer-motion";
import { Disc3 } from "lucide-react";

const genres = [
  {
    name: "Pop & Top 40",
    songs: ["Shape of You", "Uptown Funk", "Blinding Lights", "Happy", "Can't Stop the Feeling"],
  },
  {
    name: "Classic Rock",
    songs: ["Don't Stop Believin'", "Sweet Home Alabama", "Livin' on a Prayer", "Bohemian Rhapsody", "Come Together"],
  },
  {
    name: "R&B & Soul",
    songs: ["At Last", "Signed Sealed Delivered", "Let's Stay Together", "Isn't She Lovely", "All of Me"],
  },
  {
    name: "Jazz & Standards",
    songs: ["Fly Me to the Moon", "The Way You Look Tonight", "What a Wonderful World", "Feeling Good", "L-O-V-E"],
  },
];

export default function RepertoireSection() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            Our Repertoire
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Something for <span className="text-primary italic">Everyone</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Over 200 songs spanning decades and genres. We customize every setlist to match your taste.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {genres.map((genre, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Disc3 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                {genre.name}
              </h3>
              <ul className="space-y-2">
                {genre.songs.map((song, j) => (
                  <li
                    key={j}
                    className="font-body text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                    {song}
                  </li>
                ))}
              </ul>
              <p className="font-body text-xs text-primary/60 mt-4 uppercase tracking-wider">
                + many more
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
