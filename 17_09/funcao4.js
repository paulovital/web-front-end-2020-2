function Pessoa() {
    this.nome = "Viviane"
    setInterval(() => {
        console.log(this.nome)
    }, 1000)
}

new Pessoa