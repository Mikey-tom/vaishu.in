document.addEventListener("DOMContentLoaded", function() {
    // Scroll-triggered animation for sections
    const sections = document.querySelectorAll('.animate-section');
    const options = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
