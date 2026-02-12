import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Fixate",
  description:
    "Simple, flat pricing for Fixate. $129/month. No per-user fees. No call limits. No setup costs.",
};

export default function Pricing() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Simple, flat pricing. Built to recover missed jobs.
          </h1>
          <p className="text-2xl text-fixate-blue font-bold mb-4">
            $129 / month. One price. Everything included.
          </p>
          <p className="text-lg text-gray-600">
            No per-user fees. No call limits. No setup costs.
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border-2 border-fixate-blue rounded-lg p-12 text-center">
            <p className="text-sm text-gray-600 mb-4 uppercase tracking-wide">
              Most common setup for plumbers
            </p>
            <div className="text-5xl font-bold text-fixate-blue mb-2">$129</div>
            <p className="text-gray-600 mb-8">Per month</p>
            <p className="text-lg text-gray-700 mb-8">
              Everything included. No setup required.
            </p>
            <p className="text-gray-600 mb-8">
              Start using Fixate immediately. No sales call required.
            </p>
            <a
              href="https://fixate-app.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-fixate-blue text-white rounded font-semibold hover:bg-opacity-90 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Everything included. No add-ons. No tiers.
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                What Fixate does automatically
              </h3>
              <ul className="space-y-3">
                {[
                  "Intelligent SMS intake",
                  "Emergency vs non-emergency detection",
                  "Job summaries for callbacks",
                  "Customer contact & location capture",
                  "Works with Jobber, Housecall Pro, ServiceTitan",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-fixate-blue font-bold mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                What plumbers no longer have to do
              </h3>
              <ul className="space-y-3">
                {[
                  "Answer every call",
                  "Chase voicemails",
                  "Re-ask questions",
                  "Manually triage urgency",
                  "Manage forms or dead ends",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-fixate-blue font-bold mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Most plumbers lose thousands each month without a real call-recovery
            system.
          </h2>

          <div className="bg-white p-12 rounded-lg border border-gray-200">
            <p className="text-lg text-gray-700 mb-6">
              Fixate isn't a text-back tool — it's a complete, proven intake and
              recovery system that holds jobs until you call back.
            </p>

            <div className="bg-blue-50 p-8 rounded-lg mb-8 border-l-4 border-fixate-blue">
              <p className="text-gray-700 mb-4">
                A typical plumber using Fixate recovers:
              </p>
              <p className="text-2xl font-bold text-fixate-blue mb-4">
                5 missed calls / week × $360 average job = $1,800 / week
              </p>
              <p className="text-xl font-bold text-gray-900">
                That's over $7,000/month in jobs Fixate reliably recovers.
              </p>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700 mb-2">Fixate costs</p>
              <p className="text-3xl font-bold text-fixate-blue mb-6">
                $129/month
              </p>
              <p className="text-lg text-gray-700 font-semibold">
                Most customers cover Fixate with their first recovered job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Questions?
          </h2>
          <p className="text-center text-gray-600 text-lg mb-8">
            <a
              href="https://fixate-app.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fixate-blue font-semibold hover:underline"
            >
              Talk to us
            </a>
            — demos are optional.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-fixate-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Start recovering missed calls today.
          </h2>
          <p className="text-lg mb-8 opacity-90">
            $129/month. No contracts. Cancel anytime.
          </p>
          <a
            href="https://fixate-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-fixate-blue rounded font-semibold hover:bg-gray-100 transition"
          >
            Get started
          </a>
        </div>
      </section>
    </main>
  );
}
