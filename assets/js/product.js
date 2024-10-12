const scrollProducts = document.querySelectorAll(".productsScroll");
scrollProducts.forEach((item) => {
  item.addEventListener("wheel", (event) => {
    event.preventDefault();
    item.scrollLeft += event.deltaY;
  });
});
// sweet alert
function showAmazonStyleAlert() {
  Swal.fire({
    title: "Added to Cart!",
    text: "Your item has been successfully added to the shopping cart.",
    icon: "success",
    confirmButtonText: "Proceed to Checkout",
    showCancelButton: true,
    cancelButtonText: "Continue Shopping",
    customClass: {
      popup: "amazon-alert-popup",
      confirmButton: "amazon-confirm-button",
      cancelButton: "amazon-cancel-button",
    },
  });
}
//new cart
let cart = [];

function addToCart(productName, productPrice) {
  const existingProductIndex = cart.findIndex(
    (item) => item.name === productName
  );

  if (existingProductIndex >= 0) {
    cart[existingProductIndex].quantity += 1; // Update quantity if product exists
  } else {
    cart.push({ name: productName, price: productPrice, quantity: 1 });
  }

  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = ""; // Clear previous cart display

  let total = 0;

  cart.forEach((item) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.className = "cart-item";
    let itemPara = document.createElement("p");
    itemPara.className = "newItemPara";
    itemPara.innerHTML = `${item.name}   (x${item.quantity})`;
    cartItemElement.appendChild(itemPara);
    let itemTotal = document.createElement("p");
    itemTotal.className = "newItemPara";
    itemTotal.innerHTML = `${item.price}  * (${item.quantity})`;
    cartItemElement.appendChild(itemTotal);
    cartItemsContainer.appendChild(cartItemElement);

    total += item.price * item.quantity;
  });

  document.getElementById("cart-total").innerText = total;
}
