// Console log for debugging
console.log("Script loaded. Is product page:", isProductPage());
console.log("Current URL:", window.location.href);

// Hero Carousel Functionality - Simplified for Autoplay Only
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");

    // display current cart count
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const currentCount = localStorage.getItem('cartCount');
        cartCount.textContent = currentCount || '0';
    }
    
    // Initialize the carousel
    const carousel = {
        slides: document.querySelectorAll('.carousel-slide'),
        currentIndex: 0,
        interval: null,
        autoPlayDuration: 3000, // 3 seconds per slide
        
        init: function() {
            // If no slides or only one slide, exit early
            if (this.slides.length <= 1) return;
            
            // Start autoplay
            this.startAutoplay();
        },
        
        goToSlide: function(index) {
            // Remove active class from current slide
            this.slides[this.currentIndex].classList.remove('active');
            
            // Update current index
            this.currentIndex = index;
            if (this.currentIndex < 0) {
                this.currentIndex = this.slides.length - 1;
            } else if (this.currentIndex >= this.slides.length) {
                this.currentIndex = 0;
            }
            
            // Add active class to new slide
            this.slides[this.currentIndex].classList.add('active');
        },
        
        nextSlide: function() {
            this.goToSlide(this.currentIndex + 1);
        },
        
        startAutoplay: function() {
            this.stopAutoplay(); // Clear any existing interval
            this.interval = setInterval(() => this.nextSlide(), this.autoPlayDuration);
        },
        
        stopAutoplay: function() {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        }
    };
    
    // Check if carousel exists before initializing
    if (document.querySelector('.hero-carousel')) {
        carousel.init();
    }

    // Mobile Menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            alert('Mobile menu would open here');
        });
    }
    
    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                alert(`Thank you for subscribing with ${email}!`);
                emailInput.value = '';
            }
        });
    }

    // Load product data if on product page - Modified check to be more robust

});
