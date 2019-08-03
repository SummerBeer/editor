<template>
<div class="rule" ref="board">
  <div class="coord-x-wrapper">
    <div class="coord-x" :style="{ left: elX }">
      <div class="cursor-x" v-show="editor.isReferShow" :style="{ left: coordX}">{{ x + 100}}</div>
      <div
        class="coord-item"
        v-for="(item, index) in coord"
        :key="index"
        :style="{ width: `${unit}px` }"
        :class="{ longer: item % 50 === 0 }">
      </div>
    </div>
  </div>
  <div class="coord-y-wrapper">
    <div class="coord-y" :style="{ top: elY }">
      <div class="cursor-y" v-show="editor.isReferShow" :style="{ top: coordY }">{{y + 100}}</div>
      <div
        class="coord-item"
        v-for="(item, index) in coord"
        :key="index"
        :style="{ height: `${unit}px` }"
        :class="{ longer: item % 50 === 0 }">
      </div>
    </div>
  </div>
  <div class="reference-x" v-show="editor.isReferShow" :style="{ left: referenceX }"></div>
  <div class="reference-y" v-show="editor.isReferShow" :style="{ top: referenceY }"></div>
</div>
</template>

<script>
export default {
  name: 'rule',
  inject: ['editor'],
  props: {
    unit: Number,
  },
  data() {
    return {
      x: 0,
      y: 0,
    };
  },
  computed: {
    coord() {
      const len = Math.ceil(window.screen.availWidth / this.unit);
      const arr = new Array(len).fill(0);
      arr.forEach((v, i) => {
        arr[i] = i * this.unit;
      })
      return arr;
    },
    elX() {
      return `${this.editor.coord.x + 8}px`;
    },
    elY() {
      return `${this.editor.coord.y + 8}px`;
    },
    coordX() {
      return `${this.x + this.editor.coord.x}px`;
    },
    coordY() {
      return `${this.y + this.editor.coord.y}px`;
    },
    referenceX() {
      return `${this.x + 208}px`;
    },
    referenceY() {
      return `${this.y + 208}px`;
    },
  },
  mounted() {
    this.listenerMouse();
  },
  methods: {
    listenerMouse() {
      document.onmousemove = (e) => {
        const { x, y } = this.editor.coord;
        this.x = e.offsetX - x;
        this.y = e.offsetY - y;
      }
    },
  },
}
</script>

<style lang="scss">
// body {
//   position: fixed;
//   top: 0;
//   left: 0;
// }
.rule {
  position: fixed;
  // width: 100vw;
  // height: 100vh;
  left: 0px;
  top: 0px;
  z-index: 1;
  .coord-x-wrapper,
  .coord-y-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #444;
  }
  .coord-x,
  .coord-y {
    position: absolute;
    display: flex;
    align-items: flex-end;
  }
  .coord-x-wrapper {
    height: 30px;
    width: 100vw;
    left: 0px;
    top: 50px;
    .coord-x {
      bottom: 0;
      .coord-item {
        height: 5px;
        border-left: 1px solid #aaa;
      }
      .coord-item.longer {
        height: 15px;
      }
    }
  }
  .coord-y-wrapper {
    width: 30px;
    height: 100vh;
    top: 0px;
    left: 60px;
    .coord-y {
      flex-flow: column nowrap;
      right: 0;
      .coord-item {
        width: 5px;
        border-top: 1px solid #aaa;
      }
      .coord-item.longer {
        width: 15px;
      }
    }
  }
  .cursor-x,
  .cursor-y {
    position: absolute;
    width: 30px;
    height: 10px;
    background-color: #fff;
    font-size: 10px;
    line-height: 10px;
  }
  .cursor-y {
    text-align: right;
  }
  .reference-x,
  .reference-y {
    position: absolute;
    background: red;
  }
  .reference-x {
    width: 1px;
    height: 100vh;
  }
  .reference-y {
    height: 1px;
    width: 100vw;
  }
}
</style>