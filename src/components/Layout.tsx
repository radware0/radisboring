import { useState } from 'react'
import { Link, Outlet, useLocation, useNavigationType } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import VerticalNav from './VerticalNav'
import Footer from './Footer'
import StatsOverlay from './StatsOverlay'
import ProgressBar from './ProgressBar'
import Logo from './Logo'

const links = [
  { to: '/work', label: 'VIEWS' },
  { to: '/about', label: 'ABOUT' },
  { to: '/projects', label: 'PROJECTS' },
  { to: '/contact', label: 'CONTACT' },
]

export default function Layout() {
  const location = useLocation()
  const direction = useNavigationType() === 'POP' ? -1 : 1
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="bg-[#faf8f5] min-h-screen">
      <ProgressBar />

      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden border-2 border-black bg-[#faf8f5] px-3 py-1.5"
      >
        <span className="font-[family-name:var(--font-ibm-plex-mono)] text-sm uppercase text-black">
          MENU
        </span>
      </button>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#faf8f5] md:hidden flex flex-col px-6 py-8">
          <div className="flex justify-between items-center mb-20">
            <Logo />
            <button
              onClick={() => setMenuOpen(false)}
              className="border-2 border-black px-3 py-1"
            >
              <span className="font-[family-name:var(--font-ibm-plex-mono)] text-sm uppercase text-black">
                CLOSE
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {links.map((link) => {
              const active = location.pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="block font-[family-name:var(--font-ibm-plex-mono)] font-normal text-[24px] uppercase text-black"
                >
                  <span>
                    {active ? '▸ ' : '  '}{link.label}{active ? '' : ' //'}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      )}

      <VerticalNav />
      <div className="ml-0 md:ml-[160px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ x: 80 * direction }}
            animate={{ x: 0 }}
            exit={{ x: -80 * direction }}
            transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Outlet />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </div>
      <StatsOverlay />
    </div>
  )
}