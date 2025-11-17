import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // Placeholder for backend integration
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! We will reach out within 24 hours.')
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Contact</h1>
            <p className="mt-4 text-gray-600">Tell us about your goals and we’ll propose a roadmap.</p>

            <form onSubmit={submit} className="mt-8 grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input required className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Acme Inc" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">What do you want to automate?</label>
                <textarea rows={5} className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Describe the workflow, tools, and goals..." />
              </div>
              <div className="flex items-center gap-3">
                <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:opacity-95 transition" type="submit">Request Proposal</button>
                <p className="text-sm text-gray-600">{status}</p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
