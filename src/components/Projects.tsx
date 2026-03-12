import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Server, Activity, ArrowUpRight, Cpu } from "lucide-react";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  devops: string;
  metrics: string;
  repoUrl?: string;
  liveUrl?: string;
  cloud: "AWS" | "OCI" | "Multi-Cloud" | "Enterprise";
};

const projects: Project[] = [
  {
    title: "Kubernetes-Based Voting Application",
    description: "Containerized microservices-based voting app on a 3-node K8s cluster.",
    techStack: ["Kubernetes (Kind)", "Docker", "Helm", "Redis"],
    features: ["3-node K8s cluster", "GitOps with ArgoCD", "Prometheus & Grafana"],
    devops: "GitOps-based CD with auto-sync and self-healing",
    metrics: "50% reduction in manual intervention",
    repoUrl: "https://github.com/ramsinghyadav4472/Voting-Application-",
    cloud: "OCI",
  },
  {
    title: "CrowdSense - AI Monitoring",
    description: "Real-time crowd monitoring platform with interactive maps.",
    techStack: ["React (Vite)", "Spring Boot", "Java", "MongoDB"],
    features: ["Geospatial querying", "Event-driven pipelines", "45% faster rendering"],
    devops: "Dockerized deployment on Render/Vercel",
    metrics: "25% increase in user engagement",
    repoUrl: "https://github.com/ramsinghyadav4472/CrowdSense",
    liveUrl: "https://crowd-sense-one.vercel.app/dashboard",
    cloud: "OCI",
  },
  {
    title: "RentKart - Rental Platform",
    description: "Full-stack rental marketplace with role-based access control.",
    techStack: ["Node.js", "TypeScript", "Docker", "JWT", "Razorpay"],
    features: ["JWT-based RBAC", "REST API integration", "Geolocation search"],
    devops: "Dockerized for consistent cross-env deployment",
    metrics: "40% improved rental efficiency",
    repoUrl: "https://github.com/ramsinghyadav4472/RentKart",
    cloud: "AWS",
  },
  {
    title: "Containerized Flask Web App",
    description: "Elevated Flask application with clean backend architecture.",
    techStack: ["Flask", "Python", "Docker", "Kubernetes", "Nginx"],
    features: ["48% better scalability", "automated CI/CD integration", "Nginx reverse proxy"],
    devops: "Deployed using Docker Compose & Kubernetes",
    metrics: "35% reduction in deployment time",
    repoUrl: "https://github.com/ramsinghyadav4472/Student-Grievance-Portal", // Resume links this to portal tech
    cloud: "Multi-Cloud",
  },
  {
    title: "Student Grievance Portal",
    description: "Mobile grievance resolution platform (Cipher School project).",
    techStack: ["Flutter", "Dart", "Firebase", "Android Studio"],
    features: ["Flutter/Firebase auth", "Role-based dashboards", "Real-time data handling"],
    devops: "Mobile App Development Trainee Project",
    metrics: "20% improvement in workflow efficiency",
    liveUrl: "https://student-grievance-portal-three.vercel.app/#/login",
    cloud: "Enterprise",
  },
  {
    title: "YouTube Clone",
    description: "Scalable video streaming and processing platform.",
    techStack: ["React", "FastAPI", "PostgreSQL", "Redis"],
    features: ["Video streaming (HLS)", "Recommendations ML model", "CloudFront CDN"],
    devops: "Lambda@Edge video processing",
    metrics: "10K video capacity, 2s seek time",
    repoUrl: "https://github.com/ramsinghyadav4472/Youtube-Clone",
    liveUrl: "https://youtube-clone-livid-sigma.vercel.app/",
    cloud: "AWS",
  },
  {
    title: "Hospital Management System",
    description: "Comprehensive system for managing hospital operations.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    features: ["Patient Management", "Doctor Dashboard", "Appointments"],
    devops: "Deployed on Vercel Edge",
    metrics: "Streamlined healthcare ops",
    repoUrl: "https://github.com/ramsinghyadav4472/Hospital-Management-System",
    liveUrl: "https://hospital-management-system-sandy-kappa.vercel.app/",
    cloud: "Multi-Cloud",
  },
  {
    title: "Live Chat Application",
    description: "Instant messaging application with real-time bidirectional communication.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    features: ["Real-time messaging", "Online status presence", "Private rooms"],
    devops: "Deployed on Render Cloud",
    metrics: "Low latency WebSockets",
    repoUrl: "https://github.com/ramsinghyadav4472/ChatApp",
    liveUrl: "https://chatapp-rooh.onrender.com/",
    cloud: "AWS",
  },
  {
    title: "Multi-Cloud CI/CD Orchestrator",
    description: "Automated pipeline management across cloud providers.",
    techStack: ["GitHub Actions", "Terraform", "ArgoCD", "OPA"],
    features: ["Cross-cloud deployments", "Zero-downtime blue-green", "Policy-as-code"],
    devops: "AWS/Azure/OCI integration",
    metrics: "Automated provisioning",
    cloud: "Multi-Cloud",
  },
  {
    title: "Production Observability Stack",
    description: "Complete monitoring and logging solution for production clusters.",
    techStack: ["Loki", "Grafana", "Prometheus", "OpenTelemetry"],
    features: ["SLO dashboards", "Custom traces", "OCI integration"],
    devops: "Deployed on EKS",
    metrics: "Real-time analytics",
    cloud: "AWS",
  },
];

const cloudColors = {
  AWS: "text-orange-500 border-orange-500/20 bg-orange-500/10",
  OCI: "text-red-500 border-red-500/20 bg-red-500/10",
  "Multi-Cloud": "text-purple-500 border-purple-500/20 bg-purple-500/10",
  Enterprise: "text-blue-500 border-blue-500/20 bg-blue-500/10",
};

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Card key={index} className="glass border-white/10 relative overflow-hidden flex flex-col group hover:border-primary/50 transition-all duration-300">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 pointer-events-none">
            <Server className={`w-32 h-32 ${cloudColors[project.cloud].split(' ')[0]}`} />
          </div>
          
          <CardHeader className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <Badge variant="outline" className={`font-mono text-[10px] uppercase tracking-wider ${cloudColors[project.cloud]}`}>
                {project.cloud}
              </Badge>
              <div className="flex gap-2">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            <CardTitle className="text-2xl text-white font-bold group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
            <p className="text-muted-foreground text-sm mt-2 font-light">
              {project.description}
            </p>
          </CardHeader>
          
          <CardContent className="relative z-10 flex-grow">
            <div className="space-y-4">
              <div>
                <p className="text-xs text-white/50 mb-2 uppercase tracking-widest font-mono">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-white/5 hover:bg-white/10 text-white/80 font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu size={14} className="text-secondary" />
                  <span className="text-xs font-mono text-secondary">DevOps & Architecture</span>
                </div>
                <p className="text-sm text-white/70 font-light">{project.devops}</p>
              </div>
              
              <ul className="space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <ArrowUpRight size={12} className="text-primary/50" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          
          <CardFooter className="relative z-10 pt-4 border-t border-white/10 mt-auto">
            <div className="flex items-center gap-2 w-full bg-primary/10 p-3 rounded-md border border-primary/20">
              <Activity className="text-accent animate-pulse" size={16} />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-accent/70 font-mono tracking-wider">Metrics / SLA</span>
                <span className="text-sm text-white font-medium">{project.metrics}</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
