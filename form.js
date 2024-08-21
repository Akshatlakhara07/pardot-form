function validateForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const company = document.getElementById('company').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!firstName || !lastName || !email || !subject) {
        alert('Please fill in all required fields.');
        return false;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}
