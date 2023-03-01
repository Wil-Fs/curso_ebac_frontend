const alunos = ["Will", "Junior", "Ana", "Ligia", "Pedro", "Matheus", "Talita", "Jose", "Pietra"];

const alunosObj = alunos.map((aluno) => {
    return {
        nome: aluno,
        nota: Math.round(Math.random() * 10)
    }
});

console.log(alunosObj);

alunosObj.find((aluno) => {
    if(aluno.nota >= 6) {
        console.log(aluno);
    }
});


