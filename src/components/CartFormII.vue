<template>
  <div class="part">
    <h3>運送方式</h3>
    <div class="info-delivery">
      <div>
        <input v-model="shippingFee" value="0" type="radio" name="delivery" id="delivery-standard" :checked="shippingFee === 0">
        <label for="delivery-standard">
          <h6>標準運送</h6>
          <p>約3-7個工作天</p>
          <p class="delivery-cost">免費</p>
        </label>
      </div>
      <div>
        <input v-model="shippingFee" value="500" type="radio" name="delivery" id="delivery-fast" :checked="shippingFee === 500">
        <label for="delivery-fast">
          <h6>DHL運送</h6>
          <p>28小時內送達</p>
          <p class="delivery-cost">$500</p>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from '../javascript/eventBus.js'

export default {
  data() {
    return {
      shippingFee: 0,
    }
  },
  methods: {
    setLocalStorage() {
      // 將 v-model 資料覆蓋存入 localStorage
      let storageData = JSON.parse(localStorage.getItem('cart-info'))
      storageData = {
        ...storageData,
        shippingFee: this.shippingFee
      }
      localStorage.setItem('cart-info', JSON.stringify(storageData))
    },
    getLocalStorage() {
      // 取用 & 使畫面顯示 localStorage 資料
      let storageFee = JSON.parse(localStorage.getItem('cart-info')).shippingFee
      this.shippingFee = storageFee ? storageFee : 0
    },
    sendByEventBus() {
      eventBus.$emit("emit-data", this.shippingFee)
    }
  },
  created() {
    this.getLocalStorage()
    this.setLocalStorage()
  },
  beforeUpdate() {
    this.setLocalStorage()
    this.sendByEventBus()
  }
}
</script>