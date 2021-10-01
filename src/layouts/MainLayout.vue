<template>
  <div class="app-main-layout">
    
    <Navbar @click="isOpen = !isOpen" />

    <Sidebar v-model="isOpen" />
    
    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <footer class="page-footer blue footer-position">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Служба підтримки</h5>
            <div class="white-text"><a class="white-text" href="tel:+80000000000">+8 (000) 000-00-00</a></div>
            <span
              class="grey-text text-lighten-4 "
            >
              Графік роботи колл-центру <br> Цілодобово
            </span>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">KropShop</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="#!">Про компанію</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Контакти</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Правова інформація</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Стати партнером</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        © 2014 KropShop
        </div>
      </div>
    </footer>
  </div>

</template>

<script>
import Navbar from '@/components/app/Navbar'
import Sidebar from '@/components/app/Sidebar'

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true
  }),
  components: {
    Navbar, Sidebar
  }
}
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css'

</style>