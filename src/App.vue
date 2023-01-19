<template>
  <div id="navDiv">
    <nav>
      <router-link to="/">Contact</router-link>
      <router-link to="/history">Journal</router-link>
      <router-link to="/keypad">Composer</router-link>
    </nav>
  </div>
  <router-view />
</template>

<style>
@import url(main.css);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 100px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
  font-size: 48px;
  text-decoration: none;
  font-family: var(--font);
  font-weight: lighter;
}

nav a.router-link-exact-active {
  color: var(--main-color);
}

#navDiv {
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
