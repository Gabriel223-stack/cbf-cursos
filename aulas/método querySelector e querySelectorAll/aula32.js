const divTodas = [...document.getElementsByTagName("div")]
const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementById("c1")
/*
const query_divTodas = document.querySelector("div") PEGARÁ SOMENTE UM, E SERÁ A PRIMEIRA
*/

const query_divFilhoTodos = [...document.querySelectorAll("div > p")]
//const query_divClass = [...document.querySelectorAll("div[class]")]
const query_divTodas = [...document.querySelectorAll("div, p")]
const query_cursosTodos = [...document.querySelectorAll(".curso, p")]

console.log(query_divFilhoTodos)
//console.log(query_divClass)
//console.log(query_divTodas)
//console.log(query_cursosTodos)
/*console.log(divTodas)
console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)*/

/*
cursosC2.map((el) => {
    el.classList.add("destaque") //adicionando cores no class com css direto no arquivo, além disso adiciona a class, possível ver no inspecionar
})
*/