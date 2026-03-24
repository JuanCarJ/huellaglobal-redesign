<template>
  <section id="nosotros" class="py-20 md:py-28 bg-surface relative overflow-hidden" ref="sectionEl">
    <!-- Light decorative gradient -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
         style="background: radial-gradient(ellipse at 90% 30%, rgba(0,102,162,0.05) 0%, transparent 55%)"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        <!-- Left: images overlapping -->
        <div ref="imagesEl" class="relative h-[420px] md:h-[520px]">
          <!-- Primary image -->
          <div
            ref="img1El"
            class="absolute top-0 left-0 w-4/5 h-80 md:h-96 rounded-2xl overflow-hidden shadow-glass"
          >
            <img
              src="/images/valor-agregado-grupo-huella-digital-productos-para-flexografia.png"
              alt="Equipo Huella Global – soluciones para flexografía"
              width="520"
              height="384"
              loading="lazy"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-tr from-navy/30 to-transparent"></div>
          </div>

          <!-- Secondary image overlapping -->
          <div
            ref="img2El"
            class="absolute bottom-0 right-0 w-3/5 h-64 md:h-72 rounded-2xl overflow-hidden shadow-glass border-4 border-surface"
          >
            <img
              src="/images/HG-MaquinasFeria.png"
              alt="Huella Global en feria de la industria flexográfica"
              width="360"
              height="288"
              loading="lazy"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-tl from-navy/20 to-transparent"></div>
          </div>

          <!-- Accent badge -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div class="bg-navy rounded-2xl px-5 py-4 shadow-glass text-center">
              <p class="font-display text-3xl font-bold text-cyan leading-none">+15</p>
              <p class="text-xs text-ice/70 mt-1 tracking-wide">años de experiencia</p>
            </div>
          </div>
        </div>

        <!-- Right: content -->
        <div ref="contentEl" class="space-y-8 lg:pt-4">
          <span
            class="section-tag"
            style="background: rgba(0,102,162,0.08); border-color: rgba(0,102,162,0.25); color: #0066A2;"
          >
            Nosotros
          </span>

          <h2 class="section-heading text-navy">
            Líderes en soluciones para la
            <span class="text-brand-blue"> industria flexográfica</span>
          </h2>

          <div class="space-y-4 font-body text-navy/70 leading-relaxed">
            <p>
              Somos un <strong class="text-navy font-semibold">grupo de empresas especializadas</strong> en la venta de materias primas
              y maquinaria para la industria flexográfica, con presencia en toda Latinoamérica.
            </p>
            <p>
              Nuestra misión es <strong class="text-navy font-semibold">proporcionar a nuestros clientes productos y servicios de alta calidad</strong>
              que satisfagan las necesidades de la industria flexográfica, a través de un amplio portafolio
              de materias primas y una red de distribución eficiente.
            </p>
            <p>
              Contamos con una sólida reputación, un amplio portafolio de productos y una
              red de distribución eficiente que nos permite atender con rapidez y calidad
              a nuestros clientes en toda la región.
            </p>
          </div>

          <!-- Values grid -->
          <div ref="valuesEl" class="grid grid-cols-2 gap-4 pt-2">
            <div
              v-for="value in values"
              :key="value.title"
              class="rounded-xl p-4 border transition-all duration-200 hover:shadow-card group"
              style="background: rgba(242,247,249,0.8); border-color: rgba(0,102,162,0.12);"
            >
              <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-blue to-cyan flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200">
                <span class="text-white text-base" v-html="value.icon"></span>
              </div>
              <h4 class="font-display text-sm font-bold text-navy leading-tight">{{ value.title }}</h4>
              <p v-if="value.note" class="text-xs text-navy/50 mt-1">{{ value.note }}</p>
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
const imagesEl = ref<HTMLElement | null>(null)
const img1El = ref<HTMLElement | null>(null)
const img2El = ref<HTMLElement | null>(null)
const contentEl = ref<HTMLElement | null>(null)
const valuesEl = ref<HTMLElement | null>(null)

const values = [
  {
    title: 'Profesionalismo',
    icon: '★',
    note: null,
  },
  {
    title: 'Tiempos de Entrega',
    icon: '⏱',
    note: null,
  },
  {
    title: 'Experiencia en el mercado',
    icon: '◎',
    note: '+15 años',
  },
  {
    title: 'Capacitaciones',
    icon: '🎓',
    note: null,
  },
]

onMounted(async () => {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  // Clip-path reveal on primary image
  gsap.from(img1El.value, {
    clipPath: 'inset(0 100% 0 0)',
    duration: 1.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionEl.value,
      start: 'top 75%',
    },
  })

  // Clip-path reveal on secondary image (delayed)
  gsap.from(img2El.value, {
    clipPath: 'inset(100% 0 0 0)',
    duration: 1,
    ease: 'power3.out',
    delay: 0.3,
    scrollTrigger: {
      trigger: sectionEl.value,
      start: 'top 72%',
    },
  })

  // Content reveal
  gsap.from(contentEl.value, {
    autoAlpha: 0, immediateRender: false,
    x: 40,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionEl.value,
      start: 'top 72%',
    },
  })

  // Values stagger
  if (valuesEl.value) {
    gsap.from(Array.from(valuesEl.value.children), {
      autoAlpha: 0, immediateRender: false,
      y: 24,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: valuesEl.value,
        start: 'top 85%',
      },
    })
  }
})
</script>
