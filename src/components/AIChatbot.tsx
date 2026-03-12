"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  role: "assistant" | "user";
  content: string;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm an AI assistant trained on Ram Singh Yadav's resume, projects, and skills. Ask me anything about his experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");

    // Simulate AI thinking and responding based on keywords
    setTimeout(() => {
      let response = "I don't have that specific information right now, but you can contact him directly via the contact form or LinkedIn!";
      
      const lowerInput = userMessage.toLowerCase();
      
      if (lowerInput.includes("experience") || lowerInput.includes("internship")) {
        response = "Ram completed an internship at Shine India NGO (Jan 2024 - Jun 2024) where he configured AWS Cloud architectures and handled CI/CD deployments using GitHub Actions.";
      } else if (lowerInput.includes("project") || lowerInput.includes("rentkart")) {
        response = "One of his key projects is RentKart, where he implemented serverless architectures using Lambda, RDS, and API Gateway with zero-downtime deployment pipelines.";
      } else if (lowerInput.includes("skills") || lowerInput.includes("tech")) {
        response = "His core stack includes AWS, OCI, Kubernetes, Docker, Terraform, Next.js, and C++. He's highly proficient in Cloud Infrastructure and DevOps automation.";
      } else if (lowerInput.includes("cert") || lowerInput.includes("oracle")) {
        response = "He holds multiple prestigious certifications including the Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional and AWS badges.";
      } else if (lowerInput.includes("hi") || lowerInput.includes("hello")) {
        response = "Hello! How can I help you learn more about his qualifications today?";
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    }, 1000);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[60]">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: isOpen ? 0 : 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white p-4 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] relative group"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-background animate-pulse"></span>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-[60] w-[90vw] md:w-[400px] h-[500px] flex flex-col bg-[#111827]/95 backdrop-blur-xl border border-primary/30 rounded-2xl shadow-2xl overflow-hidden neon-border-blue"
          >
            {/* Header */}
            <div className="bg-primary/20 p-4 border-b border-primary/30 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-primary p-2 rounded-full">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Portfolio Assistant</h3>
                  <p className="text-xs text-primary font-mono flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-2`}>
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === "user" ? "bg-primary text-white rounded-tr-sm" : "bg-white/10 text-white/90 rounded-tl-sm"}`}>
                    {msg.content}
                  </div>

                  {msg.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1 truncate">
                       <User className="w-4 h-4 text-white/50" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-black/40 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about Ram's experience..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                />
                <Button onClick={handleSend} size="icon" className="bg-primary hover:bg-primary/90 rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-center text-[10px] text-muted-foreground mt-2">Powered by Simulated AI Resume Graph</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
