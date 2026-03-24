<template>
  <section
    id="inicio"
    ref="heroEl"
    class="relative min-h-screen flex items-center overflow-hidden bg-navy"
  >
    <!-- Background photo (subtle) -->
    <div class="absolute inset-0 z-0" aria-hidden="true">
      <img
        src="/images/valor-agregado-grupo-huella-digital-productos-para-flexografia.png"
        alt=""
        class="w-full h-full object-cover"
        loading="eager"
      />
      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-navy/[0.72]"></div>
      <!-- Gradient fade — darker at top (header legibility) and bottom (transition) -->
      <div class="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/80"></div>
    </div>

    <!-- Animated mesh gradient background -->
    <div class="absolute inset-0 pointer-events-none z-[1]" aria-hidden="true">
      <div
        ref="meshEl"
        class="absolute inset-0"
        :style="meshStyle"
      ></div>
      <!-- Subtle grid overlay -->
      <div class="absolute inset-0 hero-grid-overlay"></div>
    </div>

    <!-- Decorative fingerprint SVG -->
    <div
      ref="fpEl"
      class="absolute right-0 top-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] pointer-events-none select-none fp-deco"
      aria-hidden="true"
    >
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <circle cx="200" cy="200" r="180" stroke="#00B8D4" stroke-width="1.5" stroke-dasharray="4 6"/>
        <circle cx="200" cy="200" r="155" stroke="#00B8D4" stroke-width="1.2" stroke-dasharray="3 8"/>
        <circle cx="200" cy="200" r="130" stroke="#0066A2" stroke-width="1.2" stroke-dasharray="3 7"/>
        <circle cx="200" cy="200" r="106" stroke="#00B8D4" stroke-width="1" stroke-dasharray="4 6"/>
        <circle cx="200" cy="200" r="83" stroke="#0066A2" stroke-width="1" stroke-dasharray="3 9"/>
        <circle cx="200" cy="200" r="62" stroke="#00B8D4" stroke-width="1" stroke-dasharray="2 8"/>
        <circle cx="200" cy="200" r="43" stroke="#0066A2" stroke-width="0.8" stroke-dasharray="3 7"/>
        <circle cx="200" cy="200" r="26" stroke="#00B8D4" stroke-width="0.8" stroke-dasharray="2 6"/>
        <circle cx="200" cy="200" r="12" stroke="#00B8D4" stroke-width="0.8"/>
        <!-- Fingerprint ridge lines -->
        <path d="M200 20 Q240 80 200 140 Q160 200 200 260" stroke="#00B8D4" stroke-width="0.8" fill="none" opacity="0.5"/>
        <path d="M200 25 Q245 85 205 145 Q165 205 205 265" stroke="#00B8D4" stroke-width="0.6" fill="none" opacity="0.4"/>
        <path d="M200 15 Q235 75 195 135 Q155 195 195 255" stroke="#0066A2" stroke-width="0.6" fill="none" opacity="0.4"/>
        <path d="M140 50 Q120 110 150 170 Q180 230 160 290" stroke="#00B8D4" stroke-width="0.7" fill="none" opacity="0.4"/>
        <path d="M260 50 Q280 110 250 170 Q220 230 240 290" stroke="#00B8D4" stroke-width="0.7" fill="none" opacity="0.4"/>
        <path d="M80 130 Q70 180 100 230 Q130 280 110 330" stroke="#0066A2" stroke-width="0.6" fill="none" opacity="0.35"/>
        <path d="M320 130 Q330 180 300 230 Q270 280 290 330" stroke="#0066A2" stroke-width="0.6" fill="none" opacity="0.35"/>
      </svg>
    </div>

    <!-- Cyan accent line -->
    <div
      class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cyan to-transparent opacity-60"
      aria-hidden="true"
    ></div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Left column -->
        <div class="space-y-7">
          <!-- Badge -->
          <div ref="badgeEl" class="hero__badge">
            <span class="section-tag">
              <span class="w-2 h-2 rounded-full bg-cyan animate-pulse-dot inline-block"></span>
              Más de 15 años en la industria flexográfica
            </span>
          </div>

          <!-- Title -->
          <h1
            ref="titleEl"
            class="hero__title font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Somos su socio confiable en el
            <span class="text-gradient-cyan"> abastecimiento de materias primas</span>
            para etiquetas y empaques innovadores
          </h1>

          <!-- Subtitle -->
          <p
            ref="textEl"
            class="hero__text font-body text-lg text-ice/75 leading-relaxed max-w-xl"
          >
            Nos enorgullece ser líderes en la industria al proporcionar soluciones de alta calidad
            y vanguardia que impulsan la creatividad y funcionalidad en tus productos.
          </p>

          <!-- CTAs -->
          <div ref="ctasEl" class="hero__ctas flex flex-wrap gap-4 pt-2">
            <a
              href="#productos"
              class="btn-primary"
              @click.prevent="scrollToSection('productos')"
            >
              Explorar productos
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#contacto"
              class="btn-outline"
              @click.prevent="scrollToSection('contacto')"
            >
              Solicitar cotización
            </a>
          </div>

          <!-- Presence indicator -->
          <div ref="presenceEl" class="flex items-center gap-4 pt-2">
            <div class="flex items-center gap-2 text-sm text-ice/50">
              <svg class="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
              Presencia en EE.UU., México, Colombia y China
            </div>
          </div>
        </div>

        <!-- Right column – Hero image -->
        <div
          ref="visualEl"
          class="hero__visual relative flex items-center justify-center lg:justify-end"
        >
          <!-- Glow backdrop -->
          <div
            class="absolute inset-0 rounded-3xl opacity-30"
            style="background: radial-gradient(ellipse at center, rgba(0,184,212,0.4) 0%, transparent 70%)"
          ></div>

          <!-- Spotlight ring -->
          <div
            class="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border border-cyan/10 animate-pulse"
          ></div>
          <div
            class="absolute w-64 h-64 md:w-72 md:h-72 rounded-full border border-cyan/15"
          ></div>

          <!-- Main product image -->
          <div class="relative z-10 animate-float">
            <img
              src="/images/fotohome2B-1.png"
              alt="Productos Huella Global – materias primas para etiquetas y empaques"
              width="560"
              height="480"
              loading="eager"
              class="w-full max-w-sm md:max-w-md lg:max-w-lg drop-shadow-2xl"
             
            />
          </div>

          <!-- Decorative card – floating element -->
          <div
            class="absolute -bottom-4 -left-4 md:bottom-8 md:left-0 glass-card px-4 py-3 flex items-center gap-3 z-20"
            style="animation: float 8s ease-in-out infinite 2s"
          >
            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-cyan to-brand-blue flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="text-xs font-semibold text-ice leading-none">Alta calidad</p>
              <p class="text-[10px] text-ice/50 mt-0.5">Soluciones para flexografía</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
      <span class="text-xs text-ice/30 tracking-widest uppercase font-medium">Explorar</span>
      <div class="w-5 h-8 rounded-full border border-ice/20 flex items-start justify-center p-1">
        <div class="w-1 h-2 bg-cyan rounded-full scroll-dot"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const heroEl = ref<HTMLElement | null>(null)
const meshEl = ref<HTMLElement | null>(null)
const fpEl = ref<HTMLElement | null>(null)
const badgeEl = ref<HTMLElement | null>(null)
const titleEl = ref<HTMLElement | null>(null)
const textEl = ref<HTMLElement | null>(null)
const ctasEl = ref<HTMLElement | null>(null)
const visualEl = ref<HTMLElement | null>(null)
const presenceEl = ref<HTMLElement | null>(null)

// GSAP-tweened gradient position values
const grad1X = ref(30)
const grad1Y = ref(20)
const grad2X = ref(80)
const grad2Y = ref(60)

const meshStyle = computed(() => ({
  background: `
    radial-gradient(ellipse at ${grad1X.value}% ${grad1Y.value}%, rgba(0, 102, 162, 0.2) 0%, transparent 55%),
    radial-gradient(ellipse at ${grad2X.value}% ${grad2Y.value}%, rgba(0, 184, 212, 0.12) 0%, transparent 45%)
  `,
}))

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(async () => {
  if (typeof window === 'undefined') return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return

  // Dynamically import GSAP on client only
  const { gsap } = await import('gsap')

  // Entrance timeline
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.from(badgeEl.value, { autoAlpha: 0, x: -24, duration: 0.7 })
    .from(titleEl.value, { autoAlpha: 0, y: 36, duration: 0.75 }, '-=0.35')
    .from(textEl.value, { autoAlpha: 0, y: 24, duration: 0.65 }, '-=0.35')
    .from(ctasEl.value, { autoAlpha: 0, y: 20, duration: 0.6 }, '-=0.3')
    .from(presenceEl.value, { autoAlpha: 0, y: 16, duration: 0.5 }, '-=0.25')
    .from(visualEl.value, { autoAlpha: 0, x: 48, duration: 0.9 }, '-=0.6')

  // Animated mesh gradient tween
  gsap.to(grad1X, {
    value: 45,
    duration: 12,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })
  gsap.to(grad1Y, {
    value: 40,
    duration: 15,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })
  gsap.to(grad2X, {
    value: 65,
    duration: 18,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })
  gsap.to(grad2Y, {
    value: 35,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })

  // Fingerprint slow rotation
  if (fpEl.value) {
    gsap.to(fpEl.value, {
      rotation: 15,
      duration: 40,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      transformOrigin: 'center center',
    })
  }
})
</script>

<style scoped>
.hero-grid-overlay {
  background-image:
    linear-gradient(rgba(0, 184, 212, 0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 184, 212, 0.015) 1px, transparent 1px);
  background-size: 60px 60px;
}

.scroll-dot {
  animation: scroll-bounce 1.6s ease-in-out infinite;
}

@keyframes scroll-bounce {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(10px); opacity: 0.3; }
}
</style>
