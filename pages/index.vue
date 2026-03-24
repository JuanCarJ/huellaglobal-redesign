<template>
  <div>
    <AppHeader />

    <main>
      <HeroSection />
      <PartnersBar />
      <VideoSection />
      <ProductsGrid />
      <RepsSection />
      <CoverageMap />
      <AboutSection />
      <NewsSection />
      <ContactSection />
    </main>

    <AppFooter />
    <WhatsAppFloat />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Huella Global Corporation – Materias Primas para Etiquetas y Empaques',
  description:
    'Somos su socio confiable en el abastecimiento de materias primas para etiquetas y empaques innovadores. Más de 15 años en la industria flexográfica. Colombia y Miami.',
  ogTitle: 'Huella Global Corporation',
  ogDescription:
    'Materias primas de alta calidad para la industria flexográfica. Laminación, termoencogibles, autoadhesivos, maquinaria y más.',
  ogType: 'website',
  ogLocale: 'es_CO',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Huella Global Corporation',
  twitterDescription: 'Su socio confiable en materias primas para flexografía.',
})
</script>
