const caixa1 = document.querySelector("#caixa1")
const btn_c1 = document.querySelector("#c1")
const cursos = [...document.querySelectorAll(".curso")]

caixa1.addEventListener("click", (evento) => {
     console.log('CLICOU')
})

//Não dá para colocar stopPropagation sem colocar um parâmetro, exemplo (EVENTO)

cursos.map((el) => {
    el.addEventListener("click", (evento) => {
        evento.stopPropagation()
    })
})

//NO CASO EM QUESTÃO ELE PAROU A PROPAGAÇÃO DE DENTRO DA CAIXA, PORÉM SE CLICA NA CAIXA QUE COBRE TODOS OS ITENS PEGA, MAS OS ITENS QUE ESTÃO DENTRO DELA NÃO PROPAGA SE CLICAR

//btn_c1.addEventListener("click", (evento) => {
//    evento.stopPropagation()
//})

