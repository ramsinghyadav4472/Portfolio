"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X, CloudCog } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Journey", href: "#journey" }, // For Resume/Education
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Infrastructure", href: "#infrastructure" },
    { name: "Skills", href: "#skills" },
    { name: "Stats", href: "#stats" }, // For CP/Achievements
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 neon-border-blue text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_var(--color-primary)]">
            <CloudCog size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter text-white">
              Ram Singh Yadav
            </span>
            <span className="text-xs font-mono text-primary neon-text-blue tracking-widest uppercase">
              Cloud / DevOps
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:neon-text-blue"
            >
              <span className="text-xs text-primary mr-1">0{i + 1}.</span>
              {link.name}
            </a>
          ))}
          
          <a
            href="https://github.com/ramsinghyadav4472"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md bg-primary/10 px-4 py-2 text-sm font-medium text-primary neon-border-blue transition-all hover:bg-primary hover:text-white"
          >
            <Terminal size={16} />
            <span>Terminal</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-lg font-medium text-muted-foreground hover:text-primary"
                >
                  <span className="text-xs text-primary mr-2">0{i + 1}.</span>
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
