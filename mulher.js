const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json ({
        nome: "Ada Lovelace",
        imagem: "https://pt.wikipedia.org/wiki/Ficheiro:Ada_lovelace.jpg",
        minibio: "Revolucionária no campo das ciências exatas, reconhecida como a primeira programadora, inventora do primeiro algoritmo processado por uma máquina"
    })
}

function mostraPorta () {
    console.log ("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)