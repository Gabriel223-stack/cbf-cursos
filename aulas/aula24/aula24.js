/*const soma = function (v1, v2) {
    return v1 + v2
}*/

const somas = (v1, v2) => { //OBRIGATORIO (RETURN e CHAVES) QUANDO FOR MAIS COMPLEXO
    let res = v1 + v2
    return res
}
console.log(somas(10, 20))

const soma = (v1, v2) => { return v1 + v2 } // (=>) PASSA PARAMETROS

console.log(soma(10, 5))

const nome = n => { return n }

console.log(nome('Bruno'))

const add = n => n + 10  //NÃO PRECISA DE RETURN EM OPERAÇÕES SIMPLES

console.log(add(10))

