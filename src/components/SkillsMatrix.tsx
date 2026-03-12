import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Cloud, Cog, Code2, BrainCircuit, Activity, Globe } from "lucide-react";

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  color: string;
  skills: { name: string; level: number }[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "PROGRAMMING & SCRIPTING",
    icon: <Code2 className="w-6 h-6" />,
    color: "var(--color-primary)",
    skills: [
      { name: "C++", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Flutter", level: 82 },
      { name: "Java", level: 80 },
    ],
  },
  {
    name: "CLOUD PLATFORMS",
    icon: <Cloud className="w-6 h-6" />,
    color: "var(--color-secondary)",
    skills: [
      { name: "AWS", level: 92 },
      { name: "Azure", level: 85 },
      { name: "Oracle Cloud (OCI)", level: 95 },
      { name: "Google Cloud", level: 80 },
    ],
  },
  {
    name: "DEVOPS & CI/CD",
    icon: <Cog className="w-6 h-6" />,
    color: "var(--color-accent)",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "GitHub Action", level: 90 },
      { name: "Docker", level: 92 },
      { name: "Kubernetes", level: 88 },
      { name: "Jenkins", level: 80 },
      { name: "ArgoCD", level: 85 },
    ],
  },
  {
    name: "INFRASTRUCTURE AS CODE",
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "var(--color-primary)",
    skills: [
      { name: "Terraform", level: 90 },
      { name: "Ansible", level: 82 },
      { name: "AWS CloudFormation", level: 85 },
    ],
  },
  {
    name: "MONITORING & LOGGING",
    icon: <Activity className="w-6 h-6" />,
    color: "var(--color-secondary)",
    skills: [
      { name: "Prometheus", level: 88 },
      { name: "Grafana", level: 90 },
      { name: "AWS CloudWatch", level: 85 },
    ],
  },
  {
    name: "WEB TECHNOLOGIES",
    icon: <Globe className="w-6 h-6" />,
    color: "var(--color-accent)",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "React.js", level: 92 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Tailwind CSS", level: 92 },
      { name: "MongoDB", level: 86 },
    ],
  },
];

export default function SkillsMatrix() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {skillCategories.map((category, index) => (
        <div key={index} className="glass p-8 rounded-xl border border-white/5 relative group overflow-hidden bg-background/40">
          <div 
            className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-[80px] opacity-20 pointer-events-none transition-all duration-500 group-hover:opacity-40"
            style={{ backgroundColor: category.color }}
          />
          
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div 
              className="p-3 rounded-lg bg-background border neon-border-blue transition-colors"
              style={{ borderColor: `${category.color}40`, color: category.color }}
            >
              {category.icon}
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">{category.name}</h3>
          </div>
          
          <div className="space-y-6 relative z-10">
            {category.skills.map((skill, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-medium text-white/90">{skill.name}</span>
                  <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full relative"
                    style={{ 
                      width: `${skill.level}%`, 
                      backgroundColor: category.color,
                      boxShadow: `0 0 10px ${category.color}, 0 0 5px ${category.color} inset`
                    }}
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
