const placeholder = (w, h, text) =>
  `https://placehold.co/${w}x${h}/f0e6d3/7a5c3a?text=${encodeURIComponent(text)}`;

export const content = {
  meta: {
    title: "Sas solutions — Velas artesanales",
    description:
      "Velas artesanales hechas con ceras naturales y fragancias premium. Perfectas para regalar o para crear tu momento de calma. Envíos a todo el país.",
    keywords:
      "velas artesanales, velas aromáticas, emprendimiento, velas naturales, regalo",
    url: "https://tusitio.com", // URL canónica del sitio
    image: null, // URL de imagen para compartir en redes (og:image)
    themeColor: "#c8831a", // color de la barra del navegador en móvil
    locale: "es_AR",
    twitterHandle: "@sassoluciones", // null si no tenés Twitter/X
  },

  brand: {
    name: "Sas solutions",
    logo: null,
    logoAlt: "Logo de Sas solutions",
  },

  nav: {
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Nosotros", href: "#about" },
      { label: "Productos", href: "#products" },
      { label: "Contacto", href: "#contact" },
    ],
    cta: { label: "Hacer un pedido", href: "#contact" },
  },

  hero: {
    title: "Velas artesanales hechas con amor",
    subtitle:
      "Creamos velas únicas con aromas que transforman cualquier espacio. Perfectas para regalar o para darte ese momento de calma que merecés.",
    cta: { label: "Ver catálogo", href: "#products" },
    secondaryCta: { label: "Contactarnos", href: "#contact" },
    image: placeholder(800, 500, "Velas artesanales"),
    imageAlt: "Velas artesanales encendidas",
  },

  about: {
    title: "Nuestra historia",
    subtitle: "Más que velas, momentos",
    description:
      "Todo empezó en una pequeña cocina con ganas de crear algo propio. Hoy hacemos velas artesanales con ceras naturales, fragancias premium y mucho cuidado en cada detalle. Cada vela es única, como la persona que la recibe.",
    highlights: [
      { icon: "🌿", label: "Ceras 100% naturales" },
      { icon: "🕯️", label: "Hechas a mano" },
      { icon: "📦", label: "Envíos a todo el país" },
      { icon: "🎁", label: "Packaging para regalo" },
    ],
    image: placeholder(600, 450, "Nuestra historia"),
    imageAlt: "Proceso de elaboración de velas",
  },

  products: {
    title: "Nuestros productos",
    subtitle: "Cada vela es hecha con intención. Encontrá la tuya.",
    items: [
      {
        image: placeholder(600, 600, "Vela Lavanda"),
        imageAlt: "Vela aromática de lavanda",
        name: "Vela Aromática Lavanda",
        price: "$4.500",
        description:
          "Fragancia de lavanda pura. Ideal para relajarse y descansar. Duración aprox. 40 hs.",
        badge: "Más vendida",
        badgeType: "new",
      },
      {
        image: placeholder(600, 600, "Vainilla & Canela"),
        imageAlt: "Vela de vainilla y canela",
        name: "Vela Vainilla & Canela",
        price: "$3.800",
        originalPrice: "$5.000",
        description:
          "Aroma cálido y hogareño. Perfecta para el invierno o para regalar en fechas especiales.",
        badge: "Oferta",
        badgeType: "sale",
      },
      {
        image: placeholder(600, 600, "Vela Floral"),
        imageAlt: "Vela decorativa con flores secas",
        name: "Vela Floral con Flores Secas",
        price: "$6.200",
        description:
          "Vela decorativa con flores naturales prensadas en la cera. Un objeto de arte.",
        badge: "Nuevo",
        badgeType: "new",
      },
      {
        image: placeholder(600, 600, "Cedro & Madera"),
        imageAlt: "Vela de madera y cedro",
        name: "Vela Cedro & Madera",
        price: "$5.100",
        description:
          "Aroma masculino y profundo. Notas de cedro, pino y tierra húmeda.",
        badge: null,
        badgeType: null,
      },
      {
        image: placeholder(600, 600, "Set Regalo x3"),
        imageAlt: "Set de velas regalo",
        name: "Set Regalo x3 Velas",
        price: "$11.000",
        description:
          "Tres velas a elección en una caja de regalo lista para entregar. Combiná aromas.",
        badge: "Nuevo",
        badgeType: "new",
      },
      {
        image: placeholder(600, 600, "Coco & Lima"),
        imageAlt: "Vela de coco y lima",
        name: "Vela Coco & Lima",
        price: "$4.200",
        description:
          "Aroma fresco, tropical y alegre. Ideal para espacios pequeños o baños.",
        badge: null,
        badgeType: null,
      },
    ],
    ctaLabel: "Consultar por este producto",
    ctaHref: "#contact",
  },

  features: {
    title: "¿Por qué elegirnos?",
    subtitle: "Nos importa cada detalle, desde la cera hasta la caja.",
    items: [
      {
        icon: "🌿",
        title: "Materiales naturales",
        description:
          "Usamos cera de soja y de coco, libres de parafina y químicos dañinos.",
      },
      {
        icon: "🕯️",
        title: "Hechas a mano",
        description:
          "Cada vela es elaborada de forma artesanal, una por una, con tiempo y cuidado.",
      },
      {
        icon: "🌸",
        title: "Aromas únicos",
        description:
          "Trabajamos con fragancias premium para crear combinaciones que no encontrás en ningún lado.",
      },
      {
        icon: "📦",
        title: "Envíos a todo el país",
        description:
          "Despachamos por correo o mensajería con embalaje protegido para que llegue perfecto.",
      },
      {
        icon: "🎁",
        title: "Ideal para regalar",
        description:
          "Packaging cuidado y presentación impecable. También armamos pedidos personalizados.",
      },
      {
        icon: "💬",
        title: "Atención personalizada",
        description:
          "Respondemos rápido y te ayudamos a elegir la vela perfecta para cada ocasión.",
      },
    ],
  },

  contact: {
    title: "¿Te interesa algo?",
    subtitle: "Escribinos y te respondemos a la brevedad.",
    whatsapp: {
      number: "5491112345678",
      message: "Hola! Vi sus velas y me gustaría hacer un pedido 🕯️",
    },
    instagram: "@sassoluciones",
    email: "contacto@sassolutions.com",
  },

  testimonials: {
    enabled: true, // ← cambiar a false para ocultar la sección

    title: "Lo que dicen nuestras clientas",
    subtitle:
      "Cada testimonio es una historia real de alguien que eligió nuestras velas.",

    items: [
      {
        avatar: null, // ruta: "/assets/avatars/ana.jpg"  →  null muestra inicial
        name: "Ana García",
        role: "Cliente frecuente",
        rating: 5,
        text: "Las velas de lavanda son increíbles. El aroma dura muchísimo y el packaging es súper lindo para regalar. Ya hice tres pedidos y siempre llegan perfectas.",
      },
      {
        avatar: null,
        name: "María López",
        role: "Clienta nueva",
        rating: 5,
        text: "Compré el set de regalo para el cumpleaños de mi mamá y quedó fascinada. La presentación es hermosa y las velas huelen divino. ¡Totalmente recomendadas!",
      },
      {
        avatar: null,
        name: "Sofía Martínez",
        role: "Clienta frecuente",
        rating: 5,
        text: "Me encanta que usan materiales naturales. La vela de cedro y madera es mi favorita, el aroma es único. Además la atención es muy personalizada y rápida.",
      },
      {
        avatar: null,
        name: "Valentina Torres",
        role: "Clienta frecuente",
        rating: 4,
        text: "Compré la vela floral y es una obra de arte. La tengo de decoración en mi living y todos me preguntan de dónde la saqué. Muy recomendable.",
      },
      {
        avatar: null,
        name: "Camila Rodríguez",
        role: "Primera compra",
        rating: 5,
        text: "Primera vez que compraba y fue una experiencia genial. Llegó súper bien embalada, antes de lo esperado. La vela de vainilla y canela huele exactamente como esperaba.",
      },
    ],
  },

  cta: {
    title: "¿Te gustó lo que viste?",
    subtitle: "Hacé tu pedido hoy y recibilo en la puerta de tu casa.",
    button: { label: "Hacer un pedido por WhatsApp", href: "#contact" },
    note: "También podés escribirnos por Instagram.",
  },

  footer: {
    tagline: "Velas artesanales hechas con amor. 🕯️✨",
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Productos", href: "#products" },
      { label: "Contacto", href: "#contact" },
    ],
    copyright: `© ${new Date().getFullYear()} Sas solutions. Todos los derechos reservados.`,
  },
};
