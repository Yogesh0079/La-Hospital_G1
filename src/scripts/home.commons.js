const animateElements = () => {
    const elements = document.querySelectorAll('.animate-text, .split-text');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
};

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    animateElements();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate testimonial cards on scroll
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    testimonialCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        cardObserver.observe(card);
    });

    // Parallax effect for sections
    const parallaxSections = document.querySelectorAll('.parallax');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;

        parallaxSections.forEach(section => {
            const speed = 0.5;
            const offset = scrollPosition * speed;
            section.style.backgroundPositionY = offset + 'px';
        });
    });
});

export {animateElements}