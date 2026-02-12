import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Features - Fixate",
  description:
    "Explore Fixate's features: Live Intake Dashboard, Intelligent Call Recovery, Customer Context, and Workflow Compatibility.",
};

export default function Features() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Fixate isn't your standard text-back tool.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            It's a complete intake and recovery system that captures jobs and
            holds them until you call back.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Fixate does the moment a call is missed
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Instant Recovery */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">🔔</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Instant Recovery
              </h3>
              <p className="text-gray-600">
                Customer reaches you immediately. No delay. No missed
                opportunity.
              </p>
            </div>

            {/* Live Intake Conversation */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Live Intake Conversation
              </h3>
              <p className="text-gray-600">
                Multi-turn dialogue captures problem type, urgency, location,
                and availability.
              </p>
            </div>

            {/* Urgency Detection */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Urgency Detection
              </h3>
              <p className="text-gray-600">
                Automatically flags emergency vs. routine jobs. Prioritize what
                matters.
              </p>
            </div>

            {/* Job Details Captured */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Job Details Captured
              </h3>
              <p className="text-gray-600">
                Problem description, location, customer info, and availability
                all recorded.
              </p>
            </div>

            {/* Job Held for You */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Job Held for You
              </h3>
              <p className="text-gray-600">
                Opportunity stays in the system until you're ready to call back.
                No expiration.
              </p>
            </div>

            {/* Informed Callback */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Informed Callback
              </h3>
              <p className="text-gray-600">
                You call back with full context. No re-explaining. No guessing
                urgency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Intake Dashboard */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Live Intake Dashboard
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            A real-time dashboard that shows every recovered call, active
            intake, emergency, and follow-up in one place — so nothing slips
            through.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Intake Board",
                desc: "View all recovered calls, in-progress conversations, and completed intakes",
              },
              {
                title: "Emergency Detection",
                desc: "Urgent jobs are automatically flagged and separated",
              },
              {
                title: "Job Status Tracking",
                desc: "See active, unassigned, and completed jobs at a glance",
              },
              {
                title: "Live Activity Feed",
                desc: "Real-time visibility into customer engagement and intake progress",
              },
              {
                title: "Call Recovery Log",
                desc: "Full history of missed calls, responses, and outcomes",
              },
              {
                title: "Insights & Metrics",
                desc: "Track recovered calls, job volume, and intake performance",
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-12 italic">
            Fixate doesn't just recover missed calls — it organizes them,
            prioritizes them, and holds them until you're ready to act.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-fixate-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">See the platform in action</h2>
          <p className="text-lg mb-8 opacity-90">
            Schedule a personalized demo to explore features relevant to your
            business workflows.
          </p>
          <a
            href="https://fixate-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-fixate-blue rounded font-semibold hover:bg-gray-100 transition"
          >
            Schedule Demo
          </a>
        </div>
      </section>
    </main>
  );
}
