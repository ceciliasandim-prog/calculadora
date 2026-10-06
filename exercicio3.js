const readline = require('node:readline/promises');
const {stdin: input, stdout: output } = require('node:process');

async function main() {

    
let acumulador = 0;
let continua = 1;


const rl = readline.createInterface({ input, output });
console.log("@===CALCULADORA DA GATA FOFA===@");

  for (let i = 0; i < 5; i++) { 

const n1 = Number(await (readline.createInterface({ input, output })).question("//DIGITE O PRIMEIRO NUMERO:"));
const operacao = await (readline.createInterface({ input, output })).question("DIGITA A OPERACA(+,-,*,/)");
const n2 = Number(await (readline.createInterface({ input, output })).question("//DIGITE O SEGUNDO NUMERO:"));

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

    const resposta = await rl.question("\nDigite 1 para continuar ou qualquer outra tecla para parar: "); 
    if (continua !== '1') {
      console.log("Saindo da calculadora...");
      break; 
}

 (readline.createInterface({ input, output })).close();
 if (continua !== '1') { continua = 0;}
 }
}
 main();