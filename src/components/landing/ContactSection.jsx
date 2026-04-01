import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Send, Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { useToast } from "@/components/ui/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    event_type: "",
    event_date: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.entities.BookingInquiry.create(form);
    setSending(false);
    toast({
      title: "Inquiry Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", phone: "", event_type: "", event_date: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
              Get in Touch
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Let's Make Your Event{" "}
              <span className="text-primary italic">Unforgettable</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-10">
              Ready to book The Replacements for your next event? Fill out the form and we'll
              get back to you within 24 hours with availability and pricing.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                  <p className="font-body text-foreground">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="font-body text-foreground">hello@thereplacements.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Based In</p>
                  <p className="font-body text-foreground">Los Angeles, CA — Available Nationwide</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-background border border-border rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label className="font-body text-xs uppercase tracking-wider text-muted-foreground">Your Name</Label>
                  <Input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="bg-card border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="font-body text-xs uppercase tracking-wider text-muted-foreground">Email</Label>
                  <Input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="bg-card border-border"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label className="font-body text-xs uppercase tracking-wider text-muted-foreground">Phone</Label>
                  <Input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(555) 000-0000"
                    className="bg-card border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="font-body text-xs uppercase tracking-wider text-muted-foreground">Event Type</Label>
                  <Select
                    value={form.event_type}
                    onValueChange={(v) => setForm({ ...form, event_type: v })}
                  >
                    <SelectTrigger className="bg-card border-border">
                      <SelectValue placeholder="Select event" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="birthday">Birthday Party</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="private_party">Private Party</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="font-body text-xs uppercase tracking-wider text-muted-foreground">Event Date</Label>
                <Input
                  type="date"
                  value={form.event_date}
                  onChange={(e) => setForm({ ...form, event_date: e.target.value })}
                  className="bg-card border-border"
                />
              </div>

              <div className="space-y-2">
                <Label className="font-body text-xs uppercase tracking-wider text-muted-foreground">Tell Us About Your Event</Label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Share any details about your event, preferred music styles, number of guests, venue, etc."
                  className="bg-card border-border min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                disabled={sending}
                className="w-full font-body text-sm uppercase tracking-wider py-6"
              >
                {sending ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Send className="w-4 h-4 mr-2" />
                )}
                {sending ? "Sending..." : "Send Inquiry"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
