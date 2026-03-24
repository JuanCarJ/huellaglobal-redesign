<template>
  <section class="py-12 md:py-16 bg-surface border-y border-navy/10" aria-label="Representaciones exclusivas">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <p class="text-center text-xs font-semibold tracking-widest uppercase text-navy/40">
        Representaciones exclusivas
      </p>
    </div>

    <!-- Scroll container -->
    <div class="relative overflow-hidden" ref="trackWrapper">
      <!-- Left fade -->
      <div class="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
           style="background: linear-gradient(90deg, #F2F7F9 0%, transparent 100%)"></div>
      <!-- Right fade -->
      <div class="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
           style="background: linear-gradient(270deg, #F2F7F9 0%, transparent 100%)"></div>

      <!-- Scrolling track -->
      <div class="flex gap-0 partners-track" aria-hidden="true">
        <!-- First set -->
        <div
          v-for="partner in partners"
          :key="`a-${partner.name}`"
          class="flex-shrink-0 flex items-center justify-center px-10 py-3"
        >
          <img
            :src="partner.logo"
            :alt="partner.name"
            width="120"
            height="48"
            class="h-16 md:h-20 w-auto max-w-[180px] object-contain partner-logo"
            loading="lazy"
          />
        </div>
        <!-- Duplicate for seamless loop -->
        <div
          v-for="partner in partners"
          :key="`b-${partner.name}`"
          class="flex-shrink-0 flex items-center justify-center px-10 py-3"
          aria-hidden="true"
        >
          <img
            :src="partner.logo"
            :alt="partner.name"
            width="120"
            height="48"
            class="h-16 md:h-20 w-auto max-w-[180px] object-contain partner-logo"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const trackWrapper = ref<HTMLElement | null>(null)

const partners = [
  { name: 'Kocher+Beck', logo: '/images/LogoKandB-Web.png' },
  { name: 'OMET', logo: '/images/omet-logo.png' },
  { name: 'DCM', logo: '/images/DCM-REPRESENTACION-HUELLA-GLOBAL-web.png' },
  { name: 'Flexcon', logo: '/images/Flexcon-REPRESENTACION-HUELLA-GLOBAL-web.png' },
  { name: 'Qspac', logo: '/images/Qspac-REPRESENTACION-HUELLA-GLOBAL-web.png' },
  { name: 'Wasau', logo: '/images/Wasau-REPRESENTACION-HUELLA-GLOBAL-web.png' },
  { name: 'Interflex', logo: '/images/interflex.png' },
  { name: 'Pantec', logo: '/images/pantec.png' },
]
</script>

<style scoped>
.partners-track {
  /* Width = 2× content to allow seamless loop */
  width: max-content;
  animation: scroll-left 30s linear infinite;
}

.partners-track:hover {
  animation-play-state: paused;
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
