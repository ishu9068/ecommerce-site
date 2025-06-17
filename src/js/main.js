document.addEventListener('DOMContentLoaded', () => {
  fetch('/data/products.json')
    .then(res => res.json())
    .then(products => {
      const container = document.getElementById('product-list');
      if (!container) return;
      products.forEach(p => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = 
          <img src='' alt='' width='200'><br>
          <h2></h2>
          <p></p>
          <p></p>
        ;
        container.appendChild(div);
      });
    });
});
