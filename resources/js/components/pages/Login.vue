<template>
  <div>
    <div class="container">
      <form action="">
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            v-model="this.form.email"
            class="form-control form-control-sm"
          />
        </div>
        <div class="form-group">
          <label for="email">Password:</label>
          <input
            type="password"
            v-model="this.form.password"
            class="form-control form-control-sm"
          />
        </div>
        <div class="form-group">
          <button
            type="button"
            class="btn btn-primary float-e"
            v-on:click="login"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "FrontLogin",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
      signIn: "auth/signIn",
    }),
    login() {
      this.signIn(this.form).then(() => {
        this.$router.go('/dashboard');
      });
    },
  },
};
</script>