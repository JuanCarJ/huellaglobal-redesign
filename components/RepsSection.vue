<template>
  <section id="representaciones" class="py-20 md:py-28 bg-navy-light relative overflow-hidden" ref="sectionEl">
    <!-- Decorative bg gradient -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
         style="background: radial-gradient(ellipse at 80% 50%, rgba(0,102,162,0.12) 0%, transparent 60%)"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- Left: images -->
        <div ref="imagesEl" class="relative">
          <!-- Main image -->
          <div ref="mainImgEl" class="relative rounded-2xl overflow-hidden shadow-glass">
            <img
              src="/images/alianza-kocher-and-baker.jpg"
              alt="Alianza estratégica Huella Global con Kocher+Beck"
              width="600"
              height="400"
              loading="lazy"
              class="w-full h-80 md:h-96 object-cover"
            />
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>

            <!-- HG Alianza badge on image -->
            <div class="absolute bottom-5 left-5">
              <img
                src="/images/HG-Alianza.png"
                alt="HG Alianza"
                width="160"
                height="60"
                class="h-12 w-auto object-contain drop-shadow-lg"
              />
            </div>
          </div>

          <!-- Secondary thumbnail -->
          <div
            class="absolute -bottom-6 -right-4 md:bottom-auto md:top-1/2 md:-right-8 md:-translate-y-1/2 w-36 md:w-44 rounded-xl overflow-hidden shadow-glass border-2 border-navy-light"
          >
            <img
              src="/images/representaciones-web.png"
              alt="Representaciones Huella Global"
              width="176"
              height="128"
              loading="lazy"
              class="w-full h-28 md:h-32 object-cover"
            />
          </div>
        </div>

        <!-- Right: content -->
        <div ref="contentEl" class="space-y-7 pt-8 lg:pt-0">
          <span class="section-tag">Representaciones exclusivas</span>

          <h2 class="section-heading text-white">
            Representantes de marcas
            <span class="text-gradient-cyan"> reconocidas a nivel mundial</span>
          </h2>

          <p class="font-body text-ice/70 leading-relaxed">
            Huella Global Corporation actúa como representante exclusivo de las marcas más
            reconocidas de la industria flexográfica, llevando a Latinoamérica los productos
            y soluciones de vanguardia que su empresa necesita.
          </p>

          <p class="font-body text-ice/70 leading-relaxed">
            Nuestra alianza estratégica con <strong class="text-cyan font-semibold">Kocher+Beck</strong>,
            líder mundial en herramientas para flexografía, nos permite ofrecer a nuestros clientes
            acceso directo a tecnología de punta con soporte técnico especializado.
          </p>

          <!-- Partner logos preview -->
          <div class="flex flex-wrap gap-4 items-center">
            <div
              v-for="partner in featuredPartners"
              :key="partner.name"
              class="bg-white/8 border border-white/10 rounded-xl px-5 py-4 flex items-center justify-center"
            >
              <img
                :src="partner.logo"
                :alt="partner.name"
                width="80"
                height="32"
                class="h-12 w-auto max-w-[140px] object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          </div>

          <!-- CTA -->
          <a
            href="#contacto"
            class="btn-primary inline-flex"
            @click.prevent="scrollToContact"
          >
            Consultar disponibilidad
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const sectionEl = ref<HTMLElement | null>(null)
const imagesEl = ref<HTMLElement | null>(null)
const mainImgEl = ref<HTMLElement | null>(null)
const contentEl = ref<HTMLElement | null>(null)

const featuredPartners = [
  { name: 'Kocher+Beck', logo: '/images/LogoKandB-Web.png' },
  { name: 'OMET', logo: '/images/omet-logo.png' },
  { name: 'DCM', logo: '/images/DCM-REPRESENTACION-HUELLA-GLOBAL-web.png' },
  { name: 'Flexcon', logo: '/images/Flexcon-REPRESENTACION-HUELLA-GLOBAL-web.png' },
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

  // Content reveal
  gsap.from(contentEl.value, {
    autoAlpha: 0, immediateRender: false,
    x: 48,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionEl.value,
      start: 'top 72%',
    },
  })

  // Parallax on main image
  gsap.to(mainImgEl.value, {
    y: -40,
    ease: 'none',
    scrollTrigger: {
      trigger: sectionEl.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5,
    },
  })

  // Images block from left
  gsap.from(imagesEl.value, {
    autoAlpha: 0, immediateRender: false,
    x: -40,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionEl.value,
      start: 'top 75%',
    },
  })
})
</script>
