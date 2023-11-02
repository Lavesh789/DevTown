// Sample product data
const products = [
    { title: "Product 1", description: "Description 1", price: 50, category: "electronics" },
    { title: "Product 2", description: "Description 2", price: 30, category: "clothing" },
    { title: "Product 3", description: "Description 3", price: 20, category: "books" },
    // Add more products as needed
  ];
  
  // DOM elements
  const productList = document.getElementById("product-list");
  const categoryFilter = document.getElementById("category-filter");
  const priceSort = document.getElementById("price-sort");
  const pagination = document.getElementById("pagination");
  
  // Function to display products
  function displayProducts(productsArray) {
    productList.innerHTML = '';
    productsArray.forEach(product => {
      const productItem = document.createElement("div");
      productItem.classList.add("product");
      productItem.innerHTML = `
        <img src="product-image.jpg" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>$${product.price}</p>
      `;
      productList.appendChild(productItem);
    });
  }
  
  // Function to filter products
  function filterProducts(category) {
    if (category === "all") {
      displayProducts(products);
    } else {
      const filteredProducts = products.filter(product => product.category === category);
      displayProducts(filteredProducts);
    }
  }
  
  // Function to sort products
  function sortProducts(order) {
    const sortedProducts = [...products];
    if (order === "asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    displayProducts(sortedProducts);
  }
  
  // Event listeners for filtering and sorting
  categoryFilter.addEventListener("change", () => {
    const selectedCategory = categoryFilter.value;
    filterProducts(selectedCategory);
  });
  
  priceSort.addEventListener("change", () => {
    const selectedOrder = priceSort.value;
    sortProducts(selectedOrder);
  });
  
  // Initial display of products
  displayProducts(products);