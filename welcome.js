document.addEventListener('DOMContentLoaded', function () {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');

    welcomeScreen.addEventListener('click', function () {
        welcomeScreen.style.display = 'none';
        mainContent.style.display = 'block';
    });
});