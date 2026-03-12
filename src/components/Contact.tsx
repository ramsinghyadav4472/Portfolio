"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Send, CheckCircle2, Mail, MapPin, Calendar, Clock, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Replace with your actual Formspree endpoint
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        
        {/* Left Column: Contact Information */}
        <div className="lg:col-span-2 space-y-8">
          <div>
             <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">Let's Connect</h3>
             <p className="text-muted-foreground font-mono text-sm mb-6">Open for opportunities, collabs, and tech discussions.</p>
          </div>

          <div className="space-y-4">
            <Card className="glass border-primary/20 bg-background/40 hover:bg-background/60 transition-all duration-300 group">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary neon-border-blue group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-mono mb-1">Email</p>
                  <a href="mailto:your.email@example.com" className="text-white hover:text-primary transition-colors font-medium">
                    your.email@example.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-secondary/20 bg-background/40 hover:bg-background/60 transition-all duration-300 group">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-3 rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-all" style={{boxShadow: '0 0 10px var(--color-secondary), inset 0 0 10px var(--color-secondary)'}}>
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-mono mb-1">Location</p>
                  <p className="text-white font-medium">
                    Phagwara, Punjab
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-accent/20 bg-background/40 hover:bg-background/60 transition-all duration-300 group">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-3 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all" style={{boxShadow: '0 0 10px var(--color-accent), inset 0 0 10px var(--color-accent)'}}>
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-mono mb-1">Availability</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    <p className="text-white font-medium">Internships | Full-Time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="pt-4 border-t border-white/10">
            <p className="text-xs text-muted-foreground uppercase font-mono mb-4">Direct Links</p>
            <div className="flex gap-4">
              <a href="https://calendly.com/yourlink" target="_blank" rel="noreferrer" className="flex-1">
                <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary hover:text-white neon-border-blue gap-2 h-12">
                  <Calendar className="w-4 h-4" />
                  Book Call
                </Button>
              </a>
              <a href="https://github.com/ramsinghyadav4472" target="_blank" rel="noreferrer" className="h-12 w-12 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="h-12 w-12 rounded-md bg-[#0A66C2]/10 border border-[#0A66C2]/30 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              {/* WhatsApp Icon */}
               <a href="https://wa.me/yournumber" target="_blank" rel="noreferrer" className="h-12 w-12 rounded-md bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: The Form */}
        <div className="lg:col-span-3">
          <div className="glass p-8 md:p-10 rounded-2xl border border-primary/20 bg-background/40 backdrop-blur-xl relative overflow-hidden h-full">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none"></div>

            <div className="relative z-10">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500 h-full">
                  <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6 neon-border-green" style={{boxShadow: '0 0 15px #22c55e, inset 0 0 10px #22c55e'}}>
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Transmission Successful!</h4>
                  <p className="text-muted-foreground mb-8 max-w-sm">Thank you for reaching out. I'll review your message and get back to you across the network as soon as possible.</p>
                  <Button 
                    onClick={() => setStatus("idle")}
                    variant="outline" 
                    className="border-primary/50 text-primary hover:bg-primary/10 neon-border-blue h-12 px-8"
                  >
                    Initialize New Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <Label htmlFor="name" className="text-white/80 group-focus-within:text-primary transition-colors">Name</Label>
                      <Input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="John Doe"
                        className="bg-black/50 border-white/10 focus-visible:ring-primary/50 focus-visible:border-primary text-white h-12"
                      />
                    </div>
                    <div className="space-y-2 group">
                      <Label htmlFor="email" className="text-white/80 group-focus-within:text-secondary transition-colors">Email</Label>
                      <Input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        placeholder="john@example.com"
                        className="bg-black/50 border-white/10 focus-visible:ring-secondary/50 focus-visible:border-secondary text-white h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="subject" className="text-white/80 group-focus-within:text-accent transition-colors">Subject / Objective</Label>
                    <Input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      required
                      placeholder="Cloud Architecture Consultation"
                      className="bg-black/50 border-white/10 focus-visible:ring-accent/50 focus-visible:border-accent text-white h-12"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="message" className="text-white/80 group-focus-within:text-primary transition-colors">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      placeholder="Describe your requirements or just say hello..."
                      className="bg-black/50 border-white/10 focus-visible:ring-primary/50 focus-visible:border-primary text-white min-h-[150px] resize-y"
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-4 rounded bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
                      Failed to transmit message. Please try again later or interface via email directly.
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    disabled={status === "submitting"}
                    className={`w-full h-14 text-lg font-medium transition-all mt-4 ${
                      status === "submitting" ? "bg-primary/50 cursor-not-allowed" : "bg-primary hover:bg-primary/90 neon-border-blue"
                    } text-white`}
                  >
                    {status === "submitting" ? (
                      <div className="flex items-center gap-3">
                        <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full"></span>
                        Transmitting...
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <Send className="w-5 h-5" />
                        Send Transmission
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
