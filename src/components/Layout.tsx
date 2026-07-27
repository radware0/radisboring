import { Outlet, useLocation, useNavigationType } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import VerticalNav from './VerticalNav'
import Footer from './Footer'
import StatsOverlay from './StatsOverlay'
import ProgressBar from './ProgressBar'

export default function Layout() {
  const location = useLocation()
  const direction = useNavigationType() === 'POP' ? -1 : 1

  return (
    <div className="bg-[#faf8f5] min-h-screen">
      <ProgressBar />
      <VerticalNav />
      <div className="ml-[160px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ x: 80 * direction }}
            animate={{ x: 0 }}
            exit={{ x: -80 * direction }}
            transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Outlet />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </div>
      <StatsOverlay />
    </div>
  )
}