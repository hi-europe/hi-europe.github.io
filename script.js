// JavaScript for smooth scrolling and form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for contacting us!');
        form.reset();
    });
});
