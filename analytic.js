const addToCartButton = document.querySelector("#add_to_cart");
addToCartButton.addEventListener("click", () => {
  const productId = new URLSearchParams(window.location.search).get("id");
  const product = productDatabase[productId];
  analytics.track("clicked_add_to_cart", {
    name: product.name,
    petCategory: product.petCategory,
    productCategory: product.productCategory,
    categoryPath: product.categoryPath,
    originalPrice: product.originalPrice,
    currentPrice: product.currentPrice,
    discount: product.discount,
    description: product.description,
    sku: product.sku,
    category: product.category,
    tags: product.tags,
    rating: product.rating,
    mainImage: product.mainImage,
    features: product.features,
  });
  const cartCount = document.querySelector(".cart-count");
  analytics.identify({ cart_count: parseInt(cartCount.textContent) + 1 });
});
