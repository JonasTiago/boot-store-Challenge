const listProdutos = () => {
  fetch('http://localhost:3000/produtos')
    .then((res) => console.log(res.json(res.data)))
    .catch((res) => console.log(res));
};

export const produtosServices = {
  listProdutos
}
