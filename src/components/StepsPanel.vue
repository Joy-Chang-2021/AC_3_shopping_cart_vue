<template>
  <div class="d-flex justify-content-between align-items-center">
    <div class="step"
      :class="['step', {'active': currentStep === 0, 'check': currentStep > 0 }]"
    >
      <h4 v-html="checkMarkHandler(1)"></h4>
      <h5>寄送地址</h5>
    </div>
    <span :class="['line', {'active': currentStep >= 0}]"></span>
    <div 
      :class="['step', {'active': currentStep === 1, 'check': currentStep > 1 }]"
    >
      <h4 v-html="checkMarkHandler(2)"></h4>
      <h5>運送方式</h5>
    </div>
    <span :class="['line', {'active': currentStep >= 1}]"></span>
    <div
      :class="['step', {'active': currentStep === 2, 'check': currentStep > 2 }]"
    >
      <h4 v-html="checkMarkHandler(3)"></h4>
      <h5>付款資料</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      required: true
    }
  },
  methods: {
    checkMarkHandler(value) {
      // 畫面圓圈(value) 1 2 3 ；步驟(this.currentStep) 0 1 2
      // 當(value) > (this.currentStep) 畫面顯示 value值
      // 當(value) <= (this.currentStep) 畫面顯示「打勾」
      return value <= this.currentStep ? '&#10003' : value
    }
  }
}
</script>