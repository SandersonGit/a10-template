// Array 1
const strings = ["Aragorn", "Legolas", "Gimli"]

// Array 2
const numeros = [1, 2, -3]

// Array 3
const arrayMisto = ["Gandalf", 68, true]

// Array 4
const numeroUnico = [20]

//Array 5
const nula = [] 

// pratica guiada - parte 2
// checando tamanho do array 1

console.log(strings.length);

// imprimindo o item de índice 3
console.log(strings[3]);
console.log(strings[2]);
console.log(strings[1]);
console.log(strings[0]);

// verificando itens do array 3

console.log(arrayMisto.includes(68));
console.log(arrayMisto.includes("Gandalf"));
console.log(arrayMisto.includes(true));
console.log(numeroUnico);
console.log(numeroUnico.length);
console.log(nula.length);
console.log(strings, numeros, arrayMisto, numeroUnico);

console.log(numeroUnico[0]);
console.log(numeroUnico.length);

//cópia do array 1 usando sinal de igual

const copiaString = strings.slice()
console.log(strings);
console.log(copiaString);

copiaString.push("Frodo")
console.log(strings);
console.log(copiaString);

// removendo o índice 2 e 3 da copia

console.log(copiaString);

copiaString.splice(2, 2)
console.log(copiaString);

// rodenando array 1

console.log("Array strings ante da ordenação", strings);
strings.sort()
console.log(strings);

// ordenando o Array 2

console.log(numeros);
numeros.sort()
console.log(numeros);

const numerosCopia = numeros.slice()
numerosCopia.push(4)
console.log(numerosCopia);
numerosCopia.splice(1, 2)
console.log(numeros, numerosCopia);

const copia2String = strings.slice()
copia2String.push("Frodo", "Gandalf", "Sam", "Marry", "Pipin")
console.log(copia2String); 
copia2String.splice(4, 4)
console.log(copia2String);

const numerosCopia2 = numeros.slice()
numerosCopia2.push(8, 10, 15, 22, 5, 133)
console.log(numerosCopia2);
numerosCopia2.sort
console.log(numerosCopia2);
numerosCopia2.sort
console.log(numerosCopia2);
numerosCopia2.splice(4, 5)
console.log(numerosCopia2);

const aleatorio = [3, 15, 48, 72, 458, 55]
console.log("Variavel aleatória", aleatorio);
aleatorio.sort()
console.log("Variável ordenada" ,aleatorio);
aleatorio.reverse()
console.log("Variável invertida" ,aleatorio);
aleatorio.pop()
console.log("Removendo o ultimo índice",aleatorio);
aleatorio.push(6)
console.log("Incluíndo o numero 6", aleatorio);
aleatorio.splice(2, 1)
console.log("Removendo o índice 2", aleatorio);



