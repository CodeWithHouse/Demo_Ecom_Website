// Toggle password visibility
document.getElementById('toggle-password').addEventListener('click', function() {
  const passwordInput = document.getElementById('password');
  const icon = this.querySelector('i');
  
  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
  } else {
      passwordInput.type = 'password';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
  }
});

// Add some fun interactive elements
document.querySelector('.login-logo').addEventListener('click', function() {
  this.style.animation = 'none';
  setTimeout(() => {
      this.style.animation = 'float 3s ease-in-out infinite';
  }, 10);
});

// Button sound effect (optional)
const loginButton = document.querySelector('.btn-login');
loginButton.addEventListener('mouseenter', function() {
  this.style.transform = 'translateY(-3px)';
});

loginButton.addEventListener('mouseleave', function() {
  this.style.transform = '';
});