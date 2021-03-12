<template>
  <header class="home">
    <h1>Daniel Muxel</h1>
    <p class="intro">Ich helfe meinen Kunden den ersten Job in der Webentwicklung zu bekommen, ohne jahrelange Erfahrung haben zu müssen und ohne dabei auf sich allein gestellt zu sein.</p>
    <div class="crop">
      <img src="@/assets/home/portrait.jpg" alt="Daniel Muxel">
    </div>
  </header>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  position: relative;
}

.home h1 {
  font-size: 4rem;
  color: var(--primary);
}

.home .intro {
  max-width: 368px;
  text-align: left;
  margin: 1rem auto 0;
}

.crop {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
}

.home img {
  z-index: -1;
  position: relative;
  margin-top: -150px;
}

</style>
