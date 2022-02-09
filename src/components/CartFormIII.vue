<template>
  <div class="part">
    <h3>付款資訊</h3>
    <div class="info-credit-card">
      <label for="card-owner" class="card-owner">
        <p>持卡人姓名</p>
        <input v-model="ccname" type="text" placeholder="John Doe" id="card-owner" />
      </label>
      <label for="card-number" class="card-number">
        <p>卡號</p>
        <input v-model="cardnumber" type="text" placeholder="1111 2222 3333 4444" id="card-number" />
      </label>
      <label for="card-exp" class="card-exp">
        <p>有效期限</p>
        <input v-model="expdate" type="text" placeholder="MM/YY" id="card-exp" />
      </label>
      <label for="card-security" class="card-security">
        <p>CVC / CCV</p>
        <input v-model="cvv" type="text" placeholder="123" id="card-security" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ccname: '',
      cardnumber: '',
      expdate: null,
      cvv: '',
    }
  }
}
</script>