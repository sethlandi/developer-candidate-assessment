<template>
  <nav>
    <ul class="nav-list">
      <router-link
        :to="{ name: 'Exercises' }"
        v-slot="{ href, route, navigate, isActive, isExactActive }"
      >
        <li
          class="nav-item"
          :class="[
            isActive && 'router-link-active',
            isExactActive && 'router-link-exact-active',
          ]"
        >
          <a class="nav-link" :href="href" @click="navigate">
            Exercises
            <span class="nav-indicator"></span>
          </a>
        </li>
      </router-link>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  margin-left: auto;
  background-color: #424242;
}

nav .nav-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav .nav-item {
  display: inline-block;
  line-height: 72px;
  color: #424242;
  background-color: var(--theme-primary);
}

nav .nav-item:hover {
  color: rgba(66, 66, 66, 0.65);
}

nav .nav-link {
  display: inline-block;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  position: relative;
}

nav .nav-link {
  color: inherit;
  padding: 0 16px;
}

.router-link-exact-active .nav-indicator {
  transform: scaleY(1);
}

nav .nav-indicator {
  background: #424242;
  position: absolute;
  bottom: 0;
  right: 16px;
  left: 16px;
  height: 4px;
  transform-origin: bottom;
  transform: scaleY(0);
  transition: transform 235ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
