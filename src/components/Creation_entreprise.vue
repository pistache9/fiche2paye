<template>
  <div>
    <BandeauInscription :step="formStep"/>
    <div class="form">
      <!-- id : {{this.userId}} -->
      <!-- <div v-bind:formData="data">ici les data saved?</div>
      <div :v-model="props.formData.entreprise"></div> -->
      <form>
          <div v-if="formStep == 1">
            <div v-for="champ in champs1" :key="champ" class="flex vertical">
              <div class="flex">
                <label :for="champ[1]" class="label">{{champ[0]}}</label>
                <input type="text" :id="champ[1]" :name="champ[1]" v-model="champ[2]" class="input"><br><br>
              </div>
            </div>
          </div>
          <div v-if="formStep == 2">
            <div v-for="champ in champs2" :key="champ" class="flex vertical">
              <div class="flex">
                <label :for="champ[1]" class="label">{{champ[0]}}</label>
                <div v-if="champ.length === 4">
                  <select :id="champ[1]" :name="champ[1]" class="input">
                    <option v-for="val in champ[3]" :key="val">{{val}}</option>
                  </select>
                </div>
                <input v-else type="text" :id="champ[1]" :name="champ[1]" v-model="champ[2]" class="input"><br><br>
              </div>
            </div>
          </div>
          <div v-if="formStep == 5">
          </div>
          <button @click.prevent="goToPreviousStep" v-if="formStep > 1" class="center-button">Précédent</button>
          <button v-if="formStep < 5" @click.prevent="goToNextStep" class="center-button">Suivant</button>
          <button v-else @click.prevent="validateCompanyData" class="center-button validate">Valider</button>
          <!-- <div v-for="champ in champs1" :key="champ">
            {{champ[1]}} : {{champ[2]}}
          </div>
          <div v-for="champ in champs2" :key="champ">
            {{champ[1]}} : {{champ[2]}}
          </div> -->

      </form>

    </div>
  </div>

</template>

<script>

import BandeauInscription from './Bandeau_inscription';
import axios from 'axios';

export default {
  name: 'Creation_entreprise',
  props: {
    step: Number,
  },
  components: {
    BandeauInscription,
  },
  data() {
    return {
      formStep: 1,

      companyData: {},

      // nom_entreprise: 'toto',
      // adresse: 'ici',
      // code_postal: '',
      // ville: '',
      // telephone: '',
      // email: '',
      // siren: '',
      // nic_siege: '',
      // code_apen: '',

      champs1: [["Nom de l'entreprise :","nom_entreprise", this.nom_entreprise],
        ["Adresse :", "adresse", this.adresse], ["Code postal:", "code_postal", this.code_postal],
        ["Ville :", "ville", this.ville], ["Téléphone :", "telephone", this.telephone], ["Email :", "email", this.email],
        ["SIREN :", "siren", this.siren], ["NIC de siège :", "nic_siege", this.nic_siege], ["Code APEN :", "code_apen", this.code_apen]
      ],
      champs2: [["Code civilité :", "code_civilite", this.code_civilite, ["Homme", "Femme"]], ["Nom et prénom de la personne à contacter :", "nom_contact", this.nom_contact],
        ["Email du contact émetteur :", "email_contact", this.email_contact], ["Téléphone du contact :", "telephone_contact", this.telephone_contact],
        ["Fax du contact :", "fax_contact", this.fax_contact]],
    }
  },
  computed: {
    getEmail: function () {
      return this.$store.getters.getEmail
    },
  },
  methods: {
    goToNextStep() {
      if (this.formStep == 1) {
        for (const champ of this.champs1) {
          this.companyData[champ[1]] = champ[2];
        }
      }
      this.formStep += 1;
    },
    goToPreviousStep() {
      this.formStep -= 1;

    },
    validateCompanyData() {
        alert("inscription validée !!!");
        console.log("companyData", this.companyData);
        console.log(this.getEmail)
        axios.post('http://localhost:8000/add_company', { companyData : this.companyData, email: this.getEmail })
        .then((response) => {
          console.log("maj", response.data)
          this.$store.dispatch("setUser", response.data.user)
          this.$router.push('/entreprises');
          // this.$router.push("/connexion");
        })
        .catch((error) => {
          console.log(error);
        });

        // this.login();
    },

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
.flex {
  display: flex;
  justify-content: center;
}
.vertical {
  flex-direction: column;
}
.label {
  width: 200px;
  height: 50px;
  /* border: 1px solid black; */
  align-items:center;
  justify-content: center;
}
.input {
  width: 300px;
  height: 30px;
  text-align: center;
}
.center-button {
  width: 100px;
  height: 30px;
  font-size: 16px;
  margin: 20px;
  background-color: #42b983;
  color: white;
  border: none;
  box-shadow: 1px 1px 4px 1px #20764f;
}
.center-button:hover {
  background-color: #20764f;
}
button:hover {
  cursor: pointer;
}
.validate {
  background-color: rgb(0, 132, 255);
}
.validate:hover {
  background-color: rgb(0, 68, 255);
}

</style>
