const UrlBase = 'http://localhost:3000/produtos';

const listProdutos = async () => {
  const list = await axios.get(UrlBase);
  return list.data;
};

const createProdutos = async (name, urlImg, price, description, category) => {
  return await axios.post(UrlBase, {
    name,
    urlImg,
    price,
    description,
    category,
  });
};

const deleteProdutos = async (id) => {
  const teste = await axios.delete(`${UrlBase}/${id}`)
  console.log(teste)
};

export const produtosServices = {
  listProdutos,
  createProdutos,
  deleteProdutos,
};
