import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-background/80 pt-16 pb-8 backdrop-blur-lg">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tighter text-white">
                Ram Singh Yadav
              </span>
              <span className="text-sm font-mono text-primary neon-text-blue uppercase">
                Enterprise Cloud & DevOps Engineer
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm mt-4">
              Designing scalable multi-cloud architectures, orchestrating containerized deployments, and building AI-driven solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Navigation</h4>
            <ul className="space-y-2">
              {["Home", "Certifications", "Projects", "Skills"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors hover:neon-text-blue"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact & Connect</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/ramsinghyadav4472"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all neon-border-blue"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ramsinghyadav4472"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all"
                style={{boxShadow: '0 0 10px var(--color-secondary), inset 0 0 10px var(--color-secondary)'}}
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ramsinghyadav4472@gmail.com"
                className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all"
                 style={{boxShadow: '0 0 10px var(--color-accent), inset 0 0 10px var(--color-accent)'}}
                title="Email"
              >
                <Mail size={20} />
              </a>
               {/* WhatsApp placeholder icon - assuming we use a stylized message circle if missing whatsapp icon */}
               <a
                href="https://wa.me/yournumber"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-all"
                style={{boxShadow: '0 0 10px #22c55e, inset 0 0 10px #22c55e'}}
                title="WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
            
            <div className="mt-4 space-y-2">
               <a 
                 href="https://calendly.com/yourlink" 
                 target="_blank"
                 className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-primary text-primary shadow-sm hover:bg-primary/10 h-9 px-4 py-2 w-full neon-border-blue"
               >
                 Book a 30min Sync via Calendly
               </a>
            </div>

            <div className="mt-4 flex flex-col gap-1 text-sm text-muted-foreground">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                 <span className="text-white/80">Available: Internships | Full-Time | Contract</span>
               </div>
              <p>📍 Location: Phagwara, Punjab</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 text-sm text-muted-foreground">
          <p>© {currentYear} Ram Singh Yadav. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-mono text-xs text-primary/60">
            SYS.STATUS // <span className="text-accent neon-text-green">ONLINE</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
