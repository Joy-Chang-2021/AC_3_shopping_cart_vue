<template>
  <div class="part">
    <h3>運送方式</h3>
    <div class="info-delivery">
      <div>
        <input type="radio" name="delivery" id="delivery-standard" checked>
        <label for="delivery-standard">
          <h6 class="weight-400">標準運送</h6>
          <p>約3-7個工作天</p>
          <p class="delivery-cost">免費</p>
        </label>
      </div>
      <div>
        <input type="radio" name="delivery" id="delivery-fast">
        <label for="delivery-fast">
          <h6>DHL運送</h6>
          <p>28小時內送達</p>
          <p class="delivery-cost">$500</p>
        </label>
      </div>
    </div>
  </div>
</template>