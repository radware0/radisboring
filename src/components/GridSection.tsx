import StampTitle from './StampTitle'

interface GridSectionProps {
  id: string
  title: string
  titleSrc?: string
  children: React.ReactNode
}

export default function GridSection({ id, title, titleSrc, children }: GridSectionProps) {
  return (
    <section id={id} className="min-h-screen flex items-center px-4 md:px-16">
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-0 border-2 border-black">

        <div className="md:col-span-6 border-b-2 md:border-b-0 md:border-r-2 border-black p-6 md:p-12">
          <StampTitle src={titleSrc}>{title}</StampTitle>
        </div>

        <div className="md:col-span-6 flex items-center justify-center p-6 md:p-12">
          <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[18px] leading-relaxed tracking-normal text-black text-justify">
            {children}
          </div>
        </div>

      </div>
    </section>
  )
}