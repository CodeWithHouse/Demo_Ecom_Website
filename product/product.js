// Product Database
let productDatabase = {}

// Function to check if we're on a product page
function isProductPage() {
  return (
    window.location.pathname.includes('product.html') ||
    window.location.pathname.endsWith('product/')
  )
}

document.addEventListener('DOMContentLoaded', async function () {
  if (isProductPage()) {
    console.log('Loading product data...')
    const product = await getProduct()
    productDatabase = product
    
    loadProductData()

    // Initialize quantity selectors
    initQuantitySelectors()

    // Product tabs are initialized separately
    initProductTabs()

    // Rating selection
    initRatingSelection()

    // Add to cart functionality
    initAddToCart()
  } else {
    console.log('Not on product page, skipping product load')
  }
})


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