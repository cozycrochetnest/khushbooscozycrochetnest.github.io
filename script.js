let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

function loadCart() {
  let list = document.getElementById("cartItems");
  if (!list) return;

  list.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    list.appendChild(li);
    total += item.price;
  });

  let totalLi = document.createElement("li");
  totalLi.style.fontWeight = "bold";
  totalLi.textContent = `Total: ₹${total}`;
  list.appendChild(totalLi);
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  let message = "Hello! I want to order:\n";
  let total = 0;

  cart.forEach(item => {
    message += `• ${item.name} - ₹${item.price}\n`;
    total += item.price;
  });

  message += `\nTotal: ₹${total}`;

  let url = "https://wa.me/917889267007?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", loadCart);
