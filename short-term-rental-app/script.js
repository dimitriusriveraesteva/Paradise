// Optional JavaScript for interactions
console.log('Welcome to Paradise Luxe Homes!');

// Add carousel functionality
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');

function showNextImage() {
    images[currentIndex].style.transform = 'translateX(-100%)';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.transform = 'translateX(0)';
}

setInterval(showNextImage, 3000);

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