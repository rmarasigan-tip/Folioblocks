<template>
  <logincontainer>
    <q-form class="q-card my-card">
      <q-card-section class="main">
        <div>
          <h2>Hello and Welcome!</h2>
          <h4>Please provide your credentials to get started.</h4>
        </div>
        <q-btn class="exit" flat round color="black" icon="clear" to="/" />
        <q-input class="user" outlined v-model="email" label="Username" />
        <q-input
          class="password"
          outlined
          v-model="password"
          label="Password"
          type="password"
        />
        <q-checkbox v-model="val" label="Remember Me" color="secondary" />
        <q-btn
          class="login"
          rounded
          color="secondary"
          label="Login"
          to="/dashboard"
        />
        <p>Need an Account?<a href="#/register">Sign Up</a></p>
      </q-card-section>
    </q-form>
  </logincontainer>
</template>

<script>
import { defineComponent, ref } from 'vue';
import logincontainer from 'src/components/logincontainer.vue';

export default defineComponent({
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  setup() {
    return {
      val: ref(false),
    };
  },
  components: { logincontainer },
});
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 100%;
}

.main {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2);
  grid-template-rows: repeat(6);
}
.user {
  grid-column: span 2;
}

.password {
  grid-column: span 2;
}

.q-checkbox {
  grid-column: span 2;
}

.login {
  grid-column: span 2;
}

h2 {
  font-size: 2em;
  font-weight: 600;
  line-height: 5px;
  font-family: 'Poppins';
}

h4 {
  font-size: 1.5em;
  line-height: 20px;
  font-family: 'Poppins';
}

p {
  grid-column: span 2;
  font-family: 'Poppins';
  font-size: 1.2em;
  text-align: center;
}

.exit {
  height: 50px;
  width: 50px;
  margin-left: 20%;
}
</style>
