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
        <router-view/>
        <StepsButtons
          :initial-step="step"
        />
      </div>
      <div class="wrapper-right">
        <ItemsPanel
          @emit-total-price="fetchTotalPrice"
        />
      </div>
    </div>
    <!-- todo: footer -->
  </div>
</template>

<script>
import StepsPanel from '../components/StepsPanel.vue'
import StepsButtons from '../components/StepsButtons.vue'
import ItemsPanel from '../components/ItemsPanel.vue'

export default {
  components: {
    StepsPanel,
    StepsButtons,
    ItemsPanel
  },
  data () {
    return {
      step: 0,
      inputData: {}
    }
  },
  methods: {
    fetchStep () {
      // 每當 router 更新、即更新 step 資料
      this.step = this.$route.name[4] - 1
    },
    fetchTotalPrice(value) {
      this.inputData.totalPrice = value
      console.log(this.inputData.totalPrice)
    }
  },
  created() {
    this.fetchStep()
  },
  updated() {
    this.fetchStep()
  }
}
</script>