const addToCartButton = document.querySelector("#add_to_cart");
const productId = new URLSearchParams(window.location.search).get("id");
const product = productDatabase[productId];


addToCartButton.addEventListener("click", () => {
  analytics.track("Add To Cart", {
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
    tags: tagsStringToArray(product.tags),
    rating: product.rating,
    mainImage: product.mainImage,
    features: product.features,
  });
  const cartCount = document.querySelector(".cart-count");
  analytics.identify({ cart_count: parseInt(cartCount.textContent) + 1 });
});

analytics.track("Product Viewed", {
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
  tags: tagsStringToArray(product.tags),
  rating: product.rating,
  mainImage: product.mainImage,
  features: product.features,
});

function tagsStringToArray(tagsString) {
  return tagsString.split(",").map((tag) => tag.trim());
}
