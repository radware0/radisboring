import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import StampTitle from '../components/StampTitle'

export default function NotFound() {
  return (
    <>
      <Helmet><title>404 — Rad</title></Helmet>
      <section className="min-h-screen flex items-center justify-center px-4 md:px-16">
        <div className="w-full max-w-lg border-2 border-black p-8 text-center">
          <StampTitle>404</StampTitle>
          <p className="font-[family-name:var(--font-ibm-plex-mono)] mt-6 mb-8">
            PAGE NOT FOUND //
          </p>
          <Link
            to="/"
            className="font-[family-name:var(--font-ibm-plex-mono)] underline hover:outline hover:outline-2 hover:outline-black px-1 transition-all duration-150"
          >
            BACK TO HOME
          </Link>
        </div>
      </section>
    </>
  )
}
