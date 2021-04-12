<template>
  <view :animation="animationPage" class="z-title">
    <!-- <transition name="fade"> -->
      <view :animation="animationTitle" class="z-title-main">
        {{
          title
        }}
      </view>
    <!-- </transition> -->
  </view>
</template>

<script>
export default {
  props: {
    title: {}
  },
  data() {
    return {
      animationTitle: {},
      animationPage: {}
    }
  },
  mounted() {
    const animation = uni.createAnimation({
      duration: 800,
      delay: 200
    })
    animation.opacity(1).step()
    this.animationTitle = animation.export()
    const animationPage = uni.createAnimation({
      delay: 2000
    })
    animationPage.opacity(0).step()
    this.animationPage = animationPage
  }
}
</script>

<style>
.z-title {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: lightgray;
}
.z-title-main {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 96rpx;
  opacity: 0;
  /* transition: ; */
}
</style>