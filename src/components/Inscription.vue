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

          <label for="confirm_password">Confirmation du mot de passe :</label>
          <input type="password" id="confirm_password" name="confirm_password" required><br><br>

          <button v-on:click="subscribe" type="button" value="S'inscrire">S'inscrire</button>
        </form>
      </div>
  </div>
</template>

<script>
import UserModel from "../Models/User.js";
import axios from "axios";

export default {
  name: 'Inscription',
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
    async subscribe() {
      this.errors = [];
      console.log(this.form)
      for (const item in this.form) {
        if(this.form[item].length === 0) { // définir conditions password ici
          this.errors.push('Le champ' + item + 'est vide !');
        }
      }
      if (this.errors.length === 0) {
        axios.post('http://localhost:8000/inscription', {
          email: this.form.email,
          password: this.form.password
        })
        .then(() => {
          this.$router.push("/connexion");
          // window.location.href = response.data.frontPath;
        })
        .catch(function (error) {
          console.log(error);
        });

        // console.log(await UserModel.find({}));
        // console.log("ENVOIE DATA");
        // console.log(this.form)
        // const result = await this.checkIfMailAllreadyExists(this.form.email);

        // if (result?.email === this.form.email) {
        //   this.errors.push('Le mail est déjà utilisé !')
        //   return
        // }

        // const user = await this.createUser(this.form);
        // console.log("NEW USER: ", user);



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
