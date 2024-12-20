document.getElementById('adoption-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Display success message
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';

    // Optionally, clear the form fields
    document.getElementById('adoption-form').reset();
});
