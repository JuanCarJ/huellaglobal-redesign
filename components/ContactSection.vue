<template>
  <section id="contacto" class="py-20 md:py-28 bg-mesh-dark relative overflow-hidden" ref="sectionEl">
    <!-- Grid overlay -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
         style="background-image: linear-gradient(rgba(0,184,212,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,184,212,0.025) 1px, transparent 1px); background-size: 60px 60px;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div ref="headerEl" class="text-center mb-16 space-y-5">
        <span class="section-tag">Contáctenos</span>
        <h2 class="section-heading text-white">
          Hablemos de su
          <span class="text-gradient-cyan"> próximo proyecto</span>
        </h2>
        <p class="font-body text-ice/60 max-w-xl mx-auto leading-relaxed">
          ¿Necesita materias primas para etiquetas o empaques? Nuestro equipo está listo
          para asesorarle y encontrar la solución ideal para su empresa.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">

        <!-- Left: Form -->
        <div ref="formEl" class="glass-card p-8 md:p-10">
          <h3 class="font-display text-xl font-bold text-white mb-6">Solicitar información</h3>

          <form @submit.prevent="handleSubmit" class="space-y-5" novalidate>
            <!-- Row 1: Nombre + Email -->
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-ice/60 mb-2 tracking-wide">
                  Nombre completo *
                </label>
                <input
                  v-model="form.nombre"
                  type="text"
                  class="form-input"
                  placeholder="Su nombre"
                  required
                  autocomplete="name"
                />
              </div>
              <div>
                <label class="block text-xs font-semibold text-ice/60 mb-2 tracking-wide">
                  Correo electrónico *
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  class="form-input"
                  placeholder="su@empresa.com"
                  required
                  autocomplete="email"
                />
              </div>
            </div>

            <!-- Empresa -->
            <div>
              <label class="block text-xs font-semibold text-ice/60 mb-2 tracking-wide">
                Empresa *
              </label>
              <input
                v-model="form.empresa"
                type="text"
                class="form-input"
                placeholder="Nombre de su empresa"
                required
                autocomplete="organization"
              />
            </div>

            <!-- Producto de interés -->
            <div>
              <label class="block text-xs font-semibold text-ice/60 mb-2 tracking-wide">
                Producto de interés
              </label>
              <select
                v-model="form.producto"
                class="form-input"
              >
                <option value="" disabled>Seleccione un producto...</option>
                <option v-for="p in productOptions" :key="p" :value="p">{{ p }}</option>
              </select>
            </div>

            <!-- Mensaje -->
            <div>
              <label class="block text-xs font-semibold text-ice/60 mb-2 tracking-wide">
                Mensaje *
              </label>
              <textarea
                v-model="form.mensaje"
                rows="4"
                class="form-input resize-none"
                placeholder="Cuéntenos sobre sus necesidades..."
                required
              ></textarea>
            </div>

            <!-- Optional fields toggle -->
            <div>
              <button
                type="button"
                class="flex items-center gap-2 text-xs text-cyan/70 hover:text-cyan transition-colors duration-200"
                @click="showOptional = !showOptional"
              >
                <svg
                  class="w-4 h-4 transition-transform duration-200"
                  :class="showOptional ? 'rotate-180' : ''"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                {{ showOptional ? 'Ocultar' : 'Agregar' }} información adicional
              </button>

              <Transition name="expand">
                <div v-if="showOptional" class="grid sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label class="block text-xs font-semibold text-ice/60 mb-2 tracking-wide">Cargo</label>
                    <input v-model="form.cargo" type="text" class="form-input" placeholder="Su cargo" autocomplete="organization-title"/>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-ice/60 mb-2 tracking-wide">Teléfono</label>
                    <input v-model="form.telefono" type="tel" class="form-input" placeholder="+57 300 000 0000" autocomplete="tel"/>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-ice/60 mb-2 tracking-wide">Ciudad</label>
                    <input v-model="form.ciudad" type="text" class="form-input" placeholder="Su ciudad" autocomplete="address-level2"/>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-ice/60 mb-2 tracking-wide">País</label>
                    <input v-model="form.pais" type="text" class="form-input" placeholder="Su país" autocomplete="country-name"/>
                  </div>
                </div>
              </Transition>
            </div>

            <!-- Submit -->
            <button
              type="submit"
              class="btn-primary w-full justify-center py-4 text-base"
              :disabled="submitting"
            >
              <span v-if="!submitting">Enviar solicitud</span>
              <span v-else class="flex items-center gap-2">
                <svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                Enviando...
              </span>
            </button>

            <!-- Success message -->
            <Transition name="fade">
              <div v-if="submitted" class="rounded-xl p-4 text-center text-sm font-medium text-white"
                   style="background: rgba(0,184,212,0.15); border: 1px solid rgba(0,184,212,0.3);">
                Mensaje recibido. Le contactaremos a la brevedad.
              </div>
            </Transition>
          </form>
        </div>

        <!-- Right: Contact info -->
        <div ref="infoEl" class="space-y-8 lg:pt-2">
          <div>
            <h3 class="font-display text-xl font-bold text-white mb-6">Información de contacto</h3>
            <div class="space-y-5">

              <!-- Colombia -->
              <div class="glass-card p-5 space-y-3">
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-cyan text-sm font-semibold">Colombia</span>
                </div>
                <a href="tel:+573002650850"
                   class="flex items-center gap-3 text-sm text-ice/80 hover:text-cyan transition-colors group">
                  <div class="w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  +57 300 265 0850
                </a>
                <a href="mailto:info@huellaglobal.com"
                   class="flex items-center gap-3 text-sm text-ice/80 hover:text-cyan transition-colors group">
                  <div class="w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  info@huellaglobal.com
                </a>
              </div>

              <!-- Miami -->
              <div class="glass-card p-5 space-y-3">
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-cyan text-sm font-semibold">Miami, USA</span>
                </div>
                <a href="tel:+17865935696"
                   class="flex items-center gap-3 text-sm text-ice/80 hover:text-cyan transition-colors group">
                  <div class="w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  +1 786 593 5696
                </a>
                <a href="mailto:info@huellaglobal.com"
                   class="flex items-center gap-3 text-sm text-ice/80 hover:text-cyan transition-colors group">
                  <div class="w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  info@huellaglobal.com
                </a>
              </div>
            </div>
          </div>

          <!-- WhatsApp CTA -->
          <a
            href="https://wa.link/u5jcdn"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]"
            style="background: linear-gradient(135deg, #128C7E, #25D366); color: white;"
          >
            <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <p class="font-display font-bold text-lg leading-tight">Chatear por WhatsApp</p>
              <p class="text-white/80 text-sm mt-0.5">Respuesta rápida y directa</p>
            </div>
            <svg class="w-5 h-5 text-white/60 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'

const sectionEl = ref<HTMLElement | null>(null)
const headerEl = ref<HTMLElement | null>(null)
const formEl = ref<HTMLElement | null>(null)
const infoEl = ref<HTMLElement | null>(null)

const showOptional = ref(false)
const submitting = ref(false)
const submitted = ref(false)

const productOptions = [
  'Autoadhesivos / In-mold',
  'Laminación BOPP / PET',
  'Termoencogibles',
  'Wrap Around – Empaque Flexible',
  'Polyboard – Papeles y Cartones',
  'Cintas de Transferencia Térmica',
  'Maquinaria',
  'Accesorios',
  'Otro',
]

const form = reactive({
  nombre: '',
  email: '',
  empresa: '',
  producto: '',
  mensaje: '',
  cargo: '',
  telefono: '',
  ciudad: '',
  pais: '',
})

async function handleSubmit() {
  submitting.value = true
  // Simulate form send delay (replace with actual API call)
  await new Promise((resolve) => setTimeout(resolve, 1200))
  submitting.value = false
  submitted.value = true
  // Reset after 5s
  setTimeout(() => { submitted.value = false }, 5000)
}

function handleProductSelected(e: Event) {
  const name = (e as CustomEvent).detail as string
  form.producto = name
}

onMounted(async () => {
  window.addEventListener('product-selected', handleProductSelected)

  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline({
    scrollTrigger: { trigger: sectionEl.value, start: 'top 75%' },
  })

  tl.from(headerEl.value, { autoAlpha: 0, immediateRender: false, y: 32, duration: 0.75, ease: 'power3.out' })
    .from(infoEl.value, { autoAlpha: 0, immediateRender: false, x: -36, duration: 0.8, ease: 'power3.out' }, '-=0.4')
    .from(formEl.value, { autoAlpha: 0, immediateRender: false, x: 36, duration: 0.8, ease: 'power3.out' }, '<')
})

onBeforeUnmount(() => {
  window.removeEventListener('product-selected', handleProductSelected)
})
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: opacity 0.3s ease, max-height 0.35s ease;
  max-height: 300px;
  overflow: hidden;
}
.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
