const wrapper = document.querySelector('.wrapper');
const LoginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});

LoginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});



document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const registerParam = urlParams.get('register');

    if (registerParam === 'true') {
        // Show the registration form
        const wrapper = document.querySelector('.wrapper');
        if (wrapper) {
            wrapper.classList.add('active');
        }
    }
});


