/* INICIO
const c1 = document.getElementById("c1")
*/

const cursos = [...document.querySelectorAll(".curso")]

cursos.map((el) => {
    el.addEventListener("click", (evt) => {
        const el = evt.target
        el.classList.add("destaque")
        console.log(`${el.innerHTML} foi clicado`)
    })
})

/*const msg = () => {
    alert('Clicou')
}*/

/* SEGUNDO EXEMPLO
c1.addEventListener("click", () => {
    alert('Clicou')
})
*/

/* CONTINUAÇÃO ABAIXO
c1.addEventListener("click", (evt) => {
    //console.log(evt) DETECTAR O DISPARO DE TARGET
    console.log(evt.target) //Aqui consegue ver o elemento que foi disparado
})*/

c1.addEventListener("click", (evt) => {
    const el = evt.target
    el.classList.add("destaque")
})

