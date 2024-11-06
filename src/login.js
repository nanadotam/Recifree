// no db/backend == hardcoded


document.getElementById('loginForm').addEventListener('submit', function(event){
    // prevent form submission
    event.preventDefault();

    // Mock db credentials

    const testUsername = 'nanaamoako'   //superuser
    const testPassword = 'password@!23'

    // Get input from HTML
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Display Error messages
    let loginError = document.getElementById('loginError');
    loginError.textContent = '';    // clear error msg

    // client-side validation for wrong/empty fields
    if (!username||!password){
        loginError.textContent = "Required field";
        return;
    }

    if (username === testUsername && password === testPassword){
        loginError.textContent = 'Ahhhhh yess, Welcome Don Amoako! Redirecting...';
        loginError.style.color= 'green';
        // Redirect to dashboard
        setTimeout(function(){
            window.location.href = 'dashboard.html';
        }, 1000)
    } else {
        loginError.textContent = 'Invalid username or password.';
        loginError.style.color= 'red';
    }

});