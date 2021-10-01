<template>
    <div id="app">
    <nav>
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="left">
          <li><a href="#!" class="breadcrumb" @click="showCategorylist">Список категорій</a></li>
        </ul>
        <a
          href="#"
          class="brand-logo center"
          @click="defaultPrepereadList"
        >KropShop</a>
      </div>
    </nav>

    <div class="row" v-if="showCategory">
      <ul class="left tabs">
        <button
          v-for="item in listOfCategory"
          :key="item.id"
          class="waves-effect waves-light btn col s3 materialize-red lighten-1"
          @click="filtredByCategory(item)"
        >
          {{item}}
        </button>
      </ul>
    </div>

    <div class="container">
      <div class="row">
        <div
          v-for="product in prepereadList"
          :key="product.id"
          class="col s4 m4 xl3"
        >
          <div class="card">
            <div>
              <div class="card-image waves-effect waves-block waves-light">
                <img class="materialboxed" height="250" :src="product.image">
              </div>
              <div class="card-content">
                <span class="card-title">{{shorten(product.title, 5)}}</span>
                <p>{{product.price}}</p>
                <p>{{shorten(product.about, 9)}} ...</p>
              </div>
            </div>

            <div class="card-action">
              <button
                class="waves-effect waves-light btn-small"
                @click="addToBuy(product)"
              >
                Add to Cart
              </button>
              <!-- <button data-target="modal1" class="btn modal-trigger">Modal</button> -->
              <!-- <button
                class="waves-effect waves-light btn-small modal-trigger"
              ><a href="#modal1" class="modal-trigger">buy</a>
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>

  <div>
    <custom-modal v-model="show" @confirm="confirm" @cancel="cancel">
      <template v-slot:title>Hello, vue-final-modal</template>
      <p>Vue Final Modal is a renderless, stackable, detachable and lightweight modal component.</p>
    </custom-modal>

    <v-button @click="show = true">Open modal</v-button>
  </div>

    <footer class="page-footer">
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
