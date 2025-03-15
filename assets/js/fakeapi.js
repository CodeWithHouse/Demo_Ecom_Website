async function getProduct() {
  const response = await fetch('/assets/js/products.json');
  const data = await response.json();
  return data;
}