const readline = require('node:readline/promises');
const {stdin: input, stdout: output } = require('node:process');

async function main() {

    
let continua = 1;


const rl = readline.createInterface({ input, output });
console.log("@===CALCULADORA DA GATA FOFA===@");

while(continua){ 
   

const n1 = Number(await (readline.createInterface({ input, output })).question("//DIGITE O PRIMEIRO NUMERO: "));
const operacao = await (readline.createInterface({ input, output })).question("DIGITA A OPERACA(+,-,*,/)");
const n2 = Number(await (readline.createInterface({ input, output })).question("//DIGITE O SEGUNDO NUMERO: "));

let resultado;

switch(operacao){
    
    case '+':
        resultado = n1 + n2 ;
    break;

    case '-':
     resultado = n1 - n2 ;
 break;

    case '*':
        resultado = n1 * n2 ;
 break;

    case '/':
        resultado = n1 / n2 ;
 break;


 default:
   
 resultado = "que desgraça é ESSA?"
 }

console.log(`\nResultado: ${n1} ${operacao} ${n2} = ${resultado}`);
        continua = await rl.question("Digite 1 para continuar ou qualquer outra tecla para sair: ");

       if (continua !== '1') { continua = 0;}
        console.log("va tir mora");
            (readline.createInterface({ input, output })).close();
    }


}
main();
