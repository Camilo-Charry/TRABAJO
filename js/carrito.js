document.addEventListener("DOMContentLoaded", () => {
  // Cargar el carrito
  updateCartDisplay()

  // Añadir eventos para los botones del carrito
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("quantity-btn")) {
      const productId = Number.parseInt(e.target.getAttribute("data-id"))
      const action = e.target.getAttribute("data-action")

      updateQuantity(productId, action)
    }

    if (e.target.classList.contains("remove-btn")) {
      const productId = Number.parseInt(e.target.getAttribute("data-id"))
      removeFromCart(productId)
    }
  })
})

// Función para actualizar la visualización del carrito
function updateCartDisplay() {
  const cartContainer = document.getElementById("cart-content")
  const cart = JSON.parse(localStorage.getItem("cart")) || []

  if (!cartContainer) return

  if (cart.length === 0) {
    // Mostrar mensaje de carrito vacío
    cartContainer.innerHTML = `
            <div class="empty-cart">
                <h2>Tu carrito está vacío</h2>
                <p>Parece que aún no has añadido productos a tu carrito.</p>
                <a href="index.html" class="continue-shopping">
                    <i class="fas fa-arrow-left"></i>
                    Continuar comprando
                </a>
            </div>
        `
    return
  }

  // Calcular subtotal, envío y total
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 4.99
  const total = subtotal + shipping

  // Mostrar productos en el carrito
  cartContainer.innerHTML = `
        <div class="cart-grid">
            <div class="cart-items">
                <table class="cart-table">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${cart
                          .map(
                            (item) => `
                            <tr>
                                <td>
                                    <div class="cart-product">
                                        <div class="cart-product-image">
                                            <img src="${item.image}" alt="${item.name}">
                                        </div>
                                        <div class="cart-product-details">
                                            <h3>${item.name}</h3>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="quantity-control">
                                        <button class="quantity-btn" data-id="${item.id}" data-action="decrease">-</button>
                                        <input type="text" class="quantity-input" value="${item.quantity}" readonly>
                                        <button class="quantity-btn" data-id="${item.id}" data-action="increase">+</button>
                                    </div>
                                </td>
                                <td>$${item.price.toFixed(2)}</td>
                                <td>$${(item.price * item.quantity).toFixed(2)}</td>
                                <td>
                                    <button class="remove-btn" data-id="${item.id}">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        `,
                          )
                          .join("")}
                    </tbody>
                </table>
                
                <div class="cart-actions">
                    <a href="index.html" class="continue-shopping">
                        <i class="fas fa-arrow-left"></i>
                        Continuar comprando
                    </a>
                </div>
            </div>
            
            <div class="cart-summary">
                <h2>Resumen del pedido</h2>
                
                <div class="summary-row">
                    <span>Subtotal</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                
                <div class="summary-row">
                    <span>Envío</span>
                    <span>$${shipping.toFixed(2)}</span>
                </div>
                
                <div class="summary-row total">
                    <span>Total</span>
                    <span>$${total.toFixed(2)}</span>
                </div>
                
                <button class="checkout-btn">Proceder al pago</button>
            </div>
        </div>
    `
}

// Función para actualizar la cantidad de un producto en el carrito
function updateQuantity(productId, action) {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const itemIndex = cart.findIndex((item) => item.id === productId)

  if (itemIndex === -1) return

  if (action === "increase") {
    cart[itemIndex].quantity += 1
  } else if (action === "decrease") {
    if (cart[itemIndex].quantity > 1) {
      cart[itemIndex].quantity -= 1
    } else {
      // Si la cantidad es 1 y se disminuye, eliminar el producto
      cart.splice(itemIndex, 1)
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartDisplay()
}

// Función para eliminar un producto del carrito
function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  cart = cart.filter((item) => item.id !== productId)

  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartDisplay()
}
