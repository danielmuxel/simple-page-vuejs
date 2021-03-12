<template>
  <div class="contact container">
    <h1>Kontakt</h1>
    <div>
      <form>
        <label for="name">Name</label>
        <input type="text" name="name" id="name">

        <label for="email">E-Mail</label>
        <input type="email" name="email" id="email">

        <label for="subject">Betreff</label>
        <input type="text" name="subject" id="subject">

        <label for="message">Nachricht</label>
        <textarea name="message" id="message"></textarea>

        <button>
          <font-awesome-icon icon="paper-plane" />
          Abschicken
        </button>
      </form>

    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style>

.contact button {
  width: 100%;
}
</style>