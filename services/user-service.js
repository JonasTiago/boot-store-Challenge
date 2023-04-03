const UrlBase = 'http://localhost:3000/profile';

const userLogin = async (email, password) => {
  const emailOk = await axios.get(`${UrlBase}/?email=${email}`);
  if (!emailOk.data.length) {
    throw new Error('usuario não encontrado');
  } else if (password === emailOk.data[0]?.password) {
    return 200
  } else {
    throw new Error('senha invalida');
  }
};

export const userServices = {
  userLogin,
};
