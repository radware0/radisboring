import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="block">
      <img
        src="/logo.png"
        alt="RAD"
        className="w-full max-w-[128px] h-auto"
      />
    </Link>
  )
}