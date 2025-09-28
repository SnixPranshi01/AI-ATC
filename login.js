    
 
//     document.getElementById('diffcontainer').addEventListener('click', function() {
//     const email = document.getElementsById('email').value;
//     const password = document.getElementsById('container').value;
//     const errorMessage = document.getElementById('error-message');

//     if(email === '' || password === '') {
//         errorMessage.textContent = 'Please enter username and password';
//         errorMessage.style.display = 'block';
//         return;
//     }   
//     if(email === 'admin@gmail.com' && password === 'admin123') {
//         localStorage.setItem('isLoggedIn', 'true');
//         window.location.href = 'dashboared.html';
//     } else {
//         errorMessage.textContent = 'Invalid username or password';
//         errorMessage.style.display = 'block';
//     }
// });
 document.getElementById('diffcontainer').addEventListener('submit', function() {
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
        window.location.href = 'dashboared.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block';
    }
});

