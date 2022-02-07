<template>
  <div class="d-flex justify-content-between">
    <button
      @click.prevent.stop="stepsHandler(false)"
      class="btn btn-previous text-left"
      :disabled="initialStep === 0"
    >
      <div class="img btn-pre-img"></div>
      <span>上一步</span>
    </button>
    <button
      @click.prevent.stop="stepsHandler(true)"
      class="btn btn-next"
    >
      <span>下一步</span>
      <div class="img btn-next-img"></div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    initialStep: {
      type: Number,
      required: true
    }
  },
  methods: {
    stepsHandler(value) {
      let stepNumber = this.initialStep
      // true: 下一頁(step++)； false: 上一頁(step--)
      if (value) stepNumber++
      else stepNumber--
      // 控制 step 僅可 0 1 2 之間
      if (stepNumber > 2) stepNumber = 2
      else if (stepNumber < 0) stepNumber = 0
      // 傳至父元件
      this.$emit('after-steps-handler', stepNumber)
    }
  },
}
</script>
