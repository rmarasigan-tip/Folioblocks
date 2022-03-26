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
          to="/explorerdashboard"
        />
      </div>
    </q-drawer>

    <q-page-container>
      <div class="header">
        <q-card class="profile">
          <q-card-section>
            <h2>Hello {{ user }}</h2>
            <p class="alias">You are also known as {{ alias }}</p>
            <q-btn
              class="btn"
              outline
              rounded
              color="white"
              label="View Your Profile"
            />
            <q-btn
              class="btn"
              outline
              rounded
              color="white"
              label="Recruit People"
            />
            <q-btn
              class="btn"
              outline
              rounded
              color="white"
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
        <q-card class="blocks">
          <img src="\icon1.jpg" />
          <div class="output">
            <p class="data">{{ newblock }}</p>
            <p class="title">New Blocks</p>
          </div>
        </q-card>

        <q-card class="transaction">
          <img src="\icon2.jpg" />
          <div class="output">
            <p class="data">{{ transactions }}</p>
            <p class="title">Transaction Rates</p>
          </div>
        </q-card>

        <q-card class="totalblocks">
          <img src="\icon3.jpg" />
          <div class="output">
            <p class="data">{{ totalblocks }}</p>
            <p class="title">Total Blocks</p>
          </div>
        </q-card>

        <q-card class="certificate">
          <div class="output">
            <p class="data">{{ certificates }}</p>
            <p class="title">Generated Certificates</p>
          </div>
          <img src="\icon4.jpg" />
        </q-card>

        <q-card class="bounce">
          <div class="output">
            <p class="data">{{ bouncerate }}</p>
            <p class="title">Bounce Rate</p>
          </div>
          <img src="\icon5.jpg" />
        </q-card>

        <q-card class="visits">
          <div class="output">
            <p class="data">{{ visits }}</p>
            <p class="title">Total Visits</p>
          </div>
          <img src="\icon6.jpg" />
        </q-card>
      </div>

      <div class="footer">
        <q-card class="seminar">
          <img class="seminar-activity-icon" src="\icon7.jpg" />
          <div class="output">
            <p class="data">{{ seminars }}</p>
            <p class="title">Total Seminar Established</p>
            <p>On monthly basis</p>
          </div>
        </q-card>

        <q-card class="activity">
          <img class="seminar-activity-icon" src="\icon8.jpg" />
          <div class="output">
            <p class="data">{{ activity }}</p>
            <p class="title">Total Activity Elements</p>
            <p>On monthly basis</p>
          </div>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'Dashboard',
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
      user: '0x593sdx107c',
      alias: 'Ronan',

      blocks: '100000',
      time: '2 ms',
      txs: '10000',
      addresses: '100000',

      newblock: '1000',
      transactions: '1000',
      totalblocks: '1000',
      certificates: '1000',
      bouncerate: '1000',
      visits: '1000',
      seminars: '1000',
      activity: '1000',
    };
  },
});
</script>

<style scoped>
.q-layout {
  background: #c4c4c4;
}

.main {
  display: grid;
  margin: 6%;
  margin-bottom: 0%;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
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

.header {
  display: grid;
  margin: 6%;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
}

.footer {
  display: grid;
  margin: 6%;
  margin-top: 1.5%;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
}

.status {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: #54d6ff;
  height: 100%;
}

.profile {
  background-color: #54d6ff;
  height: 100%;
}

.btn {
  margin-left: 10%;
}

h2 {
  font-family: 'Poppins';
  font-size: 2.5em;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1%;
}

.alias {
  font-family: 'Poppins';
  font-size: 1.3em;
  text-align: center;
  margin-bottom: 5%;
}

h4 {
  font-family: 'Poppins';
  font-size: 1.4em;
}

p {
  font-size: 1.3em;
}

.icon {
  font-size: 100px;
  margin: auto;
}

img {
  height: 50px;
  width: 50px;
  float: left;
  margin: 5%;
}

.seminar-activity-icon {
  height: 60px;
  width: 65px;
  float: left;
  margin: 3%;
  margin-top: 5.5%;
}

.output {
  float: right;
  margin-right: 5%;
  margin-top: 4%;
  text-align: right;
}

.data {
  font-family: 'Poppins';
  font-size: 1.3em;
  font-weight: 700;
}

.title {
  font-family: 'Poppins';
  font-size: 1em;
  font-weight: 500;
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
</style>
