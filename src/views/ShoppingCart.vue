<template>
  <div>
    <h2>結帳</h2>
    <div class="main-wrapper">
      <div class="wrapper-left">
        <StepsPanel />
        <DeliveryAddress />
        <DeliveryWay class="d-none"/>
        <PaymentInfo class="d-none"/>
        <StepsButtons />
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
  }
}
</script>
