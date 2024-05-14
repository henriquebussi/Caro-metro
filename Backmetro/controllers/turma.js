const Turmas = require('../models/turmas');
exports.getAll = async (req, res) => {
    const turmas = await Turmas.findAll();
    res.json(turmas)
};

exports.getById = async (req, res) => {
    const idDoParamTur = req.params.id;
    const turmaEncontrada = await  Turmas.findOne({idTurmas: idDoParamTur});
    res.json(turmaEncontrada)
};

exports.createTurma = async (req, res) => {
    const turmasCadastrado = await Turmas.findOne({ where: {codigo : req.body.codigo}});
    if (turmasCadastrado) {
        return res.send('Já existe uma turma cadastrada neste codigo, viadinho.')
    }
    const turmaCriada = await Turmas.create(req.body);
    console.log("turmaCriada", turmaCriada);
    return res.send("Deu certo")
};

exports.updateController = async (req, res) => {
    const codigoTurma = req.params.codigo;
    try{
        const turmaCadastrada = await Turmas.findOne({where: {codigo: codigoTurma}})

        console.log('Aqui', turmaCadastrada);
        if(turmaCadastrada) {
            delete req.body.codigo; // esta ai para deletar a requisição antes mesmo que chegue

            const [numRowsUpdate] = await Turmas.update(req.body, { // esta chamando um array
                where: {codigo: codigoTurma}
            });

            if (numRowsUpdate > 0) {
                const turmaAtualizada = await Turmas.findOne({where: {
                    codigo: codigoTurma
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