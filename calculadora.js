let valor1 = 0;
let strValorAtual = '';
let strCompleta = '';
let valor2 = 0;
let operacaoEscolhida = null;

function somar() {
    valor1 = valor1 + valor2;
}
function subtrair() {
    valor1 = valor1 - valor2;
}
function multiplicar() {
    valor1 = valor1 * valor2;
}
function dividir() {
    valor1 = valor1 / valor2;
}

function setOperation(charOp){
    if(operacaoEscolhida !== null){
        return false;
    }
    valor1 = parseFloat(strValorAtual);
    strValorAtual = '';
    strCompleta += ' ' + charOp + ' ';
    
    switch(charOp){
        case '+':
            operacaoEscolhida = somar;
            break;
        case '-':
            operacaoEscolhida = subtrair;
            break;
        case 'x':
            operacaoEscolhida = multiplicar;
            break;
        case '/':
            operacaoEscolhida = dividir;
            break;
        default:
            return;
    }
    return true;
}
function atualizarValor(valor){
    console.log(strValorAtual);
    if(strCompleta === '0'){
        strCompleta = '';
    }
    strValorAtual += valor;
    strCompleta += valor;
}
function executarOperacao(){
    if(operacaoEscolhida === null){
        return;
    }

    valor2 = parseFloat(strValorAtual);
    operacaoEscolhida();
    strCompleta = valor1;
    strValorAtual = valor1;
    valor2 = 0;
    operacaoEscolhida = null;
}
function limpar(){
    valor1 = 0;
    strValorAtual = '';
    strCompleta = '';
    valor2 = 0;
    operacaoEscolhida = null;
}
function colocaVirgula(){
    if(strValorAtual === ''){
        strValorAtual = '0';
        strCompleta += '0';
    }
    strValorAtual += '.';
    strCompleta += '.';
}

export{
    atualizarValor,
    setOperation,
    strCompleta,
    executarOperacao,
    limpar,
    colocaVirgula,
}