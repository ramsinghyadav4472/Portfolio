import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Medal, Star, Target, Users, Trophy } from "lucide-react";

const achievements = [
  {
    title: "GitHub Student Club",
    date: "2024 - Present",
    category: "Leadership",
    icon: <Users className="w-6 h-6" />,
    color: "var(--color-primary)",
    details: "Core member managing 200+ students in workshops and events.",
  }
];

export default function Achievements() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {achievements.map((item, i) => (
        <Card key={i} className="glass border-white/5 bg-background/40 hover:bg-white/5 transition-all duration-300 group flex flex-col md:flex-row overflow-hidden relative">
          <div 
             className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 group-hover:w-full opacity-10"
             style={{ backgroundColor: item.color }}
          ></div>
          <div className="p-6 md:pr-0 flex items-start justify-center md:items-center relative z-10">
            <div 
              className="p-4 rounded-xl bg-background border neon-border-blue transition-colors flex-shrink-0"
              style={{ borderColor: `${item.color}40`, color: item.color }}
            >
              {i === 0 ? <Medal className="w-6 h-6" /> : item.icon}
            </div>
          </div>
          <CardContent className="p-6 relative z-10 w-full flex flex-col justify-center">
            <div className="flex justify-between items-start mb-2">
               <Badge variant="outline" className="bg-background/80" style={{ borderColor: `${item.color}40`, color: item.color }}>
                 {item.category}
               </Badge>
               <span className="text-muted-foreground font-mono text-xs">{item.date}</span>
            </div>
            <h4 className="font-bold text-white text-lg leading-tight mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
            <p className="text-sm text-white/70 leading-relaxed font-light">{item.details}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
