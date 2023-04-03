import { produtosServices } from '../services/produtcs-service.js';

const formCreateProduct = document.querySelector('[data-create]');

formCreateProduct.addEventListener('submit', async (e) => {
  try {
    e.preventDefault();

    const urlImg = e.target.querySelector('[data-url]').value;
    const category = e.target.querySelector('[data-category]').value;
    const name = e.target.querySelector('[data-name]').value;
    const price = e.target.querySelector('[data-price]').value;
    const description = e.target.querySelector('[data-description]').value;

    await produtosServices.createProdutos(
      name,
      urlImg,
      price,
      description,
      category
    );

    confirm = e.target.querySelector('span');
    confirm.classList.add('product__create');
  } catch (erro) {
    console.log(erro);
    Iconfirm.classList.add('product__erro');
    I;
  }
});
