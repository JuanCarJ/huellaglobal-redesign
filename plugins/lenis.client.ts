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
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  })

  // Sync Lenis with GSAP's ticker for ScrollTrigger compatibility
  gsap.ticker.add((time: number) => {
    lenis.raf(time * 1000)
  })

  // Keep ScrollTrigger in sync
  lenis.on('scroll', () => {
    ScrollTrigger.update()
  })

  // Disable GSAP's default lagSmoothing when Lenis is active
  gsap.ticker.lagSmoothing(0)

  nuxtApp.provide('lenis', lenis)
})
