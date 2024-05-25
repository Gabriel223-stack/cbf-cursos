function aluno(nome, nota) {
    this.nome = nome
    this.nota = nota

    /* SEM ARROW FUNCTION => */
    this.dados_anonimo = function () {
        setTimeout(function () { //TERÁ QUE FORNECER OS VALORES
            this.nome = 'Gabriel'
            this.nota = 100
            console.log(this.nome)
            console.log(this.nota)
        },2000) //SEGUNDOS
    }

    /* COM ARROW FUNCTION */
    this.dados_arrow = function () {
        setTimeout(() => { //NECESSÁRIO PARA PEGAR OS VALORES 
            console.log(this.nome)
            console.log(this.nota)
        },2000) //SEGUNDOS
    }
}

const al1 = new aluno('Bruno', 100)
al1.dados_anonimo()
al1.dados_arrow()
// aluno('Bruno', 100)
