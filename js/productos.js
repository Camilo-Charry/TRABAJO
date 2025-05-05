// Base de datos de productos
const allProducts = {
  ropa: [
    {
      id: 1,
      name: "Camiseta Básica",
      price: 19.99,
      image: "https://via.placeholder.com/300",
      category: "ropa",
      description:
        "Camiseta básica de algodón de alta calidad. Perfecta para el día a día con un ajuste cómodo y material duradero.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Negro", "Blanco", "Gris"],
    },
    {
      id: 5,
      name: "Sudadera con Capucha",
      price: 39.99,
      image: "https://via.placeholder.com/300",
      category: "ropa",
      description: "Sudadera con capucha y bolsillo canguro. Ideal para los días fríos con su interior afelpado.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Negro", "Gris", "Azul"],
    },
    {
      id: 9,
      name: "Jeans Slim Fit",
      price: 49.99,
      image: "https://via.placeholder.com/300",
      category: "ropa",
      description: "Jeans de corte slim con elasticidad para mayor comodidad. Versátil para cualquier ocasión.",
      sizes: ["28", "30", "32", "34", "36"],
      colors: ["Azul oscuro", "Azul claro", "Negro"],
    },
    {
      id: 13,
      name: "Chaqueta Denim",
      price: 69.99,
      image: "https://via.placeholder.com/300",
      category: "ropa",
      description: "Chaqueta de mezclilla clásica con bolsillos frontales. Un básico que nunca pasa de moda.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Azul", "Negro"],
    },
  ],
  gorras: [
    {
      id: 2,
      name: "Gorra Deportiva",
      price: 14.99,
      image: "https://via.placeholder.com/300",
      category: "gorras",
      description:
        "Gorra deportiva con ajuste snapback. Ideal para protegerte del sol mientras practicas deporte o en tus salidas casuales.",
      sizes: ["Única"],
      colors: ["Negro", "Azul", "Rojo"],
    },
    {
      id: 6,
      name: "Gorra Snapback",
      price: 19.99,
      image: "https://via.placeholder.com/300",
      category: "gorras",
      description: "Gorra con visera plana y cierre ajustable. Estilo urbano para complementar tu look.",
      sizes: ["Única"],
      colors: ["Negro", "Gris", "Rojo"],
    },
    {
      id: 10,
      name: "Gorra Trucker",
      price: 17.99,
      image: "https://via.placeholder.com/300",
      category: "gorras",
      description: "Gorra estilo trucker con malla trasera para mayor ventilación. Perfecta para el verano.",
      sizes: ["Única"],
      colors: ["Negro/Blanco", "Azul/Blanco", "Rojo/Blanco"],
    },
    {
      id: 14,
      name: "Gorra Vintage",
      price: 22.99,
      image: "https://via.placeholder.com/300",
      category: "gorras",
      description: "Gorra con diseño vintage y acabado desgastado. Para un look retro y casual.",
      sizes: ["Única"],
      colors: ["Beige", "Oliva", "Borgoña"],
    },
  ],
  zapatos: [
    {
      id: 3,
      name: "Zapatillas Urbanas",
      price: 59.99,
      image: "https://via.placeholder.com/300",
      category: "zapatos",
      description:
        "Zapatillas urbanas con diseño moderno y suela de goma. Perfectas para el uso diario con gran comodidad y estilo.",
      sizes: ["39", "40", "41", "42", "43", "44"],
      colors: ["Negro", "Blanco"],
    },
    {
      id: 7,
      name: "Botas de Cuero",
      price: 89.99,
      image: "https://via.placeholder.com/300",
      category: "zapatos",
      description: "Botas de cuero genuino con suela resistente. Elegantes y duraderas para cualquier ocasión.",
      sizes: ["40", "41", "42", "43", "44"],
      colors: ["Negro", "Marrón"],
    },
    {
      id: 11,
      name: "Sandalias Casual",
      price: 34.99,
      image: "https://via.placeholder.com/300",
      category: "zapatos",
      description: "Sandalias casuales con plantilla acolchada. Comodidad y estilo para los días cálidos.",
      sizes: ["39", "40", "41", "42", "43"],
      colors: ["Negro", "Marrón", "Azul"],
    },
    {
      id: 15,
      name: "Zapatos Formales",
      price: 79.99,
      image: "https://via.placeholder.com/300",
      category: "zapatos",
      description:
        "Zapatos formales de piel sintética con diseño clásico. Ideales para eventos especiales y uso profesional.",
      sizes: ["40", "41", "42", "43", "44"],
      colors: ["Negro", "Marrón"],
    },
  ],
  accesorios: [
    {
      id: 4,
      name: "Reloj Minimalista",
      price: 29.99,
      image: "https://via.placeholder.com/300",
      category: "accesorios",
      description:
        "Reloj con diseño minimalista y correa de cuero sintético. Un accesorio elegante que complementa cualquier outfit.",
      sizes: ["Única"],
      colors: ["Negro", "Marrón"],
    },
    {
      id: 8,
      name: "Cinturón de Cuero",
      price: 24.99,
      image: "https://via.placeholder.com/300",
      category: "accesorios",
      description: "Cinturón de cuero sintético con hebilla metálica. Un básico para completar tu look.",
      sizes: ["90cm", "100cm", "110cm"],
      colors: ["Negro", "Marrón"],
    },
    {
      id: 12,
      name: "Gafas de Sol",
      price: 19.99,
      image: "https://via.placeholder.com/300",
      category: "accesorios",
      description: "Gafas de sol con protección UV y montura ligera. Estilo y protección para tus ojos.",
      sizes: ["Única"],
      colors: ["Negro", "Marrón", "Azul"],
    },
    {
      id: 16,
      name: "Collar Minimalista",
      price: 14.99,
      image: "https://via.placeholder.com/300",
      category: "accesorios",
      description: "Collar con diseño minimalista y acabado plateado. Un toque sutil para cualquier outfit.",
      sizes: ["Única"],
      colors: ["Plateado", "Dorado"],
    },
  ],
}

// Productos destacados para la página principal
const featuredProducts = [
  allProducts.ropa[0], // Camiseta Básica
  allProducts.gorras[0], // Gorra Deportiva
  allProducts.zapatos[0], // Zapatillas Urbanas
  allProducts.accesorios[0], // Reloj Minimalista
]

// Información de categorías
const categoryInfo = {
  ropa: {
    title: "Ropa",
    description: "Descubre nuestra colección de ropa con las últimas tendencias",
  },
  gorras: {
    title: "Gorras",
    description: "Complementa tu estilo con nuestra selección de gorras",
  },
  zapatos: {
    title: "Zapatos",
    description: "Encuentra el calzado perfecto para cada ocasión",
  },
  accesorios: {
    title: "Accesorios",
    description: "Añade el toque final a tu look con nuestros accesorios",
  },
}

// Función para obtener un producto por ID
function getProductById(id) {
  id = Number.parseInt(id)

  // Buscar en todas las categorías
  for (const category in allProducts) {
    const product = allProducts[category].find((p) => p.id === id)
    if (product) {
      return product
    }
  }
  productElement.innerHTML += `<div class="product-price">${formatoCOP(producto.precio)}</div>`;

  return null
}

// Función para obtener productos por categoría
function getProductsByCategory(category) {
  return allProducts[category] || []
}

// Función para crear una tarjeta de producto HTML
function createProductCard(product) {
  return `
        <div class="product-card">
            <a href="producto.html?id=${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <span class="product-badge">Nuevo</span>
                </div>
                <div class="product-content">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                </div>
            </a>
            <button class="add-to-cart" data-id="${product.id}">Añadir al carrito</button>
        </div>
    `
}
function formatoCOP(valor) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(valor);
  
}

