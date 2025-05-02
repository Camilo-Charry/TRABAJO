document.addEventListener("DOMContentLoaded", () => {
  // Menú móvil
  const menuIcon = document.getElementById("menu-icon")
  const mobileMenu = document.getElementById("mobile-menu")

  if (menuIcon && mobileMenu) {
    menuIcon.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")

      // Cambiar el icono
      if (mobileMenu.classList.contains("active")) {
        menuIcon.classList.remove("fa-bars")
        menuIcon.classList.add("fa-times")
      } else {
        menuIcon.classList.remove("fa-times")
        menuIcon.classList.add("fa-bars")
      }
    })
  }

  // Año actual en el footer
  const yearElements = document.querySelectorAll("#current-year")
  const currentYear = new Date().getFullYear()

  yearElements.forEach((element) => {
    element.textContent = currentYear
  })

  // Configurar botón de WhatsApp
  const whatsappBtn = document.getElementById("whatsapp-btn")

  if (whatsappBtn) {
    // Reemplaza este número con el número real de WhatsApp de la tienda
    const phoneNumber = "1234567890"
    const message = "Hola, me interesa un producto de ModaStyle"

    whatsappBtn.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  }

  // Inicializar carrito si no existe
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]))
  }

  // Añadir evento a los botones de "Añadir al carrito"
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      const productId = Number.parseInt(e.target.getAttribute("data-id"))
      addToCart(productId)
    }
  })
})

// Función para obtener un producto por su ID (simulación)
function getProductById(productId) {
  // Aquí deberías tener la lógica para obtener el producto de tu base de datos o de donde sea que los estés almacenando.
  // Esto es solo un ejemplo:
  const products = [
    { id: 1, name: "Producto 1", price: 20, image: "img1.jpg", category: "ropa" },
    { id: 2, name: "Producto 2", price: 30, image: "img2.jpg", category: "accesorios" },
    { id: 3, name: "Producto 3", price: 40, image: "img3.jpg", category: "zapatos" },
  ]

  return products.find((product) => product.id === productId)
}

// Función para añadir productos al carrito
function addToCart(productId) {
  const product = getProductById(productId)

  if (!product) return

  const cart = JSON.parse(localStorage.getItem("cart")) || []

  // Verificar si el producto ya está en el carrito
  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      category: product.category,
    })
  }

  localStorage.setItem("cart", JSON.stringify(cart))

  // Mostrar mensaje de confirmación
  alert(`${product.name} añadido al carrito`)
}
