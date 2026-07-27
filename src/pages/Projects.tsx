import { Helmet } from 'react-helmet-async'
import StampTitle from '../components/StampTitle'
import { projectsEntries } from '@/data/projects'

const categories = ['ARCHIVES', 'ARTWORK'] as const

export default function Projects() {
  return (
    <>
      <Helmet><title>PROJECTS — Rad</title></Helmet>
      <section className="min-h-screen flex items-center px-4 md:px-16 pt-24 pb-16">
      <div className="w-full">
        <div className="mb-16">
          <StampTitle src="/projects-0.png">PROJECTS</StampTitle>
        </div>

        {categories.map((cat) => {
          const entries = projectsEntries.filter((e) => e.category === cat)
          if (entries.length === 0) return null
          return (
            <div key={cat} className="mb-16">
              <h2 className="font-[family-name:var(--font-ibm-plex-mono)] font-bold text-sm tracking-wider uppercase text-black mb-4">
                {cat}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-0 gap-y-8">
                {entries.map((entry) => (
                  <div key={entry.title}>
                    <div className="aspect-square overflow-hidden flex items-center justify-center">
                      <img
                        src={entry.img}
                        alt={entry.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="mt-1.5">
                      <span className="block font-[family-name:var(--font-ibm-plex-mono)] text-[10px] leading-none tracking-wider uppercase text-black py-1 px-1">
                        {entry.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
    </>
  )
}