'use client';

import { useState } from 'react';

const tabs = [
  {
    id: 'recovery',
    label: 'Instant Recovery',
    title: 'Missed call? Fixate is already on it.',
    description:
      'The moment a call goes unanswered, Fixate engages the customer via SMS. No delay. No lost opportunity. Your caller gets a response in seconds, not hours.',
    features: [
      'Triggers within seconds of a missed call',
      'Personalized SMS, not a generic autoresponder',
      'Keeps the customer engaged while you finish your current job',
      'Works 24/7 including weekends and after hours',
    ],
  },
  {
    id: 'intake',
    label: 'Live Intake',
    title: 'A full intake conversation, handled automatically.',
    description:
      'Fixate doesn\'t just say "we\'ll call you back." It runs a complete, multi-turn intake conversation that captures every detail you need to dispatch the job.',
    features: [
      'Multi-turn AI dialogue captures problem type and description',
      'Asks about urgency, location, and customer availability',
      'Handles follow-up questions intelligently',
      'Conversation feels natural, not robotic',
    ],
  },
  {
    id: 'urgency',
    label: 'Urgency Detection',
    title: 'Emergency jobs are flagged automatically.',
    description:
      'Not every missed call is equal. Fixate detects urgency from the conversation and flags emergencies so you can prioritize what matters most.',
    features: [
      'AI analyzes conversation for urgency signals',
      'Emergency jobs flagged and separated in your dashboard',
      'Active flooding, gas leaks, and sewage backups detected',
      'Routine jobs queued for normal scheduling',
    ],
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    title: 'Every recovered call, organized and ready.',
    description:
      'The Fixate dashboard gives you real-time visibility into every recovered call, active intake, and completed job summary. Nothing slips through.',
    features: [
      'Real-time intake board with live conversation status',
      'Job summaries with full customer details',
      'Emergency vs. routine job separation',
      'Call recovery log with complete history and metrics',
    ],
  },
];

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState('recovery');
  const active = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 font-display font-bold text-sm uppercase tracking-wide transition-all btn-press ${
              tab.id === activeTab
                ? 'bg-primary text-white'
                : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-3xl font-display font-black text-foreground mb-4">
            {active.title}
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {active.description}
          </p>
        </div>
        <div className="bg-card border border-border p-8">
          <ul className="space-y-4">
            {active.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary text-white flex items-center justify-center font-mono text-xs font-bold mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-foreground leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
