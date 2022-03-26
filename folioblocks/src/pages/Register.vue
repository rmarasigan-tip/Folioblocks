<template>
  <body>
    <logincontainer>
      <q-form class="my-card q-card">
        <q-card-section class="main">
          <div>
            <h2>Thank you for considering us!</h2>
            <h4>
              Please get the necessary information filled and we will have it
              process when submitted.
            </h4>
          </div>
          <q-btn class="exit" flat round color="black" icon="clear" to="/" />
          <q-input outlined v-model="FirstName" label="First Name" />
          <q-input outlined v-model="LastName" label="Last Name" />
          <q-input outlined v-model="email" label="E-mail" />
          <q-input
            outlined
            v-model="password"
            type="password"
            label="Password"
          />
          <q-input
            outlined
            v-model="confirm"
            type="password"
            label="Confirm Password"
          />
          <q-input outlined v-model="code" label="Authentication Code" />

          <q-btn class="register" rounded color="secondary" label="Register" />
          <p>
            Did you just got here with an account?<a href="#/login">Login</a>
          </p>
        </q-card-section>
      </q-form>
    </logincontainer>
  </body>
</template>

<script>
import { defineComponent } from 'vue';
import logincontainer from 'src/components/logincontainer.vue';

export default defineComponent({
  name: 'Register',
  data() {
    return {
      FirstName: '',
      LastName: '',
      email: '',
      username: '',
      password: '',
      confirm: '',
      code: '',
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

.register {
  grid-column: span 2;
}

.q-input {
  grid-column: span 2;
}

h2 {
  font-size: 1.7em;
  font-weight: 600;
  line-height: 5px;
  font-family: 'Poppins';
}

h4 {
  font-size: 1.2em;
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
