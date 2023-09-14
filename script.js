const wrapper = document.querySelector('.wrapper');
const LoginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});

LoginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});
