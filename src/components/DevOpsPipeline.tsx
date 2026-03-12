"use client";

import { motion } from "framer-motion";
import { GitBranch, Github, Box, Server, Monitor, ArrowRight, Activity, CloudFog } from "lucide-react";

const PipelineStage = ({ step, icon: Icon, title, desc, delay, isActive = false }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="flex items-start gap-4"
  >
    {/* Node and Line */}
    <div className="flex flex-col items-center relative h-full">
      <motion.div 
        className={`w-12 h-12 rounded-full flex items-center justify-center border-2 z-10 
          ${isActive ? 'bg-primary/20 border-primary shadow-[0_0_15px_var(--color-primary)]' : 'bg-background border-muted-foreground/30'}`}
        whileHover={{ scale: 1.1 }}
      >
        <Icon className={`w-5 h-5 ${isActive ? 'text-primary neon-text-blue' : 'text-muted-foreground'}`} />
      </motion.div>
      
      {/* Connecting Line */}
      {step < 5 && (
        <div className="w-[2px] h-20 bg-muted-foreground/20 mt-2 relative overflow-hidden">
           <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: delay + 0.2 }}
          />
        </div>
      )}
    </div>

    {/* Content */}
    <div className={`glass p-4 rounded-xl border flex-1 mb-8 hover:bg-white/5 transition-colors ${isActive ? 'border-primary/50' : 'border-white/10'}`}>
      <div className="flex justify-between items-start mb-2">
        <h4 className={`font-bold ${isActive ? 'text-white' : 'text-white/80'}`}>{title}</h4>
        <span className="text-[10px] font-mono bg-primary/20 text-primary px-2 py-1 rounded">Stage 0{step}</span>
      </div>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  </motion.div>
);

export default function DevOpsPipeline() {
  const steps = [
    { step: 1, icon: GitBranch, title: "Code Commit", desc: "Developer pushes code to GitHub repository.", isActive: true },
    { step: 2, icon: Github, title: "GitHub Actions CI", desc: "Triggers automated testing, linting, and security scans.", isActive: true },
    { step: 3, icon: Box, title: "Docker Build", desc: "Builds production container image and pushes to AWS ECR.", isActive: true },
    { step: 4, icon: CloudFog, title: "AWS EKS Deployment", desc: "Helm charts update Kubernetes cluster with rolling deployment.", isActive: true },
    { step: 5, icon: Monitor, title: "Prometheus Monitoring", desc: "Live service health tracking and Grafana dashboard alerts.", isActive: true },
  ];

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="relative">
        <div className="absolute top-0 left-6 w-[2px] h-full bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/0 -z-10 hidden sm:block"></div>
        
        {steps.map((stage, index) => (
          <PipelineStage 
            key={stage.step}
            step={stage.step}
            icon={stage.icon}
            title={stage.title}
            desc={stage.desc}
            delay={index * 0.2}
            isActive={stage.isActive}
          />
        ))}

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="ml-16 mt-4 p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-3 text-green-400 font-mono text-sm"
        >
          <Activity className="w-5 h-5 animate-pulse" />
          <span>Pipeline Status: ALL SYSTEMS OPERATIONAL</span>
        </motion.div>
      </div>
    </div>
  );
}
