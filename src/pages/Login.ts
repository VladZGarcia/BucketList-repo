import { showFieldError, showToast } from '../utils/userInteraction';

const loginForm = document.querySelector<HTMLFormElement>('form') as HTMLFormElement;
const userNameInput = document.getElementById('username') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const rememberMeCheckbox = document.getElementById('remember') as HTMLInputElement;
const togglePasswordButton = document.querySelector<HTMLButtonElement>('.toggle-password') as HTMLButtonElement;

// Kontrollera om användaren har valt "Kom ihåg mig" och fyll i fälten
const savedCredentials = localStorage.getItem('remember');
if (savedCredentials) {
  const { userName, password } = JSON.parse(savedCredentials);
  userNameInput.value = userName;
  passwordInput.value = password;
  rememberMeCheckbox.checked = true;
}
// Funktion för att växla synlighet av lösenordet
togglePasswordButton.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
  
});

function handleLogin(event: Event): void {
  event.preventDefault();

  const userName = userNameInput.value.trim();
  const password = passwordInput.value.trim();
  // Validera
    if (!userName) {
      showFieldError('username', 'Vänligen ange ditt användarnamn.');
      return;
    }
    if (!password) {
      showFieldError('password', 'Vänligen ange ditt lösenord.');
      return;
    }
    
    // Simulera inloggning
    // I en riktig applikation skulle du skicka en begäran till servern
    const user = { username: userName, password: password };
    
    localStorage.setItem('user', JSON.stringify(user));
    showToast('Inloggning lyckades!', 'success');
    // Om "Kom ihåg mig" är markerat, spara användarnamn och lösenord annars rensa fälten
if (rememberMeCheckbox.checked) {
    localStorage.setItem('remember', JSON.stringify({ rememberMeCheckbox: true, userName, password }));
} else {
    localStorage.removeItem('remember');
    // Rensa fälten om "Kom ihåg mig" inte är markerat
    userNameInput.value = '';
    passwordInput.value = '';
  }
    
    // Omdirigera till dashboard
    window.location.href = 'dashboard.html';
};

loginForm.addEventListener('submit', handleLogin);


