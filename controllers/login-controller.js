import { userServices } from '../services/user-service.js';

const formLogin = document.querySelector('[data-login]');

formLogin.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = e.target.querySelector('[data-email]').value;
  const password = e.target.querySelector('[data-password]').value;
  try {
    const userConfirm = await userServices.userLogin(email, password);
    if (userConfirm === 200) {
      window.location.href = '../views/edit-products.html';
    }
  } catch (err) {
    alert(err);
  }
});
