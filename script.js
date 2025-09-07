const toggleBtnn = document.getElementById("themeToggle");
const menuBtn = document.getElementById("menuBtn");
const dropdown = document.getElementById("dropdown");

const form = document.getElementById('myForm');

const nameInput = document.getElementById('nameInput');
const output = document.getElementById('output');
const nameError = document.getElementById('nameError');

const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

const confirmPasswordInput = document.getElementById('confirmPassword');
const confirmPasswordError = document.getElementById('confirmPasswordError');

const successMessage = document.getElementById('successMessage');
const button = document.getElementById('myBtn');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



// Dark Mode Toggle
toggleBtnn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change button text
    if (document.body.classList.contains("dark-mode")) {
    toggleBtnn.textContent = "☀️ Toggle Light Mode";
    } else {
    toggleBtnn.textContent = "🌙 Toggle Dark Mode";
    }
});

// Dropdown Menu Toggle
menuBtn.addEventListener("click", (e) => {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    e.stopPropagation(); // Prevent closing immediately
});

// Close dropdown when clicking outside
window.addEventListener("click", (event) => {
    if (event.target !== menuBtn && !dropdown.contains(event.target)) {
    dropdown.style.display = "none";
    }
});

// Form Validation
 // Real-time greeting
  nameInput.addEventListener('input', () => {
    output.textContent = `Hello, ${nameInput.value}! 👋`;
  });

  // Button click alert
  button.addEventListener('click', () => {
    alert("🎉 You clicked the button!");
  });

  // Validate form function
  function validateForm() {
    let isValid = true;

    // Clear previous messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    successMessage.textContent = '';

    // Validate Name
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Name is required';
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(nameInput.value.trim())) {
      nameError.textContent = 'Name can only contain letters';
      isValid = false;
    }

    // Validate Email
    if (emailInput.value.trim() === '') {
      emailError.textContent = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = 'Enter a valid email';
      isValid = false;
    }

    // Validate Password
    if (passwordInput.value.trim() === '') {
      passwordError.textContent = 'Password is required';
      isValid = false;
    } else if (passwordInput.value.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters';
      isValid = false;
    } else if (!/\d/.test(passwordInput.value)) {
      passwordError.textContent = 'Password must contain at least one number';
      isValid = false;
    }

    // Validate Confirm Password
    if (confirmPasswordInput.value.trim() === '') {
      confirmPasswordError.textContent = 'Please confirm your password';
      isValid = false;
    } else if (passwordInput.value !== confirmPasswordInput.value) {
      confirmPasswordError.textContent = 'Passwords do not match';
      isValid = false;
    }

    return isValid;
  }

  // Real-time validation
  emailInput.addEventListener('input', validateForm);
  passwordInput.addEventListener('input', validateForm);
  confirmPasswordInput.addEventListener('input', validateForm);

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent actual submission

    if (validateForm()) {
      successMessage.textContent = '✅ Form submitted successfully!';
      form.reset();
      output.textContent = '';
    }
  });