<script setup>
import { usePlpStore } from '@/pages/plp/plpStore';
const plpStore = usePlpStore();
const state = plpStore.state;
</script>

<template>
  <nav class="side-nav">
    <ul>
      <li>
        <h3>Categories</h3>
      </li>
      <div>
        <form>
          <input
            type="checkbox"
            id="books"
            name="books"
            value="books"
            v-model="state.checkCategory"
          />
          <label for="books"> Books</label><br /><br />
          <input
            type="checkbox"
            id="electronics"
            name="electronics"
            value="electronics"
            v-model="state.checkCategory"
          />
          <label for="electronics"> Electronics</label><br /><br />
          <input
            type="checkbox"
            id="fashion"
            name="fashion"
            value="fashion"
            v-model="state.checkCategory"
          />
          <label for="fashion"> Fashion</label><br /><br />
          <input
            type="checkbox"
            id="furniture"
            name="furniture"
            value="furniture"
            v-model="state.checkCategory"
          />
          <label for="furniture"> Furniture</label><br /><br />
          <input
            type="checkbox"
            id="sports"
            name="sports"
            value="sports"
            v-model="state.checkCategory"
          />
          <label for="sports"> Shoes</label><br /><br />
          <input
            type="checkbox"
            id="care"
            name="care"
            value="personal care"
            v-model="state.checkCategory"
          />
          <label for="care"> Personal Care</label><br /><br />
        </form>
      </div>
      <li>
        <h3>Price Range</h3>
      </li>
      <div>
        <form>
          <input
            type="checkbox"
            id="pr1"
            name="pr1"
            value="50"
            v-model="state.checkPriceRange"
          />
          <label for="pr1">
            Less than
            <i class="fa-solid fa-indian-rupee-sign icon-size"></i> 50</label
          ><br /><br />
          <input
            type="checkbox"
            id="pr2"
            name="pr2"
            value="51-100"
            v-model="state.checkPriceRange"
          />
          <label for="pr2">
            <i class="fa-solid fa-indian-rupee-sign icon-size"></i> 51 -
            <i class="fa-solid fa-indian-rupee-sign icon-size"></i> 100</label
          ><br /><br />
          <input
            type="checkbox"
            id="pr3"
            name="pr3"
            value="101-150"
            v-model="state.checkPriceRange"
          />
          <label for="pr3">
            <i class="fa-solid fa-indian-rupee-sign icon-size"></i> 101 -
            <i class="fa-solid fa-indian-rupee-sign icon-size"></i> 150</label
          ><br /><br />
          <input
            type="checkbox"
            id="pr4"
            name="pr4"
            value="151-200"
            v-model="state.checkPriceRange"
          />
          <label for="pr4">
            <i class="fa-solid fa-indian-rupee-sign icon-size"></i> 151 -
            <i class="fa-solid fa-indian-rupee-sign icon-size"></i> 200</label
          ><br /><br />
          <input
            type="checkbox"
            id="pr5"
            name="pr5"
            value="201"
            v-model="state.checkPriceRange"
          />
          <label for="pr5">
            Above
            <i class="fa-solid fa-indian-rupee-sign icon-size"></i> 201</label
          ><br /><br />
        </form>
      </div>
    </ul>
  </nav>
</template>

<style scoped>
.side-nav {
  padding: 20px;
  width: 20%;
  background-color: beige;
}

ul {
  list-style: none;
}

li {
  padding: 10px;
}

h3 {
  border: 1px solid #fff;
  text-align: center;
  background-color: #fff;
  padding: 5px;
}

h3:hover {
  font-size: 19px;
  color: brown;
}

.icon-size {
  font-size: 12px;
}
</style>
