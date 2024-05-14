/*
const f = function (...valores) {
    let res = 0
    for (v of valores) {
        res += v
    }
    return res
}

console.log(f(10, 5))
*/

const f = new Function ("v1", "v2", "v3", "return v1 + v2 + v3") //FUNCAO CONSTRUTOR ANONIMA
console.log(f(10, 5, 15))

// new Function (F) maiusculo