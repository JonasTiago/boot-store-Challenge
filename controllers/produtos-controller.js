const newProduct = (name, price, id, imgUrl) => {
  const cardProduct = document.createElement('li');
  const content = `
  <li class="product">
  <img
    src="${imgUrl}"
    alt=""
    class="product__picture"
  />
  <h4 class="product__title">${name}</h4>
  <span class="product__price">R$ ${price}</span>
  <a href="views/detail-product.html" class="product__link">Ver produto</a>
</li>
  `;
  cardProduct.innerHTML = content;
  return cardProduct;
};

const productsStar = document.querySelector("[data-produtos='star']")

console.log(productsStar)
