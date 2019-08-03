<template>
  <div class="index">
    <navbar :navbar="navbar" />
    <toolbar />
    <rule v-if="isRuleVisible" :unit="unit" />
    <drawing-board ref="board" :boardData="boardData" />
  </div>
</template>

<script>
import navbar from '@/components/navbar';
import toolbar from '@/components/toolbar';
import drawingBoard from '@/components/drawingBoard';
import rule from '@/components/rule';
import statusData from '@/mixins/statusData';
import configData from '@/mixins/configData';

export default {
  name: 'index',
  components: {
    navbar,
    toolbar,
    drawingBoard,
    rule,
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
  mounted() {

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
  overflow: scroll;
}
</style>