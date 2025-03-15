document.addEventListener('DOMContentLoaded', function() {
  const passwordInput = document.getElementById('password');
  const strengthBar = document.getElementById('password-strength-bar');
  const strengthText = document.getElementById('password-strength-text');
  const togglePassword = document.getElementById('toggle-password');
  
  // Password visibility toggle
  if (togglePassword) {
      togglePassword.addEventListener('click', function() {
          const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
          passwordInput.setAttribute('type', type);
          togglePassword.querySelector('i').className = type === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash';
      });
  }
  
  // Password strength calculator
  passwordInput.addEventListener('input', function() {
      const password = passwordInput.value;
      const result = calculatePasswordStrength(password);
      updateStrengthIndicator(result.score, result.feedback);
  });
  
  function calculatePasswordStrength(password) {
      // Initialize variables
      let score = 0;
      let feedback = [];
      
      // If password is empty, return zero score
      if (!password) {
          return { score: 0, feedback: ['Enter a password'] };
      }
      
      // Check length (0-40 points)
      const lengthScore = Math.min(password.length * 4, 40);
      score += lengthScore;
      
      if (password.length < 8) {
          feedback.push("Use at least 8 characters");
      }
      
      // Check for character types (0-20 points per type)
      const hasUppercase = /[A-Z]/.test(password);
      const hasLowercase = /[a-z]/.test(password);
      const hasNumbers = /[0-9]/.test(password);
      const hasSpecialChars = /[^A-Za-z0-9]/.test(password);
      
      if (hasUppercase) score += 20;
      if (hasLowercase) score += 20;
      if (hasNumbers) score += 20;
      if (hasSpecialChars) score += 20;
      
      // Add feedback about missing character types
      if (!hasUppercase) feedback.push("Add uppercase letters");
      if (!hasLowercase) feedback.push("Add lowercase letters");
      if (!hasNumbers) feedback.push("Add numbers");
      if (!hasSpecialChars) feedback.push("Add special characters");
      
      // Penalize repetitive patterns
      if (/(.)\1\1/.test(password)) { // Three or more identical characters in a row
          score -= 20;
          feedback.push("Avoid repeating characters");
      }
      
      // Penalize sequential characters
      if (/abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|012|123|234|345|456|567|678|789/i.test(password)) {
          score -= 20;
          feedback.push("Avoid sequential characters");
      }
      
      // Common passwords check (basic examples)
      const commonPasswords = ['password', '123456', 'qwerty', 'admin', 'welcome'];
      if (commonPasswords.includes(password.toLowerCase())) {
          score = 0;
          feedback = ['Too common - easily guessed'];
      }
      
      // Cap score between 0-100
      score = Math.max(0, Math.min(100, score));
      
      // If score is high enough, provide positive feedback
      if (score >= 80 && feedback.length === 0) {
          feedback.push("Strong password!");
      }
      
      return {
          score: score,
          feedback: feedback.length > 0 ? feedback : ["Good password"]
      };
  }
  
  function updateStrengthIndicator(score, feedback) {
      // Update the width of the strength bar
      strengthBar.style.width = score + '%';
      
      // Update the color based on strength
      if (score < 40) {
          strengthBar.style.backgroundColor = '#ff3e36'; // Red (weak)
          strengthText.textContent = "Weak";
          strengthText.style.color = '#ff3e36';
      } else if (score < 70) {
          strengthBar.style.backgroundColor = '#ffda36'; // Yellow (medium)
          strengthText.textContent = "Medium";
          strengthText.style.color = '#ffda36';
      } else {
          strengthBar.style.backgroundColor = '#0cce6b'; // Green (strong)
          strengthText.textContent = "Strong";
          strengthText.style.color = '#0cce6b';
      }
      
      // Add tooltip with detailed feedback
      strengthText.setAttribute('title', feedback.join(', '));
  }
});