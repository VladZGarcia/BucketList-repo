

// Hämtar referenser från HTML
const userNameSpan = document.getElementById('user-name') as HTMLSpanElement;

// Hämtar användarnamn från localStorage
const userData = localStorage.getItem('user');
if (userData) {
  const user = JSON.parse(userData);
  // Kapitalisera första bokstaven i användarnamnet
  const capitalizedUsername = user.username.charAt(0).toUpperCase() + user.username.slice(1).toLowerCase();
  userNameSpan.textContent = capitalizedUsername;
} else {
  // om ingen användare är inloggad, omdirigera till login
  window.location.href = 'login.html';
}