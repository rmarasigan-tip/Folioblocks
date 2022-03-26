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
      <q-btn
        class="back"
        outline
        round
        color="black"
        icon="arrow_back"
        to="/explorerdashboard"
      />
      <div class="header row">
        <q-avatar class="usericon" icon="person" />

        <div class="username">
          <p>Profile</p>
          <p class="user">{{ user }}</p>
        </div>
      </div>

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

      <div class="row">
        <h5>Transactions</h5>
      </div>

      <div class="q-pa-md table">
        <q-table
          :rows="transactionrows"
          :columns="transactioncolumns"
          row-key="name"
        />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';

const transactioncolumns = [
  {
    name: 'Text',
    align: 'center',
    label: 'Text',
    field: '',
  },
  { name: 'Text', align: 'center', label: 'Text', field: '' },
  { name: 'Text', align: 'center', label: 'Text', field: '' },
  {
    name: 'Text',
    align: 'center',
    label: 'Text',
    field: '',
  },
  { name: 'Text', align: 'center', label: 'Text', field: '' },
  { name: 'Text', align: 'center', label: 'Text', field: '' },
  {
    name: 'Text',
    align: 'center',
    label: 'Text',
    field: '',
  },
  { name: 'Text', align: 'center', label: 'Text', field: '' },
];

const transactionrows = [
  {
    name: '',
  },
  {
    name: '',
  },
  {
    name: '',
  },
  {
    name: '',
  },
  {
    name: '',
  },
  {
    name: '',
  },
  {
    name: '',
  },
];

export default defineComponent({
  name: 'ExplorerAccountDetails',
  components: {},
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      transactioncolumns,
      transactionrows,
    };
  },

  data() {
    return {
      user: '0x7sd6403c',
    };
  },
});
</script>

<style scoped>
/* Navigation bar*/
.q-layout {
  height: 150vh;
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
  font-family: 'Poppins';
  font-size: 2em;
  font-weight: 500;
}

img {
  height: 50px;
  width: 50px;
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

.back {
  margin-left: 4.5%;
  margin-top: 3%;
  height: 30px;
  width: 30px;
}

h5 {
  font-family: 'Poppins';
  font-weight: 500;
  margin: 0.5%;
  margin-left: 4%;
}

.viewall {
  margin-top: 0.5%;
  margin-left: 3%;
  height: 10px;
}

.usericon {
  font-size: 150px;
  margin: 2%;
  margin-top: 0%;
  margin-right: 0;
}

.username {
  margin-top: 2%;
}

.user {
  font-size: 1.5em;
  font-weight: 400;
  line-height: 0px;
}

.table {
  margin: 3%;
  margin-top: 0%;
}

.my-card {
  margin-left: 4%;
  margin-right: 4%;
  margin-bottom: 2%;
}

.details {
  font-size: 0.8em;
  padding: 2%;
  padding-left: 4%;
}
</style>
