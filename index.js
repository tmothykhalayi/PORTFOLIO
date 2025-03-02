// Smooth Scroll for Navigation Links with Fallback
if ('scrollBehavior' in document.documentElement.style) {
    // Use native smooth scroll if supported
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor link behavior
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Aligns the target at the top of the viewport
                });
            }
        });
    });
} else {
    // Fallback scroll behavior
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// JavaScript for handling the navbar toggle on mobile with overlay
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const overlay = document.createElement('div');
overlay.classList.add('overlay'); // Create overlay div

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    if (navbar.classList.contains('active')) {
        document.body.appendChild(overlay); // Add overlay when navbar is active
    } else {
        document.body.removeChild(overlay); // Remove overlay when navbar is closed
    }
});

// Form validation script with error highlighting
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission for validation
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset previous error styles
    [name, email, message].forEach(input => input.classList.remove('error'));

    // Check if all fields are filled and if the email is valid
    if (name.value && email.value && message.value) {
        if (emailRegex.test(email.value)) {
            alert('Message Sent!');
            this.reset();
        } else {
            email.classList.add('error');
            alert('Please enter a valid email address.');
        }
    } else {
        [name, email, message].forEach(input => {
            if (!input.value) input.classList.add('error');
        });
        alert('Please fill out all fields.');
    }
});

// Smooth Scroll for Project Items
document.querySelectorAll('.project-item img').forEach(item => {
    item.addEventListener('click', function () {
        const projectSection = document.getElementById('project'); // Adjust if the project section has an id
        projectSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start', // Align the target at the top of the viewport
        });
    });
});
