<template>
  <section id="video" class="py-20 md:py-28 bg-surface" ref="sectionEl">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div ref="headerEl" class="text-center mb-12 space-y-4">
        <span class="section-tag" style="background: rgba(0,102,162,0.08); border-color: rgba(0,102,162,0.25); color: #0066A2;">
          Video corporativo
        </span>
        <h2 class="section-heading text-navy">
          Conozca <span class="text-brand-blue">Huella Global</span>
        </h2>
        <p class="font-body text-navy/60 max-w-xl mx-auto leading-relaxed">
          Descubra cómo somos su socio estratégico en la industria flexográfica,
          con soluciones de materias primas para etiquetas y empaques de alta calidad.
        </p>
      </div>

      <!-- Video embed -->
      <div
        ref="videoEl"
        class="relative rounded-2xl overflow-hidden shadow-glass aspect-video bg-navy"
      >
        <!-- Border glow ring -->
        <div class="absolute inset-0 rounded-2xl pointer-events-none z-10"
             style="box-shadow: inset 0 0 0 1px rgba(0, 102, 162, 0.25)"></div>

        <iframe
          src="https://www.youtube.com/embed/nVAAtV74W4U?rel=0&modestbranding=1&color=white"
          title="Huella Global Corporation – Video Corporativo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="absolute inset-0 w-full h-full"
          loading="lazy"
        ></iframe>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const sectionEl = ref<HTMLElement | null>(null)
const headerEl = ref<HTMLElement | null>(null)
const videoEl = ref<HTMLElement | null>(null)

onMounted(async () => {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionEl.value,
      start: 'top 75%',
    },
  })

  tl.from(headerEl.value, { autoAlpha: 0, immediateRender: false, y: 32, duration: 0.7, ease: 'power3.out' })
    .from(videoEl.value, {
      autoAlpha: 0, immediateRender: false,
      y: 40,
      scale: 0.96,
      duration: 0.85,
      ease: 'power3.out',
    }, '-=0.3')
})
</script>
