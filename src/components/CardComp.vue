<template>
  <div class="card-comp">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card-comp {
  box-shadow: 0 0 5px $card-shadow-color;
  padding: 1em 1.5em;
  border-radius: 2px;
}
</style>
