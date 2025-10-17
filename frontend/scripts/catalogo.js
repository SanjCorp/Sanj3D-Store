async function loadProducts() {
  try {
    const res = await fetch('/api/projects'); // <-- usa el API
    products = await res.json();
    displayProducts(products);
    loadCategories(products);
    return products; // necesario para main.js
  } catch (error) {
    console.error('Error loading products:', error);
    return [];
  }
}
