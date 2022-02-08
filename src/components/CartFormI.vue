<template>
  <div class="part">
    <h3>寄送地址</h3>
    <div @submit.prevent.stop class="info-buyer">
      <label for="gender" class="gender">
        <p>稱謂</p>
        <select name="" id="gender">
          <option value="">先生</option>
          <option value="">女士</option>
        </select>
      </label>
      <label for="name" class="name">
        <p>姓名</p>
        <input id="name" type="text" placeholder="請輸入姓名" />
      </label>
      <label for="phone" class="phone">
        <p>電話</p>
        <input id="phone" type="text" placeholder="請輸入行動電話" />
      </label>
      <label for="mail" class="mail">
        <p>Email</p>
        <input id="mail" type="text" placeholder="請輸入電子郵件" />
      </label>
      <label for="city" class="city">
        <p>縣市</p>
        <select name="city" id="city">
          <option value="">台北市</option>
          <option value="">新北市</option>
          <option value="">桃園市</option>
          <option value="">台中市</option>
          <option value="">台南市</option>
          <option value="">高雄市</option>
        </select>
      </label>
      <label for="address" class="address">
        <p>地址</p>
        <input id="address" type="text" placeholder="請輸入地址" />
      </label>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>