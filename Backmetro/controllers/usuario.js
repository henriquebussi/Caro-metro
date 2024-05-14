const Usuario = require('../models/usuario');
exports.getAll = async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios)
};
exports.getById = async (req, res) => {
  //no router id é o que vem depois do usuario/
  const idDoParam = req.params.id;
  const usuarioEncontrado = await Usuario.findOne({ idUsuarios:idDoParam }); res.json(usuarioEncontrado)
};
exports.createUsuario = async (req, res) => {
  const usuarioCadastrado = await Usuario.findOne({where: {cpf: req.body.cpf} });
  //verificacao duplicidade de usuario cadasrtado
  if (usuarioCadastrado) {
    return res.send('Já existe um usuario cadastrado neste cpf.')
  }
  const usuarioCriado = await Usuario.create(req.body)

  if (usuarioCriado.idUsuarios){
    await UsuariosTurmas.create({
      turmas_idTurmas: req.body.idTurmas,
      Usuarios_idUsuarios: usuarioCriado.idUsuarios
    })
  }
  console.log("usuario Criado", usuarioCriado)
  return res.send("oi")
  //res.json(usuarios)
};

exports.updateUsuario = async (req, res) => {
  const codigoUsuario = req.params.cpf;
  try{
      const Usuarioadastrada = await Usuario.findOne({where: {cpf: codigoUsuario}})

      console.log('Aqui', Usuarioadastrada);
      if(Usuarioadastrada) {
          delete req.body.cpf; // esta ai para deletar a requisição antes mesmo que chegue

          const [numRowsUpdate] = await Usuario.update(req.body, { // esta chamando um array
              where: {cpf: codigoUsuario}
          });

          if (numRowsUpdate > 0) {
              const turmaAtualizada = await Usuario.findOne({where: {
                  cpf: codigoUsuario
              }});
              return res.send({message: 'Turma Atualizada com sucesso', turmacomdadosnovos: turmaAtualizada});
          }
          else{
              return res.send("Turma encontrada, porem com novos dados para atualizar")
          }
      }
      else{
          return res.status(404).send('Não existe uma turma cadastrada com esse codigo')
      }
  } catch{

  }
}