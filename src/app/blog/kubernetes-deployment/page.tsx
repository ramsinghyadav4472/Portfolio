import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPost() {
  return (
    <div className="text-white space-y-6">
      <h1 className="text-4xl font-bold">Zero-Downtime Deployments in Kubernetes</h1>
      <div className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
        Published: Oct 24, 2025 | 5 min read
      </div>

      <p className="text-lg text-muted-foreground mt-4">
        When managing enterprise applications, downtime during deployments is unacceptable. In this post, we'll explore how to achieve zero-downtime deployments using Kubernetes Rolling Updates and Readiness Probes.
      </p>

      <h2 className="text-2xl font-bold mt-8">The Problem with Traditional Deployments</h2>
      <p className="text-muted-foreground">
        In classical VM-based deployments, replacing the existing application often meant a temporary loss of service while the new binaries were unpacked, configured, and restarted.
      </p>

      <h2 className="text-2xl font-bold mt-8">Kubernetes Strategy: RollingUpdate</h2>
      <p className="text-muted-foreground">
        Kubernetes solves this elegantly at the <code className="bg-white/10 px-1 rounded">Deployment</code> controller level. By default, K8s uses the <code className="bg-white/10 px-1 rounded">RollingUpdate</code> strategy.
      </p>

      <div className="bg-black/50 p-4 rounded-lg font-mono text-sm border border-white/10 my-4 text-green-400">
        <pre>
{`spec:
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 0`}
        </pre>
      </div>

      <p className="text-muted-foreground">
        With <code className="bg-white/10 px-1 rounded">maxUnavailable: 0</code>, K8s ensures that the desired number of pods is always running. It will first create new pods with the new image, wait for them to be ready, and only then terminate the old pods.
      </p>

      <h2 className="text-2xl font-bold mt-8">The Critical Role of Probes</h2>
      <p className="text-muted-foreground">
        A Rolling Update is only as good as its health checks. If K8s sends traffic to a pod before the application inside is fully initialized, users will see 502 Bad Gateway errors. This is where <code className="bg-white/10 px-1 rounded">readinessProbe</code> is essential:
      </p>

      <div className="bg-black/50 p-4 rounded-lg font-mono text-sm border border-white/10 my-4 text-blue-400">
        <pre>
{`readinessProbe:
  httpGet:
    path: /health
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 5`}
        </pre>
      </div>

      <p className="text-muted-foreground mt-8 border-l-4 border-primary pl-4 py-2">
        By ensuring your CI/CD pipeline (like GitHub Actions + ArgoCD) leverages these native Kubernetes primitives, you can deploy hundreds of times a day with complete confidence.
      </p>
    </div>
  );
}
