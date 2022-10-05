const form = document.querySelector('.form-container');
const campoA = document.getElementById('campo1');
const campoB = document.getElementById('campo2');

function menorQue(campoA, campoB) {
    return campoB > campoA;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    var validation = false;

    validation = menorQue(campoA.valueAsNumber, campoB.valueAsNumber);

    const menssagemCerto = `Exato campo B é para o maior número: ${campoB.valueAsNumber}`;
    const mensssagemErro = `o número maior deve estar no campo B!`

    const acerto = document.getElementById('acerto');
    const erro = document.getElementById('erro');
    
    if (validation) {
        acerto.innerHTML = menssagemCerto;
        campoB.style.border = '1px solid #4ebe03';
        campoB.style.color = "#4ebe03";
        acerto.style.display = 'block';
        erro.style.display = 'none';
    } else {
        erro.innerHTML = mensssagemErro;
        erro.style.display = 'block';
        campoA.style.border = '1px solid red';
        campoA.style.color = 'red';
        acerto.style.display = 'none';
    }

    campoA.value = "";
    campoB.value = "";
})


campoA.addEventListener('keyup', function(e){
    var validation = false;

    validation = menorQue(campoA.valueAsNumber, campoB.valueAsNumber);


    const menssagemCerto = `Exato campo B é para o maior número: ${campoB.valueAsNumber}`;
    const mensssagemErro = `o número maior deve estar no campo B!`

    const acerto = document.getElementById('acerto');
    const erro = document.getElementById('erro');


    if(!validation) {
        campoA.style = "";
        campoA.style.border = '1px solid red';
        campoA.style.color = 'red';

        campoB.style = "";
        campoB.style.border = '1px solid red';
        campoB.style.color = 'red';
        acerto.style.display = 'none';
    }else{
        erro.style.display = 'none';
        campoB.style.border = '1px solid #4ebe03'
        campoB.style.color = "#4ebe03";

        campoA.style.border = '1px solid #4ebe03'
        campoA.style.color = "#4ebe03";
    }
})

campoB.addEventListener('keyup', function(e){
    var validation = false;


    const menssagemCerto = `Exato campo B é para o maior número: ${campoB.valueAsNumber}`;
    const mensssagemErro = `o número maior deve estar no campo B!`

    const acerto = document.getElementById('acerto');
    const erro = document.getElementById('erro');

    validation = menorQue(campoA.valueAsNumber, campoB.valueAsNumber);

    if(!validation) {
        campoA.style = "";
        campoA.style.border = '1px solid red';
        campoA.style.color = 'red';

        campoB.style = "";
        campoB.style.border = '1px solid red';
        campoB.style.color = 'red';
        acerto.style.display = 'none';
    }else{
        erro.style.display = 'none';
        campoB.style.border = '1px solid #4ebe03'
        campoB.style.color = "#4ebe03";

        campoA.style.border = '1px solid #4ebe03'
        campoA.style.color = "#4ebe03";
    }
})

