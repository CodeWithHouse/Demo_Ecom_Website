document.addEventListener('DOMContentLoaded', function() {
    // Initialize the mobile menu
    initMobileMenu();
    
    // Initialize quantity selectors
    initQuantitySelectors();
    
    // Initialize product variant buttons
    initVariantButtons();
    
    // Initialize product tabs
    initProductTabs();
    
    // Initialize rating selection
    initRatingSelect();
    
    // Load product data if on product page
    if (window.location.pathname.includes('product.html')) {
        loadProductData();
    }
    
    // Initialize newsletter form
    initNewsletterForm();
    
    // Initialize add to cart functionality
    initAddToCart();
});

// Mobile Menu
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            // This is a placeholder for mobile menu functionality
            alert('Mobile menu functionality would be implemented here.');
            // In a real implementation, this would toggle a class on the nav element
            // and display a mobile-friendly menu
        });
    }
}

// Quantity Selectors
function initQuantitySelectors() {
    const minusButtons = document.querySelectorAll('.quantity-btn.minus');
    const plusButtons = document.querySelectorAll('.quantity-btn.plus');
    
    minusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.nextElementSibling;
            let value = parseInt(input.value);
            if (value > parseInt(input.min)) {
                input.value = value - 1;
                // Trigger change event to update any dependent calculations
                input.dispatchEvent(new Event('change'));
            }
        });
    });
    
    plusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.previousElementSibling;
            let value = parseInt(input.value);
            if (value < parseInt(input.max)) {
                input.value = value + 1;
                // Trigger change event to update any dependent calculations
                input.dispatchEvent(new Event('change'));
            }
        });
    });
}

// Product Variant Buttons
function initVariantButtons() {
    const variantButtons = document.querySelectorAll('.variant-btn');
    
    variantButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons in the same group
            const variantGroup = this.closest('.variant-group');
            variantGroup.querySelectorAll('.variant-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to the clicked button
            this.classList.add('active');
            
            // Update price if data attributes are present
            const price = this.getAttribute('data-price');
            const originalPrice = this.getAttribute('data-original-price');
            
            if (price) {
                const currentPriceElement = document.getElementById('current-price');
                if (currentPriceElement) {
                    currentPriceElement.textContent = `$${price}`;
                }
            }
            
            if (originalPrice) {
                const originalPriceElement = document.getElementById('original-price');
                if (originalPriceElement) {
                    originalPriceElement.textContent = `$${originalPrice}`;
                    originalPriceElement.style.display = 'inline';
                }
            } else {
                const originalPriceElement = document.getElementById('original-price');
                if (originalPriceElement) {
                    originalPriceElement.style.display = 'none';
                }
            }
        });
    });
}

// Product Tabs
function initProductTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all tab buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked tab button
            this.classList.add('active');
            
            // Hide all tab panes
            const tabPanes = document.querySelectorAll('.tab-pane');
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
            });
            
            // Show the corresponding tab pane
            const tabId = this.getAttribute('data-tab');
            const activePane = document.getElementById(tabId);
            if (activePane) {
                activePane.classList.add('active');
            }
        });
    });
}

// Rating Selection
function initRatingSelect() {
    const ratingStars = document.querySelectorAll('.rating-select i');
    
    ratingStars.forEach((star, index) => {
        star.addEventListener('click', function() {
            // Reset all stars
            ratingStars.forEach(s => {
                s.classList.remove('fas', 'active');
                s.classList.add('far');
            });
            
            // Set clicked star and all stars before it to active
            for (let i = 0; i <= index; i++) {
                ratingStars[i].classList.remove('far');
                ratingStars[i].classList.add('fas', 'active');
            }
        });
        
        star.addEventListener('mouseover', function() {
            // Reset all stars to initial state
            ratingStars.forEach(s => {
                if (!s.classList.contains('active')) {
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
            
            // Fill in stars up to the current one on hover
            for (let i = 0; i <= index; i++) {
                if (!ratingStars[i].classList.contains('active')) {
                    ratingStars[i].classList.remove('far');
                    ratingStars[i].classList.add('fas');
                }
            }
        });
        
        star.addEventListener('mouseout', function() {
            // On mouseout, reset to the active state
            ratingStars.forEach(s => {
                if (!s.classList.contains('active')) {
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
        });
    });
}

// Function to change main product image
function setMainImage(src) {
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.src = src;
    }
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
        if (thumbnail.querySelector('img').src === src) {
            thumbnail.classList.add('active');
        } else {
            thumbnail.classList.remove('active');
        }
    });
}

// Load product data based on URL parameter
function loadProductData() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId) {
        // In a real application, this would fetch product data from an API
        // For this demo, we'll use some hardcoded data based on the ID
        
        const products = {
            '1': {
                name: 'Premium Dog Food',
                originalPrice: '49.99',
                currentPrice: '39.99',
                description: 'Premium quality dog food made with real chicken as the first ingredient.',
                // More product data would go here
            },
            '2': {
                name: 'Cat Climbing Tree',
                currentPrice: '129.99',
                description: 'Multi-level cat tree with scratching posts and cozy platforms.',
                // More product data would go here
            },
            '3': {
                name: 'Interactive Bird Toy',
                currentPrice: '24.99',
                description: 'Stimulating toy to keep your feathered friend entertained and engaged.',
                // More product data would go here
            },
            '4': {
                name: 'Aquarium Starter Kit',
                currentPrice: '89.99',
                description: 'Complete setup for beginning aquarists, includes tank, filter, and essentials.',
                // More product data would go here
            }
        };
        
        const product = products[productId];
        
        if (product) {
            // Update product details
            const nameElement = document.getElementById('product-name');
            const nameBreadcrumb = document.getElementById('product-name-breadcrumb');
            const currentPriceElement = document.getElementById('current-price');
            const originalPriceElement = document.getElementById('original-price');
            
            if (nameElement) nameElement.textContent = product.name;
            if (nameBreadcrumb) nameBreadcrumb.textContent = product.name;
            if (currentPriceElement) currentPriceElement.textContent = `$${product.currentPrice}`;
            
            if (originalPriceElement) {
                if (product.originalPrice) {
                    originalPriceElement.textContent = `$${product.originalPrice}`;
                    originalPriceElement.style.display = 'inline';
                } else {
                    originalPriceElement.style.display = 'none';
                }
            }
            
            // Update page title
            document.title = `${product.name} - PawsomeShop`;
        }
    }
}

// Newsletter Form
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                // In a real application, this would send the email to a server
                alert(`Thank you for subscribing with ${email}!`);
                emailInput.value = '';
            }
        });
    }
}

// Add to Cart Functionality
function initAddToCart() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get product information
            const productName = document.getElementById('product-name')?.textContent || 'Product';
            const quantity = parseInt(document.getElementById('quantity-input')?.value || 1);
            
            // Get selected variant (size, color, etc.)
            let variant = '';
            const activeVariant = document.querySelector('.variant-btn.active');
            if (activeVariant) {
                variant = activeVariant.textContent;
            }
            
            // In a real implementation, this would add the item to a cart object and update the UI
            alert(`Added to cart: ${quantity} × ${productName} ${variant ? `(${variant})` : ''}`);
            
            // Update cart count in header (demo)
            const cartCount = document.querySelector('.cart-count');
            if (cartCount) {
                const currentCount = parseInt(cartCount.textContent);
                cartCount.textContent = currentCount + quantity;
            }
        });
    });
}

// Hero Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the carousel
    const carousel = {
        container: document.querySelector('.carousel-container'),
        slides: document.querySelectorAll('.carousel-slide'),
        indicators: document.querySelectorAll('.carousel-indicators .indicator'),
        prevBtn: document.querySelector('.prev-btn'),
        nextBtn: document.querySelector('.next-btn'),
        currentIndex: 0,
        interval: null,
        autoPlayDuration: 3000, // 5 seconds per slide
        
        init: function() {
            // Initialize event listeners
            this.prevBtn.addEventListener('click', () => this.prevSlide());
            this.nextBtn.addEventListener('click', () => this.nextSlide());
            
            // Setup indicator clicks
            this.indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => this.goToSlide(index));
            });
            
            // Start autoplay
            this.startAutoplay();
            
            // Pause autoplay on hover
            this.container.addEventListener('mouseenter', () => this.stopAutoplay());
            this.container.addEventListener('mouseleave', () => this.startAutoplay());
        },
        
        goToSlide: function(index) {
            // Remove active class from current slide and indicator
            this.slides[this.currentIndex].classList.remove('active');
            this.indicators[this.currentIndex].classList.remove('active');
            
            // Update current index
            this.currentIndex = index;
            if (this.currentIndex < 0) {
                this.currentIndex = this.slides.length - 1;
            } else if (this.currentIndex >= this.slides.length) {
                this.currentIndex = 0;
            }
            
            // Add active class to new slide and indicator
            this.slides[this.currentIndex].classList.add('active');
            this.indicators[this.currentIndex].classList.add('active');
        },
        
        nextSlide: function() {
            this.goToSlide(this.currentIndex + 1);
        },
        
        prevSlide: function() {
            this.goToSlide(this.currentIndex - 1);
        },
        
        startAutoplay: function() {
            this.stopAutoplay(); // Clear any existing interval
            this.interval = setInterval(() => this.nextSlide(), this.autoPlayDuration);
        },
        
        stopAutoplay: function() {
            if (this.interval) {
                clearInterval(this.interval);
            }
        }
    };
    
    // Check if carousel exists before initializing
    if (carousel.container) {
        carousel.init();
    }
});