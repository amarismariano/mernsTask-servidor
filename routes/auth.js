// Rutas para autenticar usuarios
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require("../middleware/auth");
const authController = require("../controllers/authController");

//Iniciar sesión
// Endpoint api/auth
router.post("/", authController.autenticarUsuario);

//Obtiene el usuario autenticado
router.get("/", auth, authController.usuarioAutenticado);

//Exportamos el router
module.exports = router;
