<template>
  <div class="min-h-screen bg-navy">
    <AppHeader />

    <!-- Hero Banner -->
    <section
      ref="heroEl"
      class="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28"
      aria-label="Catálogo de productos"
    >
      <!-- Mesh background -->
      <div class="absolute inset-0 bg-mesh-dark"></div>

      <!-- Decorative top line -->
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent"></div>

      <!-- Floating glow accents -->
      <div class="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-brand-blue/10 blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-cyan/5 blur-3xl pointer-events-none"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-xs font-body text-ice/40 mb-8" aria-label="Ruta de navegación">
          <NuxtLink to="/" class="hover:text-cyan transition-colors duration-200">Inicio</NuxtLink>
          <svg class="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span class="text-ice/70">Productos</span>
        </nav>

        <div ref="heroContentEl" class="text-center max-w-3xl mx-auto">
          <span class="section-tag mb-5">Catálogo completo</span>
          <h1 class="section-heading text-white mt-4 mb-6">
            Materias primas de<br class="hidden md:block" />
            <span class="text-gradient-cyan"> alta calidad</span>
          </h1>
          <p class="font-body text-ice/60 text-lg leading-relaxed">
            Ofrecemos un amplio portafolio de materias primas especializadas para la industria flexográfica. Cada producto está seleccionado para garantizar la más alta calidad en sus etiquetas y empaques.
          </p>
        </div>
      </div>
    </section>

    <!-- Categories grid -->
    <section
      ref="gridEl"
      class="py-16 md:py-24"
      aria-label="Categorías de productos"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <NuxtLink
            v-for="(category, i) in categories"
            :key="category.slug"
            :to="`/productos/${category.slug}`"
            ref="cardEls"
            class="product-card group"
            :style="{ '--card-index': i }"
            :aria-label="`Ver productos de ${category.name}`"
          >
            <!-- Image -->
            <div class="relative overflow-hidden h-52 bg-navy-light">
              <img
                :src="category.image"
                :alt="category.name"
                width="320"
                height="208"
                loading="lazy"
                class="product-img w-full h-full object-cover transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-navy-mid/80 via-transparent to-transparent"></div>
              <!-- Sub-product count badge -->
              <div class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-cyan/20 border border-cyan/30 backdrop-blur-sm">
                <span class="text-xs font-body font-semibold text-cyan">
                  {{ category.subProducts.length }} {{ category.subProducts.length === 1 ? 'producto' : 'productos' }}
                </span>
              </div>
            </div>

            <!-- Card body -->
            <div class="p-5">
              <div class="flex items-start gap-3">
                <span class="text-cyan text-xl leading-none mt-0.5 flex-shrink-0">{{ category.icon }}</span>
                <h2 class="font-display text-base font-semibold text-ice leading-tight group-hover:text-cyan transition-colors duration-200">
                  {{ category.name }}
                </h2>
              </div>

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
        <div ref="ctaEl" class="text-center mt-16">
          <NuxtLink to="/#contacto" class="btn-primary text-base px-8 py-4">
            Solicitar catálogo completo
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <AppFooter />
    <WhatsAppFloat />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { productCategories } from '~/data/products'

const categories = productCategories

useSeoMeta({
  title: 'Productos – Huella Global Corporation',
  description:
    'Catálogo completo de materias primas para la industria flexográfica: autoadhesivos, laminación, termoencogibles, maquinaria y más. Huella Global Corporation.',
  ogTitle: 'Catálogo de Productos – Huella Global Corporation',
  ogDescription:
    'Materias primas de alta calidad para etiquetas y empaques. Explore nuestro portafolio completo.',
  ogType: 'website',
  ogLocale: 'es_CO',
  twitterCard: 'summary_large_image',
})

const heroEl = ref<HTMLElement | null>(null)
const heroContentEl = ref<HTMLElement | null>(null)
const gridEl = ref<HTMLElement | null>(null)
const ctaEl = ref<HTMLElement | null>(null)

onMounted(async () => {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  // Hero content reveal
  if (heroContentEl.value?.children) {
    gsap.from(heroContentEl.value.children, {
      autoAlpha: 0,
      immediateRender: false,
      y: 32,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.12,
    })
  }

  // Cards stagger reveal
  const cards = gridEl.value?.querySelectorAll('.product-card')
  if (cards && cards.length) {
    gsap.from(cards, {
      autoAlpha: 0,
      immediateRender: false,
      y: 48,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: {
        trigger: gridEl.value,
        start: 'top 72%',
      },
    })
  }

  // CTA reveal
  if (ctaEl.value) {
    gsap.from(ctaEl.value, {
      autoAlpha: 0,
      immediateRender: false,
      y: 24,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ctaEl.value,
        start: 'top 90%',
      },
    })
  }
})
</script>
