<template>
  <div class="min-h-screen bg-navy">
    <AppHeader />

    <!-- 404 state -->
    <div v-if="!category" class="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <span class="section-tag mb-6">Categoría no encontrada</span>
      <h1 class="section-heading text-white mb-4">
        Producto no disponible
      </h1>
      <p class="font-body text-ice/60 max-w-md mb-8">
        La categoría que buscas no existe en nuestro catálogo. Revisa todos nuestros productos disponibles.
      </p>
      <NuxtLink to="/productos" class="btn-primary">
        Ver todos los productos
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </NuxtLink>
    </div>

    <template v-else>
      <!-- Hero Banner -->
      <section
        ref="heroEl"
        class="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
        aria-label="Encabezado de categoría"
      >
        <!-- Background image with overlay -->
        <div class="absolute inset-0 z-0">
          <img
            :src="category.heroImage"
            :alt="category.name"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/75 to-navy"></div>
          <div class="absolute inset-0 bg-mesh-dark opacity-70"></div>
        </div>

        <!-- Decorative cyan line -->
        <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent z-10"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Breadcrumb -->
          <nav class="flex items-center gap-2 text-xs font-body text-ice/40 mb-8" aria-label="Ruta de navegación">
            <NuxtLink to="/" class="hover:text-cyan transition-colors duration-200">Inicio</NuxtLink>
            <svg class="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <NuxtLink to="/productos" class="hover:text-cyan transition-colors duration-200">Productos</NuxtLink>
            <svg class="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span class="text-ice/70 truncate max-w-[200px]">{{ category.name }}</span>
          </nav>

          <div ref="heroContentEl" class="max-w-3xl">
            <span class="section-tag mb-5">Catálogo de productos</span>
            <h1 class="section-heading text-white mt-4 mb-6">
              {{ category.name.split(' ')[0] }}
              <span class="text-gradient-cyan"> {{ category.name.slice(category.name.indexOf(' ') + 1) }}</span>
            </h1>
            <p class="font-body text-ice/60 text-lg leading-relaxed max-w-2xl">
              Explore nuestra línea completa de
              {{ category.name.toLowerCase() }} — materias primas de alta calidad para la industria flexográfica.
            </p>
          </div>

          <!-- Stats row -->
          <div class="flex items-center gap-6 mt-10">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-cyan animate-pulse"></div>
              <span class="text-xs font-body text-ice/50 tracking-wide">
                {{ category.subProducts.length }} {{ category.subProducts.length === 1 ? 'producto' : 'productos' }} disponibles
              </span>
            </div>
            <div class="h-4 w-px bg-white/10"></div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-cyan/50"></div>
              <span class="text-xs font-body text-ice/50 tracking-wide">Alta calidad garantizada</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Sub-products grid -->
      <section
        ref="productsEl"
        class="py-16 md:py-24"
        aria-label="Productos de la categoría"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            ref="cardsContainerEl"
          >
            <article
              v-for="(product, i) in category.subProducts"
              :key="product.slug"
              ref="cardEls"
              class="sub-product-card glass-card overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1"
              :style="{ '--card-index': i }"
            >
              <!-- Product image -->
              <div class="relative overflow-hidden h-56 bg-navy-light flex-shrink-0">
                <img
                  :src="product.image"
                  :alt="product.name"
                  width="480"
                  height="224"
                  loading="lazy"
                  class="sub-product-img w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-navy-mid/80 via-transparent to-transparent"></div>
                <!-- Product index badge -->
                <div class="absolute top-4 left-4 w-8 h-8 rounded-full bg-cyan/20 border border-cyan/40 flex items-center justify-center">
                  <span class="text-xs font-display font-bold text-cyan">{{ String(i + 1).padStart(2, '0') }}</span>
                </div>
              </div>

              <!-- Card content -->
              <div class="p-6 flex flex-col flex-1">
                <h2 class="font-display text-lg font-bold text-ice leading-tight mb-3 group-hover:text-cyan transition-colors duration-200">
                  {{ product.name }}
                </h2>

                <p v-if="product.description" class="font-body text-sm text-ice/60 leading-relaxed mb-4">
                  {{ product.description }}
                </p>

                <!-- Specs badge -->
                <div
                  v-if="product.specs"
                  class="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-lg text-xs font-body font-medium text-cyan bg-cyan/10 border border-cyan/20 self-start"
                >
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  {{ product.specs }}
                </div>

                <!-- Features list -->
                <ul
                  v-if="product.features && product.features.length"
                  class="mt-auto space-y-2"
                >
                  <li
                    v-for="feature in product.features"
                    :key="feature"
                    class="flex items-start gap-2.5 text-sm font-body text-ice/70"
                  >
                    <svg class="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section
        ref="ctaEl"
        class="py-16 md:py-20 relative overflow-hidden"
        aria-label="Llamada a la acción"
      >
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-navy-light/40 to-navy-light/60 pointer-events-none"></div>
        <div class="absolute inset-0 bg-mesh-dark opacity-50 pointer-events-none"></div>

        <!-- Decorative glow -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan/5 blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span class="section-tag mb-6">Cotización</span>
          <h2 class="section-heading text-white mt-4 mb-4">
            ¿Interesado en
            <span class="text-gradient-cyan"> este producto?</span>
          </h2>
          <p class="font-body text-ice/60 leading-relaxed mb-10 text-lg">
            Contáctenos para recibir información detallada, especificaciones técnicas y una cotización personalizada para su negocio.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink to="/#contacto" class="btn-primary text-base px-8 py-4">
              Solicitar cotización
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
            <a
              href="https://wa.link/u5jcdn"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-outline text-base px-8 py-4"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <!-- Back navigation -->
      <div class="py-10 border-t border-white/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <NuxtLink
              to="/productos"
              class="inline-flex items-center gap-2.5 text-sm font-body font-medium text-ice/50 hover:text-cyan transition-colors duration-200 group"
            >
              <svg
                class="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              Ver todos los productos
            </NuxtLink>

            <!-- Sibling categories quick nav -->
            <div class="flex items-center gap-3 flex-wrap">
              <span class="text-xs font-body text-ice/30 tracking-wide hidden sm:block">Otras categorías:</span>
              <div class="flex flex-wrap gap-2">
                <NuxtLink
                  v-for="sibling in siblingCategories"
                  :key="sibling.slug"
                  :to="`/productos/${sibling.slug}`"
                  class="text-xs font-body text-ice/40 hover:text-cyan px-3 py-1.5 rounded-lg border border-white/5 hover:border-cyan/30 transition-all duration-200"
                >
                  {{ sibling.name }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <AppFooter />
    <WhatsAppFloat />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { productCategories, getCategoryBySlug } from '~/data/products'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const category = computed(() => getCategoryBySlug(slug.value))

const siblingCategories = computed(() =>
  productCategories.filter((c) => c.slug !== slug.value)
)

// SEO
useSeoMeta({
  title: computed(() =>
    category.value
      ? `${category.value.name} – Huella Global Corporation`
      : 'Producto no encontrado – Huella Global Corporation'
  ),
  description: computed(() =>
    category.value
      ? `Explore nuestra línea completa de ${category.value.name.toLowerCase()}. Materias primas de alta calidad para la industria flexográfica. Huella Global Corporation.`
      : 'Categoría de producto no encontrada.'
  ),
  ogTitle: computed(() => category.value?.name ?? 'Huella Global Corporation'),
  ogDescription: computed(() =>
    category.value
      ? `Materias primas de alta calidad: ${category.value.name}. Huella Global Corporation.`
      : 'Huella Global Corporation'
  ),
  ogType: 'website',
  ogLocale: 'es_CO',
  twitterCard: 'summary_large_image',
})

// Animation refs
const heroEl = ref<HTMLElement | null>(null)
const heroContentEl = ref<HTMLElement | null>(null)
const productsEl = ref<HTMLElement | null>(null)
const cardsContainerEl = ref<HTMLElement | null>(null)
const ctaEl = ref<HTMLElement | null>(null)

onMounted(async () => {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  if (!category.value) return

  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  // Hero content reveal
  if (heroContentEl.value) {
    gsap.from(heroContentEl.value.children, {
      autoAlpha: 0,
      immediateRender: false,
      y: 32,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.12,
    })
  }

  // Sub-product cards stagger
  const cards = cardsContainerEl.value?.querySelectorAll('.sub-product-card')
  if (cards && cards.length) {
    gsap.from(cards, {
      autoAlpha: 0,
      immediateRender: false,
      y: 52,
      duration: 0.75,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: productsEl.value,
        start: 'top 72%',
      },
    })
  }

  // CTA reveal
  if (ctaEl.value) {
    gsap.from(ctaEl.value, {
      autoAlpha: 0,
      immediateRender: false,
      y: 30,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ctaEl.value,
        start: 'top 85%',
      },
    })
  }
})
</script>

<style scoped>
.sub-product-card {
  border-color: rgba(0, 184, 212, 0.15);
}
.sub-product-card:hover {
  border-color: rgba(0, 184, 212, 0.4);
  box-shadow: 0 0 40px rgba(0, 184, 212, 0.12), 0 12px 40px rgba(7, 27, 47, 0.5);
}
</style>
