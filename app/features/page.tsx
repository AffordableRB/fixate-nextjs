'use client';

/*
Design Philosophy: Industrial Modernism - Features Page
- Workflow-organized feature blocks (not alphabetical lists)
- Dashboard screenshot showing operational context
- Technical specifications in expandable sections
- Functional badges for feature categories
*/

import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MapPin, 
  FileText, 
  CreditCard, 
  Users, 
  BarChart3,
  Smartphone,
  Bell,
  Lock,
  ArrowRight,
  DollarSign
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function Features() {
  const [activeWorkflow, setActiveWorkflow] = useState<string>("job-lifecycle");
  const [isSticky, setIsSticky] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleWorkflowChange = (workflow: string) => {
    setIsLoading(true);
    setActiveWorkflow(workflow);
    setTimeout(() => setIsLoading(false), 600);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navElement = document.getElementById('workflow-nav');
      if (navElement) {
        const rect = navElement.getBoundingClientRect();
        setIsSticky(rect.top <= 80);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-16 bg-background border-b-4 border-border">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-7xl font-display font-black mb-4 leading-tight">
              Fixate isn't your standard text-back tool.
            </h1>
            <p className="text-2xl font-display font-black text-primary">
              It's a complete intake and recovery system that captures jobs and holds them until you call back.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow Navigation */}
      <section 
        id="workflow-nav"
        className="py-12 sticky top-0 z-10 transition-colors duration-200" 
        style={{
          backgroundColor: isSticky ? 'var(--fixate-blue-sticky)' : 'rgba(59, 130, 246, 0.06)',
          borderTop: isSticky ? 'none' : '1px solid rgba(59, 130, 246, 0.25)',
          borderBottom: isSticky ? '1px solid rgba(45, 71, 114, 0.5)' : '1px solid rgb(229, 231, 235)'
        }}
      >
        <div className="container">
          <div className="flex gap-4 overflow-x-auto">
            <button
              onClick={() => handleWorkflowChange("job-lifecycle")}
              className={`px-6 py-3 font-display font-black uppercase text-sm whitespace-nowrap transition-colors ${
                activeWorkflow === "job-lifecycle"
                  ? isSticky
                    ? "bg-white"
                    : "bg-primary text-white"
                  : isSticky
                  ? "bg-transparent text-white/80 hover:text-white"
                  : "bg-white text-foreground hover:bg-slate-50"
              }`} style={activeWorkflow === "job-lifecycle" && isSticky ? { color: "var(--fixate-blue)" } : {}}>
              Intake & Recovery
            </button>
            <button
              onClick={() => handleWorkflowChange("financial")}
              className={`px-6 py-3 font-display font-black uppercase text-sm whitespace-nowrap transition-colors ${
                activeWorkflow === "financial"
                  ? isSticky
                    ? "bg-white"
                    : "bg-primary text-white"
                  : isSticky
                  ? "bg-transparent text-white/80 hover:text-white"
                  : "bg-white text-foreground hover:bg-slate-50"
              }`} style={activeWorkflow === "financial" && isSticky ? { color: "var(--fixate-blue)" } : {}}>
              Intelligent Call Recovery
            </button>
            <button
              onClick={() => handleWorkflowChange("customer")}
              className={`px-6 py-3 font-display font-black uppercase text-sm whitespace-nowrap transition-colors ${
                activeWorkflow === "customer"
                  ? isSticky
                    ? "bg-white"
                    : "bg-primary text-white"
                  : isSticky
                  ? "bg-transparent text-white/80 hover:text-white"
                  : "bg-white text-foreground hover:bg-slate-50"
              }`} style={activeWorkflow === "customer" && isSticky ? { color: "var(--fixate-blue)" } : {}}>
              Customer Context
            </button>
            <button
              onClick={() => handleWorkflowChange("reporting")}
              className={`px-6 py-3 font-display font-black uppercase text-sm whitespace-nowrap transition-colors ${
                activeWorkflow === "reporting"
                  ? isSticky
                    ? "bg-white"
                    : "bg-primary text-white"
                  : isSticky
                  ? "bg-transparent text-white/80 hover:text-white"
                  : "bg-white text-foreground hover:bg-slate-50"
              }`} style={activeWorkflow === "reporting" && isSticky ? { color: "var(--fixate-blue)" } : {}}>
              Workflow Compatibility
            </button>
          </div>
        </div>
      </section>

      {/* Intake & Recovery Workflow */}
      {activeWorkflow === "job-lifecycle" && (
        <section className={`py-24 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <div className="container">
            <div className="mb-16">
              <h2 className="text-5xl font-display font-black mb-6">What Fixate does the moment a call is missed</h2>
              <p className="text-xl font-body text-muted-foreground max-w-3xl">
                Most tools send a message and hope the customer responds. Fixate runs a full intake conversation, determines urgency, captures job details, and holds the opportunity until you are ready to take over.
              </p>
            </div>

            {/* Intake & Recovery Workflow */}
            <div className="mb-16 bg-muted/30 border-4 border-border p-8">
              <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4">
                <div className="text-center min-w-[130px]">
                  <div className="w-16 h-16 bg-primary mx-auto mb-3 flex items-center justify-center">
                    <Bell className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-xs font-display font-black uppercase leading-tight">Instant Recovery</div>
                </div>
                <ArrowRight className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                <div className="text-center min-w-[130px]">
                  <div className="w-16 h-16 bg-secondary mx-auto mb-3 flex items-center justify-center">
                    <Smartphone className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <div className="text-xs font-display font-black uppercase leading-tight">Live Intake Conversation</div>
                </div>
                <ArrowRight className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                <div className="text-center min-w-[130px]">
                  <div className="w-16 h-16 bg-accent mx-auto mb-3 flex items-center justify-center">
                    <BarChart3 className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <div className="text-xs font-display font-black uppercase leading-tight">Urgency Detection</div>
                </div>
                <ArrowRight className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                <div className="text-center min-w-[130px]">
                  <div className="w-16 h-16 bg-primary mx-auto mb-3 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-xs font-display font-black uppercase leading-tight">Job Details Captured</div>
                </div>
                <ArrowRight className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                <div className="text-center min-w-[130px]">
                  <div className="w-16 h-16 bg-secondary mx-auto mb-3 flex items-center justify-center">
                    <Lock className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <div className="text-xs font-display font-black uppercase leading-tight">Job Held for You</div>
                </div>
                <ArrowRight className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                <div className="text-center min-w-[130px]">
                  <div className="w-16 h-16 bg-accent mx-auto mb-3 flex items-center justify-center">
                    <Users className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <div className="text-xs font-display font-black uppercase leading-tight">Informed Callback</div>
                </div>
              </div>
            </div>

            {/* Feature Blocks */}
            <div className="space-y-16">
              {/* Live Intake Dashboard */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <span className="badge-functional mb-4 inline-block">Control Center</span>
                  <h3 className="text-4xl font-display font-black mb-6">Live Intake Dashboard</h3>
                  <p className="text-base font-body text-muted-foreground mb-6 leading-relaxed">
                    A real-time dashboard that shows every recovered call, active intake, emergency, and follow-up in one place — so nothing slips through.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Intake Board</div>
                        <div className="text-sm font-body text-muted-foreground">View all recovered calls, in-progress conversations, and completed intakes</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Emergency Detection</div>
                        <div className="text-sm font-body text-muted-foreground">Urgent jobs are automatically flagged and separated</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Job Status Tracking</div>
                        <div className="text-sm font-body text-muted-foreground">See active, unassigned, and completed jobs at a glance</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Live Activity Feed</div>
                        <div className="text-sm font-body text-muted-foreground">Real-time visibility into customer engagement and intake progress</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Call Recovery Log</div>
                        <div className="text-sm font-body text-muted-foreground">Full history of missed calls, responses, and outcomes</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Insights & Metrics</div>
                        <div className="text-sm font-body text-muted-foreground">Track recovered calls, job volume, and intake performance</div>
                      </div>
                    </li>
                  </ul>
                  <p className="text-base font-body text-muted-foreground mt-6 leading-relaxed italic">
                    Fixate doesn't just recover missed calls — it organizes them, prioritizes them, and holds them until you're ready to act.
                  </p>
                </div>
                <div className="border-4 border-border">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663338939330/czmtZowJBCCLXYNY.png"
                    alt="Fixate Dashboard showing calls recovered, active jobs, emergencies, and live feed"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Dispatch */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="order-2 md:order-1 border-4 border-border">
                  <img 
                    src="https://private-us-east-1.manuscdn.com/sessionFile/ytVkA8orLPhOWK1vpBFLd2/sandbox/Z4l6FREm94o2Iwio5dfXP6-img-2_1770421207000_na1fn_ZGFzaGJvYXJkLW9wZXJhdGlvbnM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveXRWa0E4b3JMUGhPV0sxdnBCRkxkMi9zYW5kYm94L1o0bDZGUkVtOTRvMkl3aW81ZGZYUDYtaW1nLTJfMTc3MDQyMTIwNzAwMF9uYTFmbl9aR0Z6YUdKdllYSmtMVzl3WlhKaGRHbHZibk0ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Shg3kdE7N57yqAreUV8KmDdxLwK98rfYrgo5jnDzlJGc5bFRw-FviG8AAOs5k8G73wIGWQ2DhjXVFZTjwbi6YG8r8fc9FvmIVLnIRkAyUnf19nAUkT75Yr27vQ5OFyclFcvwae2FymC36A0Yb7I9DGEce7hdSbUWysx~othbNl9g9EJ62C8zGNX4ibtKnUtP~-v3BCG8WijFA6ckrEtvAnN3Yn6ILL5noL9ELmJovRLcVOhqMmKniqwMNgbxX-N7zf2JS-GHaUSXXkw7I8CH2yBmjqNPdyEyk9C7cjdSeTLyOukp-dJIPZrSmKjaoOSKb~GpAZBRj~lGuQW0U7mMag__"
                    alt="Dispatch dashboard showing schedule and routes"
                    className="w-full h-auto"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <span className="badge-functional mb-4 inline-block">Dispatch</span>
                  <h3 className="text-4xl font-display font-black mb-6">Route optimization</h3>
                  <p className="text-base font-body text-muted-foreground mb-6 leading-relaxed">
                    Intelligent routing saves 2 hours per day in drive time. Real-time GPS tracking keeps office and field synchronized on job status.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Multi-stop route planning</div>
                        <div className="text-sm font-body text-muted-foreground">Optimizes technician routes based on location and time windows</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Real-time job updates</div>
                        <div className="text-sm font-body text-muted-foreground">Office sees live status changes from field technicians</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Emergency dispatch handling</div>
                        <div className="text-sm font-body text-muted-foreground">Priority routing for urgent service calls</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Field Work */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <span className="badge-functional mb-4 inline-block">Field Work</span>
                  <h3 className="text-4xl font-display font-black mb-6">Mobile field application</h3>
                  <p className="text-base font-body text-muted-foreground mb-6 leading-relaxed">
                    Technicians access job details, customer history, and inventory from their mobile device. Capture signatures and photos without returning to office.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Offline mode</div>
                        <div className="text-sm font-body text-muted-foreground">Works without internet connection, syncs when back online</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Photo documentation</div>
                        <div className="text-sm font-body text-muted-foreground">Before/after photos attached to job records</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Digital signature capture</div>
                        <div className="text-sm font-body text-muted-foreground">Customer signs on mobile device for service completion</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted/30 border-4 border-border p-8 flex flex-col items-center justify-center">
                  <div className="text-6xl font-display font-black text-primary mb-2">85%</div>
                  <div className="text-sm font-display font-black uppercase text-muted-foreground mb-4">Jobs completed without office contact</div>
                  <p className="text-sm font-body text-muted-foreground text-center">
                    Technicians have all information needed to complete jobs independently, reducing radio calls and office interruptions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Financial Operations Workflow */}
      {/* Intelligent Call Recovery Workflow */}
      {activeWorkflow === "financial" && (
        <section className={`py-24 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <div className="container">
            <div className="mb-16">
              <h2 className="text-5xl font-display font-black mb-6">Intelligent Call Recovery</h2>
              <p className="text-xl font-body text-muted-foreground max-w-3xl">
                Fixate doesn't just respond to missed calls — it actively keeps customers engaged, asks the right questions, and completes intake automatically so no opportunity is lost.
              </p>
            </div>

            {/* Feature Blocks */}
            <div className="space-y-16">
              {/* Conversation-led Recovery */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <span className="badge-functional mb-4 inline-block">ENGAGEMENT</span>
                  <h3 className="text-4xl font-display font-black mb-6">Conversation-led recovery</h3>
                  <p className="text-base font-body text-muted-foreground mb-6 leading-relaxed">
                    Customers stay engaged instead of dropping off after one reply. Fixate continues the conversation naturally, keeping the customer invested until the plumber can call back.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Multi-turn conversations</div>
                        <div className="text-sm font-body text-muted-foreground">Fixate asks follow-up questions to keep customers engaged</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Natural dialogue flow</div>
                        <div className="text-sm font-body text-muted-foreground">Conversations feel human, not robotic or scripted</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Reduced drop-off rates</div>
                        <div className="text-sm font-body text-muted-foreground">70-90% engagement vs 5-10% for voicemail</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted/30 border-4 border-border p-8 flex flex-col items-center justify-center">
                  <div className="text-6xl font-display font-black text-primary mb-2">70–90%</div>
                  <div className="text-sm font-display font-black uppercase text-muted-foreground mb-4">Customer engagement rate</div>
                  <p className="text-sm font-body text-muted-foreground text-center">
                    Full intake completion, not just a single reply. Customers stay in conversation until the plumber calls back.
                  </p>
                </div>
              </div>

              {/* Automatic Detail Gathering */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="order-2 md:order-1 bg-muted/30 border-4 border-border p-8 flex flex-col items-center justify-center">
                  <div className="text-6xl font-display font-black text-primary mb-2">100%</div>
                  <div className="text-sm font-display font-black uppercase text-muted-foreground mb-4">Intake completion rate</div>
                  <p className="text-sm font-body text-muted-foreground text-center">
                    Every recovered call captures problem type, urgency, location, and customer availability before the callback.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <span className="badge-functional mb-4 inline-block">INTELLIGENCE</span>
                  <h3 className="text-4xl font-display font-black mb-6">Automatic detail gathering</h3>
                  <p className="text-base font-body text-muted-foreground mb-6 leading-relaxed">
                    Problem type, urgency, location, and availability captured without manual follow-up. Fixate gathers what plumbers actually need to know.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Problem classification</div>
                        <div className="text-sm font-body text-muted-foreground">Automatically categorizes issue type for routing</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Urgency detection</div>
                        <div className="text-sm font-body text-muted-foreground">Identifies emergency vs standard priority automatically</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Location & availability</div>
                        <div className="text-sm font-body text-muted-foreground">Captures address and customer availability window</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Intelligence-driven Flow */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <span className="badge-functional mb-4 inline-block">ADAPTATION</span>
                  <h3 className="text-4xl font-display font-black mb-6">Intelligence-driven flow</h3>
                  <p className="text-base font-body text-muted-foreground mb-6 leading-relaxed">
                    Fixate adapts questions based on customer responses. Different problems get different intake flows — no one-size-fits-all scripts.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Context-aware questions</div>
                        <div className="text-sm font-body text-muted-foreground">Follow-up questions change based on problem type</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">No scripted dead ends</div>
                        <div className="text-sm font-body text-muted-foreground">Conversation continues until full intake is complete</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Customizable workflows</div>
                        <div className="text-sm font-body text-muted-foreground">Configure intake flows for your specific service types</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted/30 border-4 border-border p-8 flex flex-col items-center justify-center">
                  <div className="text-5xl font-display font-black text-primary mb-2">2–3×</div>
                  <div className="text-sm font-display font-black uppercase text-muted-foreground mb-4">More missed calls recovered</div>
                  <p className="text-sm font-body text-muted-foreground text-center">
                    Compared to voicemail and basic SMS autoresponders. Intelligent engagement turns opportunities into jobs.
                  </p>
                </div>
              </div>

              {/* Completed Intake Before Callback */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="order-2 md:order-1 border-4 border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                    alt="Plumber reviewing job details on tablet before callback"
                    className="w-full h-auto"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <span className="badge-functional mb-4 inline-block">READINESS</span>
                  <h3 className="text-4xl font-display font-black mb-6">Completed intake before callback</h3>
                  <p className="text-base font-body text-muted-foreground mb-6 leading-relaxed">
                    Plumbers step in with full context, not partial information. No re-explaining the issue. No guessing urgency. Call back to confirm, not to investigate.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Full job context ready</div>
                        <div className="text-sm font-body text-muted-foreground">Problem, urgency, location, and customer availability all captured</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Faster booking decisions</div>
                        <div className="text-sm font-body text-muted-foreground">Plumbers confirm work, not chase information</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Warm callbacks</div>
                        <div className="text-sm font-body text-muted-foreground">Customer already engaged and expecting the call</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Customer Management Workflow */}
      {activeWorkflow === "customer" && (
        <section className={`py-24 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <div className="container">
            <div className="mb-16">
              <h2 className="text-5xl font-display font-black mb-6">Customer Management</h2>
              <p className="text-xl font-body text-muted-foreground max-w-3xl">
                Maintain complete service history, automate communications, and build long-term customer relationships through proactive engagement.
              </p>
            </div>

            {/* Feature Blocks */}
            <div className="space-y-16">
              {/* Complete Service History */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <span className="badge-functional mb-4 inline-block">Customer Database</span>
                  <h3 className="text-4xl font-display font-black mb-6">Complete service history</h3>
                  <p className="text-base font-body text-muted-foreground mb-6 leading-relaxed">
                    Every customer interaction, service call, and equipment detail stored in one place. Technicians can full history before arriving on-site.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Service history timeline</div>
                        <div className="text-sm font-body text-muted-foreground">All past jobs, maintenance, and issues in chronological order</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Equipment inventory</div>
                        <div className="text-sm font-body text-muted-foreground">Track installed equipment, warranties, and maintenance schedules</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Contact preferences</div>
                        <div className="text-sm font-body text-muted-foreground">Store preferred communication method and service windows</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted/30 border-4 border-border p-8 flex flex-col items-center justify-center">
                  <div className="text-6xl font-display font-black text-primary mb-2">92%</div>
                  <div className="text-sm font-display font-black uppercase text-muted-foreground mb-4">Customer retention rate</div>
                  <p className="text-sm font-body text-muted-foreground text-center">
                    Complete service history enables proactive maintenance recommendations and faster problem resolution.
                  </p>
                </div>
              </div>

              {/* Automated Communications */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="order-2 md:order-1 bg-muted/30 border-4 border-border p-8 flex flex-col items-center justify-center">
                  <div className="text-6xl font-display font-black text-primary mb-2">40%</div>
                  <div className="text-sm font-display font-black uppercase text-muted-foreground mb-4">More repeat jobs</div>
                  <p className="text-sm font-body text-muted-foreground text-center">
                    From automated maintenance reminders and proactive service suggestions. Customers appreciate the convenience.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <span className="badge-functional mb-4 inline-block">Engagement</span>
                  <h3 className="text-4xl font-display font-black mb-6">Automated communications</h3>
                  <p className="text-base font-body text-muted-foreground mb-6 leading-relaxed">
                    Automatically send maintenance reminders, service confirmations, and follow-ups. Stay top-of-mind without manual effort.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Maintenance reminders</div>
                        <div className="text-sm font-body text-muted-foreground">Automatic SMS/email reminders for seasonal maintenance</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Service confirmations</div>
                        <div className="text-sm font-body text-muted-foreground">Automatic appointment reminders reduce no-shows</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Follow-up surveys</div>
                        <div className="text-sm font-body text-muted-foreground">Gather feedback and identify upsell opportunities</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Reporting & Compatibility Workflow */}
      {activeWorkflow === "reporting" && (
        <section className={`py-24 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <div className="container">
            <div className="mb-16">
              <h2 className="text-5xl font-display font-black mb-6">Workflow Compatibility</h2>
              <p className="text-xl font-body text-muted-foreground max-w-3xl">
                Fixate integrates seamlessly with your existing tools. No rip-and-replace. No learning curve. Just better operations.
              </p>
            </div>

            {/* Feature Blocks */}
            <div className="space-y-16">
              {/* Integrations */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <span className="badge-functional mb-4 inline-block">Integration</span>
                  <h3 className="text-4xl font-display font-black mb-6">Native integrations</h3>
                  <p className="text-base font-body text-muted-foreground mb-6 leading-relaxed">
                    Connect Fixate to QuickBooks, Stripe, Google Calendar, and 100+ other tools. Data flows automatically between systems.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">QuickBooks sync</div>
                        <div className="text-sm font-body text-muted-foreground">Invoices, customers, and transactions sync automatically</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Payment processing</div>
                        <div className="text-sm font-body text-muted-foreground">Accept payments via Stripe, Square, or PayPal</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Calendar sync</div>
                        <div className="text-sm font-body text-muted-foreground">Jobs appear in Google Calendar and Outlook automatically</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-display font-black text-sm mb-1">Zapier support</div>
                        <div className="text-sm font-body text-muted-foreground">Connect to 1000+ apps via Zapier workflows</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted/30 border-4 border-border p-8 flex flex-col items-center justify-center">
                  <div className="text-6xl font-display font-black text-primary mb-2">0</div>
                  <div className="text-sm font-display font-black uppercase text-muted-foreground mb-4">Manual data entry</div>
                  <p className="text-sm font-body text-muted-foreground text-center">
                    Data flows automatically between Fixate and your existing tools. No double-entry, no sync errors.
                  </p>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="bg-muted/30 border-4 border-border p-12">
                <h3 className="text-3xl font-display font-black mb-8">Technical specifications</h3>
                <div className="space-y-6">
                  <details className="group">
                    <summary className="cursor-pointer flex items-center justify-between font-display font-black uppercase text-sm">
                      <span>Platform requirements</span>
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="mt-4 space-y-4 text-sm font-body text-muted-foreground">
                      <div>
                        <div className="font-display font-black text-foreground mb-2">Desktop</div>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Chrome, Firefox, Safari, Edge (latest versions)</li>
                          <li>Minimum 1280×720 screen resolution</li>
                          <li>Broadband internet connection (5 Mbps+)</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-display font-black text-foreground mb-2">Mobile</div>
                        <ul className="list-disc list-inside space-y-1">
                          <li>iOS 14+ or Android 10+</li>
                          <li>4G LTE or WiFi connectivity</li>
                          <li>Offline mode available for field work</li>
                        </ul>
                      </div>
                    </div>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer flex items-center justify-between font-display font-black uppercase text-sm">
                      <span>Data security & compliance</span>
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="mt-4 space-y-4 text-sm font-body text-muted-foreground">
                      <div>
                        <div className="font-display font-black text-foreground mb-2">Security measures</div>
                        <ul className="list-disc list-inside space-y-1">
                          <li>SOC 2 Type II certified</li>
                          <li>256-bit AES encryption at rest</li>
                          <li>TLS 1.3 encryption in transit</li>
                          <li>Role-based access control</li>
                          <li>Two-factor authentication available</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-display font-black text-foreground mb-2">Data backup</div>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Automated daily backups</li>
                          <li>30-day backup retention</li>
                          <li>Geographic redundancy (multi-region)</li>
                          <li>99.9% uptime SLA</li>
                        </ul>
                      </div>
                    </div>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer flex items-center justify-between font-display font-black uppercase text-sm">
                      <span>API & integration options</span>
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="mt-4 space-y-4 text-sm font-body text-muted-foreground">
                      <p>RESTful API with comprehensive documentation for custom integrations. Webhook support for real-time event notifications.</p>
                      <div>
                        <div className="font-display font-black text-foreground mb-2">API capabilities</div>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Customer management</li>
                          <li>Job creation & updates</li>
                          <li>Invoice generation</li>
                          <li>Payment processing</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-display font-black text-foreground mb-2">Webhooks</div>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Job status changes</li>
                          <li>Payment received</li>
                          <li>New customer created</li>
                          <li>Invoice sent</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-display font-black text-foreground mb-2">Rate limits</div>
                        <ul className="list-disc list-inside space-y-1">
                          <li>1,000 requests/hour (standard)</li>
                          <li>10,000 requests/hour (enterprise)</li>
                          <li>Burst allowance available</li>
                        </ul>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-muted/30 border-t-4 border-border">
        <div className="container text-center">
          <h2 className="text-5xl font-display font-black mb-6">See the platform in action</h2>
          <p className="text-xl font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo to explore features relevant to your business workflows.
          </p>
          <Link href="/demo">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Schedule Demo
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 bg-background border-t-4 border-border">
        <div className="container text-center">
          <p className="text-sm font-body text-muted-foreground">
            Fixate is the only system designed to reliably recover the majority of missed calls — not just notify customers that you missed one.
          </p>
          <div className="mt-8 flex gap-6 justify-center">
            <Link href="/">
              <a className="text-sm font-display font-black uppercase text-primary hover:text-primary/80">Features</a>
            </Link>
            <Link href="/pricing">
              <a className="text-sm font-display font-black uppercase text-primary hover:text-primary/80">Pricing</a>
            </Link>
            <Link href="/demo">
              <a className="text-sm font-display font-black uppercase text-primary hover:text-primary/80">Request Demo</a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
