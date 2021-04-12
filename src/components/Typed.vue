<template>
  <view>
    <text>
      {{
        text
      }}
    </text>
    <!-- <view>继续</view> -->
  </view>
</template>

<script>
export default {
  props: {
    content: '',
    time: {
      type: Number,
      default: 100
    },
    delay: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      text: ''
    }
  },
  mounted() {
    setTimeout(this.typed, this.delay);
    
  },
  methods: {
    typed() {
      let index = 0
      let timer = setInterval(() => {
        this.text += this.content[index]
        index++
        if (index === this.content.length) {
          clearInterval(timer)
        }
      }, this.time)
    }
  }
}
</script>

<style>

</style>