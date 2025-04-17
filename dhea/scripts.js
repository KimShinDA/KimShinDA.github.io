document.addEventListener('DOMContentLoaded', function() {
    // 1. Social Media Contact Alerts
    const contactLinks = document.querySelectorAll('#contact-footer a');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const socialMedia = this.getAttribute('aria-label') || 'social media';
            const confirmRedirect = confirm(`You'll be redirected to my ${socialMedia}. Continue?`);
            
            if (confirmRedirect) {
                setTimeout(() => {
                    window.location.href = this.href;
                }, 100);
            }
        });
    });

    // 2. Animation for Sections
    const sections = document.querySelectorAll('.home-section, .about-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });


});