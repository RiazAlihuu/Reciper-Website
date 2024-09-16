// userRegistration.js

document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(registrationForm);
        
        // Collect form data
        const userData = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password')
        };

        // Example: Print user data to console
        console.log('User Registered:', userData);

        // Here you can send data to the server or handle it as needed
    });
});
