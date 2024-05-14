// routes/router.js
//nesse arquivo estarão todas as rotas
//no caso de um proj com muitas rotas é possível quebrar as rotas em mais arquivos
const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuario");
const turmasController = require("../controllers/turma")

//retorna todos usuarios
router.get("/usuario", usuarioController.getAll);
router.get("/usuario/:id", usuarioController.getById);
router.get("/turmas", turmasController.getById)

//cria um usuario passando informação no body
router.post("/usuario", usuarioController.createUsuario);
router.post("/turmas", turmasController.createTurma)

//INSERIR OUTRAS ROTAS -->
router.get('/turmas', turmasController.getAll)
router.get('/turmas/:id', turmasController.getById)

router.put('/turmas/:codigo', turmasController.updateController);
router.put('/usuario/:cpf', usuarioController.updateUsuario)

/* router.get('/turmas', turmas Controller.getAll)
router.get('/turmas/:id', turmasController.getById) */
/* router.get('/usuario', usuarioController.listarUsuarios) */

module.exports = router;
