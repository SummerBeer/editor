<template>
  <div
    class="drawingBoard"
    :style="styleObj"
    :coord="editor.coord"
    ref="page"
    @mouseover="editor.isReferShow = true"
    @mouseout="editor.isReferShow = false"
    >
    {{editor.testText}}
  </div>
</template>

<script>
export default {
  name: 'drawingBoard',
  inject: ['editor'],
  props: {
    boardData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      styleObj: {},
    };
  },
  created() {
    this.handleStyleObj();
  },
  mounted() {
    this.setElPosition();
  },
  methods: {
    handleStyleObj() {
      const { width, height } = this.boardData;
      this.styleObj = { width, height };
    },
    setElPosition() {
      const el = this.$refs.page;
      this.editor.coord = ({
        x: el.offsetLeft,
        y: el.offsetTop,
      })
    },
  },
}
</script>

<style lang="scss">
.drawingBoard {
  position: absolute;
  background-color: white;
  margin: 0;
  padding: 0;
  left: 100px;
  top: 100px;
}
</style>