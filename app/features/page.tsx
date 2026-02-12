import { Metadata } from "next";
import FeatureTabs from "@/components/FeatureTabs";

export const metadata: Metadata = {
  title: "Features - Fixate",
  description:
    "Explore Fixate's features: Instant Recovery, Live Intake, Urgency Detection, and the Live Intake Dashboard.",
};

export default function Features() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-32 pb-20"
        style={{
          background:
            'linear-gradient(135deg, oklch(0.20 0.02 260) 0%, oklch(0.28 0.04 260) 100%)',
        }}
      >
        <div className="container mx-auto px-6">
          <p className="font-mono text-sm uppercase tracking-widest text-white/50 mb-4">
            Platform Features
          </p>
          <h1 className="text-5xl lg:text-6xl font-display font-black text-white mb-6 max-w-3xl">
            Fixate isn&apos;t your standard text-back tool.
          </h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
            It&apos;s a complete intake and recovery system that captures jobs and
            holds them until you call back.
          </p>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* Feature Tabs */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6">
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-3">
            How It Works
          </p>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-foreground mb-12">
            What Fixate does the moment a call is missed
          </h2>
          <FeatureTabs />
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-6">
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-3">
            Capabilities
          </p>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-foreground mb-12">
            Every detail, covered.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Instant Recovery",
                desc: "Customer reaches you immediately. No delay. No missed opportunity.",
              },
              {
                title: "Live Intake Conversation",
                desc: "Multi-turn dialogue captures problem type, urgency, location, and availability.",
              },
              {
                title: "Urgency Detection",
                desc: "Automatically flags emergency vs. routine jobs. Prioritize what matters.",
              },
              {
                title: "Job Details Captured",
                desc: "Problem description, location, customer info, and availability all recorded.",
              },
              {
                title: "Job Held for You",
                desc: "Opportunity stays in the system until you\u2019re ready to call back. No expiration.",
              },
              {
                title: "Informed Callback",
                desc: "You call back with full context. No re-explaining. No guessing urgency.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="border border-border bg-background p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-primary text-white flex items-center justify-center font-mono text-sm font-bold">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-display font-black text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* Dashboard Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6">
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-3">
            Command Center
          </p>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-foreground mb-4">
            Live Intake Dashboard
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            A real-time dashboard that shows every recovered call, active
            intake, emergency, and follow-up in one place &mdash; so nothing slips
            through.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Intake Board",
                desc: "View all recovered calls, in-progress conversations, and completed intakes",
              },
              {
                title: "Emergency Detection",
                desc: "Urgent jobs are automatically flagged and separated",
              },
              {
                title: "Job Status Tracking",
                desc: "See active, unassigned, and completed jobs at a glance",
              },
              {
                title: "Live Activity Feed",
                desc: "Real-time visibility into customer engagement and intake progress",
              },
              {
                title: "Call Recovery Log",
                desc: "Full history of missed calls, responses, and outcomes",
              },
              {
                title: "Insights & Metrics",
                desc: "Track recovered calls, job volume, and intake performance",
              },
            ].map((feature, idx) => (
              <div key={idx} className="border border-border p-6">
                <h3 className="font-display font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12 italic">
            Fixate doesn&apos;t just recover missed calls &mdash; it organizes them,
            prioritizes them, and holds them until you&apos;re ready to act.
          </p>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* CTA */}
      <section
        className="py-20 lg:py-28"
        style={{
          background:
            'linear-gradient(135deg, oklch(0.40 0.08 260) 0%, oklch(0.35 0.07 260) 100%)',
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-black text-white mb-6">
            See the platform in action
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Schedule a personalized demo to explore features relevant to your
            business workflows.
          </p>
          <a
            href="https://fixate-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-display font-bold uppercase text-sm px-10 py-4 bg-white text-primary hover:bg-white/90 transition-all btn-press"
          >
            Schedule Demo
          </a>
        </div>
      </section>
    </main>
  );
}
