const { Usuario, Endereco } = require('../models')
module.exports = (app) => {
    const getUsuario =  async (req, res) => {
        try {
            const users = await Usuario.findAll({
                include: {
                    model: Endereco
                }
            })
            res.status(200).json(users)
        }
        catch(err) {
            res.status(500).json({error: true, ...err})
        }
    }

    const getUsuarioById = async (req, res) => {
        const userId = req.params.id
        try {
            const user = await Usuario.findOne({
                where: {
                    id_usuario: userId
                }
            })
            if(!user) {
                throw new Error()
            }
            res.status(200).json(user)
        }
        catch(err) {
            res.status(400).json({err:true, msg: 'Usuário não encontrado!'})
        }
    }

    return {getUsuario, getUsuarioById}
}