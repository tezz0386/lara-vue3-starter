<template>
  <div>
       <router-view/>
       <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed:{
      ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user',
      }),
  },
  methods:{
    ...mapActions({
      signOutAction: 'auth/signOutAction',
    }),
    signOut(){
      this.signOutAction().then(()=>{
          this.$router.replace({
            name:'home'
          });
      });
    },
  }

}
</script>
<style>
.admin-header {
  margin-left: 300px;
  transition: 0.4s;
}
.admin-min-header {
  margin-left: 70px;
  transition: 0.4s;
}
.bars {
  font-size: 25px;
  color: black;
}
.admin-side-menu {
  background-color: rgb(121, 159, 196);
  height: 100vh;
  width: 300px;
  position: fixed;
  top: 0;
  transition: 0.4s;
}
.admin-min-side-menu {
  background-color: rgb(121, 159, 196);
  height: 100vh;
  width: 70px;
  position: fixed;
  top: 0;
  transition: 0.4s;
}
.side-menu-heading {
  background-color: rgb(13, 202, 240);
}
.admin-side-menu-body {
  border-right: 1px slateblue solid;
  height: 100%;
  overflow-x: scroll;
}
.side-menu li {
  display: block;
}
.side-menu li a {
  text-decoration: none;
  display: block;
  color: rgb(27, 26, 26);
  font-weight: 600;
}
.side-menu li a:hover {
  background-color: blue;
  color: aqua;
}
.logo {
  height: 26px;
  width: auto;
}
.menu-text-display-none{
  display: none;
}
</style>
