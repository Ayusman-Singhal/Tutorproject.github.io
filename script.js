// Function for scroll-based animations
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

// Form Validation Functionality
const formElements = document.querySelectorAll('form');

formElements.forEach(form => {
    form.addEventListener('submit', function (e) {
        const inputs = form.querySelectorAll('input[required]');
        let formIsValid = true;

        inputs.forEach(input => {
            if (!input.value) {
                formIsValid = false;
                input.nextElementSibling.textContent = 'This field is required';
                input.classList.add('input-error');
            } else {
                input.nextElementSibling.textContent = '';
                input.classList.remove('input-error');
            }
        });

        if (!formIsValid) {
            e.preventDefault(); // Prevent form submission if validation fails
        }
    });
});

// Input Field Interaction - Remove error state on typing
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        if (input.value) {
            input.classList.remove('input-error');
            input.nextElementSibling.textContent = '';
        }
    });
});
