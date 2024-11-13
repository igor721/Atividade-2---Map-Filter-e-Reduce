let lista_numeros = [
    [1,2,3,4,5],
    [6,7,8,9,10],
];

let listC = lista_numeros.flat(2).reduce((acumulador, number) => {
    console.log(acumulador);
    console.log(number);
    acumulador = acumulador + number;
}, 0);
console.log(listC);