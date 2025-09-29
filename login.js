document.getElementById('diffcontainer').addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if(email === '' || password === '') {
        errorMessage.textContent = 'Please enter username and password';
        errorMessage.style.display = 'block';
        return;
    }   

    if(email === 'admin@gmail.com' && password === 'admin123') {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'dashbored.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block';
    }
});




