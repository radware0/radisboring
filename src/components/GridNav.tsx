import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function GridNav() {
  const links = [
    { to: '/work', label: 'VIEWS' },
    { to: '/about', label: 'ABOUT' },
    { to: '/projects', label: 'PROJECTS' },
    { to: '/contact', label: 'CONTACT' },
  ]

  return (
    <nav className="fixed 
    top-0 
    left-0 
    right-0 
    z-50 flex 
    items-end 
    h-16 
    px-16 
    border-b 
    border-neutral-300/20">
      <div className="flex-1 pb-3">
        <Logo />
      </div>
      <div className="flex pb-3">
        {links.map((link, i) => (
          <Link
            key={link.to}
            to={link.to}
            className={`font-[family-name:var(--font-ibm-plex-mono)] font-bold 
              text-lg 
              tracking-wide 
              uppercase 
              text-black 
              hover:text-[#808080] 
              hover:bg-amber-100/80 
              transition-colors 
              duration-200 ${i > 0 ? 
              'border-l border-neutral-300/20 pl-4 ml-4' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}