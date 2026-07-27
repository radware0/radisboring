import StampTitle from '../components/StampTitle'
import { carouselImages } from '../data/carousel'

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col px-16">
      <div className="flex-1 flex items-center">
        <div className="w-full grid grid-cols-12 gap-0 border-2 border-black">

          <div className="col-span-6 border-r-2 border-black p-12">
            <StampTitle src="/home-rib.png" imgClassName="h-[clamp(3rem,10vw,9rem)] w-auto">TURNING 20</StampTitle>
          </div>

          <div className="col-span-6 flex items-center justify-center p-12">
            <p className="font-[family-name:var(--font-ibm-plex-mono)] text-[18px] leading-relaxed tracking-normal text-black text-justify">
              RAD IS BORING RAD IS BORING BORING IS RAD BORING IS RAD. GOOD WORK BAD JOB...
            </p>
          </div>

        </div>
      </div>

      <div className="-mx-16 overflow-hidden pb-8">
        <div className="flex w-max animate-[marquee_20s_linear_infinite]">
          {[...carouselImages, ...carouselImages].map((img, i) => (
            <img key={i} src={img} alt="" className="h-48 w-auto flex-shrink-0" />
          ))}
        </div>
      </div>
    </section>
  )
}