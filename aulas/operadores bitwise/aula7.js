/* let n1 = 10
let n2 = 11


let res = n1 ^ n2

console.log(res)
*/               /* & 1010 = 10 1011 = 11
                      1011
                      1010 = 10  EQUIVALÊNCIA DE NUMEROS IGUAIS REPETEM, MAS SE FOR DIFERENTE O RESULTADO É ZERO 0*/

                    /* | 1010 = 10 1011 = 11
                         1011
                         1011 = 11  EQUIVALÊNCIA DE NUMEROS IGUAIS REPETEM, MAS SE FOR DIFERENTE O RESULTADO É 1*/

let n1 = 30

let res = n1 << 2 // QUANTIDADE DE BITS QUE VÃO SER DESLOCADOS COM O COMANDO << E >>

console.log(res)

    /* EXEMPLO DE DESLOCAMENTO 
    0001010 = 10
    0010100 = 20 -> DESLOCAMENTO REALIZADO PARA ESQUERDA (<<), PEGA UM ZERO E TRAS PRA O FIM. E TAMBÉM CONSEGUE DOBRAR O VALOR.
    */

    /* EXEMPLO DE DESLOCAMENTO 
    11110 = 30
    1111 = 15 -> DESLOCAMENTO REALIZADO PARA DIREITA (>>), PEGA UM NUMERO DO FINAL E MATA, TIRA.
    */