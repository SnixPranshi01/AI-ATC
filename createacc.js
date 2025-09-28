// document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let password = document.getElementById('password').value;
  let repeatPassword = document.getElementById('repeat-password').value;
  let error = '';
  if (password.length < 8) {
    error = 'Password must be at least 8 characters long.';
  } else if (password !== repeatPassword) {
    error = 'Passwords do not match.';
  }

  if (error) {
    document.getElementById('error-message').textContent = error;
    return false;
  }

  // Show success (for demo purposes, real implementation would send data)
  document.getElementById('error-message').style.color = '#239f46';
  document.getElementById('error-message').textContent = 'Account created successfully!';
  setTimeout(() => {
    document.getElementById('error-message').textContent = '';
    document.getElementById('error-message').style.color = '#d0314c';
    document.getElementById('signupForm').reset();
  }, 1500);
// });
document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let password = document.getElementById('password').value;
  let repeatPassword = document.getElementById('repeat-password').value;
  let error = '';
  if (password.length < 8) {
    error = 'Password must be at least 8 characters long.';
  } else if (password !== repeatPassword) {
    error = 'Passwords do not match.';
  }

  if (error) {
    document.getElementById('error-message').textContent = error;
    return false;
  }

  document.getElementById('error-message').style.color = '#239f46';
  document.getElementById('error-message').textContent = 'Account created successfully! Redirecting...';
  setTimeout(() => {
    window.location.href = 'dashbored.html';
  }, 1000);
});
