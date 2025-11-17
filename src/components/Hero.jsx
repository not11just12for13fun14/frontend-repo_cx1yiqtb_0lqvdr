import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 sm:pt-32 sm:pb-28">
      <div className="absolute inset-0 -z-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-3 py-1 text-xs font-semibold text-violet-700 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-600"></span>
            AI Automation Agency
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Build, launch, and scale AI automations that work while you sleep
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We design voice and chat agents, workflow automations, and custom AI products that convert more leads and save your team countless hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:opacity-95 transition"
            >
              Get a Proposal <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-violet-700 bg-violet-50 hover:bg-violet-100"
            >
              See Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
