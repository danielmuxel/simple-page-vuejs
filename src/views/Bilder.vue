<template>
  <div class="images container">
    <h1>Bilder</h1>
    <div class="projects">
      
      <ul>
        <li>
          <img src="@/assets/bilder/code1.jpg" alt="">
        </li>
        <li>
          <img src="@/assets/bilder/laptop2.jpg" alt="">
        </li>
        <li>
          <img src="@/assets/bilder/laptop3.jpg" alt="">
        </li>
      </ul>

      <ul>
        <li>
          <img src="@/assets/bilder/glasses.jpg" alt="">
        </li>
        <li>
          <img src="@/assets/bilder/laptop1.jpg" alt="">
        </li>
      </ul>

      <ul>
        <li>
          <img src="@/assets/bilder/code2.jpg" alt="">
        </li>
        <li>
          <img src="@/assets/bilder/smartphone.jpg" alt="">
        </li>
      </ul>
      
    </div>
    <p>Bilder von <a href="https://unsplash.com/">unsplash</a></p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.projects {
  display: flex;
  flex-wrap: wrap;
}

.projects ul { 
  flex-grow: 1;
  width: calc(100%/3);
  list-style-type: none;
}

.projects li:hover {
  transform: scale(1.05);
  transition: all 0.2s;

}

.projects img {
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
}

@media (max-width: 1023px) {
  .projects ul {
    width: 50%;
  }
}

@media (max-width: 600px) {
  .projects {
    flex-direction: column;
  }

  .projects ul {
    width: 100%;
  }
}



</style>