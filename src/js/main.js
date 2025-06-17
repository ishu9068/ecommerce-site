document.addEventListener('DOMContentLoaded', () => {
  fetch('/data/products.json')
    .then(res => res.json())
    .then(products => {
      const container = document.getElementById('product-list');
      if (!container) return;

      products.forEach(p => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
          <img src="${p.image}" alt="${p.title}" width="200"><br>
          <h2>${p.title}</h2>
          <p>${p.description}</p>
          <p>Price: $${p.price}</p>
        `;
        container.appendChild(div);
      });
    })
    .catch(err => console.error('Error fetching products:', err));
});
