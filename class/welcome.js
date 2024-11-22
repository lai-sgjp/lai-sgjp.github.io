document.addEventListener('DOMContentLoaded', function () {
    const welcomeScreen = document.getElementById('welcome-screen');
    const enterBtn = document.getElementById('enter-btn');
    const mainContent = document.getElementById('main-content');

    enterBtn.addEventListener('click', function () {
        welcomeScreen.style.display = 'none';
        mainContent.style.display = 'block';
    });
});