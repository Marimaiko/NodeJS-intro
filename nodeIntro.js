// var readlineSync = require('readline-sync');
// // Wait for user's response.
// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
 
// // Handle the secret text (e.g. password).
// var favFood = readlineSync.question('What is your favorite food? ', {
//   hideEchoBack: true // The typed text on screen is hidden by `*` (default).
// });
// console.log('Oh, ' + userName + ' loves ' + favFood + '!');
// console.log('Hiiii')

let readlineSync=require('readline-sync');
let valor1=readlineSync.questionFloat('Insira o primeiro número: ')
let valor2=readlineSync.questionFloat('Insira o segundo número: ')

if (valor1>valor2)
{
    console.log('O primeiro número é maio que o segundo ');
}
else if(valor2>valor1)
{
    console.log('O segundo número é maior que o primeiro');
}
else if (valor1===valor2)
{
    console.log('Os números são iguais')
}