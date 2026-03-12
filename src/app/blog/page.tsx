import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogIndex() {
  const posts = [
    {
      slug: "kubernetes-deployment",
      title: "Zero-Downtime Deployments in Kubernetes",
      date: "Oct 24, 2025",
      readTime: "5 min read",
      category: "DevOps",
      description: "How to leverage Rolling Updates and Helm to ensure massive scale applications never drop a single request during deployment."
    },
    {
        slug: "intro-to-terraform",
        title: "Infrastructure as Code with Terraform & AWS",
        date: "Sep 12, 2025",
        readTime: "8 min read",
        category: "Cloud",
        description: "A deep dive into managing AWS VPCs, Subnets, and EC2 instances programmatically using Terraform state."
      }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container max-w-4xl mx-auto px-6">
        
        <div className="mb-12">
          <Link href="/" className="inline-block mb-6 -ml-4">
            <Button variant="ghost" className="text-muted-foreground hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
            </Button>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <Terminal className="inline-block w-10 h-10 mr-4 text-primary mb-2" />
            Engineering Log
          </h1>
          <p className="text-xl text-muted-foreground">Thoughts on Cloud Architecture, DevOps, and Automation.</p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="block group">
              <article className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary/50 transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"></div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="text-primary font-mono bg-primary/10 px-3 py-1 rounded-full">{post.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4"/> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> {post.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-muted-foreground">{post.description}</p>
              </article>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
