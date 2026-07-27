interface StampTitleProps {
  children: string
  className?: string
  as?: 'h1' | 'h2' | 'h3'
  src?: string
  imgClassName?: string
}

export default function StampTitle({ children, className = '', as: Tag = 'h1', src, imgClassName }: StampTitleProps) {
  if (src) {
    return (
      <Tag className={`font-[family-name:var(--font-ibm-plex-mono)] font-normal text-[clamp(2.5rem,5vw,5rem)] leading-none text-black ${className}`}>
        <img src={src} alt={children} className={imgClassName ?? "h-[clamp(2.5rem,5vw,5rem)] w-auto"} />
      </Tag>
    )
  }

  return (
    <div className="relative inline-block">
      <span
        aria-hidden="true"
        className="absolute top-[3px] left-[-3px] z-0 font-[family-name:var(--font-ibm-plex-mono)] font-normal text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-[0.1rem] text-black/15 select-none pointer-events-none"
      >
        {children}
      </span>
      <Tag className={`relative z-10 font-[family-name:var(--font-ibm-plex-mono)] font-normal text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-[0.1rem] text-black ${className}`}>
        {children}
      </Tag>
    </div>
  )
}