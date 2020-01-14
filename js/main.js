var nome = 'Alisson Youssf';
var idade = 42;
var frase = 'Japão é o melhor time do mundo';
console.log(frase.replace('Japão', 'Brasil'));
// alert('My firts JS');
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());

console.log('Arrays');
var lista = ['maçã', 'pêra', 'laranja'];
console.log(lista);

// Tamanho da lista - Length
console.log('O array tem ' + lista.length + ' elementos.');

// Coloca um item a mais na lista
lista.push('uva');
console.log(lista);

// Retira ultimo elemento do array
lista.pop();
console.log(lista);

// Reverse - Reverte a ordem do array
console.log(lista.reverse());

// Array para String
console.log(lista.toString());

// Primeiro elemento da string
console.log(lista.toString()[0]);

console.log(lista.join(" - "));
console.log(lista.join(" | "));
console.log(lista.join(" "));

// Dicionário ------------------
var fruta = { nome: 'maça', cor: 'vermelha' }
console.log(fruta);

var frutas = [
    { nome: 'maçã', cor: 'vermelha' },
    { nome: 'uva', cor: 'roxa' }
]
console.log(frutas);

/////////////////////////
function validaIdade() {
    var validar;
    (idade >= 18) ? validar = true : validar = false;
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
///////////////////////////////

