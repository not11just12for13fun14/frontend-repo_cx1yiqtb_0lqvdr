import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Ready to automate your growth?</h3>
            <p className="mt-2 text-white/90 max-w-2xl">Book a discovery call to map opportunities, ROI, and a phased roadmap tailored to your stack.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/contact" className="rounded-full bg-white text-violet-700 px-6 py-3 font-semibold hover:bg-white/90">Book a Call</Link>
            <Link to="/services" className="rounded-full bg-white/10 backdrop-blur px-6 py-3 font-semibold hover:bg-white/20">Explore Services</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
