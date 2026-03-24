import { defineNuxtPlugin } from '#app'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  // Respect prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    nuxtApp.provide('lenis', null)
    return
  }

  const lenis = new Lenis({
    duration: 0.8,
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.2,
    touchMultiplier: 1.5,
    infinite: false,
  })

  // Sync Lenis with GSAP's ticker for ScrollTrigger compatibility
  gsap.ticker.add((time: number) => {
    lenis.raf(time * 1000)
  })

  // Keep ScrollTrigger in sync — throttled to avoid lag
  let scrollTicking = false
  lenis.on('scroll', () => {
    if (!scrollTicking) {
      scrollTicking = true
      requestAnimationFrame(() => {
        ScrollTrigger.update()
        scrollTicking = false
      })
    }
  })

  gsap.ticker.lagSmoothing(0)

  nuxtApp.provide('lenis', lenis)
})
