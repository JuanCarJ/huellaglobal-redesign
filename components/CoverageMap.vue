<template>
  <section id="cobertura" class="py-20 md:py-32 relative overflow-hidden bg-mesh-dark" ref="sectionEl">
    <!-- Decorative grid overlay -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
         style="background-image: linear-gradient(rgba(0,184,212,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,184,212,0.03) 1px, transparent 1px); background-size: 60px 60px;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div ref="headerEl" class="text-center mb-16 space-y-5">
        <span class="section-tag">Cobertura global</span>
        <h2 class="section-heading text-white">
          Presencia en
          <span class="text-gradient-cyan"> todo el continente</span>
        </h2>
        <p class="font-body text-ice/60 max-w-xl mx-auto leading-relaxed">
          Con oficinas en Colombia y Miami, y presencia comercial en EE.UU., México, Colombia y China,
          llevamos soluciones flexográficas a toda Latinoamérica.
        </p>
      </div>

      <!-- Map image – large, prominent, NO crop -->
      <div ref="mapEl" class="relative mx-auto mb-14">
        <div class="relative rounded-2xl border border-cyan/20 p-2 md:p-4"
             style="box-shadow: 0 0 80px rgba(0,184,212,0.1);">
          <img
            src="/images/mapa-home-Huella-Global.png"
            alt="Mapa de cobertura Huella Global – EE.UU., México, Colombia, China"
            loading="lazy"
            class="w-full h-auto rounded-xl"
            style="filter: brightness(1.15) saturate(1.05);"
          />
        </div>
      </div>

      <!-- Office cards -->
      <div ref="cardsEl" class="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">

        <!-- Colombia -->
        <div class="glass-card flex items-start gap-4 p-6 border-l-4" style="border-left-color: #00B8D4;">
          <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
            <svg class="w-5 h-5 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div class="space-y-3">
            <div>
              <p class="text-xs font-semibold tracking-wider uppercase text-cyan">Oficina principal</p>
              <h3 class="font-display text-lg font-bold text-white mt-0.5">Colombia</h3>
            </div>
            <div class="space-y-2">
              <a
                href="tel:+573002650850"
                class="flex items-center gap-2.5 text-sm text-ice/80 hover:text-cyan transition-colors duration-200 group"
              >
                <svg class="w-4 h-4 text-cyan/60 group-hover:text-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+57 300 265 0850</span>
              </a>
              <a
                href="mailto:info@huellaglobal.com"
                class="flex items-center gap-2.5 text-sm text-ice/80 hover:text-cyan transition-colors duration-200 group"
              >
                <svg class="w-4 h-4 text-cyan/60 group-hover:text-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@huellaglobal.com</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Miami -->
        <div class="glass-card flex items-start gap-4 p-6 border-l-4" style="border-left-color: #00B8D4;">
          <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
            <svg class="w-5 h-5 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div class="space-y-3">
            <div>
              <p class="text-xs font-semibold tracking-wider uppercase text-cyan">Oficina internacional</p>
              <h3 class="font-display text-lg font-bold text-white mt-0.5">Miami, USA</h3>
            </div>
            <div class="space-y-2">
              <a
                href="tel:+17865935696"
                class="flex items-center gap-2.5 text-sm text-ice/80 hover:text-cyan transition-colors duration-200 group"
              >
                <svg class="w-4 h-4 text-cyan/60 group-hover:text-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 786 593 5696</span>
              </a>
              <a
                href="mailto:info@huellaglobal.com"
                class="flex items-center gap-2.5 text-sm text-ice/80 hover:text-cyan transition-colors duration-200 group"
              >
                <svg class="w-4 h-4 text-cyan/60 group-hover:text-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@huellaglobal.com</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const sectionEl = ref<HTMLElement | null>(null)
const headerEl = ref<HTMLElement | null>(null)
const mapEl = ref<HTMLElement | null>(null)
const cardsEl = ref<HTMLElement | null>(null)

onMounted(async () => {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionEl.value,
      start: 'top 72%',
    },
  })

  tl.from(headerEl.value, { autoAlpha: 0, immediateRender: false, y: 32, duration: 0.75, ease: 'power3.out' })
    .from(mapEl.value, { autoAlpha: 0, immediateRender: false, scale: 0.94, y: 40, duration: 0.95, ease: 'power3.out' }, '-=0.3')
    .from(cardsEl.value?.children ? Array.from(cardsEl.value.children) : [], {
      autoAlpha: 0, immediateRender: false,
      y: 32,
      duration: 0.65,
      ease: 'power3.out',
      stagger: 0.15,
    }, '-=0.4')
})
</script>
