// Smooth Scroll for Navigation Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();  // Prevent default anchor link behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'  // Smooth scroll to the target section
        });
    });
});

// JavaScript for handling the navbar toggle on mobile
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle navbar visibility on mobile when menu icon is clicked
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');  // Toggle the 'active' class to show/hide navbar
});

// Form validation script
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form submission for validation
    
    // Get values from form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if all fields are filled and if the email is valid
    if (name && email && message) {
        if (emailRegex.test(email)) {
            alert('Message Sent!');
            this.reset();  // Reset the form after successful submission
        } else {
            alert('Please enter a valid email address.');
        }
    } else {
        alert('Please fill out all fields.');
    }
});
