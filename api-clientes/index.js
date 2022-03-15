const express =  require('express')
const app = express()
let clientes = [
    {id: 1, nome: 'José da Silva', cpf: '123.456.789-00', status: 'ativo'},
    {id: 2, nome: 'Maria da Silva', cpf: '987.654.321-00', status: 'ativo'}
]

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('<h1>Bem Vindo(a)!<h1>')
})

app.get('/clientes', (req, res) => {
    res.status(200).json(clientes)
})

app.post('/clientes', (req, res) => {
    clientes.push(req.body)
    res.status(201).send()
})

app.get('/clientes/:id', (req, res) => {
    const clienteId = req.params.id
    const cliente = clientes.find(cliente => cliente.id == clienteId) 
    res.status(200).json(cliente)
})

app.put('/clientes/:id', (req, res) => {
    const clienteId = req.params.id
    const clienteIndex = clientes.findIndex(cliente => cliente.id == clienteId) // 2
    clientes[clienteIndex] = req.body
    res.status(200).send()
})

app.delete('/clientes/:id', (req, res) => {
    const clienteId = req.params.id
    clientes = clientes.filter(cliente => cliente.id != clienteId)
    res.status(204).send()
})

app.listen(3000, () => {
    console.log('API rodando na porta 3000')
})