function soma(...valores) {
    //let tam = valores.length
    let res = 0
    /*for (let i = 0; i < tam; i++) {
        res += valores[i]
    }
    */
    for (let v of valores) {
        res += v
    }
    return res
}

console.log(soma(10, 10)) //FICA RECEBENDO E SOMANDO VALORES