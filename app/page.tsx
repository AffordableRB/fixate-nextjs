import { Metadata } from "next";
import WorkflowSlideshow from "@/components/WorkflowSlideshow";

export const metadata: Metadata = {
  title: "Fixate - Missed Call Recovery & AI Intake System",
  description:
    "Fixate recovers missed calls and completes intake automatically. Built for plumbers and trades. Never lose a job again.",
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, oklch(0.20 0.02 260) 0%, oklch(0.30 0.04 260) 40%, oklch(0.22 0.03 270) 100%)',
          }}
        />
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />

        <div className="container mx-auto px-6 relative z-10 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <p className="font-mono text-sm uppercase tracking-widest text-white/60 mb-4">
                Missed Call Recovery for Plumbers
              </p>
              <h1 className="text-5xl lg:text-7xl font-display font-black text-white mb-6 leading-[0.95]">
                Unanswered calls become dispatch-ready jobs.
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
                Instantly engages missed callers. No forms. No voicemails. Built
                specifically for plumbers.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://fixate-app.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-display font-bold uppercase text-sm px-8 py-3.5 bg-white text-primary hover:bg-white/90 transition-all btn-press"
                >
                  Schedule Demo
                </a>
                <a
                  href="/features"
                  className="inline-block font-display font-bold uppercase text-sm px-8 py-3.5 border-2 border-white/40 text-white hover:bg-white/10 transition-all btn-press"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Glassmorphic card */}
            <div className="glass-dark rounded-none p-8 lg:p-10">
              <p className="font-mono text-xs uppercase tracking-widest text-white/50 mb-6">
                How It Works
              </p>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                When a plumber can&apos;t answer the phone, Fixate handles the call
                the way a real person would. It keeps the customer there, gathers
                the job details, urgency, and location, and holds the job until
                the plumber calls back to confirm.
              </p>
              <p className="text-white/70 leading-relaxed">
                Missed calls don&apos;t turn into dead voicemails or a form to fill
                out. They turn into real jobs, ready to dispatch.
              </p>
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-display font-black text-white">70%</p>
                  <p className="text-xs text-white/50 mt-1 font-mono uppercase">Engagement</p>
                </div>
                <div>
                  <p className="text-2xl font-display font-black text-white">$7k+</p>
                  <p className="text-xs text-white/50 mt-1 font-mono uppercase">Monthly</p>
                </div>
                <div>
                  <p className="text-2xl font-display font-black text-white">100%</p>
                  <p className="text-xs text-white/50 mt-1 font-mono uppercase">Intake Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* Workflow Slideshow Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6">
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-3">
            The Fixate Workflow
          </p>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-foreground mb-12">
            Four steps. Zero missed jobs.
          </h2>
          <WorkflowSlideshow />
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* Why Fixate Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-6">
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-3">
            The Difference
          </p>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-foreground mb-4">
            Why Fixate outperforms voicemail and SMS autoresponders
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Missed-call systems stop at a message or a link. Fixate keeps the
            customer engaged and completes the job intake before the plumber
            calls back.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-destructive mb-4">
                The Old Way
              </p>
              <h3 className="text-2xl font-display font-black text-foreground mb-3">
                Most tools send a message and hope.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Voicemail systems leave messages. SMS tools send links. Neither
                captures the job or keeps the customer engaged. The customer
                moves on. The job is lost.
              </p>
            </div>

            <div className="border-2 border-primary bg-primary/5 p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
                The Fixate Way
              </p>
              <h3 className="text-2xl font-display font-black text-foreground mb-3">
                Fixate runs a full intake conversation.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Asks about the problem, urgency, location, and availability.
                Captures the job details. Holds the opportunity until you call
                back. The job is yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* Stats Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6">
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-3 text-center">
            By the Numbers
          </p>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-foreground mb-16 text-center">
            The numbers that matter
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-border p-10 text-center">
              <p className="text-6xl font-display font-black text-primary mb-3">70%</p>
              <p className="text-muted-foreground">
                Customer engagement rate on recovered calls
              </p>
            </div>
            <div className="border border-border p-10 text-center">
              <p className="text-6xl font-display font-black text-primary mb-3">$7,000+</p>
              <p className="text-muted-foreground">
                Average monthly value recovered per plumber
              </p>
            </div>
            <div className="border border-border p-10 text-center">
              <p className="text-6xl font-display font-black text-primary mb-3">100%</p>
              <p className="text-muted-foreground">
                Intake completion rate
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* CTA Section */}
      <section
        className="py-20 lg:py-28"
        style={{
          background:
            'linear-gradient(135deg, oklch(0.40 0.08 260) 0%, oklch(0.35 0.07 260) 100%)',
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-black text-white mb-6">
            Stop losing jobs to missed calls.
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Fixate is the only system designed to reliably recover the majority
            of missed calls &mdash; not just notify customers that you missed one.
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
