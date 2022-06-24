<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"> S.U.M</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul
          :class="{ 'navbar-nav': true, 'me-auto': menu.me_auto }"
          v-for="menu in menu_category"
          :key="menu.id"
        >
          <li
            class="nav-item"
            v-for="menu_object in menu.value"
            :key="menu_object.key"
          >
            <a
              :class="{ 'nav-link': true, active: menu == menu_object.key }"
              @click="onMovePage($event, menu_object)"
              href="#"
              >{{ menu_object.value }}</a
            >
          </li>

          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li> -->
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "NavBar",
  setup() {
    const menu = ref("home");
    const menus = [
      { key: "home", value: "Home", URL: "#", position: "left" },
      { key: "app", value: "Application", URL: "#", position: "left" },
      { key: "me", value: "Profile", URL: "#", position: "right" },
    ];
    const left_menus = computed(() =>
      menus.filter((i) => i.position == "left")
    );
    const right_menus = computed(() =>
      menus.filter((i) => i.position == "right")
    );
    const onMovePage = (evt, menu_object) => {
      if (evt) {
        evt.preventDefault();
      }
      menu.value = menu_object.key;
    };
    return {
      menu,
      menu_category: [
        {
          id: 1,
          me_auto: true,
          value: left_menus.value,
        },
        { id: 2, me_auto: false, value: right_menus.value },
      ],
      onMovePage,
    };
  },
};
</script>
