import { Helmet } from 'react-helmet-async'
import StampTitle from '../components/StampTitle'
import { carouselImages } from '../data/carousel'

export default function Home() {
  return (
    <>
      <Helmet><title>HOME — Rad</title></Helmet>
      <section className="min-h-screen flex flex-col px-4 md:px-16">
      <div className="flex-1 flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-0 border-2 border-black">

          <div className="md:col-span-6 border-b-2 md:border-b-0 md:border-r-2 border-black p-6 md:p-12">
            <StampTitle src="/home-rib.png" imgClassName="h-[clamp(3rem,10vw,9rem)] w-auto">TURNING 20</StampTitle>
          </div>

          <div className="md:col-span-6 flex items-center justify-center p-6 md:p-12">
            <p className="font-[family-name:var(--font-ibm-plex-mono)] text-[18px] leading-relaxed tracking-normal text-black text-justify">
              RAD IS BORING RAD IS BORING BORING IS RAD BORING IS RAD. GOOD WORK BAD JOB...
            </p>
          </div>

        </div>
      </div>

      <div className="-mx-4 md:-mx-16 overflow-hidden pb-8">
        <div className="flex w-max animate-[marquee_20s_linear_infinite]">
          {[...carouselImages, ...carouselImages].map((img, i) => (
            <img key={i} src={img} alt="" className="h-28 md:h-48 w-auto flex-shrink-0" />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}