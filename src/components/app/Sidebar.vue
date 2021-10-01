<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">

    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    links: [
      {title: 'Всі товари', url: '/', exact: true},
      {title: 'Смартфони', url: '/smartphones'},
      {title: 'Ноутбуки', url: '/notebooks'},
      {title: 'Фітнес браслети', url: '/bracelets'},
      {title: 'Фотоапарати', url: '/cameras'},
      {title: 'Оформить заказ', url: '/profile'}
    ]
  })
}
</script>



