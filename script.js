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

// Theme toggle functionality
const themeToggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'dark-mode';

// Apply the stored theme when the page loads
document.body.classList.add(currentTheme);
if (currentTheme === 'light-mode') {
    themeToggleButton.textContent = 'Dark Mode';
}

// Toggle theme on button click
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const theme = document.body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
    localStorage.setItem('theme', theme);
    themeToggleButton.textContent = theme === 'light-mode' ? 'Dark Mode' : 'Light Mode';
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
