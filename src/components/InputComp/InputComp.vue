<script setup>
defineProps({
  label: { type: String },
  modelValue: { type: String },
});

const emit = defineEmits(['update:modelValue']);

const updateValue = event => {
  emit('update:modelValue', event.target.value);
};
</script>

<template>
  <div class="input-comp">
    <label for="unique" v-if="label">{{ label }}</label>
    <div class="input-wrap">
      <input
        type="text"
        :value="modelValue"
        @input="updateValue"
        v-bind="$attrs"
        id="unique"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
