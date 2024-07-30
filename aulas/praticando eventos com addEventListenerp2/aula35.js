const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn_transferirtn = document.querySelector("#btn_transferir")
const todosCursos = [...document.querySelectorAll(".curso")]
const btn2 = document.querySelector("#btn_copiar2")

todosCursos.map((el) => {
    el.addEventListener("click", (evt) => {
        const curso = evt.target
        curso.classList.toggle("selecionado") //É PRA INDICAR QUANDO O ELEMENTO ESTÁ SELECIONADO

    })
})

btn_transferir.addEventListener("click", () => {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]
    cursosSelecionados.map((el) => {
        caixa2.appendChild(el)//ANEXA O FILHO NO CAMPO EM BRANCO
    })
    //console.log(cursosSelecionados)
    cursosNaoSelecionados.map((el) => {
        caixa1.appendChild(el)
    })
})

