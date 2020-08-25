// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);// cria novo array
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.strictEqual(typeof(myRemove), 'function'); // Verificacndo se a função existe

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
let expect = [1, 2, 4];
assert.deepEqual(myRemove([1, 2, 3, 4], 3), expect, 'Não retirou o valor 3');

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
expect = [1, 2, 3, 4];
assert.notEqual(myRemove([1, 2, 3, 4], 3), expect, 'Não retornou [1, 2, 3, 4]');

//Verifique se o array passado por parâmetro não sofreu alterações
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);// não criei variável expect para fixar que pode ser assim
