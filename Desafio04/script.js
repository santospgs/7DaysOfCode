

var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 0;

function verificaNumero(){

    var campoUsuario = document.getElementById('numUsuario');
    var elementoResultado = document.getElementById('resultado');
    var chute = parseInt(campoUsuario.value);

    if(isNaN(chute)){
        elementoResultado.innerHTML = 'Campo vazio, digite um número.'
        setTimeout(() => { elementoResultado.innerHTML = ''}, 2000);
        campoUsuario.value = '';
    } else if (chute > 10 || chute < 0){
        elementoResultado.innerHTML = ('Digite um numero de 0 a 10.');
        setTimeout(() => { elementoResultado.innerHTML = ''}, 2000);        
        campoUsuario.value = '';
    } else if (chute == numeroSecreto && tentativas == 0){
        elementoResultado.innerHTML = 'Você acertou de primeira!';
        numeroSecreto = parseInt(Math.random() * 11);        
        campoUsuario.value = '';
    } else if (chute == numeroSecreto){
        tentativas++
        elementoResultado.innerHTML = `Parabens você acertou! Vc tentou ${tentativas} vezes de 3.`; 
        setTimeout(() => { elementoResultado.innerHTML = ''}, 2000);       
        campoUsuario.value = '';
        tentativas = 0;
        numeroSecreto = parseInt(Math.random() * 11);
    } else {
        tentativas++;        
        if(tentativas == 3){
            elementoResultado.innerHTML = 'O numero de tentivas acabou.';
            setTimeout(() => { elementoResultado.innerHTML = ''}, 2000);
            tentativas = 0;
            campoUsuario.value = '';
            numeroSecreto = parseInt(Math.random() * 11);
        } else if (chute < numeroSecreto){
            elementoResultado.innerHTML = 'O seu numero é menor que o numero secreto.';
            setTimeout(() => { elementoResultado.innerHTML = ''}, 2000);
            campoUsuario.value = '';
        } else if (chute > numeroSecreto){
            elementoResultado.innerHTML = 'O seu numero é numero maior que o numero secreto';
            setTimeout(() => { elementoResultado.innerHTML = ''}, 2000);
            campoUsuario.value = '';
        };
    };
};
