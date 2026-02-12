'use client';

/*
Design Philosophy: Industrial Modernism - Pricing Page
- Price as center of gravity
- Minimal copy, maximum clarity
- Decision-first layout
- ROI math unmissable
*/

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero — Price Above Fold */}
      <section className="py-24 bg-background border-b-4 border-border">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-display font-black mb-4 leading-tight">
              Simple, flat pricing. Built to recover missed jobs.
            </h1>
            <div className="mb-8">
              <p className="text-5xl font-display font-black text-primary mb-6">
                $129 / month. One price. Everything included.
              </p>
              <p className="text-lg font-body text-muted-foreground">
                No per-user fees. No call limits. No setup costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Card — Center of Gravity */}
      <section className="py-32 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-sm font-display font-black uppercase tracking-widest text-muted-foreground mb-8">
              Most common setup for plumbers
            </p>
            
            {/* Fixate Core Plan */}
            <div className="border-4 border-primary bg-card shadow-2xl">
              <div className="p-16 border-b-4 border-primary bg-primary/10 text-center">
                <div className="mb-8">
                  <div className="text-8xl font-display font-black text-primary">$129</div>
                  <div className="text-2xl font-body text-muted-foreground mt-2">Per month</div>
                </div>
                <p className="text-lg font-body text-muted-foreground">
                  Everything included. No setup required.
                </p>
              </div>
              <div className="p-16">
                <div className="space-y-4 mb-8">
                  <Link href="/start" className="block">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold uppercase h-14 btn-press text-lg">
                      Get started
                    </Button>
                  </Link>
                  <Link href="/demo" className="block">
                    <Button variant="outline" className="w-full border-2 border-border hover:bg-muted font-display font-bold uppercase h-12 btn-press text-sm">
                      Schedule a demo (optional)
                    </Button>
                  </Link>
                </div>
                <p className="text-sm font-body text-muted-foreground text-center">
                  Start using Fixate immediately. No sales call required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* Everything Included — Two Column Proof */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-5xl font-display font-black mb-4 text-center">Everything included. No add-ons. No tiers.</h2>
          <p className="text-lg font-body text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Unlike basic missed-call text-back tools, Fixate completes intake and holds the job until you call back.
          </p>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-display font-black mb-8 pb-4 border-b-4 border-primary">What Fixate does automatically</h3>
              <ul className="space-y-4">
                <li className="text-lg font-body text-foreground">Intelligent SMS intake</li>
                <li className="text-lg font-body text-foreground">Emergency vs non-emergency detection</li>
                <li className="text-lg font-body text-foreground">Job summaries for callbacks</li>
                <li className="text-lg font-body text-foreground">Customer contact & location capture</li>
                <li className="text-lg font-body text-foreground">Works with Jobber, Housecall Pro, ServiceTitan</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-display font-black mb-8 pb-4 border-b-4 border-primary">What plumbers no longer have to do</h3>
              <ul className="space-y-4">
                <li className="text-lg font-body text-foreground">Answer every call</li>
                <li className="text-lg font-body text-foreground">Chase voicemails</li>
                <li className="text-lg font-body text-foreground">Re-ask questions</li>
                <li className="text-lg font-body text-foreground">Manually triage urgency</li>
                <li className="text-lg font-body text-foreground">Manage forms or dead ends</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* ROI — Math Unmissable */}
      <section className="py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-black mb-4 text-center">
              Most plumbers lose thousands each month without a real call-recovery system.
            </h2>
            <p className="text-xl font-body text-muted-foreground text-center mb-16">
              Fixate isn't a text-back tool — it's a complete, proven intake and recovery system that holds jobs until you call back.
            </p>
            
            <div className="bg-primary/10 border-4 border-primary p-16 mb-12 text-center">
              <p className="text-lg font-body text-muted-foreground mb-6">
                A typical plumber using Fixate recovers:
              </p>
              <p className="text-3xl font-display font-black mb-6">
                5 missed calls / week × $360 average job = <span className="text-primary text-4xl">$1,800 / week</span>
              </p>
              <p className="text-2xl font-body text-muted-foreground mb-8">
                That's over <span className="font-display font-black text-primary">$7,000/month</span> in jobs Fixate reliably recovers.
              </p>
              <p className="text-xl font-display font-black">
                Fixate costs <span className="text-primary">$129/month</span>.
              </p>
            </div>
            <p className="text-sm font-body text-muted-foreground text-center">
              Most customers cover Fixate with their first recovered job.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* Support */}
      <section className="py-16 bg-muted/30">
        <div className="container text-center">
          <p className="text-lg font-body text-muted-foreground">
            Questions? <Link href="/contact" className="font-display font-black text-primary hover:underline">Talk to us</Link> — demos are optional.
          </p>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* Final CTA */}
      <section className="py-32 bg-foreground text-background">
        <div className="container text-center">
          <h2 className="text-6xl font-display font-black mb-8">
            Start recovering missed calls today.
          </h2>
          <p className="text-2xl font-body mb-12 max-w-2xl mx-auto opacity-90">
            $129/month. No contracts. Cancel anytime.
          </p>
          <Link href="/start">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold uppercase tracking-wide px-12 h-14 btn-press text-lg">
              Get started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-border bg-background py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="text-2xl font-display font-black mb-4">
                FIXATE
              </div>
              <p className="text-sm font-body text-muted-foreground">
                Operational software for home service businesses.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-display font-black uppercase mb-4">Product</h4>
              <ul className="space-y-2 text-sm font-body">
                <li><Link href="/features"><span className="text-muted-foreground hover:text-foreground">Features</span></Link></li>
                <li><Link href="/pricing"><span className="text-muted-foreground hover:text-foreground">Pricing</span></Link></li>
                <li><Link href="/demo"><span className="text-muted-foreground hover:text-foreground">Request Demo</span></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-display font-black uppercase mb-4">Industries</h4>
              <ul className="space-y-2 text-sm font-body">
                <li><span className="text-muted-foreground">HVAC</span></li>
                <li><span className="text-muted-foreground">Plumbing</span></li>
                <li><span className="text-muted-foreground">Electrical</span></li>
                <li><span className="text-muted-foreground">Multi-Trade</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-display font-black uppercase mb-4">Company</h4>
              <ul className="space-y-2 text-sm font-body">
                <li><span className="text-muted-foreground">About</span></li>
                <li><span className="text-muted-foreground">Blog</span></li>
                <li><span className="text-muted-foreground">Contact</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t-4 border-border mt-12 pt-12 text-center text-sm font-body text-muted-foreground">
            <p>© 2026 Fixate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
