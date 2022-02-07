<template>
  <div>
    <h2>結帳</h2>
    <div class="main-wrapper">
      <div class="wrapper-left">
        <StepsPanel
          :current-step="step"
        />
        <DeliveryAddress
          :class="{ 'd-none': step !== 0 }"
        />
        <DeliveryWay
          :class="{ 'd-none': step !== 1 }"
        />
        <PaymentInfo
          :class="{ 'd-none': step !== 2 }"
        />
        <StepsButtons
          :initial-step="step"
          @after-steps-handler="afterStepsHandler"
        />
      </div>
      <div class="wrapper-right">List</div>
    </div>
  </div>
</template>

<script>
import StepsPanel from '../components/StepsPanel.vue'
import DeliveryAddress from '../components/DeliveryAddress.vue'
import DeliveryWay from '../components/DeliveryWay.vue'
import PaymentInfo from '../components/PaymentInfo.vue'
import StepsButtons from '../components/StepsButtons.vue'

export default {
  components: {
    StepsPanel,
    DeliveryAddress,
    DeliveryWay,
    PaymentInfo,
    StepsButtons
  },
  data () {
    return {
      step: 0
    }
  },
  methods: {
    afterStepsHandler(stepNumber) {
      // 接收子元件傳入的數值、修改 this.step 狀態
      this.step = stepNumber
    }
  }
}
</script>
