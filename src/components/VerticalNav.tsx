import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

export default function VerticalNav() {
  const location = useLocation()

  const links = [
    { to: '/work', label: 'VIEWS' },
    { to: '/about', label: 'ABOUT' },
    { to: '/projects', label: 'PROJECTS' },
    { to: '/contact', label: 'CONTACT' },
  ]

  return (
    <nav className="fixed top-0 left-0 h-full w-[160px] hidden md:flex flex-col justify-between px-6 py-8 z-50">
      <div>
        <div className="mb-20 flex justify-center">
          <Logo />
        </div>

        <div className="flex flex-col gap-1">
          {links.map((link) => {
            const active = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className="block font-[family-name:var(--font-ibm-plex-mono)] font-normal text-[18px] uppercase text-black group/link"
              >
                <span className="group-hover/link:outline group-hover/link:outline-2 group-hover/link:outline-black transition-all duration-150">
                  {active ? '▸ ' : '  '}{link.label}{active ? '' : ' //'}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}