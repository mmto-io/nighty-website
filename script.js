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
    
    // Smooth scroll for anchor links with magical easing
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
    
    // Enhanced form submission handling with magical feedback
    const emailForm = document.querySelector('.email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            const button = this.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            
            // Add magical sparkle effect
            button.classList.add('sparkle');
            
            // Update button to show loading state
            button.textContent = '✨ Joining...';
            button.disabled = true;
            
            // Reset button after a delay (formspree will redirect or show success)
            setTimeout(function() {
                button.textContent = originalText;
                button.disabled = false;
                button.classList.remove('sparkle');
            }, 2000);
        });
    }
    
    // Enhanced parallax effect for hero section with stars
    let ticking = false;
    
    function updateParallaxEffects() {
        const scrolled = window.pageYOffset;
        const stars = document.querySelector('.stars');
        const heroIcon = document.querySelector('.hero-icon');
        
        if (stars) {
            // Subtle star movement
            stars.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
        
        if (heroIcon) {
            // Gentle floating effect for the owl icon
            heroIcon.style.transform = `translateY(${Math.sin(Date.now() * 0.001) * 5}px)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallaxEffects);
            ticking = true;
        }
    }
    
    // Only add parallax on larger screens and if user doesn't prefer reduced motion
    if (window.innerWidth > 768 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('scroll', requestTick, { passive: true });
        
        // Also run the floating animation
        setInterval(function() {
            const heroIcon = document.querySelector('.hero-icon');
            if (heroIcon && window.pageYOffset < 500) {
                heroIcon.style.transform = `translateY(${Math.sin(Date.now() * 0.001) * 3}px)`;
            }
        }, 16); // ~60fps
    }
    
    // Enhanced hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.step, .prop, .cta-button, .app-icon');
    interactiveElements.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            if (this.classList.contains('app-icon')) {
                // Special effect for the owl icon
                this.style.transform = 'scale(1.05) rotate(2deg)';
            } else if (this.classList.contains('cta-button')) {
                this.style.transform = 'translateY(-3px) scale(1.02)';
            } else {
                this.style.transform = 'translateY(-8px)';
            }
        });
        
        element.addEventListener('mouseleave', function() {
            if (this.classList.contains('app-icon')) {
                this.style.transform = 'scale(1) rotate(0deg)';
            } else {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
    
    // Add magical click effect to the owl icon
    const appIcon = document.querySelector('.app-icon');
    if (appIcon) {
        appIcon.addEventListener('click', function() {
            // Create sparkle effect
            createSparkles(this);
        });
    }
    
    // Sparkle effect function
    function createSparkles(element) {
        const rect = element.getBoundingClientRect();
        const sparkleCount = 8;
        
        for (let i = 0; i < sparkleCount; i++) {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = (rect.left + rect.width / 2) + 'px';
            sparkle.style.top = (rect.top + rect.height / 2) + 'px';
            sparkle.style.fontSize = '16px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '9999';
            sparkle.style.color = '#FFD93D';
            
            document.body.appendChild(sparkle);
            
            // Animate sparkle
            const angle = (i / sparkleCount) * Math.PI * 2;
            const distance = 60;
            const targetX = Math.cos(angle) * distance;
            const targetY = Math.sin(angle) * distance;
            
            sparkle.animate([
                { transform: 'translate(0, 0) scale(0)', opacity: 1 },
                { transform: `translate(${targetX}px, ${targetY}px) scale(1)`, opacity: 0 }
            ], {
                duration: 800,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => sparkle.remove();
        }
    }
    
    // Add focus management for accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('user-is-tabbing');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('user-is-tabbing');
    });
    
    // Add some magical easter eggs
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.code);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            // Easter egg: make it extra magical
            document.body.style.animation = 'rainbow 2s ease-in-out';
            createMagicalEffect();
            konamiCode = [];
        }
    });
    
    function createMagicalEffect() {
        const stars = document.querySelector('.stars');
        if (stars) {
            stars.style.animation = 'magicalTwinkle 3s ease-in-out';
            setTimeout(() => {
                stars.style.animation = '';
            }, 3000);
        }
    }
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