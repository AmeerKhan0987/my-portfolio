export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } }
}

export const slideUpStagger = {
  hidden: { opacity: 0, y: 40 },
  show: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' }
  })
}