// JavaScript for handling the navbar toggle on mobile
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle the navbar visibility when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth scroll effect for anchor links
const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        
        window.scrollTo({
            top: target.offsetTop - 80, // Adjust the scroll position to account for the fixed header
            behavior: 'smooth'
        });

        // Close the navbar on mobile after clicking a link
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
        }
    });
});

// Add active class to the navbar link that corresponds to the section in view
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 80 && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Skills Section Progress Bar Animation
const skillSection = document.getElementById('skills');
const skillItems = document.querySelectorAll('.skill-item');

function animateSkills() {
    const skillPosition = skillSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    // Check if the skills section is in view
    if (skillPosition < screenPosition) {
        skillItems.forEach(item => {
            const progress = item.querySelector('.progress');
            const width = progress.style.width;
            progress.style.transition = 'width 1.5s ease-in-out';
            progress.style.width = width;
        });
    }
}

// Listen for scroll events to trigger animation
window.addEventListener('scroll', animateSkills);

// Initial call to animate skills if the section is already in view
animateSkills();
