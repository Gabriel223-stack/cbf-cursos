const objs = document.getElementsByTagName('div')

let num = [10, 20, 30, 40, 50]

for (o of objs) {
    console.log(o.innerHTML = 'Curso') // INTERA DIRETAMENTE, PEGAR OS ELEMENTOS 
}

for (o in objs) { 
    console.log(objs[o].innerHTML) // PEGAR AS POSIÇÕES
}
/*
for (let i = 0; i < num.length; i++) {
    console.log(num[i]) imprime os elementos. lembrando que em array os elementos estão em posições (10 = 0, 20 = 1, 30 = 2, 40 = 3)
}
*/