<template>
  <nav>
    <img src="@/assets/navigation/avatar.jpg" alt="avatar">
    <router-link :to="{ name: 'Home' }">
      <font-awesome-icon icon="home"/>
      <p>Home</p>
    </router-link>
    <router-link :to="{ name: 'About' }">
      <font-awesome-icon icon="user"/>
      <p>Über</p>
    </router-link>
    <router-link :to="{ name: 'Bilder' }">
      <font-awesome-icon icon="eye"/>
      <p>Bilder</p>
    </router-link>
    <router-link :to="{ name: 'Contact' }">
      <font-awesome-icon icon="envelope"/>
      <p>Kontakt</p>
    </router-link> 
  </nav>
</template>

<script>
export default {

}
</script>

<style>
nav {
  width: 120px;
  height: 100%;
  position: fixed;
  z-index: 1;
  overflow: auto;
  font-size: 1.5rem;
  background: #22252F;
}

nav p {
  margin: 10px 0;
  text-transform: uppercase;
  font-size: 1rem;
}

nav a {
  box-sizing: border-box;
  font-weight: bold;
  color: var(--font);
  display: block;
  border: none;
  text-decoration: none;
  width: 100%;
  text-align: center;
  padding: 1rem;

  user-select: none;
  -webkit-user-drag: none;
}

nav a:hover {
  color: var(--primary);
  transition: 0.25s color;
}

nav a.router-link-exact-active {
  color: var(--primary);
  /* color: #58A4E0; */
  background: var(--bg);
}

nav img {
  /* margin-bottom: -6px; */
  vertical-align: middle;
}


@media (max-width: 600px) {
  nav {
    width: 100%;
    display: flex;
    height: 70px;
    position: relative;
    font-size: 1.2rem;
  }

  nav a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0.7rem;
  }

  nav img {
    display: none;
  }

  nav p {
    font-size: 0.9rem;
    margin: 0;
  }
}
</style>