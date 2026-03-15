import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Award, Download, Building2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const timelineEvents = [
  {
    year: "2023 - 2027",
    title: "Bachelor of Technology",
    subtitle: "Lovely Professional University",
    type: "education",
    icon: <GraduationCap className="w-5 h-5" />,
    details: [
      "Specialization: Computer Science & Engineering",
      "Focusing on Cloud Computing and Enterprise DevOps",
      "Expected Graduation: 2027"
    ],
    color: "var(--color-primary)"
  },
  {
    year: "2025",
    title: "OCI Multicloud Architect Professional",
    subtitle: "Oracle Cloud Infrastructure",
    type: "certification",
    icon: <Award className="w-5 h-5" />,
    details: [
      "Certified Multicloud Architect Professional",
      "Expertise in OCI, AWS, and Azure integration"
    ],
    color: "var(--color-secondary)"
  },
  {
    year: "2025",
    title: "OCI Architect Associate",
    subtitle: "Oracle Cloud Infrastructure",
    type: "certification",
    icon: <ShieldCheck className="w-5 h-5" />,
    details: [
      "Certified Architect Associate",
      "Designing resilient cloud infrastructure"
    ],
    color: "var(--color-secondary)"
  },
  {
    year: "2025",
    title: "AWS Academy Cloud Foundation",
    subtitle: "Amazon Web Services",
    type: "certification",
    icon: <Award className="w-5 h-5" />,
    details: [
      "Cloud Practitioner Essentials",
      "Foundational knowledge of AWS cloud services"
    ],
    color: "var(--color-secondary)"
  },
  {
    year: "2023",
    title: "12th Grade (Intermediate)",
    subtitle: "Government Inter College, Prayagraj UP",
    type: "education",
    icon: <Building2 className="w-5 h-5" />,
    details: [
      "Percentage: 70%",
      "Completed secondary education with focused studies in core subjects."
    ],
    color: "var(--color-accent)"
  },
  {
    year: "2021",
    title: "10th Grade (High School)",
    subtitle: "St. Xaviers School, Sultanpur, UP",
    type: "education",
    icon: <GraduationCap className="w-5 h-5" />,
    details: [
      "Percentage: 79%",
      "Solid foundational academic record from a reputable institution."
    ],
    color: "var(--color-accent)"
  }
];

export default function ResumeEducation() {
  return (
    <div className="flex flex-col space-y-12 max-w-4xl mx-auto">
      <div className="flex justify-between items-end mb-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white tracking-tight">Interactive Timeline</h3>
          <p className="text-muted-foreground font-mono text-sm">Experience • Education • Certifications</p>
        </div>
        <a href="/assets/resume/RSYADAVSPECRES.pdf" target="_blank" rel="noopener noreferrer" download>
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 neon-border-blue gap-2 h-10">
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </a>
      </div>

      <div className="relative border-l border-white/10 ml-6 md:ml-0 space-y-12">
        {timelineEvents.map((event, i) => (
          <div key={i} className="relative pl-8 md:pl-0 group">
            {/* Timeline node */}
            <div
              className="absolute left-[-5px] md:left-1/2 md:-translate-x-[5px] top-1 w-2.5 h-2.5 rounded-full ring-4 ring-background transition-all duration-300 group-hover:scale-150 z-10"
              style={{ backgroundColor: event.color, boxShadow: `0 0 10px ${event.color}` }}
            />

            {/* Desktop Layout (Alternating sides) */}
            <div className={`hidden md:flex items-center w-full ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
              <div className={`w-[45%] ${i % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                <div className={`flex flex-col ${i % 2 === 0 ? "items-end" : "items-start"}`}>
                  <Badge variant="outline" className="mb-2 bg-background/50 backdrop-blur-sm" style={{ borderColor: `${event.color}40`, color: event.color }}>
                    {event.year}
                  </Badge>
                  <Card className="glass border-white/5 bg-background/40 hover:bg-background/60 transition-all duration-300 w-full text-left">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-md bg-white/5 text-white/80">
                          {event.icon}
                        </div>
                        <h4 className="font-bold text-white text-lg leading-tight">{event.title}</h4>
                      </div>
                      <p className="text-muted-foreground font-mono text-xs mb-3">{event.subtitle}</p>
                      <ul className="space-y-1">
                        {event.details.map((detail, j) => (
                          <li key={j} className="text-sm text-white/70 flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary/50 mt-1.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Mobile Layout (Left-aligned) */}
            <div className="md:hidden">
              <div className="mb-2 flex items-center gap-4">
                <Badge variant="outline" className="bg-background/50 backdrop-blur-sm" style={{ borderColor: `${event.color}40`, color: event.color }}>
                  {event.year}
                </Badge>
                <h4 className="font-bold text-white text-md leading-tight">{event.title}</h4>
              </div>
              <Card className="glass border-white/5 bg-background/40 w-full">
                <CardContent className="p-4">
                  <p className="text-muted-foreground font-mono text-xs mb-3">{event.subtitle}</p>
                  <ul className="space-y-1">
                    {event.details.map((detail, j) => (
                      <li key={j} className="text-sm text-white/70 flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary/50 mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
