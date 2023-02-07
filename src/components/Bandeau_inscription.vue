<template>
  <div>
    <div id="bandeau-menu-gauche">
      <div v-for="(title, index) in titles" :key="index">
        <div v-if="step == index + 1" class="intitule selected">{{titles[index]}}</div>
        <div v-else class="intitule">{{titles[index]}}</div>
      </div>
    </div>
  </div>
</template>

<script>
// <script setup>

// const props = defineProps(['formData']);

// import useForm from '../composables/inscriptionFormData'

// const {
//   data
// } = useForm();

export default {
  name: 'BandeauInscription',
  props: {
    step: Number,
  },
  computed: {
    getLoggedInStatus: function () {
      return this.$store.getters.getLoggedInStatus
      // console.log("status dans App : ", this.$store.state.status)
      // if (this.$store.state.status === "logged in") {
      //   return true
      // } else {
      //   return false
      // }
    },
    getToken: function () {
      return this.$store.getters.getToken
    }
  },
  mounted() {
    // console.log("APP. dans mounted : ", this.$store.state.status)
    // if (this.$store.state.status === "logged in") {
    //   this.loggedIn = true;
    // } else {
    //   this.loggedIn = false;
    // }

  },

  data() {
    return {
      titles: ["Entreprise", "Contact DSN", "Salarié", "Contrat", "Profil"]
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bandeau-menu-gauche {
  width: 250px;
  height: 100vh;
  background-color: #42b983;
  position: absolute;
  top: 70px;
  color: white;
  font-weight: bolder;
  font-size: 20px;
}
.intitule {
  margin: 10px;
  padding: 30px;
}
.selected {
  border: thick double white ;
}
.form {
  margin-top: 150px;
}

</style>
