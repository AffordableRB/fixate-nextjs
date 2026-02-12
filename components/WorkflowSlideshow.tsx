'use client';

import { useState, useEffect, useCallback } from 'react';

const steps = [
  {
    number: '01',
    title: 'Missed Call Detected',
    description:
      'The moment a call goes unanswered, Fixate activates. No delay. No missed window.',
    detail:
      'Your customer called. You were on a job, driving, or with another client. Instead of voicemail, Fixate steps in instantly.',
  },
  {
    number: '02',
    title: 'Customer Engaged via SMS',
    description:
      'Fixate reaches out to the caller immediately with a personalized SMS conversation.',
    detail:
      'Not a generic "we missed your call" text. A real, intelligent conversation that keeps your customer engaged and on the line.',
  },
  {
    number: '03',
    title: 'AI Intake Conversation',
    description:
      'Multi-turn dialogue captures the problem, urgency, location, and availability.',
    detail:
      'Fixate asks the right questions: What\'s the issue? How urgent? Where are you located? When are you available? Every detail captured automatically.',
  },
  {
    number: '04',
    title: 'Job Ready for Dispatch',
    description:
      'Complete job summary ready for your callback. Prioritized by urgency.',
    detail:
      'When you\'re ready, you have everything: customer name, problem description, urgency level, location, and availability. Call back informed, close the job.',
  },
];

export default function WorkflowSlideshow() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextStep = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextStep]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Step indicators */}
      <div className="flex gap-2 mb-10">
        {steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`flex items-center gap-2 px-4 py-2.5 font-display font-bold text-sm uppercase tracking-wide transition-all ${
              idx === activeStep
                ? 'bg-primary text-white'
                : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
            }`}
          >
            <span className="font-mono text-xs">{step.number}</span>
            <span className="hidden sm:inline">{step.title}</span>
          </button>
        ))}
      </div>

      {/* Active step content */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <div className="flex items-baseline gap-3 mb-4">
            <span className="font-mono text-5xl font-bold text-primary/20">
              {steps[activeStep].number}
            </span>
            <h3 className="text-3xl font-display font-black text-foreground">
              {steps[activeStep].title}
            </h3>
          </div>
          <p className="text-lg text-foreground mb-4 leading-relaxed">
            {steps[activeStep].description}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {steps[activeStep].detail}
          </p>
        </div>

        {/* Visual representation */}
        <div className="bg-card border border-border p-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-success rounded-full" />
              <span className="font-mono text-sm text-muted-foreground uppercase">
                Step {steps[activeStep].number} Active
              </span>
            </div>

            {/* Simulated conversation/status */}
            {activeStep === 0 && (
              <div className="space-y-3">
                <div className="bg-destructive/10 border border-destructive/20 p-4">
                  <p className="font-mono text-sm text-destructive font-bold">MISSED CALL DETECTED</p>
                  <p className="text-sm text-muted-foreground mt-1">Incoming call from (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Duration: 0:12 &mdash; No answer</p>
                </div>
                <div className="bg-success/10 border border-success/20 p-4">
                  <p className="font-mono text-sm text-success font-bold">FIXATE ACTIVATED</p>
                  <p className="text-sm text-muted-foreground mt-1">Engaging customer in 2 seconds...</p>
                </div>
              </div>
            )}
            {activeStep === 1 && (
              <div className="space-y-3">
                <div className="bg-primary/5 border border-primary/20 p-4">
                  <p className="text-sm font-bold text-primary">Fixate</p>
                  <p className="text-sm text-foreground mt-1">&quot;Hi! I saw you just called Smith Plumbing. I can help get your job started right now. What&apos;s going on?&quot;</p>
                </div>
                <div className="bg-secondary p-4 ml-8">
                  <p className="text-sm font-bold text-foreground">Customer</p>
                  <p className="text-sm text-foreground mt-1">&quot;My kitchen sink is backed up and it&apos;s getting worse&quot;</p>
                </div>
              </div>
            )}
            {activeStep === 2 && (
              <div className="space-y-3">
                <div className="bg-primary/5 border border-primary/20 p-4">
                  <p className="text-sm font-bold text-primary">Fixate</p>
                  <p className="text-sm text-foreground mt-1">&quot;Got it. How urgent is this &mdash; is there active flooding or water damage?&quot;</p>
                </div>
                <div className="bg-secondary p-4 ml-8">
                  <p className="text-sm font-bold text-foreground">Customer</p>
                  <p className="text-sm text-foreground mt-1">&quot;Not flooding yet but the water is rising in the sink&quot;</p>
                </div>
                <div className="bg-primary/5 border border-primary/20 p-4">
                  <p className="text-sm font-bold text-primary">Fixate</p>
                  <p className="text-sm text-foreground mt-1">&quot;Understood. What&apos;s your address so we can get you scheduled?&quot;</p>
                </div>
              </div>
            )}
            {activeStep === 3 && (
              <div className="space-y-3">
                <div className="border border-border p-4">
                  <p className="font-mono text-xs text-muted-foreground uppercase mb-3">Job Summary</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Customer</span>
                      <span className="font-bold">Sarah Johnson</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Issue</span>
                      <span className="font-bold">Kitchen sink backup</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Urgency</span>
                      <span className="font-bold text-destructive">Medium-High</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location</span>
                      <span className="font-bold">1234 Oak St, Austin</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Available</span>
                      <span className="font-bold">Today or tomorrow AM</span>
                    </div>
                  </div>
                </div>
                <div className="bg-success/10 border border-success/20 p-4 text-center">
                  <p className="font-mono text-sm text-success font-bold">READY FOR DISPATCH</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="flex gap-1 mt-8">
        {steps.map((_, idx) => (
          <div key={idx} className="flex-1 h-1 bg-secondary overflow-hidden">
            <div
              className={`h-full bg-primary transition-all duration-300 ${
                idx < activeStep
                  ? 'w-full'
                  : idx === activeStep
                  ? 'w-full animate-pulse'
                  : 'w-0'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
