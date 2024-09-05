import{
    atualizarValor,
    setOperation,
    strCompleta,
    executarOperacao,
    limpar,
    colocaVirgula
} from './calculadora.js';

let botoesNumericos = document.querySelectorAll('.TecladoNumerico button');
let botoesOperadores = document.querySelectorAll('.TecladoOperacoes button');
let tela = document.querySelector('.Tela p');

for(let i = 0; i < botoesNumericos.length; i++){
    botoesNumericos[i].addEventListener('click', function(){
        atualizarValor(i + 1);
        tela.textContent = strCompleta;
    });
}
botoesNumericos[9].addEventListener('click', function(){
    atualizarValor(0);
});
botoesOperadores[0].addEventListener('click', function(){
    let retorno = setOperation('+');
    if(retorno){
        tela.textContent = strCompleta;
    }
});
botoesOperadores[1].addEventListener('click', function(){
    let retorno = setOperation('-');
    if(retorno){
        tela.textContent = strCompleta;
    }
});
botoesOperadores[2].addEventListener('click', function(){
    let retorno = setOperation('x');
    if(retorno){
        tela.textContent = strCompleta;
    }
});
botoesOperadores[3].addEventListener('click', function(){
    let retorno = setOperation('/');
    if(retorno){
        tela.textContent = strCompleta;
    }
});
botoesOperadores[4].addEventListener('click', function(){
    executarOperacao();
    tela.textContent = strCompleta;
});
botoesOperadores[5].addEventListener('click', function(){
    limpar();
    tela.textContent = '0';
});
botoesOperadores[6].addEventListener('click', function(){
    colocaVirgula();
    tela.textContent = strCompleta;
});
