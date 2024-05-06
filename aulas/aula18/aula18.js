let n = 0
let max = 1000
let pares = 0

for (let i = n; i < max; i++) {
    if (i % 2 !== 0) //SE TORNOU IMPAR
    {
        continue //NÃO EXECUTA, E PULA PARA TESTAR A PRÓXIMA
    }
    pares++
}
console.log(`Quantidade de pares: ${pares}`)
console.log(`Fim do programa`)

/*
while (n < max) {
    console.log(`CFB Cursos ${n}`)
    if (n > 10) {
        break // PARA O PROGRAMA QUANDO O 'N' FOR MAIOR DO QUE '10'
    }
    n++
}
*/
// console.log('Fim do programa')