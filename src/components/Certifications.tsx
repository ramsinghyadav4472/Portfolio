import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ExternalLink, Calendar, Hash, ShieldCheck } from "lucide-react";

type Certification = {
  title: string;
  provider: string;
  issued: string;
  expires?: string;
  id?: string;
  badgeLevel: string;
  skills: string;
  color: string;
  href?: string;
};

const certs: Certification[] = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional",
    provider: "Oracle",
    issued: "Sep 23, 2025",
    expires: "Sep 23, 2027",
    id: "102476274OCI2025MCAOCP",
    badgeLevel: "Professional",
    skills: "Multi-Cloud Architecture",
    color: "var(--color-primary)",
    href: "/assets/certs/Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional.pdf",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Architect Associate",
    provider: "Oracle",
    issued: "Oct 22, 2025",
    expires: "Oct 22, 2027",
    id: "102476274OCI25CAA",
    badgeLevel: "Associate",
    skills: "OCI Architecture Design",
    color: "var(--color-primary)",
    href: "/assets/certs/Oracle Cloud Infrastructure 2025 Certified Architect Associate.pdf",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    provider: "Oracle",
    issued: "Aug 30, 2025",
    expires: "Aug 30, 2027",
    id: "102476274OCI25FNDCFA",
    badgeLevel: "Foundations",
    skills: "OCI Core Services",
    color: "var(--color-primary)",
    href: "/assets/certs/Oracle Cloud Infrastructure 2025 Foundations Associate.pdf",
  },
  {
    title: "Master Generative AI & GenAI Tools",
    provider: "Infosys Springboard",
    issued: "Aug 18, 2025",
    badgeLevel: "Specialization",
    skills: "ChatGPT, GenAI Tools",
    color: "var(--color-secondary)",
    href: "/assets/certs/mastergenai&genaitoolinfosys.pdf",
  },
  {
    title: "NGO Internship - Donate Organ, Donate Life",
    provider: "Shine India Foundation",
    issued: "Jun 15, 2024",
    id: "2024010650LPU",
    badgeLevel: "Internship",
    skills: "Social Impact, Project Delivery",
    color: "var(--color-accent)",
    href: "/assets/certs/ngo certificate internship.pdf",
  },
  {
    title: "AWS Academy Cloud Foundation",
    provider: "AWS Academy",
    issued: "Jun 2025",
    badgeLevel: "Completion",
    skills: "Cloud Practitioner Essentials",
    color: "var(--color-secondary)",
    href: "/assets/certs/aws_badge.pdf", // Assuming standard naming or user will provide
  },
  {
    title: "Privacy and Security in Online Social Media",
    provider: "NPTEL",
    issued: "Oct 2025",
    badgeLevel: "Completion",
    skills: "Social Media Security",
    color: "var(--color-accent)",
    href: "/assets/certs/nptel_cert.pdf",
  },
];

export default function Certifications() {
  return (
    <div className="w-full px-12 md:px-0">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4 pb-12 pt-4">
          {certs.map((cert, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Card className="h-full glass border-white/10 relative overflow-hidden flex flex-col transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-background/60">
                  <div 
                    className="absolute top-0 left-0 w-full h-1" 
                    style={{ backgroundColor: cert.color }} 
                  />
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 neon-text-blue">
                            {cert.badgeLevel}
                        </Badge>
                        <ShieldCheck className="text-secondary opacity-70" size={24} />
                    </div>
                    <CardTitle className="text-xl text-white font-bold leading-tight group-hover:text-primary transition-colors">
                        {cert.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground font-mono text-xs mt-2 uppercase tracking-wider">
                        Issued by: {cert.provider}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-3 mt-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-2 h-4 w-4 text-accent" />
                            <span>Issued: {cert.issued} {cert.expires && ` • Expires: ${cert.expires}`}</span>
                        </div>
                        {cert.id && (
                            <div className="flex items-center text-sm text-muted-foreground">
                                <Hash className="mr-2 h-4 w-4 text-secondary" />
                                <span className="font-mono text-xs">{cert.id}</span>
                            </div>
                        )}
                        <div className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span className="text-white/80">{cert.skills}</span>
                        </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 border-t border-white/5">
                    {cert.href ? (
                      <a href={cert.href} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-primary hover:text-white transition-colors gap-2 font-medium w-full group/btn">
                          <span>Verify Credential</span>
                          <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </a>
                    ) : (
                      <span className="flex items-center text-sm text-muted-foreground gap-2 font-medium w-full">
                          <span>Credential Available Soon</span>
                      </span>
                    )}
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
            <CarouselPrevious className="bg-background/80 border-white/20 text-white hover:bg-primary hover:text-primary-foreground -left-12 neon-border-blue" />
            <CarouselNext className="bg-background/80 border-white/20 text-white hover:bg-primary hover:text-primary-foreground -right-12 neon-border-blue" />
        </div>
      </Carousel>
    </div>
  );
}
