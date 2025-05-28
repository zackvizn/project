<script>
  // Load existing cart count on page load
  document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
  });

  function addToCart(productName) {
    // Get existing cart or empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add selected product
    cart.push(productName);

    // Save back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count badge
    updateCartCount();

    // Confirm and redirect
    if (confirm("✅ Product added to cart!\n\nWould you like to go to the cart now?")) {
      window.location.href = "cart.html";
    }
  }

  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').innerText = cart.length;
  }
</script>
