const password1 = document.querySelector('#signup-password');
const password2 = document.querySelector('#signup-confirm');

const passwordCheck = (event) => {
    event.preventDefault();

    if (password1.value !== password2.value) {
        alert('Passwords do not match');
    } else {
        alert('Passwords match');
    };
};

document.querySelector('.signup-form').addEventListener('submit', passwordCheck);