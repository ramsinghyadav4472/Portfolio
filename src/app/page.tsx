"use client";

import Certifications from "@/components/Certifications";
import Hero3D from "@/components/Hero3D";
import Projects from "@/components/Projects";
import SkillsMatrix from "@/components/SkillsMatrix";
import ResumeEducation from "@/components/ResumeEducation";
import CompetitiveProgramming from "@/components/CompetitiveProgramming";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Architecture from "@/components/Architecture";
import DevOpsPipeline from "@/components/DevOpsPipeline";
import GithubStats from "@/components/GithubStats";
import MetricsDashboard from "@/components/MetricsDashboard";
import RecruiterPanel from "@/components/RecruiterPanel";
import TerminalMode from "@/components/TerminalMode";
import AIChatbot from "@/components/AIChatbot";
import { Button } from "@/components/ui/button";
import { Terminal, Download, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen relative flex items-center pt-20 overflow-hidden">
        <Hero3D />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl glass p-8 md:p-12 rounded-2xl border-l-[4px] border-l-primary backdrop-blur-xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
              Ram Singh <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Yadav</span>
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <p className="text-xl md:text-2xl text-accent neon-text-green font-mono">
                Enterprise Cloud & DevOps Engineer
              </p>
            </div>
            
            <p className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed max-w-2xl font-light">
              Architecting high-availability infrastructure, automated CI/CD pipelines, and robust Kubernetes deployments across multicloud environments. Specializing in OCI and AWS.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#infrastructure">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 neon-border-blue text-md h-12 px-8">
                  <Terminal className="mr-2 h-5 w-5" />
                  View Infrastructure
                </Button>
              </a>
              <a href="/assets/resume/RSYADAVSPECRES.pdf" target="_blank" rel="noopener noreferrer" download>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary neon-border-purple text-md h-12 px-8 w-full sm:w-auto">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resume & Education Section */}
      <section id="journey" className="min-h-screen py-24 relative overflow-hidden bg-background/50">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white border-b border-white/10 pb-4 inline-block">
            <span className="text-primary mr-4 neon-text-blue">01.</span>
            Journey & Education
          </h2>
          <ResumeEducation />
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white border-b border-white/10 pb-4 inline-block">
            <span className="text-primary mr-4 neon-text-blue">02.</span>
            Certifications
          </h2>
          <Certifications />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-24 bg-background/50 relative">
        <div className="absolute inset-0 bg-[url('/matrix-bg.png')] opacity-5 mix-blend-overlay pointer-events-none z-0"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white border-b border-white/10 pb-4 inline-block">
            <span className="text-primary mr-4 neon-text-blue">03.</span>
            Projects & Architecture
          </h2>
          <Projects />
        </div>
      </section>

      {/* Skills Matrix Section */}
      <section id="skills" className="min-h-screen py-24 relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary/5 blur-[150px] pointer-events-none z-0"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white border-b border-white/10 pb-4 inline-block">
            <span className="text-primary mr-4 neon-text-blue">04.</span>
            Skills Matrix
          </h2>
          <SkillsMatrix />
        </div>
      </section>

      {/* Cloud Infrastructure & DevOps Pipeline Section */}
      <section id="infrastructure" className="min-h-screen py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10 space-y-32">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white border-b border-white/10 pb-4 inline-block">
              <span className="text-primary mr-4 neon-text-blue">05.</span>
              System Architecture
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl text-lg">
              Example of a highly available, scalable architecture design I implemented for <span className="text-white font-medium">RentKart</span> using Vercel, AWS API Gateway, EKS, and RDS.
            </p>
            <Architecture />
          </div>

          <div>
             <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white border-b border-white/10 pb-4 inline-block">
                <span className="text-primary mr-4 neon-text-blue">06.</span>
                DevOps CI/CD Pipeline
             </h2>
             <p className="text-muted-foreground mb-12 max-w-2xl text-lg">
                Automated continuous integration and deployment flow utilized in <span className="text-white font-medium">CrowdSense</span> ensuring zero-downtime updates and health monitoring.
             </p>
             <DevOpsPipeline />
          </div>

        </div>
      </section>

      {/* Live Activity & Telemetry Section */}
      <section id="telemetry" className="min-h-screen py-24 bg-background/50 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 space-y-32">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white border-b border-white/10 pb-4 inline-block">
              <span className="text-primary mr-4 neon-text-blue">07.</span>
              Live GitHub Activity
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl text-lg">
              Continuous integration begins with continuous contribution. Here is my current open-source velocity tracked via GitHub GraphQL API.
            </p>
            <GithubStats />
          </div>

          <div>
             <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white border-b border-white/10 pb-4 inline-block">
                <span className="text-primary mr-4 neon-text-blue">08.</span>
                DevOps Telemetry
             </h2>
             <p className="text-muted-foreground mb-12 max-w-2xl text-lg">
                Real-time simulation of cluster health, active scaling pods, and resource utilization mimicking a production Prometheus monitoring stack.
             </p>
             <MetricsDashboard />
          </div>

        </div>
      </section>

      {/* Competitive Programming & Achievements */}
      <section id="stats" className="min-h-screen py-24 relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10 space-y-32">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white border-b border-white/10 pb-4 inline-block">
              <span className="text-primary mr-4 neon-text-blue">07.</span>
              Competitive Programming
            </h2>
            <CompetitiveProgramming />
          </div>

          <div>
             <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white border-b border-white/10 pb-4 inline-block">
                <span className="text-primary mr-4 neon-text-blue">08.</span>
                Leadership & Excellence
             </h2>
             <Achievements />
          </div>

        </div>
      </section>

      {/* Blog Teaser Section */}
      <section id="blog" className="min-h-[50vh] py-24 relative overflow-hidden bg-background/80">
        <div className="absolute inset-0 bg-[url('/matrix-bg.png')] opacity-5 mix-blend-overlay pointer-events-none z-0"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Engineering Log
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Deep dives into Cloud Architecture, Kubernetes patterns, and DevOps automation.
          </p>
          <Link href="/blog" className="inline-block">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 neon-border-blue text-lg group">
              Read the Blog <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white border-b border-white/10 pb-4 inline-block">
            <span className="text-primary mr-4 neon-text-blue">09.</span>
            Get In Touch
          </h2>
          <Contact />
        </div>
      </section>

      {/* Floating Global Components */}
      <RecruiterPanel />
      <TerminalMode isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
      <AIChatbot />
    </>
  );
}
