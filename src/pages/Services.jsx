import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CheckCircle2 } from 'lucide-react'

const tiers = [
  {
    name: 'Launch',
    price: '$8k+',
    desc: 'Kickstart with a high-impact automation in 2–4 weeks.',
    bullets: [
      'Discovery & ROI mapping',
      'One agent or workflow',
      'Core integrations',
      'Analytics & handoff'
    ]
  },
  {
    name: 'Scale',
    price: '$20k+',
    desc: 'Multiple automations with experimentation & A/B testing.',
    bullets: [
      '2–4 agents/workflows',
      'Routing & optimization',
      'Dashboards & alerts',
      'Ongoing improvements'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Compliance, SSO, SLAs, and advanced integrations.',
    bullets: [
      'Security reviews',
      'Custom data pipelines',
      'SLA-backed support',
      'Training & enablement'
    ]
  }
]

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Services</h1>
            <p className="mt-4 text-gray-600">Choose a plan that matches your ambition.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div key={t.name} className="rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
                <p className="mt-2 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">{t.price}</p>
                <p className="mt-3 text-sm text-gray-600">{t.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-violet-600 mt-0.5" /> {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Process</h2>
              <ol className="mt-4 space-y-3 text-gray-700 list-decimal list-inside">
                <li>Discovery call and success metrics</li>
                <li>Solution design and timeline</li>
                <li>Implementation and QA</li>
                <li>Launch, monitor, and iterate</li>
              </ol>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Stack & Integrations</h2>
              <p className="mt-4 text-gray-700">OpenAI, ElevenLabs, Whisper, Twilio, Slack, Notion, HubSpot, Airtable, Zapier, Make, custom APIs, and more.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
