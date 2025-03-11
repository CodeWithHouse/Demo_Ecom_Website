const addToCartButton = document.querySelector('#add_to_cart');
addToCartButton.addEventListener('click', () => {
  analytics.track('clicked_add_to_cart');
  const cartCount = document.querySelector('.cart-count');
  analytics.identify({ cart_count: cartCount.textContent });
});
