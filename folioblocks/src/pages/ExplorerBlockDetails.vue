<template>
  <q-layout view="hHh lpR lFf">
    <q-header elevated class="bg-positive text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="webtitle">
          <q-avatar class="logo">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Folioblocks

          <a class="toolbar-items">Home</a>
          <a class="toolbar-items">Team</a>
          <a class="toolbar-items">Home</a>
          <a class="toolbar-items">Home</a>
        </q-toolbar-title>
        <q-btn class="exit" flat round color="black" icon="logout" to="/" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
      <div class="drawer">
        <q-btn
          class="btndrawer"
          unelevated
          color="white"
          text-color="black"
          label="Home"
          to="/dashboard"
        />

        <q-btn
          class="btndrawer"
          unelevated
          color="white"
          text-color="black"
          label="Insert Data"
        />

        <q-btn
          class="btndrawer"
          unelevated
          color="white"
          text-color="black"
          label="Inbox"
        />

        <q-btn
          class="btndrawer"
          unelevated
          color="white"
          text-color="black"
          label="Explorer"
        />
      </div>
    </q-drawer>
    <q-page-container>
      <div class="header">
        <q-btn
          class="back"
          outline
          round
          color="black"
          icon="arrow_back"
          to="/explorerdashboard"
        />

        <q-input
          class="searchbar"
          v-model="search"
          debounce="500"
          filled
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <q-separator color="black" />

      <h5>Block # {{ blocknumber }}</h5>
      <q-separator color="black" />

      <div>
        <q-card class="my-card">
          <q-card-section class="details">
            <p>Text : {{}}</p>
            <p>Text : {{}}</p>
            <p>Text : {{}}</p>
            <p>Text : {{}}</p>
          </q-card-section>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ExplorerBlockDetails',
  components: {},
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },

  data() {
    return {
      blocknumber: '1234',
    };
  },
});
</script>

<style scoped>
/* Navigation bar*/
.q-layout {
  background: #c4c4c4;
}

.drawer {
  display: grid;
  text-align: center;
  margin: 6%;
  margin-top: 50%;
  gap: 3.5rem;
}

.btndrawer {
  font-size: 1.3em;
  font-family: 'Poppins';
}

h2 {
  font-family: 'Poppins';
  font-size: 2.5em;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1%;
}

h4 {
  font-family: 'Poppins';
  font-size: 1.4em;
}

p {
  font-size: 1.3em;
}

img {
  height: 50px;
  width: 50px;
  float: left;
  margin: 5%;
}

.toolbar-items {
  font-size: 0.8em;
  font-family: 'Poppins';
  margin-left: 5%;
}

.webtitle {
  font-family: 'Poppins';
  margin-left: 1%;
}

.logo {
  margin-right: 1.5%;
  margin: 0.5%;
}

/* Navigation bar end*/

.header {
  display: grid;
  margin: 1%;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
}
.back {
  margin: 1%;
  height: 30px;
  width: 30px;
}

h5 {
  font-family: 'Poppins';
  font-weight: 500;
  margin: 0.5%;
  margin-left: 4%;
}

.my-card {
  margin: 2%;
}

.details {
  font-size: 0.8em;
  padding: 2%;
  padding-left: 4%;
}
</style>
