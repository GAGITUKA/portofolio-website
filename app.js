const list = document.getElementById("product-list");

if (list) {
  products.forEach(p => {
    list.innerHTML += `
      <div class="product-card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>Rp ${p.price}</p>
        <a href="product.html?id=${p.id}">
          <button>Detail</button>
        </a>
        <button onclick="addToCart(${p.id})">Add</button>
      </div>
    `;
  });
}