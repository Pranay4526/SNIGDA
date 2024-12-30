document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get values from the form
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Handle sign up logic (send data to the backend or perform validation)
    console.log('User signed up:', username, email, password);
});