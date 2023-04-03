import { produtosServices } from '../services/produtcs-service.js';

(() => {
  console.log(0)
  async function renderProducts() {
    const products = await produtosServices.listProdutos();
    const gallery = document.querySelector('[data-gallery]');

    products.filter((e) => {
      gallery.appendChild(productEdit(e.name, e.price, e.id, e.urlImg));
    });
  }
  renderProducts();

  const productEdit = (name, price, id, imgUrl) => {
    const cardProduct = document.createElement('li');
    const content = `
      <div class="product__action">
        <img
          src="../assets/img/edit.svg"
          alt="icon de editar"
          class="product__edit"
        />
        <img
          src="../assets/img/del.svg"
          alt="icon de deletar"
          class="product__delete"
        />
      </div>
      <img
        src=${imgUrl}
        alt=""
        class="product__picture"
      />
      <h4 class="product__title">${name}</h4>
      <span class="product__price">R$ ${price}</span>
      <a href="" class="product__link">Ver produto</a>
    `;
    cardProduct.classList.add('product');
    cardProduct.innerHTML = content;
    return cardProduct;
  };

  const deleteProduct = (id) => {
    console.log(id)
  }
  deleteProduct
})();
