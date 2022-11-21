const readLine = require('prompt-sync')();

function gerarNumero() {
        let x = parseInt(Math.random() * 1000);
        return x;
    }

    function verificarNumero() {
        let x = gerarNumero();
        let msg = '';
        console.log('Número escolhido. ')
        for (let tentativa = 1; tentativa <=10 && msg != 'Ganhou!'; tentativa++) {
            console.log(('Escolha um número. Tentativa ' + tentativa));
            let numero = Number(readLine());
            if (numero == x) {
                msg = 'Ganhou!';
                console.log(msg);
            }
            else if(numero < x) {
                msg = 'Maior';
                console.log(msg);
            }
            else if(numero > x) {
                msg = 'Menor';
                console.log(msg);
            }
            if(tentativa == 10 && numero != x){
                console.log('Perdeu!')
                console.log('O número era ' + x);
            }
        }
    }

function main() {
    try {
    console.log('Adivinhe o número! Você tem 10 tentativas.');
    console.log('Sorteando...');
    verificarNumero();
    }
    catch (err) {
        console.log('erro')
    }

}

main();