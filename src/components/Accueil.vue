<template>
  <div class="intro">
    BIENVENUE
  </div>
</template>

<script>
export default {
  name: 'Accueil',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.intro {
  font-size: 80px;
  margin: 300px;
}

</style>
