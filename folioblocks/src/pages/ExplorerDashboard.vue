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
      <div>
        <h2>Explorer</h2>
      </div>
      <div class="search">
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

      <div class="header">
        <q-card class="profile">
          <q-card-section>
            <h2>Hello {{ user }}</h2>
            <p class="alias">You are also known as {{ alias }}</p>
            <q-btn
              class="btn"
              outline
              rounded
              color="black"
              label="View Your Profile"
            />
            <q-btn
              class="btn"
              outline
              rounded
              color="black"
              label="Recruit People"
            />
            <q-btn
              class="btn"
              outline
              rounded
              color="black"
              label="Generate Certificate"
            />
          </q-card-section>
        </q-card>

        <q-card class="status">
          <q-avatar class="icon" icon="view_in_ar" />
          <div>
            <h4>Total Blocks</h4>
            <p>{{ blocks }}</p>
          </div>

          <q-avatar class="icon" icon="schedule" />
          <div>
            <h4>Block Time</h4>
            <p>{{ time }}</p>
          </div>

          <q-avatar class="icon" icon="swap_horiz" />
          <div>
            <h4>Total TXS</h4>
            <p>{{ txs }}</p>
          </div>

          <q-avatar class="icon" icon="person" />
          <div>
            <h4>Total Addresses</h4>
            <p>{{ addresses }}</p>
          </div>
        </q-card>
      </div>

      <div class="main">
        <div class="row">
          <h5>Latest Transactions</h5>
          <q-btn
            class="viewall"
            rounded
            color="accent"
            text-color="black"
            label="View All"
            to="/explorertransaction"
          />
        </div>
        <div class="row">
          <h5>Latest Blocks</h5>
          <q-btn
            class="viewall"
            rounded
            color="accent"
            text-color="black"
            label="View All"
            to="/explorerblocks"
          />
        </div>

        <q-table
          :rows="transactionrows"
          :columns="transactioncolumns"
          row-key="name"
        />
        <q-table :rows="blocksrows" :columns="blockscolumns" row-key="name" />
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
];

const transactionrows = [];

const blockscolumns = [
  { name: 'Text', align: 'center', label: 'Text', field: '' },
  { name: 'Text', align: 'center', label: 'Text', field: '' },
];

const blocksrows = [
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
  name: 'ExplorerDashboard',
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
      blockscolumns,
      blocksrows,

      search: ref(''),
    };
  },

  data() {
    return {
      user: '0x593sdx107c',
      alias: 'Ronan',

      blocks: '100000',
      time: '2 ms',
      txs: '10000',
      addresses: '100000',
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

/* User Info and Block info */
.header {
  display: grid;
  margin: 6%;
  margin-top: 0%;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
}

.profile {
  background-color: #a7eaff;
  height: 100%;
}

.alias {
  font-family: 'Poppins';
  font-size: 1.3em;
  text-align: center;
  margin-bottom: 5%;
}

.btn {
  margin-left: 10%;
}

.status {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: #a7eaff;
  height: 100%;
}
.icon {
  font-size: 100px;
  margin: auto;
}

/* User Info and Block info end */

.search {
  display: grid;
  margin: 6%;
  margin-bottom: 2%;
  margin-top: 2%;
}

.searchbar {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

/* Table */

.main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 6%;
  margin-bottom: 2%;
  margin-top: 2%;
}

h5 {
  font-family: 'Poppins';
  font-weight: 500;
  margin: 0%;
}

.viewall {
  margin-left: 5%;
}
</style>
