<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {}
  },
  components: { RouterLink, RouterView }
}
</script>

<template>
  <header>
    <span>Read news anywhere</span>
    <ul class="links">
      <li><RouterLink to="/1">list</RouterLink></li>
      <li><RouterLink to="/search">search</RouterLink></li>
      <li>NEWS</li>
    </ul>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px;
}

.links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.links li {
  margin-right: 20px;
  text-transform: uppercase;
}

.links > li {
  font-weight: bold;
}

a {
  text-decoration: none;
  color: #5792eb;
}

main {
  margin: 0 10%;
}
</style>
