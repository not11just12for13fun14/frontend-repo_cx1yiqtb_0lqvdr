import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900">Aura Automations</h4>
            <p className="mt-2 text-sm text-gray-600">We design and ship AI agents and automations that compound your growth.</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900">Company</h5>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-gray-900">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-gray-900">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-gray-900">Services</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900">Resources</h5>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="hover:text-gray-900">Case Studies</a></li>
              <li><a href="#" className="hover:text-gray-900">Guides</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900">Get in touch</h5>
            <p className="mt-3 text-sm text-gray-600">hello@aura-automations.com</p>
            <p className="text-sm text-gray-600">Mon–Fri, 9am–6pm</p>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Aura Automations. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
