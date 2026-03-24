<template>
  <section id="productos" class="py-20 md:py-28 bg-navy" ref="sectionEl">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div ref="headerEl" class="text-center mb-16 space-y-5">
        <span class="section-tag">Catálogo completo</span>
        <h2 class="section-heading text-white">
          Su fuente confiable de materias primas<br class="hidden md:block" />
          <span class="text-gradient-cyan"> de alta calidad</span>
        </h2>
        <p class="font-body text-ice/60 max-w-2xl mx-auto leading-relaxed">
          Ofrecemos un amplio portafolio de materias primas especializadas para la industria
          flexográfica. Cada producto está seleccionado para garantizar la más alta calidad
          en sus etiquetas y empaques.
        </p>
      </div>

      <!-- Products grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <NuxtLink
          v-for="(product, i) in products"
          :key="product.slug"
          :to="`/productos/${product.slug}`"
          ref="cardEls"
          class="product-card group"
          :style="{ '--card-index': i }"
          :aria-label="`Ver detalles de ${product.name}`"
        >
          <!-- Image -->
          <div class="relative overflow-hidden h-52 bg-navy-light">
            <img
              :src="product.image"
              :alt="product.name"
              width="320"
              height="208"
              loading="lazy"
              class="product-img w-full h-full object-cover transition-transform duration-500"
            />
            <!-- Gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-navy-mid/80 via-transparent to-transparent"></div>
          </div>

          <!-- Card body -->
          <div class="p-5">
            <h3 class="font-display text-base font-semibold text-ice leading-tight group-hover:text-cyan transition-colors duration-200">
              {{ product.name }}
            </h3>

            <!-- CTA link -->
            <div class="flex items-center gap-1 mt-3 text-xs font-medium text-cyan/70 group-hover:text-cyan transition-colors duration-200">
              <span>Ver detalles</span>
              <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Bottom CTA -->
      <div ref="ctaEl" class="text-center mt-14">
        <a
          href="#contacto"
          class="btn-primary text-base px-8 py-4"
          @click.prevent="scrollToContact"
        >
          Solicitar catálogo completo
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const sectionEl = ref<HTMLElement | null>(null)
const headerEl = ref<HTMLElement | null>(null)
const ctaEl = ref<HTMLElement | null>(null)

const products = [
  { slug: 'autoadhesivos-in-mold', name: 'Autoadhesivos / In-mold', image: '/images/Adhesivos-Autoadheribles.png' },
  { slug: 'laminacion-bopp-pet', name: 'Laminación BOPP / PET', image: '/images/Laminacion.png' },
  { slug: 'termoencogibles', name: 'Termoencogibles', image: '/images/Termoencogibles.png' },
  { slug: 'wrap-around-empaque-flexible', name: 'Wrap Around – Empaque Flexible', image: '/images/Empaque-flexible.png' },
  { slug: 'polyboard-papeles-y-cartones', name: 'Polyboard – Papeles y Cartones', image: '/images/Polyboard-papeles-cartones.png' },
  { slug: 'cintas-de-transferencia-termica', name: 'Cintas de Transferencia Térmica', image: '/images/cintas-trasnferencia-termica.png' },
  { slug: 'maquinaria', name: 'Maquinaria', image: '/images/maquinaria.png' },
  { slug: 'accesorios', name: 'Accesorios', image: '/images/accesorios.png' },
]

function scrollToContact() {
  const el = document.getElementById('contacto')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(async () => {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  // Header reveal
  gsap.from(headerEl.value, {
    autoAlpha: 0, immediateRender: false,
    y: 36,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionEl.value,
      start: 'top 78%',
    },
  })

  // Cards stagger reveal — use CSS selector for reliability
  const cards = sectionEl.value?.querySelectorAll('.product-card')
  if (cards && cards.length) {
    gsap.from(cards, {
      autoAlpha: 0, immediateRender: false,
      y: 48,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: sectionEl.value,
        start: 'top 65%',
      },
    })
  }

  // CTA reveal
  gsap.from(ctaEl.value, {
    autoAlpha: 0, immediateRender: false,
    y: 24,
    duration: 0.7,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: ctaEl.value,
      start: 'top 90%',
    },
  })
})
</script>
