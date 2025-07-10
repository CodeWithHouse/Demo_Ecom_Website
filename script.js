// Product Database
const productDatabase = {
    '1': {
        name: 'Origen Original Dry Dog Food for (All Breeds & Ages)',
        petCategory: 'Dog',
        productCategory: 'Dog Food',
        categoryPath: 'Dry Food',
        originalPrice: null,
        currentPrice: '₹16999',
        discount: null,
        description: 'Just like their ancestor, the grey wolf, all dogs are meant to eat a diet rich and varied in whole animal ingredients. ORIJEN Original is made with meat, organs, cartilage, and bone from free-run chicken and turkey, wild-caught fish, and cage-free eggs that are delivered to our kitchen. Two-thirds of our animal ingredients are FRESH or RAW, for a concentrated source of protein. With richly nourishing protein and infusions of freeze-dried liver, this recipe nourishes your dog as nature intended while offering them a flavour that they love.',
        features: [
            'Biologically Appropriate: With richly nourishing protein, and limited low-glycemic carbohydrates, Orijen Original Dog Food nourishes dogs of all life stages, according to their evolutionary and biological needs just as they would in the wild. Because wolves do not eat highly processed cooked food, do they?',
            '85% Meat Protein: Orijen Original Dog Food is loaded with 85% meat ingredients in a biologically appropriate symphony of Free-run Chicken, Turkey, Atlantic Mackerel, wild-caught Flounder, Herring and nest-laid Eggs.',
            'Suited For Sensitive Stomachs: High-quality botanicals and vegetables in Orijen Original Dog Food provide a rich source of soluble fiber to settle sensitive stomachs. It also supports a healthy digestion in your dog which is key to the overall well-being of your pet.',
            'High-quality ingredients ensure easy digestion',
            'Low Carbohydrates Recipe: Orijen Original Dog Food is a protein-rich food featuring only fresh vegetables and fruit, which release sugar slowly, dramatically reducing the potential for fat storage. It contains no grains and is gluten free'],
        sku: 'ST-DRY-DOG-FOOD-1001',
        category: 'Dog Food',
        tags: 'Dog, Food, Premium, Nutrition',
        rating: 4.5,
        reviews: 42,
        mainImage: 'assets/products/orijen-original-dog-food/orijen-original-dog-food-1.png',
        thumbnails: [
            'assets/products/orijen-original-dog-food/orijen-original-dog-food-2.png',
            'assets/products/orijen-original-dog-food/orijen-original-dog-food-3.png',
            'assets/products/Orijen-Original-Dog-Dry-Food/orijen-original-dog-food-4.png',
        ],
        variants: [
            { name: '17kg', price: '₹16999', originalPrice: null },
            { name: '11.4kg', price: '₹12999', originalPrice: null },
        ]
    },
    '2': {
        name: 'Royal Canin Maxi Adult Dog Wet Food',
        petCategory: 'Dog',
        productCategory: 'Dog Food',
        categoryPath: 'Wet Food',
        originalPrice: null,
        currentPrice: '₹4154',
        discount: null,
        description: 'The nutritional requirements of a larger breed dog versus a smaller breed dog vary greatly, therefore it is essential you feed a balanced diet according to size and other particular sensitivities. ROYAL CANIN® Maxi Adult food is specially formulated with your dog nutritional mind.',
        features: [
            'Complete feed for dogs - For adult large breed dogs (from 26 to 44 kg) - From 15 months to 5 years old',
            'Helps maintain an ideal weight that your dog can comfortably support and ideal weight that your dog can comfortably support',
            'Enriched with omega-3 fatty acids (EPA and DHA)',
            'Suitable for maxi breeds such as Afghan Hound, Greyhound, Clumber Spaniel, Belgian Shepherd, Doberman, Pitbull, Giant Schnauzer.'
        ],
        sku: 'ST-WET-DOG-FOOD-2002',
        category: 'Dog Food',
        tags: 'Dog, Food, Premium, Nutrition',
        rating: 5.0,
        reviews: 87,
        mainImage: 'assets/products/Royal Canin Maxi Adult Dog Wet Food / Royal Canin Maxi Adult Dog Wet Food-1.jpg',
        thumbnails: [
            'assets/products/Royal Canin Maxi Adult Dog Wet Food/Royal Canin Maxi Adult Dog Wet Food -2.jpg',
            'assets/products/Royal Canin Maxi Adult Dog Wet Food/Royal Canin Maxi Adult Dog Wet Food -3.jpg',
            'assets/products/Royal Canin Maxi Adult Dog Wet Food / Royal Canin Maxi Adult Dog Wet Food -4.jpg.jpg'
        ],
        variants: [
            { name: '30x140g', price: '₹4154', originalPrice: null },
            { name: '20x140g', price: '₹2789', originalPrice: null },
        ]
    },
    '3': {
        name: 'Farmina N&D Prime Chicken & Pomegranate Grain Free Adult Cat Dry Food',
        petCategory: 'Cat',
        productCategory: 'Cat Food',
        categoryPath: 'Dry Food',
        originalPrice: null,
        currentPrice: '₹4491',
        discount: null,
        description: 'Farmina ND Prime Chicken & Pomegranate is a fully formulated meal for your adult cat of all breed which is full of all required nutrients. Farmina ND Prime Chicken & Pomegranate contains nutrients like Pomegranate which has antioxidants which has low glcemic index, hence helps in preventing obesity and diabetes. It also helps in improving the skin and fur coat.',
        features: [
            'N&D Prime- Chicken & Pomegranate is a complete food for cats.',
            '98% of protein from animal origin, 0% artificial preservatives, 0% grains',
            'Prevents obesity and diabetes thanks to its low glycaemic index obtained by cereals absence, allow a modular release of energy during the day.',
            'CoPomegranate is a rich source of vitamins, potassium and phosphorus and antioxidants.',
        ],
        sku: 'CAT-WET-FOOD-3003',
        category: 'Cat Food',
        tags: 'Cat, Nutrition, Food, Premium',
        rating: 4.0,
        reviews: 23,
        mainImage: '/assets/products/Farmina N&D Prime Chicken & Pomegranate Grain Free Adult Cat Dry Food /Farmina N&D Prime Chicken & Pomegranate Grain Free Adult Cat Dry Food-1.jpg',
        thumbnails: [
            'a/assets/products/Farmina N&D Prime Chicken & Pomegranate Grain Free Adult Cat Dry Food /Farmina N&D Prime Chicken & Pomegranate Grain Free Adult Cat Dry Food-2.jpg',
            '/assets/products/Farmina N&D Prime Chicken & Pomegranate Grain Free Adult Cat Dry Food /Farmina N&D Prime Chicken & Pomegranate Grain Free Adult Cat Dry Food-3.jpgg',
            '/assets/products/Farmina N&D Prime Chicken & Pomegranate Grain Free Adult Cat Dry Food /Farmina N&D Prime Chicken & Pomegranate Grain Free Adult Cat Dry Food-4.jpg',
        ],
        variants: [
            { name: '3kg', price: '₹4491', originalPrice: null },
            { name: '1.5kg)', price: '₹2246', originalPrice: null },
        ]
    },
    '4': {
        name: 'Dogbow Multi Stripe Martingale Collar For Dogs',
        petCategory: 'Dog',
        productCategory: 'Collars & Leashes',
        categoryPath: 'Collars & Leashes',
        originalPrice: null,
        currentPrice: '₹2246',
        discount: null,
        description: 'Does your naughty dog drag you around a lot on those evening walks? Then, this martinage collar might just come to your rescue! Specially designed for medium to large breeds, the collar tightens up on the neck when leashed preventing the pet from pulling further. Also, its thickness helps in evening the pressure which ensures it does not strain the pets neck.',
        features: [
            'Material Used : Cotton Nivar fabric',
            '1 Metal Adjuster || 2 Rectangle Metal Rings || 1 D-Ring to hook Leash directly on the collar',
            'Made of rugged steel and Cotton for strength and rust-resistant performance',
            'Available in multiple sizes to suit all pets',
        ],
        sku: 'COLLAR-LEASHES-4004',
        category: 'Collar & Leashes',
        tags: 'Dog, Leashes, Collar, Harness',
        rating: 3.5,
        reviews: 16,
        mainImage: '/assets/products/Dogbow Multi Stripe Martingale Collar For Dogs/collar-1.png',
        thumbnails: [
            '/assets/products/Dogbow Multi Stripe Martingale Collar For Dogs/collar-2.png',
            '/assets/products/Dogbow Multi Stripe Martingale Collar For Dogs/collar-3.png',
            '/assets/products/Dogbow Multi Stripe Martingale Collar For Dogs/collar-4.png',
        ],
        variants: [
            { name: 'M', price: '₹784', originalPrice: null },
            { name: 'L', price: '₹855', originalPrice: null },
            { name: 'XL', price: '₹926', originalPrice: null }
        ]
    },
    '5': {
        name: 'Premium Adjustable Dog Collar',
        petCategory: 'Dog',
        productCategory: 'Accessories',
        categoryPath: 'Collars & Leashes',
        originalPrice: '24.99',
        currentPrice: '19.99',
        discount: '20% Off',
        description: 'This premium adjustable dog collar is crafted from high-quality nylon webbing with reinforced stitching for durability. The quick-release buckle makes it easy to put on and take off, while the D-ring provides a secure attachment point for your leash.',
        features: [
            'Durable nylon webbing with reinforced stitching',
            'Quick-release buckle for easy on/off',
            'Adjustable fit for comfort',
            'Reflective threading for nighttime visibility',
            'Available in multiple colors and sizes'
        ],
        sku: 'DOG-COLLAR-5005',
        category: 'Dog Accessories',
        tags: 'Dog, Collar, Walking, Outdoor, Safety',
        rating: 4.7,
        reviews: 128,
        mainImage: '/assets/products/dog-collar/main-collar.png',
        thumbnails: [
            '/assets/products/dog-collar/main-collar.png',
            '/assets/products/dog-collar/collar-2.png',
            '/assets/products/dog-collar/collar-3.png',
            '/assets/products/dog-collar/collar-4.png'
        ],
        variants: [
            { name: 'Small - Red', price: '19.99', originalPrice: '24.99' },
            { name: 'Medium - Red', price: '21.99', originalPrice: '26.99' },
            { name: 'Large - Red', price: '23.99', originalPrice: '28.99' },
            { name: 'Small - Blue', price: '19.99', originalPrice: '24.99' },
            { name: 'Medium - Blue', price: '21.99', originalPrice: '26.99' },
            { name: 'Large - Blue', price: '23.99', originalPrice: '28.99' }
        ]
    },
    '6': {
        name: 'Dental Care Chew Treats for Dogs',
        petCategory: 'Dog',
        productCategory: 'Treats',
        categoryPath: 'Dental Care',
        originalPrice: null,
        currentPrice: '12.99',
        discount: null,
        description: 'These specially formulated dental chews help reduce plaque and tartar buildup, promoting better oral health for your dog. The unique texture helps clean even hard-to-reach teeth and freshens breath naturally.',
        features: [
            'Clinically proven to reduce plaque and tartar',
            'Unique texture cleans teeth and gums',
            'Freshens breath naturally',
            'Free from artificial colors and flavors',
            'Designed for daily dental care'
        ],
        sku: 'DOG-TREAT-6006',
        category: 'Dog Treats',
        tags: 'Dog, Dental, Treats, Health, Oral Care',
        rating: 4.3,
        reviews: 95,
        mainImage: '/assets/products/dog-dental/main-dental.png',
        thumbnails: [
            '/assets/products/dog-dental/main-dental.png',
            '/assets/products/dog-dental/dental-2.png',
            '/assets/products/dog-dental/dental-3.png',
            '/assets/products/dog-dental/dental-4.png'
        ],
        variants: [
            { name: 'Small Dogs (5-10kg) - 30 Pack', price: '12.99', originalPrice: null },
            { name: 'Medium Dogs (10-25kg) - 24 Pack', price: '14.99', originalPrice: null },
            { name: 'Large Dogs (25kg+) - 18 Pack', price: '16.99', originalPrice: null }
        ]
    },
    '7': {
        name: 'Premium Clumping Cat Litter',
        petCategory: 'Cat',
        productCategory: 'Litter & Accessories',
        categoryPath: 'Cat Litter',
        originalPrice: '24.99',
        currentPrice: '21.99',
        discount: '12% Off',
        description: 'This premium clumping cat litter is designed to provide superior odor control and easy cleanup. The fast-clumping formula creates solid clumps that are easy to scoop, while the dust-free composition helps keep your home clean.',
        features: [
            'Superior odor control for up to 14 days',
            'Fast-clumping formula for easy cleanup',
            '99.9% dust-free for cleaner surfaces',
            'Low tracking to reduce litter spread',
            'Made from natural clay with no artificial fragrances'
        ],
        sku: 'CAT-LITTER-7007',
        category: 'Cat Supplies',
        tags: 'Cat, Litter, Odor Control, Cleaning',
        rating: 4.6,
        reviews: 213,
        mainImage: '/assets/products/cat-litter/main-litter.png',
        thumbnails: [
            '/assets/products/cat-litter/main-litter.png',
            '/assets/products/cat-litter/litter-2.png',
            '/assets/products/cat-litter/litter-3.png',
            '/assets/products/cat-litter/litter-4.png'
        ],
        variants: [
            { name: '10kg', price: '21.99', originalPrice: '24.99' },
            { name: '20kg', price: '39.99', originalPrice: '44.99' }
        ]
    },
    '8': {
        name: 'Deluxe Cat Scratching Post with Toys',
        petCategory: 'Cat',
        productCategory: 'Furniture',
        categoryPath: 'Cat Furniture',
        originalPrice: null,
        currentPrice: '49.99',
        discount: null,
        description: 'This deluxe cat scratching post features multiple levels for your feline to climb, scratch, and play. The sisal-wrapped posts are perfect for scratching, while the attached toys provide entertainment to keep your cat engaged and active.',
        features: [
            'Sturdy base provides stability even during active play',
            'Sisal-wrapped posts satisfy natural scratching instincts',
            'Plush platforms offer comfortable perching spots',
            'Hanging toys encourage playful interaction',
            'Assembly takes less than 10 minutes with included tools'
        ],
        sku: 'CAT-SCRATCHER-8008',
        category: 'Cat Furniture',
        tags: 'Cat, Scratching, Toys, Activity, Furniture',
        rating: 4.8,
        reviews: 167,
        mainImage: '/assets/products/cat-tree/main-tree.png',
        thumbnails: [
            '/assets/products/cat-tree/main-tree.png',
            '/assets/products/cat-tree/tree-2.png',
            '/assets/products/cat-tree/tree-3.png',
            '/assets/products/cat-tree/tree-4.png'
        ],
        variants: [
            { name: 'Small - Beige', price: '49.99', originalPrice: null },
            { name: 'Medium - Beige', price: '69.99', originalPrice: null },
            { name: 'Small - Grey', price: '49.99', originalPrice: null },
            { name: 'Medium - Grey', price: '69.99', originalPrice: null }
        ]
    },
    '9': {
        name: 'Interactive Electronic Cat Toy',
        petCategory: 'Cat',
        productCategory: 'Toys',
        categoryPath: 'Interactive Toys',
        originalPrice: '34.99',
        currentPrice: '29.99',
        discount: '14% Off',
        description: 'This interactive electronic cat toy features unpredictable movements that simulate prey behavior, engaging your cat\'s natural hunting instincts. The feather wand rotates in random patterns, keeping your cat entertained and active even when you\'re not home.',
        features: [
            'Randomized movement patterns prevent boredom',
            'Two speed settings for different play moods',
            'Auto-shutoff after 15 minutes to conserve battery',
            'Replaceable feather attachments included',
            'Non-slip base keeps toy in place during play'
        ],
        sku: 'CAT-TOY-9009',
        category: 'Cat Toys',
        tags: 'Cat, Toy, Interactive, Electronic, Entertainment',
        rating: 4.4,
        reviews: 89,
        mainImage: '/assets/products/cat-toy/main-toy.png',
        thumbnails: [
            '/assets/products/cat-toy/main-toy.png',
            '/assets/products/cat-toy/toy-2.png',
            '/assets/products/cat-toy/toy-3.png',
            '/assets/products/cat-toy/toy-4.png'
        ],
        variants: [
            { name: 'Blue', price: '29.99', originalPrice: '34.99' },
            { name: 'Pink', price: '29.99', originalPrice: '34.99' }
        ]
    },
    '10': {
        name: 'Professional Dog Grooming Kit',
        petCategory: 'Dog',
        productCategory: 'Grooming',
        categoryPath: 'Grooming Tools',
        originalPrice: '79.99',
        currentPrice: '59.99',
        discount: '25% Off',
        description: 'This professional-grade dog grooming kit includes everything you need to keep your pet looking their best at home. The rechargeable clipper with adjustable blades allows for precise trimming of all coat types, while the included accessories make detailed grooming easy.',
        features: [
            'Professional-grade clippers with adjustable blade settings',
            'Low-noise motor to reduce pet anxiety during grooming',
            'Rechargeable battery provides up to 3 hours of runtime',
            'Includes 6 guide combs for different coat lengths',
            'Complete with scissors, nail clippers, and storage case'
        ],
        sku: 'DOG-GROOM-1010',
        category: 'Dog Grooming',
        tags: 'Dog, Grooming, Clippers, Professional, Care',
        rating: 4.2,
        reviews: 74,
        mainImage: '/assets/products/dog-grooming/main-grooming.png',
        thumbnails: [
            '/assets/products/dog-grooming/main-grooming.png',
            '/assets/products/dog-grooming/grooming-2.png',
            '/assets/products/dog-grooming/grooming-3.png',
            '/assets/products/dog-grooming/grooming-4.png'
        ],
        variants: [
            { name: 'Standard Kit', price: '59.99', originalPrice: '79.99' },
            { name: 'Deluxe Kit', price: '79.99', originalPrice: '99.99' }
        ]
    },
    '11': {
        name: 'Cat Calming Diffuser Kit',
        petCategory: 'Cat',
        productCategory: 'Health & Wellness',
        categoryPath: 'Behavior & Calming',
        originalPrice: null,
        currentPrice: '39.99',
        discount: null,
        description: 'This cat calming diffuser kit releases a synthetic version of the feline facial pheromone that helps cats feel secure in their environment. Ideal for reducing stress during changes in the home, travel, or for multi-cat households experiencing tension.',
        features: [
            'Clinically proven to reduce signs of stress in cats',
            'Drug-free, odorless solution safe for homes with children',
            'Each diffuser covers up to 700 square feet',
            'Refill lasts approximately 30 days',
            'Helps reduce unwanted behaviors like scratching and spraying'
        ],
        sku: 'CAT-CALM-1111',
        category: 'Cat Health',
        tags: 'Cat, Calming, Stress Relief, Behavior, Wellness',
        rating: 4.5,
        reviews: 156,
        mainImage: '/assets/products/cat-calming/main-calming.png',
        thumbnails: [
            '/assets/products/cat-calming/main-calming.png',
            '/assets/products/cat-calming/calming-2.png',
            '/assets/products/cat-calming/calming-3.png',
            '/assets/products/cat-calming/calming-4.png'
        ],
        variants: [
            { name: 'Starter Kit (1 Diffuser + 1 Refill)', price: '39.99', originalPrice: null },
            { name: '3 Refill Pack', price: '44.99', originalPrice: null },
            { name: 'Multi-Room Kit (2 Diffusers + 2 Refills)', price: '69.99', originalPrice: null }
        ]
    },
    '12': {
        name: 'Automatic Dog Water Fountain',
        petCategory: 'Dog',
        productCategory: 'Bowls & Feeders',
        categoryPath: 'Water Fountains',
        originalPrice: '49.99',
        currentPrice: '42.99',
        discount: '14% Off',
        description: 'This automatic water fountain provides fresh, filtered water for your dog 24/7. The continuous circulation prevents bacteria growth while the carbon filter removes impurities and odors, encouraging your pet to stay properly hydrated.',
        features: [
            '2-liter capacity suitable for small to medium-sized dogs',
            'Ultra-quiet pump for undisturbed operation',
            'Triple filtration system removes hair, debris and impurities',
            'LED indicator light shows when water level is low',
            'Dishwasher-safe components for easy cleaning'
        ],
        sku: 'DOG-WATER-1212',
        category: 'Dog Supplies',
        tags: 'Dog, Water, Fountain, Hydration, Health',
        rating: 4.3,
        reviews: 102,
        mainImage: '/assets/products/dog-fountain/main-fountain.png',
        thumbnails: [
            '/assets/products/dog-fountain/main-fountain.png',
            '/assets/products/dog-fountain/fountain-2.png',
            '/assets/products/dog-fountain/fountain-3.png',
            '/assets/products/dog-fountain/fountain-4.png'
        ],
        variants: [
            { name: '2 Liter - White', price: '42.99', originalPrice: '49.99' },
            { name: '2 Liter - Blue', price: '42.99', originalPrice: '49.99' },
            { name: '4 Liter - White', price: '52.99', originalPrice: '59.99' },
            { name: '4 Liter - Blue', price: '52.99', originalPrice: '59.99' }
        ]
    }
};

// Function to check if we're on a product page
function isProductPage() {
    return window.location.pathname.includes('product.html') || 
           window.location.pathname.endsWith('product');
}

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
    if (isProductPage()) {
        console.log("Loading product data...");
        loadProductData();
        
        // Initialize quantity selectors
        initQuantitySelectors();
        
        // Product tabs are initialized separately
        initProductTabs();
        
        // Rating selection
        initRatingSelection();
        
        // Add to cart functionality
        initAddToCart();
    } else {
        console.log("Not on product page, skipping product load");
    }
});

// Load product data based on URL parameter
function loadProductData() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || '1'; // Default to product 1 if no ID is provided
    
    console.log("Loading product ID:", productId);
    const product = productDatabase[productId];
    
    if (product) {
        console.log("Product found:", product.name);
        
        // Update product name
        const nameElement = document.getElementById('product-name');
        const nameBreadcrumb = document.getElementById('product-name-breadcrumb');
        if (nameElement) nameElement.textContent = product.name;
        if (nameBreadcrumb) nameBreadcrumb.textContent = product.name;
        
        // Update category in breadcrumb
        const categoryBreadcrumb = document.getElementById('product-category-breadcrumb');
        if (categoryBreadcrumb && product.petCategory) {
            categoryBreadcrumb.textContent = product.petCategory;
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
        console.error('Product not found with ID:', productId);
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
            // Store in local storage
            localStorage.setItem('cartCount', quantity);
            let cart = localStorage.getItem('cart');
            if (cart) {
                cart = JSON.parse(cart);
            } else {
                cart = [];
            }
            const productId = new URLSearchParams(window.location.search).get('id');
            const product = productDatabase[productId];
            cart.push({ name: productName, quantity, variant, product});
            localStorage.setItem('cart', JSON.stringify(cart));


            // Show confirmation
            alert(`Added to cart: ${quantity} × ${productName} (${variant})`);
            
            // Update cart count in header
            
            const cartCount = document.querySelector('.cart-count');
            if (cartCount) {
                const currentCount = cart.reduce((acc, item) => acc + item.quantity, 0);
                cartCount.textContent = currentCount;
                localStorage.setItem('cartCount', currentCount);
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