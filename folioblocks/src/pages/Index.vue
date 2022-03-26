<template>
  <q-header class="bg-primary text-white">
    <q-toolbar>
      <q-toolbar-title class="title">
        <q-avatar class="logo" icon=""> </q-avatar>
        Folioblocks
      </q-toolbar-title>
      <a>Home</a>
      <a>Team</a>
      <a href="#/login">Login </a>
      <img class="login" src="loginicon.jpg" />
    </q-toolbar>
  </q-header>

  <body>
    <q-page>
      <Container>
        <div class="main">
          <div class="text">
            <h4>Get skilled workers with Folioblocks!</h4>
            <p>
              Tired of the tedious process of validating the credentials of
              workers? Blockchain can help you with that and with us!
            </p>
            <q-btn
              class="register"
              outline
              color="secondary"
              label="Register Now"
              to="/register"
            />
          </div>
          <q-card class="my-card">
            <q-img class="image" src="https://placeimg.com/500/300/nature" />
          </q-card>
        </div>
      </Container>

      <div class="info">
        <img class="img" src="\img.jpg" />
        <div>
          <h5>
            Design of an Immutable Credential Verification System using
            Blockchain Technology
          </h5>

          <ul>
            <li>
              Immutable credential verification system using blockchain
              technology.
            </li>
            <li>
              Provides secure location and platform fo validated credentials.
            </li>
            <li>Suitable for people looking for trustworthy employees.</li>
          </ul>
        </div>
        <img class="img" src="\img2.jpg" />

        <div>
          <h5>Distributed Ledger Technology</h5>
          <p class="info-txt">
            The certificates and credentials of employees registered in
            FolioBlocks are recorded and stored on the blockchain. Blockchain is
            a distributed ledger that guarantees the authenticity of the stored
            credentials.
          </p>
        </div>
      </div>
    </q-page>
  </body>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from 'src/components/Container.vue';

export default defineComponent({
  name: 'PageIndex',
  components: { Container },
});
</script>

<style scoped>
body {
  height: 200vh;
  background: linear-gradient(
    to bottom,
    white 0%,
    white 40%,
    #54d6ff 40%,
    #54d6ff 200%
  );
}
.main {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
}

.text {
  width: max(10%, 90%);
}
h4 {
  font-size: 3.5em;
  width: auto;
  line-height: normal;
  font-weight: 800;
  margin-top: 200px;
  letter-spacing: 10px;
}

p {
  width: auto;
  font-size: 1.5em;
  font-weight: 500;
  text-align: justify;
  word-spacing: 5px;
}

.register {
  width: 30%;
  margin-top: 20px;
  margin-left: 0;
  font-weight: 500;
  font-size: 1.2em;
  transition: ease-out 0.3s;
}

.register:hover {
  font-size: 1.5em;
  font-weight: 600;
}

.my-card {
  margin-top: 70px;
  box-shadow: 0 0 30px #3d3d3d;
}

.image {
  width: 100%;
  height: 100%;
}

.info {
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 400px;
  margin-left: 6%;
  margin-right: 6%;
}

.img {
  width: 100%;
  height: 80%;
  border-radius: 50px;
  box-shadow: 0 0 30px #3d3d3d;
}

h5 {
  margin-top: 10%;
  font-weight: 700;
  font-family: 'Poppins';
}

ul,
.info-txt {
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 1.5em;
  margin: 50px;
  text-align: justify;
}

.title {
  color: black;
  font-size: 2em;
  margin: 25px 5%;
}

.logo {
  margin-right: 20px;
}

a {
  color: black;
  font-size: 1.3em;
  margin-left: 7%;
  margin-top: 20px;
  font-family: 'Poppins';
  font-weight: 400;
}

.login {
  margin-left: 10px;
  margin-right: 5%;
  margin-top: 20px;
  height: 30px;
}

@media (max-width: 60em) {
  h4 {
    font-size: 1.5rem;
    letter-spacing: normal;
  }
  p {
    font-size: 0.8rem;
    word-spacing: normal;
  }

  a {
    margin-left: 5%;
    font-size: 0.8rem;
  }

  .title {
    font-size: 1rem;
  }
}
</style>
