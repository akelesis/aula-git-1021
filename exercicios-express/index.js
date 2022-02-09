const express = require('express');
const app = express();

console.log(express.Router())

const series = [
    {
        id: 1,
        nome: 'Irmão do Jorel'
      },
      {
        id: 2,
        nome: 'Um maluco no pedaço'
      }
]


app.get('/serie/:id', (req, res) => {
    const serieId = req.params.id
    const serie = series.find(serie => serie.id == serieId)
    res.status(200).send(serie)
})

app.listen(3000, () => {
    console.log('Servidor Executando!!')
})