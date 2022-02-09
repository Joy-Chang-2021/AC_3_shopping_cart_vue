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
          <div :data-id="item.id">
            <span class="minus">－</span>
            <span class="item-quantity">{{ item.quantity }}</span>
            <span class="plus">＋</span>
          </div>
          <h4 class="item-cost">${{ item.quantity * item.price }}</h4>
        </div>
      </div>
    </div>
    <div class="shopping-cost">
      <div class="delivery-fee">
        <span>運費</span><span class="weight-700">免費</span>
      </div>
      <div class="total-cost">
        <span>小計</span>
        <span class="weight-700">$5298</span>
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
    }
  },
  created () {
    this.fetchItems()
  }
}
</script>