// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all fade-in-up elements
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(function(element) {
        observer.observe(element);
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Form submission handling
    const emailForm = document.querySelector('.email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            const button = this.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            
            // Update button to show loading state
            button.textContent = 'Joining...';
            button.disabled = true;
            
            // Reset button after a delay (formspree will redirect or show success)
            setTimeout(function() {
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        });
    }
    
    // Add subtle parallax effect to hero section
    let ticking = false;
    
    function updateHeroParallax() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        const speed = scrolled * 0.5;
        
        if (parallax) {
            parallax.style.transform = `translateY(${speed}px)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeroParallax);
            ticking = true;
        }
    }
    
    // Only add parallax on larger screens and if user doesn't prefer reduced motion
    if (window.innerWidth > 768 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('scroll', requestTick, { passive: true });
    }
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.step, .prop, .cta-button');
    interactiveElements.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        element.addEventListener('mouseleave', function() {
            if (this.classList.contains('cta-button')) {
                this.style.transform = 'translateY(0)';
            } else {
                this.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Add focus management for accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('user-is-tabbing');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('user-is-tabbing');
    });
});

// Handle window resize events
window.addEventListener('resize', function() {
    // Recalculate any size-dependent features if needed
}, { passive: true });

// Optional: Add some Easter eggs or special interactions
document.addEventListener('keydown', function(e) {
    // Konami code or other fun interactions could go here
    if (e.key === 'ArrowUp' && e.altKey) {
        // Secret interaction - maybe show a fun animation
        console.log('🌙 Sweet dreams! 🌟');
    }
});

// Performance optimization: Preload critical resources
function preloadCriticalResources() {
    // Could preload any images or resources here if needed
    const criticalImages = [
        // Add any critical image URLs here
    ];
    
    criticalImages.forEach(function(src) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Call preload function
preloadCriticalResources();