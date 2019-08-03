import Vue from 'vue';

Vue.directive('mousemove', {
  twoWay: true,
  inserted(el, binding, vnode) {
    const elLeft = el.offsetLeft;
    const elTop = el.offsetTop;
    el.onmousemove = (e) => {
      const eX = e.clientX;
      const eY = e.clientY;
      const coord = {
        x: eX,
        y: eY,
      };
      this.$set('editor.coord', coord);
    }
  },
});