export function displayUsername() {
    const userNameSpan = document.getElementById('user-name') as HTMLSpanElement;
    const userData = localStorage.getItem('user');
    if (userData) {
        const user = JSON.parse(userData);
        const capitalizedUsername = user.username.charAt(0).toUpperCase() + user.username.slice(1).toLowerCase();
        userNameSpan.textContent = capitalizedUsername;
    } else {
        window.location.href = 'login.html';
    }
}