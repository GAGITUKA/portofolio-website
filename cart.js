function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = products.find(p => p.id === id);
  const exist = cart.find(i => i.id === id);

  if (exist) {
    exist.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added!");
}

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  const container = document.getElementById("cart-container");
  container.innerHTML = "";

  cart.forEach(item => {
    total += item.price * item.qty;

    container.innerHTML += `
      <div>
        <h3>${item.name}</h3>
        <p>${item.qty} x Rp ${item.price}</p>
      </div>
    `;
  });

  document.getElementById("total").innerText = "Total: Rp " + total;
}