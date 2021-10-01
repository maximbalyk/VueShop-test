<template>
  <div>
    <div class="row">
      <form class="col s12" @submit.prevent="submitHundler">
        <div class="row">
          <div class="input-field col s6">
            <input
              id="first_name"
              type="text"
            >
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col s6">
            <input
              id="last_name"
              type="text"

            >
            <label for="last_name">Last Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <label for="ccn">Credit Card Number:</label>
            <input
              id="ccn"
              type="tel"
            >
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate">
            <label for="email">Email</label>
          </div>
        </div>
        <button
          type="submit"
          class="btn"
        >
          Оформити
        </button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'profile',
  methods: {
    submitHundler () {
      this.$router.push('/')
    }
  }
}
</script>
