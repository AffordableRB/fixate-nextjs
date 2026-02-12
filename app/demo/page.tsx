'use client';

/*
Design Philosophy: Industrial Modernism - Demo Page
- Progressive qualification form (multi-step)
- Value restatement before asking for information
- Functional form design with clear hierarchy
- Preparation checklist for productive demos
*/

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, ArrowRight, Clock, Users, Target } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";


export default function Demo() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    companyName: "",
    serviceType: "",
    technicianCount: "",
    locationCount: "",
    currentSoftware: "",
    primaryPainPoint: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    contactMethod: "",
  });

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Form submission
      toast.success("Demo request submitted! We'll contact you within 24 hours.");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 bg-background border-b-4 border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge-functional mb-6 inline-block">Schedule a Demo</span>
            <h1 className="text-7xl font-display font-black mb-8 leading-none">
              See how Fixate fits your workflows
            </h1>
            <p className="text-xl font-body text-muted-foreground leading-relaxed mb-12">
              45-minute personalized demo focused on your specific operational challenges. No generic sales pitch—we'll show you exactly how the platform solves your problems.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="flex gap-4">
                <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <div className="font-display font-black text-sm mb-2">45 minutes</div>
                  <div className="text-sm font-body text-muted-foreground">
                    Focused demo of relevant features
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <div className="font-display font-black text-sm mb-2">Live walkthrough</div>
                  <div className="text-sm font-body text-muted-foreground">
                    Real platform, not slides or videos
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Target className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <div className="font-display font-black text-sm mb-2">Q&A included</div>
                  <div className="text-sm font-body text-muted-foreground">
                    Ask about your specific use cases
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <div className={`text-sm font-mono uppercase ${step >= 1 ? 'text-foreground' : 'text-muted-foreground'}`}>
                  01. Business Profile
                </div>
                <div className={`text-sm font-mono uppercase ${step >= 2 ? 'text-foreground' : 'text-muted-foreground'}`}>
                  02. Current State
                </div>
                <div className={`text-sm font-mono uppercase ${step >= 3 ? 'text-foreground' : 'text-muted-foreground'}`}>
                  03. Contact Info
                </div>
              </div>
              <div className="h-1 bg-muted relative">
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="border-4 border-border bg-card p-8">
              {/* Step 1: Business Profile */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-display font-black mb-2">Business profile</h2>
                    <p className="text-sm font-body text-muted-foreground">
                      Help us understand your operation so we can focus the demo on relevant features.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="companyName" className="font-display font-black text-sm uppercase mb-2 block">
                        Company name
                      </Label>
                      <Input
                        id="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="h-12 border-2 border-border"
                        placeholder="Apex HVAC Services"
                      />
                    </div>

                    <div>
                      <Label htmlFor="serviceType" className="font-display font-black text-sm uppercase mb-2 block">
                        Primary service type
                      </Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                      >
                        <SelectTrigger className="h-12 border-2 border-border">
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hvac">HVAC</SelectItem>
                          <SelectItem value="plumbing">Plumbing</SelectItem>
                          <SelectItem value="electrical">Electrical</SelectItem>
                          <SelectItem value="multi-trade">Multi-trade</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="technicianCount" className="font-display font-black text-sm uppercase mb-2 block">
                          Number of field technicians
                        </Label>
                        <Select
                          value={formData.technicianCount}
                          onValueChange={(value) => setFormData({ ...formData, technicianCount: value })}
                        >
                          <SelectTrigger className="h-12 border-2 border-border">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1-10</SelectItem>
                            <SelectItem value="11-25">11-25</SelectItem>
                            <SelectItem value="26-50">26-50</SelectItem>
                            <SelectItem value="51-100">51-100</SelectItem>
                            <SelectItem value="100+">100+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="locationCount" className="font-display font-black text-sm uppercase mb-2 block">
                          Number of locations
                        </Label>
                        <Select
                          value={formData.locationCount}
                          onValueChange={(value) => setFormData({ ...formData, locationCount: value })}
                        >
                          <SelectTrigger className="h-12 border-2 border-border">
                            <SelectValue placeholder="Select count" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2-3">2-3</SelectItem>
                            <SelectItem value="4-5">4-5</SelectItem>
                            <SelectItem value="6+">6+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Current State */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-display font-black mb-2">Current state</h2>
                    <p className="text-sm font-body text-muted-foreground">
                      Understanding your current setup helps us show relevant migration and integration options.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="currentSoftware" className="font-display font-black text-sm uppercase mb-2 block">
                        Current software (if any)
                      </Label>
                      <Input
                        id="currentSoftware"
                        type="text"
                        value={formData.currentSoftware}
                        onChange={(e) => setFormData({ ...formData, currentSoftware: e.target.value })}
                        className="h-12 border-2 border-border"
                        placeholder="ServiceTitan, Housecall Pro, spreadsheets, etc."
                      />
                    </div>

                    <div>
                      <Label htmlFor="primaryPainPoint" className="font-display font-black text-sm uppercase mb-2 block">
                        Primary pain point
                      </Label>
                      <Select
                        value={formData.primaryPainPoint}
                        onValueChange={(value) => setFormData({ ...formData, primaryPainPoint: value })}
                      >
                        <SelectTrigger className="h-12 border-2 border-border">
                          <SelectValue placeholder="Select your biggest challenge" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="scheduling">Scheduling conflicts and inefficiency</SelectItem>
                          <SelectItem value="billing">Slow billing and payment collection</SelectItem>
                          <SelectItem value="communication">Poor office-field communication</SelectItem>
                          <SelectItem value="reporting">Lack of operational visibility</SelectItem>
                          <SelectItem value="growth">Scaling challenges as we grow</SelectItem>
                          <SelectItem value="integration">Current systems don't integrate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="timeline" className="font-display font-black text-sm uppercase mb-2 block">
                        Decision timeline
                      </Label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                      >
                        <SelectTrigger className="h-12 border-2 border-border">
                          <SelectValue placeholder="When are you looking to implement?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">This month</SelectItem>
                          <SelectItem value="quarter">This quarter</SelectItem>
                          <SelectItem value="next-quarter">Next quarter</SelectItem>
                          <SelectItem value="exploring">Just exploring options</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Information */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-display font-black mb-2">Contact information</h2>
                    <p className="text-sm font-body text-muted-foreground">
                      We'll use this to schedule your demo and send calendar invite.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="font-display font-black text-sm uppercase mb-2 block">
                        Full name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 border-2 border-border"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="font-display font-black text-sm uppercase mb-2 block">
                        Work email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 border-2 border-border"
                        placeholder="john@apexhvac.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="font-display font-black text-sm uppercase mb-2 block">
                        Phone number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 border-2 border-border"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <Label htmlFor="contactMethod" className="font-display font-black text-sm uppercase mb-2 block">
                        Preferred contact method
                      </Label>
                      <Select
                        value={formData.contactMethod}
                        onValueChange={(value) => setFormData({ ...formData, contactMethod: value })}
                      >
                        <SelectTrigger className="h-12 border-2 border-border">
                          <SelectValue placeholder="How should we reach you?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone</SelectItem>
                          <SelectItem value="either">Either is fine</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8 pt-8 border-t-4 border-border">
                {step > 1 && (
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    className="border-2 border-border hover:bg-muted font-display font-bold uppercase px-8 h-12 btn-press"
                  >
                    Back
                  </Button>
                )}
                <Button
                  onClick={handleNext}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold uppercase px-8 h-12 btn-press"
                >
                  {step < 3 ? (
                    <>
                      Continue <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* Preparation Checklist */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-display font-black mb-6">Prepare for your demo</h2>
            <p className="text-xl font-body text-muted-foreground mb-12">
              Get the most value from your demo session by preparing these items in advance.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-4 border-border bg-card p-8">
                <h3 className="text-2xl font-display font-black mb-6">Questions to consider</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-body">What are your current scheduling bottlenecks?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-body">How long does it take to collect payment after job completion?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-body">What reports do you need but can't currently generate?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-body">Which systems must integrate with your field service software?</span>
                  </li>
                </ul>
              </div>

              <div className="border-4 border-border bg-card p-8">
                <h3 className="text-2xl font-display font-black mb-6">Information to have ready</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-body">Current monthly job volume</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-body">Number of field technicians and office staff</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-body">Current software and tools in use</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-body">Decision-making timeline and budget range</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-foreground text-background p-8 border-4 border-foreground">
              <h4 className="text-xl font-display font-black mb-4">Who should attend?</h4>
              <p className="text-sm font-body opacity-80 mb-4">
                Invite anyone who will be involved in the evaluation or implementation decision. Common attendees include:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm font-mono uppercase">
                <div>• Owner / GM</div>
                <div>• Operations Manager</div>
                <div>• Office Manager</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-industrial" />

      {/* What Happens Next */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-display font-black mb-16">What happens after you submit</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-display font-black text-primary-foreground">01</span>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-black mb-2">We'll contact you within 24 hours</h3>
                  <p className="text-base font-body text-muted-foreground">
                    A product specialist will reach out via your preferred contact method to schedule a time that works for your team.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-display font-black text-secondary-foreground">02</span>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-black mb-2">Receive calendar invite and prep materials</h3>
                  <p className="text-base font-body text-muted-foreground">
                    You'll get a calendar invite with video conference link and a brief questionnaire to help us customize the demo to your needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-display font-black text-accent-foreground">03</span>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-black mb-2">45-minute personalized demo</h3>
                  <p className="text-base font-body text-muted-foreground">
                    We'll walk through features relevant to your workflows, answer questions, and discuss implementation timeline and pricing.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-success flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-display font-black text-success-foreground">04</span>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-black mb-2">Follow-up with custom proposal</h3>
                  <p className="text-base font-body text-muted-foreground">
                    Within 48 hours, you'll receive a written proposal with pricing, implementation plan, and ROI estimate based on your specific business metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                <li><span className="text-muted-foreground">Contact</span></li>
                <li><span className="text-muted-foreground">Privacy</span></li>
                <li><span className="text-muted-foreground">Terms</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t-2 border-border">
            <p className="text-sm font-mono text-muted-foreground text-center">
              © 2026 FIXATE. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
