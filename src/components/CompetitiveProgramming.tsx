import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Code, TrendingUp, Cpu } from "lucide-react";

export default function CompetitiveProgramming() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <Card className="glass border-primary/20 bg-background/40 hover:bg-background/60 transition-all duration-300 group">
        <CardContent className="p-8 flex items-center justify-center">
          <div className="p-4 rounded-full bg-primary/10 text-primary w-20 h-20 flex items-center justify-center neon-border-blue group-hover:bg-primary group-hover:text-white transition-all">
            <Code className="w-10 h-10" />
          </div>
        </CardContent>
      </Card>

      <Card className="glass border-secondary/20 bg-background/40 hover:bg-background/60 transition-all duration-300 group">
        <CardContent className="p-8 flex items-center justify-center">
          <div className="p-4 rounded-full bg-secondary/10 text-secondary w-20 h-20 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all" style={{boxShadow: '0 0 10px var(--color-secondary), inset 0 0 10px var(--color-secondary)'}}>
            <TrendingUp className="w-10 h-10" />
          </div>
        </CardContent>
      </Card>

      <Card className="glass border-accent/20 bg-background/40 hover:bg-background/60 transition-all duration-300 group">
        <CardContent className="p-8 flex items-center justify-center">
          <div className="p-4 rounded-full bg-accent/10 text-accent w-20 h-20 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all" style={{boxShadow: '0 0 10px var(--color-accent), inset 0 0 10px var(--color-accent)'}}>
            <Cpu className="w-10 h-10" />
          </div>
        </CardContent>
      </Card>
      
      <Card className="glass border-white/10 bg-background/40 hover:bg-background/60 transition-all duration-300 group relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/matrix-bg.png')] opacity-10 mix-blend-overlay pointer-events-none z-0"></div>
        <CardContent className="p-8 flex items-center justify-center relative z-10">
          <div className="p-4 rounded-full bg-white/10 text-white w-20 h-20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all border border-white/20">
            <Trophy className="w-10 h-10" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
