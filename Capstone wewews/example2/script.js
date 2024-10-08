document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const showRegisterLink = document.getElementById('showRegister');

    function showLogin() {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        loginBtn.classList.add('active');
        loginBtn.classList.remove('btn-secondary');
        loginBtn.classList.add('btn-dark');
        registerBtn.classList.remove('active');
        registerBtn.classList.remove('btn-dark');
        registerBtn.classList.add('btn-secondary');
    }

    function showRegister() {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        registerBtn.classList.add('active');
        registerBtn.classList.remove('btn-secondary');
        registerBtn.classList.add('btn-dark');
        loginBtn.classList.remove('active');
        loginBtn.classList.remove('btn-dark');
        loginBtn.classList.add('btn-secondary');
    }

    loginBtn.addEventListener('click', showLogin);
    registerBtn.addEventListener('click', showRegister);
    showRegisterLink.addEventListener('click', function(e) {
        e.preventDefault();
        showRegister();
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add login form validation and submission logic here
        console.log('Login form submitted');
    });

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add registration form validation and submission logic here
        console.log('Register form submitted');
    });
});