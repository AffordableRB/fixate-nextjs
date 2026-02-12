import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fixate - Missed Call Recovery & AI Intake System",
  description:
    "Fixate recovers missed calls and completes intake automatically. Built for plumbers and trades. Never lose a job again.",
};

export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Unanswered calls become dispatch-ready jobs.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Instantly engages missed callers. No forms. No voicemails. Built
            specifically for plumbers.
          </p>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            When a plumber can't answer the phone, Fixate handles the call the
            way a real person would. It keeps the customer there, gathers the
            job details, urgency, and location, and holds the job until the
            plumber calls back to confirm. Missed calls don't turn into dead
            voicemails or a form to fill out. They turn into real jobs, ready
            to dispatch.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://fixate-app.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-fixate-blue text-white rounded font-semibold hover:bg-opacity-90 transition"
            >
              Schedule Demo
            </a>
            <a
              href="/features"
              className="px-8 py-3 border-2 border-fixate-blue text-fixate-blue rounded font-semibold hover:bg-gray-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Why Fixate Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Why Fixate outperforms voicemail and SMS autoresponders
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Missed-call systems stop at a message or a link. Fixate keeps the
            customer engaged and completes the job intake before the plumber
            calls back.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Most tools send a message and hope.
              </h3>
              <p className="text-gray-600">
                Voicemail systems leave messages. SMS tools send links. Neither
                captures the job or keeps the customer engaged.
              </p>
            </div>

            <div className="p-6 border-2 border-fixate-blue rounded-lg bg-blue-50">
              <h3 className="text-xl font-bold text-fixate-blue mb-3">
                Fixate runs a full intake conversation.
              </h3>
              <p className="text-gray-700">
                Asks about the problem, urgency, location, and availability.
                Captures the job details. Holds the opportunity until you call
                back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            The numbers that matter
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-fixate-blue mb-2">70%</div>
              <p className="text-gray-600">
                Customer engagement rate on recovered calls
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-fixate-blue mb-2">
                $7,000+
              </div>
              <p className="text-gray-600">
                Average monthly value recovered per plumber
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-fixate-blue mb-2">
                100%
              </div>
              <p className="text-gray-600">Intake completion rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-fixate-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stop losing jobs to missed calls.
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Fixate is the only system designed to reliably recover the majority
            of missed calls — not just notify customers that you missed one.
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
