<script setup></script>

<template>
  <footer>
    <div class="container footer-container">
      <h2>ShopCart</h2>
      <div class="footer-links">
        <h3>Store</h3>
        <p>How it Works</p>
        <p>Services</p>
        <p>About</p>
      </div>
      <div class="footer-links">
        <h3>Shop</h3>
        <p>Support</p>
        <p>Open a Shop</p>
        <p>Licensing & Terms</p>
      </div>
      <div class="footer-links">
        <h3>Help</h3>
        <p>Contact</p>
        <p>Login & Account</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 10px;
  background-color: #26323a;
  color: grey;
}

.footer-container {
  display: flex;
  justify-content: space-between;
}

h2 {
  font-size: 25px;
  color: brown;
  cursor: pointer;
}

footer p {
  cursor: pointer;
}

.footer-links {
  font-size: 14px;
}

.footer-links {
  font-size: 14px;
}

.container {
  width: 90%;
  margin: 0 auto;
}
</style>
