<template>
  <div>
    <div class="row">
        <div
          v-for="product in prepereadList"
          :key="product.id"
          class="col s6 m4 l3 xl2"
        >
          <div class="card large">
            <div>
              <div class="card-image">
                <img class="materialboxed" height="150" :src="product.image">
              </div>
              <div class="card-content">
                <h4>{{shorten(product.title, 5)}}</h4>
                <h5>{{product.price}}</h5>
                <h6>{{shorten(product.about, 9)}} ...</h6>
              </div>
            </div>

            <div class="card-action">
              <button
                class="waves-effect waves-light btn-small"
                @click="addToBuy(product)"
              >
                Add
              </button>

              <button
                class="waves-effect waves-light btn-small"
              ><a href="/profile">Buy</a>
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import json from './../api/api.json'
export default {
  data () {
    return {
      myJson: json,
      listOfCategory: Array.from(new Set(json.map(({ category }) => category))),
      prepereadList: json,
      showCategory: false,
      shopList: []
    }
  },

  methods: {
    shorten: (val, words = 2) => val.split(' ').slice(0, words).join(' '),
    defaultPrepereadList () {
      this.prepereadList = this.myJson
    },
    addToBuy (product) {
      this.shopList.push(product)
      console.log(this.shopList)
    }
  }
}

</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css'

</style>
