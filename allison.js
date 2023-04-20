const express = require("express")
const router = express.Router()
var palavra = "i love you! ";

const app = express()
const porta = 3333
var quantidade = 1000

function mostraAllison(resquest,response){
    response.send (palavra.repeat(quantidade));
    }

function mostraPorta () {
    console.log ("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/allison", mostraAllison))
app.listen(porta, mostraPorta)