const soma = (...valores) => { //FUNÇÃO PARAMETRIZADA COM REST, SPREAD E ARROW FUNCTION, ALÉM DISSO FOR OF
            const somar = val => {
            let res = 0
            for (v of val) 
            res += v
            return res
            }
return somar(valores) //O RETURN VOLTA O RESULTADO PARA SOMA E FAZ A IMPRESSÃO COM O VALOR DO RESULTADO
}

console.log(soma(10, 5))

/* EXPLICAÇÃO
CONSOLE.LOG CHAMOU A FUNÇÃO 'SOMA'; PARAMETROS ESTÁ ENTRANDO DENTRO DO PARAMETRO SOMA (...REST) E (SPREAD ESPALHOU OS VALORES DENTRO DO PARAMENTRO); DENTRO DO SOMA CRIAMOS OUTRA FUNÇÃO SOMAR, ONDE SOMAR RECEBE UM PARAMETRO 'VAL' PERCORRENDO COLEÇÃO DE VALORES COM 'FOR OF'; E QUANDO CHAMAMOS A FUNÇÃO SOMAR PASSAMOS OS 'VALORES' PARA ELA; E CADA VALOR DO ARRAY FOI PARA O 'V' E SOMA COM O VALOR DE 'RES' QUE É ZERO E DEPOIS O 5 VEM E O 'V' TORNASSE 5 E SOMA COM 'RES', ONDE O VALOR É 10, OU SEJA, O VALOR SERÁ 15.
*/

/*
const somar = val => {
    let res = 0
    for (v of val)
        res += v
        return res
}

const soma = (...valores) => {
    return somar(valores)
}
valor = [10, 5, 15]
console.log(soma(...valor))
*/