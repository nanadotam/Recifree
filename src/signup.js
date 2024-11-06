// // Mock db credentials
// const testUsername = 'nanaamoako';   // superuser
// const testPassword = 'password@!23';

document.getElementById('signupForm').addEventListener('submit', function(event){
    // event.preventDefault(); // Prevent form submission until validation passes

    let valid = true;
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value; // Updated ID for username
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmpassword').value;
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');

    // Clear previous error messages
    emailError.textContent = '';
    passwordError.textContent = '';

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        valid = false; // Mark form as invalid
    }

    // Password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d{3,})(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = 'Password must be at least 8 characters long, contain at least one uppercase letter, three digits, and one special character';
        valid = false; // Mark form as invalid
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        passwordError.textContent = 'Passwords don\'t match';
        valid = false; // Mark form as invalid
    }

    // Mock authentication check
    if (username === testUsername && password === testPassword) {
        passwordError.textContent = 'Signup successful! Redirecting...';
        passwordError.style.color = 'green';
        setTimeout(function() {
            window.location.href = 'dashboard.html'; // Simulate successful redirect
        }, 1000);
    } else {
        passwordError.textContent = 'Invalid username or password.';
        passwordError.style.color = 'red';
        valid = false; // Mark form as invalid
    }

    // Prevent form submission if validation fails
    if (!valid) {
        event.preventDefault();  // Keep this here to prevent the form from submitting if validation fails
    }
});
