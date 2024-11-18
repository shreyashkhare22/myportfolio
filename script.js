// Responsive Navigation
const toggleMenu = document.getElementById('toggle-menu');
const navLinks = document.getElementById('nav-links');

toggleMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thank you for reaching out! We'll get back to you soon.");
  e.target.reset();
});
