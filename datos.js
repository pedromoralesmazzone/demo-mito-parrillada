// =====================================================================
//  DATOS DEL LOCAL · Mito Parrillada y Pizzería (demo)
//  Carta y precios DE EJEMPLO hasta tener la carta real.
//  Platos sacados de lo que mencionan las reseñas de Google.
// =====================================================================
const U = (id, w=900) => id.startsWith("photo-") ? `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop` : id;

window.DATOS = {
  tipo: "pedidos",
  nombre: "Mito",
  rubro: "Parrillada y pizzería",
  barrio: "Buceo",
  logo: "M",
  demo: "Demo · carta, precios y fotos de ejemplo",

  textos: { reservarLargo: "Reservar mesa" },

  colores: {
    brand: "#e8711a", deep: "#1a1410", light: "#ffb070", surface: "#f7f1ea", ghost: "#ecdfd2",
    ink: "#18110c", inkSoft: "#7f6f63", hairline: "#ede3d9", caption: "#7a3d12",
  },

  contacto: {
    whatsapp: "59897711169",       // el celular de Google Maps (097 711 169): confirmar que tenga WhatsApp
    telefono: "097 711 169",
    tel: "+59897711169",
    direccion: "Mahoma 4496, Buceo · Montevideo",
    mapa: "https://www.google.com/maps/search/?api=1&query=Mito+Parrillada+y+Pizzer%C3%ADa+Mahoma+4496+Montevideo",
    instagram: "",
  },

  horario: { abre: 19.5, cierra: 24, texto: "Abre a las 19:30" },
  funciones: { pedidos: true, reservas: true },

  portada: {
    titulo: "Mito",
    lema: ["Milanesas, pizza", "y parrilla"],
    foto: U("photo-1599921841143-819065a55cc6", 1800),
    destacados: ["Mila napolitana", "Muzzarella", "Postre Oreo"],
    nota: { valor: "5.0", texto: "estrellas en Google", plato: "Mila napolitana" },
  },

  insignia: { valor: "5.0", texto: "estrellas en Google" },
  presentacion: {
    numero: "#01",
    titulo: "Comida de barrio en el Buceo",
    texto: "Milanesas de porción grande, pizza, fainá y postres caseros. La parrilla llega muy pronto.",
  },
  carrusel: [
    { plato: "Mila napolitana", palabras: ["Milanesas", "de", "porción", "grande"] },
    { plato: "Muzzarella", palabras: ["Pizza", "y", "fainá", "calentitas"] },
    { plato: "Postre Oreo", palabras: ["El", "postre", "que", "piden"] },
  ],

  cartaTitulo: ["Lo que sale", "de la cocina"],
  gustos: [],
  carta: [
    { cat: "Milanesas", items: [
      { n: "Milanesa con fritas", d: "Carne o pollo, con papas fritas.", p: 420, foto: U("photo-1599921841143-819065a55cc6", 700) },
      { n: "Mila napolitana", d: "Jamón, mozzarella y salsa, con fritas.", p: 540, foto: U("photo-1560611588-163f295eb145", 700) },
      { n: "Mila a caballo", d: "Con dos huevos fritos y fritas.", p: 480, foto: U("photo-1599921841143-819065a55cc6", 700) },
      { n: "Mila al pan", d: "Lechuga, tomate y mayonesa.", p: 380, foto: U("photo-1667451417729-73e944a796a9", 700) },
    ]},
    { cat: "Pizzas", items: [
      { n: "Muzzarella", d: "Salsa casera, mozzarella y aceitunas.", p: 450, foto: U("photo-1785065316016-ff23cea187b1", 700) },
      { n: "Napolitana", d: "Tomate, ajo y orégano.", p: 520, foto: U("photo-1628840042765-356cda07504e", 700) },
      { n: "Especial", d: "Jamón, morrón y aceitunas.", p: 560, foto: U("photo-1700760934249-93efbb574d23", 700) },
      { n: "Fainá", d: "La porción, bien finita.", p: 120 },
    ]},
    { cat: "Guarniciones", items: [
      { n: "Papas fritas", d: "Porción para compartir.", p: 260, foto: U("photo-1630384060421-cb20d0e0649d", 700) },
      { n: "Boniatos", d: "Porción.", p: 260 },
    ]},
    { cat: "Postres", items: [
      { n: "Postre Oreo", d: "Casero.", p: 220 },
    ]},
    { cat: "Parrilla", items: [
      { n: "Parrilla", d: "¡Muy pronto! Preguntanos por la fecha de apertura.", p: null },
    ]},
    { cat: "Bebidas", items: [
      { n: "Refresco", d: "", p: 180 },
      { n: "Cerveza", d: "", p: 260, foto: U("photo-1608270586620-248524c67de9", 700) },
      { n: "Agua", d: "", p: 90 },
    ]},
  ],

  local: {
    titulo: ["Te esperamos", "en el Buceo"],
    texto: "Vení a comer al local o pedí para llevar: armás el pedido acá y te lo tenemos listo.",
    tarjetas: [
      { titulo: "Comé en el local", texto: "Mahoma 4496, Buceo.", foto: U("photo-1628840042765-356cda07504e") },
      { titulo: "Pedí para llevar", texto: "Armá tu pedido y mandalo por WhatsApp.", foto: U("photo-1630384060421-cb20d0e0649d") },
    ],
  },

  numerosTitulo: ["Comida de barrio,", "como en casa"],
  numeros: [
    { valor: "5.0", texto: "estrellas en Google" },
    { valor: "48", texto: "opiniones en Google" },
    { valor: "19:30", texto: "abrimos" },
    { valor: "Pronto", texto: "llega la parrilla" },
  ],

  resenas: [],   // solo reseñas reales, con permiso del local

  cierre: ["¿Mesa para", "esta noche?"],
};
