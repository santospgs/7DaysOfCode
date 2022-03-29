//  DESAFIO 7DaysOfCode - Desafio 7
//  Criação de uma calculadora com as operações básicas

function perguntar(){
    var operacao = prompt('Qual operação você que realizar\n1:soma | 2:subtração | 3:multiplicação | 4:divisão\nOu digite 5 pra sair. ');
    verificar(operacao.toUpperCase());
}

perguntar();

function verificar(op){

    if (isNaN(op) || op <= 0 || op > 5 || op == ''){
        alert('Digite uma opção válida.');
        perguntar();
    } else if (op == 5){
        return;
    } else {
        var n1 = parseInt(prompt('Digite o primeiro número'));
        while (isNaN(n1)){
            alert('Digite um numero.')
            var n1 = parseInt(prompt('Digite o primeiro número'));
        }
        var n2 = parseInt(prompt('Digite o segundo número'));
        while (isNaN(n2)){
            alert('Digite um numero.')
            var n2 = parseInt(prompt('Digite o segundo número'));
        }        
        calcular(op,n1,n2);                             
    }
}

function calcular(op,n1,n2){
    switch(op){
        case "1":
            alert(`O resultado de ${n1} + ${n2} = ${n1 + n2}`);
            break;
        case "2":
            alert(`O resultado de ${n1} - ${n2} = ${n1 - n2}`);
            break;
        case "3":
            alert(`O resultado de ${n1} * ${n2} = ${n1 * n2}`);
            break;
        case "4":    
            if (n2 == 0){
                alert('Impossível dividir por ZERO!');     
            } else {
                alert(`O resultado de ${n1} / ${n2} = ${n1 / n2}`);
            }
            break;      
    }    
    perguntar();
}