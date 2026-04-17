export const content = {
  brand: {
    name: "MiMarca",
    logo: null, // ruta a imagen: "/assets/logo.png"  →  null muestra el nombre en texto
    logoAlt: "Logo de MiMarca",
  },

  nav: {
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Características", href: "#features" },
      { label: "Contacto", href: "#footer" },
    ],
    cta: { label: "Empieza gratis", href: "#cta" },
  },

  hero: {
    title: "La solución que tu negocio necesita",
    subtitle:
      "Ayudamos a empresas a crecer con herramientas simples, potentes y fáciles de usar.",
    cta: { label: "Comenzar ahora", href: "#cta" },
    secondaryCta: { label: "Ver demo", href: "#features" },
    image: null, // ruta: "/assets/hero.png"  →  null muestra placeholder
    imageAlt: "Imagen principal del producto",
  },

  features: {
    title: "¿Por qué elegirnos?",
    subtitle: "Todo lo que necesitas en un solo lugar.",
    items: [
      {
        icon: "⚡",
        title: "Rápido y eficiente",
        description:
          "Optimizado para rendimiento desde el primer día, sin configuración extra.",
      },
      {
        icon: "🎨",
        title: "Fácil de personalizar",
        description:
          "Cambia colores, textos e imágenes desde un solo archivo de configuración.",
      },
      {
        icon: "📱",
        title: "100% Responsive",
        description:
          "Se adapta perfectamente a cualquier dispositivo: móvil, tablet o escritorio.",
      },
      {
        icon: "🔒",
        title: "Seguro por defecto",
        description:
          "Buenas prácticas de seguridad integradas para proteger a tus usuarios.",
      },
      {
        icon: "🚀",
        title: "Listo para producción",
        description:
          "Deploy en minutos con Vercel, Netlify o cualquier plataforma moderna.",
      },
      {
        icon: "💬",
        title: "Soporte dedicado",
        description:
          "Equipo disponible para ayudarte cuando lo necesites.",
      },
    ],
  },

  cta: {
    title: "¿Listo para empezar?",
    subtitle: "Únete a miles de empresas que ya confían en nosotros.",
    button: { label: "Crear cuenta gratis", href: "#" },
    note: "Sin tarjeta de crédito. Cancela cuando quieras.",
  },

  footer: {
    tagline: "Construido con ❤️ para hacer tu vida más simple.",
    links: [
      { label: "Privacidad", href: "#" },
      { label: "Términos", href: "#" },
      { label: "Contacto", href: "#" },
    ],
    copyright: `© ${new Date().getFullYear()} MiMarca. Todos los derechos reservados.`,
  },
}
