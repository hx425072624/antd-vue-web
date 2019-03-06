<template>
  <div class="home">
    <a-carousel arrows>
      <div
        slot="prevArrow"

        class="custom-slick-arrow"
        style="left: 10px;zIndex: 1"
      >
        <a-icon type="left-circle"/>
      </div>
      <div slot="nextArrow"  class="custom-slick-arrow" style="right: 10px">
        <a-icon type="right-circle"/>
      </div>
      <div class="carousel-img" v-for="(item,index) in items" :key="index">
        <img :src="item.img" alt>
      </div>
    </a-carousel>
    <a-row>
      <a-col
        :span="12"
        @mouseover="handleHover"
        @mouseout="handleOut"
        v-for="(item,index) in items"
        :key="index"
      >
        <div class="mask"></div>
        <img :src="item.img" alt>
      </a-col>
    </a-row>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  data () {
    return {
      items: [
        {
          title: 'hello world',
          des: 'this is my first test web site',
          img: '/img/iso500.jpg'
        },
        {
          title: 'hello world',
          des: 'this is my first test web site',
          img: '/img/madem.jpg'
        },
        {
          title: 'hello world',
          des: 'this is my first test web site',
          img: '/img/plume.jpg'
        },
        {
          title: 'hello world',
          des: 'this is my first test web site',
          img: '/img/wod.jpg'
        }
      ]
    }
  },
  methods: {
    handleHover (e) {
      console.log(e)
    },
    handleOut (e) {
      console.log(e)
    }
  },
  components: {
    HelloWorld
  }
}
</script>
<style  scoped>
.ant-col-12 img {
  height: 100%;
  width: 100%;
}

.mask:hover {
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
.carousel-img img {
  height: 100%;
  width: 100%;
}

.mask {
  width: 100%;
  height: 100%;
  z-index: 999;
  position: absolute;
}

.ant-carousel >>> .slick-slide {
  text-align: center;
  max-height: 320px;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
