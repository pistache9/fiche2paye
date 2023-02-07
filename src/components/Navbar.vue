<template>
  <div class="navbar">
    <div class="flex">
       <router-link to="/"><div class="box">ACCUEIL</div></router-link>
       <div v-if="getLoggedInStatus" class="flex">
        <router-link to="/entreprises"><div class="box">ENTREPRISES</div></router-link>
        <div class="box">SALARIES</div>
        <div @click="logout" class="box">Deconnexion</div>
        <div>
          <div>Token: {{getToken}}</div>
          <!-- <div>ID : {{getId}}</div> -->
          <div>{{getLoggedInStatus}}</div>
          <div>{{getEmail}}</div>
          <div>Entreprises : {{getEntreprises?.length}}</div>
        </div>
       </div>
       <div v-else class="flex">
        <router-link to="/inscription"><div class="box">S'inscrire</div></router-link>
        <div class="box" @click="login">Se connecter</div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  },
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
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/");
    },
    login() {
      this.$router.push("/connexion");
    }
    // async login() {
    //   await this.$store.dispatch("login", {
    //     // name: "tata",
    //     // user_id: 12345,
    //   })
    // },
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
.flex {
  display: flex;
  justify-content: space-evenly;
  padding-top: 0px;
}
.box {
  padding: 18px;
  border-radius: 2px;
  color: grey;
  /* background-color: beige; */
}
.box:hover {
  /* background-color: rgb(167, 0, 156); */
  cursor: pointer;
  color: black;
  border: thick double grey;
  margin: -4px;
  /* box-shadow: 5px 5px 3px 3px rgba(20,20,20,0.8); */
}
.navbar {
  /* background-color: beige; */
  box-shadow: 5px 5px 3px 0px rgba(20,20,20,0.1);
  height: 60px;
  top: 5px;
  position: absolute;
  width: 100%;
  font-weight: bolder;
}
</style>
