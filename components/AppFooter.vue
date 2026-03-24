<template>
  <footer class="bg-navy border-t border-white/5" aria-label="Pie de página">
    <!-- Main footer -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

        <!-- Column 1: Brand -->
        <div class="space-y-5">
          <img
            src="/images/Huella-Global-Webh.png"
            alt="Huella Global Corporation"
            width="180"
            height="56"
            class="h-12 w-auto brightness-0 invert"
          />
          <p class="text-sm text-ice/50 leading-relaxed">
            Somos su socio confiable en el abastecimiento de materias primas para etiquetas
            y empaques innovadores. Más de 15 años en la industria flexográfica.
          </p>
          <!-- Social links -->
          <div class="flex gap-3">
            <a
              href="https://wa.link/u5jcdn"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-white/5 hover:bg-cyan/15 border border-white/8 hover:border-cyan/30 flex items-center justify-center transition-all duration-200"
              aria-label="WhatsApp Huella Global"
            >
              <svg class="w-4 h-4 text-ice/60 hover:text-cyan" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/watch?v=nVAAtV74W4U"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-white/5 hover:bg-cyan/15 border border-white/8 hover:border-cyan/30 flex items-center justify-center transition-all duration-200"
              aria-label="YouTube Huella Global"
            >
              <svg class="w-4 h-4 text-ice/60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Column 2: Navigation -->
        <div>
          <h4 class="font-display text-sm font-bold text-ice tracking-wider uppercase mb-5">Navegación</h4>
          <ul class="space-y-3">
            <li v-for="link in navLinks" :key="link.label">
              <NuxtLink
                :to="link.href"
                class="text-sm text-ice/50 hover:text-cyan transition-colors duration-200 flex items-center gap-2 group"
              >
                <span class="w-1 h-1 rounded-full bg-cyan/30 group-hover:bg-cyan transition-colors duration-200"></span>
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Products -->
        <div>
          <h4 class="font-display text-sm font-bold text-ice tracking-wider uppercase mb-5">Productos</h4>
          <ul class="space-y-3">
            <li v-for="product in productLinks" :key="product.slug">
              <NuxtLink
                :to="`/productos/${product.slug}`"
                class="text-sm text-ice/50 hover:text-cyan transition-colors duration-200 flex items-center gap-2 group leading-snug"
              >
                <span class="w-1 h-1 rounded-full bg-cyan/30 group-hover:bg-cyan transition-colors duration-200 flex-shrink-0"></span>
                {{ product.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 4: Contact + Newsletter -->
        <div class="space-y-7">
          <div>
            <h4 class="font-display text-sm font-bold text-ice tracking-wider uppercase mb-5">Contacto</h4>
            <div class="space-y-3">
              <a href="tel:+573002650850" class="flex items-center gap-2.5 text-sm text-ice/50 hover:text-cyan transition-colors duration-200">
                <svg class="w-3.5 h-3.5 text-cyan/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +57 300 265 0850
              </a>
              <a href="tel:+17865935696" class="flex items-center gap-2.5 text-sm text-ice/50 hover:text-cyan transition-colors duration-200">
                <svg class="w-3.5 h-3.5 text-cyan/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 786 593 5696
              </a>
              <a href="mailto:info@huellaglobal.com" class="flex items-center gap-2.5 text-sm text-ice/50 hover:text-cyan transition-colors duration-200">
                <svg class="w-3.5 h-3.5 text-cyan/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@huellaglobal.com
              </a>
            </div>
          </div>

          <!-- Newsletter -->
          <div>
            <h4 class="font-display text-sm font-bold text-ice tracking-wider uppercase mb-4">Boletín</h4>
            <p class="text-xs text-ice/40 mb-3">Reciba nuestras novedades y noticias del sector.</p>
            <form @submit.prevent="subscribeNewsletter" class="flex gap-2">
              <input
                v-model="newsletterEmail"
                type="email"
                placeholder="su@email.com"
                class="form-input flex-1 text-sm py-2.5"
                required
              />
              <button type="submit" class="btn-primary px-4 py-2.5 flex-shrink-0">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-xs text-ice/30">
          &copy; 2026 Huella Global Corporation. Todos los derechos reservados.
        </p>
        <p class="text-xs text-ice/20">
          Materias primas para la industria flexográfica
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const newsletterEmail = ref('')

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Productos', href: '/productos' },
  { label: 'Representaciones', href: '/#representaciones' },
  { label: 'Cobertura', href: '/#cobertura' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Noticias', href: '/#noticias' },
  { label: 'Contacto', href: '/#contacto' },
]

const productLinks = [
  { name: 'Autoadhesivos / In-mold', slug: 'autoadhesivos-in-mold' },
  { name: 'Laminación BOPP / PET', slug: 'laminacion-bopp-pet' },
  { name: 'Termoencogibles', slug: 'termoencogibles' },
  { name: 'Wrap Around – Empaque Flexible', slug: 'wrap-around-empaque-flexible' },
  { name: 'Polyboard – Papeles y Cartones', slug: 'polyboard-papeles-y-cartones' },
  { name: 'Cintas de Transferencia Térmica', slug: 'cintas-de-transferencia-termica' },
  { name: 'Maquinaria', slug: 'maquinaria' },
  { name: 'Accesorios', slug: 'accesorios' },
]

function subscribeNewsletter() {
  newsletterEmail.value = ''
}
</script>
