
<template>
  <div class="navbar">

  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    navbar: Array,
    default: () => ([]),
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/theme.scss';

.navbar {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: $theme;
}
</style>