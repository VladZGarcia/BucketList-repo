export function displayUsername() {
    const userNameSpan = document.getElementById('user-name') as HTMLSpanElement;
    const userData = localStorage.getItem('user');
    const userName = localStorage.getItem('name');

    if (userName) {
        const capitalizedUserName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
        userNameSpan.textContent = capitalizedUserName;
    } else if (userData) {
        // If no name is set, use the username from the user data
        const user = JSON.parse(userData);
        const capitalizedUsername = user.username.charAt(0).toUpperCase() + user.username.slice(1).toLowerCase();
        userNameSpan.textContent = capitalizedUsername;
    } else {
        window.location.href = 'login.html';
    }
}