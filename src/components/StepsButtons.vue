<template>
  <div class="btns-panel d-flex justify-content-between">
    <button
      @click.prevent.stop="stepsHandler(false)"
      class="btn btn-previous text-left"
      :disabled="initialStep === 0"
    >
      <div class="img btn-pre-img"></div>
      <span>上一步</span>
    </button>
    <button
      v-if="initialStep !== 2"
      @click.prevent.stop="stepsHandler(true)"
      class="btn btn-next"
    >
      <span>下一步</span>
      <div class="img btn-next-img"></div>
    </button>
    <button
      v-else
      @click.prevent.stop="showModal"
      class="btn btn-next"
    >
      <span>確認下單</span>
      <div class="img btn-next-img"></div>
    </button>
    <modal name="storage-modal" height="auto">
      <p v-html="renderStorageData" class="storage-modal"></p>
    </modal>
  </div>
</template>

<script>
export default {
  props: {
    initialStep: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      storageData: null
    }
  },
  methods: {
    stepsHandler(value) {
      let stepNumber = this.initialStep
      // true: 下一頁(step++)； false: 上一頁(step--)
      if (value) stepNumber++
      else stepNumber--
      // 控制 stepNumber 僅可 0 1 2 之間
      if (stepNumber > 2) stepNumber = 2
      else if (stepNumber < 0) stepNumber = 0
      // 變更 children router
      this.$router.push({ name: 'form' + (stepNumber + 1)})
      .catch(()=>{});
    },
    getStorageData () {
      // 取得 localStorage 資料
      this.storageData = JSON.parse(localStorage.getItem('cart-info')) || {}
    },
    showModal () {
      this.getStorageData ()
      this.$modal.show('storage-modal')
    },
    hideModal () {
      this.$modal.hide('storage-modal')
    }
  },
  computed: {
    renderStorageData() {
      // 使 modal 內容能換行排列
      let text = '{<br/>'
      for (let key in this.storageData) {
        text += `&ensp;&ensp;${key}: ${this.storageData[key]}<br/>`
      }
      text += '}'
      return text
    }
  },
}
</script>
