const button = document.querySelector('#btn');
var line;
var lines = '';

button.addEventListener('click', function () {
    const lista = document.querySelector('#lista-tarefas');
    const inputTarefa = document.querySelector('#tarefa');

    line = '<li>';
    line += `# ${inputTarefa.value}`;
    line += '</li>';
    
    lines += line;

    lista.innerHTML = lines;
    inputTarefa.value = '';
});