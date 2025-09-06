// This file contains the JavaScript functionality for the login page.
// It handles form submission, validation, and any interactive elements on the page.

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (validateForm(username, password)) {
            // Simulate a successful login (you can replace this with actual login logic)
            alert('Login successful!');
            // Redirect or perform other actions here
        } else {
            alert('Please enter valid credentials.');
        }
    });

    function validateForm(username, password) {
        // Basic validation: check if fields are not empty
        return username.trim() !== '' && password.trim() !== '';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('loginMessage');

    // Demo: hardcoded credentials
    if (username === 'admin' && password === '123456') {
        message.style.color = '#00b894';
        message.textContent = 'Đăng nhập thành công!';
        // Redirect or load dashboard here
    } else {
        message.style.color = '#d63031';
        message.textContent = 'Sai tên đăng nhập hoặc mật khẩu.';
    }
});