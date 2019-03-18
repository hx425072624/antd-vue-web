<template>
  <div id="app">
    <a-layout>
      <a-layout-header>
        <a-menu mode="horizontal" :multiple="false">
          <!-- v-model="current" -->
          <a-menu-item key="home">
            <router-link to="/"> <a-icon type="home" />Home </router-link>
          </a-menu-item>
          <a-menu-item key="works">
            <router-link to="/works"> <a-icon type="form" />Works </router-link>
          </a-menu-item>
          <a-menu-item key="about">
            <router-link to="/about"> <a-icon type="read" />About </router-link>
          </a-menu-item>
          <a-menu-item key="contact">
            <router-link to="/contact">
              <a-icon type="mail" />Contact
            </router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
      <a-layout-footer><h-footer></h-footer></a-layout-footer>
    </a-layout>
    <a-back-top />
  </div>
</template>
<script>
import HFooter from '@/components/HFooter'
export default {
  data () {
    return {
      current: ['home']
    }
  },
  components: {
    HFooter
  }
}
</script>
<style lang="less" scoped>
.ant-layout-header {
  height: unset;
  background: #fff;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
<style>
.animating {
  animation: mymove-in 4s infinite;
  -webkit-animation: mymove-in 4s infinite;
}
@keyframes mymove-in {
  from {
    -webkit-transform: scale(1, 1); /* Safari and Chrome */
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }
  to {
    -webkit-transform: scale(1.2, 1.2); /* Safari and Chrome */
    -o-transform: scale(1.2, 1.2);
    transform: scale(1.2, 1.2);
  }
}

@keyframes mymove-out {
  from {
    -webkit-transform: scale(1.2, 1.2); /* Safari and Chrome */
    -o-transform: scale(1.2, 1.2);
    transform: scale(1.2, 1.2);
  }
  to {
    -webkit-transform: scale(1, 1); /* Safari and Chrome */
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}
</style>
