const valores = [7.7, 8.9, 6.3, 9.2] //Array
console.log(valores[0], valores[3]); //Selecionamos itens existentes do array e mostramos no console
console.log(valores[4]); //Mostramos no console uma posição não existente no array

valores[4] = 10 // Adicionamos no array a posição 4
console.log(valores);
console.log(valores.length); //Pedimos a quantidade de itens do array

valores.push({id:3}, false, null, 'teste') // adicionamos coisas ao array pelo .push()
console.log(valores);

console.log(valores.pop()); // Tiramos o último item do array
delete valores[0]; // Deletamos o primeiro valores
console.log(valores);

console.log(typeof valores); // E por fim vimos que os arrays em JavaScript são objetos
