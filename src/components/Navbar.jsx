import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 p-[2px]">
              <div className="h-full w-full rounded-full bg-white/90 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-violet-600" />
              </div>
            </div>
            <span className="font-extrabold tracking-tight text-gray-900 text-lg">Aura Automations</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-violet-700' : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 transition"
            >
              Get a Proposal
            </Link>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 text-base font-medium ${
                      isActive ? 'bg-violet-50 text-violet-700' : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-center"
              >
                Get a Proposal
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
