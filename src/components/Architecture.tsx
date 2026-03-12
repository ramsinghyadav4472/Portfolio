"use client";

import { motion } from "framer-motion";
import { Server, Database, Cloud, Network, Shield, Workflow, Lock, ArrowDown, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ArchitectureNode = ({ icon: Icon, title, desc, delay, colorClass }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={`glass p-4 rounded-xl border flex flex-col items-center justify-center text-center relative z-10 w-full sm:w-48 ${colorClass}`}
  >
    <div className="p-3 rounded-full bg-background/50 mb-3 neon-border-blue relative">
      <Icon className="w-6 h-6" />
      <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
    </div>
    <h4 className="font-bold text-sm text-foreground">{title}</h4>
    <p className="text-[10px] text-muted-foreground mt-1">{desc}</p>
  </motion.div>
);

const LineConnector = ({ delay, vertical = false, height = "h-8" }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay }}
    viewport={{ once: true }}
    className={`flex items-center justify-center ${vertical ? "flex-col" : "w-16 sm:w-24"}`}
  >
    {vertical ? (
      <>
        <div className={`w-[2px] ${height} bg-gradient-to-b from-primary/50 to-primary relative overflow-hidden`}>
          <motion.div
            className="absolute top-0 left-0 w-full h-1/3 bg-primary"
            animate={{ y: ["-100%", "300%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <ArrowDown className="w-4 h-4 text-primary -mt-1" />
      </>
    ) : (
      <>
        <div className="h-[2px] w-full bg-gradient-to-r from-primary/50 to-primary relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full w-1/3 bg-primary"
            animate={{ x: ["-100%", "300%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </>
    )}
  </motion.div>
);

export default function Architecture() {
  return (
    <div className="w-full relative py-10">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="flex flex-col items-center justify-center space-y-4 max-w-4xl mx-auto">
        
        {/* Tier 1: Client / CDN */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <ArchitectureNode 
            icon={Network} 
            title="User Traffic" 
            desc="Global Edge Network" 
            delay={0.1} 
            colorClass="border-blue-500/30 hover:border-blue-500/80 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
          />
          <div className="hidden sm:flex"><LineConnector delay={0.3} /></div>
          <div className="sm:hidden"><LineConnector delay={0.3} vertical /></div>
          
          <ArchitectureNode 
            icon={Cloud} 
            title="CloudFront / CDN" 
            desc="Edge Caching & WAF" 
            delay={0.2} 
            colorClass="border-purple-500/30 hover:border-purple-500/80 shadow-[0_0_15px_rgba(168,85,247,0.1)]"
          />
        </div>

        <LineConnector delay={0.4} vertical />

        {/* Tier 2: Compute / API */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full relative">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute left-0 sm:-left-32 top-1/2 -translate-y-1/2 hidden md:block"
          >
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/50 py-1 px-3">
              <Shield className="w-3 h-3 justify-center mr-2 inline" /> Auth & Validation
            </Badge>
          </motion.div>

          <ArchitectureNode 
            icon={Workflow} 
            title="API Gateway" 
            desc="Load Balancing & Routing" 
            delay={0.5} 
            colorClass="border-primary/30 hover:border-primary/80 shadow-[0_0_15px_var(--color-primary)]"
          />
          <div className="hidden sm:flex"><LineConnector delay={0.6} /></div>
          <div className="sm:hidden"><LineConnector delay={0.6} vertical /></div>
          
          <ArchitectureNode 
            icon={Server} 
            title="EKS / Serverless" 
            desc="Next.js App & Microservices" 
            delay={0.7} 
            colorClass="border-green-500/30 hover:border-green-500/80 shadow-[0_0_15px_rgba(34,197,94,0.1)] text-green-400 font-bold"
          />
        </div>

        <div className="flex gap-16 md:gap-32">
          <LineConnector delay={0.8} vertical height="h-12" />
          <LineConnector delay={0.8} vertical height="h-12" />
        </div>

        {/* Tier 3: Data / Storage */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 w-full">
          <ArchitectureNode 
            icon={Database} 
            title="PostgreSQL (RDS)" 
            desc="Primary Relational Data" 
            delay={0.9} 
            colorClass="border-blue-500/30 hover:border-blue-500/80 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
          />
          <ArchitectureNode 
            icon={Activity} 
            title="Redis Cache" 
            desc="Session & Live Data" 
            delay={1.0} 
            colorClass="border-red-500/30 hover:border-red-500/80 shadow-[0_0_15px_rgba(239,68,68,0.1)]"
          />
        </div>

      </div>
    </div>
  );
}
