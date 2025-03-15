document.addEventListener('DOMContentLoaded', function() {
  // Setup account dropdown
  setupAccountDropdown();
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(event) {
      if (!event.target.closest('.account')) {
          document.querySelector('.account-dropdown').classList.remove('show');
      }
  });
});

function setupAccountDropdown() {
  const accountDropdown = document.querySelector('.account-dropdown');
  const accountIcon = document.getElementById('account-icon');
  const profile = JSON.parse(localStorage.getItem('profile'));
  
  // Toggle dropdown visibility when clicking on account icon
  accountIcon.addEventListener('click', function(e) {
      e.preventDefault();
      accountDropdown.classList.toggle('show');
  });
  
  // Render appropriate content based on login status
  if (profile && profile.firstName && profile.lastName && profile.email) {
      // User is logged in, show account details
      accountDropdown.innerHTML = `
          <div class="user-info">
              <p class="welcome">Welcome, ${profile.firstName}!</p>
              <p class="email">${profile.email}</p>
          </div>
          <hr>
          <a href="/account">My Account</a>
          <a href="/orders">My Orders</a>
          <a href="#" id="logout-btn">Logout</a>
      `;
      
      // Add logout functionality
      document.getElementById('logout-btn').addEventListener('click', function(e) {
          e.preventDefault();
          localStorage.removeItem('profile');
          window.location.reload();
      });
  } else {
      // User is not logged in, show login/signup buttons
      accountDropdown.innerHTML = `
          <div class="auth-buttons">
              <a href="/login" class="btn primary-btn">Login</a>
              <a href="/signup" class="btn secondary-btn">Sign Up</a>
          </div>
      `;
  }
}

// Example function to handle login (to be used in login form)
function handleLogin(formData) {
  // In a real app, you would validate credentials with a backend
  // For this demo, we'll just create and save a profile
  const profile = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email
  };
  
  localStorage.setItem('profile', JSON.stringify(profile));
  window.location.href = '/'; // Redirect to homepage after login
}