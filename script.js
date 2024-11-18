// Menu Toggle for Mobile
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scrolling
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dynamic Active Links
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // Offset for header
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active');
    }
  });
});

// Typing Effect for Hero Text
const typedText = document.querySelector('.hero-text h2 span');
const textArray = ['Your Name', 'a Developer', 'a Designer'];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 150);
  } else {
    setTimeout(eraseEffect, 1000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 100);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener('DOMContentLoaded', typeEffect);

// Form Validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  let valid = true;

  if (name.value.trim() === '') {
    showError(name, 'Name is required.');
    valid = false;
  } else {
    clearError(name);
  }

  if (email.value.trim() === '') {
    showError(email, 'Email is required.');
    valid = false;
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Enter a valid email address.');
    valid = false;
  } else {
    clearError(email);
  }

  if (message.value.trim() === '') {
    showError(message, 'Message cannot be empty.');
    valid = false;
  } else {
    clearError(message);
  }

  if (valid) {
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
  }
});

function showError(input, message) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector('.error-message');
  if (!error) {
    const errorMessage = document.createElement('small');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;
    formGroup.appendChild(errorMessage);
  }
}

function clearError(input) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector('.error-message');
  if (error) {
    error.remove();
  }
}

function isValidEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}

// Scroll Animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  },
  { threshold: 0.2 }
);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Dark/Light Mode Toggle
const toggleThemeButton = document.createElement('button');
toggleThemeButton.textContent = 'Toggle Theme';
toggleThemeButton.classList.add('theme-toggle');
document.body.appendChild(toggleThemeButton);

toggleThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleThemeButton.textContent = document.body.classList.contains('dark-mode')
    ? 'Light Mode'
    : 'Dark Mode';
});
