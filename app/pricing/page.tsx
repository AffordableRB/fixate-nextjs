import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Fixate",
  description:
    "Simple, flat pricing for Fixate. $129/month. No per-user fees. No call limits. No setup costs.",
};

export default function Pricing() {
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
        <div className="container mx-auto px-6 text-center">
          <p className="font-mono text-sm uppercase tracking-widest text-white/50 mb-4">
            Pricing
          </p>
          <h1 className="text-5xl lg:text-6xl font-display font-black text-white mb-6">
            Simple, flat pricing.
          </h1>
          <p className="text-2xl text-white/90 font-display font-bold mb-3">
            $129 / month. One price. Everything included.
          </p>
          <p className="text-lg text-white/60">
            No per-user fees. No call limits. No setup costs.
          </p>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* Pricing Card */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="border-2 border-primary p-12 text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Most Common Setup for Plumbers
            </p>
            <p className="text-7xl font-display font-black text-primary mb-2">$129</p>
            <p className="text-muted-foreground mb-8">Per month</p>
            <div className="border-t border-border pt-8 mb-8">
              <p className="text-lg text-foreground mb-2 font-bold">
                Everything included. No setup required.
              </p>
              <p className="text-muted-foreground">
                Start using Fixate immediately. No sales call required.
              </p>
            </div>
            <a
              href="https://fixate-app.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-display font-bold uppercase text-sm px-10 py-4 bg-primary text-white hover:opacity-90 transition-all btn-press"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* What's Included */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-6">
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-3 text-center">
            Everything Included
          </p>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-foreground mb-16 text-center">
            No add-ons. No tiers.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-display font-black text-foreground mb-6 uppercase">
                What Fixate Does Automatically
              </h3>
              <ul className="space-y-4">
                {[
                  "Intelligent SMS intake",
                  "Emergency vs non-emergency detection",
                  "Job summaries for callbacks",
                  "Customer contact & location capture",
                  "Works with Jobber, Housecall Pro, ServiceTitan",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-success text-white flex items-center justify-center font-mono text-xs font-bold mt-0.5">
                      &#10003;
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-display font-black text-foreground mb-6 uppercase">
                What Plumbers No Longer Have to Do
              </h3>
              <ul className="space-y-4">
                {[
                  "Answer every call",
                  "Chase voicemails",
                  "Re-ask questions",
                  "Manually triage urgency",
                  "Manage forms or dead ends",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-success text-white flex items-center justify-center font-mono text-xs font-bold mt-0.5">
                      &#10003;
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* ROI Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-3 text-center">
            Return on Investment
          </p>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-foreground mb-12 text-center">
            Most plumbers lose thousands each month.
          </h2>

          <div className="border border-border p-10 lg:p-12">
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              Fixate isn&apos;t a text-back tool &mdash; it&apos;s a complete, proven intake and
              recovery system that holds jobs until you call back.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-8 mb-8">
              <p className="text-muted-foreground mb-3 font-mono text-sm uppercase">
                A Typical Plumber Using Fixate Recovers:
              </p>
              <p className="text-2xl font-display font-black text-primary mb-3">
                5 missed calls / week x $360 average job = $1,800 / week
              </p>
              <p className="text-xl font-display font-bold text-foreground">
                That&apos;s over $7,000/month in jobs Fixate reliably recovers.
              </p>
            </div>

            <div className="text-center border-t border-border pt-8">
              <p className="text-muted-foreground mb-2">Fixate costs</p>
              <p className="text-4xl font-display font-black text-primary mb-4">
                $129/month
              </p>
              <p className="text-lg text-foreground font-bold">
                Most customers cover Fixate with their first recovered job.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* FAQ */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-black text-foreground mb-6">
            Questions?
          </h2>
          <p className="text-lg text-muted-foreground">
            <a
              href="https://fixate-app.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold hover:underline"
            >
              Talk to us
            </a>
            {' '}&mdash; demos are optional.
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
            Start recovering missed calls today.
          </h2>
          <p className="text-xl text-white/80 mb-4">
            $129/month. No contracts. Cancel anytime.
          </p>
          <a
            href="https://fixate-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-display font-bold uppercase text-sm px-10 py-4 bg-white text-primary hover:bg-white/90 transition-all btn-press mt-6"
          >
            Get Started
          </a>
        </div>
      </section>
    </main>
  );
}
