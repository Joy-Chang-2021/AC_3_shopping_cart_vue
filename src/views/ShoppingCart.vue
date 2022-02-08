<template>
  <div>
    <!-- todo: header -->
    <!-- main -->
    <h2>結帳</h2>
    <div class="main-wrapper">
      <div class="wrapper-left">
        <StepsPanel
          :current-step="step"
        />
        <CartFormI
          :class="{ 'd-none': step !== 0 }"
        />
        <CartFormII
          :class="{ 'd-none': step !== 1 }"
        />
        <CartFormIII
          :class="{ 'd-none': step !== 2 }"
        />
        <StepsButtons
          :initial-step="step"
          @after-steps-handler="afterStepsHandler"
        />
      </div>
      <div class="wrapper-right">List</div>
    </div>
    <!-- todo: footer -->
  </div>
</template>

<script>
import StepsPanel from '../components/StepsPanel.vue'
import CartFormI from '../components/CartFormI.vue'
import CartFormII from '../components/CartFormII.vue'
import CartFormIII from '../components/CartFormIII.vue'
import StepsButtons from '../components/StepsButtons.vue'

export default {
  components: {
    StepsPanel,
    CartFormI,
    CartFormII,
    CartFormIII,
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
