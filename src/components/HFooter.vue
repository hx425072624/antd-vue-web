<template>
  <div class="icons-list">
    <!-- <icon-font type="icon-tuichu"/> -->
    <icon-font type="icon-facebook"/>
    <icon-font type="icon-twitter"/>
  </div>
</template>
<script>
import { Icon } from "ant-design-vue";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
});
export default {
  name: "HFooter",
  components: {
    IconFont
  }
};
</script>
<style scoped>
.icons-list >>> .anticon {
  margin-right: 6px;
  font-size: 24px;
}
</style>