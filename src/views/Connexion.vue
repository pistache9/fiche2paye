<template>
  <div class="bg">
      <div class="sub-form">
        <!-- <div>{{form}}</div> -->
        <ul class="flex">
          <li v-for="error in errors" v-bind:key="error" class="red-alert box">{{error}}</li>
        </ul>
        <form>
          <label for="mail">Email :</label>
          <input v-model="form.email" type="email" id="email" name="email" placeholder="Votre email" required><br><br>

          <label for="password">Mot de passe :</label>
          <input v-model="form.password" type="password" id="password" name="password" required><br><br>

          <button v-on:click="login" type="button" value="S'inscrire">Se connecter</button>
        </form>
      </div>
  </div>
</template>

<script>
import UserModel from "../Models/User.js";

export default {
  name: 'Connexion',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      errors: [],
    }
  },
  methods: {
    async login() {
      this.errors = [];
      console.log(this.form)
      for (const item in this.form) {
        if(this.form[item].length === 0) { // définir conditions password ici
          this.errors.push('Le champ ' + item + ' est vide !');
        }
      }
      if (this.errors.length === 0) {
        console.log("ENVOIE DATA")
        // CHECK DANS LA DATABASE ET FETCH LES DATA
        // const user = await this.findOne(this.email);
        const user = { email: this.form.email, user_id: 773, token: "token_19383jfjf898", entreprises: [{nom_entreprise: "Google", salaries: [{nom: "Marc", ville: "Toulouse"}, {nom: "Sabrina", ville: "Lyon"}]}] }
        if (!user) {
            this.errors.push('Connexion échouée')
            return;
        }
        await this.$store.dispatch("login", {user})
        this.$router.push("/dashboard");
        // req.session.email = user.email;
        // res.render("login", {user: userData});
        // return;
      }
    },


    async checkIfMailAllreadyExists(email) {
      console.log(UserModel)
      console.log(email)
      // return await UserModel.findOne({email: email});
    },

    async createUser(user) {
      console.log(user)
      // return await UserModel.create({email: user.email, password: user.password});
    },
  },
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

</style>
