/**Algoritmo 2 */
const letras = [            /**declarando uma lista de strings (letras) com 
                            3 sub-arrays*/
 ['a', 'b', 'c'],
 ['c', 'd', 'f'],
 ['d', 'f', 'g'],
];


let resultado = letras.flat().reduce((objeto, numero) => {      /** Aqui é utilizado o metodo 'flat' 
                                                                conjurado com 'reduce', o flat irá
                                                                "achatar" as sub-strings e o reduce 
                                                                vai reduzir o tamanho do array.*/
 if (objeto[numero]) {
   objeto[numero] += 1;
 } else {
   objeto[numero] = 1;
 }
 return objeto;
}, {});
                                                /**o retorno desta comparação, vai ser um objeto 
                                                 * com todas as letras juntamente com a quantidade 
                                                 * de vezes em que elas se repetem dentro dos sub-arrays
                                                */