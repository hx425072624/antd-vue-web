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
      <a-col :md="12" v-for="(item, index) in items" :key="index">
        <div class="img-work">
          <svg
            class="img"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1280 900"
            enable-background="new 0 0 1280 900"
            xml:space="preserve"
          >
            <image x="0" y="0" :href="item.img" />
          </svg>
          <div class="mask">
            <div class="mask-content">
              <div class="title" v-text="item.title"></div>
              <div class="des" v-text="item.des"></div>
            </div>
          </div>
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
    var imgs = svg.selectAll('.img-work')
    imgs.forEach(img => {
      img.hover(function () {
        // 移入
        var bigger = new Snap.Matrix()
        bigger.scale(1.2)
        this.select('.img').animate({
          transform: bigger.toTransformString()
        }, 4000)
      }, function () {
        // 移出
        var smaller = new Snap.Matrix()
        smaller.scale(1)
        this.select('.img').animate({
          transform: smaller.toTransformString()
        }, 4000)
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
#img-workers {
  font-size: 0px;
}
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

.title {
  color: #fff;
  font: 74px "FuturaStd-Bold";
  letter-spacing: 0;
  text-transform: uppercase;
}
.des {
  color: #fff;
  font: italic 16px/2 "georgia";
  letter-spacing: 0.1em;
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

@font-face {
  font-family: FuturaStd-Bold;
  src: url("/font/FuturaStd-Bold.woff");
}

@media (min-width: 576px) {
  .mask {
    width: 100%;
    height: 100%;
    z-index: 999;
    position: absolute;
    top: 0;
  }
  .mask-content {
    position: relative;
    align-content: center;
    top: 50%; /*偏移*/
    transform: translateY(-50%);
    display: none;
  }
  .mask:hover .mask-content {
    display: block;
  }
}

@media (max-width: 576px) {
  .mask {
    background: #1a1c1e;
    color: #fff;
    text-shadow: none;
    height: 100px;
  }

  .mask .mask-content {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  .mask .title {
    color: #d8d8d8;
    font: 16px/1.2 "FuturaStdBold";
    letter-spacing: 0.2em;
  }
  .mask .des {
    margin-top: 5px;
    color: #c9c9c9;
    font: italic 13px/1.2 "georgia";
    letter-spacing: 0.15em;
  }
}
</style>
