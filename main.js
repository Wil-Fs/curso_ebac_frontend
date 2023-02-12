const Funcionario = function(nome, salario) {
    this.nome = nome;
    var _salario = salario;

    this.setSalario = function(value) {
        if(value != null && value > _salario && typeof value == 'number') {
            _salario = value;
        }else {
            console.log("Valor digitado nulo/inferior ao salario atual ou formato incorreto!");
        }
    }

    this.getSalario = function() {
        return _salario;
    }

    this.aumento = function() {
       const novoSalario = _salario * 1.07;
       _salario = novoSalario;
       console.log(`Salário de ${this.nome} aumentado para ${this.salario}`);
    }
}

const Gerente = function(nome, salario, cargaHoraria) {
    Funcionario.call(this, nome, salario);
    
    this.cargaHoraria = cargaHoraria;

    this.aumento = function() {
       const novoSalario = this.getSalario() * 1.30;
       this.setSalario(novoSalario);
       console.log(`Salário de ${this.nome} aumentado para ${this.getSalario()} R$`);
    }
}

const Estagiario = function(nome, salario, cargaHoraria) {
    Funcionario.call(this, nome, salario);

    this.cargaHoraria = cargaHoraria;

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.02;
        this.setSalario(novoSalario);
        console.log(`Salário de ${this.nome} aumentado para ${this.getSalario()} R$`);
    }
}


const DevPleno = function(nome, salario, cargaHoraria) {
    Funcionario.call(this, nome , salario);

    this.cargaHoraria = cargaHoraria;

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.02;
        this.setSalario(novoSalario);
        console.log(`Salário de ${this.nome} aumentado para ${this.getSalario()} R$`);
    }
}

const funcionario1 = new Gerente("Pietra", 10000, "24Hrs Semanais");
const funcionario2 = new Estagiario("Carlos", 2800, "10Hrs Semanais");
const funcionario3 = new DevPleno("Felix", 6300, "48Hrs Semanais");

console.log(funcionario1);

console.log(`Salário atual de ${funcionario1.nome} ${funcionario1.getSalario()} R$`);

funcionario1.aumento();

console.log(funcionario2);

console.log(`Salário atual de ${funcionario2.nome} ${funcionario2.getSalario()} R$`);

funcionario2.aumento();

console.log(funcionario3);
console.log(`Salário atual de ${funcionario3.nome} ${funcionario3.getSalario()} R$`);

funcionario3.aumento();