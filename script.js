// Simple cart functionality
let cartCount = 0;

function addToCart(productId) {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
  alert(`Product ${productId} has been added to your cart!`);
}

// Basic contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Your message has been sent!');
  e.target.reset();
});
