
<template>
  <div class="navbar">
    <div class="nav">

    </div>
    <div class="operate-wrapper">
      <el-button type="primary" size="small" @click="exportCode">导出代码</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  inject: ['editor'],
  props: {
    navbar: Array,
    default: () => ([]),
  },
  data() {
    return {
      html: '',
      isVisible: false,
    }
  },
  methods: {
    exportCode() {
      const board = his.editor.$refs.board;
      if (board && board.$refs.page) {
        this.html = board.$refs.page.innerHTML;
      }
    },
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  .operate-wrapper {
    padding: 0 20px;
  }
}
</style>