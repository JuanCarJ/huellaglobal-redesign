<template>
  <header
    ref="headerEl"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled ? 'header--scrolled' : 'header--transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex items-center justify-between h-18 md:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0 z-10">
          <img
            src="/images/Huella-Global-Webh.png"
            alt="Huella Global Corporation"
            class="h-10 md:h-12 w-auto transition-all duration-300"
            :class="scrolled ? 'brightness-100' : 'brightness-0 invert'"
          />
        </NuxtLink>

        <!-- Desktop Nav -->
        <ul class="hidden lg:flex items-center gap-8">
          <li>
            <a
              href="#inicio"
              class="nav-link"
              :class="scrolled ? 'text-navy hover:text-brand-blue' : 'text-white/90 hover:text-cyan'"
              @click.prevent="scrollTo('inicio')"
            >Inicio</a>
          </li>

          <!-- Productos mega-menu trigger -->
          <li class="relative" ref="productsMenuRef">
            <button
              class="nav-link flex items-center gap-1"
              :class="scrolled ? 'text-navy hover:text-brand-blue' : 'text-white/90 hover:text-cyan'"
              :aria-expanded="megaMenuOpen"
              aria-haspopup="true"
              @click="toggleMegaMenu"
              @keydown.escape="closeMegaMenu"
            >
              Productos
              <svg
                class="w-4 h-4 transition-transform duration-200"
                :class="megaMenuOpen ? 'rotate-180' : ''"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Mega Menu -->
            <Transition name="mega-menu">
              <div
                v-if="megaMenuOpen"
                class="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] mega-menu-panel rounded-2xl p-6 shadow-glass"
                role="menu"
              >
                <p class="text-xs font-semibold tracking-widest uppercase text-cyan mb-4">
                  Catálogo de productos
                </p>
                <div class="grid grid-cols-2 gap-2">
                  <NuxtLink
                    v-for="product in products"
                    :key="product.slug"
                    :to="`/productos/${product.slug}`"
                    role="menuitem"
                    class="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group"
                    :class="scrolled ? 'text-navy-light hover:bg-ice' : 'text-ice hover:bg-white/10'"
                    @click="closeMegaMenu"
                  >
                    <span class="text-cyan text-lg leading-none">{{ product.icon }}</span>
                    <span class="text-sm font-medium leading-tight">{{ product.name }}</span>
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </li>

          <li>
            <a
              href="#representaciones"
              class="nav-link"
              :class="scrolled ? 'text-navy hover:text-brand-blue' : 'text-white/90 hover:text-cyan'"
              @click.prevent="scrollTo('representaciones')"
            >Representaciones</a>
          </li>
          <li>
            <a
              href="#nosotros"
              class="nav-link"
              :class="scrolled ? 'text-navy hover:text-brand-blue' : 'text-white/90 hover:text-cyan'"
              @click.prevent="scrollTo('nosotros')"
            >Nosotros</a>
          </li>
          <li>
            <a
              href="#contacto"
              class="nav-link"
              :class="scrolled ? 'text-navy hover:text-brand-blue' : 'text-white/90 hover:text-cyan'"
              @click.prevent="scrollTo('contacto')"
            >Contacto</a>
          </li>
        </ul>

        <!-- Right actions -->
        <div class="hidden lg:flex items-center gap-4">
          <!-- Lang switcher -->
          <button
            class="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase transition-colors duration-200"
            :class="scrolled ? 'text-navy/60 hover:text-brand-blue' : 'text-white/50 hover:text-white'"
            @click="toggleLang"
            :aria-label="`Cambiar idioma a ${currentLang === 'ES' ? 'English' : 'Español'}`"
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20" /><path d="M12 2a14.5 14.5 0 0 1 0 20" /><path d="M2 12h20" />
            </svg>
            {{ currentLang }}
          </button>

          <!-- WhatsApp CTA -->
          <a
            href="https://wa.link/u5jcdn"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary text-xs px-5 py-2.5"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            Cotizar
          </a>
        </div>

        <!-- Mobile Burger -->
        <button
          class="lg:hidden p-2 rounded-lg transition-colors duration-200"
          :class="scrolled ? 'text-navy' : 'text-white'"
          :aria-expanded="mobileMenuOpen"
          aria-label="Abrir menú"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden border-t border-white/10"
        :class="scrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-navy/95 backdrop-blur-md'"
      >
        <div class="max-w-7xl mx-auto px-4 py-6 space-y-1">
          <a
            v-for="link in mobileLinks"
            :key="link.label"
            :href="link.href"
            class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200"
            :class="scrolled ? 'text-navy hover:bg-ice' : 'text-white/90 hover:bg-white/10'"
            @click.prevent="mobileNavigate(link.id)"
          >
            {{ link.label }}
          </a>

          <div class="pt-4 border-t border-white/10">
            <a
              href="https://wa.link/u5jcdn"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary w-full justify-center mt-2"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
const route = useRoute()
const router = useRouter()

const headerEl = ref<HTMLElement | null>(null)
const scrolled = ref(false)
const megaMenuOpen = ref(false)
const mobileMenuOpen = ref(false)
const productsMenuRef = ref<HTMLElement | null>(null)
const currentLang = ref('ES')

const products = [
  { slug: 'autoadhesivos-in-mold', name: 'Autoadhesivos / In-mold', icon: '◈' },
  { slug: 'laminacion-bopp-pet', name: 'Laminación BOPP / PET', icon: '◉' },
  { slug: 'termoencogibles', name: 'Termoencogibles', icon: '◎' },
  { slug: 'wrap-around-empaque-flexible', name: 'Wrap Around – Empaque Flexible', icon: '◇' },
  { slug: 'polyboard-papeles-y-cartones', name: 'Polyboard – Papeles y Cartones', icon: '▣' },
  { slug: 'cintas-de-transferencia-termica', name: 'Cintas de Transferencia Térmica', icon: '◈' },
  { slug: 'maquinaria', name: 'Maquinaria', icon: '⚙' },
  { slug: 'accesorios', name: 'Accesorios', icon: '◐' },
]

const mobileLinks = [
  { label: 'Inicio', href: '#inicio', id: 'inicio' },
  { label: 'Productos', href: '#productos', id: 'productos' },
  { label: 'Representaciones', href: '#representaciones', id: 'representaciones' },
  { label: 'Nosotros', href: '#nosotros', id: 'nosotros' },
  { label: 'Noticias', href: '#noticias', id: 'noticias' },
  { label: 'Contacto', href: '#contacto', id: 'contacto' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 60
}

function handleClickOutside(e: MouseEvent) {
  if (productsMenuRef.value && !productsMenuRef.value.contains(e.target as Node)) {
    megaMenuOpen.value = false
  }
}

function toggleMegaMenu() {
  megaMenuOpen.value = !megaMenuOpen.value
}

function closeMegaMenu() {
  megaMenuOpen.value = false
}

function toggleLang() {
  currentLang.value = currentLang.value === 'ES' ? 'EN' : 'ES'
}

function scrollTo(id: string) {
  mobileMenuOpen.value = false
  megaMenuOpen.value = false

  // If we're on the home page, scroll to the section
  if (route.path === '/') {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  } else {
    // Navigate to home page with hash
    router.push('/#' + id)
  }
}

function mobileNavigate(id: string) {
  mobileMenuOpen.value = false
  scrollTo(id)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('click', handleClickOutside)
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.header--transparent {
  background: transparent;
}

.header--scrolled {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 102, 162, 0.12);
  box-shadow: 0 2px 24px rgba(7, 27, 47, 0.1);
}

.mega-menu-panel {
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(0, 102, 162, 0.15);
}

/* Mega menu transition */
.mega-menu-enter-active,
.mega-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mega-menu-enter-from,
.mega-menu-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-8px);
}

/* Mobile menu transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.25s ease, max-height 0.3s ease;
  max-height: 600px;
  overflow: hidden;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  max-height: 0;
}

/* Override nav-link for header context */
:deep(.nav-link)::before,
:deep(.nav-link)::after {
  background: #00B8D4;
}
</style>
