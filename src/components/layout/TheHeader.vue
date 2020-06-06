<template>
  <header>
    <div class="header-row">
      <section class="brand">
        <router-link :to="{ name: 'Home' }" class="title-link">
          <div class="icon"></div>
        </router-link>
      </section>
      <the-navigation />
    </div>
  </header>
</template>

<script>
import TheNavigation from './TheNavigation';
export default {
  components: { TheNavigation },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  height: 72px;
  background-color: var(--theme-primary, #202124);
  width: 100%;
  z-index: 10;
}

header > .header-row {
  height: 100%;
  padding: 0 24px;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
}

header > .header-row > .brand {
  justify-content: flex-start;
  flex: 1;
  height: 100%;
}

header > .header-row > .brand > .title-link {
  display: flex;
  align-items: center;
  height: 100%;
}

header > .header-row > .brand > .title-link > .icon {
  background-image: url('../../assets/te-logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 50%;
}
</style>
