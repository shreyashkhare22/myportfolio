// Responsive Navigation Menu
const toggleMenu = document.getElementById('toggle-menu');
const navLinks = document.getElementById('nav-links');

toggleMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact Form Submission (Example of JavaScript Interactivity)
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Thank you for reaching out, ${name}! We'll get back to you at ${email} soon.`);
  e.target.reset(); // Reset the form fields
});
