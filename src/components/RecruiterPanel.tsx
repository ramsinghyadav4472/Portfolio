"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronLeft, X, FileText, Mail, Code, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RecruiterPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-1/2 right-0 -translate-y-1/2 z-50 flex items-center">
        {/* Floating Toggle Button - right side */}
        <motion.button
          initial={{ x: 100 }}
          animate={{ x: isOpen ? 100 : 0 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary/90 text-white p-3 rounded-l-xl shadow-[0_0_15px_var(--color-primary)] flex items-center gap-2 border border-r-0 border-white/20 transition-all group"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="font-bold text-sm tracking-widest hidden md:block group-hover:px-2 transition-all overflow-hidden whitespace-nowrap">RECRUITER MODE</span>
          <Briefcase className="w-5 h-5 pointer-events-none" />
        </motion.button>
      </div>

      {/* Slide-out Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55]"
            />

            {/* Panel Content - slides from right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[85vw] md:w-[400px] bg-[#0a0a0a]/95 backdrop-blur-xl border-l border-white/10 z-[60] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-primary/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg neon-border-blue">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg text-white">Recruiter Overview</h2>
                    <p className="text-xs text-primary font-mono">Quick Access Matrix</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X className="w-5 h-5 text-muted-foreground hover:text-white" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
                
                {/* Snapshot */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Candidate Snapshot</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass p-3 rounded-lg border-white/10">
                      <p className="text-xs text-muted-foreground mb-1">Role</p>
                      <p className="font-bold text-white text-sm">Cloud/DevOps Engineer</p>
                    </div>
                    <div className="glass p-3 rounded-lg border-white/10">
                      <p className="text-xs text-muted-foreground mb-1">Experience</p>
                      <p className="font-bold text-white text-sm">B.Tech (2022-26)</p>
                    </div>
                    <div className="glass p-3 rounded-lg border-white/10">
                      <p className="text-xs text-muted-foreground mb-1">Availability</p>
                      <p className="font-bold text-green-400 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Immediate
                      </p>
                    </div>
                    <div className="glass p-3 rounded-lg border-white/10">
                      <p className="text-xs text-muted-foreground mb-1">Location</p>
                      <p className="font-bold text-white text-sm">Remote / Punjab</p>
                    </div>
                  </div>
                </div>

                {/* Key Skills */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Top Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-mono px-2 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 flex items-center gap-1"><Cloud className="w-3 h-3"/> AWS & OCI</span>
                    <span className="text-xs font-mono px-2 py-1 bg-purple-500/20 text-purple-400 rounded border border-purple-500/30">Kubernetes</span>
                    <span className="text-xs font-mono px-2 py-1 bg-blue-400/20 text-blue-300 rounded border border-blue-400/30">Docker</span>
                    <span className="text-xs font-mono px-2 py-1 bg-green-500/20 text-green-400 rounded border border-green-500/30 flex items-center gap-1"><Code className="w-3 h-3"/> React/Next.js</span>
                    <span className="text-xs font-mono px-2 py-1 bg-red-500/20 text-red-400 rounded border border-red-500/30">Terraform</span>
                    <span className="text-xs font-mono px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded border border-yellow-500/30">Python/C++</span>
                  </div>
                </div>

                {/* Certifications Highlights */}
                <div className="space-y-4">
                   <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Top Certifications</h3>
                   <ul className="space-y-2 text-sm text-white/80 border-l-2 border-primary/50 pl-4">
                     <li>OCI Certified Multicloud Architect Pro</li>
                     <li>OCI Certified Architect Associate</li>
                     <li>Infosys Generative AI Certification</li>
                   </ul>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="p-6 border-t border-white/10 bg-black/50 space-y-3">
                <a href="/assets/resume/RSYADAVSPECRES.pdf" target="_blank" rel="noopener noreferrer" download className="block w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 neon-border-blue gap-2">
                    <FileText className="w-4 h-4" />
                    Download Resume PDF
                  </Button>
                </a>
                <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full">
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 h-12 gap-2">
                    <Mail className="w-4 h-4" />
                    Contact Candidate Directly
                  </Button>
                </a>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
