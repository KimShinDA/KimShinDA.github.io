// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // 1. Enhanced "See More" Button with Visual Feedback
    const seeMoreBtn = document.getElementById('see-more-btn');
    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const btn = this.querySelector('.btn');
            
            // Store original button text
            const originalText = btn.textContent;
            
            // Add loading state
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            btn.style.pointerEvents = 'none'; // Disable further clicks
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Redirect after delay for better UX
            setTimeout(() => {
                window.location.href = '/dhea/pages/about.html';
            }, 800);
            
            // Timeout to reset button if navigation fails
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.pointerEvents = 'auto';
            }, 3000);
        });
    }

    // 2. Social Media Links with Custom Confirmation
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

    // 3. Animations for Sections
    const sections = document.querySelectorAll(
        '.home-section, .about-section, .project-section, .certificates-section, .skills-section'
    );
    
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