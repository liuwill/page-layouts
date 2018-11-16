<template>
  <div class="landing">
    <div class="header"></div>
    <div class="main">
      <div class="image-list">
        <div class="image-list__item" v-for="item in imageList" v-bind:key={item}>
          <img :src="item"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      imageList: [
        "http://static.techartisan.cn/resource/images/tea-1150046_1280.jpg",
        "http://static.techartisan.cn/resource/images/ceramics-1868492_1280.jpg",
        "http://static.techartisan.cn/resource/images/ancient-2179091_1280.jpg",
      ]
    };
  }
};
</script>

<style scoped>
.landing {
  font-size: 14px;
  margin: auto;
  max-width: 480px;
}

.header {
  height: 50px;
  width: 100%;
  background: #2c3039;
}

.image-list__item {
  width: 100%;
}

.image-list__item > img {
  width: 100%;
}
</style>
