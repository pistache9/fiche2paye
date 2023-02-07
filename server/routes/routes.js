import express from "express";
const router = express.Router();

// import { getHome, postHome } from "../controllers/home.js";
// import { postLogin, getLogin } from "../controllers/logingIn.js";
// import { getDashboard } from "../controllers/dashboard.js";

import { createUser, loginUser, addCompany } from "../controllers/user.js";


const checkSession = (req, res, next) => {
    console.log("DANS SESSION CHECKING:", req.session)
    if (!req.session || !req.session?.user) {
        return res.redirect('/connexion');
    }
    next();
}


router.post("/inscription", createUser);
router.post("/connexion", loginUser);
router.post("/add_company", addCompany);

router.get("http://localhost:8080/#/connexion", connexion);

function connexion(req,res) {
    checkSession();
    console.log("REDICTION .....")
    // res.render("Connexion.vue")
    // res.redirect("http://localhost:8080/#/connexion")
}


// router.get("/dashboard", authGuard, getDashboard);

// router.post("/books", booksController);
// router.get("/books", authGuard, booksController);
// router.post("/getGain", authGuard, GainController);

export default router;

