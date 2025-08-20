document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
            form.reset();
        });
    }
});