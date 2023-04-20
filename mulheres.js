const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: "Ada Lovelace",
        imagem: "https://pt.wikipedia.org/wiki/Ficheiro:Ada_lovelace.jpg",
        minibio: "Revolucionária no campo das ciências exatas, reconhecida como a primeira programadora, inventora do primeiro algoritmo processado por uma máquina"
    },
    {
        nome: "Carol Shaw",
        imagem: "https://clubedovideogame.com.br/wp-content/uploads/2022/09/carol-shaw-premios.jpg",
        minibio: " Ela é considerada a primeira mulher que começou a trabalhar com o desenvolvimento de jogos digitais."
    },
    {
        nome:"Frances Allen",
        imagem:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Allen_mg_2528-3750K-b.jpg/200px-Allen_mg_2528-3750K-b.jpg",
        minibio:"O setor em que se destacou foi o de otimização de compiladores. Com as suas descobertas, foi possível criar sistemas de aperfeiçoamento de códigos e de computação paralela."
            }
]

function mostraMulheres (resquest, response) {
    response.json(mulheres)
}

function mostraPorta () {
    console.log ("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)