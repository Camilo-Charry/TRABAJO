document.addEventListener("DOMContentLoaded", () => {
  // Obtener la categoría de la URL
  const urlParams = new URLSearchParams(window.location.search)
  const category = urlParams.get("cat")

  // Import or declare categoryInfo
  const categoryInfo = {
    example: {
      title: "Example Category",
      description: "This is an example category description.",
    },
  }

  if (!category || !categoryInfo[category]) {
    // Redirigir a la página principal si la categoría no existe
    window.location.href = "index.html"
    return
  }

  // Actualizar título y descripción de la categoría
  document.getElementById("category-title").textContent = categoryInfo[category].title
  document.getElementById("category-description").textContent = categoryInfo[category].description

  // Resaltar la categoría activa en el menú
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    if (link.href.includes(`cat=${category}`)) {
      link.classList.add("active")
    }
  })

  // Import or declare getProductsByCategory
  function getProductsByCategory(category) {
    // Dummy data for demonstration
    const products = [
      { name: "Product 1", category: "example", price: 20 },
      { name: "Product 2", category: "example", price: 30 },
    ]
    return products.filter((product) => product.category === category)
  }

  // Cargar productos de la categoría
  const products = getProductsByCategory(category)
  const productsContainer = document.getElementById("category-products")

  if (productsContainer) {
    let productsHTML = ""

    // Import or declare createProductCard
    function createProductCard(product) {
      return `
                <div class="product-card">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                </div>
            `
    }

    products.forEach((product) => {
      productsHTML += createProductCard(product)
    })

    productsContainer.innerHTML = productsHTML
  }

  // Eventos para los botones de filtro
  const filterButtons = document.querySelectorAll(".filter-btn")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Quitar la clase activa de todos los botones
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Añadir la clase activa al botón clickeado
      this.classList.add("active")

      // Aquí se implementaría la lógica de filtrado real
      // Por ahora solo es visual
    })
  })
})
