<template>
  <div class="part">
    <h3>寄送地址</h3>
    <div @submit.prevent.stop class="info-buyer">
      <label for="gender" class="gender">
        <p>稱謂</p>
        <select v-model="salutation" name="" id="gender">
          <option value="Mr.">先生</option>
          <option value="Ms.">女士</option>
        </select>
      </label>
      <label for="name" class="name">
        <p>姓名</p>
        <input v-model="username" id="name" type="text" placeholder="請輸入姓名" />
      </label>
      <label for="phone" class="phone">
        <p>電話</p>
        <input v-model="phone" id="phone" type="text" placeholder="請輸入行動電話" />
      </label>
      <label for="mail" class="mail">
        <p>Email</p>
        <input v-model="email" id="mail" type="text" placeholder="請輸入電子郵件" />
      </label>
      <label for="city" class="city">
        <p>縣市</p>
        <select v-model="city" name="city" id="city">
          <option value="台北市">台北市</option>
          <option value="新北市">新北市</option>
          <option value="桃園市">桃園市</option>
          <option value="台中市">台中市</option>
          <option value="台南市">台南市</option>
          <option value="高雄市">高雄市</option>
        </select>
      </label>
      <label for="address" class="address">
        <p>地址</p>
        <input v-model="address" id="address" type="text" placeholder="請輸入地址" />
      </label>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      salutation: null,
      username: '',
      phone: '',
      email: '',
      city: null,
      address: ''
    }
  },
  methods: {
    setLocalStorage() {
      // 將 v-model 資料覆蓋存入 localStorage
      let storageData = JSON.parse(localStorage.getItem('cart-info'))
      storageData = {
        ...storageData,
        salutation: this.salutation,
        username: this.username,
        phone: this.phone,
        email: this.email,
        city: this.city,
        address: this.address
      }
      localStorage.setItem('cart-info', JSON.stringify(storageData))
    },
    getLocalStorage() {
      // 取用 & 使畫面顯示 localStorage 資料
      let storageData = JSON.parse(localStorage.getItem('cart-info'))
      const { salutation, username, phone, email, city, address } = storageData

      this.salutation = salutation ? salutation : null
      this.username = username ? username : ''
      this.phone = phone ? phone : ''
      this.email = email ? email : ''
      this.city = city ? city : null
      this.address = address ? address : ''
    }
  },
  beforeUpdate() {
    this.setLocalStorage()
  },
  created() {
    this.getLocalStorage()
  }
}
</script>