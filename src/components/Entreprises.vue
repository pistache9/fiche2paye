<template>
  <div class="bg">
      <div class="sub-form">
        <div v-if="getLoggedInStatus">
            <div v-if="getEntreprises.length > 0">
              Mes entreprises:<div>
                <div  v-for="entreprise in getEntreprises" v-bind:key="entreprise" class="case">
                  🏡 {{entreprise.nom_entreprise}}
                </div>
              </div>
            </div>
            <div v-else>
               Vous n'avez pas encore d'entreprise.
               <router-link to="/creation_entreprise"><div class="box">Créer une entreprise</div></router-link>
            </div>

        </div>
        <div v-else>
          Vous devez être connecté pour voir vos entreprises.
        </div>

      </div>
      <div>

      </diV>
  </div>
</template>

<script>

export default {
  name: 'Entreprises',
  computed: {
    getLoggedInStatus: function () {
      return this.$store.getters.getLoggedInStatus
    },
    getToken: function() {
      return this.$store.getters.getToken
    },
    getEntreprises: function () {
      return this.$store.getters.getEntreprises
    },
    getId: function () {
      return this.$store.getters.getId
    },
    getEmail: function () {
      return this.$store.getters.getEmail
    },

  },
  data() {
    return {
    }
  },
  methods: {
  },
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
.sub-form {
  font-size: 20px;
  background-color: white;
  padding: 50px;
  border-radius: 2px;
  border: thick double #42b983;
  width: 500px;
  margin: auto;
  margin-top: 100px;

}
.bg {
  height: 700px;
  width: 100%;
  background-color: #42b983;
  position: absolute;
}
.red-alert {
  color: red;
  border: 1px solid red;
  padding: 5px;
  font-size: 13px;
  font-weight: bold;
}
.flex {
  display: flex;
  flex-direction: column;
}
.box {
  width: 200px;
  margin: auto;
  margin-bottom: 20px;
}
.case {
  margin: 40px;
  padding: 20px;
  box-shadow: 3px 3px 4px 5px rgba(200, 200, 100, 0.2);
}
.case:hover {
  cursor: pointer;
}

</style>
