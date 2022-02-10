<template>
  <div class="shopping-list">
    <h3>購物籃</h3>
    <div class="shopping-items">
      <div 
        class="item"
        v-for="item in items" :key="item.id"
      >
        <img :src="item.image" alt="" />
        <div class="item-info">
          <h4>{{ item.name }}</h4>
          <div>
            <span class="minus" @click="subtractuantity(item.id)">－</span>
            <span class="item-quantity">{{ item.quantity }}</span>
            <span class="plus" @click="addQuantity(item.id)">＋</span>
          </div>
          <h4 class="item-cost">${{ item.quantity * item.price }}</h4>
        </div>
      </div>
    </div>
    <div class="shopping-cost">
      <div class="delivery-fee">
        <span>運費</span><span>免費</span>
      </div>
      <div class="total-cost">
        <span>小計</span>
        <span>{{ totalPrice }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import image01 from '../assets/item01.png'
import image02 from '../assets/item02.png'

const dummyData = [
  {
    id: 1,
    name: '破壞補丁修身牛仔褲',
    image: image01,
    quantity: 1,
    price: 3999,
  },
  {
    id: 2,
    name: '刷色直筒牛仔褲',
    image: image02,
    quantity: 1,
    price: 1299
  }
]

export default {
  data () {
    return {
      items: [],
      totalPrice: 0,
    }
  },
  methods: {
    fetchItems () {
      this.items = [ ...dummyData ]
    },
    addQuantity(id) {
      // 增加數量
      // todo: 由 api 向伺服器修改資料
      this.items = this.items.map(item => {
        if (item.id === id) return { ...item, quantity: item.quantity + 1 }
        else return item
      })
      this.checkTotalPrice()
    },
    subtractuantity(id) {
      // 減少數量
      // todo: 由 api 向伺服器修改資料
      this.items = this.items.map(item => {
        if (item.id === id) {
          // 避免負數
          let finalQuantity = item.quantity - 1
          if (finalQuantity < 0) finalQuantity = 0
          return { ...item, quantity: finalQuantity }
        }
        else return item
      })
      this.checkTotalPrice()
    },
    checkTotalPrice() {
      // 計算總價
      let total = 0
      this.items.forEach(item => total += item.quantity * item.price)
      this.totalPrice = total
    },
    setLocalStorage() {
      // 將 v-model 資料覆蓋存入 localStorage
      let storageData = JSON.parse(localStorage.getItem('cart-info'))
      storageData = {
        ...storageData,
        totalPrice: this.totalPrice
      }
      localStorage.setItem('cart-info', JSON.stringify(storageData))

    }
  },
  created () {
    this.fetchItems()
    this.checkTotalPrice()
    this.setLocalStorage()
  },
  beforeUpdate() {
    this.setLocalStorage()
  }
}
</script>