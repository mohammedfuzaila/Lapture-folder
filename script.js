
// nav function
const toggle = document.getElementById("#menu-toggle");
const navLinks = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


const form = document.getElementById('newsletterForm');
const message = document.getElementById('newsletterMessage');

function subscrip ()  {
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail').value;
  message.style.color = '#00FF88';
  message.textContent = `Thanks for subscribing, ${email}!`;
  form.reset();
});
}