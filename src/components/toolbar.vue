<template>
  <div class="toolbar">
    <el-tooltip
      v-for="(tool, index) in tools"
      :key="index"
      :class="tool.code"
      :content="tool.label"
      placement="right"
      effect="dark"
      @click.native="handleOperate(tool)">
      <svg-icon :iconClass="tool.icon" :className="tool.status"></svg-icon>
    </el-tooltip>
  </div>
</template>

<script>
import svgIcon from './svgIcon';

export default {
  name: 'toolbar',
  components: {
    svgIcon,
  },
  inject: ['editor'],
  data() {
    return {
      
    }
  },
  computed: {
    tools() {
      return [
        {
          code: 'insertImg',
          label: '插入图片',
          icon: 'picture',
          status: '',
        },
        {
          code: 'showRule',
          label: `${this.editor.isRuleVisible ? '关闭' : '显示'}坐标尺`,
          icon: 'rule',
          status: this.editor.isRuleVisible ? 'active' : '',
        },
        {
          code: 'setting',
          label: '基本设置',
          icon: 'setting',
          status: '',
        },
      ];
    },
  },
  methods: {
    handleOperate(tool) {
      this[tool.code]();
    },
    insertImg() {
      this.editor.isImgVisible = true;
    },
    showRule() {
      this.editor.isRuleVisible = !this.editor.isRuleVisible;
    },
    setting() {
      this.editor.isSettingVisible = !this.editor.isSettingVisible;
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/theme.scss';

.toolbar {
  position: fixed;
  z-index: 10;
  top: 50px;
  left: 0;
  width: 60px;
  height: calc(100% - 50px);
  background-color: $sub-theme;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 10px 0;
  .svg-icon {
    width: 30px;
    height: 30px;
    fill: #aaa;
    margin: 10px 0;
    &:hover {
      cursor: pointer;
      fill: #fff;
    }
  }
  .svg-icon.active {
    fill: #fff;
  }
}
</style>