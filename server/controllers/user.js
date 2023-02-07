import UserModel from "../../src/Models/User.js";

// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


export async function createUser (req, res) {
  console.log(req.body);

  console.log("On va créer l'user...")
  const { email, password } = req.body;
  console.log(email, password);
  const user = await UserModel.findOne({email: email})
  console.log(user);
  if (user) {
    console.log("User existe déjà")
  } else {
    console.log("Ok on peut créer le user")

    UserModel.create({ email: email, password: password }, function (err) {
      if (err) return handleError(err);
      console.log("User créé !")
      // saved!
      // res.sendFile(__dirname + "../../src/components/Connexion.vue");
      // res.redirect('connexion')
      res.json({ frontPath: '#/connexion', email: email })


    });

  }
}


export async function loginUser (req, res) {
  console.log(req.body);
  console.log("On va login...")
  const { email, password } = req.body;
  console.log(email, password);
  const user = await UserModel.findOne({email: email})
  if (!user) {
    console.log("User n'existe pas");
    res.json({ frontPath: '#/connexion', error: "Cet utilisateur n'existe pas"})
  } else if (user.password !== password) {
      res.json({ frontPath: '#/connexion', error: "Mot de passe incorrect"})
  } else {
    res.json({ frontPath: '#/dashboard', user: user})
  }
}

export async function addCompany (req, res) {
  console.log("On va ajouter une entreprise...")
  const { email, companyData } = req.body;
  console.log(email, companyData);


  const user = await UserModel.findOne({email: email});
  console.log("user trouvé;", user)
  user.entreprises.push(companyData);
  await user.save();
  console.log("MAKJ", user.entreprises.length)

  if (!user) {
    console.log("User n'existe pas");
    res.json({ frontPath: '#/creation_entreprise', error: "Problème de connexion à la base de données..."})
  } else {
    res.json({ frontPath: '#/entreprises', user: user})
  }
}

// export async function postLogin (req, res) {
//   const { email, password } = req.body;
//   const user = await UserModel.findOne({email});
//   if (password === user?.password) {
//     req.session.user = user;
//     res.redirect("/books");
//   } else {
//     res.redirect("/login");
//     return;
//   }
// }

// export function getLogin(req, res) {
//   res.render('login');
// }
