export interface SubProduct {
  slug: string
  name: string
  description?: string
  features?: string[]
  specs?: string
  image: string
}

export interface ProductCategory {
  slug: string
  name: string
  icon: string
  image: string
  heroImage: string
  subProducts: SubProduct[]
}

export const productCategories: ProductCategory[] = [
  {
    slug: 'autoadhesivos-in-mold',
    name: 'Autoadhesivos / In-mold',
    icon: '◈',
    image: '/images/Adhesivos-Autoadheribles.png',
    heroImage: '/images/Inmold2.png',
    subProducts: [
      {
        slug: 'in-mold',
        name: 'In-mold',
        description:
          'La etiqueta IML se integra con el molde, adoptando su forma durante el proceso de producción. Esto implica que tanto la fabricación de envases como el etiquetado se llevan a cabo simultáneamente.',
        features: [
          'Resistencia óptima a las variaciones de temperatura, lo que resulta ideal para productos que requieren refrigeración.',
          'Lo ofrecemos en diferentes micrajes. Blanco y transparente, para inyección, soplado, con acabados piel de naranja y liso.',
        ],
        image: '/images/Inmold2.png',
      },
      {
        slug: 'autoadhesivos-compostables',
        name: 'Autoadhesivos compostables',
        description:
          'Hemos desarrollado caras de impresión que cumplen con certificaciones ambientales (FSC) que complementan nuestra oferta de adhesivos compostables.',
        image: '/images/Autoadhesivos-compostables2.png',
      },
      {
        slug: 'papeles-autoadhesivos',
        name: 'Papeles autoadhesivos',
        description:
          'Las caras de impresión en papel siguen teniendo mucha importancia en el mercado, más ahora con el auge de los temas ambientales que enfrentamos. Ofrecemos papeles Esmaltados, térmicos (con recubrimiento y sin recubrimiento), transferencia térmica, metalizados y sintéticos.',
        image: '/images/Adhesivo-papel.png',
      },
      {
        slug: 'peliculas',
        name: 'Películas',
        description:
          'Ofrecemos caras de impresión aptas para impresión digital, flexográfica y por transferencia térmica. Blancos, transparentes, metalizados; brillantes y mate en poliéster, polipropilenos y polietilenos.',
        image: '/images/pelicula-autoadhesivo2.png',
      },
    ],
  },
  {
    slug: 'laminacion-bopp-pet',
    name: 'Laminación BOPP / PET',
    icon: '◉',
    image: '/images/Laminacion.png',
    heroImage: '/images/Laminacion.png',
    subProducts: [
      {
        slug: 'laminacion-termica',
        name: 'Laminación térmica',
        description:
          'Película de BOPP mate y brillante que se activa con calor, normalmente usada para la industria litográfica. Puede ser usada para sobreimpresión. Ofrecemos este tipo de laminación en PET mate, brillante y metalizado.',
        image: '/images/Laminacion-termica-etiquetado.png',
      },
      {
        slug: 'poliester-25mic-50mic',
        name: 'Poliéster 25mic – 50mic',
        description:
          'Poliéster de alto brillo, para protección de etiquetas en exteriores. *Imprimibles por transferencia térmica. **Cumplen con regulaciones FDA y UL.',
        image: '/images/Laminacion-Bopp-PET-Poliester-25mic--50mic.png',
      },
      {
        slug: 'polipropileno-20mic-45mic',
        name: 'Polipropileno 20mic – 45mic',
        description:
          'BOPP para protección de etiquetas. En Jumbos o cortados a medida (ancho y largo específico). *Diferentes micrajes tanto en la película como en el adhesivo.',
        image: '/images/Laminacion-Bopp-PET-Poliester-25mic--50mic-1.png',
      },
    ],
  },
  {
    slug: 'termoencogibles',
    name: 'Termoencogibles',
    icon: '◎',
    image: '/images/Termoencogibles.png',
    heroImage: '/images/Termoencogibles.png',
    subProducts: [
      {
        slug: 'pvc',
        name: 'PVC',
        description:
          'Película termoencogible con encogimiento hasta el 58%. Disponible desde 30 hasta 80 micras.',
        image: '/images/termoencogible1.png',
      },
      {
        slug: 'petg',
        name: 'PETG',
        description:
          'Línea de Poliéster termoencogible donde ofrecemos:',
        features: [
          '100% material virgen',
          'Con 50% de material reciclado',
          'Con 30% de material reciclado',
          'PETG Blanco',
          'PETG 2 colores (1 cara blanco / 1 cara negro)',
          'PETG con comportamiento igual al OPS',
          'PETG que tiene la misma curva de encogimiento que el PVC',
        ],
        image: '/images/termoencogible3.png',
      },
      {
        slug: 'petc',
        name: 'PETC',
        description:
          'Poliéster termoencogible, 100% reciclable con la botella de PET (cumple con regulación europea) Disponible desde 20 hasta 80 micras, con encogimiento que llega hasta el 78%. Este termoencogible es el que está tomando más fuerzas en los mercados internacionales porque permite realizar el proceso de reciclado en un solo proceso sin retirar la etiqueta del envase.',
        image: '/images/PetC-reciclable-1.png',
      },
    ],
  },
  {
    slug: 'wrap-around-empaque-flexible',
    name: 'Wrap Around – Empaque Flexible',
    icon: '◇',
    image: '/images/Empaque-flexible.png',
    heroImage: '/images/Empaque-flexible.png',
    subProducts: [
      {
        slug: 'wrap-around',
        name: 'Wrap Around',
        description:
          'BOPP (polipropileno orientado biaxialmente). Apto para etiquetas envolventes que se imprimen hasta ocho colores mediante procesos de impresión flexográfica y de huecograbado.',
        features: [
          'Resistencia al rayado mediante impresión inversa',
          'Resistencia al desgarro',
          'Aplicable sobre envases de plástico, vidrio y metal',
          'Resistencia a la manipulación',
        ],
        image: '/images/wrap-around.png',
      },
    ],
  },
  {
    slug: 'polyboard-papeles-y-cartones',
    name: 'Polyboard – Papeles y Cartones',
    icon: '▣',
    image: '/images/Polyboard-papeles-cartones.png',
    heroImage: '/images/Polyboard-papeles-cartones.png',
    subProducts: [
      {
        slug: 'polyboard',
        name: 'Polyboard',
        description:
          'Cartón poli-laminado para la fabricación de vasos de cartón recubiertos a una o a dos caras para bebidas frías o calientes así como cajas de productos refrigerados y congelados.',
        specs: 'Desde 150grs hasta 350grs / en rollo y en pliego',
        features: [
          'Buena formación, cuerpo y rigidez',
          'Alta barrera de humedad con revestimiento de LDPE',
          'Excelente resistencia al sellado térmico',
        ],
        image: '/images/polyboard.png',
      },
    ],
  },
  {
    slug: 'cintas-de-transferencia-termica',
    name: 'Cintas de Transferencia Térmica',
    icon: '◈',
    image: '/images/cintas-trasnferencia-termica.png',
    heroImage: '/images/cintas-trasnferencia-termica.png',
    subProducts: [
      {
        slug: 'cintas-de-transferencia-termica',
        name: 'Cintas de transferencia térmica',
        description: 'Cintas para transferencia térmica en calidad de:',
        features: [
          'Resina',
          'Cera',
          'Cera Resina',
        ],
        image: '/images/cintas-de-transferencia-termica-2.png',
      },
    ],
  },
  {
    slug: 'maquinaria',
    name: 'Maquinaria',
    icon: '⚙',
    image: '/images/maquinaria.png',
    heroImage: '/images/maquinaria.png',
    subProducts: [
      {
        slug: 'cortadora-rebobinadora-automatica',
        name: 'Cortadora y Rebobinadora Automática de Alta Velocidad HGDBGFQ-370',
        description:
          'Cortadora y rebobinadora automática de alta velocidad para sustratos de etiquetas y empaques. Diseñada para producción de alto rendimiento con control de tensión preciso.',
        image: '/images/Cortadora-y-Rebobinadora-Automatica-de-Alta-Velocidad-HGDBGFQ-370.png',
      },
      {
        slug: 'cortadora-alta-velocidad-bastidor',
        name: 'Máquina Cortadora de Alta Velocidad Tipo Bastidor HGDBFQ-R1600M',
        description:
          'Cortadora de alta velocidad tipo bastidor para materiales flexibles. Ofrece corte de precisión con mínima tensión en el sustrato, ideal para películas delgadas y materiales sensibles.',
        image: '/images/Maquina-cortadora-de-alta-velocidad-tipo-bastidor-HGDBFQ-R1600M-web1.png',
      },
      {
        slug: 'cortadoras-de-sustratos',
        name: 'Máquina Cortadoras de Sustratos',
        description:
          'Equipos especializados para el corte preciso de sustratos en la industria de etiquetas y empaques flexibles. Capacidad para una amplia variedad de materiales.',
        image: '/images/Maquina-Cortadoras-de-sustratos.png',
      },
      {
        slug: 'impresora-etiquetas-multifuncional',
        name: 'Impresora de Etiquetas Multifuncional DBRY320B-5C',
        description:
          'Impresora de etiquetas multifuncional con múltiples opciones de conectividad y compatibilidad. Ideal para la impresión de etiquetas de alta resolución en entornos industriales y comerciales.',
        image: '/images/Impresora-de-etiquetas-multifuncional-DBRY320B-5C-web.png',
      },
      {
        slug: 'maquina-plana-acabados',
        name: 'Máquina Plana de Acabados',
        description:
          'Equipo de acabados planos para el procesamiento final de etiquetas y materiales impresos. Permite aplicar acabados de alta calidad con precisión y velocidad.',
        image: '/images/Maquina-plana-de-acabados.png',
      },
      {
        slug: 'maquina-rebobinadora-inspeccionadora',
        name: 'Máquina Rebobinadora / Inspeccionadora',
        description:
          'Rebobinadora e inspeccionadora de alta precisión para control de calidad en línea. Detecta defectos en el material durante el proceso de rebobinado garantizando la calidad del producto final.',
        image: '/images/Maquina-rebobinadora-inspeccionadora.png',
      },
      {
        slug: 'maquina-selladora-mangas',
        name: 'Máquina Selladora de Mangas',
        description:
          'Selladora de mangas termoencogibles para el acabado y aplicación de etiquetas tipo sleeve. Compatible con materiales PVC, PETG y PETC.',
        image: '/images/Maquina-selladora-de-mangas.png',
      },
    ],
  },
  {
    slug: 'accesorios',
    name: 'Accesorios',
    icon: '◐',
    image: '/images/accesorios.png',
    heroImage: '/images/accesorios.png',
    subProducts: [
      {
        slug: 'cabezales-de-impresion',
        name: 'Cabezales de Impresión',
        features: [
          'OEM de todas las marcas',
          'Garantía de impresión',
          '203 y 300 dpi',
          'Incluye marcas como: SATO, ZEBRA, TSC, DATAMAX',
        ],
        image: '/images/cabezales-impresion.png',
      },
      {
        slug: 'lamparas-uv',
        name: 'Lámparas UV',
        description:
          'Las lámparas UV son usadas en aplicaciones de impresión UV, incluidos embalajes, etiquetas, impresión de trabajos y aplicaciones UV especiales.',
        image: '/images/lamparas-uv-felxografia.png',
      },
      {
        slug: 'troqueles',
        name: 'Troqueles',
        description: 'Ofrecemos los componentes completos del sistema de troquelado',
        features: [
          'Troquel / suaje flexible',
          'Troquel / suaje macizo',
          'Cilindro magnético',
          'Cilindro de impresión',
          'Yunque',
          'Engranaje',
        ],
        image: '/images/troqueles-flexografia.png',
      },
    ],
  },
]

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((cat) => cat.slug === slug)
}
