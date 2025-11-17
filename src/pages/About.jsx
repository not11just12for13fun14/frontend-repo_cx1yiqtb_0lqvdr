import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">About</h1>
            <p className="mt-4 text-gray-700">We’re a senior team of designers, engineers, and operators who’ve shipped products at venture-backed startups and public companies. We combine rigorous product thinking with hands-on implementation to create automations that measurably move the needle.</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900">Principles</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
                  <li>Outcomes over outputs</li>
                  <li>Simple first, then scale</li>
                  <li>Transparent communication</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900">Focus Areas</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
                  <li>Revenue operations</li>
                  <li>Customer support</li>
                  <li>Internal tooling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
