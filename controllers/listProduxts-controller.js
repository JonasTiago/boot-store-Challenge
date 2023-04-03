import { produtosServices } from '../services/produtcs-service.js';

(() => {
  async function renderProducts() {
    const products = await produtosServices.listProdutos();
    const listStar = document.querySelector('[data-products=Star]');
    const listConsoles = document.querySelector('[data-products=Consoles]');
    const listDiversos = document.querySelector('[data-products=Diversos]');

    products.filter((e) => {
      e.category === 'Star Wars'
        ? listStar.appendChild(newProduct(e.name, e.price, e.id, e.urlImg))
        : e.category === 'Consoles'
        ? listConsoles.appendChild(newProduct(e.name, e.price, e.id, e.urlImg))
        : listDiversos.appendChild(newProduct(e.name, e.price, e.id, e.urlImg));
    });
  }
  renderProducts();

  const newProduct = (name, price, id, imgUrl) => {
    const cardProduct = document.createElement('li');
    const content = `
        <img
          src=${imgUrl}
          alt=""
          class="product__picture"
        />
        <h4 class="product__title">${name}</h4>
        <span class="product__price">R$ ${price}</span>
        <a href="views/detail-product.html" class="product__link">Ver produto</a>
    `;
    cardProduct.classList.add('product');
    cardProduct.innerHTML = content;
    return cardProduct;
  };
})();
