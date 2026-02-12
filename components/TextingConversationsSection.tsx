import { useState } from "react";

const scenarios = [
  {
    id: "toilet",
    label: "🚽 Toilet Issues",
    primary: {
      title: "Clog vs Overflow",
      messages: [
        { type: "customer", text: "Water is overflowing from the bowl" },
        { type: "fixate", text: "Is the water still rising, or has it stopped?" },
        { type: "customer", text: "Stopped now. Should I turn off the water?" },
        { type: "fixate", text: "Yes, turn off the water behind the toilet. How soon do you need this fixed?" },
        { type: "customer", text: "ASAP. We have guests coming tonight" },
      ],
      summary: "Overflow stopped · Water off · Urgent (guests tonight)",
    },
    variants: [
      {
        title: "Leak at base (wax ring)",
        snippet: '"Water pooling under the toilet"',
        description: 'Fixate asks: "Is the water coming from the base or the tank?" → Identifies wax ring failure',
      },
      {
        title: "Tank or supply line leak",
        snippet: '"Water dripping from the back"',
        description: 'Fixate asks: "Is it dripping from the tank or the connection?" → Narrows to tank or supply line',
      },
      {
        title: "Running toilet / fill valve",
        snippet: '"Toilet keeps running, water bill is high"',
        description: 'Fixate asks: "Does it run constantly or after flushing?" → Identifies fill valve issue',
      },
      {
        title: "Partial blockage",
        snippet: '"Drains slowly, gurgles"',
        description: 'Fixate asks: "Does it drain at all, or is it completely blocked?" → Assesses severity',
      },
    ],
  },
  {
    id: "heater",
    label: "🔥 Water Heater",
    primary: {
      title: "No hot water",
      messages: [
        { type: "customer", text: "No hot water at all" },
        { type: "fixate", text: "Is it a gas or electric water heater?" },
        { type: "customer", text: "Gas. There's a pilot light" },
        { type: "fixate", text: "Is the pilot light on or off?" },
        { type: "customer", text: "Off. I can see it's not lit" },
      ],
      summary: "Gas heater · Pilot light out · No hot water",
    },
    variants: [
      {
        title: "Not enough hot water",
        snippet: '"Runs out after 10 minutes"',
        description: 'Fixate asks: "How many people in the house?" → Identifies capacity vs. heating issue',
      },
      {
        title: "Leaking tank",
        snippet: '"Water pooling around the base"',
        description: 'Fixate asks: "Is it dripping or steady flow?" → Assesses urgency and location',
      },
      {
        title: "Pilot light / ignition issue",
        snippet: '"Pilot won\'t stay lit"',
        description: 'Fixate asks: "Does it light but go out, or won\'t light at all?" → Narrows to thermocouple or ignition',
      },
      {
        title: "Thermostat malfunction",
        snippet: '"Temperature won\'t adjust"',
        description: 'Fixate asks: "Does the heater turn on at all?" → Identifies control vs. heating failure',
      },
    ],
  },
  {
    id: "installation",
    label: "🏗️ Installation / Quotes",
    primary: {
      title: "Toilet installation",
      messages: [
        { type: "customer", text: "Need a new toilet installed" },
        { type: "fixate", text: "Do you already have the toilet, or do you need us to provide one?" },
        { type: "customer", text: "We have it. It's in the master bath" },
        { type: "fixate", text: "Perfect. When would you like us to come by?" },
        { type: "customer", text: "This weekend if possible" },
      ],
      summary: "Toilet installation · Customer has unit · Master bath · Weekend preferred",
    },
    variants: [
      {
        title: "Water heater replacement",
        snippet: '"Need a new water heater"',
        description: 'Fixate asks: "Gas or electric? Do you have the unit?" → Captures scope and timeline',
      },
      {
        title: "Fixture upgrade",
        snippet: '"Want to replace the kitchen faucet"',
        description: 'Fixate asks: "Do you have the new faucet?" → Identifies if supply is needed',
      },
      {
        title: "Remodel coordination",
        snippet: '"Bathroom remodel, need plumbing work"',
        description: 'Fixate asks: "Is this new rough-in or fixture replacement?" → Clarifies scope',
      },
      {
        title: "Preventive maintenance",
        snippet: '"Want to inspect the main line"',
        description: 'Fixate asks: "Have you had issues, or is this routine?" → Assesses priority',
      },
    ],
  },
  {
    id: "emergency",
    label: "🚨 After-Hours Emergency",
    primary: {
      title: "Active flooding",
      messages: [
        { type: "customer", text: "Water everywhere in the basement!!!" },
        { type: "fixate", text: "Can you turn off the main water valve?" },
        { type: "customer", text: "Yes, it's off. Where is it coming from?" },
        { type: "fixate", text: "Is it from a pipe, water heater, or sump pump?" },
        { type: "customer", text: "Looks like a pipe burst near the furnace" },
      ],
      summary: "Active flooding · Main valve off · Burst pipe near furnace · URGENT",
    },
    variants: [
      {
        title: "Sewage backup",
        snippet: '"Sewage coming up in the basement"',
        description: 'Fixate asks: "Is it from one fixture or all drains?" → Identifies main line vs. fixture issue',
      },
      {
        title: "No water to the house",
        snippet: '"No water anywhere"',
        description: 'Fixate asks: "Is the main valve open?" → Checks for simple shutoff first',
      },
      {
        title: "Urgent but non-emergency",
        snippet: '"Leak in the kitchen, need someone tonight"',
        description: 'Fixate asks: "Can you turn off the water to the sink?" → Mitigates while awaiting callback',
      },
      {
        title: "Gas smell near water line",
        snippet: '"Strange smell near the pipes"',
        description: 'Fixate asks: "Is it near the water heater?" → Identifies potential hazard vs. plumbing issue',
      },
    ],
  },
  {
    id: "drain",
    label: "🚰 Sink & Drain",
    primary: {
      title: "Slow drain",
      messages: [
        { type: "customer", text: "Kitchen sink draining really slow" },
        { type: "fixate", text: "Is it the single sink or both sides?" },
        { type: "customer", text: "Just the left side" },
        { type: "fixate", text: "Have you tried plunging it or using drain cleaner?" },
        { type: "customer", text: "Plunged it but didn't help" },
      ],
      summary: "Left kitchen sink · Slow drain · Plunging didn't work",
    },
    variants: [
      {
        title: "Standing water",
        snippet: '"Water sitting in the sink"',
        description: 'Fixate asks: "Is it a clog or backup?" → Identifies if it\'s fixture or main line',
      },
      {
        title: "Leak under sink",
        snippet: '"Water dripping from under the sink"',
        description: 'Fixate asks: "Is it from the P-trap or supply line?" → Narrows to fixture supply or drain',
      },
      {
        title: "Garbage disposal related",
        snippet: '"Disposal is jammed"',
        description: 'Fixate asks: "Is it making noise or completely stuck?" → Identifies if it\'s jam or motor',
      },
      {
        title: "Bathroom sink backup",
        snippet: '"Bathroom sink won\'t drain"',
        description: 'Fixate asks: "Is it slow or completely blocked?" → Assesses clog severity',
      },
    ],
  },
  {
    id: "commercial",
    label: "🏢 Commercial",
    primary: {
      title: "Multi-fixture issue",
      messages: [
        { type: "customer", text: "Multiple bathrooms on the second floor aren't working" },
        { type: "fixate", text: "Is it no water, slow drains, or something else?" },
        { type: "customer", text: "No water at all. First floor is fine" },
        { type: "fixate", text: "This is likely a supply line issue on that floor. Can you send someone during business hours?" },
        { type: "customer", text: "Yes, anytime after 2pm works" },
      ],
      summary: "Commercial · Second floor bathrooms · No water · First floor OK · After 2pm preferred",
    },
    variants: [
      {
        title: "Business hours constraint",
        snippet: '"Need this fixed before 9am tomorrow"',
        description: 'Fixate asks: "Can you describe the issue?" → Captures urgency and problem scope',
      },
      {
        title: "Maintenance vs. emergency",
        snippet: '"Preventive maintenance on the main line"',
        description: 'Fixate asks: "Is this urgent or can it be scheduled?" → Clarifies priority',
      },
      {
        title: "Property manager calling",
        snippet: '"Tenant reported a leak in unit 204"',
        description: 'Fixate asks: "Is the tenant home? What type of leak?" → Captures access and scope',
      },
      {
        title: "Recurring issue",
        snippet: '"Same drain backs up every month"',
        description: 'Fixate asks: "Which drain? How long has this been happening?" → Identifies pattern',
      },
    ],
  },
];

export function TextingConversationsSection() {
  const [activeScenario, setActiveScenario] = useState("toilet");
  const [expandedVariants, setExpandedVariants] = useState<Record<string, boolean>>({});

  const current = scenarios.find((s) => s.id === activeScenario)!;

  const toggleVariant = (variantId: string) => {
    setExpandedVariants((prev) => ({
      ...prev,
      [variantId]: !prev[variantId],
    }));
  };

  return (
    <section className="py-24" style={{ backgroundColor: "#F5F8FC" }}>
      <div className="container">
        <h2 className="text-5xl font-display font-black mb-6">
          What customers actually experience
        </h2>
        <p className="text-lg font-body text-muted-foreground leading-relaxed max-w-3xl mb-16">
          When a call is missed, Fixate continues the conversation — gathering the problem, urgency, and details until your team can step in.
        </p>

        {/* Scenario Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 pb-6 border-b border-border">
          {scenarios.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => setActiveScenario(scenario.id)}
              className={`px-4 py-2 font-display font-black text-sm transition-all ${
                activeScenario === scenario.id
                  ? "bg-primary text-white border-4 border-primary"
                  : "bg-card text-foreground border-4 border-border hover:border-primary"
              }`}
            >
              {scenario.label}
            </button>
          ))}
        </div>

        {/* Scenario Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Primary Conversation */}
          <div className="bg-card border-4 border-border p-8 shadow-sm">
            <p className="text-sm font-body text-muted-foreground uppercase tracking-wide mb-6">
              {current.primary.title}
            </p>
            <div className="space-y-4 text-sm font-body mb-6">
              {current.primary.messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.type === "customer" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-xs ${
                      msg.type === "customer"
                        ? "bg-primary text-white"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                <strong>Callback ready:</strong> {current.primary.summary}
              </p>
            </div>
          </div>

          {/* Variants */}
          <div className="space-y-4">
            <p className="text-sm font-body font-semibold text-foreground mb-4">
              Other situations handled
            </p>
            {current.variants.map((variant, idx) => (
              <div
                key={idx}
                className="bg-card border-4 border-border shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleVariant(`${activeScenario}-${idx}`)}
                  className="w-full px-6 py-4 text-left hover:bg-muted/50 transition-colors flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-body font-semibold text-foreground">
                      {variant.title}
                    </p>
                    <p className="text-xs font-body text-muted-foreground mt-1">
                      {variant.snippet}
                    </p>
                  </div>
                  <span className="text-lg ml-4">
                    {expandedVariants[`${activeScenario}-${idx}`] ? "−" : "+"}
                  </span>
                </button>

                {expandedVariants[`${activeScenario}-${idx}`] && (
                  <div className="px-6 py-4 bg-muted/30 border-t border-border">
                    <p className="text-xs font-body text-muted-foreground italic">
                      {variant.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Reinforcement Line */}
        <div className="text-center pt-12 border-t border-border mt-12">
          <p className="text-sm font-body text-muted-foreground italic">
            Different plumbing problems need different follow-ups. Fixate adapts automatically.
          </p>
        </div>
      </div>
    </section>
  );
}
