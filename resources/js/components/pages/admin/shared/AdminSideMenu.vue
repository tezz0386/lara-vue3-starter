<template>
  <div class="admin-side-menu" id="admin-side-menu">
    <div class="side-menu-heading p-3">
      <label for="logo">
        <img
          :src="'../../../../assets/logo.png'"
          alt="image not found"
          class="logo"
        />
        <span class="text-danger menu-text">{{user.name}}</span>
      </label>
    </div>
    <div class="admin-side-menu-body mt-3">
      <div>
        <ul class="list-unstyled side-menu">
          <li class="pt-1 pb-1">
            <router-link to="/dashboard" :class="{active: activePage=='dashboard'}">
            <a href="#" class="p-2"
              >
               <i class="fa-solid fa-gauge pe-2"></i><span class="menu-text">Dashboard</span>
              </a
            >
            </router-link>
          </li>
          <li class="pt-1 pb-1">
            <router-link to="/admin/setting" :class="{active: activePage=='setting'}">
            <a href="#" class="p-2">
              <i class="fa-solid fa-gear pe-2"></i><span class="menu-text">Setting</span>
            </a>
            </router-link>
          </li>
          <li class="pt-1 pb-1">
            <a href="#" class="p-2"
              ><i class="fa-solid fa-images pe-2"></i><span class="menu-text">Gallery</span></a
            >
          </li>
           <li class="pt-1 pb-1">
            <a
              class="p-2"
              @click="this.page.show = !this.page.show"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <i class="fa-brands fa-pagelines pe-2"></i><span class="menu-text">Page</span>
              <span class="float-end pe-2">
                <i class="fa-solid fa-angle-right" v-if="this.page.show"></i>
                <i class="fa-solid fa-angle-down" v-if="!this.page.show"></i>
              </span>
            </a>
            <div class="collapse" id="collapseExample">
              <div class="card card-body p-0">
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="ps-2 pe-2 pb-1 pt-1"
                      >
                      <i class="fa-solid fa-circle-right"></i>
                      <span class="pe-2 menu-text"
                        >Login Page</span
                      ></a
                    >
                  </li>
                  <li>
                    <a href="#" class="ps-2 pe-2 pb-1 pt-1"
                      ><i class="fa-solid fa-circle-right"></i
                      ><span class="pe-2 menu-text"
                        >Register</span>
                    </a
                    >
                  </li>
                  <li>
                    <a href="#" class="ps-2 pe-2 pb-1 pt-1"
                      ><i class="fa-solid fa-circle-right"></i><span class="pe-2 menu-text"
                        >Welcome</span
                      ></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li class="pt-1 pb-1">
            <a
              class="p-2"
              @click="this.page.show = !this.page.show"
              data-bs-toggle="collapse"
              href="#collapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample1"
            >
              <i class="fa-brands fa-pagelines pe-2"></i><span class="menu-text">Page</span>
              <span class="float-end pe-2">
                <i class="fa-solid fa-angle-right" v-if="this.page.show"></i>
                <i class="fa-solid fa-angle-down" v-if="!this.page.show"></i>
              </span>
            </a>
            <div class="collapse" id="collapseExample1">
              <div class="card card-body p-0">
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="ps-2 pe-2 pb-1 pt-1"
                      >
                      <i class="fa-solid fa-circle-right"></i>
                      <span class="pe-2 menu-text"
                        >Login Page</span
                      ></a
                    >
                  </li>
                  <li>
                    <a href="#" class="ps-2 pe-2 pb-1 pt-1"
                      ><i class="fa-solid fa-circle-right"></i
                      ><span class="pe-2 menu-text"
                        >Register</span>
                    </a
                    >
                  </li>
                  <li>
                    <a href="#" class="ps-2 pe-2 pb-1 pt-1"
                      ><i class="fa-solid fa-circle-right"></i><span class="pe-2 menu-text"
                        >Welcome</span
                      ></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: "AdminSideMenu",
  props:{
    activePage:null,
  },
  data() {
    return {
      form: {
        show: true,
      },
      page: {
        show: true,
      },
    };
  },
  computed:{
    ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user',
      }),
  },
  methods: {
   
  },
};
</script>
<style scoped>
.active{
   background-color: blue;
}
.active a{
  color: aqua;
}
.active a span{
  color: aqua;
}
</style>
