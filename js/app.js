Vue.component("navbar", {
  template: `<nav>
        <ul>
          <li><a href>Inicio</a></li>
          <li><a href>Catalogo</a></li>
        </ul>
    </nav>`,
});

Vue.component("tabla", {
  props: ["item", "alert"],
  template: `
  <div class="element" >
  <h3>{{item.name}}</h3>
  <h3>$ {{item.price}}</h3>
  <img :src="item.image"/>
  <p v-if="item.stock">Hay stock</p>
  <p v-else>No hay stock</p>
  <button v-on:click="alert" class="btn">Agregar</button>
  </div>`,
});

var app = new Vue({
  el: "#app",
  data: {
    title: "Frutas y Verduras",
    alumna: "Jessica Francavilla",
    items: [
      {
        name: "Palta",
        stock: false,
        price: 208,
        image:
          "https://d3ugyf2ht6aenh.cloudfront.net/stores/971/857/products/palta1-3b6ad84ee39bad581215909250506090-480-0.jpg",
      },
      {
        name: "Papa",
        stock: true,
        price: 80,
        image:
          "https://d3ugyf2ht6aenh.cloudfront.net/stores/971/857/products/papa-blanca1-6b838149e859d02f9915909261260760-480-0.jpg",
      },
      {
        name: "Ciruela",
        stock: true,
        price: 273,
        image:
          "https://d3ugyf2ht6aenh.cloudfront.net/stores/971/857/products/ciruela-roja1-380222aa0ee1c50d0315908474173303-480-0.jpg",
      },
      {
        name: "Uva Negra",
        stock: true,
        price: 499,
        image:
          "https://d3ugyf2ht6aenh.cloudfront.net/stores/971/857/products/uvared-scaled-e15876674047551-5891d743848bdd1f5f15908534528308-480-0.jpg",
      },
      {
        name: "Melon",
        stock: false,
        price: 455,
        image:
          "https://d3ugyf2ht6aenh.cloudfront.net/stores/971/857/products/melon-amarillo-x-unidad1-e7ca4a82009103f3c015947235312287-480-0.jpg",
      },
      {
        name: "Naranja",
        stock: true,
        price: 104,
        image:
          "https://d3ugyf2ht6aenh.cloudfront.net/stores/971/857/products/naranja1-2b78bc3cc3afbe01f315908524247510-480-0.jpg",
      },
      {
        name: "Pera",
        stock: true,
        price: 195,
        image:
          "https://d3ugyf2ht6aenh.cloudfront.net/stores/971/857/products/pera-11-86696614c24123138315908529229799-480-0.jpg",
      },
      {
        name: "Kiwi",
        stock: false,
        price: 324,
        image:
          "https://d3ugyf2ht6aenh.cloudfront.net/stores/971/857/products/kiwi1-5bee2b0f4cb471186e15908500798577-480-0.jpg",
      },
    ],
  },
  methods: {
    alert() {
      alert("Agregaste un item");
    },
  },
});
