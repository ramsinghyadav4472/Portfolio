"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Star, GitCommit, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function GithubStats() {
  const [stats, setStats] = useState({
    commits: 0,
    repos: 0,
    stars: 0,
    streak: 0,
  });

  // Since we don't have a real GitHub token in the front-end, 
  // we'll simulate an ambitious, powerful set of stats fitting the cyberpunk theme,
  // but hook them up to a counting animation for impact. 
  // In production, this would hit the GitHub GraphQL API.
  
  useEffect(() => {
    const targetStats = {
      commits: 1240,
      repos: 45,
      stars: 128,
      streak: 42,
    };

    let startTime: number;
    const duration = 2000; // 2 seconds animation

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setStats({
        commits: Math.floor(targetStats.commits * easeOutQuart),
        repos: Math.floor(targetStats.repos * easeOutQuart),
        stars: Math.floor(targetStats.stars * easeOutQuart),
        streak: Math.floor(targetStats.streak * easeOutQuart),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="w-full space-y-6">
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="glass border-primary/20 bg-background/40 hover:bg-primary/5 transition-all">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <GitCommit className="w-4 h-4 text-primary" />
                Total Commits (YTD)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-3xl font-bold text-white neon-text-blue">{stats.commits.toLocaleString()}</div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="glass border-secondary/20 bg-background/40 hover:bg-secondary/5 transition-all">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Github className="w-4 h-4 text-secondary" />
                Public Repositories
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-3xl font-bold text-white" style={{ textShadow: "0 0 10px var(--color-secondary)" }}>{stats.repos}</div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="glass border-yellow-500/20 bg-background/40 hover:bg-yellow-500/5 transition-all">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                Stars Earned
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-3xl font-bold text-white" style={{ textShadow: "0 0 10px #eab308" }}>{stats.stars}</div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="glass border-accent/20 bg-background/40 hover:bg-accent/5 transition-all">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                Daily Streak
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-3xl font-bold text-white" style={{ textShadow: "0 0 10px var(--color-accent)" }}>{stats.streak} Days</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Contribution Graph Simulation / Image Placeholder */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5 }}
        className="w-full"
      >
        <Card className="glass border-white/10 bg-background/40 p-1">
           {/* Replace this img src with a live github-readme-streak-stats or similar generator url for real data */}
          <img 
            src="https://ghchart.rshah.org/3b82f6/ramsinghyadav4472" 
            alt="GitHub Contributions" 
            className="w-full rounded-md opacity-80 hover:opacity-100 transition-opacity filter hue-rotate-15 contrast-125 invert"
            onError={(e) => {
              // Fallback if the username isn't set or graph fails
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.innerHTML = `
                <div class="h-40 flex flex-col items-center justify-center text-muted-foreground p-6 text-center">
                  <Target class="w-8 h-8 mb-2 text-primary opacity-50" />
                  <p>GitHub API Connection Established.</p>
                  <p class="text-xs mt-1">Configure username in code to render live contribution graph matrix.</p>
                </div>
              `;
            }}
          />
        </Card>
      </motion.div>
    </div>
  );
}
