const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React']
//OS ELEMENTOS DA COLEÇÃO IRÁ PARA O PRIMEIRO PARAMETRO (EL) O SEGUNDO PARAMETRO É O (INDICE) A POSIÇÃO DENTRO DA COLEÇÃO
/* PRIMEIRO EXEMPLO - ACIMA EXPLICAÇÃO
cursos.map((el, i) => {
    console.log(`Curso: ${el} Posição do curso: ${i}`)
})
*/

/* SEGUNDO EXEMPLO
let c = cursos.map((el, i) => {
    return el
})
console.log(c)
*/

/* TERCEIRO EXEMPLO
let el = document.getElementsByTagName("div")
el = [...el] 
el.map((e, i) => {
    console.log(e.innerHTML) 
    // OU => e.innerHTML = `CBF Cursos`
})
console.log(el) 
*/
/* FOI NECESSÁRIO CRIAR UM (SPREAD) PARA CONSEGUIR MAIS RECURSOS */

/* QUARTO EXEMPLO
const el = document.getElementsByTagName("div")
const val = Array.prototype.map.call(el, ({ innerHTML }) => (innerHTML))
console.log(val)
*/

const converterInt = (e) => parseInt(e)
const dobrar = (e) => e*2
let num = ['1', '2', '3', '4', '5'].map(dobrar) //ou (converterInt)
console.log(num)