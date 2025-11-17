import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const projects = [
  {
    title: 'Voice SDR for B2B SaaS',
    category: 'Voice Agent',
    result: '35% more meetings booked',
  },
  {
    title: 'AI Support Triage for Fintech',
    category: 'Chat Agent',
    result: '52% faster resolution time',
  },
  {
    title: 'Lead Routing & Enrichment',
    category: 'Workflow',
    result: '2x lead-to-opportunity rate',
  },
  {
    title: 'Bookings Concierge for Clinics',
    category: 'Voice Agent',
    result: '24/7 scheduling, no-shows down 18%'
  }
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Projects</h1>
            <p className="mt-4 text-gray-600">Selected outcomes from recent engagements.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="text-xs font-semibold text-violet-700">{p.category}</div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">Outcome: {p.result}</p>
                <div className="mt-4 h-28 rounded-xl bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 border border-violet-200"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
