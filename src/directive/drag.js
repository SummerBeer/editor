import Vue from 'vue';

Vue.directive('drag', {
  bind(el, binding, vnode, oldVnode) {
    el.style.cursor = 'move';
  },
});