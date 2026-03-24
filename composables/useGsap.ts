import { useNuxtApp } from '#app'
import type { gsap as GsapType } from 'gsap'
import type { ScrollTrigger as ScrollTriggerType } from 'gsap/ScrollTrigger'

export function useGsap() {
  const nuxtApp = useNuxtApp()

  const gsap = nuxtApp.$gsap as typeof GsapType
  const ScrollTrigger = nuxtApp.$ScrollTrigger as typeof ScrollTriggerType

  /**
   * Create a ScrollTrigger-powered timeline
   */
  function createScrollTimeline(
    trigger: string | Element,
    options?: gsap.TweenVars,
  ): gsap.core.Timeline {
    return gsap.timeline({
      scrollTrigger: {
        trigger,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        ...options,
      },
    })
  }

  /**
   * Fade + slide up reveal (common pattern)
   */
  function revealFrom(
    targets: gsap.TweenTarget,
    vars?: gsap.TweenVars,
    stagger?: number,
  ): gsap.core.Tween {
    return gsap.from(targets, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power3.out',
      stagger: stagger ?? 0,
      ...vars,
    })
  }

  return {
    gsap,
    ScrollTrigger,
    createScrollTimeline,
    revealFrom,
  }
}
