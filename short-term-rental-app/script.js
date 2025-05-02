// Optional JavaScript for interactions
console.log('Welcome to Paradise Luxe Homes!');

// Fix carousel functionality to prevent looping issues
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');

// Debugging carousel functionality to prevent unintended behavior
if (images.length > 0) {
    images.forEach((img, index) => {
        img.style.transform = index === 0 ? 'translateX(0)' : 'translateX(100%)';
    });

    function showNextImage() {
        images[currentIndex].style.transform = 'translateX(100%)';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.transform = 'translateX(0)';
    }

    // Clear any existing intervals before setting a new one
    let carouselInterval = setInterval(showNextImage, 3000);

    // Add event listener to clear interval on page unload
    window.addEventListener('beforeunload', () => {
        clearInterval(carouselInterval);
    });
}

// Add interactivity for the testimonial carousel
const testimonials = document.querySelectorAll('.testimonial');
let testimonialIndex = 0;

function rotateTestimonials() {
    testimonials.forEach((testimonial, index) => {
        testimonial.style.display = index === testimonialIndex ? 'block' : 'none';
    });
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}

setInterval(rotateTestimonials, 5000);

// Add form validation
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill out all fields.');
        }
    });
}