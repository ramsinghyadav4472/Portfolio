import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Articles
        </Link>
        <article className="text-white space-y-4">
          {children}
        </article>
      </div>
    </div>
  );
}
