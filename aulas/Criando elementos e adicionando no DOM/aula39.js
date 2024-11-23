const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]


// "", ESSA SEGUNDA OPÇÃO APONTA PARA O QUE VAI SER INCLUIDO""
cursos.map((el, chave) => {
    const novoElemento = document.createElement("div") //CRIANDO O ELEMENTO
    novoElemento.setAttribute("id", `c${chave}`) // INSERINDO ID
    novoElemento.setAttribute("class","curso c1") // INSERINDO CLASS
    novoElemento.innerHTML = el
    caixa1.appendChild(novoElemento) // CHAMANDO O ELEMENTO CRIADO
})
