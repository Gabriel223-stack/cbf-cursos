const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]

cursos.map((el, chave) => {
    const novoElemento = document.createElement("div") 
    novoElemento.setAttribute("id", `c${chave}`)
    novoElemento.setAttribute("class","curso c1") 
    novoElemento.innerHTML = el

    const btn_lixeira = document.createElement("img")
    btn_lixeira.setAttribute("src", "image/icone-lixeira.png") // CRIAMOS O ELEMENTO
    btn_lixeira.setAttribute("class", "btn_lixeira")
    btn_lixeira.addEventListener("click", (evt) => {
        //console.log(evt.target.parentNode) TESTANDO PRA VER QUAL É O PARENTE DO BTN LIXEIRA.
        caixa1.removeChild(evt.target.parentNode)
    })
    
    /* novoElemento.appendChild(btn_lixeira) // FAZENDO ISSO VAI FIXAR O ELEMENTO CRIADO NO ELEMENTO FILHO
        
    novoElemento.addEventListener("click", (evt) => {
        //console.log(evt.target) TESTE
        caixa1.removeChild(evt.target) // PEGOU O PAI, E DEPOIS SELECIONOU A OPÇÃO REMOVE DO JAVASCRIPT

    })
    */
    novoElemento.appendChild(btn_lixeira)
    caixa1.appendChild(novoElemento) 
})
