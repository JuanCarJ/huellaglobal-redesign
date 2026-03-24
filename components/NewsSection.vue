<template>
  <section id="noticias" class="py-20 md:py-28 bg-navy" ref="sectionEl">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div ref="headerEl" class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
        <div class="space-y-4">
          <span class="section-tag">Boletines</span>
          <h2 class="section-heading text-white">
            Últimas <span class="text-gradient-cyan">noticias</span>
          </h2>
        </div>
        <a
          href="#contacto"
          class="btn-outline flex-shrink-0"
          @click.prevent="scrollToContact"
        >
          Ver todos los boletines
        </a>
      </div>

      <!-- News layout: 1 featured + 2 small -->
      <div ref="gridEl" class="grid lg:grid-cols-3 gap-6">

        <!-- Featured article -->
        <article class="lg:col-span-2 news-card group rounded-2xl overflow-hidden relative"
                 style="background: rgba(14,42,69,0.6); border: 1px solid rgba(0,184,212,0.12);">
          <!-- Image -->
          <div class="relative h-64 md:h-80 overflow-hidden">
            <img
              :src="articles[0].image"
              :alt="articles[0].title"
              width="800"
              height="320"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-navy-mid/90 via-navy-mid/30 to-transparent"></div>
            <!-- Date badge -->
            <div class="absolute top-4 left-4">
              <span class="section-tag text-xs">{{ articles[0].category }}</span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-7">
            <p class="text-xs text-ice/40 font-medium mb-3">{{ articles[0].date }}</p>
            <h3 class="font-display text-xl md:text-2xl font-bold text-white leading-tight mb-3 group-hover:text-cyan transition-colors duration-200">
              {{ articles[0].title }}
            </h3>
            <p class="font-body text-sm text-ice/60 leading-relaxed">
              {{ articles[0].excerpt }}
            </p>
            <div class="flex items-center gap-1.5 mt-5 text-sm font-medium text-cyan group-hover:gap-3 transition-all duration-200">
              Leer más
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          <!-- Cyan top border on hover -->
          <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </article>

        <!-- Small articles column -->
        <div class="flex flex-col gap-6">
          <article
            v-for="article in articles.slice(1)"
            :key="article.title"
            class="news-card group rounded-2xl overflow-hidden flex flex-col"
            style="background: rgba(14,42,69,0.6); border: 1px solid rgba(0,184,212,0.12);"
          >
            <!-- Image -->
            <div class="relative h-44 overflow-hidden flex-shrink-0">
              <img
                :src="article.image"
                :alt="article.title"
                width="400"
                height="176"
                loading="lazy"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-navy-mid/80 to-transparent"></div>
            </div>

            <!-- Content -->
            <div class="p-5 flex flex-col flex-1">
              <p class="text-xs text-ice/40 font-medium mb-2">{{ article.date }}</p>
              <h3 class="font-display text-base font-bold text-white leading-snug mb-2 group-hover:text-cyan transition-colors duration-200 flex-1">
                {{ article.title }}
              </h3>
              <div class="flex items-center gap-1.5 mt-3 text-xs font-medium text-cyan/80 group-hover:text-cyan group-hover:gap-2.5 transition-all duration-200">
                Leer más
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            <!-- Cyan top border on hover -->
            <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </article>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const sectionEl = ref<HTMLElement | null>(null)
const headerEl = ref<HTMLElement | null>(null)
const gridEl = ref<HTMLElement | null>(null)

const articles = [
  {
    title: '¡Huella Global ahora representa a Kocher+Beck!',
    excerpt:
      'Nos complace anunciar nuestra alianza estratégica con Kocher+Beck, líder mundial en herramientas para flexografía. Esta representación exclusiva nos permite ofrecer a nuestros clientes en Latinoamérica acceso directo a la tecnología más avanzada de la industria.',
    image: '/images/alianza-kocher-and-baker.jpg',
    date: 'Noticias · 2025',
    category: 'Alianzas',
  },
  {
    title: '¡Los esperamos en LabelExpo México 2025!',
    excerpt:
      'Visítenos en la feria más importante de etiquetas y empaques de Latinoamérica.',
    image: '/images/HG-MaquinasFeria.png',
    date: 'Eventos · 2025',
    category: 'Eventos',
  },
  {
    title: 'Poliéster Plata',
    excerpt:
      'Conozca las características y aplicaciones de nuestro material Poliéster Plata.',
    image: '/images/Poliestre-Plata-News.png',
    date: 'Productos · 2025',
    category: 'Productos',
  },
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

  gsap.from(headerEl.value, {
    autoAlpha: 0, immediateRender: false,
    y: 28,
    duration: 0.75,
    ease: 'power3.out',
    scrollTrigger: { trigger: sectionEl.value, start: 'top 78%' },
  })

  if (gridEl.value) {
    gsap.from(Array.from(gridEl.value.children), {
      autoAlpha: 0, immediateRender: false,
      y: 44,
      duration: 0.75,
      ease: 'power3.out',
      stagger: 0.18,
      scrollTrigger: { trigger: gridEl.value, start: 'top 78%' },
    })
  }
})
</script>

<style scoped>
.news-card {
  position: relative;
}
</style>
