<template>
  <div class="about container">
    <div class="intro">
      <h1>Über mich</h1>
      <div class="about-me">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa nisi ipsum reiciendis suscipit sequi repellat? Fugit blanditiis tenetur, distinctio totam rerum delectus, esse deserunt recusandae exercitationem similique voluptatem dolore?</p>
        <img src="@/assets/about/code.jpg" alt="code">
      </div>
    </div>
    
    <div class="skills"></div>
    <h2>Meine Fähigkeiten</h2>
    <div class="skill-list">
      <div class="skill" v-for="skill in skills" :key="skill.name">
      <p>{{skill.name}}</p>
      <font-awesome-icon :icon="['fab', skill.icon]" />
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: 'HTML 5', icon: 'html5' },
        { name: 'CSS 3', icon: 'css3' },
        { name: 'JavaScript', icon: 'js-square' },
        { name: 'VueJS', icon: 'vuejs' },
        { name: 'Angular', icon: 'angular' },
        { name: 'Git', icon: 'git' },
        { name: 'Docker', icon: 'docker' },
        { name: 'NPM', icon: 'npm' },
        { name: 'NodeJS', icon: 'node-js' }
      ]
    }
  }
}
</script>

<style>

.intro {
  margin-bottom: 3rem;
}

.skills {
  margin: 3rem 0;
}

.skill-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 1rem -0.5rem;
}

.skill {
  text-align: center;
  font-size: 3rem;
  min-width: 70px;
  box-sizing: border-box;
  margin: 0 0.5rem;
}

.skill p {
  font-size: 1rem;
}

.about-me {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 -1rem;
}

.about-me p {
  margin: 1rem;
  height: 100%;
}

.about-me img {
  box-sizing: border-box;
  margin: 1rem;
  width: 40%;
  border-radius: 40px;

}

</style>