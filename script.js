// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.2,
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
    
    // Enhanced form submission handling
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
            
            // Reset button after a delay
            setTimeout(function() {
                button.textContent = originalText;
                button.disabled = false;
                button.classList.remove('sparkle');
            }, 2000);
        });
    }
    
    // Enhanced phone mockup interactions
    const phoneScreens = document.querySelectorAll('.phone-screen, .step-screen');
    phoneScreens.forEach(function(screen) {
        screen.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotateY(5deg)';
            this.style.boxShadow = '0 25px 80px rgba(0, 0, 0, 0.5), 0 0 0 8px rgba(255, 228, 160, 0.2)';
        });
        
        screen.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotateY(0deg)';
            this.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 8px rgba(255, 228, 160, 0.1)';
        });
    });
    
    // Mini phone hover effects
    const miniPhones = document.querySelectorAll('.phone-mini');
    miniPhones.forEach(function(phone) {
        phone.addEventListener('mouseenter', function() {
            const screen = this.querySelector('.step-screen');
            if (screen) {
                screen.style.transform = 'translateY(-8px) scale(1.05)';
                screen.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.4)';
            }
        });
        
        phone.addEventListener('mouseleave', function() {
            const screen = this.querySelector('.step-screen');
            if (screen) {
                screen.style.transform = 'translateY(0) scale(1)';
                screen.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            }
        });
    });
    
    // Enhanced app icon interaction
    const appIconLarge = document.querySelector('.app-icon-large');
    if (appIconLarge) {
        appIconLarge.addEventListener('click', function() {
            // Create magical sparkle effect
            createSparkles(this);
        });
        
        appIconLarge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        appIconLarge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }
    
    // Sparkle effect function
    function createSparkles(element) {
        const rect = element.getBoundingClientRect();
        const sparkleCount = 12;
        
        for (let i = 0; i < sparkleCount; i++) {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = ['✨', '🌟', '⭐', '💫'][Math.floor(Math.random() * 4)];
            sparkle.style.position = 'fixed';
            sparkle.style.left = (rect.left + rect.width / 2) + 'px';
            sparkle.style.top = (rect.top + rect.height / 2) + 'px';
            sparkle.style.fontSize = Math.random() * 10 + 16 + 'px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '9999';
            sparkle.style.color = ['#FFD93D', '#FFE4A0', '#FF8A5C', '#FFB5C2'][Math.floor(Math.random() * 4)];
            
            document.body.appendChild(sparkle);
            
            // Animate sparkle
            const angle = (i / sparkleCount) * Math.PI * 2;
            const distance = Math.random() * 100 + 60;
            const targetX = Math.cos(angle) * distance;
            const targetY = Math.sin(angle) * distance;
            
            sparkle.animate([
                { 
                    transform: 'translate(0, 0) scale(0) rotate(0deg)', 
                    opacity: 1 
                },
                { 
                    transform: `translate(${targetX}px, ${targetY}px) scale(1) rotate(360deg)`, 
                    opacity: 0 
                }
            ], {
                duration: Math.random() * 400 + 800,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => sparkle.remove();
        }
    }
    
    // Parallax effect for hero phones
    let ticking = false;
    
    function updateParallaxEffects() {
        const scrolled = window.pageYOffset;
        const heroPhone = document.querySelector('.phone-mockup .phone-screen');
        
        if (heroPhone && window.innerWidth > 768) {
            // Gentle floating effect for hero phone
            const float = Math.sin(Date.now() * 0.001) * 3;
            const scrollOffset = scrolled * 0.1;
            heroPhone.style.transform = `translateY(${float - scrollOffset}px)`;
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
        
        // Continuous floating animation
        setInterval(function() {
            const heroPhone = document.querySelector('.phone-mockup .phone-screen');
            if (heroPhone && window.pageYOffset < 500) {
                const float = Math.sin(Date.now() * 0.001) * 3;
                heroPhone.style.transform += ` translateY(${float}px)`;
            }
        }, 16);
    }
    
    // Add click effects to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            // Ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.position = 'absolute';
            ripple.style.width = size + 'px';
            ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.background = 'rgba(255, 248, 240, 0.3)';
            ripple.style.borderRadius = '50%';
            ripple.style.pointerEvents = 'none';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Focus management for accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('user-is-tabbing');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('user-is-tabbing');
    });
    
    // Performance optimization
    function preloadCriticalResources() {
        const criticalImages = [
            'app-home.jpg',
            'app-player.jpg', 
            'app-recording.jpg',
            'app-icon.jpg'
        ];
        
        criticalImages.forEach(function(src) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }
    
    preloadCriticalResources();
});

// Handle window resize events
window.addEventListener('resize', function() {
    // Recalculate any size-dependent features if needed
    const phones = document.querySelectorAll('.phone-screen');
    phones.forEach(function(phone) {
        // Reset any transforms on resize
        phone.style.transform = '';
    });
}, { passive: true });