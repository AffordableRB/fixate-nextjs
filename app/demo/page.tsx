import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Demo - Fixate",
  description:
    "See Fixate in action. Schedule a personalized demo and learn how missed call recovery can work for your plumbing business.",
};

export default function Demo() {
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
            Get Started
          </p>
          <h1 className="text-5xl lg:text-6xl font-display font-black text-white mb-6 max-w-3xl">
            See Fixate in action.
          </h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
            Schedule a personalized demo and learn how missed call recovery
            works for your plumbing business.
          </p>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* Demo Content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - info */}
            <div>
              <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-3">
                What to Expect
              </p>
              <h2 className="text-4xl font-display font-black text-foreground mb-8">
                A 15-minute walkthrough, tailored to your business.
              </h2>

              <div className="space-y-6">
                {[
                  {
                    number: '01',
                    title: 'See the intake in real time',
                    desc: 'Watch how Fixate engages a missed caller and captures job details through a live SMS conversation.',
                  },
                  {
                    number: '02',
                    title: 'Explore the dashboard',
                    desc: 'See how recovered calls, job summaries, and urgency flags appear in your live intake board.',
                  },
                  {
                    number: '03',
                    title: 'Ask anything',
                    desc: 'Integration with your existing tools, pricing, setup time, or anything else on your mind.',
                  },
                  {
                    number: '04',
                    title: 'Get started same day',
                    desc: 'If it\'s a fit, you can be live the same day. No contracts, no long onboarding.',
                  },
                ].map((step) => (
                  <div key={step.number} className="flex gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-primary text-white flex items-center justify-center font-mono text-sm font-bold">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - CTA card */}
            <div className="lg:sticky lg:top-28">
              <div className="border-2 border-primary p-10">
                <h3 className="text-2xl font-display font-black text-foreground mb-4">
                  Ready to stop losing jobs?
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Most plumbers lose $7,000+ per month in missed calls. Fixate
                  recovers those jobs automatically. See it work live.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-success text-white flex items-center justify-center font-mono text-xs font-bold">&#10003;</span>
                    <span className="text-foreground text-sm">15-minute personalized demo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-success text-white flex items-center justify-center font-mono text-xs font-bold">&#10003;</span>
                    <span className="text-foreground text-sm">No commitment required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-success text-white flex items-center justify-center font-mono text-xs font-bold">&#10003;</span>
                    <span className="text-foreground text-sm">Go live the same day</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-success text-white flex items-center justify-center font-mono text-xs font-bold">&#10003;</span>
                    <span className="text-foreground text-sm">$129/month &mdash; cancel anytime</span>
                  </div>
                </div>

                <a
                  href="https://fixate-app.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center font-display font-bold uppercase text-sm px-8 py-4 bg-primary text-white hover:opacity-90 transition-all btn-press w-full"
                >
                  Schedule Demo Now
                </a>

                <p className="text-center text-muted-foreground text-xs mt-4">
                  Or start immediately &mdash; no demo required.
                </p>
              </div>

              <div className="mt-6 border border-border p-6 text-center">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Already have an account?
                </p>
                <a
                  href="https://fixate-app.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-display font-bold hover:underline"
                >
                  Log in to your dashboard
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* Trust Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="border border-border p-8 text-center">
              <p className="text-4xl font-display font-black text-primary mb-2">70%</p>
              <p className="text-sm text-muted-foreground">Customer engagement rate</p>
            </div>
            <div className="border border-border p-8 text-center">
              <p className="text-4xl font-display font-black text-primary mb-2">$7,000+</p>
              <p className="text-sm text-muted-foreground">Monthly value recovered</p>
            </div>
            <div className="border border-border p-8 text-center">
              <p className="text-4xl font-display font-black text-primary mb-2">100%</p>
              <p className="text-sm text-muted-foreground">Intake completion rate</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
