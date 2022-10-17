async function login(event) {
    event.preventDefault();

    const username = document.querySelector('#login-username').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

async function signUp(event) {
    event.preventDefault();

    const username = document.querySelector('#signup-username').value.trim();
    const password1 = document.querySelector('#signup-password').value.trim();
    const password2 = document.querySelector('#signup-confirm').value.trim();

    if (password1 !== password2) {
        alert('Passwords do not match');
        return;
    };

    if (username && password1) {
        let password = password1;
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-type': 'application/json' }
        });

        // check the response status
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', login);
document.querySelector('.signup-form').addEventListener('submit', signUp);