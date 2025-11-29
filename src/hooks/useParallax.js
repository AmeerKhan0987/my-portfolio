import { useScroll, useTransform } from 'framer-motion'
export default function useParallax(factor = 0.4) {
  const { scrollYProgress } = useScroll()
  return useTransform(scrollYProgress, [0, 1], [0, -100 * factor])
}