module.exports = (app) => {

    app.get('/users', app.api.usuario.getUsuario)
    app.get('/users/:id', app.api.usuario.getUsuarioById)
    
    app.post('/users', async (req, res) => {
        const { nome, email, senha } = req.body
        try {
            if(!nome || !email || !senha) throw new Error('Nome, email e senha devem ser enviados!!')
            await Usuario.create({nome, email, senha})
            res.status(201).json({msg: 'Usuário criado com sucesso!'})
        }
        catch(err) {
            res.status(400).json({error: true, err})
        }
    })
    
    app.put('/users/:id', async (req, res) => {
        const userId = req.params.id
        const {nome, email, senha} = req.body
        try {
            await Usuario.update(
                {nome, emaiL, senha},
                {where: {id_usuario: userId}}
            )
            res.status(200).json({msg: "Usuário atualizado com sucesso!"})
        }
        catch(err) {
            res.status(400).json({msg: "Usuário não foi atualizado, verifique os campos e tente novamente!", error: true})
        }
    })
    
    app.delete('/users/:id', async (req, res) => {
        const userId = req.params.id
        try {
            await Usuario.destroy({
                where: {id_usuario: userId}
            })
            res.status(204).send()
        }
        catch(err) {
            res.status(400).json({error: true, msg: "Usuário não encontrado!"})
        }
    })
    
    app.get('/books', async (req, res) => {
        try {
            const books = await Livro.findAll()
            res.status(200).json(books)
        }
        catch(err) {
            res.status(500).json({error: true, ...err})
        }
    })
    
    app.get('/books/release/:year', async (req, res) => {
        const year = req.params.year
        try {
            const books = await Livro.findAll({
                where: {
                    ano: {
                        [Op.gte]: year
                    }
                }
            })
            res.status(200).json(books)
        }
        catch(err) {
            res.status(500).json({error: true, ...err})
        }
    })
    
    app.post('/books', async (req, res) => {
        const { titulo, ano, editora, autor, quantidade_paginas } = req.body
        try {
            await Livro.create({titulo, ano, editora, autor, quantidade_paginas})
            res.status(201).json({msg: 'Livro cadastrado com sucesso!'})
        }
        catch(err) {
            res.status(400).json({error: true, msg: 'Todos os dados devem ser corretamente preenchidos!'})
        }
    })
    
    app.post('/books/bulk', async (req, res) => {
        const books = req.body
        try {
            await Livro.bulkCreate(books)
            res.status(201).json({msg: "Livros cadastrados com sucesso!"})
        }
        catch(err) {
            console.log(err)
            res.status(400).json({error: true, msg: 'Não foi possivel cadastrar os livros'})
        }
    })
}