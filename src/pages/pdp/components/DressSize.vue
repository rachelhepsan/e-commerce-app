<template>
  <p id="size-heading">Select Size</p>
  <div id="size-container">
    <span @click="colorPrevail" :class="{ spanColor: isColor }">32</span>
    <span>34</span>
    <span>36</span>
    <span>38</span>
    <span>40</span>
    <span>42</span>
    <span>44</span>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isColor = ref(false);
//when a particular size is clicked it shows a background color for that size
const colorPrevail = () => {
  isColor.value = true;
};
</script>

<style scoped>
#size-heading {
  margin-bottom: 23px;
  font-size: 13px;
  letter-spacing: 1.3px;
}
span {
  padding: 9px 10px;
  border: 1px solid black;
  margin-right: 14px;
  margin-bottom: 7px;
  border-radius: 100%;
}
#size-container {
  display: flex;
  margin-bottom: 10px;
}
#size-container span:hover {
  background-color: #26323a;
  color: whitesmoke;
  cursor: pointer;
}

.spanColor {
  background-color: #26323a;
  color: whitesmoke;
  cursor: pointer;
}
</style>
