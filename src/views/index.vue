<template>
  <div class="index">
    <navbar
      :navbar="navbar">
    </navbar>
    <toolbar>
    </toolbar>
    <drawing-board>
    </drawing-board>
  </div>
</template>

<script>
import navbar from '@/components/navbar';
import toolbar from '@/components/toolbar';
import drawingBoard from '@/components/drawingBoard';
import statusData from '@/mixins/statusData';
import configData from '@/mixins/configData';

export default {
  name: 'index',
  components: {
    navbar,
    toolbar,
    drawingBoard,
  },
  mixins: [statusData, configData],
  provide() {
    return {
      editor: this
    };
  },
  data() {
    return {
    };
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/theme.scss';

.index {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: $background;
}
</style>