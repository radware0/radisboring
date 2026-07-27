import { useEffect, useState } from 'react'

export default function StatsOverlay() {
  const [size, setSize] = useState({ w: 0, h: 0 })
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setSize({ w: window.innerWidth, h: window.innerHeight })
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight })
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY })
    window.addEventListener('resize', onResize)
    document.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('resize', onResize)
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div className="fixed top-4 right-4 z-50 border-2 border-black bg-[#faf8f5] px-4 py-2.5 hidden md:block">
      <span className="font-[family-name:var(--font-ibm-plex-mono)] text-base tracking-wider text-black">
        {size.w}x{size.h} {' | '} x:{mouse.x} y:{mouse.y}
      </span>
    </div>
  )
}