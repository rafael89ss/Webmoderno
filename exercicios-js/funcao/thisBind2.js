function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)

 /*   setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) */    
}

new Pessoa