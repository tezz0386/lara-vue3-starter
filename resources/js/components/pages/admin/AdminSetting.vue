<template>
  <div>
    <div class="admin-header" id="admin-header">
      <nav class="navbar navbar-expand navbar-light bg-info sticky-top">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a href="#" class="me-5 bars" onclick="myFunction()"><i class="fa-solid fa-bars"></i></a>
            <a class="navbar-brand" href="#">Home</a>
            <form class="d-flex">
              <div class="input-group input-group-sm">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Search here"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon2">
                    <button class="border-outline-none" type="submit">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </span>
                </div>
              </div>
            </form>
            <ul class="navbar-nav ms-auto mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="admin-main-content p-3">
       <!-- content must be start form here -->
                welcome to setting
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque error debitis laboriosam quae, praesentium vitae ipsam quidem, facilis rem sit ratione cupiditate? Quam, maxime ipsa. Nam possimus rem consectetur.
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque error debitis laboriosam quae, praesentium vitae ipsam quidem, facilis rem sit ratione cupiditate? Quam, maxime ipsa. Nam possimus rem consectetur.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque error debitis laboriosam quae, praesentium vitae ipsam quidem, facilis rem sit ratione cupiditate? Quam, maxime ipsa. Nam possimus rem consectetur.
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque error debitis laboriosam quae, praesentium vitae ipsam quidem, facilis rem sit ratione cupiditate? Quam, maxime ipsa. Nam possimus rem consectetur.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque error debitis laboriosam quae, praesentium vitae ipsam quidem, facilis rem sit ratione cupiditate? Quam, maxime ipsa. Nam possimus rem consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque error debitis laboriosam quae, praesentium vitae ipsam quidem, facilis rem sit ratione cupiditate? Quam, maxime ipsa. Nam possimus rem consectetur.
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque error debitis laboriosam quae, praesentium vitae ipsam quidem, facilis rem sit ratione cupiditate? Quam, maxime ipsa. Nam possimus rem consectetur.

                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque error debitis laboriosam quae, praesentium vitae ipsam quidem, facilis rem sit ratione cupiditate? Quam, maxime ipsa. Nam possimus rem consectetur.
                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque error debitis laboriosam quae, praesentium vitae ipsam quidem, facilis rem sit ratione cupiditate? Quam, maxime ipsa. Nam possimus rem consectetur.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque error debitis laboriosam quae, praesentium vitae ipsam quidem, facilis rem sit ratione cupiditate? Quam, maxime ipsa. Nam possimus rem consectetur.
                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque error debitis laboriosam quae, praesentium vitae ipsam quidem, facilis rem sit ratione cupiditate? Quam, maxime ipsa. Nam possimus rem consectetur.
       <!-- content must be end with in this -->
      </div>
    </div>
    <admin-side-menu :activePage="this.activePage"/>
  </div>
</template>
<script>
import AdminSideMenu from "./shared/AdminSideMenu.vue";
export default {
  components: { AdminSideMenu },
  name: "AdminSetting",
  data(){
    return{
      activePage:'setting',
    }
  },
  created(){
    this.$Progress.start();
    this.$Progress.finish();
  },
};
</script>