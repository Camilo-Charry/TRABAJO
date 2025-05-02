document.addEventListener("DOMContentLoaded", () => {
  // Import necessary functions and data
  // Assuming these are defined in separate files
  // For example:
  // import { getProductById, categoryInfo, addToCart } from './data.js';

  // Or, if they are defined in the same file:
  // const { getProductById, categoryInfo, addToCart } = window; // Assuming they are attached to the window object

  // Dummy implementations if the above imports are not possible
  function getProductById(id) {
    // Replace with actual implementation
    console.warn("getProductById is a dummy implementation. Replace with actual data fetching.")
    return null
  }

  const categoryInfo = {
    category1: { title: "Category 1" },
    category2: { title: "Category 2" },
  }

  function addToCart(productId) {
    // Replace with actual implementation
    console.warn("addToCart is a dummy implementation. Replace with actual cart logic.")
  }

  // Obtener el ID del producto de la URL
  const urlParams = new URLSearchParams(window.location.search)
  const productId = urlParams.get("id")

  if (!productId) {
    // Redirigir a la página principal si no hay ID de producto
    window.location.href = "index.html"
    return
  }

  const product = getProductById(productId)

  if (!product) {
    // Redirigir a la página principal si el producto no existe
    window.location.href = "index.html"
    return
  }

  // Actualizar el breadcrumb
  document.getElementById("category-link").textContent = categoryInfo[product.category].title
  document.getElementById("category-link").href = `categoria.html?cat=${product.category}`
  document.getElementById("product-breadcrumb").textContent = product.name

  // Cargar los detalles del producto
  const productDetailContainer = document.getElementById("product-detail")

  if (productDetailContainer) {
    productDetailContainer.innerHTML = `
            <div class="product-gallery">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h1>${product.name}</h1>
                <p class="price">$${product.price.toFixed(2)}</p>
                
                <div class="product-description">
                    <h2>Descripción</h2>
                    <p>${product.description}</p>
                </div>
                
                <div class="product-options">
                    <h2>Talla</h2>
                    <div class="option-buttons size-options">
                        ${product.sizes.map((size) => `<button class="option-btn">${size}</button>`).join("")}
                    </div>
                    
                    <h2>Color</h2>
                    <div class="option-buttons color-options">
                        ${product.colors.map((color) => `<button class="option-btn">${color}</button>`).join("")}
                    </div>
                </div>
                
                <div class="product-actions">
                    <button class="add-to-cart-btn" data-id="${product.id}">Añadir al carrito</button>
                    <button class="buy-now-btn">Comprar ahora</button>
                </div>
            </div>
        `

    // Añadir eventos a los botones de opciones
    const optionButtons = document.querySelectorAll(".option-btn")

    optionButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Quitar la clase activa de los botones del mismo grupo
        const parent = this.parentElement
        parent.querySelectorAll(".option-btn").forEach((btn) => {
          btn.classList.remove("active")
        })

        // Añadir la clase activa al botón clickeado
        this.classList.add("active")
      })
    })

    // Añadir evento al botón de "Añadir al carrito"
    const addToCartBtn = document.querySelector(".add-to-cart-btn")

    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", function () {
        const productId = Number.parseInt(this.getAttribute("data-id"))
        addToCart(productId)
      })
    }
  }
})
