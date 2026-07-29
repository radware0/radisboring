import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <Helmet><title>404 — Rad</title></Helmet>
      <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-16">
        <h1 className="font-[family-name:var(--font-ibm-plex-mono)] text-[clamp(3rem,12vw,10rem)] font-bold leading-none text-black">
          404
        </h1>
        <p className="font-[family-name:var(--font-ibm-plex-mono)] mt-6 mb-8 text-lg">
          DOESN'T EXIST
        </p>
        <Link
          to="/"
          className="font-[family-name:var(--font-ibm-plex-mono)] underline hover:outline hover:outline-2 hover:outline-black px-1 transition-all duration-150"
        >
          BACK TO HOME
        </Link>
      </section>
    </>
  )
}
