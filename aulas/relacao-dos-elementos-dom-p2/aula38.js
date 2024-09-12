const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')

console.log(c1_2.parentNode.parentNode.children[3]) // Aqui fiz uma busca do elemento pai do pai e depois pegando o elemento filho definindo a posíção dele.

/*
console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)

console.log(btn_c[0].children.length > 0 ? 'Possui filhos':'NÃO possui filhos')

console.log(caixa1.children[1].innerHTML = 'TESTE')
*/
//console.log(caixa1.firstElementChild)
//console.log(caixa1.lastElementChild)
//console.log(caixa1.children)