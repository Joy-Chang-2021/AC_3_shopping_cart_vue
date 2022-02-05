<template>
  <div>
    <h2>結帳</h2>
    <div class="container">
      <div class="container-left">
        <StepsPanel />
        <DeliveryAddress />
        <DeliveryWay class="d-none"/>
        <PaymentInfo class="d-none"/>
        <StepsButtons />
      </div>
      <div class="container-right">List</div>
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
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 6fr 1fr 5fr;
  grid-gap: 30px;
  padding: 0
}

.container-left {
  grid-column: 1 / 2;
}

.container-right {
  grid-column: 3 / 4;
}

</style>
