<template>
  <div class="site-foot">
    <div>
      <icon-font type="icon-facebook" />
      <icon-font type="icon-twitter" />
    </div>
    <div>&copy;{{ new Date() | formatYear }}{{ rights }}</div>
    <div>
      <!-- TODDO: -->
    </div>
  </div>
</template>
<script>
import { Icon } from 'ant-design-vue'
import { formatYear } from '@/filters/dateFormat'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
})
export default {
  name: 'HFooter',
  components: {
    IconFont
  },
  data () {
    return {
      rights: ' huang xing - all rights reserved'
    }
  },
  filters: { formatYear }
}
</script>
<style scoped>
.site-foot {
  display: flex;
  justify-content: space-around;
  height: 58px;
  background: #fff;
  color: #39414e;
  font-size: 10px;
  line-height: 58px;
  letter-spacing: 0.2em;
  text-align: center;
  text-transform: uppercase;
}

.site-foot >>> .anticon {
  margin-right: 6px;
  font-size: 24px;
}
.site-social-links {
  position: absolute;
  top: 0;
  left: 33px;
}
</style>
