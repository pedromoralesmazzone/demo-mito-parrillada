// =====================================================================
//  DATOS DEL LOCAL · Mito Parrillada y Pizzería (demo)
//  Carta real (capturas de PedidosYa, 20/11/2026). Fotos ilustrativas.
// =====================================================================
const U = (id, w=700) => id.startsWith("photo-") ? `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop` : id;

window.DATOS = {
  tipo: "pedidos",
  nombre: "Mito",
  rubro: "Parrillada y pizzería",
  barrio: "Buceo",
  logo: "M",
  demo: "Demo · fotos ilustrativas",

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
    lema: ["Pizzetas, milas", "y chivitos"],
    foto: U("photo-1599921841143-819065a55cc6", 1800),
    destacados: ["Napolitana", "Bondiola y rúcula", "Chivito canadiense al pan"],
    nota: { valor: "5.0", texto: "estrellas en Google", plato: "Napolitana" },
  },

  insignia: { valor: "5.0", texto: "estrellas en Google" },
  presentacion: {
    numero: "#01",
    titulo: "Comida de barrio en el Buceo",
    texto: "Pizzetas especiales, milanesas de porción grande, chivitos y papas. Pedí por WhatsApp o vení al local. La parrilla llega muy pronto.",
  },
  carrusel: [
    { plato: "Napolitana", palabras: ["Milanesas", "de", "porción", "grande"] },
    { plato: "Bondiola y rúcula", palabras: ["Pizzetas", "de", "la", "casa"] },
    { plato: "Chivito canadiense al pan", palabras: ["Chivitos", "bien", "completos", "siempre"] },
  ],

  cartaTitulo: ["Lo que sale", "de la cocina"],
  gustos: [],
  carta: [
    { cat: "Pizzetas", items: [
      { n: "Pizzeta con muzza", d: "", p: 420, foto: U("photo-1785065316016-ff23cea187b1") },
      { n: "Caprese", d: "Pizzeta especial.", p: 490, foto: U("photo-1590947132387-155cc02f3212") },
      { n: "Con papas fritas", d: "Pizzeta especial.", p: 590, foto: U("photo-1565299624946-b28f40a0ae38") },
      { n: "Panceta y cheddar", d: "Pizzeta especial.", p: 590, foto: U("photo-1628840042765-356cda07504e") },
      { n: "Cuatro quesos", d: "Pizzeta especial.", p: 630, foto: U("photo-1513104890138-7c749659a591") },
      { n: "Bondiola y rúcula", d: "Pizzeta especial.", p: 630, foto: U("photo-1593560708920-61dd98c46a4e") },
      { n: "Roquefort y cebolla caramelizada", d: "Pizzeta especial.", p: 630, foto: U("photo-1604382354936-07c5d9983bd3") },
      { n: "Fugazzeta", d: "Pizzeta especial.", p: 470, foto: U("photo-1655673654158-9f7285b7d1ea") },
      { n: "Gusto extra (c/u)", d: "Jamón, morrón, aceitunas, panceta, huevo duro o huevo frito.", p: 60 },
    ]},
    { cat: "Porciones", items: [
      { n: "Porción de pizza", d: "", p: 220, foto: U("photo-1628840042765-356cda07504e") },
      { n: "Porción de muzza", d: "", p: 280, foto: U("photo-1513104890138-7c749659a591") },
    ]},
    { cat: "Milanesas", items: [
      { n: "Milanesa al plato", d: "Incluye guarnición.", p: 490, foto: U("photo-1599921841143-819065a55cc6") },
      { n: "Mila con panceta y cheddar", d: "Incluye guarnición.", p: 560, foto: U("photo-1585325701956-60dd9c8553bc") },
      { n: "Napolitana", d: "Cubierta de salsa de tomate, jamón y mozzarella. Incluye guarnición.", p: 560, foto: U("photo-1560611588-163f295eb145") },
      { n: "Napolitana para dos", d: "Incluye guarnición.", p: 990, foto: U("photo-1560611588-163f295eb145") },
    ]},
    { cat: "Chivitos", items: [
      { n: "Chivito al plato con fritas", d: "", p: 400, foto: U("photo-1599921841143-819065a55cc6") },
      { n: "Chivito al pan", d: "Churrasco de carne, lechuga, tomate, jamón, mozzarella y huevo frito.", p: 390, foto: U("photo-1667451417729-73e944a796a9") },
      { n: "Chivito canadiense al pan", d: "Churrasco de carne, lechuga, tomate, jamón, mozzarella, huevo frito, panceta, cebolla, morrón y aceitunas.", p: 530, foto: U("photo-1667451417729-73e944a796a9") },
      { n: "Chivito cheddar", d: "Churrasco de carne, lechuga, tomate, jamón, huevo frito, panceta, cebolla y cheddar.", p: 530, foto: U("photo-1667451417729-73e944a796a9") },
    ]},
    { cat: "Papas y boniatos", items: [
      { n: "Gramajo", d: "", p: 490 },
      { n: "Papas fritas", d: "", p: 220, foto: U("photo-1630384060421-cb20d0e0649d") },
      { n: "Boniatos fritos", d: "", p: 290 },
      { n: "Papa al plomo", d: "", p: 200 },
      { n: "Boniato al plomo", d: "", p: 200 },
      { n: "Puré de papa casero", d: "", p: 220 },
    ]},
    { cat: "Refrescos y agua", items: [
      { n: "Refresco línea Coca-Cola 600 ml", d: "", p: 130 },
      { n: "Refresco línea Coca-Cola 1,5 L", d: "", p: 240 },
      { n: "Refresco línea Coca-Cola botella de vidrio 1 L", d: "", p: 260 },
      { n: "Agua Salus 600 ml", d: "", p: 120 },
      { n: "Agua Salus 1,5 L", d: "", p: 240 },
      { n: "Frutté 600 ml", d: "", p: 130 },
      { n: "Monster", d: "", p: 130 },
    ]},
    { cat: "Cervezas", items: [
      { n: "Cerveza en lata", d: "Zillertal o Patagonia.", p: 190, foto: U("photo-1608270586620-248524c67de9") },
      { n: "Patricia 1 L", d: "", p: 250, foto: U("photo-1608270586620-248524c67de9") },
      { n: "Zillertal 1 L", d: "", p: 300, foto: U("photo-1608270586620-248524c67de9") },
      { n: "Stella Artois 1 L", d: "", p: 300, foto: U("photo-1608270586620-248524c67de9") },
    ]},
  ],

  local: {
    titulo: ["Te esperamos", "en el Buceo"],
    texto: "Vení a comer al local o pedí para llevar: armás el pedido acá y te lo tenemos listo.",
    tarjetas: [
      { titulo: "Comé en el local", texto: "Mahoma 4496, Buceo.", foto: U("photo-1593560708920-61dd98c46a4e", 900) },
      { titulo: "Pedí para llevar", texto: "Armá tu pedido y mandalo por WhatsApp.", foto: U("photo-1630384060421-cb20d0e0649d", 900) },
    ],
  },

  numerosTitulo: ["Comida de barrio,", "como en casa"],
  numeros: [
    { valor: "5.0", texto: "estrellas en Google" },
    { valor: "48", texto: "opiniones en Google" },
    { valor: "35+", texto: "opciones en la carta" },
    { valor: "19:30", texto: "abrimos" },
  ],

  resenas: [],   // solo reseñas reales, con permiso del local

  cierre: ["¿Mesa para", "esta noche?"],
};
