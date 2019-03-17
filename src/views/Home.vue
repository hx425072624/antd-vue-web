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
    <a-row>
      <a-col
        :span="12"
        @mouseover="handleHover(index)"
        @mouseout="handleOut(index)"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="img-work">
          <div class="mask"></div>
          <img
            :class="[item.imgClass, item.imgClassPaused]"
            :src="item.img"
            alt
          />
        </div>
      </a-col>
    </a-row>
    <HelloWorld msg="Welcome to Your Vue.js App" />
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
          img: '/img/iso500.jpg',
          imgClass: '',
          imgClassPaused: 'img-running'
        },
        {
          title: 'hello world',
          des: 'this is my first test web site',
          img: '/img/madem.jpg',
          imgClass: '',
          imgClassPaused: 'img-running'
        },
        {
          title: 'hello world',
          des: 'this is my first test web site',
          img: '/img/plume.jpg',
          imgClass: '',
          imgClassPaused: 'img-running'
        },
        {
          title: 'hello world',
          des: 'this is my first test web site',
          img: '/img/wod.jpg',
          imgClass: '',
          imgClassPaused: 'img-running'
        }
      ]
    }
  },
  methods: {
    handleHover (index) {
      this.items[index].imgClass = 'img-animation-in'
      this.items[index].imgClassPaused = 'img-running'
    },
    handleOut (index) {
      // this.items[index].imgClass = '';
      this.items[index].imgClassPaused = 'img-paused'
    }
  },
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
img.img-paused {
  /* animation-play-state: paused; */
  animation-direction: reverse;
}
img .img-running {
  /* animation-play-state: running; */
  animation-direction: normal;
}
.mask:hover {
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.img-animation-in {
  animation: mymove-in 8s 1;
  -webkit-animation: mymove-in 8s 1;
  animation-fill-mode: backwards;
}
/* .img-animation-out {
  animation: mymove-out 8s infinite;
  -webkit-animation: mymove-out 8s 1;
} */

.carousel-img img {
  height: 100%;
  width: 100%;
  animation-direction: alternate;
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
