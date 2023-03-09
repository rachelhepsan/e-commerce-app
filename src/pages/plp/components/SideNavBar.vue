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
          <ul>
            <li v-for="(data, index) in state.categories" :key="index">
              <input
                type="checkbox"
                :id="data.name"
                :name="data.name"
                :value="data.name"
                v-model="state.checkCategory"
              />
              <label :for="data.name"> {{ data.name }}</label> <br /><br />
            </li>
          </ul>
        </form>
      </div>
      <li>
        <h3>Price Range</h3>
      </li>
      <div>
        <form class="price-form">
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
  padding-left: 0px;
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
.price-form {
  padding-left: 10px;
}
</style>
