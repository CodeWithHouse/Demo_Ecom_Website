// Product Database
const productDatabase = {
    '1': {
        name: 'Adult Perfect Weight Small And Mini Dry Dog Food',
        category: 'Dog Food',
        categoryPath: 'Dogs',
        originalPrice: '49.99',
        currentPrice: '39.99',
        discount: '20% Off',
        description: 'Premium quality dog food made with real chicken as the first ingredient. This nutrient-rich formula supports your dog\'s overall health, digestion, and immune system. Suitable for all breeds and life stages.',
        features: [
            'No artificial colors, flavors, or preservatives',
            'Rich in protein for muscle development',
            'Contains Omega-3 fatty acids for healthy skin and coat',
            'Prebiotics for digestive health',
            'Antioxidants to support immune system'
        ],
        sku: 'DOG-FOOD-1001',
        tags: 'Dog, Food, Premium, Nutrition',
        rating: 4.5,
        reviews: 42,
        mainImage: 'assets/products/dog-food-main.jpg',
        thumbnails: [
            'assets/products/dog-food-thumb1.jpg',
            'assets/products/dog-food-thumb2.jpg',
            'assets/products/dog-food-thumb3.jpg',
            'assets/products/dog-food-thumb4.jpg'
        ],
        variants: [
            { name: '5 lbs', price: '29.99', originalPrice: null },
            { name: '15 lbs', price: '39.99', originalPrice: '49.99' },
            { name: '30 lbs', price: '59.99', originalPrice: '69.99' }
        ]
    },
    '2': {
        name: 'Cat Climbing Tree',
        category: 'Cat Furniture',
        categoryPath: 'Cats',
        originalPrice: null,
        currentPrice: '129.99',
        discount: null,
        description: 'Multi-level cat tree with scratching posts and cozy platforms. Perfect for climbing, scratching, playing, and napping. Helps keep your cat active and entertained.',
        features: [
            'Sturdy base for stability',
            'Plush cushions for comfortable rest',
            'Multiple sisal-wrapped posts for scratching',
            'Hanging toys for playful engagement',
            'Easy to assemble with included tools'
        ],
        sku: 'CAT-TREE-2002',
        tags: 'Cat, Furniture, Climbing, Tree',
        rating: 5.0,
        reviews: 87,
        mainImage: 'assets/products/cat-tree-main.jpg',
        thumbnails: [
            'assets/products/cat-tree-thumb1.jpg',
            'assets/products/cat-tree-thumb2.jpg',
            'assets/products/cat-tree-thumb3.jpg',
            'assets/products/cat-tree-thumb4.jpg'
        ],
        variants: [
            { name: 'Small (48")', price: '89.99', originalPrice: null },
            { name: 'Medium (60")', price: '129.99', originalPrice: null },
            { name: 'Large (72")', price: '169.99', originalPrice: null }
        ]
    },
    '3': {
        name: 'Interactive Bird Toy',
        category: 'Bird Accessories',
        categoryPath: 'Birds',
        originalPrice: null,
        currentPrice: '24.99',
        discount: null,
        description: 'Stimulating toy to keep your feathered friend entertained and engaged. Colorful, durable materials with various textures to explore.',
        features: [
            'Colorful beads and bells for auditory stimulation',
            'Various textures to explore',
            'Encourages physical activity',
            'Helps prevent boredom and feather plucking',
            'Safe, non-toxic materials'
        ],
        sku: 'BIRD-TOY-3003',
        tags: 'Bird, Toy, Interactive, Entertainment',
        rating: 4.0,
        reviews: 23,
        mainImage: 'assets/products/bird-toy-main.jpg',
        thumbnails: [
            'assets/products/bird-toy-thumb1.jpg',
            'assets/products/bird-toy-thumb2.jpg',
            'assets/products/bird-toy-thumb3.jpg',
            'assets/products/bird-toy-thumb4.jpg'
        ],
        variants: [
            { name: 'Small', price: '16.99', originalPrice: null },
            { name: 'Medium', price: '24.99', originalPrice: null },
            { name: 'Large', price: '32.99', originalPrice: null }
        ]
    }
};

// Hero Carousel Functionality - Simplified for Autoplay Only
document.addEventListener('DOMContentLoaded', function() {
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

    // Load product data if on product page
    if (window.location.pathname.includes('product.html')) {
        loadProductData();
        
        // Initialize quantity selectors
        initQuantitySelectors();
        
        // Product tabs are initialized separately
        initProductTabs();
        
        // Rating selection
        initRatingSelection();
        
        // Add to cart functionality
        initAddToCart();
    }
});

// Load product data based on URL parameter
function loadProductData() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || '1'; // Default to product 1 if no ID is provided
    
    const product = productDatabase[productId];
    
    if (product) {
        // Update product name
        const nameElement = document.getElementById('product-name');
        const nameBreadcrumb = document.getElementById('product-name-breadcrumb');
        if (nameElement) nameElement.textContent = product.name;
        if (nameBreadcrumb) nameBreadcrumb.textContent = product.name;
        
        // Update category in breadcrumb
        const categoryBreadcrumb = document.getElementById('product-category-breadcrumb');
        if (categoryBreadcrumb && product.categoryPath) {
            categoryBreadcrumb.textContent = product.categoryPath;
        }
        
        // Update product prices
        const currentPriceElement = document.getElementById('current-price');
        const originalPriceElement = document.getElementById('original-price');
        
        if (currentPriceElement) currentPriceElement.textContent = `$${product.currentPrice}`;
        
        if (originalPriceElement) {
            if (product.originalPrice) {
                originalPriceElement.textContent = `$${product.originalPrice}`;
                originalPriceElement.style.display = 'inline';
            } else {
                originalPriceElement.style.display = 'none';
            }
        }
        
        // Update discount badge
        const discountBadge = document.querySelector('.discount-badge');
        if (discountBadge) {
            if (product.discount) {
                discountBadge.textContent = product.discount;
                discountBadge.style.display = 'inline';
            } else {
                discountBadge.style.display = 'none';
            }
        }
        
        // Update description
        const descriptionElement = document.querySelector('.product-description p');
        if (descriptionElement) descriptionElement.textContent = product.description;
        
        // Update features list
        const featuresList = document.querySelector('.product-description ul');
        if (featuresList && product.features) {
            featuresList.innerHTML = '';
            product.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });
        }
        
        // Update product metadata
        const skuElement = document.querySelector('.meta-item:nth-of-type(1) .meta-value');
        const categoryElement = document.querySelector('.meta-item:nth-of-type(2) .meta-value');
        const tagsElement = document.querySelector('.meta-item:nth-of-type(3) .meta-value');
        
        if (skuElement) skuElement.textContent = product.sku;
        if (categoryElement) categoryElement.textContent = product.category;
        if (tagsElement) tagsElement.textContent = product.tags;
        
        // Update ratings
        const ratingCountElement = document.querySelector('.product-rating span');
        if (ratingCountElement) ratingCountElement.textContent = `(${product.reviews} reviews)`;
        
        // Update images
        const mainImageElement = document.getElementById('main-product-image');
        if (mainImageElement && product.mainImage) {
            mainImageElement.src = product.mainImage;
            mainImageElement.alt = product.name;
        }
        
        // Update thumbnails
        const thumbnailContainer = document.querySelector('.image-thumbnails');
        if (thumbnailContainer && product.thumbnails && product.thumbnails.length > 0) {
            thumbnailContainer.innerHTML = '';
            product.thumbnails.forEach((thumb, index) => {
                const thumbnail = document.createElement('div');
                thumbnail.className = index === 0 ? 'thumbnail active' : 'thumbnail';
                thumbnail.innerHTML = `<img src="${thumb}" alt="Product Thumbnail ${index+1}" onclick="setMainImage(this.src)">`;
                thumbnailContainer.appendChild(thumbnail);
            });
        }
        
        // Update variants
        const variantContainer = document.querySelector('.variant-options');
        if (variantContainer && product.variants) {
            variantContainer.innerHTML = '';
            product.variants.forEach((variant, index) => {
                const button = document.createElement('button');
                button.className = index === 0 ? 'variant-btn active' : 'variant-btn';
                button.textContent = variant.name;
                button.setAttribute('data-price', variant.price);
                if (variant.originalPrice) {
                    button.setAttribute('data-original-price', variant.originalPrice);
                }
                variantContainer.appendChild(button);
            });
            
            // Re-initialize variant buttons
            initVariantButtons();
        }
        
        // Update page title
        document.title = `${product.name} - PetCircle`;
    } else {
        // Handle product not found
        console.error('Product not found');
    }
}

// Initialize variant buttons separately so we can call it after dynamic updates
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

// Initialize quantity selectors
function initQuantitySelectors() {
    const minusButtons = document.querySelectorAll('.quantity-btn.minus');
    const plusButtons = document.querySelectorAll('.quantity-btn.plus');
    
    minusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.nextElementSibling;
            let value = parseInt(input.value);
            if (value > parseInt(input.min)) {
                input.value = value - 1;
            }
        });
    });
    
    plusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.previousElementSibling;
            let value = parseInt(input.value);
            if (value < parseInt(input.max)) {
                input.value = value + 1;
            }
        });
    });
}

// Initialize product tabs
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

// Initialize rating selection
function initRatingSelection() {
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

// Add to Cart Functionality
function initAddToCart() {
    const addToCartButton = document.querySelector('.add-to-cart-btn');
    
    if (addToCartButton) {
        addToCartButton.addEventListener('click', function() {
            // Get product information
            const productName = document.getElementById('product-name').textContent;
            const quantity = parseInt(document.getElementById('quantity-input').value);
            
            // Get selected variant (size)
            let variant = '';
            const activeVariant = document.querySelector('.variant-btn.active');
            if (activeVariant) {
                variant = activeVariant.textContent;
            }
            
            // Show confirmation
            alert(`Added to cart: ${quantity} × ${productName} (${variant})`);
            
            // Update cart count in header
            const cartCount = document.querySelector('.cart-count');
            if (cartCount) {
                const currentCount = parseInt(cartCount.textContent);
                cartCount.textContent = currentCount + quantity;
            }
        });
    }
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