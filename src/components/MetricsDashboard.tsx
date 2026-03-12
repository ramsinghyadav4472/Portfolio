"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Server, Activity, CheckCircle, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

// Generate initial fake data for charts
const generateData = () => {
  return Array.from({ length: 20 }).map((_, i) => ({
    time: i,
    cpu: Math.floor(Math.random() * 30) + 20, // 20-50%
    ram: Math.floor(Math.random() * 20) + 40, // 40-60%
  }));
};

export default function MetricsDashboard() {
  const [data, setData] = useState(generateData());
  const [activePods, setActivePods] = useState(24);
  const [reqPerSec, setReqPerSec] = useState(142);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData((currentData) => {
        const newData = [...currentData.slice(1)];
        newData.push({
          time: currentData[currentData.length - 1].time + 1,
          cpu: Math.floor(Math.random() * 40) + 15,
          ram: Math.floor(Math.random() * 15) + 45,
        });
        return newData;
      });

      // Slight fluctuation in stats
      setActivePods((prev) => prev + (Math.random() > 0.8 ? (Math.random() > 0.5 ? 1 : -1) : 0));
      setReqPerSec(Math.floor(Math.random() * 50) + 120);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full space-y-6">
      
      {/* Top Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
          <Card className="glass border-green-500/20 bg-background/40">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 rounded-full bg-green-500/10 text-green-500">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-mono">Cluster Status</p>
                <p className="text-lg font-bold text-green-400 neon-text-green">Healthy</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
          <Card className="glass border-blue-500/20 bg-background/40">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
                <Server className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-mono">Active Pods</p>
                <p className="text-lg font-bold text-white transition-all">{activePods}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
          <Card className="glass border-purple-500/20 bg-background/40">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 rounded-full bg-purple-500/10 text-purple-500">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-mono">Req / Sec</p>
                <p className="text-lg font-bold text-white transition-all">{reqPerSec}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
          <Card className="glass border-accent/20 bg-background/40">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 rounded-full bg-accent/10 text-accent">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-mono">Build Success</p>
                <p className="text-lg font-bold text-white">99.9%</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Main Chart Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5 }}
      >
        <Card className="glass border-white/10 bg-background/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-md font-mono text-muted-foreground flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              Live Resource Utilization
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[250px] w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorRam" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" hide />
                <YAxis stroke="#4b5563" fontSize={10} tickFormatter={(value) => `${value}%`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', borderColor: '#333', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="cpu" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorCpu)" isAnimationActive={false} />
                <Area type="monotone" dataKey="ram" stroke="#a855f7" strokeWidth={2} fillOpacity={1} fill="url(#colorRam)" isAnimationActive={false} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
