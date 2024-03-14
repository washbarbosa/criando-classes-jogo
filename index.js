//aqui eu defini uma classe com os parametros de nome, nivel, tipo e arma

class heroi{
    constructor(nome,nivel,tipo,arma){
        this.nome = nome,
        this.nivel = nivel,
        this.tipo = tipo,
        this.arma = arma
    }

//puxei o log para mandar a mensagem de saída com os dados do herói

escrever() {
    console.log(`O ${this.tipo} ${this.nome} de nível ${this.nivel} atacou usando ${this.arma}`);
    }
}

// criei um novo objeto dentro da classe heroi para instanciar tudo

let heroi1 = new heroi("Harry", "20", "Guerreiro", "espada");
let heroi2 = new heroi("Tacana", "23", "Maga", "magia");
let heroi3 = new heroi("Budy", "25", "Monge", "artes marciais");
let heroi4 = new heroi("Naruto", "30", "Ninja", "shuriken");

// e aqui chamei os métodos para imprimir as saídas com os dados de cada herói

heroi1.escrever();
heroi2.escrever();
heroi3.escrever();
heroi4.escrever();