'use client';

/*
Design Philosophy: Industrial Modernism with Brutalist Typography
- Stark typographic hierarchy with 900-weight headlines
- Offset grid (60/40 split) for asymmetric layout
- Enterprise blue (#0F3B7F) for primary actions
- Industrial imagery showing real field workers
- Hard-edged geometric elements, no rounded corners
*/

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2, Users, DollarSign, Calendar, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { TextingConversationsSection } from "@/components/TextingConversationsSection";
import { FrontDoorVisual } from "@/components/FrontDoorVisual";


function WorkflowSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "Missed call detected",
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded p-4">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-5 w-5 text-red-600" />
              <span className="font-bold text-sm">Missed Call</span>
            </div>
            <div className="text-sm text-foreground/80 space-y-1">
              <div><span className="font-semibold">Time:</span> 4:38 PM</div>
              <div><span className="font-semibold">Caller:</span> Unknown</div>
              <div><span className="font-semibold">Status:</span> No voicemail left</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground italic">Fixate starts the conversation immediately</p>
        </div>
      ),
    },
    {
      title: "Fixate keeps them engaged",
      content: (
        <div className="space-y-3 bg-gray-50 rounded p-4">
          <div className="flex justify-end mb-2">
            <div className="bg-blue-600 text-white text-sm rounded-lg px-3 py-2 max-w-xs">
              Hi! Thanks for calling. What can we help you with today?
            </div>
          </div>
          <div className="flex justify-start mb-2">
            <div className="bg-gray-200 text-foreground text-sm rounded-lg px-3 py-2 max-w-xs">
              Water heater is leaking
            </div>
          </div>
          <div className="flex justify-end mb-2">
            <div className="bg-blue-600 text-white text-sm rounded-lg px-3 py-2 max-w-xs">
              How urgent is this?
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-gray-200 text-foreground text-sm rounded-lg px-3 py-2 max-w-xs">
              Pretty urgent, water everywhere
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Job details captured",
      content: (
        <div className="bg-gray-50 rounded p-4 space-y-3">
          <div className="border-b pb-3">
            <div className="text-xs font-semibold text-muted-foreground mb-1">JOB SUMMARY</div>
            <div className="space-y-2 text-sm">
              <div><span className="font-semibold">Issue:</span> Water heater leak</div>
              <div><span className="font-semibold">Urgency:</span> High</div>
              <div><span className="font-semibold">Location:</span> 1842 Cedar Dr, Austin TX</div>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-muted-foreground mb-1">NOTES</div>
            <div className="text-sm">Water everywhere, needs immediate attention</div>
          </div>
        </div>
      ),
    },
    {
      title: "Ready to confirm",
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded p-3">
            <div className="text-sm font-semibold text-green-900 mb-1">✓ Customer still engaged</div>
            <div className="text-xs text-green-800">Callback recommended within 2 hours</div>
          </div>
          <div className="space-y-2">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold uppercase tracking-wide h-10">
              Call Customer
            </Button>
            <Button variant="outline" className="w-full border-2 border-foreground text-foreground hover:bg-foreground/10 font-display font-bold uppercase tracking-wide h-10">
              Mark Confirmed
            </Button>
          </div>
          <div className="text-xs text-muted-foreground flex items-center gap-1">
            <MessageCircle className="h-3 w-3" />
            Transcript attached
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Step indicator */}
      <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
        Step {currentSlide + 1} of 4
      </div>

      {/* Slide container */}
      <div className="border-4 border-border bg-white rounded p-6 min-h-80 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-display font-black mb-6">{slides[currentSlide].title}</h3>
          <div>{slides[currentSlide].content}</div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2 justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-8" : "bg-border w-2 hover:bg-border/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Missed Call Recovery */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-background">
        {/* Full background image - kitchen with plumber and phone (VISIBLE, NOT BLURRED) */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663338939330/xwSAWpxtwDSswzup.png"
            alt="Plumber in kitchen with missed call on phone"
            className="w-full h-full object-cover"
          />
          {/* Subtle dark overlay only on left side for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
        </div>
        
        {/* Content layer */}
        <div className="container relative z-10 py-20 md:py-0 w-full">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="max-w-xl">
              <h1 className="text-6xl md:text-7xl font-display font-black leading-tight mb-8">
                Unanswered calls become dispatch-ready jobs.
              </h1>
              <p className="text-lg md:text-xl font-body text-foreground/90 mb-6 leading-relaxed">
                Instantly engages missed callers. No forms. No voicemails. Built specifically for plumbers.
              </p>
              <p className="text-lg md:text-xl font-body text-foreground/90 mb-12 leading-relaxed">
                When a plumber can't answer the phone, Fixate handles the call the way a real person would. It keeps the customer there, gathers the job details, urgency, and location, and holds the job until the plumber calls back to confirm. Missed calls don't turn into dead voicemails or a form to fill out. They turn into real jobs, ready to confirm.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/demo">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold uppercase tracking-wide px-8 h-14 btn-press whitespace-nowrap">
                    Schedule Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" className="border-2 border-foreground text-foreground hover:bg-foreground/10 font-display font-bold uppercase tracking-wide px-8 h-14 whitespace-nowrap">
                  See how it works
                </Button>
              </div>
              
              <div className="text-xs font-mono uppercase tracking-widest text-foreground/60">
                Trusted by 2,400+ service companies
              </div>
            </div>
            
            {/* Right: Dark Semi-Transparent Overlay Card */}
            <div className="relative hidden md:flex md:justify-end md:pr-12">
              <div className="rounded-lg p-8 relative overflow-hidden" style={{backgroundColor: 'rgba(40, 65, 105, 0.60)', backdropFilter: 'blur(10px)', border: '1px solid rgba(100, 150, 210, 0.3)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)', width: '630px', height: '449px'}}>
                {/* Content */}
                <div className="relative z-10 space-y-2.5 text-base leading-relaxed font-body">
                  <p className="text-blue-100"><span className="font-bold">CALL RECOVERED:</span> Water Heater Repair</p>
                  <p className="text-blue-100"><span className="font-bold">SYMPTOMS:</span> Leak found at base of tank</p>
                  <p className="text-blue-100"><span className="font-bold">ISSUE:</span> Heating Element Failure</p>
                  <p className="text-blue-100"><span className="font-bold">PRIORITY:</span> Standard</p>
                  <div className="h-px bg-blue-300/30 my-4"></div>
                  <p className="text-blue-100"><span className="font-bold">LEAD SOURCE:</span> Missed Call 4:38PM</p>
                  <p className="text-blue-100"><span className="font-bold">LOCATION:</span> 1842 Cedar Dr, Austin TX</p>
                  <div className="h-px bg-blue-300/30 my-4"></div>
                  <p className="text-blue-100"><span className="font-bold">DETAILS:</span> Customer expressed concern about active leakage at the base. Transcript attached. Callback recommended within 2 hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </section>

      {/* Workflow Slideshow Section */}
      <section className="py-24 bg-background border-b-4 border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: Headline & Subtext */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-display font-black leading-tight">
                What happens after a missed call
              </h2>
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                A simple workflow that turns a missed call into a dispatch-ready job.
              </p>
              {/* Micro-copy */}
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-body text-foreground">No setup required</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-body text-foreground">No training needed</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-body text-foreground">One click to call back</span>
                </div>
              </div>
            </div>

            {/* Right: Slideshow */}
            <WorkflowSlideshow />
          </div>
        </div>
      </section>

      {/* Outcome Framework Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="space-y-12">
            {/* Section Heading */}
            <div className="space-y-3">
              <h2 className="text-5xl md:text-6xl font-display font-black leading-tight">
                Why Fixate outperforms voicemail and SMS autoresponders
              </h2>
              <p className="text-lg font-body text-muted-foreground leading-relaxed max-w-2xl">
                Missed-call systems stop at a message or a link. Fixate keeps the customer engaged and completes the job intake before the plumber calls back.
              </p>
            </div>

            {/* Three-Column Comparison */}
            <div className="grid md:grid-cols-3 gap-12">
            {/* Customer Experience */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-primary flex items-center justify-center">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-display font-black">
                Customer Experience
              </h3>
              <div className="metric-lockup space-y-2">
                <div className="number">70–90%</div>
                <div className="label">Customer engagement rate after missed calls</div>
                <div className="text-xs font-body text-muted-foreground mt-2">(Engagement comparison — voicemail callbacks typically see ~5–10% engagement, while basic SMS or form-based autoresponders see ~10–15%.)</div>
              </div>
              <p className="text-base font-body text-muted-foreground leading-relaxed">
                Engagement means a full intake — not a single reply. Fixate immediately continues the conversation, gathers the complete situation, and keeps the customer in the loop until the plumber calls back.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-body">No dead voicemails</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-body">No generic "please call us back" dead ends</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-body">Customers stay engaged</span>
                </li>
              </ul>
            </div>

            {/* Job Recovery */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-secondary flex items-center justify-center">
                <Calendar className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-3xl font-display font-black">
                Job Recovery
              </h3>
              <div className="metric-lockup space-y-2">
                <div className="number">2–3×</div>
                <div className="label">More missed calls turning into real jobs</div>
              </div>
              <p className="text-xs font-body text-muted-foreground mb-3">
                Equivalent to ~30–50% of otherwise lost missed calls recovered, compared to voicemail (≈5–10%) and basic SMS autoresponders (≈10–15%).
              </p>
              <p className="text-base font-body text-muted-foreground leading-relaxed">
                These are jobs that would have been lost. Intake is completed before the callback. Plumbers call back to confirm, not chase. Full job context means faster booking decisions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-body">Job details ready for your confirmation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-body">Urgency clearly identified</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-body">Location confirmed</span>
                </li>
              </ul>
            </div>

            {/* Callback Quality */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-accent flex items-center justify-center">
                <Phone className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-3xl font-display font-black">
                Callback Quality
              </h3>
              <div className="metric-lockup space-y-2">
                <div className="number">Warm</div>
                <div className="label">callbacks with a job ready to confirm</div>
              </div>
              <p className="text-xs font-body text-muted-foreground mb-3">
                Callbacks happen with context, not guesswork.
              </p>
              <p className="text-base font-body text-muted-foreground leading-relaxed">
                No re-explaining the issue. No guessing urgency. Plumbers call back to confirm, not chase. Faster booking conversations, better use of time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-body">Clear job context before the callback</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-body">Call to confirm, not investigate</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-body">No re-explaining the issue</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* Built for How Plumbing Work Actually Happens Section */}
      <section className="py-24" style={{ backgroundColor: '#F5F8FC' }}>
        <div className="container">
          <h2 className="text-5xl font-display font-black mb-6">
            Built for how plumbing work actually happens
          </h2>
          <p className="text-lg font-body text-muted-foreground leading-relaxed max-w-3xl mb-16">
            Missed calls don't happen because plumbers don't care — they happen because they're busy. Fixate fills the gaps.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Solo Operator */}
            <div className="bg-card border-4 border-border overflow-hidden shadow-sm" style={{ borderLeftColor: 'var(--color-primary, #2563eb)' }}>
              <img src="https://private-us-east-1.manuscdn.com/sessionFile/ytVkA8orLPhOWK1vpBFLd2/sandbox/c6oSv4kfYl8dbmiOkRaSC9-img-1_1770660036000_na1fn_c29sby1vcGVyYXRvcg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveXRWa0E4b3JMUGhPV0sxdnBCRkxkMi9zYW5kYm94L2M2b1N2NGtmWWw4ZGJtaU9rUmFTQzktaW1nLTFfMTc3MDY2MDAzNjAwMF9uYTFmbl9jMjlzYnkxdmNHVnlZWFJ2Y2cuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qXfSNV44QT2P1QkKlVV3HMx-y6cPO5fmtaS2EXfoEabIqSqQRZa4CClxWtfp4fPtKLVZxE-6Pm8xY-pOIYHXLQDvImH1HrPaTRt2jKRDkaGVYITdvzGPCamCZ3s4Cv9jbDrkhSm65fw6Gmv11~zz1KDgTFkRSLTgR1Who6~x848L8c-thuujKiY2o~jRoUlCg7Y0nebRPqxhHwkOIbJ52xi9BGPpxlRgXTT1sayk0MsMsQ8TczDb9WmyO4Tg5Iiny3a6~TBSBX~z8lbjEGWUDY33ei1y0lGyZ11oWhZrQ3jnQz5LIXJaKUe1n~gbzi8E485SRHRMjMq5dGljySPHTg__" alt="Solo Operator" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-display font-black mb-3">Solo Operator</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  Keeps customers engaged while you're on a job. Call back when you're free with the details already collected.
                </p>
              </div>
            </div>

            {/* Card 2: Small Team */}
            <div className="bg-card border-4 border-border overflow-hidden shadow-sm" style={{ borderLeftColor: 'var(--color-primary, #2563eb)' }}>
              <img src="https://private-us-east-1.manuscdn.com/sessionFile/ytVkA8orLPhOWK1vpBFLd2/sandbox/c6oSv4kfYl8dbmiOkRaSC9-img-2_1770660029000_na1fn_c21hbGwtdGVhbQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveXRWa0E4b3JMUGhPV0sxdnBCRkxkMi9zYW5kYm94L2M2b1N2NGtmWWw4ZGJtaU9rUmFTQzktaW1nLTJfMTc3MDY2MDAyOTAwMF9uYTFmbl9jMjFoYkd3dGRHVmhiUS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZY5FH1FrfHq0CyEjMibHwUOi4kkboFqZYL9Xt-qcBYTYn-Zp96jkv3EVYlSALuls5vV6KJJnWg1w9lMlfF0rdXJGlTQt51OoTPeE4XFitT2589fR0flijRZhE~DPr3fXfOabO0SIJbD2CAB024FGYwsEv8R5celqRFwWU6bCh9wLjB1LsA-EnyDM2i6kbCfLAVy8ctCbo-9SWgFok2U8qI89yN21aVLhgPg49pk8kaQPBOLSzg585G6wroudhR8QgvOnVkK-rDyoYu4wO6z3x9gdbHXrS22JrBVyyZho0iLJX2fXgM-Mo4iDfDEprpsA8A6YcVsIW-Rw~TYieY3B3Q__" alt="Small Team" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-display font-black mb-3">Small & Mid-Size Teams</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  Handles overflow during busy days, weekends, and after hours. Jobs don't disappear while your team is stretched.
                </p>
              </div>
            </div>

            {/* Card 3: High-Volume Shop */}
            <div className="bg-card border-4 border-border overflow-hidden shadow-sm" style={{ borderLeftColor: 'var(--color-primary, #2563eb)' }}>
              <img src="https://private-us-east-1.manuscdn.com/sessionFile/ytVkA8orLPhOWK1vpBFLd2/sandbox/c6oSv4kfYl8dbmiOkRaSC9-img-3_1770660022000_na1fn_aGlnaC12b2x1bWUtc2hvcA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveXRWa0E4b3JMUGhPV0sxdnBCRkxkMi9zYW5kYm94L2M2b1N2NGtmWWw4ZGJtaU9rUmFTQzktaW1nLTNfMTc3MDY2MDAyMjAwMF9uYTFmbl9hR2xuYUMxMmIyeDFiV1V0YzJodmNBLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ve9X~yBLTnBcjnuqpcIh9EEVQASjTmBGKeFjsFjul8dR0IUlzGkg2u9xzLig~IQfifrh2e1iyL75kuYDFTND1CO7cE1tDQ-vUIo6wIbl6XidpK1vkAm9iNTPEMSvshYfnZqi6KuJB~UdbOGhKn5tCo5hi1eSXedOuR3NNzQ9YN2Abnh2o2I4J1E6Z0lfs7WGZFEevcODYTpF33DVagB-V8C2B3RNbn7o9bTqxynzzEW1LwRwGtWZMGqdRlVDS6T1LdJH9nUsHgYFMK7rlGHsYslY9uC-ryFgiHUh04JQXb7MnPF4CQjY2Mv3j5qE49aEdBfXuGjac6h3OZdJZ5raJg__" alt="High-Volume Shop" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-display font-black mb-3">High-Volume Shops</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  Prevents missed calls from piling up. Reduces front-office pressure without adding staff.
                </p>
              </div>
            </div>

            {/* Card 4: Commercial & Industrial */}
            <div className="bg-card border-4 border-border overflow-hidden shadow-sm" style={{ borderLeftColor: 'var(--color-primary, #2563eb)' }}>
              <img src="https://private-us-east-1.manuscdn.com/sessionFile/ytVkA8orLPhOWK1vpBFLd2/sandbox/c6oSv4kfYl8dbmiOkRaSC9-img-4_1770660048000_na1fn_Y29tbWVyY2lhbC1pbmR1c3RyaWFs.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveXRWa0E4b3JMUGhPV0sxdnBCRkxkMi9zYW5kYm94L2M2b1N2NGtmWWw4ZGJtaU9rUmFTQzktaW1nLTRfMTc3MDY2MDA0ODAwMF9uYTFmbl9ZMjl0YldWeVkybGhiQzFwYm1SMWMzUnlhV0ZzLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=hg14fCrvLWlKNRyBbzilfGh5Q-j481qBL8CVHJU9lIc-YXyQAdPl61S5gwIBGSnn05dohs8wAlNCoVfQFkYXucSDm4lRnAwwXPtoerNk8XjLfPJ2GL2phyLHNqPxYmp4zah8FR0hULQuQq5UiBLbBLFb3av3rcXUvIgZsnCVA-c9No1wt6bSVAfjyE0SEGwWJWhlwtYvojLhAFzBmlDlfdc2ELXOoVdCfiSeT-KV305aD2JlzokE3EKd1aRPsHU21iNkSnRvdtUdN8tsyvJe408vm7MPwSrRd9o5E6sywpRsXq3~~CHOiA3SUxsHBL66XgZT489zvhybfzB7dRN76w__" alt="Commercial & Industrial" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-display font-black mb-3">Commercial & Industrial</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  Captures clear job details, urgency, and location so callbacks are about confirming work, not figuring it out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* Testimonial Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            {/* Headshot */}
            <div className="mb-8 flex justify-center">
              <img src="https://private-us-east-1.manuscdn.com/sessionFile/ytVkA8orLPhOWK1vpBFLd2/sandbox/aXevvtxItHzkFQmrgmU84m-img-1_1770601102000_na1fn_dGVzdGltb25pYWwtaGVhZHNob3Q.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveXRWa0E4b3JMUGhPV0sxdnBCRkxkMi9zYW5kYm94L2FYZXZ2dHhJdEh6a0ZRbXJnbVU4NG0taW1nLTFfMTc3MDYwMTEwMjAwMF9uYTFmbl9kR1Z6ZEdsdGIyNXBZV3d0YUdWaFpITm9iM1EuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=MbtcY4tN0ZVbUPbIrWtWzQl8HO0ar1C-UTTGvpR3uwib~bYEGy16HpmDijOfgxxmYgr-GeYOgSSKguO0ktqESYlVDXQ0DVsXXeAoZcH7dNZ63s2TcYP114S~VvHRhxAQqM8z0xlGy9Wvn0m02SMjM5HQE7P~QCGJ7fOvvCNjyaSrey3v9m8RokpBVlMi17MjNaxiNuG2FG9o5X1GFuISZ1vdDRQQF3frR4BRBwqs281wMuhJShAHguueVoLPfg-rrjdrg5DqmjrwA4WusROnLAj2h2eRRGsNj3uQo7akBcsh4pVRgqTy~6D3861WBQ3IReymq~Fo6JLYMqvIjWvSPA__" alt="Plumbing contractor" className="w-24 h-24 rounded-full object-cover border-4 border-primary object-center" style={{objectPosition: '50% 20%'}} />
            </div>
            <blockquote className="mb-8">
              <p className="text-3xl md:text-4xl font-display font-black leading-tight mb-8">
                "Fixate doesn't just send a text. It keeps the customer there until we can call back. That alone changed everything."
              </p>
            </blockquote>
            <div>
              <p className="text-base font-body font-semibold text-foreground">Plumbing Contractor</p>
              <p className="text-sm font-body text-muted-foreground">6–10 technicians</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* Texting Conversations Section */}
      <TextingConversationsSection />

      {/* Placeholder for old content - will be replaced */}
      {false && (
      <section className="py-24" style={{ backgroundColor: '#F5F8FC' }}>
        <div className="container">
          <h2 className="text-5xl font-display font-black mb-6">
            What customers actually experience
          </h2>
          <p className="text-lg font-body text-muted-foreground leading-relaxed max-w-3xl mb-16">
            When a call is missed, Fixate continues the conversation — gathering the problem, urgency, and details until your team can step in.
          </p>

          {/* Scenario 1: Toilet Issues */}
          <div className="mb-20">
            <h3 className="text-2xl font-display font-black mb-8">🚽 Toilet Issues</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Primary Conversation */}
              <div className="bg-card border-4 border-border p-8 shadow-sm">
                <p className="text-sm font-body text-muted-foreground uppercase tracking-wide mb-6">Clog vs Overflow</p>
                <div className="space-y-4 text-sm font-body">
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">Water is overflowing from the bowl</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-lg px-4 py-2 max-w-xs">Is the water still rising, or has it stopped?</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">Stopped now. Should I turn off the water?</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-lg px-4 py-2 max-w-xs">Yes, turn off the water behind the toilet. How soon do you need this fixed?</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">ASAP. We have guests coming tonight</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border"><strong>Details ready for callback:</strong> Overflow stopped, customer turned off water, urgent (guests tonight)</p>
                </div>
              </div>

              {/* Variants */}
              <div className="space-y-4">
                <div className="bg-card border-4 border-border p-6 shadow-sm">
                  <p className="text-sm font-body font-semibold mb-3">Leak at base (wax ring)</p>
                  <p className="text-xs font-body text-muted-foreground mb-3">"Water pooling under the toilet"</p>
                  <p className="text-xs font-body text-muted-foreground italic">Fixate asks: "Is the water coming from the base or the tank?" → Identifies wax ring failure</p>
                </div>
                <div className="bg-card border-4 border-border p-6 shadow-sm">
                  <p className="text-sm font-body font-semibold mb-3">Tank or supply line leak</p>
                  <p className="text-xs font-body text-muted-foreground mb-3">"Water dripping from the back"</p>
                  <p className="text-xs font-body text-muted-foreground italic">Fixate asks: "Is it dripping from the tank or the connection?" → Narrows to tank or supply line</p>
                </div>
                <div className="bg-card border-4 border-border p-6 shadow-sm">
                  <p className="text-sm font-body font-semibold mb-3">Running toilet / fill valve</p>
                  <p className="text-xs font-body text-muted-foreground mb-3">"Toilet keeps running, water bill is high"</p>
                  <p className="text-xs font-body text-muted-foreground italic">Fixate asks: "Does it run constantly or after flushing?" → Identifies fill valve issue</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scenario 2: Water Heater Problems */}
          <div className="mb-20">
            <h3 className="text-2xl font-display font-black mb-8">🔥 Water Heater Problems</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Primary Conversation */}
              <div className="bg-card border-4 border-border p-8 shadow-sm">
                <p className="text-sm font-body text-muted-foreground uppercase tracking-wide mb-6">No hot water</p>
                <div className="space-y-4 text-sm font-body">
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">No hot water at all</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-lg px-4 py-2 max-w-xs">Is it a gas or electric water heater?</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">Gas. There's a pilot light</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-lg px-4 py-2 max-w-xs">Is the pilot light on or off?</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">Off. I can see it's not lit</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border"><strong>Details ready for callback:</strong> Gas heater, pilot light out, no hot water</p>
                </div>
              </div>

              {/* Variants */}
              <div className="space-y-4">
                <div className="bg-card border-4 border-border p-6 shadow-sm">
                  <p className="text-sm font-body font-semibold mb-3">Not enough hot water</p>
                  <p className="text-xs font-body text-muted-foreground mb-3">"Runs out after 10 minutes"</p>
                  <p className="text-xs font-body text-muted-foreground italic">Fixate asks: "How many people in the house?" → Identifies capacity vs. heating issue</p>
                </div>
                <div className="bg-card border-4 border-border p-6 shadow-sm">
                  <p className="text-sm font-body font-semibold mb-3">Leaking tank</p>
                  <p className="text-xs font-body text-muted-foreground mb-3">"Water pooling around the base"</p>
                  <p className="text-xs font-body text-muted-foreground italic">Fixate asks: "Is it dripping or steady flow?" → Assesses urgency and location</p>
                </div>
                <div className="bg-card border-4 border-border p-6 shadow-sm">
                  <p className="text-sm font-body font-semibold mb-3">Pilot light / ignition issue</p>
                  <p className="text-xs font-body text-muted-foreground mb-3">"Pilot won't stay lit"</p>
                  <p className="text-xs font-body text-muted-foreground italic">Fixate asks: "Does it light but go out, or won't light at all?" → Narrows to thermocouple or ignition</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scenario 3: Installation / Quote Requests */}
          <div className="mb-20">
            <h3 className="text-2xl font-display font-black mb-8">🏗️ Installation / Quote Requests</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Primary Conversation */}
              <div className="bg-card border-4 border-border p-8 shadow-sm">
                <p className="text-sm font-body text-muted-foreground uppercase tracking-wide mb-6">Toilet installation</p>
                <div className="space-y-4 text-sm font-body">
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">Need a new toilet installed</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-lg px-4 py-2 max-w-xs">Do you already have the toilet, or do you need us to provide one?</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">We have it. It's in the master bath</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-lg px-4 py-2 max-w-xs">Perfect. When would you like us to come by?</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">This weekend if possible</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border"><strong>Details ready for callback:</strong> Toilet installation, customer has unit, master bath, weekend preferred</p>
                </div>
              </div>

              {/* Variants */}
              <div className="space-y-4">
                <div className="bg-card border-4 border-border p-6 shadow-sm">
                  <p className="text-sm font-body font-semibold mb-3">Water heater replacement</p>
                  <p className="text-xs font-body text-muted-foreground mb-3">"Need a new water heater"</p>
                  <p className="text-xs font-body text-muted-foreground italic">Fixate asks: "Gas or electric? Do you have the unit?" → Captures scope and timeline</p>
                </div>
                <div className="bg-card border-4 border-border p-6 shadow-sm">
                  <p className="text-sm font-body font-semibold mb-3">Fixture upgrade</p>
                  <p className="text-xs font-body text-muted-foreground mb-3">"Want to replace the kitchen faucet"</p>
                  <p className="text-xs font-body text-muted-foreground italic">Fixate asks: "Do you have the new faucet?" → Identifies if supply is needed</p>
                </div>
                <div className="bg-card border-4 border-border p-6 shadow-sm">
                  <p className="text-sm font-body font-semibold mb-3">Remodel coordination</p>
                  <p className="text-xs font-body text-muted-foreground mb-3">"Bathroom remodel, need plumbing work"</p>
                  <p className="text-xs font-body text-muted-foreground italic">Fixate asks: "Is this new rough-in or fixture replacement?" → Clarifies scope</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scenario 4: After-Hours Emergency */}
          <div className="mb-20">
            <h3 className="text-2xl font-display font-black mb-8">🚨 After-Hours Emergency</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Primary Conversation */}
              <div className="bg-card border-4 border-border p-8 shadow-sm">
                <p className="text-sm font-body text-muted-foreground uppercase tracking-wide mb-6">Active flooding</p>
                <div className="space-y-4 text-sm font-body">
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">Water everywhere in the basement!!!</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-lg px-4 py-2 max-w-xs">Can you turn off the main water valve?</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">Yes, it's off. Where is it coming from?</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-lg px-4 py-2 max-w-xs">Is it from a pipe, water heater, or sump pump?</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">Looks like a pipe burst near the furnace</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border"><strong>Details ready for callback:</strong> Active flooding, main valve off, burst pipe near furnace, URGENT</p>
                </div>
              </div>

              {/* Variants */}
              <div className="space-y-4">
                <div className="bg-card border-4 border-border p-6 shadow-sm">
                  <p className="text-sm font-body font-semibold mb-3">Sewage backup</p>
                  <p className="text-xs font-body text-muted-foreground mb-3">"Sewage coming up in the basement"</p>
                  <p className="text-xs font-body text-muted-foreground italic">Fixate asks: "Is it from one fixture or all drains?" → Identifies main line vs. fixture issue</p>
                </div>
                <div className="bg-card border-4 border-border p-6 shadow-sm">
                  <p className="text-sm font-body font-semibold mb-3">No water to the house</p>
                  <p className="text-xs font-body text-muted-foreground mb-3">"No water anywhere"</p>
                  <p className="text-xs font-body text-muted-foreground italic">Fixate asks: "Is the main valve open?" → Checks for simple shutoff first</p>
                </div>
                <div className="bg-card border-4 border-border p-6 shadow-sm">
                  <p className="text-sm font-body font-semibold mb-3">Urgent but non-emergency</p>
                  <p className="text-xs font-body text-muted-foreground mb-3">"Leak in the kitchen, need someone tonight"</p>
                  <p className="text-xs font-body text-muted-foreground italic">Fixate asks: "Can you turn off the water to the sink?" → Mitigates while awaiting callback</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scenario 5: Sink / Drain Issues */}
          <div className="mb-20">
            <h3 className="text-2xl font-display font-black mb-8">🚰 Sink / Drain Issues</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Primary Conversation */}
              <div className="bg-card border-4 border-border p-8 shadow-sm">
                <p className="text-sm font-body text-muted-foreground uppercase tracking-wide mb-6">Slow drain</p>
                <div className="space-y-4 text-sm font-body">
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">Kitchen sink draining really slow</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-lg px-4 py-2 max-w-xs">Is it the single sink or both sides?</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">Just the left side</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-lg px-4 py-2 max-w-xs">Have you tried plunging it or using drain cleaner?</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">Plunged it but didn't help</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border"><strong>Details ready for callback:</strong> Left kitchen sink, slow drain, plunging didn't work</p>
                </div>
              </div>

              {/* Variants */}
              <div className="space-y-4">
                <div className="bg-card border-4 border-border p-6 shadow-sm">
                  <p className="text-sm font-body font-semibold mb-3">Standing water</p>
                  <p className="text-xs font-body text-muted-foreground mb-3">"Water sitting in the sink"</p>
                  <p className="text-xs font-body text-muted-foreground italic">Fixate asks: "Is it a clog or backup?" → Identifies if it's fixture or main line</p>
                </div>
                <div className="bg-card border-4 border-border p-6 shadow-sm">
                  <p className="text-sm font-body font-semibold mb-3">Leak under sink</p>
                  <p className="text-xs font-body text-muted-foreground mb-3">"Water dripping from under the sink"</p>
                  <p className="text-xs font-body text-muted-foreground italic">Fixate asks: "Is it from the P-trap or supply line?" → Narrows to fixture supply or drain</p>
                </div>
                <div className="bg-card border-4 border-border p-6 shadow-sm">
                  <p className="text-sm font-body font-semibold mb-3">Garbage disposal related</p>
                  <p className="text-xs font-body text-muted-foreground mb-3">"Disposal is jammed"</p>
                  <p className="text-xs font-body text-muted-foreground italic">Fixate asks: "Is it making noise or completely stuck?" → Identifies if it's jam or motor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scenario 6: Commercial Plumbing Call */}
          <div className="mb-16">
            <h3 className="text-2xl font-display font-black mb-8">🏢 Commercial Plumbing Call</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Primary Conversation */}
              <div className="bg-card border-4 border-border p-8 shadow-sm">
                <p className="text-sm font-body text-muted-foreground uppercase tracking-wide mb-6">Multi-fixture issue</p>
                <div className="space-y-4 text-sm font-body">
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">Multiple bathrooms on the second floor aren't working</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-lg px-4 py-2 max-w-xs">Is it no water, slow drains, or something else?</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">No water at all. First floor is fine</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-lg px-4 py-2 max-w-xs">This is likely a supply line issue on that floor. Can you send someone during business hours?</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">Yes, anytime after 2pm works</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border"><strong>Details ready for callback:</strong> Commercial, second floor bathrooms, no water, first floor OK, after 2pm preferred</p>
                </div>
              </div>

              {/* Variants */}
              <div className="space-y-4">
                <div className="bg-card border-4 border-border p-6 shadow-sm">
                  <p className="text-sm font-body font-semibold mb-3">Business hours constraint</p>
                  <p className="text-xs font-body text-muted-foreground mb-3">"Need this fixed before 9am tomorrow"</p>
                  <p className="text-xs font-body text-muted-foreground italic">Fixate asks: "Can you describe the issue?" → Captures urgency and problem scope</p>
                </div>
                <div className="bg-card border-4 border-border p-6 shadow-sm">
                  <p className="text-sm font-body font-semibold mb-3">Maintenance vs. emergency</p>
                  <p className="text-xs font-body text-muted-foreground mb-3">"Preventive maintenance on the main line"</p>
                  <p className="text-xs font-body text-muted-foreground italic">Fixate asks: "Is this urgent or can it be scheduled?" → Clarifies priority</p>
                </div>
                <div className="bg-card border-4 border-border p-6 shadow-sm">
                  <p className="text-sm font-body font-semibold mb-3">Property manager calling</p>
                  <p className="text-xs font-body text-muted-foreground mb-3">"Tenant reported a leak in unit 204"</p>
                  <p className="text-xs font-body text-muted-foreground italic">Fixate asks: "Is the tenant home? What type of leak?" → Captures access and scope</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reinforcement Line */}
          <div className="text-center pt-8 border-t border-border">
            <p className="text-sm font-body text-muted-foreground italic">
              Different plumbing problems need different follow-ups. Fixate adapts automatically.
            </p>
          </div>
        </div>
      </section>
      )}

      <hr className="divider-industrial" />

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-5xl font-display font-black mb-16 text-center">
            Common questions about Fixate
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-4">
            {/* FAQ Item 1 */}
            <details className="bg-card border-4 border-border p-6 cursor-pointer group">
              <summary className="flex items-center justify-between font-display font-black text-lg text-foreground">
                Is Fixate just an automated SMS?
                <span className="text-2xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <p className="text-base font-body text-muted-foreground mt-4">
                No. Fixate continues the conversation, asks the right intake questions, and keeps the customer engaged until the plumber calls back.
              </p>
            </details>

            {/* FAQ Item 2 */}
            <details className="bg-card border-4 border-border p-6 cursor-pointer group">
              <summary className="flex items-center justify-between font-display font-black text-lg text-foreground">
                Does Fixate book jobs automatically?
                <span className="text-2xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <p className="text-base font-body text-muted-foreground mt-4">
                No. Fixate prepares the job and hands it back for a warm callback and confirmation.
              </p>
            </details>

            {/* FAQ Item 3 */}
            <details className="bg-card border-4 border-border p-6 cursor-pointer group">
              <summary className="flex items-center justify-between font-display font-black text-lg text-foreground">
                What happens if the customer doesn't respond?
                <span className="text-2xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <p className="text-base font-body text-muted-foreground mt-4">
                Fixate attempts engagement immediately after the missed call and captures responses when customers are most likely to reply.
              </p>
            </details>

            {/* FAQ Item 4 */}
            <details className="bg-card border-4 border-border p-6 cursor-pointer group">
              <summary className="flex items-center justify-between font-display font-black text-lg text-foreground">
                How is this different from voicemail or missed-call text back?
                <span className="text-2xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <p className="text-base font-body text-muted-foreground mt-4">
                Voicemail and autoresponders stop at a message. Fixate completes job intake before the callback.
              </p>
            </details>

            {/* FAQ Item 5 */}
            <details className="bg-card border-4 border-border p-6 cursor-pointer group">
              <summary className="flex items-center justify-between font-display font-black text-lg text-foreground">
                What if the issue is urgent?
                <span className="text-2xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <p className="text-base font-body text-muted-foreground mt-4">
                Fixate identifies urgency so plumbers know how to prioritize the callback.
              </p>
            </details>

            {/* FAQ Item 6 */}
            <details className="bg-card border-4 border-border p-6 cursor-pointer group">
              <summary className="flex items-center justify-between font-display font-black text-lg text-foreground">
                Can I control what Fixate says?
                <span className="text-2xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <p className="text-base font-body text-muted-foreground mt-4">
                Yes. Messaging and intake flow are configurable.
              </p>
            </details>

            {/* FAQ Item 7 */}
            <details className="bg-card border-4 border-border p-6 cursor-pointer group">
              <summary className="flex items-center justify-between font-display font-black text-lg text-foreground">
                Do I need to change my phone system or CRM?
                <span className="text-2xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <p className="text-base font-body text-muted-foreground mt-4">
                No. Fixate works alongside existing tools.
              </p>
            </details>
          </div>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* Front Door Section */}
      <section className="py-24" style={{ backgroundColor: '#0F3B7F' }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            {/* Left: Text Content */}
            <div className="pr-8">
              <h2 className="text-5xl font-display font-black mb-6 text-white">
                Fixate is the front door to your operation
              </h2>
              <div className="space-y-6 mb-12">
                <p className="text-lg font-body text-blue-100">
                  Jobber, Housecall Pro, and ServiceTitan manage jobs.
                </p>
                <p className="text-lg font-body text-blue-100">
                  Fixate makes sure jobs exist in the first place.
                </p>
                <p className="text-lg font-body text-blue-100">
                  Fixate captures missed calls, completes intake, and hands off dispatch-ready jobs.
                </p>
              </div>
              
              {/* Flow Diagram */}
              <div className="flex items-center justify-start gap-3 flex-wrap">
                <div className="flex items-center justify-center w-24 h-24 rounded-lg bg-white/10 border-2 border-white/30">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <div className="text-white text-lg font-bold">→</div>
                <div className="flex items-center justify-center w-24 h-24 rounded-lg bg-white/10 border-2 border-white/30">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <div className="text-white text-lg font-bold">→</div>
                <div className="flex items-center justify-center w-24 h-24 rounded-lg bg-white/10 border-2 border-white/30">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="mt-6 text-blue-100 text-xs font-body">
                <p>Missed Call → Fixate → Jobber / Housecall Pro / ServiceTitan</p>
              </div>
            </div>
            
            {/* Right: Door Visual */}
            <div className="flex items-center justify-center">
              <FrontDoorVisual />
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* Pricing Preview Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center">
            <h2 className="text-5xl font-display font-black mb-4">
              One system. One price.
            </h2>
            <p className="text-lg font-body text-muted-foreground mb-16">
              Everything included. No contracts. No tiers.
            </p>
            
            <div className="bg-card border-4 border-primary p-12 max-w-md mx-auto">
              <div className="mb-8">
                <h3 className="text-2xl font-display font-black mb-2">Fixate Core</h3>
                <p className="text-base font-body text-muted-foreground mb-6">Turns missed calls into dispatch-ready jobs.</p>
                <div className="mb-8">
                  <span className="text-5xl font-display font-black text-primary">$129</span>
                  <span className="text-base font-body text-muted-foreground ml-2">/ month</span>
                </div>
              </div>
              <Link href="/demo">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold uppercase tracking-wide h-12 btn-press">
                  Schedule a demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container text-center">
          <h2 className="text-5xl md:text-6xl font-display font-black mb-8">
            See Fixate in action
          </h2>
          <p className="text-lg font-body text-muted-foreground mb-12 max-w-2xl mx-auto">
            Schedule a 45-minute demo with our team. We'll show you how Fixate captures missed calls, automates intake, and gets your team operational immediately.
          </p>
          <Link href="/demo">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold uppercase tracking-wide px-12 h-14 btn-press text-base">
              Schedule Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t-4 border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-display font-bold text-foreground mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/features"><span className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Features</span></Link></li>
                <li><Link href="/pricing"><span className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Pricing</span></Link></li>
                <li><Link href="/demo"><span className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Demo</span></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-foreground mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-foreground mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-border pt-8 text-center">
            <p className="text-xs font-body text-muted-foreground uppercase tracking-wider">
              © 2026 Fixate. All rights reserved. Built for home service businesses.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
