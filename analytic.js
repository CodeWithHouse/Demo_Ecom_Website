const addToCartButton = document.querySelector("#add_to_cart");
addToCartButton.addEventListener("click", () => {
  const productId = new URLSearchParams(window.location.search).get("id");
  const product = productDatabase[productId];
  analytics.track("clicked_add_to_cart", product);
  const cartCount = document.querySelector(".cart-count");
  analytics.identify({ cart_count: parseInt(cartCount.textContent) + 1 });
});
