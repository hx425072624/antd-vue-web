<template>
  <div class="home">
    <a-carousel arrows>
      <div
        slot="prevArrow"
        class="custom-slick-arrow"
        style="left: 10px;zIndex: 1"
      >
        <a-icon type="left-circle" />
      </div>
      <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
        <a-icon type="right-circle" />
      </div>
      <div class="carousel-img" v-for="(item, index) in items" :key="index">
        <img :src="item.img" alt />
      </div>
    </a-carousel>
    <a-row id="img-workers">
      <a-col :span="12" v-for="(item, index) in items" :key="index">
        <div class="img-work">
          <div class="mask"></div>
          <img :src="item.img" alt />
        </div>
      </a-col>
    </a-row>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Snap from 'snapsvg'
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
  mounted () {
    var svg = Snap('#img-workers')
    var m = new Snap.Matrix()
    m.scale(1.2, 1.2)
    var imgs = svg.selectAll('.img-work')
    imgs.forEach(img => {
      img.hover(function () {
        // 移入

        this.select('img').animate({
          transform: m.toTransformString()
        }, 5000)
        // this.select('img').animate({
        //   transform: 'scale(1.2, 1.2)'
        // }, 5000)
        // this.animate({
        //   fill: '#f00' // 红色
        // }, 1000)
      }, function () {
        // 移出
        // var m = new Snap.Matrix()
        // m.scale(1, 1)
        // this.select('img').attr({
        //   class: ''
        // })
        // this.select('img').animate({
        //   transform: 'scale(1, 1)'
        // }, 5000)
      })
    })
  },
  methods: {},
  components: {
    HelloWorld
  }
}
</script>
<style  scoped>
.img-work {
  overflow: hidden;
}
.img-work img {
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
