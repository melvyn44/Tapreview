const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const form = document.getElementById('quoteForm');
const statusMessage = document.getElementById('formStatus');

form.addEventListener('submit', event => {
  event.preventDefault();
  statusMessage.textContent = "Formulaire prêt : reliez-le à Formspree, SumUp ou votre adresse e-mail pour recevoir les demandes.";
});
