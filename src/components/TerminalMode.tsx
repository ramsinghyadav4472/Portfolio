"use client";

import { useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Maximize2, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TerminalMode({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key="welcome">Welcome to the Portfolio Terminal.</TerminalOutput>,
    <TerminalOutput key="auth">Authenticating as GUEST...</TerminalOutput>,
    <TerminalOutput key="access">Access Granted.</TerminalOutput>,
    <TerminalOutput key="help-prompt">Type "help" to see available commands.</TerminalOutput>,
  ]);

  const [isMaximized, setIsMaximized] = useState(false);

  const handleInput = (terminalInput: string) => {
    const input = terminalInput.trim().toLowerCase();
    const newLines = [...terminalLineData, <TerminalOutput key={`in-${Date.now()}`}>$ {terminalInput}</TerminalOutput>];

    switch (input) {
      case "help":
        newLines.push(
          <TerminalOutput key={`out-${Date.now()}`}>
            <br />
            Available Commands:<br />
            <span style={{ color: "var(--color-primary)" }}>about</span> - Learn about the developer<br />
            <span style={{ color: "var(--color-primary)" }}>projects</span> - List current projects<br />
            <span style={{ color: "var(--color-primary)" }}>skills</span> - View technical stack<br />
            <span style={{ color: "var(--color-primary)" }}>clear</span> - Clear terminal output<br />
            <span style={{ color: "var(--color-primary)" }}>exit</span> - Close terminal<br />
            <br />
          </TerminalOutput>
        );
        break;
      case "about":
        newLines.push(
          <TerminalOutput key={`out-${Date.now()}`}>
            <br />
            Name: Ram Singh Yadav<br />
            Location: Phagwara, Punjab<br />
            Role: Cloud & DevOps Engineer<br />
            Status: Available for Internships / Full-Time<br />
            <br />
          </TerminalOutput>
        );
        break;
      case "projects":
        newLines.push(
          <TerminalOutput key={`out-${Date.now()}`}>
            <br />
            Fetching DevOps Projects...<br />
            [OK] RentKart (AWS + Terraform)<br />
            [OK] CrowdSense (Kubernetes)<br />
            [OK] Student Grievance Portal (Next.js + GCP)<br />
            [OK] Serverless Blog Engine (AWS Lambda)<br />
            <br />
          </TerminalOutput>
        );
        break;
      case "skills":
        newLines.push(
          <TerminalOutput key={`out-${Date.now()}`}>
            <br />
            Loading Systems Matrix...<br />
            <span style={{ color: "#3b82f6" }}>Cloud</span>: AWS, OCI, GCP<br />
            <span style={{ color: "#a855f7" }}>DevOps</span>: Docker, Kubernetes, Terraform, GitHub Actions<br />
            <span style={{ color: "#22c55e" }}>Languages</span>: C++, Python, JavaScript, TypeScript<br />
            <span style={{ color: "#eab308" }}>Web</span>: React, Next.js, TailwindCSS<br />
            <br />
          </TerminalOutput>
        );
        break;
      case "clear":
        setTerminalLineData([]);
        return;
      case "exit":
        onClose();
        return;
      case "sudo":
        newLines.push(
          <TerminalOutput key={`out-${Date.now()}`}>
            <span style={{ color: "red" }}>ERROR: Permission denied. This incident will be reported.</span>
          </TerminalOutput>
        );
        break;
      default:
        if (input !== "") {
          newLines.push(
            <TerminalOutput key={`out-${Date.now()}`}>
              Command not recognized: {input}. Type "help" for a list of commands.
            </TerminalOutput>
          );
        }
    }

    setTerminalLineData(newLines);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className={`fixed bottom-4 right-4 z-50 flex flex-col ${
            isMaximized ? "inset-4 w-auto h-auto" : "w-[90vw] md:w-[600px] h-[400px]"
          }`}
        >
          {/* Terminal Window Chrome */}
          <div className="bg-[#1a1b26] rounded-t-lg border-t border-l border-r border-white/10 p-2 flex items-center justify-between">
            <div className="flex items-center gap-2 px-2">
              <TerminalIcon className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono text-white/70">root@portfolio:~</span>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setIsMaximized(false)} className="p-1 hover:bg-white/10 rounded">
                <Minus className="w-3 h-3 text-white/50" />
              </button>
              <button autoFocus={false} onClick={() => setIsMaximized(!isMaximized)} className="p-1 hover:bg-white/10 rounded">
                <Maximize2 className="w-3 h-3 text-white/50" />
              </button>
              <button onClick={onClose} className="p-1 hover:bg-red-500/20 rounded group">
                <X className="w-3 h-3 text-white/50 group-hover:text-red-500" />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 bg-[#252a33] rounded-b-lg border-b border-l border-r border-white/10 overflow-hidden terminal-container neon-border-blue" style={{boxShadow: '0 0 20px rgba(0,0,0,0.5)'}}>
            <Terminal
              name="Portfolio Terminal"
              colorMode={ColorMode.Dark}
              onInput={handleInput}
            >
              {terminalLineData}
            </Terminal>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
