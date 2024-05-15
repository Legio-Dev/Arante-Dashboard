const readLine = require('readline-sync');

let flag = false;

while (!flag) {
    const text1 = readLine.question('escribe el texto que deseas insertar: ');
    console.log('texto a insertar',text1);
    console.log('enviando texto... ');
    const text2 = readLine.questionInt('Escoge una opción \n 1: Insertar otro bloque \n 2: Salir');
    if(text2 != 1) flag = true;
}