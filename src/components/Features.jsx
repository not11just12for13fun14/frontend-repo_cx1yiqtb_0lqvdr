import { Bot, Workflow, Headphones, Gauge, ShieldCheck, Rocket } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'AI Voice & Chat Agents',
    desc: 'Custom agents for lead qualification, support, bookings, and upsells across web, phone, and messaging.'
  },
  {
    icon: Workflow,
    title: 'Workflow Automations',
    desc: 'Connect CRMs, forms, calendars, and data sources to automate repetitive tasks and handoffs.'
  },
  {
    icon: Headphones,
    title: '24/7 Support & Integrations',
    desc: 'We maintain and evolve your automations with clear SLAs and proactive improvements.'
  },
  {
    icon: Gauge,
    title: 'Conversion Optimization',
    desc: 'A/B tested flows, smart routing, and analytics to maximize outcomes and ROI.'
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    desc: 'Best practices for privacy, data handling, and auditability for regulated industries.'
  },
  {
    icon: Rocket,
    title: 'Rapid Prototyping',
    desc: 'Launch in weeks, not months. We validate quickly and scale what works.'
  },
]

export default function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What we do</h2>
          <p className="mt-4 text-gray-600">End-to-end automation services for modern teams.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
