"use strict"

let nome = "Bruno"
nome = "CBF cursos"
nome = 10

function teste() {
 /* let nome = "Bruno" -> RESPEITA O ESCOPO DE ORDEM */
    if (true) {
    /* var nome = "Bruno" PEGA O ESCOPO SEM UMA ORDEM PRECISA */
        //let nome = "Bruno"
        console.log(`Dentro de IF teste ${nome}`)
    }
    console.log(`Dentro de teste ${nome}`)
}

teste()

console.log(`Dentro de teste ${nome}`)
 
const curso = "Javascript"
curso = "html" //NÃO PODE ALTERAR O VALOR DA VAROÁVEL CONST
console.log(curso)