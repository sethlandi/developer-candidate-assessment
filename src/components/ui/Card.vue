<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: stretch;
  min-width: 300px;
  padding: 10px;
  margin: 5px;
  border-radius: 4;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
}
</style>
